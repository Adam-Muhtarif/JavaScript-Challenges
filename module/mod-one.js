export default function (...numbers) {
  let result = 0;
  for (let num in numbers) {
    result += numbers[num];
    }
    return result;
}
