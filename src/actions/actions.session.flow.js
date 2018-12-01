export type RequestSessionAction = {
  +type: 'REQUEST_SESSION',
  +payload: {
    +username: string,
    +password: string,
    +lang: string,
    +relogin: 'true' | 'false',
  },
};

export type ReceiveSessionAction = {
  +type: 'RECEIVE_SESSION',
  +payload: {
    +username: string,
    +token: string,
    +inSession: boolean,
  },
};
