import styled from 'styled-components';

export const CarsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
  margin: auto;
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 1.5rem;
  }
`;
