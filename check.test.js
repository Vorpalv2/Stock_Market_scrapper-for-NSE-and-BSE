import os from "os";
import path from "path";
import fsm from "fs/promises";
import fs from "fs";
import { APIError } from "./utils/APIError.handler.js";

let downloadsdir = path.join(os.homedir(), "Downloads");

async function dirhandler() {
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

dirhandler();

//   console.log(path.join(downloadsdir, "Storage"));

// console.log(os.homedir() + "\\Downloads");
// console.log(os.userInfo().username);
