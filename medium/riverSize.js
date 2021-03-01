const river =
    [
        [1, 0, 0, 1, 0],
        [1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 1, 0]
    ];

function traverseNode(i, j, matrix, visited, sizes) {
    //we found one so now we gotta figure out the size of the river
    let currentRiverSize = 0; 
    // now we are gonna apply depthBreathSearch to search around it
    // and see how big the river is
    
}

function riverSize(matrix) {
    // this array will hold the end result sizes of the rivers
    const sizes = [];
    // this arr will keep track, if a position has been looked at 
    const visited = matrix.map(row => row.map(value => false));
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (visited[i][j]) continue;
            traverseNode(i, j, matrix, visited, sizes);
        }
    }
    return sizes;
}



console.log(riverSize(river));

