export function mesure(label: string, fn: Function): void {
  console.log("=================[", label.toUpperCase(), "]=================");
  console.time(label);
  console.log(fn());
  console.timeEnd(label);
}
