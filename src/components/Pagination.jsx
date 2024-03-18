import React from 'react'
import { useContext } from 'react'
import { AppContex } from '../contex/AppContex'

const Pagination = () => {
  const {page,handelPageChange,totalPages} = useContext(AppContex);
  console.log(totalPages)
  
  return (
    
    <div className='w-full flex justify-center items-center border-2 fixed bottom-0 bg-white'>
      <div className='flex justify-between w-11/12 max-w-[670px] py-2'>
        <div className='flex gap-x-2'>
          {  
        
          page>1 &&  
          (<button className='rounded-md border-2 px-4 py-1' onClick={ () => handelPageChange(page-1)}>
            Previous
          </button>)
          
          }


  
          {  page < totalPages &&
            (<button className='rounded-md border-2 px-4 py-1' onClick={() => handelPageChange(page+1)}>
               Next 
            </button>)
          }
        </div>


        <p className='font-bold text-sm'>
          Page {page} of {totalPages}
        </p>

      </div>
    </div>
  )
}

export default Pagination
