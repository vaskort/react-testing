import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('App Component', () => {
  let props;

  beforeEach(() => {
    props = {
      users: {
        users: [],
        loading: false
      }
    };
  });

  it('renders without crashing', () => {
    const tree = renderer.create(<App {...props} />)

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('calls the getUsers function when the button is clicked', () => {
    props.getUsers = jest.fn();
    const wrapper = shallow(<App {...props} />);
    const spy = jest.spyOn(wrapper.instance().props, 'getUsers');

    wrapper.find('button').simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('renders the User component correctly', () => {
    props.users.users = [
      {
        id: 1,
        name: 'foo'
      }
    ]
    const wrapper = shallow(<App {...props} />);

    expect(wrapper.find('User').length).toBe(1);
  });
});
