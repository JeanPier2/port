import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: import.meta.env.VITE_API_KEY,
  dataset: 'production',
  apiVersion: '2022-03-05',
  useCdn: true,
  token: import.meta.env.REACT_APP_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
