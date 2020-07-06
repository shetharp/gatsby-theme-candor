import React from "react";
import { PageProps, Link, graphql } from "gatsby";
import { Layout } from "@shetharp/gatsby-theme-candor";
import { Styled } from "theme-ui";

type BlogIndexProps = PageProps & {
  data: {
    allSitePage: {
      nodes: {
        id: string;
        path: string;
        context?: {
          frontmatter?: {
            author?: string;
            date?: string;
            excerpt?: string;
            featureImage?: string;
            title?: string;
          };
        };
      }[];
    };
  };
};

const BlogIndex: React.FC<BlogIndexProps> = (props) => {
  const { data } = props;
  const { nodes: pages } = data.allSitePage;

  return (
    <Layout>
      <Styled.h1>Blog Index</Styled.h1>

      <Styled.ul>
        {pages.map(({ id, path, context }) => {
          return (
            <Styled.li key={id}>
              <Link to={path}>
                <code>{path}</code>
              </Link>
              {context?.frontmatter?.title && ` -- ${context.frontmatter.title}`}
            </Styled.li>
          );
        })}
      </Styled.ul>
    </Layout>
  );
};
export default BlogIndex;

export const pageQuery = graphql`
  query AllPagesQuery {
    allSitePage {
      nodes {
        id
        path
        context {
          frontmatter {
            author
            date
            excerpt
            featureImage
            title
          }
        }
      }
    }
  }
`;
