import React, { useState } from 'react';

const Legend = (props) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  // const minus = () => {
  //   setCount(count - 1);
  // }
  return (

    <div onClick={handleClick} className="bg-gray-200 w-28 h-36 flex flex-col justify-center items-center rounded-lg drop-shadow-xl cursor-pointer">
      <h5 className="font-bold text-sm text-center mb-2">
        {props.name}
      </h5>
      <div className="h-20 w-20">
        <img className="h-20 w-20 " src={"/dice/"+props.link} alt="" />
      </div>
      <h5 className="font-bold text-lg text-blue-800">{count}</h5>
      {/* <button className='border border-black h-1 bg-red-600 w-4' onClick={minus}>-</button> */}
    </div>

  );
};

export default Legend;