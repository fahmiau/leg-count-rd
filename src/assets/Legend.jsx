import React, { useState } from 'react';

const Legend = (props) => {
  const [count, setCount] = useState(0);

  const addition = () => {
    setCount(count + 1);
  };

  const substraction = () => {
    setCount(count - 1)
  }
  return (

    <div className="bg-gray-200 h-32 flex flex-col justify-center items-center rounded-lg drop-shadow-xl">
      <h5 onClick={()=>{substraction();props.sub()}} className="font-bold text-sm max-sm:text-xs text-center mb-2 cursor-pointer hover:text-red-500 max-sm:">
        {props.name}
      </h5>
      <div onClick={()=>{addition();props.add()}} className="max-sm:h-14 max-sm:w-14 h-16 w-16 cursor-pointer transtition hover:-translate-y-1 hover:scale-110 ">
        <img className="h-16 w-16 max-sm:h-14 max-sm:w-14" src={"/dice/"+props.link} alt="" />
      </div>
      <h5 className={'font-bold text-lg '+ ((count == 0) ? 'text-red-500' : 'text-blue-700')}>{count}</h5>
      {/* <button className='border border-black h-1 bg-red-600 w-4' onClick={minus}>-</button> */}
    </div>

  );
};

export default Legend;