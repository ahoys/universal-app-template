import { receiveSession } from 'actions/actions.session';

export const requestSessionCycle = sources => {
  // Cause.
  const request = sources.ACTION.filter(
    action => action.type === 'REQUEST_SESSION'
  )
    .map(action => action.payload)
    .map(c => ({
      url: `/api/login?lang=${c.lang}&relogin=${c.relogin}&username=${
        c.username
      }&password=${c.password}`,
      category: 'request_session',
      method: 'GET',
    }));

  // Consequence.
  const response = sources.HTTP.select('request_session')
    .flatten()
    .map(res => receiveSession(res.body.username, res.body['X-RQ-Token']));

  return {
    HTTP: request,
    ACTION: response,
  };
};
