export default function TextField({
  label,
  type,
  value,
  onChange,
  children
}) {
  return (
    // <div>
    //   <p className=" text-left text-sm font-medium text-slate-700">
    //     {label}
    //   </p>
    //   <input
    //     className=" form-input px-4 py-3 rounded-full bg-gray-fieldcolor-dark peer ..."
    //     type={type}
    //     value={value}
    //     onChange={onChange}
    //   />
    //   <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
    //     Please provide a valid email address.
    //   </p>
    // </div>

    <div>
      <label
        for={type}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div>
        <input
          id={type}
          name={type}
          type={type}
          autocomplete={type}
          required
          value={value}
          onChange={onChange}
          className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 peer"
        ></input>
      </div>
      {children}
    </div>
  );
}
