import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Logo from '../../../src/components/logo/logo';

describe('<Logo />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Logo />);
  });

  it('should render a NordnetLogo', () => {
    expect(wrapper.find('NordnetLogo')).to.have.length(1);
  });

  it('should have a default height', () => {
    expect(wrapper.prop('height')).to.equal(27);
  });

  it('should be possible to customize the height', () => {
    const customHeight = 200;
    const newElement = shallow(<Logo height={customHeight} />);
    expect(newElement.prop('height')).to.equal(customHeight);
  });
});
