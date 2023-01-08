export function flatten(arr: any[], res: any[] = []): any[] {
  if (arr.length === 0) return res;
  if (Array.isArray(arr[0])) flatten(arr[0], res);
  else res.push(arr[0]);
  return flatten(arr.splice(1), res);
}
