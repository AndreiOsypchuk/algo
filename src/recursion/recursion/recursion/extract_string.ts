export function extract_string(obj: any, res: string[] = []): string[] {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      res.push(...extract_string(obj[key]));
    } else if (typeof obj[key] === "string") {
      res.push(obj[key]);
    }
  }
  return res;
}
