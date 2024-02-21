import React from 'react'

const Card = ({kes,kes2,kes3}:{kes:string, kes2:string,kes3:string}) => {
  return (
    

<div className=" items-center justify-center max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg shadow-yellow-400 dark:bg-gray-800 dark:border-gray-700 h-[450px]">
    <a href="#">
        <img className="rounded-t-lg h-[200px] w-full object-cover items-center justify-center" src={kes} alt="" />
    </a>
    <div className="p-5 flex flex-col w-full items-center gap-4 text-center">
        <a href="#">
            <h5 className="mb-2 capitalize text-2xl font-bold tracking-tight text-gray-900 dark:text-white items-center justify-center">{kes2}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 items-center justify-center">{kes3}</p>
    </div>
</div>

  )
}

export default Card