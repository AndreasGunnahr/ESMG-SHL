import React, { useMemo } from "react";
import useFetch from "hooks/useFetch";
import { Chart } from "components";
import { columnsData } from "../components/Chart/data";

const HomePage = () => {
  const { response, error } = useFetch();

  const columns = useMemo(() => columnsData, []);

  console.log(response);

  return (
    <div>{response && <Chart columns={columns} data={response.data} />}</div>
  );
};

export default HomePage;
