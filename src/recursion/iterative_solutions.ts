export function iterative_fib_array(n: number): number[] {
  const res: number[] = [1];
  for (let i = 0; i < n; i++) {
    if (res.length === 1) res.push(1);
    else res.push(res[i] + res[i - 1]);
  }
  return res;
}

export function iterative_fib(n: number): number {
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

export function iterative_factorial(n: number): number {
  let res = 1;
  for (let i = 1; i < n + 1; i++) {
    res = res * i;
  }
  return res;
}

export function iterative_power(base: number, exp: number) {
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

export function iterative_arr_prod(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

export function iterative_count_down(length: number): number[] {
  let res: number[] = [];
  for (let i = length; i >= 0; i--) {
    res.push(i);
  }
  return res;
}
export function iterative_sum(n: number): number {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    res += i;
  }
  return res;
}

export function iterative_reverse(str: string): string {
  let res: string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

export function iterative_is_palindrome(str: string): boolean {
  let left = 0;
  let right = str.length - 1;
  while (left <= right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}
