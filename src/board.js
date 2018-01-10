export function initalizeGameBoard (size = 50) {
  const wall = [...Array(size)].map(x => 1)
  const normalLine = [1].concat([...Array(size - 2)].map(x => 0)).concat([1])

  return [...Array(size)].map((x, index) => {
    if (index === 0 || index === size - 1) {
      return wall
    } else {
      return normalLine
    }
  })
}
