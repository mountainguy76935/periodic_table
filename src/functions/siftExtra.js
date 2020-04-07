export const siftExtra = (value) => {
    let rowExtra;
    let columnExtra;
    if (value > 57 && value<72) {
        value = value-54
    } else if (value > 89 && value<104) {
        value = value-68
    }
      if (value%18 === 0) {
        rowExtra = Math.floor(value/18);
        columnExtra = value/Math.floor(value/18)
    } else if (value%18 !== 0){
        rowExtra = 3+Math.floor(value/18)
        columnExtra = value%18
    }
    return `${rowExtra} / ${columnExtra} / ${rowExtra} / ${columnExtra}`
}