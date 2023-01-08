/**
 *
 * #### Get n-th element of Fibbonacci sequence
 * ```
 * [ 1, 1, 2, 3, 5, 8, 13, 21, 34, ... ]
 * ```
 */
export function fib_index(n: number): number {
  if (n <= 1) return 1;
  return fib_index(n - 1) + fib_index(n - 2);
}
