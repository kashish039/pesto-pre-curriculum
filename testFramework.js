const describe = (desc, fn) => {
  // console.log(desc)
  fn()
}
    
const it = (msg, fn) => describe('  ' + msg, fn)

const matchers = (exp) => ({
  toBe: (asssertion) => {
    if (exp === assertion) {
      console.log('pass')
      return true
    } else {
      console.log('fail')
      return false
    }
  }
})

const expect = (exp) => matchers(exp)

function adder(a, b) {
  return a + b 
  
}

describe('adder', () => {
  it('adds the two numbers', () => {
    const result = adder(5, 2)
    expect(result).toBe(7)
  })
})

module.exports = {
  describe,
  expect,
  it,
  matchers
}