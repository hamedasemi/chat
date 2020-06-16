// import { render } from '@testing-library/react';
// import { } from '@testing-library/jest-dom/extend-expect';
import { create } from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import Button from './button';

Enzyme.configure({ adapter: new Adapter() });

describe('Button test', () => {
    test('test props', () => {
        const button = create(<Button name="John"></Button>).toJSON();
        expect(button.children).toEqual(["Welcome ", "John"]);
    });

    test('test props', () => {
        const wrapper = shallow(<Button name="John"></Button>);

        expect(wrapper.find('div').text()).toBe('Welcome John');
    });
});