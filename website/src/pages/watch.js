import React from 'react';
import { graphql, navigate } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import VideoTile from '../components/Watch/VideoTile';
import Player from '../components/Watch/Player';

export default props => {
  const edges = props.data.allContentfulVideo.edges;
  const videos = edges.map(a => ({
    ...a.node,
    description: a.node.description.content[0].content[0].value,
  }));

  const initialValue =
    typeof props.pageContext.slug !== 'undefined' ? props.pageContext.slug : 0;

  const video = videos[initialValue];

  const selectVideo = id => {
    navigate(`/watch/${id + 1}`);
  };

  return (
    <Layout classes="text-white flex flex-col space-between">
      <SEO
        title="Watch"
        keywords={['organizers', 'aim', 'mission', 'vision']}
      />

      <section className="main-video flex-1 bg-base">
        <Player youtubeId={video.youtubeId} />
      </section>

      <section className="bg-base pt-12 pb-12">
        <div className="container md:flex">
          <div className="md:w-1/3">
            <p className="text-xl">{video.label}</p>
            <h1 className="font-bold text-3xl">{video.title}</h1>
          </div>

          <div
            className="md:w-2/3 leading-looser pt-8 md:px-24"
            dangerouslySetInnerHTML={{ __html: video.description }}
          />
        </div>
      </section>

      <section className="bg-base py-8">
        <div className="container">
          <h1 className="text-xl">Archive</h1>

          <div className="mt-8 relative">
            {videos.map((a, i) => (
              <VideoTile
                key={a.id}
                video={a}
                index={i}
                selectVideo={() => selectVideo(i)}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    allContentfulVideo {
      edges {
        node {
          id
          label
          title
          description {
            content {
              content {
                value
              }
            }
          }
          youtubeId
        }
      }
    }
  }
`;
