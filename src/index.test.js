const { TestScheduler } = require('jest')
const reverseStr = require('./index.js')
const sum = require('./index.js')

describe("Reverse tests", () => {
    it("reverse 'hello'", () => {
        expect(reverseStr("hello")).toBe("olleh")
    }),

    it("reverse 'kitty'", () => {
        expect(reverseStr("kitty")).toBe("yttik")
    }),

    it("reverse 'random string'", () => {
        expect(reverseStr("random string")).toBe("gnirts modnar")
    })
})



