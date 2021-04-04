import {hexToDec} from "./hex";


describe("hex library", () => {
  describe("hexToDec", () => {
    it("when a valid hex value is entered it returns a decimal conversion", () => {
      const input = "CD";
      const output = hexToDec(input);
      const expected = 205;
      
      expect(output).toBe(expected);
    });
  });
});