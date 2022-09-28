import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));
  gap: 2rem;
  justify-content: center;
`;

export const Card = styled.div`
  line-height: 2rem;
`;

export const Box = styled.div`
  position: relative;
  background-color: #fff;
  padding: 1.5rem 1.5rem 2rem 1.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in;
  margin-bottom: 40px;
  margin-top: 40px;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProfilePic = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #f1f1f1;
  font-size: 50px;
  color: #333;
  text-align: center;
  line-height: 100px;
  margin: 10px auto;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0.5rem 0;
  margin: 0;
`;

export const Text = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1rem;
  font-style: italic;
`;

export const Url = styled.a`
  font-size: 1rem;
  color: #333;
  text-decoration: none;
`;

export const ButtonLink = styled(Link)`
  display: inline-block;
  background-color: #333;
  width: 150px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 20px;
  border-radius: 10px;
  padding: 8px 16px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  &:hover {
    background-color: #555;
  }
`;
