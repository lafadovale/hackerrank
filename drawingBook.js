const midBook = Math.floor(n / 2)
    let count = 0, revCount = 0
    if (n === p) return 0
    if (p <= midBook) {
        for (let i = 1; i < n; i += 2) {
            if (p > i) count++
        }
        return count
    } else {
        if (n % 2 !== 0) n--
        for (let j = n; j >= 0; j -= 2) {
            if (p < j) revCount++
        }
        return revCount
    }

    // I know I can improve this code, but it worked