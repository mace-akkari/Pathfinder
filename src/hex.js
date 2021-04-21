export function hexToDec(hex){
  if(hex.length !== 2){
    return NaN;
  }
  const valid_hex = "0123456789ABCDEF"
  for (const x of hex.split("")) {
    if (!valid_hex.includes(x)){
      return NaN;
    }
  }
  return parseInt(hex, 16);
}

export function hexToASCIIString(hex) {
  const isOdd = hex.length % 2;
  if(isOdd) {
    throw new Error(
      "Hex dosen't represent a valid string (invalid byte length)"
    );
  }
}