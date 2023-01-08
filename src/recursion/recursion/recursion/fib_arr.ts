/**
 * #### Recursively computes fib sequence array
 *  Returns array containing fib sequence of length n
 *  @param n length of the array
 */
export function fib_arr(n: number): number[] {
  let arr: number[] = [];
  if (n === 1) return [1, 1];
  arr = fib_arr(n - 1); // go to the end
  // start building the array from n === 2 and arr = [1, 1]
  return [...arr, arr[n - 1] + arr[n - 2]];
}
