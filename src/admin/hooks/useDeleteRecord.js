import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { customFetch } from "../util/http";

const useDeleteRecord = () => {
  const queryClient = useQueryClient();

  const deleteRecord = async ({ mode, userId }) => {
    // console.log(userId);

    try {
      const endpoint =
        mode === "sole"
          ? "deletev2nbusinessInfo"
          : mode === "llc"
          ? "deletev2nClientinfo"
          : mode === "indi"
          ? "deletev2nindividualRecords"
          : "";

      if (endpoint) {
        const { data } = await customFetch.post(`${endpoint}/${userId}`);
        return data;
      } else {
        throw new Error("Invalid mode");
      }
    } catch (error) {
      console.error("Error deleting record:", error);
      throw new Error("An error occurred while deleting the record.");
    }
  };

  const mutation = useMutation({
    mutationFn: deleteRecord,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["records"] });
      window.location.reload();
      Swal.fire("Deleted!", "Your record has been deleted.", "success");
    },
    onError: (error) => {
      Swal.fire("Error", error.message, "error");
    },
  });

  const handleDelete = (mode, userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate({ mode, userId });
      }
    });
  };

  return { handleDelete, isDeleting: mutation.isLoading };
};

export default useDeleteRecord;
