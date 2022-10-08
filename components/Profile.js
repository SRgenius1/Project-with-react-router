import React from 'react'
import {useAuth} from './auth';

export function Profile() {
  const auth = useAuth();

  return (
    <>
      <h1>Profile page</h1>
      <h2>Hello, {auth.user?.username}</h2>
    </>
  );
}
