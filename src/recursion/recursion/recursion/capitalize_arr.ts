export function capitalize_arr(arr: string[]): string[] {
  if (arr.length === 1) return [arr[0][0].toUpperCase() + arr[0].slice(1)];
  return [
    arr[0][0].toUpperCase() + arr[0].slice(1),
    ...capitalize_arr(arr.splice(1)),
  ];
}
