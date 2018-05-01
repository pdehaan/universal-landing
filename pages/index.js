import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import PostList from '../components/PostList';

export default ({ title = 'The Universal Blog' }) => (
  <Layout>
    <Header>
      <Jumbotron centered>
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </p>
      </Jumbotron>
    </Header>
    <PostList />
  </Layout>
);
