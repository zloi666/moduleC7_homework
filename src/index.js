function reverseStr(a) {
    const arr = a.split("")
    const revArr = arr.reverse()
    const res = revArr.join("")
    return res
}

module.exports = reverseStr