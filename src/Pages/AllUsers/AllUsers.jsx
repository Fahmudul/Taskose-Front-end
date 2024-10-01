import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { GrTasks } from "react-icons/gr";
import { GoTasklist } from "react-icons/go";
import { LuUsers } from "react-icons/lu";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { CSVLink } from "react-csv";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import ModelBtn from "../../Components/ModalBtn/ModalBtn";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import LoaderP from "../../Components/Loader_/Loader_";

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
const data_1 = [
  { name: "Group A", value: 400, status: "active" },
  { name: "Group B", value: 300, status: "inactive" },
  { name: "Group C", value: 300, status: "pending" },
  { name: "Group D", value: 200, status: "completed" },
];

const headers = [
  { label: "Status", key: "status" },
  { label: "Assigned To", key: "assignedTo" },
  { label: "Due Date", key: "dueDate" },
  { label: "Priority", key: "priority" },
];
const AllUsers = () => {
  const [csvReport, setCsvReport] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure("/all-user-admin");
      // console.log(data);
      return data["usersWithoutPassword"];
    },
  });
  const handleGenerateReport = async () => {
    const status = document.querySelector("#status").value;
    const user = document.querySelector("#user").value;
    const date = document.querySelector("#startDate").value;

    console.log(status, user, date);
    if (!status && !user && !date) {
      toast.error("Please fill one of the fields");
      return;
    }
    setLoading(true);
    const response = await axiosSecure(
      `/generate-report?status=${status}&user=${user}&date=${date}`
    );
    if (response) {
      // console.log(response.data.summary);
      setLoading(false);
      setCsvReport(response?.data?.summary);
    }
  };

  const getColorByStatus = (status) => {
    switch (status) {
      case "active":
        return "#0088FE"; // Blue for active
      case "inactive":
        return "#FF8042"; // Orange for inactive
      case "pending":
        return "#FFBB28"; // Yellow for pending
      case "completed":
        return "#00C49F"; // Green for completed
      default:
        return "#8884d8"; // Default color
    }
  };
  // console.log(users);
  return (
    <div className=" h-[90%] w-full m-10 flex  gap-4 ">
      <div className="w-[65%]  rounded-lg ">
        {/* Users information */}
        <div className="flex flex-col gap-5 p-5 bg-linear rounded-lg shadow-lg ">
          <h1 className="text-3xl font-bold text-[#f5deb3]">Users Info</h1>
          <LineChart width={1000} height={270} data={data}>
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
        <div className="flex rounded-lg mt-5 ">
          <div className="w-1/2 relative h-[470px] border-b mr-4 flex flex-col justify-between bg-linear rounded-md report-container">
            <h1 className="text-2xl font-bold text-[#f5deb3] pt-3 pl-3 ">
              Generate Report <sub className="text-[#9ca3af]">(select one)</sub>
            </h1>
            <div className="flex flex-col  justify-between gap-3 px-4  mb-10 ">
              <div className=" w-full flex flex-col">
                <label
                  htmlFor="status"
                  className="text-xl text-[#9ca3af] font-semibold"
                >
                  Status:
                </label>
                <select
                  id="status"
                  name="status"
                  className="input_ "
                  style={{ width: "100%" }}
                >
                  <option value="">Select Status</option>
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              </div>
              <div className=" w-full flex flex-col">
                <label
                  htmlFor="user"
                  className="text-xl text-[#9ca3af] font-semibold"
                >
                  Assigned To:
                </label>
                <input
                  type="text"
                  id="user"
                  placeholder="Enter user email"
                  className="input_ "
                  style={{ width: "100%" }}
                />
              </div>
              <div className=" w-full flex flex-col">
                <label
                  htmlFor="startDate"
                  className="text-xl text-[#9ca3af] font-semibold"
                >
                  {" "}
                  Date:
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  className="input__"
                />
              </div>
            </div>
            <div className="filter-item  flex justify-center ">
              {loading ? (
                <LoaderP />
              ) : csvReport ? (
                <button style={{ width: "95%" }}>
                  <CSVLink
                    data={csvReport}
                    headers={headers}
                    filename={"task-report.csv"}
                    className="btn bg-[#f5deb3] outline-none border-none relative bottom-4 w-full"
                    onClick={() => {
                      setCsvReport(null);
                      document.querySelector("#status").value = "";
                      document.querySelector("#user").value = "";
                      document.querySelector("#startDate").value = "";
                    }}
                  >
                    Download CSV
                  </CSVLink>
                </button>
              ) : (
                <button
                  id="generateReportBtn"
                  className=" bg-[#f5de9a]   outline-none border-none relative bottom-4 btn "
                  style={{ width: "95%" }}
                  onClick={handleGenerateReport}
                >
                  Generate
                </button>
              )}
            </div>
          </div>
          <div className="w-1/2 h-[470px] border-b  bg-linear rounded-md">
            <h1 className="text-2xl font-bold text-[#f5deb3] pt-3 pl-3 ">
              Status Report
            </h1>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    dataKey="value"
                    data={data_1}
                    label
                    // Dynamically render the colors using the Cell component
                  >
                    {data_1.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={getColorByStatus(entry.status)}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
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
          <table className="table ">
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
              {users.map((user) => (
                <tr key={user._id} className="text-[#9ca3af] font-semibold">
                  <td>{user?.userName}</td>
                  <td>{user?.email}</td>
                  <td>{user?.role}</td>
                  <td>
                    <ModelBtn user={user} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
