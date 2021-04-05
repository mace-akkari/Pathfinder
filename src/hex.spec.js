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
    it.todo("when an invalid hex value is enterted it returns NaN");
  });
});