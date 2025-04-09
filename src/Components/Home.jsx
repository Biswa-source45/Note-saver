import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPaste, updateToPaste } from "../Redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch()

  const allPastes = useSelector((state) => state.paste.pastes)

  useEffect(()=>{
    if(pasteId){
      const paste = allPastes.find((p) => p._id === pasteId)
      setTitle(paste.title)
      setValue(paste.content)
    }
  },[pasteId, allPastes])

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toLocaleString(),
    };

    if (pasteId) {
      //update
      dispatch(updateToPaste(paste));
    } else {
      //create
      dispatch(addToPaste(paste));
      
    }
    setTitle('');
    setValue('');
    setSearchParams({});
    
  }

  return (
    <>
      <div className=" flex flex-row gap-7 place-content-between w-[800px] justify-center content-center">
        <input
          className="p-5 rounded-xl border-gray-600 bg-gray-950 outline-0 mt-2 w-[58%] pl-4"
          type="text"
          value={title}
          placeholder="Enter title here"
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          className="rounded-4xl  w-35 bg-emerald-500 "
          onClick={createPaste}
        >
          {pasteId ? "Update" : "Create"}
        </button>
      </div>

      <div>
        <textarea
          className=" rounded-2xl mt-4  border-gray-600 bg-gray-950 min-w-[90%] p-4 outline-0"
          value={value}
          placeholder="Enter Content here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </>
  );
};

export default Home;
