export const siftTop = (val) => {
    let row;
    let column;
    if (val === 1) {
        return '1 / 1 / 1 / 1'
    } else if (val === 2) {
        return '1 / 18 / 1 / 18'
    } else if (val === 3) {
        return '2 / 1 / 2 / 1'
    } else if (val === 4) {
        return '2 / 2 / 2 / 2'
    } else if (val > 4 && val < 11) {
        column = 8+val;
        row = 2
        return `${row} / ${column} / ${row} / ${column}`;
    } else if (val === 11) {
        return '3 / 1 / 3 / 1'
    } else if (val === 12) {
        return '3 / 2 / 3 / 2'
    } else if (val > 12) {
        column = val;
        row = 3
        return `${row} / ${column} / ${row} / ${column}`;
    }
}