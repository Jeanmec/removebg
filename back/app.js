const { removeBackground } = require("@imgly/background-removal-node");
const fs = require("fs");

let image_src = "./toto.jpeg";

removeBackground(image_src).then(async (blob) => {
  writeToFile("output.txt", await blobToBase64(blob));
});

async function blobToBase64(blob) {
  let buffer = Buffer.from(await blob.arrayBuffer());
  return "data:" + blob.type + ";base64," + buffer.toString("base64");
}

function writeToFile(filePath, content) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("Content written to file:", filePath);
    }
  });
}
