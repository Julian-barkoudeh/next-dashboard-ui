import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, subjectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
type Subject = {
  id: number;
  name: string;
  teachers: string[];
};
const columns = [
  { header: "Subject Name", accessor: "name" },
  {
    header: "Teachers",
    accessor: "teachers",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];
const SubjectsPage = () => {
  const renderRow = (item: Subject) => (
    <tr
      key={item.id}
      className="even:bg-slate-50 text-sm hover:bg-lamaPurpleLight  border-b border-gray-200"
    >
      <td className="flex gap-4 items-center   p-4">
        <h3 className="font-semibold">{item.name}</h3>
      </td>
      <td className="hidden md:table-cell">{item.teachers.join(",")}</td>
      <td className="">
        <div className="flex items-center gap-2">
          <Link href={`/list/subjects/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
              <Image src="/delete.png" alt="" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white rounded-md w-full h-full p-4 flex-1 m-4 mt-0">
      {/*Top*/}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Subjects</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="rounded-full w-8 h-8 items-center justify-center flex bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="rounded-full w-8 h-8 items-center justify-center flex bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && (
              <button className="rounded-full w-8 h-8 items-center justify-center flex bg-lamaYellow">
                <Image src="/plus.png" alt="" width={14} height={14} />
              </button>
            )}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={subjectsData} />
      <div className="">{/*List*/}</div>
      <Pagination />
    </div>
  );
};

export default SubjectsPage;
