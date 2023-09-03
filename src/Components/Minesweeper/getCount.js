export default function getCount(array, value) {
    let count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}