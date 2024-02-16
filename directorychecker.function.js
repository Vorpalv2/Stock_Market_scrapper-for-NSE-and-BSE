import fs from "fs";
import path from "path";

let currentPath = path.join(process.cwd() + "/storage");
console.log(currentPath);

function checkDirectory(directoryName, currentDirectory) {
  fs.readdir(currentPath, { recursive: true }, (error) => {
    if (error) {
      console.log("Err : error reading directory : " + error);
    } else {
      console.log("no files in: " + currentPath);

      fs.mkdir(
        currentDirectory + "/" + directoryName,
        { recursive: true },
        (error) => {
          if (error) {
            console.log("Error Occured :" + error);
          } else {
            console.log(
              `Directory by the name of ${directoryName} created at ${currentDirectory}`
            );
          }
        }
      );
    }
  });
}

checkDirectory("images", currentPath);
checkDirectory("PDF", currentPath);
