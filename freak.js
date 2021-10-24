function mostFrequntDigits(nums) {

    const map = {}

    let str = ""
    for (let i = 0; i < nums.length; i++) {
        str = str + nums[i] + ""
    }
    for (let i = 0; i < str.length; i++) {
        if (!map[str[i]]) map[str[i]] = 0
        map[str[i]]++
    }
    return map

}



mostFrequntDigits([123, 32, 41, 23, 5, 3, 2, 123])