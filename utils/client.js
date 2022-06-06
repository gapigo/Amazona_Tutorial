import client from '@sanity/client';
import config from './config';

export default client({
  projectId: config.productId,
  dataset: config.dataset,
  useCdn: true,
});
