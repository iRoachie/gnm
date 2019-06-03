import { decode } from 'he';

export * from './reduceSites';

export const stripHTMLTags = string => {
  return decode(string)
    .replace(/<[^>]*>/g, '')
    .trim();
};
