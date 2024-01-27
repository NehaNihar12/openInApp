export default function TextField({ label, type, value, onChange, children }) {
  return (
    <div>
      <label
        htmlFor={type}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div>
        <input
          id={type}
          name={type}
          type={type}
          autoComplete={type}
          required
          value={value}
          onChange={onChange}
          className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-text-secondary focus:ring-inset hover:ring-indigo-600 a focus:outline-none focus:ring-1 focus:ring-indigo-600 sm:text-sm sm:leading-6 peer"
        ></input>
      </div>
      {children}
    </div>
  );
}
