import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

export const query = graphql`
  query {
    allHnStory {
      edges {
        node {
          id
          title
          score
          order
          domain
          url
        }
      }
    }
  }
`;

const HackerNews = ({ data }) => (
  <div>
    {data.allHnStory.edges.map(edge => {
      const story = edge.node;
      return (
        <a key={story.id} style={{ color: 'inherit' }} href={story.url}>
          {story.title}
          <small style={{ display: 'block' }}>
            {story.score} Point | {story.domain}
          </small>
        </a>
      );
    })}
  </div>
);

HackerNews.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HackerNews;
