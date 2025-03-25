function convertToBinary() {
    let text = document.getElementById("inputText").value;
    let binary = text.split("").map(char => char.charCodeAt(0).toString(2)).join(" ");
    document.getElementById("outputText").value = binary;
}

function convertToText() {
    let binary = document.getElementById("inputText").value;
    let text = binary.split(" ").map(bin => String.fromCharCode(parseInt(bin, 2))).join("");
    document.getElementById("outputText").value = text;
}

function copyOutput() {
    let output = document.getElementById("outputText");
    output.select();
    document.execCommand("copy");
}
