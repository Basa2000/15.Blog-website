import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

  const {page, handlePageChange, totalPages} = useContext(AppContext)
  return (
    <div className='w-full flex justify-center items-center border-2 fixed bottom-0 bg-slate-300 '>
      <div className='flex flex-row w-11/12 max-w-[670px] justify-between py-2'>
        <div className='flex gap-x-4'>
          { page > 1 &&
            (<button 
              className='rounded-md border-2 px-4 py-1 bg-slate-200' 
              onClick={()=>handlePageChange(page - 1)}>
                Previous
            </button>)
          }
          { page < totalPages &&
            (<button
              className='rounded-md border-2 px-4 py-1 bg-slate-200' 
              onClick={()=>handlePageChange(page + 1)}>
                Next
            </button>)
          }
        </div>

        <p className='font-bold text-sm'>
          page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination