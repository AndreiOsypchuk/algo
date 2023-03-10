export function is_palindrome(str: string): boolean {
  if (str.length === 0) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str[str.length - 1]) return is_palindrome(str.slice(1, -1));
  return false;
}
