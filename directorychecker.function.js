import fs from "fs";
import fsasync from "fs/promises";
import path from "path";

let currentPath = path.join(process.cwd() + "/storage");
console.log(currentPath);

function checkDirectory() {
  fs.readdir(currentPath, { recursive: true }, (error, files) => {
    if (error) {
      console.log("Err : error reading directory : " + error);
    } else if (files.length == 0) {
      console.log("no files in: " + currentPath);
      fs.mkdir(currentPath + "/images", { recursive: true }, (error, files) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Directory created  at: " + currentPath);
        }
      });
      fs.mkdir(currentPath + "/PDF", { recursive: true }, (error, files) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Directory created  at: " + currentPath);
        }
      });
    } else {
      for (let file of files) {
        console.log(file);
      }
    }
  });
}

checkDirectory();
