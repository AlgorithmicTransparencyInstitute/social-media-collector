const validate = ({ body, url, hostUrl }) => {
  if (typeof body === 'object' && typeof url === 'string' && typeof hostUrl === 'string') return;

  throw new Error('Invalid Data', { body, url, hostUrl });
};

export default validate;
