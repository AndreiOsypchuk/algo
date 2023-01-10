import util from "util";
const printObj = (obj: any) => {
  console.log(util.inspect(obj, true, null, true));
};
export function mesure(label: string, fn: Function): void {
  console.log("=================[", label.toUpperCase(), "]=================");
  console.time(label);
  printObj(fn());
  console.timeEnd(label);
}
