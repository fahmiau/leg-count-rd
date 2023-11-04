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

    <div className="bg-gray-200 h-36 flex flex-col justify-center items-center rounded-lg drop-shadow-xl">
      <h5 onClick={()=>{substraction();props.sub()}} className="font-bold text-sm text-center mb-2 cursor-pointer hover:text-red-500">
        {props.name}
      </h5>
      <div onClick={()=>{addition();props.add()}} className="h-20 w-20 cursor-pointer transtition hover:-translate-y-1 hover:scale-110 ">
        <img className="h-20 w-20 " src={"/dice/"+props.link} alt="" />
      </div>
      <h5 className={'font-bold text-lg '+ ((count == 0) ? 'text-red-500' : 'text-blue-700')}>{count}</h5>
      {/* <button className='border border-black h-1 bg-red-600 w-4' onClick={minus}>-</button> */}
    </div>

  );
};

export default Legend;