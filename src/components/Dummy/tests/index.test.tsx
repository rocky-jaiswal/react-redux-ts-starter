import { render } from '@testing-library/react'

import Dummy from '../'

describe('<Dummy />', () => {
  test('displays without errors', () => {
    const { getByText } = render(<Dummy color={'red'} />)
    expect(getByText('dummy component')).toBeInTheDocument()
  })
})
