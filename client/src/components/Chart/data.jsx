export const columnsData = [
  {
    Header: "Standings 2020-2021",
    columns: [
      {
        Header: "Pos",
        accessor: "position",
      },
      {
        Header: "Club",
        accessor: "teamName",
      },
      {
        Header: "W",
        accessor: "stats.W",
      },
      {
        Header: "T",
        accessor: "stats.T",
        Cell: (props) => {
          return props.value !== null ? props.value : "0";
        },
      },
      {
        Header: "L",
        accessor: "stats.L",
      },
      {
        Header: "OTW",
        accessor: "stats.OTW",
      },
      {
        Header: "OTL",
        accessor: "stats.OTL",
      },
      {
        Header: "GF",
        accessor: "stats.GF",
      },
      {
        Header: "GA",
        accessor: "stats.GA",
      },
      {
        Header: "+/-",
        accessor: "stats",
        Cell: (props) => {
          return props.value.GF - props.value.GA;
        },
      },
      {
        Header: "TP",
        accessor: "stats.PTS",
      },
    ],
  },
];
