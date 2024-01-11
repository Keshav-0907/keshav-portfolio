import React from 'react'

import { LuExternalLink } from "react-icons/lu";

const Card = (props) => {
  return (
    <div className='bg-[#D4D4D866] w-full rounded-t-2xl rounded-b-2xl border-[1px] border-gray-300'>


      <div className='flex items-center gap-4 p-2 h-1/5'>

        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.8333 21.9168H22.2166C19.25 21.9168 16.8333 19.5168 16.8333 16.5335V12.9168C16.8333 12.2335 16.2833 11.6667 15.5833 11.6667H10.3C6.44998 11.6667 3.33331 14.1668 3.33331 18.6335V29.7001C3.33331 34.1668 6.44998 36.6668 10.3 36.6668H20.1166C23.9666 36.6668 27.0833 34.1668 27.0833 29.7001V23.1668C27.0833 22.4668 26.5166 21.9168 25.8333 21.9168Z" fill="#FF4E02" />
          <path d="M29.7 3.33325H26.4167H24.6H19.8833C16.1167 3.33325 13.0667 5.73325 12.9333 10.0166C13.0333 10.0166 13.1167 9.99992 13.2167 9.99992H17.9333H19.75H23.0333C26.8833 9.99992 30 12.4999 30 16.9665V20.2499V24.7665V28.0499C30 28.1499 29.9833 28.2332 29.9833 28.3165C33.7 28.1999 36.6667 25.7332 36.6667 21.3832V18.0999V13.5832V10.2999C36.6667 5.83325 33.55 3.33325 29.7 3.33325Z" fill="#FF4E02" />
          <path d="M19.9667 11.9168C19.45 11.4001 18.5667 11.7501 18.5667 12.4668V16.8333C18.5667 18.6668 20.1167 20.1668 22.0167 20.1668C23.2 20.1833 24.85 20.1833 26.2667 20.1833C26.9833 20.1833 27.35 19.3501 26.85 18.8501C25.0333 17.0333 21.8 13.7833 19.9667 11.9168Z" fill="#D9D9D9" />
        </svg>
        <div className='flex flex-col font-inika '>
          <span className=''>{props.title}</span>
          <span className='text-gray-400 cursor-pointe text-xs'> {props.url} </span>
        </div>

      </div>

      <div className=' border-y-[1px] border-gray-300 p-3 h-3/5'>
        <div className='text-sm text-[#11181C] h-1/2'>
          {props.desc}
        </div>

        <div className='text-sm flex flex-wrap py-2 gap-2 my-3 h-1/2'>
          {
            props.stack.map((item) =>
              <div className='bg-[#D8D4D4] px-2 rounded-full min-w-fit flex items-center'>
                {item}
              </div>
            )
          }
        </div>

      </div>

      <div className='flex justify-between px-2 h-1/5 items-center '>
        <a href={props.github}  rel="noreferrer" target='_blank' className='flex items-center gap-1 text-blue-500'>
          <span className='text-sm'> View Code </span>
          <LuExternalLink size={15} />
        </a>

        {
          props.url ? (<a href={props.url}  rel="noreferrer" target='_blank' className='flex items-center gap-2 text-blue-500'>
            <span className='text-sm'> View Project </span>
            <LuExternalLink size={15} />
          </a>) : (null)
        }

      </div>

    </div>
  )
}

export default Card