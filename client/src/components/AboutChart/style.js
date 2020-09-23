import styled from "styled-components";
import { textFont, headerFont, H1 } from "components/Shared";
import Image from "assets/hockey.jpg";

export const TableContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  padding: 2rem 0;
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
        min-width: 40px;
        @media (min-width: 768px) {
          font-size: 1.25rem;
        }

        @media (min-width: 1024px) {
          font-size: 1.3rem;
        }

        :nth-child(5),
        :nth-child(6),
        :nth-child(8),
        :nth-child(9) {
          display: none;
          @media (min-width: 768px) {
            display: table-cell;
          }
        }
      }

      :first-child {
        th {
          letter-spacing: 1px;
          width: 100%;
          color: ${({ theme }) => theme.color.yellow};
          font-size: 1.25rem;
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
        font-size: 0.875rem;
        @media (min-width: 768px) {
          font-size: 1rem;
        }

        @media (min-width: 1024px) {
          font-size: 1.1rem;
        }

        :first-child {
          ${headerFont};
          color: ${({ theme }) => theme.color.yellow};
          border-left: 3px solid ${({ theme }) => theme.color.yellow};
        }

        :nth-child(5),
        :nth-child(6),
        :nth-child(8),
        :nth-child(9) {
          display: none;
          @media (min-width: 768px) {
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

export const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1250px;
  margin: 2rem auto 0 auto;
  background: ${({ theme }) => theme.color.darkBlue};
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Img = styled.div`
  height: 175px;
  width: 175px;
  border-radius: 50%;
  background: url(${Image}) center;
  background-size: cover;
  @media (min-width: 768px) {
    height: 200px;
    width: 200px;
  }
`;

export const TextContainer = styled.div`
  margin-top: 1rem;
  @media (min-width: 768px) {
    margin: 0 0 0 3rem;
  }
`;

export const Title = styled(H1)`
  font-size: 1.25rem;
  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled(H1)`
  text-align: center;
  font-size: 0.825rem;
  font-style: italic;
  margin-top: 0.5rem;
  @media (min-width: 500px) {
    font-size: 1rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.1rem;
  }
`;
