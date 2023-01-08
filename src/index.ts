import { mesure } from "./mesure";
import {
  arr_prod,
  capitalize_arr,
  collect_odd,
  collect_odd1,
  count_down,
  factorial,
  fib_arr,
  fib_index,
  fib_memo,
  flatten,
  get_call_stack_size,
  is_palindrome,
  make_palindrome,
  reverse,
  some,
  sum,
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

function iterative_power(base: number, exp: number) {
  if (exp === 0) return 1;
  if (exp === 1) return base;
  let res = 1;

  if (exp < 0) {
    exp = Math.abs(exp);
    for (let i = 1; i <= exp; i++) {
      res *= 1 / base;
    }
  } else {
    for (let i = 1; i <= exp; i++) {
      res *= base;
    }
  }

  return res;
}

function iterative_arr_prod(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function iterative_count_down(length: number): number[] {
  let res: number[] = [];
  for (let i = length; i >= 0; i--) {
    res.push(i);
  }
  return res;
}
function iterative_sum(n: number): number {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    res += i;
  }
  return res;
}

function iterative_reverse(str: string): string {
  let res: string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

function iterative_is_palindrome(str: string): boolean {
  // if(str.length === 1) return false;
  // if(str.length === 2) return str[0] === str[1]
  let left = 0;
  let right = str.length - 1;
  while (left <= right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}
// console.log(collect_odd1([3]));
// console.log(-4, Math.abs(-4), 123 * power(10, -4));
// console.log(-3, Math.abs(-3), 123 * power(10, -3));
// console.log(-2, Math.abs(-2), 123 * power(10, -2));
// console.log(-1, Math.abs(-1), 2 * power(10, -7));
// // console.log(power(2, 10));
// console.log(2 * iterative_power(10, -6));
// console.log((2 * iterative_power(10, -6)).toString(2));
// mesure("recursive", () => power(2, 8354));
// mesure("iterative", () => iterative_power(10, 22572));
// const arr1 = iterative_count_down(10000);
// mesure("iter product", () => iterative_arr_prod(arr1));
// mesure("recu product", () => arr_prod(count_down(8354)));
// mesure("recu count", () => count_down(8000));
// mesure("iter count", () => iterative_count_down(1200000));

// mesure("iter sum", () => iterative_sum(100));
// mesure("recu sum", () => sum(100));
// mesure("recu reverse", () => reverse("Hello this is a thing"));
// mesure("iterreverse", () => iterative_reverse("Hello this is a thing"));
// mesure("recu palindrome", () => is_palindrome("amanaplanacanalpanama"));
// mesure("iter palindrome", () =>
//   iterative_is_palindrome("amanaplanacanalpanama")
// );
// mesure("reverse", () => reverse("andrei"));
// console.log(is_palindrome(make_palindrome("andrei")));
// mesure("some", () =>
//   some(["a", "b", "c", "d", 1, "a", " b", "x"], (item: any) => item === "a")
// );
// mesure("flatten", () => flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
// mesure("flatten", () => flatten([1, [2, 2]]));
// TODO: iterative make palindrome, flatten, some

mesure("recu cap", () => capitalize_arr(["andrei", "hello"]));
