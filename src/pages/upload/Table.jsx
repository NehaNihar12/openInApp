import OptionsDD from "components/OptionsDD";
import React, { useState, useRef, useEffect } from "react";

// export default function Table1({ tableData = [],setTableData }) {
//   const isLinkColumn = (columnName) => {
//     return columnName.toLowerCase() === "links";
//   };

//   const isTagsColumn = (columnName) => {
//     return columnName.toLowerCase() === "select tags";
//   };

//   const isSelectedTagsColumn = (columnName) => {
//     return columnName.toLowerCase() === "selected tags";
//   };

//   const selectedTagsRef = useRef({});
//   useEffect(() => {
//     console.log(tableData);
//   }, []);

//   const handleTagSelection = (rowIndex,colIndex, selectedTag) => {
//     if (!selectedTagsRef.current[rowIndex]) {
//       selectedTagsRef.current[rowIndex] = [];
//     }
//     selectedTagsRef.current[rowIndex].push(selectedTag);
//     console.log(selectedTagsRef.current[rowIndex])

//     // setTableData((prevTable)=>{
//     //     console.log(prevTable)
//     //     prevTable[rowIndex+1][colIndex+1] = selectedTagsRef.current[rowIndex]
//     // })
//   };

//   return (
//     <div className="mt-4 flex-col justify-center">
//       <h2 className="text-2xl font-bold mb-4">Uploads</h2>
//       <table className="min-w-full border bg-white">
//         <thead>
//           <tr>
//             {tableData[0]?.map((header, index) => (
//               <th key={index} className="border p-2">
//                 {isTagsColumn(header) ? "Add Tags" : header}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {tableData?.slice(1)?.map((row, rowIndex) => (
//             <tr key={rowIndex}>
//               {row.map((cell, colIndex) => (
//                 <td key={colIndex} className="border p-2">
//                   {isLinkColumn(tableData[0][colIndex]) ? (
//                     <a
//                       href={cell}
//                       className="text-blue-primary underline cursor-pointer"
//                     >
//                       {cell}
//                     </a>
//                   ) : isTagsColumn(tableData[0][colIndex]) ? (
//                     <>
//                       <OptionsDD
//                         buttonName="Select Tags"
//                         options={cell.split(",")}
//                         onSelect={(selectedTag) =>
//                           handleTagSelection(rowIndex,colIndex, selectedTag)
//                         }
//                       />
//                     </>
//                   )  : (
//                     <p key={colIndex} className="border p-2">
//                       {cell}
//                     </p>
//                   )}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

export default function Table({ tableData = [] }) {
  const isLinkColumn = (columnName) => {
    return columnName.toLowerCase() === "links";
  };
  const isTagsColumn = (columnName) => {
    return columnName.toLowerCase() === "select tags";
  };

  const selectedTagsRef = useRef({});
  useEffect(() => {
    console.log(tableData);
  }, []);

  const handleTagSelection = (rowIndex, colIndex, selectedTag) => {
    if (!selectedTagsRef.current[rowIndex]) {
      selectedTagsRef.current[rowIndex] = [];
    }
    selectedTagsRef.current[rowIndex].push(selectedTag);
    console.log(selectedTagsRef.current[rowIndex]);

    // setTableData((prevTable)=>{
    //     console.log(prevTable)
    //     prevTable[rowIndex+1][colIndex+1] = selectedTagsRef.current[rowIndex]
    // })
  };

  return (
    <div class="relative overflow-x-auto mt-10 rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {tableData[0]?.map((header, index) => (
              <th scope="col" class="px-6 py-3" key={index}>
                {isTagsColumn(header) ? "Add Tags" : header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData?.slice(1)?.map((row, rowIndex) => (
            <tr
              class="bg-white border shadow-md dark:border-gray-700"
              key={rowIndex}
            >
              {row.map((cell, colIndex) =>
                colIndex === 0 ? (
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {cell}
                  </th>
                ) : (
                  <td class="px-6 py-4">
                    {isLinkColumn(tableData[0][colIndex]) ? (
                      <a
                        href={cell}
                        className="text-blue-primary underline cursor-pointer"
                      >
                        {cell}
                      </a>
                    ) : isTagsColumn(tableData[0][colIndex]) ? (
                      <>
                        <OptionsDD
                          buttonName="Select Tags"
                          options={cell.split(",")}
                          onSelect={(selectedTag) =>
                            handleTagSelection(rowIndex, colIndex, selectedTag)
                          }
                        />
                      </>
                    ) : (
                      <p key={colIndex} className="border p-2">
                        {cell}
                      </p>
                    )}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
