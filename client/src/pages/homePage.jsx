import React, { useMemo } from "react";
import useFetch from "hooks/useFetch";
import { ShlChart } from "components";
import { columnsData } from "../components/ShlChart/data";

const HomePage = () => {
  const { response } = useFetch("/api/info/shl");

  const columns = useMemo(() => columnsData, []);

  return (
    <div>{response && <ShlChart columns={columns} data={response.data} />}</div>
  );
};

export default HomePage;
