import React from 'react';

const ProjectTemplate = ({ data }) => {
  const { title, description, url } = data;
  return (
    <div>
      <p>{title}</p>
      {description && <p>{description.description}</p>}
      <p>{url}</p>
    </div>
  );
};

export default ProjectTemplate;

export const pageQuery = graphql`
  query projectQuery($id: String!) {
    contentfulProject(id: { eq: $id }) {
      title
      description {
        description
      }
      url
    }
  }
`;
