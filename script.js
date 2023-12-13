// script.js
function toCase(text) {
    if (text === "") {
        return "-";
    }

    const lowercase = text.toLowerCase();
    const uppercase = text.toUpperCase();
    const result = `${lowercase}-${uppercase}`;

    return result;
}

// DO not change the code below

const inputText = prompt("Enter text:");
alert(toCase(inputText));
