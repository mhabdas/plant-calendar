import AsyncStorage from '@react-native-community/async-storage';

export const setTokens = (values, cb) => {
  const dateNow = new Date();
  const expiration = dateNow.getTime() + 3600 * 1000;

  AsyncStorage.multiSet([
    ['@plant_calendar@token', values.token],
    ['@plant_calendar@refToken', values.refToken],
    ['@plant_calendar@expiration', expiration.toString()],
    ['@plant_calendar@uid', values.uid],
  ]).then(() => {
    cb();
  });
};

export const getTokens = cb => {
  AsyncStorage.multiGet([
    '@plant_calendar@token',
    '@plant_calendar@refToken',
    '@plant_calendar@expiration',
    '@plant_calendar@uid',
  ]).then(response => {
    cb(response);
  });
};
