import React, {useRef} from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
  
    const inputRef = useRef(null)
  
    return (
    <div className='container'>
        <h1 className='title text-light'>Quiz applicatioin</h1>
     
        <ol>
            <li className=''>Qoidalar</li>
            <li className=''>Qoidalar</li>
            <li className=''>Qoidalar</li>
            <li className=''>Qoidalar</li>
            <li className=''>Qoidalar</li>
        </ol>

        <form id="form">
            <input type="text" placeholder='Username' ref={inputRef} />
        </form>

        <div className='start'>
            <Link className='btn' to={'quiz'}>Start Quiz</Link>
        </div>


    </div>
  )
}
