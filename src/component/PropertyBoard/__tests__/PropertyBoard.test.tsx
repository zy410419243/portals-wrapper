import React from 'react';
import { mount } from 'enzyme';
import PropertyBoard from '..';

describe('PropertyBoard', () => {
  it('render correctly', () => {
    const demo = (
      <PropertyBoard visible={true} shellStyleDatas={{}} enumDatas={[]} />
    );

    expect(mount(demo)).toMatchSnapshot();
  });
});
