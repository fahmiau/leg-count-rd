import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Legend from './assets/Legend'
import legList from './list.json'

function App() {
  const legs = legList

  const [total,setTotal] = useState(0);

  const totalCount = () => {
    setTotal(total+1)
  }

  const [chests,setChest] = useState(0);
  const [expectedLegs,setExpectedLegs] = useState(0);

  const totalChest = (e) => {
    setChest(Math.trunc(e.target.value/40))
    setExpectedLegs(Math.trunc(e.target.value/4000))
  }

  return (
    <>
      <div id="my-node" className='bg-gray-900 py-auto min-h-screen flex justify-center items-center '>
        <div className='bg-gray-600 p-4 drop-shadow-xl w-10/12 rounded-xl flex flex-wrap justify-between gap-8'>
          {
            legs.map((leg,key) => {
              return(
                <div onClick={totalCount} key={key}>
                  <Legend name={leg[0]} link={leg[1]}></Legend>
                </div>
              )
            })
          }
          <div className="bg-gray-200 w-full lg:w-3/4 xl:w-1/2 grow rounded-lg p-4 grid grid-cols-4 gap-2">
            <div className=''>
              <label htmlFor="cards" className='text-lg text-gray-900 font-bold'>Total Cards</label>
              <input onChange={totalChest} className='w-5/6 flex items-center justify-center rounded-xl font-bold border bg-white/0 p-3 text-lg border-gray-800' type="number" name="cards" placeholder='ex. 100000'/>
            </div>

            <div>
              <h5 className='font-bold text-lg text-gray-900'>Total Chests</h5>
              <h5 className='font-bold text-lg mt-2 text-blue-800'>{chests}</h5>
            </div>

            <div>
              <h5 className='font-bold text-lg text-gray-900'>Expected Legs</h5>
              <h5 className='font-bold text-lg mt-2 text-blue-800'>{expectedLegs}</h5>
              {/* <label htmlFor="expected" className='text-sm text-navy-700 font-bold'>Expected Legs</label>
              <input className='mt-2 flex items-center justify-center rounded-xl border bg-white/0 p-3 text-sm border-gray-800' type="number" name="expected" value={expectedLegs} disabled/> */}
            </div>
            
            <div>
              <h5 className='font-bold text-lg text-gray-900'>Current Count</h5>
              <h5 className='font-bold text-lg mt-2 text-blue-800'>{total}</h5>
              {/* <label htmlFor="totalLegs" className='text-sm text-navy-700 font-bold'>Current Legs</label>
              <input className='mt-2 flex items-center justify-center rounded-xl border bg-white/0 p-3 text-sm border-gray-800' type="number" name="totalLegs" value={total} disabled/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
