import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPaste = () => {

  const {id} = useParams();
  const allPastes = useSelector((state) => state.paste.pastes)
  const paste = allPastes.filter((p) => p._id === id)[0]

  console.log("final paste:",paste);
  
  return (
    <>
      <div className=" flex flex-row gap-7 place-content-between w-[800px] justify-center content-center">
        <input
          className="p-5 rounded-xl border-gray-600 bg-gray-950 outline-0 mt-2 w-[58%] pl-4"
          type="text"
          value={paste.title}
          placeholder="Enter title here"
          disabled
        />

        {/* <button
          className=" pr-4 pl-4 rounded-xl  bg-gray-950"
          onClick={createPaste}
        >
          {pasteId ? "Update Paste" : "Create Paste"}
        </button> */}
      </div>

      <div>
        <textarea
          className=" rounded-2xl mt-4  border-gray-600 bg-gray-950 min-w-[90%] p-4 outline-0"
          value={paste.content}
          placeholder="Enter Content here"
          rows={20}
          disabled
        />
      </div>
    </>
  )
}

export default ViewPaste
