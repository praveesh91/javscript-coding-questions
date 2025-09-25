import React from "react";
import { useState } from "react";

const data = [
  {
    id: "1",
    name: "Documents",
    type: "folder",
    children: [
      {
        id: "1-1",
        name: "Work",
        type: "folder",
        children: [
          {
            id: "1-1-1",
            name: "report.docx",
            type: "file",
            size: "2.3 MB",
          },
          {
            id: "1-1-2",
            name: "presentation.pptx",
            type: "file",
            size: "5.1 MB",
          },
        ],
      },
      {
        id: "1-2",
        name: "Personal",
        type: "folder",
        children: [
          {
            id: "1-2-1",
            name: "resume.pdf",
            type: "file",
            size: "1.2 MB",
          },
          {
            id: "1-2-2",
            name: "photo.jpg",
            type: "file",
            size: "890 KB",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Projects",
    type: "folder",
    children: [
      {
        id: "2-1",
        name: "Website Redesign",
        type: "folder",
        children: [
          {
            id: "2-1-1",
            name: "index.html",
            type: "file",
            size: "15 KB",
          },
          {
            id: "2-1-2",
            name: "styles.css",
            type: "file",
            size: "8 KB",
          },
          {
            id: "2-1-3",
            name: "assets",
            type: "folder",
            children: [
              {
                id: "2-1-3-1",
                name: "logo.png",
                type: "file",
                size: "45 KB",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "README.md",
    type: "file",
    size: "2 KB",
  },
];

const NestedFolders = () => {
  return (
    <div className="p-8 max-w-sm mx-auto">
      <ul>
        <li className="my-1.5">
          <span className="flex items-center gap-1.5">Home</span>
          <ul className="pl-6">
            {data.map(
              (el) =>
                el.type === "folder" && (
                  <li className="my-1.5">
                    <span className="flex items-center gap-1.5">{el.name}</span>
                    <ul className="pl-6">
                      {el.children.map((el) => (
                        <Folder folder={el} />
                      ))}
                    </ul>
                  </li>
                )
            )}
          </ul>
        </li>
      </ul>
    </div>
  );
};
const Folder = ({ folder }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="my-1.5" onClick={() => setIsOpen(!isOpen)}>
      {folder.type === "folder" && (
        <span className="flex items-center gap-1.5">{folder.name}</span>
      )}
      {
        <ul className="pl-6">
          {folder.type === "folder" &&
            folder.children.map((el) => <Folder folder={el} />)}
          <span className="flex items-center gap-1.5">
            {folder.type === "file" && folder.name}
          </span>
        </ul>
      }
    </li>
  );
};

export default NestedFolders;
