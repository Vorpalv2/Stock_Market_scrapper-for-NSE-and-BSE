import fsm from "fs/promises";
import fs from "fs";
import path from "path";
import { APIError } from "./utils/APIError.handler.js";
import os from "os";

let rootDir = process.cwd();
let storagePath = path.join(rootDir + "/storage");
let downloadPath = path.join(os.homedir(), "Downloads");

let downloadsdir = path.join(os.homedir(), "Downloads");

async function checkDirectory() {
  if (!fs.existsSync(path.join(downloadsdir, "Storage"))) {
    await createDir(path.join(os.homedir(), "Downloads", "Storage"));
    console.log("Storage Directory Created");
  }

  console.log("Storage Directory Already Exists");
  console.log("Create the two nested Directories");
  await createDir(path.join(os.homedir(), "Downloads", "Storage", "images"));
  console.log("Images Directory Created");
  await createDir(path.join(os.homedir(), "Downloads", "Storage", "PDF"));
  console.log("PDF Directory Created");
}

async function createDir(dirPath) {
  try {
    let createDirPath = await fsm.mkdir(dirPath, { recursive: true });
    console.log(`Directory Created at : ${createDirPath}`);
  } catch (error) {
    throw new APIError("Error : " + error, 505, false);
  }
}

async function saveToDownloads() {
  let openedDownloadsDir = await fsm.opendir(downloadPath);
  console.log(openedDownloadsDir);
}

export { checkDirectory };
