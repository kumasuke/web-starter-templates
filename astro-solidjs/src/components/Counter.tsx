import type { VoidComponent, VoidProps } from 'solid-js'

import { createSignal } from 'solid-js'

interface Props extends VoidProps {
}

const Counter: VoidComponent<Props> = () => {
  const [count, setCount] = createSignal<number>(0)
  return (
    <>
      <p data-testid="count">count: {count()}</p>
      <button data-testid="countup" type="button" onClick={() => setCount(count() + 1)}>countUp</button>
    </>
  )
}

export default Counter
