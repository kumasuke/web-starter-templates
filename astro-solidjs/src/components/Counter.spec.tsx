import { cleanup, fireEvent, render } from '@solidjs/testing-library'
import { describe, expect, it } from 'vitest'

import Counter from './Counter'

afterEach(cleanup)

describe('Counter component', () => {
  it('countup', () => {
    const { getByTestId } = render(() => <Counter />)

    expect(getByTestId('count')).toHaveTextContent('count: 0')

    fireEvent.click(getByTestId('countup'))

    expect(getByTestId('count')).toHaveTextContent('count: 1')
  })
})
