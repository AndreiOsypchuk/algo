export function nested_even_sum(obj: any, sum: number = 0): number {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      sum += nested_even_sum(obj[key]);
    } else if (typeof obj[key] === "number") {
      sum += obj[key] % 2 === 0 ? obj[key] : 0;
    }
  }
  return sum;
}
