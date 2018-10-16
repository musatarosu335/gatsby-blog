import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';

const ColoredTitle = styled.div`
  color: red;
  font-size: 20px;
`;

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <ColoredTitle>Welcome to page 2</ColoredTitle>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
