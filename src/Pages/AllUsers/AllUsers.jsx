import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrTasks } from "react-icons/gr";
import { GoTasklist } from "react-icons/go";
import { LuUsers } from "react-icons/lu";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import ModelBtn from "../../Components/ModalBtn/ModelBtn";

const data = [
  {
    name: "Page A",
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",

    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",

    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",

    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",

    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",

    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",

    pv: 4300,
    amt: 2100,
  },
];
const AllUsers = () => {
  return (
    <div className=" h-[90%] w-full m-10 flex  gap-4 ">
      <div className="w-[65%]  rounded-lg ">
        {/* Users information */}
        <div className="flex flex-col gap-5 p-5 bg-linear rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-[#f5deb3]">Users Info</h1>
          <LineChart width={1000} height={300} data={data}>
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
      <div className="flex-1 h-full">
        <span className="rounded-lg mb-5 shadow-2xl bg-linear w-full text-white h-[100px] flex justify-between px-5 items-center">
          <div className="flex items-center gap-4">
            <GrTasks className="w-12 h-12 text-[#f5deb3] " />
            <p className="flex flex-col font-semibold">
              <span className="text-3xl font-bold">40</span>
              Tasks
            </p>
          </div>
          <LuUsers className="w-12 h-12 text-[#f5deb3] " />
        </span>
        <span className="rounded-lg mb-5 shadow-2xl bg-linear w-full text-white h-[100px] flex justify-between px-5 items-center">
          <div className="flex items-center gap-4">
            <GoTasklist className="w-12 h-12 text-[#f5deb3] " />
            <p className="flex flex-col font-semibold">
              <span className="text-3xl font-bold">20</span>
              Completed
            </p>
          </div>
          <IoCheckmarkDoneOutline className="w-12 h-12 text-[#f5deb3] " />
        </span>
        <div className="overflow-x-auto bg-linear border-b  h-[71.5%] shadow-2xl rounded-lg px-3">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="text-[#f5deb3] text-lg">
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="text-[#9ca3af] font-semibold">
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>
                  <ModelBtn />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
