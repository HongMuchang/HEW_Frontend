import { useDispatch, useSelector } from 'react-redux'
import { selectHello, go, check } from './hellorSlice'

export function Bord() {
  const hello = useSelector(selectHello)
  const dispatch = useDispatch()

  return (
    <div>
      <p>{hello}</p>
      <button onClick={() => dispatch(go())}>変更</button>

      <button onClick={() => dispatch(check())}>アンニョン</button>
    </div>
  )
}
