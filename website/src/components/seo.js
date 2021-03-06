import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

function SEO({
  description,
  lang,
  meta,
  keywords,
  title,
  image,
  titleOverride,
}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={({ site: { siteMetadata } }) => {
        const metaDescription = description || siteMetadata.description;

        const metaImage = `${siteMetadata.siteUrl}${image ||
          siteMetadata.defaultImage}`;

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={titleOverride ? '%s' : `%s | ${siteMetadata.title}`}
            meta={[
              {
                name: 'description',
                content: metaDescription,
              },
              {
                property: 'og:title',
                content:
                  title === siteMetadata.title
                    ? title
                    : `${title} | ${siteMetadata.title}`,
              },
              {
                property: 'og:description',
                content: metaDescription,
              },
              {
                property: 'og:type',
                content: 'website',
              },
              {
                property: 'og:image',
                content: metaImage,
              },
              {
                name: 'twitter:card',
                content: 'summary',
              },
              {
                name: 'twitter:creator',
                content: siteMetadata.author,
              },
              {
                name: 'twitter:title',
                content: title,
              },
              {
                name: 'twitter:description',
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: 'keywords',
                      content: keywords.join(', '),
                    }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
  titleOverride: false,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  titleOverride: PropTypes.bool,
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        defaultImage: image
        siteUrl: url
      }
    }
  }
`;
