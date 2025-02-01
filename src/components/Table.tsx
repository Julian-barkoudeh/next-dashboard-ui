import Image from "next/image";
const Table = ({
  columns,
  renderRow,
  data,
}: {
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
}) => {
  if (data.length > 0) {
    return (
      <table className="w-full mt-4 ">
        <thead className="">
          <tr className="text-left text-gray-500 text-sm">
            {columns.map((col) => (
              <th key={col.accessor} className={col.className || ""}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{data.map((item) => renderRow(item))}</tbody>
      </table>
    );
  } else {
    return <div className="bg-gray-100 w-full h-[50px] rounded-md mt-4"></div>;
  }
};

export default Table;
