import React, { useState } from "react";
import * as XLSX from "xlsx";
import ExcelIcon from "assets/icons/ExcelIcon";
import Table from "./Table";
import Button from "components/Button";
import UploadIcon from "assets/icons/UploadIcon";

const Upload = () => {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setLoader] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadstart = () => {
      // Set loader to true when file loading starts
      setLoader(true);
    };

    setTimeout(() => {
      // Set loader to false when file loading ends
      setLoader(false);

      const data = new Uint8Array(reader.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      // Assuming the data starts from the second row (index 1) and contains headers
      const headers = jsonData[0];
      const excelData = jsonData.slice(1).map((row) => {
        return headers.reduce((obj, header, index) => {
          obj[header] = row[index];
          return obj;
        }, {});
      });

      setTableData(excelData);
    },2000);

    // Read the Excel file as an array buffer
    reader.readAsArrayBuffer(file);
  };

  const handleButtonClick = () => {
    // Trigger the file input click when the button is clicked
    document.getElementById("dropzone-file").click();
  };
  return (
    <div class="h-full min-h-screen flex-col items-center justify-center w-full md:px-12">
      <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white-primary hover:bg-Slate-50  dark:border-gray-600 dark:hover:border-gray-500 "
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <ExcelIcon />
          <p class="mt-10 mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span>Upload your excel sheet</span>{" "}
            <span className="text-blue-primary">here</span>
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          onChange={handleFileChange}
          accept=".csv"
          class="hidden"
        />
        <Button
          onClick={handleButtonClick}
          isLoading={isLoading}
          disabled={isLoading ? true : false}
          icon={!isLoading?<UploadIcon />:null}
        >
          {" "}
          {!isLoading ? "Upload File" : ""}
        </Button>
        {/* <button
        onClick={handleButtonClick}
        className={`mt-4 px-4 py-2 bg-blue-primary text-white rounded-md hover:bg-blue-dark focus:outline-none focus:shadow-outline-blue active:bg-blue-darker ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isLoading ? 'Uploading...' : 'Upload File'}
      </button> */}
      </label>

      {/* Display the table if there is data */}
      {tableData ? <Table data={tableData} setData={setTableData} /> : null}
    </div>
  );
};

export default Upload;
