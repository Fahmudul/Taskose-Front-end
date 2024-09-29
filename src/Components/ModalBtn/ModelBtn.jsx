import { BsThreeDotsVertical } from "react-icons/bs";

const ModelBtn = () => {
  return (
    <>
      <button
        onClick={() => document.getElementById("my_modal_1").showModal()}
        style={{ background: "none", border: "none" }}
      >
        <BsThreeDotsVertical className="text-lg hover:text-xl transition-all duration-300 hover:text-[#f5deb3]" />
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-linear">
          <ul>
            <li>Remove User</li>
            <li>Generate Report</li>
            <li>Assign Task</li>
          </ul>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-transparent border-[#f5deb3] text-[#9ca3af]">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ModelBtn;
