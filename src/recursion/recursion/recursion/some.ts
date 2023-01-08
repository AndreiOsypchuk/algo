export function some(arr: any[], cb: (item: any) => boolean): boolean {
  if (arr.length === 0) return false;
  if (cb(arr[0])) return true;
  return some(arr.slice(1), cb);
}
