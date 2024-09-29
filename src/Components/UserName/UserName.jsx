import React from "react";

const UserName = ({ taskInfo, setTaskInfo, value }) => {
  return (
    <div className="flex items-center justify-start gap-2 ">
      <input
        type="checkbox"
        className="checkbox_"
        id="user"
        defaultValue={value}
        onChange={(e) => {
          if (e.target.checked) {
            console.log(e.target.checked);
            console.log(e.target.value);
            setTaskInfo({
              ...taskInfo,
              assignedTo: [
                ...taskInfo.assignedTo,
                { email: e.target.value, status: "To Do" },
              ],
            });
          } else {
            console.log(e.target.checked);
            console.log(e.target.value);
            setTaskInfo({
              ...taskInfo,
              assignedTo: taskInfo.assignedTo.filter(
                (user) => user.email !== e.target.value
              ),
            });
          }
        }}
      />
      <label htmlFor="user" className="text-[#989fab] text-lg font-bold">
        {value}
      </label>
    </div>
  );
};

export default UserName;
