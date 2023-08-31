import { useField,ErrorMessage } from "formik";
// eslint-disable-next-line react/prop-types
const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
  return (
    <div className="flex flex-col mb-3">
      <label className="ms-1">{label}:</label>
      <input
        {...field}
        {...props}
        className={`border-gray-900  px-1 py-2 border rounded-md ${meta.touched && meta.error ? "border-red-700" : "border-gray-700"}`}
      />
      <ErrorMessage component="div" name={field.name} className="text-red-700 text-xs" />
    </div>
  )
}

export default TextField