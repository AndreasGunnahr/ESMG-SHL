import React, { useMemo } from "react";
import styled from "styled-components";
import useFetch from "hooks/useFetch";
import { AboutChart } from "components";
import { columnsData } from "../components/AboutChart/data";

const Container = styled.div`
  @media (min-width: 500px) {
    padding: 0 1rem;
  }
`;

const HomePage = () => {
  const { response } = useFetch("/api/info/about");

  const columns = useMemo(() => columnsData, []);
  console.log(response);

  return (
    <Container>
      {response && <AboutChart columns={columns} data={response.data} />}
    </Container>
  );
};

export default HomePage;
