export default function TextField({ label,type, error, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      <input
        {...props}
        type={type}
        className={`w-full rounded-md border px-4 py-2.5
          focus:outline-none focus:ring-1
          ${
            error
              ? "border-red-500 focus:ring-red-400"
              : "border-gray-300 focus:ring-gray-400"
          }`}
      />

      {error && (
        <p className="text-xs text-red-500 mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
