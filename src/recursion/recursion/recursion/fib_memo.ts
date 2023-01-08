export function fib_memo(
  n: number,
  memo: { [key: string]: number } = {}
): number {
  if (n <= 1) return 1;
  if (memo[n] !== undefined) return memo[n];
  memo[n] = fib_memo(n - 1, memo) + fib_memo(n - 2, memo);
  return memo[n];
}
