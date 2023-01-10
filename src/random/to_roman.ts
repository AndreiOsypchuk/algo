export function to_roman(num: number): string {
  // need to be in this order from biggest to smallest to operate on highest orders first i.e on thousands then on hundreds then on tesns and on ones
  let map: { [key: string]: number } = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let res: string = "";
  for (let key in map) {
    // key is an order i.e 1000 ...
    res += key.repeat(Math.floor(num / map[key])); // how many 1000 fit in the number (2653) == 2 so it will be MM
    num = num % map[key]; // get next order (2653) == 653 and continue
  }
  return res;
}
