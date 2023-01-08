export function power(base: number, exp: number): number {
  if (exp >= 0) {
    if (exp === 0) return 1;
    return base * power(base, exp - 1);
  } else {
    return 1 / power(base, Math.abs(exp));
  }
}
