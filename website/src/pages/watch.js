import React, { useState, useEffect } from 'react';
import { graphql, navigate } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import VideoTile from '../components/Watch/VideoTile';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return width;
}

function calculateVideoWidth(width) {
  return (width / 16) * 9;
}

export default props => {
  const edges = props.data.allContentfulVideo.edges;
  const videos = edges.map(a => ({
    ...a.node,
    description: a.node.description.content[0].content[0].value,
  }));

  const width = useWindowWidth();
  const initialValue =
    typeof props.pageContext.slug !== 'undefined' ? props.pageContext.slug : 0;

  const [videoHeight, setVideoHeight] = useState(calculateVideoWidth(width));
  const video = videos[initialValue];

  useEffect(() => {
    setVideoHeight(calculateVideoWidth(width > 1108 ? 1108 : width));
  }, [width]);

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
        <div className="video-container relative mx-auto">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${
              video.youtubeId
            }?showinfo=0&rel=0`}
            frameBorder="0"
            allowFullScreen
          />
        </div>
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

      <style jsx>{`
        .video-container {
          min-height: ${videoHeight}px;
          max-width: calc(1140px - 2rem);
        }
      `}</style>
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
