export function stringify_fields(obj: any) {
  const res: { [key: string]: any } = {};
  for (let key in obj) {
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      res[key] = stringify_fields(obj[key]);
    } else if (typeof obj[key] === "number") {
      console.log(obj[key]);
      res[key] = obj[key].toString();
    } else {
      res[key] = obj[key];
    }
  }
  return res;
}
