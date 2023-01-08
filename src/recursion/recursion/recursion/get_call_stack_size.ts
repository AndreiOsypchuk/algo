/**
 * ### Returns call stack size
 * @param start number
 * @returns number
 */
export function get_call_stack_size(start: number): number {
  try {
    return get_call_stack_size(start + 1);
  } catch (e: unknown) {
    return start + 1;
  }
}
