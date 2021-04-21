import {hexToDec} from "./hex";


describe("hex library", () => {
  describe("hexToDec", () => {
    it("when a valid hex value is entered it returns a decimal conversion", () => {
      const input = "CD";
      const output = hexToDec(input);
      const expected = 205;
      
      expect(output).toBe(expected);
    });
    it("when a valid double digit zero padded hex value it returns a decimal conversion ", () => {
      const input = "0D";
      const output = hexToDec(input);
      const expected = 13;

      expect(output).toBe(expected);
    });

    it("when a single hex value is enterted it returns NaN", () => {
      const input = "C";
      const output = hexToDec(input);
      const expected = NaN;

      expect(output).toBe(expected);
    });

    it("when an invalid hex value is enterted it returns NaN", () => {
      const input = "AZ";
      const output = hexToDec(input);
      const expected = NaN;

      expect(output).toBe(expected);
    });

    it("when a larger than two digit value is entered it returns NaN", () => {
      const input = "AAAAAA";
      const output = hexToDec(input);
      const expected = NaN;

      expect(output).toBe(expected);
    })
  });
});

describe("hexToASCIIString", () => {
  it("throws if the string isn't valid byte length", () => {
    const input = "CDC";
    expect(() => {
      hexToASCIIString(input);
    }).toThrow("Hex dosen't represent a valid string (invalid byte length)")
  });
  it("translates a hex number into a string", () => {
    const input = "48656C6C6F";
    const output = hexToASCIIString(input);
    const expected = "Hello";

    expect(output).toBe(expected);
  })


})