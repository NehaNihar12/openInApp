export default function TextField({ label, type, value, onChange }) {
  return (
    <form>
      <label>
        <p className=" text-left text-sm font-medium text-slate-700">
          {label}
        </p>
        <input
          className=" bg-gray-fieldcolor-dark peer ..."
          type={type}
          value={value}
          onChange={onChange}
        />
        <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
          Please provide a valid email address.
        </p>
      </label>
    </form>
  );
}
