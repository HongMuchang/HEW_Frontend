import { useDispatch, useSelector } from 'react-redux'
import { selectbords, check } from './bordSlice'

export default function Bord() {
  const bords = useSelector(selectbords)
  const dispatch = useDispatch()

  return (
    <div>
      <p>{bords}</p>
      <button onClick={() => dispatch(check())}>アンニョン</button>
    </div>
  )
}
