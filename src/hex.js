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