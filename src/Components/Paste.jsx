import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../Redux/pasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);

  const [searchTearm, setSearchTearm] = useState("");

  const dispatch = useDispatch();

  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTearm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div>
      <input
        className="p-5 bg-gray-950 rounded-2xl w-[750px] mt-2"
        type="search"
        value={searchTearm}
        placeholder="Search here"
        onChange={(e) => setSearchTearm(e.target.value)}
      />

      <div className="cards flex flex-col gap-5 border-2 border-gray-900 p-6 rounded-l mt-5 bg-gray-950">
        {filterData.length > 0 &&
          filterData.map((paste) => {
            return (
              <div key={paste._id} className=" flex flex-col  border-2 p-2 rounded-2xl">
                <h2 className=" text-left pl-3 border-b-2 w-full text-3xl p-1.5">{paste.title}</h2>
                <div className=" p-2 flex flex-col">
                  <pre>{paste.content}</pre>
                </div>

                <div className=" flex justify-evenly p-2 m-2">

                  <Link to={`/?pasteId=${paste?._id}`}>
                  <button className="hover:bg-gray-950 rounded-xl pl-5 pr-5 p-4 bg-sky-900 duration-500">
                    Edit
                  </button>
                  </Link>

                  <Link to={`/pastes/${paste?._id}`}>
                    <button className=" hover:bg-gray-950 text-amber-50 rounded-xl pl-5 pr-5 p-4 bg-emerald-600 duration-500">
                      View
                    </button>
                  </Link>

                  <button
                    className="hover:bg-gray-950 rounded-xl pl-5 pr-5 p-4 bg-red-700 duration-500 font-bold"
                    onClick={() => handleDelete(paste?._id)}
                  >
                    Delete
                  </button>

                  <button
                    className="hover:bg-gray-950 rounded-xl pl-5 pr-5 p-4 bg-yellow-600 duration-500 font-bold"
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("Copied to clipboard");
                    }}
                  >
                    Copy
                  </button>

                  <button className="hover:bg-gray-950 rounded-xl pl-5 pr-5 p-4 bg-purple-400 font-black duration-500">
                    Share
                  </button>
                </div>
                <b>{paste.createdAt}</b>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paste;
