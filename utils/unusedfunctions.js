async function createDirectory(DirectoryName) {
  try {
    return await fsm.mkdir(DirectoryName, { recursive: true });
  } catch (error) {
    throw new APIError("Error Creating Directory :" + error, 505, false);
  }
}

async function checkDirectory() {
  if (!fs.existsSync(storagePath)) {
    console.log(storagePath + " does no exists, creating one now");
    try {
      let createdDirectory = await createDirectory("storage", rootDir);
      let openedDirectory = await fsm.opendir(createdDirectory, {
        recursive: true,
      });
      await createDirectory(
        path.join(openedDirectory.path, "images"),
        storagePath
      );
      await createDirectory(
        path.join(openedDirectory.path, "PDF"),
        storagePath
      );
    } catch (error) {
      throw new APIError(error, 505, false);
    }
  } else {
    return;
  }
}
