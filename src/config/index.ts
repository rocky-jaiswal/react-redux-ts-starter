const environmentConfiguration = (environment: string) => {

  if (environment === 'development') {
    return {
      baseURL: `http://${window.location.hostname}:3001`,
      callbackURL : `http://${window.location.hostname}:3000/authCallback`
    };
  }
  return {
    baseURL: `https://${window.location.hostname}/api`,
    callbackURL: `https://${window.location.hostname}/authCallback`
  };
};

const Config = {
  env: environmentConfiguration(process.env.APP_ENV || 'development')
};

export default Config;
