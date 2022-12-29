const isInArr = (n, arr) => {
  if (typeof arr === "number") {
    return (n == arr) ? true : false
  } else if (Array.isArray(arr) === true) {
    return arr.includes(n)
  } else {
    return undefined
  }
}

const Roulette = (bet, numbers, winner) => {
  switch (numbers.length) {
    case (1): {
      if (isInArr(winner, numbers)) {
        return (bet * 36)
      }
    }
    case (2): {
      if (isInArr(winner, numbers)) {
        return (bet * 18)
      }
    }
    case (3): {
      if (isInArr(winner, numbers)) {
        return (bet * 12)
      }
    }
    case (4): {
      if (isInArr(winner, numbers)) {
        return (bet * 9)
      }
    }
    case (6): {
      if (isInArr(winner, numbers)) {
        return (bet * 6)
      }
    }
    case (12): {
      if (isInArr(winner, numbers)) {
        return (bet * 3)
      }
    }
    case (18): {
      if (isInArr(winner, numbers)) {
        return (bet * 2)
      }
    }
  }
}

exports.Roulette = Roulette