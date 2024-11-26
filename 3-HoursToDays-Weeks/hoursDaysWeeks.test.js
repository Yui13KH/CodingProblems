const { hoursToDays, hoursToWeeks } = require("./hoursDaysWeeks");

describe("hoursToDays", () => {
    test("convert 24 hours to days", () => {
        expect(hoursToDays(24)).toBe(1);
    });

    test("convert 0 hours to days", () => {
        expect(hoursToDays(0)).toBe(0);
    });

    test("convert 25 hours to days (fractional day)", () => {
        expect(hoursToDays(25)).toBeCloseTo(1.0417, 4);
    });

    test("handle non-numeric input: string", () => {
        expect(hoursToDays("24")).toBe("Error");
    });

    test("handle non-numeric input: null", () => {
        expect(hoursToDays(null)).toBe("Error");
    });

    test("handle non-numeric input: undefined", () => {
        expect(hoursToDays(undefined)).toBe("Error");
    });

    test("handle non-integer input: decimal", () => {
        expect(hoursToDays(12.5)).toBeCloseTo(0.5208, 4);
    });
});

describe("hoursToWeeks", () => {
    test("convert 168 hours to weeks", () => {
        expect(hoursToWeeks(168)).toBe(1);
    });

    test("convert 0 hours to weeks", () => {
        expect(hoursToWeeks(0)).toBe(0);
    });

    test("convert 200 hours to weeks (fractional week)", () => {
        expect(hoursToWeeks(200)).toBeCloseTo(1.1905, 4);
    });

    test("handle non-numeric input: string", () => {
        expect(hoursToWeeks("168")).toBe("Error");
    });

    test("handle non-numeric input: null", () => {
        expect(hoursToWeeks(null)).toBe("Error");
    });

    test("handle non-numeric input: undefined", () => {
        expect(hoursToWeeks(undefined)).toBe("Error");
    });

    test("handle non-integer input: decimal", () => {
        expect(hoursToWeeks(50.5)).toBeCloseTo(0.3006, 4);
    });
});
