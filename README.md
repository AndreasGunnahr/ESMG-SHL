


[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License: MIT][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/andreasgunnahr/ESMG-SHL/">
    <img src="https://github.com/AndreasGunnahr/ESMG-SHL/blob/master/client/src/assets/logo.png" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">ESMG - SHL Table</h3>

  <p align="center">
    An awesome website that shows SHL's -
    <br />
     and my own hockey journey.
    <br />
     <a href="https://esmg-shl.herokuapp.com/">View website</a>
    <br />
    <br />
    ·
    <a href="https://esmg-shl.herokuapp.com/issues">Report Bug</a>
    ·
    <a href="https://esmg-shl.herokuapp.com/issues">Request Feature</a>
  </p>
</p>

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## About The Project

The task was to build a web application that creatively displays a sortable table for SHL. Since many of the company's sites have a lot of traffic, they do not want to make an API call every time the page is displayed. They also do not want a delay once the data has been updated in over 1 minute. Therefore, we needed to build some kind of cache to store and update the data.

A list of used resources that I used during the project is listed in the acknowledgements.

### Built With

Backend - API

- [NodeJS](www.nodejs.org)
- [Express](www.expressjs.com)
- [Redis](www.redis.io)
- [Node-cron](https://www.npmjs.com/package/node-cron)

Deployment

- [Heroku](www.heroku.com)

Frontend

- [React](wwww.reactjs.org)
- [Styled components](www.styled-components.com)

## Overview

Inside the application you can follow statistics on the SHL, but also statistics about my own hockey career.

Built a Redis database that stores our data from the Eliteprospect API. But also added a cache on the backend that allows us to reuse the same data before our cron job retrieves new data from the API every minute.


## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- npm

```sh
npm install npm@latest -g
```

- redis (To run a local redis server)

```sh
npm install redis -g
```

### Installation

1. Clone the repo

```sh
https://github.com/AndreasGunnahr/ESMG-SHL.git
```

3. Install NPM packages for our backend inside the project root folder:

```sh
npm install
```

4. Create a .env file inside root folder with following:

```JS
API_KEY = <ELITEPROSPECT API KEY>
```

5. Cd into client folder & install NPM packages for our react client

```sh
npm install
```

6. Create a .env file inside client folder with following (Absolute path support):

```JS
NODE_PATH = src/
```

7. Create production build of our client (Inside the client folder) :

```sh
npm run build
```

8. Go back to the project root folder and run: 

```sh
npm run dev
```

9.  Project is now proxy running on http://localhost:5000!

10.  Have fun!

## Roadmap

There is of course a lot more I can add to the application, but it feels like this gives a picture of what I can do.

If you have any ideas feel free to [propose a feature](https://github.com/andreasgunnahr/nackademin-todo-app/issues)

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Andreas Gunnahr - [LinkedIn](https://www.linkedin.com/in/andreas-gunnahr-8310a8129/) - Andreas.gunnahr@hotmail.com

Project Link: [https://github.com/andreasgunnahr/esmg-shl/](https://github.com/andreasgunnahr/esmg-shl/)

## Acknowledgements

- [Img Shields](https://shields.io)
- [Font Awesome](https://fontawesome.com)

[contributors-shield]: https://img.shields.io/github/contributors/AndreasGunnahr/esmg-shl.svg?style=flat-square
[contributors-url]: https://github.com/andreasgunnahr/esmg-shl/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AndreasGunnahr/esmg-shl.svg?style=flat-square
[forks-url]: https://github.com/andreasgunnahr/esmg-shl/network/members
[stars-shield]: https://img.shields.io/github/stars/AndreasGunnahr/esmg-shl.svg?style=flat-square
[stars-url]: https://github.com/andreasgunnahr/esmg-shl/stargazers
[issues-shield]: https://img.shields.io/github/issues/AndreasGunnahr/esmg-shl.svg?style=flat-square
[issues-url]: https://github.com/andreasgunnahr/esmg-shl/issues
[license-shield]: https://img.shields.io/badge/License-MIT-yellow.svg
[license-url]: https://opensource.org/licenses/MIT
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/andreas-gunnahr-8310a8129

