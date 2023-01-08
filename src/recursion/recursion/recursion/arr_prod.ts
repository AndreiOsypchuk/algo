export function arr_prod(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + arr_prod(arr.slice(1));
}
