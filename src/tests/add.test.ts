//function to test

export const add=(a:number, b:number):number=>a+b

// jest test case
// in unit test there is 3 step or stage
// 1, Arrange
//2 , Act
//3, Assert



test('add two number' , ()=>{
    //1, Arrange
    const a =2
    const b=3

    //2, act
    const result = add(2,3)


    // 3 ,Assertion
    expect(result).toBe(5) 
})    