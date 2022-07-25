import React from 'react'
import WithToggle from './HOCs/WithToggle'


function ToggleNoteList({isShow , ToggleHandler}) {
   

  return (
    <div>
        <button onClick={ToggleHandler} className="btn btn-primary mt-5">
           {
            isShow ? '-' : '+'
           }
        </button>
        {isShow && (
            <form action="#">
            <div className="form-group">
                <label htmlFor="Add New Node"></label>
                <input type="text" className='form-control' />
            </div>
            <button type='submit' className='btn btn-primary mt-3'>Add New Note</button>
        </form>
        ) }

    </div>
  )
}

export default WithToggle(ToggleNoteList)