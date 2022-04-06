import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 's0qs93kb',
  dataset: 'production',
  apiVersion: '2022-03-05',
  useCdn: true,
  token: import.meta.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
