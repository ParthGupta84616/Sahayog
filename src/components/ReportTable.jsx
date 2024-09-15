import React, { useState } from "react";

const Table = () => {
  // Define initial data
  const initialData = [
    { id: 12, performance: ["Uses telephone with unfamiliar speakers"] },
    { id: 11, performance: ["Uses telephone with familiar speakers"] },
    { id: 10, performance: ["Follows taped stories"] },
    {
      id: 9,
      performance: [
        "Understands conversation with unfamiliar speaker without lip reading",
      ],
    },
    { id: 8, performance: ["Understands conversation with familiar speaker"] },
    { id: 7, performance: ["Responds appropriately to simple questions"] },
    {
      id: 6,
      performance: ["Understands some spoken words without performatives"],
    },
    { id: 5, performance: ["Understands some common phrases"] },
    {
      id: 4,
      performance: [
        "Understands some spoken words with additional performatives",
      ],
    },
    { id: 3, performance: ["Can identify some environmental sounds"] },
    { id: 2, performance: ["Responds to some speech sounds"] },
    { id: 1, performance: ["Detects some environmental sounds"] },
    { id: 0, performance: ["Unaware of environmental sounds"] },
  ];

  const [data, setData] = useState(
    initialData.map((row) => ({
      ...row,
      columns: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "", // Adjusted for required columns
      ],
    }))
  );

  // Handle cell change
  const handleChange = (rowIndex, colIndex, value) => {
    const newData = data.map((row, rIdx) =>
      rIdx === rowIndex
        ? {
            ...row,
            columns: row.columns.map((col, cIdx) =>
              cIdx === colIndex ? value : col
            ),
          }
        : row
    );
    setData(newData);
  };

  // Define column headers and row labels
  const headers = [
    "Sr. No.",
    "Category of Performance",
    "Quite",
    "Noise",
    "Time after CI (Months)",
    "Before CI",
    "3",
    "6",
    "9",
    "12",
    "15",
    "18",
    "21",
  ];

  return (
    <div className="overflow-x-auto mt-4">
      <h2 className="text-2xl font-extrabold mb-6 text-center text-black">
        Category of Auditory Perception
      </h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-blue-100 text-blue-800">
          <tr>
            {headers.slice(0, 5).map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider border border-blue-300"
              >
                {header}
              </th>
            ))}
            <th
              colSpan={8}
              className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider border border-blue-300"
            >
              Time after CI (Months)
            </th>
          </tr>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border border-blue-300"></th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border border-blue-300"></th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border border-blue-300"></th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border border-blue-300"></th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border border-blue-300"></th>
            <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider border border-blue-300">
              Before CI
            </th>
            {[3, 6, 9, 12, 15, 18, 21].map((time, index) => (
              <th
                key={index}
                className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider border border-blue-300"
              >
                {time}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr
              key={row.id}
              className={`bg-${rowIndex % 2 === 0 ? "blue-50" : "gray-50"}`}
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border border-gray-300">
                {12 - rowIndex}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border border-gray-300">
                {row.performance[0]}
              </td>
              {row.columns.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm border border-gray-300"
                >
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) =>
                      handleChange(rowIndex, colIndex, e.target.value)
                    }
                    className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
