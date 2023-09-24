import { useState, useEffect } from 'react'
import './App.css'
import Legend from './assets/Legend'
import legList from './list.json'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function App() {
  const legs = legList
  const MySwal = withReactContent(Swal)
  const [total,setTotal] = useState(0);

  const addTtotalCount = () => {
    setTotal(total+1)
  }

  const subTtotalCount = () => {
    setTotal(total-1)
  }

  const [chests,setChest] = useState(0);
  const [expectedLegs,setExpectedLegs] = useState(0);
  const [golds,setGolds] = useState(0);
  const [gems,setGems] = useState(0);

  const totalChest = (e) => {
    setChest(Math.trunc(e.target.value/40)),
    setExpectedLegs(Math.trunc(e.target.value/4000)),
    setGolds(Math.trunc(e.target.value/40)*2200),
    setGems(Math.trunc(e.target.value/40)*3)
  }

  useEffect(() => {
    MySwal.fire({
      titleText: 'How to Use',
      html:'<p>Click dice <b>ICON</b> to add, Click dice <b>NAME</b> to subtract (in case u miss clicked)</p>'
    })
  }, []);

  window.onbeforeunload = (event) => {
    const e = event || window.event;
    // Cancel the event
    e.preventDefault();
    if (e) {
      e.returnValue = ''; // Legacy method for cross browser support
    }
    return ''; // Legacy method for cross browser support
  };

  return (
    <>
      <div id="my-node" className='bg-gray-900 py-auto min-h-screen flex justify-center items-center '>
        <div className='bg-gray-600 p-4 drop-shadow-xl w-10/12 rounded-xl flex flex-wrap justify-between gap-8'>
          {
            legs.map((leg,key) => {
              return(
                <div key={key}>
                  <Legend add={addTtotalCount} sub={subTtotalCount} name={leg[0]} link={leg[1]}></Legend>
                </div>
              )
            })
          }
          <div className="bg-gray-200 w-full lg:w-3/4 xl:w-1/2 grow rounded-lg p-4 grid grid-cols-4 gap-4 items-center">
            <div className=''>
              <label htmlFor="cards" className=' text-gray-900 font-bold'>Total Cards</label>
              <input onChange={totalChest} className='w-5/6 flex items-center justify-center rounded-xl font-bold border bg-white/0 p-2 border-gray-800' type="number" name="cards" placeholder='ex. 100000'/>
            </div>

            <div className=''>
              <h5 className='font-bold text-gray-900'>Total Chests</h5>
              <h5 className='font-bold text-blue-800 text-lg'>{chests}</h5>
            </div>

            <div className=''>
              <h5 className='font-bold text-gray-900'>Golds Obtained</h5>
              <h5 className='font-bold text-blue-800 text-lg'>{golds}</h5>
              <h5 className='font-bold text-gray-900'>Gems Obtained</h5>
              <h5 className='font-bold text-blue-800 text-lg'>{gems}</h5>
            </div>
            
            <div className=''>
              <h5 className='font-bold text-gray-900'>Expected Legs</h5>
              <h5 className='font-bold text-blue-800 text-lg'>{expectedLegs}</h5>
              <h5 className='font-bold text-gray-900'>Current Count</h5>
              <h5 className='font-bold text-blue-800 text-lg'>{total}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
