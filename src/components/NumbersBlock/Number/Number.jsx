import PropTypes from 'prop-types'

import { cn } from '@bem-react/classname'

import './Number.css'

const cnNumber = cn('Number')

const Number = ({ color, number }) => (
  <div className={cnNumber({ color })}>{number}</div>
)

Number.propTypes = {
  color: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
}

export default Number
