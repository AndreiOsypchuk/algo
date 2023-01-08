/**
  ### Count down recursively
 ``` 
  export default function count_down(n: number): number[] {
    if (n === 0) return [0];
    return [n, ...count_down(n - 1)];
  }
```
 **/
export function count_down(n: number): number[] {
  if (n === 0) return [0];
  return [n, ...count_down(n - 1)];
}
