// import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { decrement, increment } from './slice'
import { fetchRandom } from './data'

function App() {
    // const [state, setstate] = useState({})
    const dispatch = useDispatch()
    const { value, loading } = useSelector((state) => state.counter)
    const { data } = useSelector((state) => state.user)
    
    useEffect(() => {
      dispatch(fetchRandom())
    }, [dispatch])
    console.log(data, 'data')

    return (
        <div className="App">
            <h1>{data.category}</h1>
            <h1>{data.type}</h1>
            <h1>{data.setup}</h1>
            <br />
            <br />
            <button onClick={() => dispatch(increment())}>Plus</button>
            <h5>{value}</h5>
            <button onClick={() => dispatch(decrement())}>Minus</button>
            <br />
            <br />
            {loading ? <h5>True</h5> : <h5>False</h5> }
        </div>
    )
}

export default App
