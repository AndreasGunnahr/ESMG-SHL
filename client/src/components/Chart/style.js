import styled from "styled-components";
import { textFont, headerFont } from "components/Shared";

export const TableContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  table {
    padding: 1rem;
    width: 100%;
    border-spacing: 0;
    border-radius: 10px;
    background: ${({ theme }) => theme.color.darkBlue};

    tr {
      :first-child {
        th {
          color: ${({ theme }) => theme.color.yellow};
          font-size: 1.35rem;
        }
      }
      th {
        ${headerFont};
        color: ${({ theme }) => theme.color.white};
        text-transform: uppercase;
        letter-spacing: 0.5px;
        border: none;
        padding: 1rem 0.5rem;
        :nth-child(6),
        :nth-child(7),
        :nth-child(8),
        :nth-child(9),
        :nth-child(10) {
          display: none;
        }
      }

      td {
        ${textFont};
        font-size: 1rem;
        color: ${({ theme }) => theme.color.white};
        text-align: center;
        padding: 1rem 0.5rem;
        background: ${({ theme }) => theme.color.lightBlue};
        border-top: 4px solid ${({ theme }) => theme.color.darkBlue};
        :first-child {
          ${headerFont};
          color: ${({ theme }) => theme.color.yellow};
        }
        :nth-child(6),
        :nth-child(7),
        :nth-child(8),
        :nth-child(9),
        :nth-child(10) {
          display: none;
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
