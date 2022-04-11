import React from 'react'

const Navigation = ({prev, next, onPrev, onNext}) => {
    return(
       <nav className='my-5'>
           <ul className='pagination justify-content-center'>
               {
                    prev ?
                        <li className='page-item'>
                            <button className='page-link' onClick={onPrev}>Prev</button>
                        </li>
                        :
                        null
               }
               {
                    next ?
                        <li className='page-item'>
                            <button className='page-link' onClick={onNext}>Next</button>
                        </li>
                        :
                        null
               }
               
           </ul>
       </nav>
    )
}
export default Navigation