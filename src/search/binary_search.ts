export function binary_search(
  arr: any[],
  target: number,
  index: number = 0
): number {
  console.log(arr);
  const middle = Math.floor(arr.length / 2);
  if (arr.length === 0) return -1;

  if (arr[middle] < target) {
    console.log(arr[middle], target, middle);
    index += middle + 1;
    return binary_search(arr.slice(middle + 1), target, index);
  } else if (arr[middle] > target) {
    index = index || middle - 1;
    index -= middle - 1;
    console.log(arr[middle], target, middle, index);
    return binary_search(arr.slice(0, middle), target, index);
  } else {
    index += middle;
    return index;
  }
}
