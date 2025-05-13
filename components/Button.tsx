import React from "react"
export default function Buttonfunc({props}:{props:String})
{
    return(
        <div>
             <button
            
              className="text-black  font-semibold text-xl  rounded-sm border px-3 py-2  shadow-[4px_4px_0px_#000] hover:scale-80 transition"
            >
              {props}
            </button>
        </div>
    )
}