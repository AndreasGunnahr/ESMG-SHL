import styled from "styled-components";
import { textFont, headerFont } from "components/Shared";

export const TableContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  max-width: 1250px;
  margin: 0 auto;
  table {
    padding: 1rem;
    width: 100%;
    border-spacing: 0;
    border-radius: 10px;
    background: ${({ theme }) => theme.color.darkBlue};
    border-spacing: 0 3px;

    tr {
      th {
        ${headerFont};
        color: ${({ theme }) => theme.color.white};
        text-transform: uppercase;
        letter-spacing: 0.5px;
        border: none;
        padding: 1rem 0;
        span  {
          width: 5px;
          margin-left: 5px;
        }
        width: 55px;
        @media (min-width: 768px) {
          font-size: 1.25rem;
        }

        @media (min-width: 1024px) {
          font-size: 1.3rem;
        }

        :nth-child(1) {
          width: 70px;
        }

        :nth-child(6),
        :nth-child(7),
        :nth-child(8) {
          display: none;
          @media (min-width: 768px) {
            display: table-cell;
          }
        }

        :nth-child(9),
        :nth-child(10) {
          display: none;
          @media (min-width: 1024px) {
            display: table-cell;
          }
        }
      }

      :first-child {
        th {
          width: 100%;
          color: ${({ theme }) => theme.color.yellow};
          font-size: 1.35rem;
          @media (min-width: 768px) {
            font-size: 1.5rem;
          }
          @media (min-width: 1024px) {
            font-size: 1.65rem;
          }
        }
      }

      td {
        ${textFont};
        font-size: 1rem;
        color: ${({ theme }) => theme.color.white};
        text-align: center;
        padding: 1rem 0.5rem;
        background: ${({ theme }) => theme.color.lightBlue};

        @media (min-width: 1024px) {
          font-size: 1.1rem;
        }

        :first-child {
          ${headerFont};
          color: ${({ theme }) => theme.color.yellow};
          border-left: 3px solid ${({ theme }) => theme.color.yellow};
          font-size: 1.25rem;
        }

        :nth-child(6),
        :nth-child(7),
        :nth-child(8) {
          display: none;
          @media (min-width: 768px) {
            display: table-cell;
          }
        }

        :nth-child(9),
        :nth-child(10) {
          display: none;
          @media (min-width: 1024px) {
            display: table-cell;
          }
        }
      }

      :first-child {
        td:first-child {
          border-top-left-radius: 10px;
        }
        td:last-child {
          border-top-right-radius: 10px;
        }
      }

      :last-child {
        td:first-child {
          border-bottom-left-radius: 10px;
        }
        td:last-child {
          border-bottom-right-radius: 10px;
        }
      }
    }
  }
`;
