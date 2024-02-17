import fsm, { stat, statfs } from "fs/promises";
import path from "path";

let rootDir = process.cwd();
let storagePath = path.join(rootDir + "/storage");

async function createDirectory(DirectoryName) {
  try {
    return await fsm.mkdir(DirectoryName, { recursive: true });
  } catch (error) {
    throw new Error("Error Creating Directory : ", error);
  }
}

async function checkDirectory() {
  try {
    let createdDirectory = await createDirectory("storage", rootDir);
    console.log(createdDirectory);
    let openedDirectory = await fsm.opendir(createdDirectory, {
      recursive: true,
    });
    console.log(openedDirectory);
    await createDirectory(
      path.join(openedDirectory.path, "images"),
      storagePath
    );
    await createDirectory(path.join(openedDirectory.path, "PDF"), storagePath);
  } catch (error) {
    throw new Error(
      "Error Checking Directory : " + error + " with code " + error.errno
    );
  }
}

export { checkDirectory };
