import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import logo from '../images/logo-grey.svg';

const Footer = () => {
  const {
    allContentfulSocialMediaNetwork: { edges },
  } = useStaticQuery(graphql`
    {
      allContentfulSocialMediaNetwork {
        edges {
          node {
            name
            url
          }
        }
      }
    }
  `);

  const socialMedia = edges.map(a => a.node);

  const facebook = socialMedia.find(a => a.name === 'Facebook');
  const instagram = socialMedia.find(a => a.name === 'Instagram');
  const youtube = socialMedia.find(a => a.name === 'Youtube');

  return (
    <Content>
      <div className="container flex flex-col md:flex-row justify-between items-center md:items-start">
        <Logo src={logo} />

        <div className="flex items-center pl-4 my-6 md:m-0 self-center">
          <p className="text-white font-bold text-md mr-2 whitespace-no-wrap">
            Follow Us
          </p>

          <div className="flex items-center">
            <SocialIcon alt={facebook.name} href={facebook.url}>
              <svg
                preserveAspectRatio="xMinYMin meet"
                viewBox="0 0 13 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5.4H1C.7.4.5.6.5.9v11.9c0 .3.2.5.5.5h6.1V8.4H5.5v-2h1.6V4.8c0-1.7 1-2.5 2.5-2.5.7 0 1.3.1 1.5.1v1.8h-1c-.8 0-1 .4-1 1v1.3h2l-.4 2H9.1v4.9h3.4c.3 0 .5-.2.5-.5V1c0-.3-.2-.6-.5-.6"
                  fill="#696767"
                  fillRule="nonzero"
                />
              </svg>
            </SocialIcon>

            <SocialIcon alt={instagram.name} href={instagram.url}>
              <svg
                preserveAspectRatio="xMinYMin meet"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#696767" fillRule="nonzero">
                  <path d="M4.9 1.8c-1.7 0-3 1.4-3 3V11c0 1.7 1.4 3 3 3h5.7c1.7 0 3-1.4 3-3V4.9c0-1.7-1.4-3-3-3H4.9v-.1zM10.6 15H4.9C2.7 15 .8 13.2.8 10.9V4.8C.8 2.6 2.6.7 4.9.7h5.7c2.2 0 4.1 1.8 4.1 4.1V11c0 2.2-1.9 4-4.1 4z" />
                  <path d="M7.6 5.4c-.6 0-1.2.2-1.6.7-.5.5-.8 1.1-.8 1.8 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c.1-1.5-.9-2.5-2.6-2.5.1 0 .1 0 0 0m.1 6.3c-2.1 0-3.8-1.7-3.8-3.8 0-1 .4-2 1.2-2.7.7-.7 1.7-1.1 2.6-1 1.2 0 2.2.4 2.8 1.1.6.7 1 1.6.9 2.6 0 1-.4 2-1.1 2.7-.6.7-1.6 1.1-2.6 1.1M12.5 4c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9" />
                </g>
              </svg>
            </SocialIcon>

            <SocialIcon alt={youtube.name} href={youtube.url}>
              <svg viewBox="0 0 21 15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.2 10.2V4.5l5.4 2.9-5.4 2.8zM20 3.5s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9-2.8-.2-7-.2-7-.2S6 .4 3.2.6c-.4 0-1.2.1-2 .9-.6.6-.8 2-.8 2S.2 5.1.2 6.8v1.5c0 1.6.2 3.3.2 3.3s.2 1.4.8 2c.8.8 1.8.8 2.2.9 1.6.2 6.8.2 6.8.2s4.2 0 7-.2c.4 0 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.3V6.8c0-1.6-.2-3.3-.2-3.3z"
                  fill="#696767"
                  fillRule="nonzero"
                />
              </svg>
            </SocialIcon>
          </div>
        </div>

        <div className="flex items-center">
          <p className="mr-4 text-sm text-right">
            {new Date().getFullYear()} East Caribbean Conference
            <br /> of Seventh-day Adventists
          </p>

          <SDALogo viewBox="0 0 395 398" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M342.126 270.516c1.555 0 3.11-1.555 3.11-1.555 0-1.555 0-1.555-3.11-1.555h-1.555l1.555 3.11zm-4.665-6.22h3.11c3.11 0 4.665 1.556 4.665 3.11 0 1.555-1.555 3.11-3.11 3.11l3.11 6.218-3.11-4.664h-1.555v4.664h-1.555v-12.437h-1.555zm13.996 6.22c0-4.664-3.11-9.329-9.331-9.329-4.665 0-9.33 4.665-9.33 9.329 0 4.664 4.665 9.328 9.33 9.328s9.33-3.11 9.33-9.328zm-20.217 0c0-6.22 4.666-10.883 10.886-10.883 6.22 0 10.886 4.664 10.886 10.883 0 6.218-4.666 10.882-10.886 10.882-6.22 0-10.886-4.664-10.886-10.882zm-127.52 0c0-13.993 12.441-24.875 26.437-38.868l15.552-15.546c10.885-10.883 32.657-32.649 23.326-52.86 0-1.554 0-1.554 1.556-1.554 13.996 17.101 9.33 43.53-18.662 69.96l-21.772 21.766c-13.996 13.992-20.216 20.211-24.881 37.313 0 1.554-1.556 1.554-1.556 0v-20.211zm-51.318-54.414c-15.552 15.546-20.217 34.203-7.776 45.085 1.555 1.555 0 1.555-1.555 1.555-15.551-7.773-27.992-32.648-1.555-60.633l54.429-54.414c13.996-13.992 20.216-20.21 24.882-37.312 0-1.555 1.555-1.555 1.555 0v20.21c0 13.993-12.441 24.876-26.437 38.868l-43.543 46.64zm-27.993 21.765c-13.996-17.101-9.33-43.531 18.662-69.96l55.984-55.97c13.996-13.992 20.217-20.21 24.882-37.312 0-1.555 1.555-1.555 1.555 0v20.21c0 13.993-12.44 24.876-26.437 38.868l-49.764 49.75c-10.885 10.883-32.657 32.649-24.882 54.414 1.556 0 0 1.555 0 0zm-10.885-35.758c-4.666-15.547-1.555-40.422 21.771-63.742l60.65-60.633c13.996-13.992 20.216-20.21 24.882-37.312 0-1.555 1.555-1.555 1.555 0v20.21c0 13.993-12.441 24.876-26.437 38.868l-52.874 52.86c-24.882 24.874-27.992 35.757-27.992 49.75h-1.555zm127.52-18.656c15.55-15.547 20.216-34.203 7.775-45.086-1.555-1.554 0-1.554 1.555-1.554 15.551 7.773 27.992 32.648 1.555 60.632l-20.216 20.211c-13.996 13.992-20.217 20.211-24.882 37.313 0 1.554-1.555 1.554-1.555 0v-20.211c0-13.992 12.44-24.875 26.437-38.867l9.33-12.438zm37.322 13.992c4.665 15.547 1.555 40.422-21.772 63.743l-27.992 27.984c0 1.555-1.555 1.555-1.555 1.555h-18.661c4.665-7.774 12.44-15.547 21.771-24.875l18.662-18.657c24.882-24.875 27.992-35.757 27.992-49.75 0-1.554 1.555-1.554 1.555 0zm-73.09 129.04c0 1.554-1.556 1.554-1.556 0v-20.212s0-1.554 1.556-1.554h10.885c-6.22 6.219-9.33 12.437-10.885 21.765zm45.098 0c-26.437-4.665-40.433 7.773-45.098 20.21 0 1.555-1.556 1.555-1.556 0v-3.11c0-13.991 12.441-24.874 26.437-38.866l23.327-23.32 62.205 10.882 32.657 32.649C377.894 290.727 395 245.64 395 197.445 395 88.617 306.358 0 197.5 0S0 88.617 0 197.445c0 48.196 17.106 93.282 46.654 127.485L79.31 292.28l69.98-12.437c32.658-6.219 40.433 1.554 40.433 12.437 0 0 0 1.555-1.555 1.555h-20.216s-1.555 0-1.555 1.555v12.437s0 1.555 1.555 1.555h20.216s1.555 0 1.555 1.555v40.421c0 1.555-1.555 1.555-1.555 0-4.665-12.437-18.661-24.875-45.098-20.21 0 0-46.654 7.773-80.866 13.992C97.972 377.789 144.626 398 197.5 398c52.874 0 99.528-20.21 135.295-52.86-35.767-10.882-82.421-18.656-82.421-18.656z"
              fill="#5D5B5C"
              fillRule="nonzero"
            />
          </SDALogo>
        </div>
      </div>
    </Content>
  );
};

const Content = styled.footer.attrs({
  className: 'bg-base py-12',
})`
  color: #a0a0a0;

  p {
    line-height: 1.5;
  }
`;

const SDALogo = styled.svg`
  --size: 50px;
  width: var(--size);
  height: var(--size);

  path {
    transition: var(--link-transition);
  }

  &:hover {
    path {
      fill: #fff;
    }
  }
`;

const Logo = styled.img`
  width: 200px;
`;

const SocialIcon = ({ children, ...rest }) => {
  const Url = styled.a`
    path {
      transition: var(--link-transition);
    }

    &:hover {
      path {
        fill: #fff;
      }
    }

    svg {
      height: 28px;
    }
  `;

  return (
    <Url {...rest} className="inline-block mx-3">
      {children}
    </Url>
  );
};

export default Footer;
