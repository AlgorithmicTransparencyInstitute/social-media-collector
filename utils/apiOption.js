const apiOption = ({ api = process.env.NODE_ENV || 'development' }) => {
  const apiOptions = [
    {
      name: 'Offline',
      code: 'offline',
      url: ''
    },
    {
      name: 'Local',
      code: 'local',
      url: 'http://127.0.0.1:7000'
    },
    {
      name: 'Development',
      code: 'development',
      url: 'https://dev.atiapi.org/v2'
    },
    {
      name: 'Staging',
      code: 'staging',
      url: 'https://staging.atiapi.org/v2'
    },
    {
      name: 'Production',
      code: 'production',
      url: 'https://prod.atiapi.org/v2'
    }
  ];
  return apiOptions.find(({ code }) => api === code) || apiOptions[0];
};

module.exports = apiOption;
