const HelloWorld = require("./HelloWorld");

describe("HelloWorld", () => {
    test("should return 'Hello World'", () => {
        expect(HelloWorld()).toBe("Hello World");
    });
});

