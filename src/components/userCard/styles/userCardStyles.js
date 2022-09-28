import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 2rem;
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.2rem;
`;

export const BigList = styled.ul`
  list-style-type: '- ';
`;

export const SmallList = styled.ul`
  list-style-type: circle;
  margin-left: 2rem;
`;
