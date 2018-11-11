import { receiveAccount } from 'actions/actions.account';

export const requestSignIn = (sources) => {
  // Cause.
  const request = sources.ACTION
    .filter(action => action.type === 'REQUEST_SIGN_IN')
    .map(action => action.payload)
    .map(credentials => ({
      type: 'application/json;charset=utf-8',
      url: `/api/login?orgId=1&lang=en&relogin=true&username=${credentials.username}&password=${credentials.password}`,
      category: 'request_sign_in',
      method: 'GET',
    }));

  // Consequence.
  const response = sources.HTTP
    .select('request_sign_in')
    .flatten()
    .map(res => receiveAccount(
      res.body && res.body.username ? res.body.username : '',
      res.body && res.body['X-RQ-Token'] ? res.body['X-RQ-Token'] : '',
    ));

  return {
    HTTP: request,
    ACTION: response,
  };
};
