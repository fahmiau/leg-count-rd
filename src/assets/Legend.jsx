import React, { useState } from 'react';

const Legend = (props) => {
  const [count, setCount] = useState(0);

  const addition = () => {
    setCount(count + 1);
    props.add()
  };

  const substraction = () => {
    if (count == 0) {
      return;
    }
    setCount(count - 1)
    props.sub()
  }
  return (

    <div className="bg-gray-200 h-32 flex flex-col justify-center items-center rounded-lg drop-shadow-xl">
      <h5 onClick={()=>{substraction()}} className="tracking-tighter font-bold text-sm max-sm:text-xs text-center mb-2 cursor-pointer hover:text-red-500 max-sm:">
        {props.name}
      </h5>
      <div onClick={()=>{addition()}} className="max-sm:h-14 max-sm:w-14 h-16 w-16 cursor-pointer transtition hover:-translate-y-1 hover:scale-110 ">
        <img className="h-16 w-16 max-sm:h-14 max-sm:w-14" src={"/dice/"+props.link} alt="" />
      </div>
      <div className="flex items-center gap-2">
        {/* <button onClick={()=>{substraction()}} className="font-bold text-lg text-blue-700 hover:text-blue-500 bg-gray-400 rounded-xl p-1 w-8">a</button> */}
        {/* <img className='w-8 h-8' src={"minus.svg"} alt="" srcset="" /> */}
        <h5 className={'font-bold text-lg '+ ((count == 0) ? 'text-red-500' : 'text-blue-700')}>{count}</h5>
        {/* <img className='w-8 h-8' src={"plus.svg"} alt="" srcset="" /> */}
        {/* <button onClick={()=>{addition()}} className="font-bold text-lg text-blue-700 hover:text-blue-500 bg-gray-400 rounded-xl p-1 w-8">a</button> */}
      </div>
    </div>

  );
};

export default Legend;