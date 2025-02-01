import Image from "next/image";

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between my-4">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400"> View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSkyLight rounded-md p-4">
          <div className="">
            <div className="flex justify-between w-full items-center">
              <h1 className="font-semibold text-gray-600 ">
                Lorem ipsu dolor ipsum
              </h1>
              <span className="text-gray-500 text-xs bg-white rounded-md px-1 py-1">
                2025-01-01
              </span>
            </div>
          </div>
          <p className="mt-2 text-gray-400 text-sm">
            Lorem ipsum dolor slt amet connecteur qscqsc qsfbqkjhsfb qfjbkqjbsf
            qcbqcu qscjàze,c acsihnc
          </p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="">
            <div className="flex justify-between w-full items-center">
              <h1 className="font-semibold text-gray-600 ">
                Lorem ipsu dolor ipsum
              </h1>
              <span className="text-gray-500 text-xs bg-white rounded-md px-1 py-1">
                2025-01-01
              </span>
            </div>
          </div>
          <p className="mt-2 text-gray-400 text-sm">
            Lorem ipsum dolor slt amet connecteur qscqsc qsfbqkjhsfb qfjbkqjbsf
            qcbqcu qscjàze,c acsihnc
          </p>
        </div>
        <div className="bg-lamaPurpleLight rounded-md p-4">
          <div className="">
            <div className="flex justify-between w-full items-center">
              <h1 className="font-semibold text-gray-600 ">
                Lorem ipsu dolor ipsum
              </h1>
              <span className="text-gray-500 text-xs bg-white rounded-md px-1 py-1">
                2025-01-01
              </span>
            </div>
          </div>
          <p className="mt-2 text-gray-400 text-sm">
            Lorem ipsum dolor slt amet connecteur qscqsc qsfbqkjhsfb qfjbkqjbsf
            qcbqcu qscjàze,c acsihnc
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
