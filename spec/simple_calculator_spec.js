let calculator = require("../src/simple_calculator")

describe("add function", function(){
    it("adds two numbers and returns the sum", function(){
        expect(calculator.add(0,0)).toBe(0)
    })

    it("adds two negative numbers and returns the sum", function(){
        expect(calculator.add(-1,-1)).toBe(-2)
    })

    it("adds two numbers and returns the sum", function(){
        expect(calculator.add(4,5)).toBe(9)
    })

    it("adds multiple numbers and returns the sum", function(){
        expect(calculator.add(1,2,3,4)).toBe(10)
    })
})

describe("multiply function", function(){
    it("multiply two numbers and returns the product", function(){
        expect(calculator.multiply(1,2)).toBe(2)
    })

    it("multiply multiple numbers and returns the product", function(){
        expect(calculator.multiply(1,2,3,4)).toBe(24)
    })

    it("multiply negative numbers and returns the product", function(){
         expect(calculator.multiply(-1,-1)).toBe(1)
    })


})