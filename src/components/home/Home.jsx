import React from 'react';
import {
  Container,
  Box,
  Card,
  ProfilePic,
  Title,
  Text,
  Url,
  ButtonLink,
} from './styles/homeStyles';

const Home = ({ data }) => {
  return (
    <Container>
      {data.map((user) => {
        return (
          <Box key={user.id}>
            <Card>
              <ProfilePic>{user.name.charAt(0)}</ProfilePic>
              <Title>{user.name}</Title>
              <Text>{user.username}</Text>
              <Url>{user.website}</Url>
              <ButtonLink to={`/user/${user.id}`}>More details</ButtonLink>
            </Card>
          </Box>
        );
      })}
    </Container>
  );
};

export default Home;
