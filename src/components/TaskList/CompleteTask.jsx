import React from 'react'

const CompleteTask = ({ element }) => {
  return (
    <div className='flex-shrink-0 w-[300px] bg-[#252525] border-2 border-green-900 rounded-xl p-5 hover:shadow-md transition-all duration-200'>
      <div className='flex justify-between items-center'>
        <span className='px-3 py-1 bg-green-900/50 text-green-300 rounded-lg text-sm font-medium'>{element.category}</span>
        <span className='text-sm text-gray-400'>{element.taskDate}</span>
      </div>
      <h2 className='mt-4 text-lg font-semibold text-gray-100'>{element.taskTitle}</h2>
      <p className='mt-2 text-sm text-gray-300'>{element.taskDescription}</p>
      <div className='mt-5'>
        <div className='w-full bg-green-900/50 text-green-300 text-center py-2 rounded-lg font-medium'>
          Completed
        </div>
      </div>
    </div>
  )
}

export default CompleteTask