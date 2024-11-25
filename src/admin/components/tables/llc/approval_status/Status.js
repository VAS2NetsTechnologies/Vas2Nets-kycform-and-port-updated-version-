import React, { useState } from "react";
import { toast } from "react-toastify";
import { customFetch } from "../../../../util/http";
import "react-toastify/dist/ReactToastify.css";

const Status = ({ email, status }) => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reason, setReason] = useState("");

  const handleButtonClick = () => {
    if (status === "decline") {
      setIsModalOpen(true);
    } else {
      handleConfirm();
    }
  };

  const handleConfirm = async () => {
    setLoading(true);

    const payload = {
      email,
      response: status === "approve" ? "accepted" : "declined",
      reason: status === "decline" ? reason : "welcome",
    };

    const res = await customFetch.post("emailclientnotification", payload);

    setLoading(false);
    setIsModalOpen(false);

    if (res.status === 200) {
      toast.success(
        `User has been ${status === "approve" ? "accepted" : "declined"}`
      );

      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleButtonClick}
        disabled={loading}
        className={`p-2 rounded cursor-pointer ${
          status === "approve"
            ? "bg-green-500 hover:bg-green-600"
            : "bg-red-500 hover:bg-red-600"
        } text-white ${
          loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        {loading
          ? "Processing..."
          : status === "approve"
          ? "Approve"
          : "Decline"}
      </button>

      {/* Modal (only shown when declining) */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6">
            <h2 className="text-xl font-semibold mb-4">Decline User</h2>
            <p className="mb-2">
              Please provide a reason for declining this user:
            </p>
            <textarea
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter reason..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            ></textarea>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white cursor-pointer"
                onClick={handleConfirm}
                disabled={loading || !reason.trim()}
              >
                {loading ? "Processing..." : "Decline"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Status;
