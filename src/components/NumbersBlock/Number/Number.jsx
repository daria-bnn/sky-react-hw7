import { cn } from '@bem-react/classname'

import './Number.css'

const cnNumber = cn('Number')

const Number = ({ color, number }) => (
  <div className={cnNumber({ color })}>{number}</div>
)

export default Number
