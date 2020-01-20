/*
* 1) first we split the string ("-"),  "background-color" -> ["background", "color"];
* 2) for every element of the array we call map function and capitalize the
* first letter of every element but the first one:
 * ["background", "color"] -> ["background", "Color"];
 * 3) join the array into a single string separated by an empty string:
 * ["background", "Color"] -> "backgroundColor";
 */
export const camelize = (str) => {
    return str.split("-").map((el, i) => {
        if(i != 0) {
            return el[0].toUpperCase() + el.slice(1);
        } else {
            return el;
        }
    }).join("");
}
