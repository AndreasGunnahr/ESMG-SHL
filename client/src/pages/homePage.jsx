import React from "react";
import useFetch from "hooks/useFetch";

const HomePage = () => {
  const { response, error } = useFetch();
  return <div>HOME</div>;
};

export default HomePage;
