import { cn } from '@bem-react/classname'

import './NumbersBlock.css'

import arrayNumbers from './utils/getArrayNumbers'
import checkNumber from './utils/checkNumber'

import Number from './Number/Number'

const cnNumbersBlock = cn('NumbersBlock')

const NumbersBlock = () => (
  <div className={cnNumbersBlock()}>
    <h2 className={cnNumbersBlock('Title')}>Number Generator</h2>
    <div className={cnNumbersBlock('Container')}>
      {arrayNumbers.map((number) => (
        <Number key={number} number={number} color={checkNumber(number)} />
      ))}
    </div>
  </div>
)

export default NumbersBlock
