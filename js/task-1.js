function slugify(title) {
    const str = title.toLowerCase().split(" ");

    return str.join("-");
}
console.log("/////////// task-01 ///////////")
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));