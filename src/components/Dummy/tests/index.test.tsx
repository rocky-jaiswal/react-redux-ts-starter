import * as React from 'react';
import { shallow } from 'enzyme';

import Dummy from '../';

describe('<Dummy />', () => {

  test('displays without errors', () => {
    const wrapper = shallow(
      <Dummy
        color={'red'}
      />
    );
    expect(wrapper.find('.dummy_area').length).toEqual(1);
  });

});
