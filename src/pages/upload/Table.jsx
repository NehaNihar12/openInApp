import ExcelIcon from "assets/icons/ExcelIcon";
import OptionsDD from "components/OptionsDD";
import React, { useState, useRef, useEffect } from "react";

export default function Table({ data = [], setData }) {

  const [selectedTag, setSelectedTag] = useState("");

  const handleTagChange = (rowIndex, selectedTag) => {
    // Update the 4th column with the selected tag
    const updatedData = [...data];
    const currentTags = updatedData[rowIndex]["selected tags"];

    // Split the existing tags by comma and add the selected tag
    const updatedTags = currentTags
      ? `${currentTags}, ${selectedTag}`
      : selectedTag;
    console.log(updatedTags);

    updatedData[rowIndex]["selected tags"] = updatedTags;
    setData(updatedData);
  };

  return (
    <div class="relative overflow-x-auto mt-10 rounded-lg">

      <table class="w-full bg-Stone-400 p-3 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {Object.keys(data[0] || {}).map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr class="bg-white-primary m-3  shadow-md " key={rowIndex}>
              {Object.entries(row).map(([key, value], cellIndex) => (
                <td key={cellIndex}>
                  {cellIndex === 3 ? (
                    // Render dropdown for the 3rd column (index 2)
                    <select
                      value="select tags"
                      onChange={(e) => {
                        setSelectedTag(e.target.value);
                        handleTagChange(rowIndex, e.target.value);
                      }}
                    >
                      {value.split(",").map((tag, tagIndex) => (
                        <option key={tagIndex} value={tag}>
                          {tag}
                        </option>
                      ))}
                    </select>
                  ) : cellIndex === 4 ? (
                    // Render tags as badges in the 4th column (index 3)
                    value?.split(",")?.map((tag, tagIndex) => (
                      <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        {tag.trim()}
                      </span>
                    ))
                  ) : (
                    // Render other columns
                    value
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
