function splitCamelCase(name) {
  let words = [];
  let currentWord = "";

  for (let i = 0; i < name.length; i++) {
    const char = name[i];
    if (char === char.toLowerCase()) {
      currentWord += char;
    } else {
      if (currentWord !== "") {
        words.push(currentWord);
        currentWord = "";
      }
      currentWord += char.toLowerCase();
    }
  }

  if (currentWord !== "") {
    words.push(currentWord);
  }

  return words.join(" ");
}

function combineCamelCase(words, type) {
  let combined = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i].trim();
    if (type === "C" || i > 0) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    }
    combined += word;
  }

  if (type === "M") {
    combined += "()";
  }

  return combined;
}

function processData(input) {
  const lines = input.split("\n");
  for (let line of lines) {
    const [operation, type, words] = line.split(";");
    if (operation === "S") {
      console.log(splitCamelCase(words));
    } else if (operation === "C") {
      console.log(combineCamelCase(words.split(" "), type));
    }
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
