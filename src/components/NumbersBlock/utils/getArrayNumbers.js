const MAX = 31

const getArrayNumbers = () => {
  const array = []

  // eslint-disable-next-line no-plusplus
  for (let num = 0; num <= MAX; num++) {
    array.push(num)
  }

  return array
}

const arrayNumbers = getArrayNumbers()

export default arrayNumbers
