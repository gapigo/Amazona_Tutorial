import sanityClient from '@sanity/client';
import config from './config';

const client = sanityClient({
  projectId: config.productId,
  dataset: config.dataset,
  useCdn: true,
});

export default client;
