import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const Data = ({ data }) => (
  <div>
    <div>{data.site.siteMetadata.title}</div>
    <div>{data.site.siteMetadata.description}</div>
  </div>
);

Data.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Data;
