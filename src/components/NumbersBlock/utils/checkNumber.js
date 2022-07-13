const checkNumber = (number) => {
  if (number === 2 || number === 3 || number === 5 || number === 7) {
    return 'red'
  }

  if (number % 2 === 0) {
    return 'green'
  }

  if (
    number === 1 ||
    number % 3 === 0 ||
    number % 5 === 0 ||
    number % 7 === 0
  ) {
    return 'yellow'
  }

  return 'red'
}

export default checkNumber
