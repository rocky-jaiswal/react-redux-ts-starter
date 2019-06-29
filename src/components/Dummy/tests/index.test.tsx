import * as React from 'react';
import { render } from 'react-testing-library';

import Dummy from '../';

describe('<Dummy />', () => {

  test('displays without errors', () => {
    const { getByText } = render(
      <Dummy
        color={'red'}
      />
    );
    expect(getByText('dummy component')).toBeInTheDocument();
  });

});
