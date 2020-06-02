const datesToISO = post =>
  Object.keys(post).reduce((acc, elem) => {
    if (elem.endsWith('At') && typeof acc[elem] === 'number')
      acc[elem] = new Date(acc[elem]).toISOString();
    return acc;
  }, post);

export default datesToISO;
