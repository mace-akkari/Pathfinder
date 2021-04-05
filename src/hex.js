export function hexToDec(hex){
  if(hex.length !== 2){
    return NaN;
  }
  return parseInt(hex, 16);
}