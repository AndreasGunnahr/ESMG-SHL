require("dotenv").config();

// IMPORT OF PACKAGES & DATABASE
const cron = require("node-cron");
const express = require("express");
const fetch = require("node-fetch");
const redis = require("redis");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const client = redis.createClient(process.env.REDIS_URL || REDIS_PORT);

app.use(express.json());

// SERVE STATIC FILES FROM REACT APP
app.use(express.static(path.join(__dirname, "client/build")));

// FETCH DATA FROM API HOOK
const useFetch = async (slug) => {
  const url = `http://api.eliteprospects.com/v1/${slug}?apiKey=${process.env.API_KEY}&fields=*`;
  const response = await fetch(url);
  const info = await response.json();
  return info;
};

cron.schedule("* * * * *", async () => {
  console.log("CRON UPDATED");
  try {
    const data = await useFetch("leagues/shl/standings");
    client.setex("SHL", 60, JSON.stringify(data));
  } catch (e) {
    console.log(e);
  }
});

// MIDDLEWARE FOR OUR REDIS CACHE
const cache = (req, res, next) => {
  const KEY = req.originalUrl.includes("shl") ? "SHL" : "ABOUT";

  client.get(KEY, (err, data) => {
    if (err) throw err;
    if (data !== null) {
      res.send(JSON.parse(data));
    } else {
      next();
    }
  });
};

// GET ALL SHL INFORMATION FROM ELITEPROSPECT API.
app.get("/api/info/shl", cache, async (req, res) => {
  console.log("FETCHED DATA - SHL");
  try {
    const data = await useFetch("leagues/shl/standings");
    client.setex("SHL", 60, JSON.stringify(data));
    res.status(200).send(data);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

// GET ALL ABOUT ME INFORMATION FROM ELITEPROSPECT API.
app.get("/api/info/about", cache, async (req, res) => {
  console.log("FETCH DATA - ABOUT");
  try {
    const data = await useFetch("players/86245/stats");

    client.setex("ABOUT", 60, JSON.stringify(data));
    res.status(200).send(data);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
