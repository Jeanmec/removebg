const { removeBackground } = require("@imgly/background-removal-node");
const fs = require("fs");
const path = require("path");
const uniqueFilename = require("unique-filename");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const cors = require("cors");
var bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT || 3003;

app.use(bodyParser.json({ limit: "3mb" }));
app.use(bodyParser.urlencoded({ limit: "3mb", extended: true }));

const corsOptions = {
  origin: ["http://localhost:3000", "https://remove-my-background.com"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const removeBackgroundConfig = {
  debug: false,
  output: {
    quality: 1,
  },
};

app.post("/api/remove-background", async (req, res) => {
  const randomTmpfile = uniqueFilename("./temp/", "image");

  const fileExtension = getFileExtensionFromBase64(req.body.file.base64);

  createFileFromBase64(req.body.file.base64, randomTmpfile, fileExtension);

  removeBackground(
    randomTmpfile + "." + fileExtension,
    removeBackgroundConfig
  ).then(async (blob) => {
    const base64 = await blobToBase64(blob);
    res.status(200).send({
      base64,
      fileName: getFileNameWithoutExtension(req.body.file.name) + ".png",
    });
    deleteFile(randomTmpfile + "." + fileExtension);
  });
});

server.listen(port, () => {
  console.log(`App is listening on port ${port}.`);
});

function getFileExtensionFromBase64(base64String) {
  try {
    const matches = base64String.match(/^data:image\/([a-zA-Z]+)/);
    const extension = matches ? matches[1] : "unknown";

    return extension;
  } catch (error) {
    console.error("Error extracting file extension:", error.message);
    return null;
  }
}

function createFileFromBase64(base64String, filePath, desiredExtension) {
  try {
    const supportedExtensions = ["jpeg", "jpg", "png"];
    if (!supportedExtensions.includes(desiredExtension.toLowerCase())) {
      console.error(
        "Unsupported file extension. Supported extensions: jpeg, jpg, png"
      );
      return;
    }

    const dataBuffer = Buffer.from(base64String.split(",")[1], "base64");

    const fileName =
      path.basename(filePath, path.extname(filePath)) + `.${desiredExtension}`;
    const newFilePath = path.join(path.dirname(filePath), fileName);

    fs.writeFileSync(newFilePath, dataBuffer);

    console.log(newFilePath);
    return true;
  } catch (error) {
    console.error("Error creating file:", error.message);
    return false;
  }
}

async function blobToBase64(blob) {
  let buffer = Buffer.from(await blob.arrayBuffer());
  return "data:" + blob.type + ";base64," + buffer.toString("base64");
}

function deleteFile(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error("Error deleting file:", err);
    } else {
      console.log("File deleted:", filePath);
    }
  });
}

function getFileNameWithoutExtension(fileName) {
  const lastDotIndex = fileName.lastIndexOf(".");

  return lastDotIndex !== -1 ? fileName.slice(0, lastDotIndex) : fileName;
}
