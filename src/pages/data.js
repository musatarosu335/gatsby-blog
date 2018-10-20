import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const Data = ({ data }) => (
  <div>
    <div>{data.site.siteMetadata.title}</div>
    <div>{data.site.siteMetadata.description}</div>
  </div>
);

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

Data.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Data;
