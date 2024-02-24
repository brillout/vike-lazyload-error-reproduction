export { Counter }

import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        Counter {count}
      </button>
      <LazyLoadImage
        alt="dog"
        height={300}
        src="https://picsum.photos/id/237/300/300"
        width={300}
        effect="blur"
      />
    </>
  )
}
