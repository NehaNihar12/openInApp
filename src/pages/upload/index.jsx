import ExcelIcon from "assets/icons/ExcelIcon";

const Upload = () => {
  return (
    
      <div class="h-screen flex-col items-center justify-center w-full">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-slate-300  dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <ExcelIcon/>
            <p class="mt-10 mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Upload your excel sheet</span> <span className="text-blue-primary">here</span>
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" class="hidden" />
        </label>
    </div>
  );
};

export default Upload;
