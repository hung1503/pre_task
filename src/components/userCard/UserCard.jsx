import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, BigList, SmallList } from './styles/userCardStyles';

const UserCard = ({ data }) => {
  if (data.length === 0) return <div>Loading...</div>;
  const { id } = useParams();
  const user = data.find((user) => user.id === Number(id));
  return (
    <Container>
      <Card>
        <BigList>
          <li>Name: {user.name}</li>
          <li>Username: {user.username}</li>
          <li>Email: {user.email}</li>
          <li>Phone number:{user.phone}</li>
          <li>Company: {user.company.name}</li>
          <li>Website: {user.website}</li>
          <li>Address:</li>
          <SmallList>
            <li>Street: {user.address.street}</li>
            <li>Suite: {user.address.suite}</li>
            <li>City: {user.address.city}</li>
            <li>Zipcode: {user.address.zipcode}</li>
          </SmallList>
        </BigList>
      </Card>
    </Container>
  );
};

export default UserCard;
