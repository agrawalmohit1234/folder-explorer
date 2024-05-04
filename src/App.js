import React from "react";
import Folder from "./components/Folder/folder";
import "./styles.css";

const folder = {
  name: "Root",
  isFolder: true,
  items: [
    {
      name: "Src",
      isFolder: true,
      items: [
        { name: "App.js", isFolder: false },
        { name: "Index.js", isFolder: false },
        { name: "Main.js", isFolder: false },
      ],
    },
    {
      name: "Components",
      isFolder: true,
      items: [
        {
          name: "Folder",
          isFolder: true,
          items: [{ name: "Folder.js", isFolder: false }],
        },
        { name: "File.js", isFolder: false },
        { name: "Data.js", isFolder: false },
      ],
    },
    { name: "Package.json", isFolder: false },
  ],
};

export default function App() {
  return <Folder explorer={folder} />;
}
