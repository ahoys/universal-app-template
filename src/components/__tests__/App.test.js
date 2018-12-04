import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ConnectedApp, { App } from '../App';
import { mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

const setup = (props) => {
  return {
    props,
    enzymeWrapper: shallow(<App { ...props } />),
  }
};

describe('App', () => {
  describe('Logged out', () => {
    const props = {
      inSession: false,
      location: '/',
    };
    it('Has Links.', () => {
      const { enzymeWrapper } = setup(props);
      const elements = enzymeWrapper.find('Link');
      expect(elements.length).toBe(4);
    });
    it('Has Routes.', () => {
      const { enzymeWrapper } = setup(props);
      const elements = enzymeWrapper.find('Route');
      expect(elements.length).toBe(3);
    });
  });
  describe('Logged in', () => {
    const props = {
      inSession: true,
      location: '/',
    };
    it('Has Links.', () => {
      const { enzymeWrapper } = setup(props);
      const elements = enzymeWrapper.find('Link');
      expect(elements.length).toBe(3);
    });
    it('Has Routes.', () => {
      const { enzymeWrapper } = setup(props);
      const elements = enzymeWrapper.find('Route');
      expect(elements.length).toBe(3);
    });
  });
});
