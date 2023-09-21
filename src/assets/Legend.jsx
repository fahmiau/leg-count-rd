import React, { useState } from 'react';

const Legend = (props) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (

    <div onClick={handleClick} className="bg-gray-200 w-32 h-36 flex flex-col justify-center items-center rounded-lg drop-shadow-md cursor-pointer">
      <h5 className="font-bold">
        {props.name}
      </h5>
      <img className="h-20 w-20" src={"/dice/"+props.link} alt="" />
      <h5 className="font-bold text-red-600">{count}</h5>
    </div>

  );
};

export default Legend;