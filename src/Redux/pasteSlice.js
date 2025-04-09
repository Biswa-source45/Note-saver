import { createSlice } from "@reduxjs/toolkit";
import toast, { Toaster } from "react-hot-toast";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPaste: (state, action) => {
      const paste = action.payload;
      const storedItem = state.pastes;

      if (storedItem.some((item) => item.title === paste.title)) {
        toast.error("Title already exist");
        return;
      } 
      else {
        state.pastes.push(paste);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Page created sucessfully");
      }
    },
    updateToPaste: (state, action) => {
      const paste = action.payload
      const index = state.pastes.findIndex((item) => item._id === paste._id )

      if (index >= 0) {
        state.pastes[index] = paste
        localStorage.setItem("pastes",JSON.stringify(state.pastes))

        toast.success("Paste Updated")
      }

    },

    removeFromPastes: (state, action) => {
      const pasteId = action.payload
      console.log(pasteId);

      const index = state.pastes.findIndex((item) => item._id === pasteId)

      if (index >= 0) {

        state.pastes.splice(index,1)

        localStorage.setItem("pastes",JSON.stringify(state.pastes))
        toast.success("Paste Deleted")
      }
    },
  },
});

export const { addToPaste, updateToPaste, resetAllPastes, removeFromPastes } =
  pasteSlice.actions;

export default pasteSlice.reducer;
