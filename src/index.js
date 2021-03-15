// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix) || matrix.length == 0) return [];

    let result = [];
    let i = 1;

    matrix.forEach((el) => {
        i % 2 === 0
            ? (result = result.concat(el.reverse()))
            : (result = result.concat(el));
        i++;
    });

    return result;
};
