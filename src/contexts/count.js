import { createContext, useState, useContext } from 'uhooks'

export const useCountContext = () => {
  const [count, setCount] = useState(0)
  const CountContext = createContext(count)

  return {
    count,
    setCount,
  }
}
