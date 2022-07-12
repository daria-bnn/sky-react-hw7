import PropTypes from 'prop-types'

const MinMaxCounter = ({ id, min, max, current, setQuatinty }) => {
  const validate = (event) => {
    const { value } = event.target
    const validValues = /^[1-9]?\d*$/

    if (!validValues.test(value)) {
      return
    }

    const newText = parseInt(value, 10)

    if (Number.isNaN(newText)) {
      setQuatinty(id, value)
      return
    }

    if (newText > max) {
      setQuatinty(id, max)
      return
    }

    if (newText < min) {
      setQuatinty(id, min)
      return
    }

    setQuatinty(id, newText)
  }

  const increase = () => {
    if (current >= max || typeof current !== 'number') return

    setQuatinty(id, current + 1)
  }

  const decrease = () => {
    if (current === min || typeof current !== 'number') return

    setQuatinty(id, current - 1)
  }

  return (
    <div>
      <button type="button" onClick={decrease}>
        -
      </button>
      <input onChange={validate} value={current} />
      <button type="button" onClick={increase}>
        +
      </button>
    </div>
  )
}

MinMaxCounter.propTypes = {
  id: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  setQuatinty: PropTypes.func.isRequired,
}

export default MinMaxCounter
