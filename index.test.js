
  
const {
    add,
    substract,
    multiply,
    divide
} = require('./index')

const {
    describe,
    it,
    expect,
    matchers 
  } = require('./testFramework')

describe('add',()=>{
    it('adds the two numbers', ()=>
    {
        const result = add(4,2);
        expect(result).toBe(6);
    })
})


describe('substract',()=>{
    it('substracts the second number from the first', ()=>
    {
        const result = substract(4,2);
        expect(result).toBe(2);
    })
})

describe('multiply',()=>{
    it('multiplies the second number from the first', ()=>
    {
        const result = multiply(4,2);
        expect(result).toBe(8);
    })
})

describe('divide',()=>{
    it('divides the second number from the first', ()=>
    {
        const result = divide(8,2);
        expect(result).toBe(4);
    })
})

