import {
  collect_odd,
  collect_odd1,
  count_down,
  factorial,
  fib_arr,
  fib_index,
  fib_memo,
  get_call_stack_size,
} from "./recursion";
import { power } from "./recursion/recursion/recursion/power";

function iterative_fib_array(n: number): number[] {
  const res: number[] = [1];
  for (let i = 0; i < n; i++) {
    if (res.length === 1) res.push(1);
    else res.push(res[i] + res[i - 1]);
  }
  return res;
}
function iterative_fib(n: number): number {
  let res: number = 1;
  let prev: number = 0;
  let prevprev: number = 0;
  for (let i = 0; i < n; i++) {
    prevprev = prev;
    prev = res;
    res = prevprev + prev;
  }
  return res;
}

function iterative_factorial(n: number): number {
  let res = 1;
  for (let i = 1; i < n + 1; i++) {
    res = res * i;
  }
  return res;
}

// TODO: Iterative power

console.log(collect_odd1([3]));
console.log(-4, Math.abs(-4), 123 * power(10, -4));
console.log(-3, Math.abs(-3), 123 * power(10, -3));
console.log(-2, Math.abs(-2), 123 * power(10, -2));
console.log(-1, Math.abs(-1), 123 * power(10, -1));
console.log(power(2, 10));
