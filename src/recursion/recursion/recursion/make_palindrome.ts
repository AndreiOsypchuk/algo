export function make_palindrome(str: string): string {
  if (str.length === 1) return str;
  return str[0] + make_palindrome(str.slice(1)) + str[0];
}
