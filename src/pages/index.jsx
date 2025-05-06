import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionBlog from '../components/section-blog';
import SectionEducation from '../components/section-experience';
import SectionPublications from '../components/section-projects';
import SectionExperiences from '../components/section-skills';
import SEO from '../components/seo';

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const publications = get(data, 'site.siteMetadata.publications', false);
  const posts = data.allMarkdownRemark.edges;
  const education = get(data, 'site.siteMetadata.education', false);
  const experiences = get(data, 'site.siteMetadata.experiences', false);
  const noBlog = !posts || !posts.length;

  return (
    <Layout>
      <SEO />
      <Header metadata={data.site.siteMetadata} noBlog={noBlog} />
      {about && <SectionAbout about={about} />}
      {publications && publications.length && <SectionPublications publications={publications} />}
      {!noBlog && <SectionBlog posts={posts} />}
      {education && education.length && (
        <SectionEducation education={education} />
      )}
      {experiences && experiences.length && <SectionExperiences experiences={experiences} />}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
        publications {
          name
          description
          link
        }
        education {
          name
          description
          link
        }
        experiences {
          name
          description
          link
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
