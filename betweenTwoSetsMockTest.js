let count = 0
let na = Math.max(...a)
let mi = Math.min(...b)

for(let i=na; i <= mi; i++) { // Loop between Array[a](MAX) and Array[b](MIN)
    if((a.every(e => i % e === 0)) && b.every(e => e % i === 0)) count++ 
    // Check if the i(INTEGER) is Factor of Array[a](ELEMENTS) & Array[b](ELEMENTS) are Factor of the i(INTEGER)
}
    
return count