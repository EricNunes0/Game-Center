import getCount from "./getCount";

export default function removeRepeatedValues(array) {
    for(let element of array) {
        let foundElements = getCount(array, element);
        if(foundElements > 1) {
            array.splice(array.indexOf(element), foundElements - 1);
        };
    };
}