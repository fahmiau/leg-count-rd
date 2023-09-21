import React, { useState } from 'react';

const Summary = () => {
  const [total,setTotal] = useState(0);
  const totalCount = () => {
    setTotal(total+1)
  }
  <div className="bg-gray-200 w-80 h-36">
    <h3 className="text-bold">{total}</h3>
  </div>
}