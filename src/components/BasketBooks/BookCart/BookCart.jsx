import PropTypes from 'prop-types'

import MinMaxCounter from './MinMaxCounter/MinMaxCounter'

const BookCart = (props) => {
  const { id, title, price, quantity, rest } = props.book

  return (
    <tr>
      <td>{props.i + 1} </td>
      <td>{title} </td>
      <td>{price} </td>
      <td>
        <MinMaxCounter
          max={rest}
          min={1}
          current={quantity}
          setQuatinty={props.setQuatinty}
          id={id}
        />
      </td>
      <td>{quantity * price}</td>
      <td>
        <button type="button" onClick={() => props.deleteBook(id)}>
          Удалить
        </button>
      </td>
    </tr>
  )
}

BookCart.propTypes = {
  i: PropTypes.number.isRequired,
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    rest: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
  setQuatinty: PropTypes.func.isRequired,
}

export default BookCart
