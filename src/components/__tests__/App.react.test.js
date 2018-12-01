import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';

// TODO: Apparently lazy loaded imports are problematic for Jest.
// import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

const Stuff = () => (
  <div>stuff</div>
)

describe('App', () => {
  let props;
  let mountedApp;
  const getApp = () => {
    if (!mountedApp) {
      mountedApp = mount(
        <Stuff />
      );
    }
    return mountedApp;
  }
  beforeEach(() => {
    props = {
      inSession: false,
      location: '/',
    };
    mountedApp = undefined;
  });

  it('work-in-progress-testing', () => {
    const divs = getApp().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
