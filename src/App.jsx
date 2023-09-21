import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Legend from './assets/Legend'
import legList from './list.json'
import { toPng } from 'html-to-image'

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

  const download = () => {
    htmlToImage.toPng(document.getElementById('my-node'))
    .then(function (dataUrl) {
      download(dataUrl, 'my-node.png');
    });
  }

  return (
    <>
      <div id="my-node" className='bg-gray-900 py-8 min-h-full flex justify-center'>
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
          <div className="bg-gray-200 w-80 h-36 grow rounded-lg p-4 grid grid-cols-4">
            <div>
              <label htmlFor="cards" className='text-sm text-navy-700 font-bold'>Total Cards</label>
              <input onChange={totalChest} className='mt-2 flex items-center justify-center rounded-xl border bg-white/0 p-3 text-sm border-gray-800' type="number" name="cards" />
            </div>

            <div>
              <label htmlFor="chest" className='text-sm text-navy-700 font-bold'>Total Chests</label>
              <input className='mt-2 flex items-center justify-center rounded-xl border bg-white/0 p-3 text-sm border-gray-800' type="number" name="chest" value={chests} disabled/>
            </div>

            <div>
              <label htmlFor="expected" className='text-sm text-navy-700 font-bold'>Expected Legs</label>
              <input className='mt-2 flex items-center justify-center rounded-xl border bg-white/0 p-3 text-sm border-gray-800' type="number" name="expected" value={expectedLegs} disabled/>
            </div>
            
            <div>
              <label htmlFor="totalLegs" className='text-sm text-navy-700 font-bold'>Current Legs</label>
              <input className='mt-2 flex items-center justify-center rounded-xl border bg-white/0 p-3 text-sm border-gray-800' type="number" name="totalLegs" value={total} disabled/>
            </div>
          </div>
          <button onClick={download}>Download Image</button>
        </div>
      </div>
    </>
  )
}

export default App
