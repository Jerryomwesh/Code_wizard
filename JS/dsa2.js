// # Given a list containing n distinct numbers from 0 to n, find the missing number.

// # Input: [3, 0, 1]
// # Output: 2
// # NOTE: No number limit



function findMissingNumber(nums) {
    const n = Math.max(...nums)
    const expectedSum = (n * (n + 1)) / 2
    const actualSum = nums.reduce ((accumulator, value)=> accumulator + value, 0)
    const missing = expectedSum - actualSum 

    if (missing === 0) {
        return "No missing number"
    }
    
    return expectedSum - actualSum
}

console.log(findMissingNumber([0,1,2,3,4,5])) // No missing number
console.log(findMissingNumber([0,1,2,3,5])) // 4



