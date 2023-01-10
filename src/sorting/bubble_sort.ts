export function bubble_sort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let swp = false;
    for (let j = 0; j < arr.length; j++) {
      console.log("i", arr[i], "j", arr[j]);
      if (arr[i] < arr[j]) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
        console.log("swap", arr);
        swp = true;
      }
    }
    if (!swp) break;
  }
}
