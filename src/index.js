

module.exports = function towelSort(matrix) {
let array = [];
    if (matrix === undefined) {
        return array;
    } 
        for (let i = 0; i < matrix.length; i++) {
        if (i == 0 || i % 2 == 0) {
            array.push(matrix[i]);
        } else {
            array.push(matrix[i].reverse());
            }
    
        }
return [].concat(...array);
};
