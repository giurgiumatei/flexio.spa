import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const params = useParams();

  return <div>UserProfile for ${params.id}</div>;
};

export default UserProfile;
