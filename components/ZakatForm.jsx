import { useState } from "react";

const ZakatForm = ({ calculateZakat }) => {
  const [values, setValues] = useState({
    gold: "",
    silver: "",
    cash: "",
    assets: "",
    liabilities: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateZakat(values);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg max-w-lg mx-auto mt-8"
    >
      <h2 className="text-xl font-bold mb-4">Enter Your Assets</h2>
      {["gold", "silver", "cash", "assets", "liabilities"].map((item) => (
        <div key={item} className="mb-3">
          <label className="block text-gray-700 dark:text-gray-300 font-semibold">
            {item.charAt(0).toUpperCase() + item.slice(1)} (in your currency)
          </label>
          <input
            type="number"
            name={item}
            value={values[item]}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1 dark:bg-gray-700 dark:text-white"
          />
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
      >
        Calculate Zakat
      </button>
    </form>
  );
};

export default ZakatForm;
