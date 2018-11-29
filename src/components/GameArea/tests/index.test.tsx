import * as React from 'react';
import { shallow } from 'enzyme';

import GameArea from '../';

describe('<GameArea />', () => {

  test('displays without errors', () => {
    const wrapper = shallow(
      <GameArea
        width={100}
        height={100}
      />
    );
    expect(wrapper.find('.game-area').length).toEqual(1);
  });

});
