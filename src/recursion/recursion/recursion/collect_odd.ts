export function collect_odd(arr: number[]): number[] {
  let result: number[] = [];
  if (arr.length === 0) return result;
  if (arr[0] % 2 === 0) result.push(arr[0]);
  arr.shift();
  result = result.concat(collect_odd(arr));
  return result;
}

// [1, 2, 3, 4, 5, 6]
// [2, 4, 6]
export function collect_odd1(arr: number[], result: number[] = []): number[] {
  if (arr.length === 0) return [];
  if (arr[0] % 2 === 0) result.push(arr[0]);
  arr.shift();
  collect_odd1(arr, result);
  return result;
}
