import React from "react";
import {
  TableContainer,
  Wrapper,
  Title,
  SubTitle,
  TextContainer,
  Img,
} from "./style";
import { useTable } from "react-table";

const AboutChart = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  console.log(data);

  return (
    <>
      <Wrapper>
        <Img />
        <TextContainer>
          <Title>Andreas Gunnahr</Title>
          <SubTitle>Sweden - Oct 17, 1995</SubTitle>
        </TextContainer>
      </Wrapper>
      <TableContainer>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);

              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableContainer>
    </>
  );
};

export default AboutChart;
