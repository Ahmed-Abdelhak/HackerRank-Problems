function staircase(n) {

    for (let index = 0; index < n; index++) {
        console.log("#".repeat(index+1))
    }
}

module.exports.staircase = staircase;