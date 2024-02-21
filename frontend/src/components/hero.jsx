import { useState } from "react";

function CompanyForm() {
  const [companyName, setCompanyName] = useState("");
  const [fileType, setFileType] = useState("png");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ companyName, fileType }));
    await fetch("http://localhost:3000/form-submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ companyName, fileType }),
    });
    console.log(
      `Data Fetched for ${companyName} in ${fileType} format, Open your Downloads and look inside Storage Folder`
    );
  };

  return (
    <div className="h-[92%] flex items-center  justify-center bg-gradient-to-tr from-indigo-700 via-violet-500 to-blue-400">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Company Information Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="company-name" className="block font-semibold mb-1">
              Company Name:
            </label>
            <input
              type="text"
              id="company-name"
              name="company-name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="file-type" className="block font-semibold mb-1">
              File Type:
            </label>
            <select
              id="file-type"
              name="file-type"
              value={fileType}
              onChange={(e) => setFileType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            >
              <option value="png">PNG</option>
              <option value="pdf">PDF</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-green-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CompanyForm;
