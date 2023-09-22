import React, { useState } from 'react';

const Legend = (props) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  }
  return (

    <div className="bg-gray-200 w-28 h-36 flex flex-col justify-center items-center rounded-lg drop-shadow-xl">
      <h5 onClick={minus} className="font-bold text-sm text-center cursor-pointer mb-2">
        {props.name}
      </h5>
      <div onClick={handleClick} className="h-20 w-20 cursor-pointer">
        <img className="h-20 w-20 " src={"/dice/"+props.link} alt="" />
      </div>
      <h5 className="font-bold text-lg text-blue-800">{count}</h5>
      {/* <button className='border border-black h-1 bg-red-600 w-4' onClick={minus}>-</button> */}
    </div>

  );
};

export default Legend;