import removeRepeatedValues from "./removeRepeatedValues";

export default function sortArray(array) {
    array.sort(function(a, b){return a-b});
    removeRepeatedValues(array);
}