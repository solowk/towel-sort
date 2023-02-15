
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    for (let rowIndex = 0; matrix && (rowIndex < matrix.length); rowIndex++) {
        const row = matrix[rowIndex];
        let isOddRow = rowIndex % 2 == 1;
        result = result.concat(isOddRow ? row.reverse() : row);
    }
    return result;
}
