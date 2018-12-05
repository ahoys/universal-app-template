// @flow

type CommonThemes = {
  body: {
    background: string,
  },
  button: Array<string>,
};

const commonThemes: CommonThemes = {
  body: {
    background: '#f5f5f5',
  },
  button: ['cursor: pointer; user-select: none;'],
};

export default commonThemes;
