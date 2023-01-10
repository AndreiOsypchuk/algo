import { mesure } from "./mesure";
import {
  arr_prod,
  capitalize_arr,
  collect_odd,
  collect_odd1,
  count_down,
  extract_string,
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
  stringify_fields,
  sum,
} from "./recursion";
import { nested_even_sum } from "./recursion/recursion/recursion/nested_even_sum";
import { power } from "./recursion/recursion/recursion/power";

// TODO: iterative make palindrome, flatten, some
// TODO: Roman Numerals
mesure("recu cap", () => capitalize_arr(["andrei", "hello"]));
var obj = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};
const obj1 = {
  num: "1",
  test: [],
  data: {
    val: "4",
    info: {
      isRight: true,
      random: "66",
    },
  },
};
mesure("nested_even_sum", () => nested_even_sum(obj));
mesure("stringify_obj_fields", () => stringify_fields(obj));
mesure("extract_string", () => extract_string(obj1).length);

// 1	 -> I
// 2	 -> II
// 3	 -> III
// 4	 -> IV
// 5	 -> V
// 6	 -> VI
// 7	 -> VII
// 8	 -> VIII
// 9	 -> IX
// 10		-> X
