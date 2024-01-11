import React from 'react'
import Card from './Card'
import ProjectData from '../data/Project'

const Projects = () => {
    return (
        <div className='md:px-20 px-5 py-10 md:my-20' id='my-projects'>
            <div className='flex justify-between'>
                <div className='md:text-4xl text-2xl font-inika'>
                    My Personal Projects
                </div>

                <div className='bg-[#E7E7E7] flex items-center gap-3 px-2 rounded-3xl cursor-pointer'>
                    <span className='font-inika md:text-base text-sm'> View All </span>
                    <svg className='bg-black rounded-full' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 21 20" fill="none">
                        <path d="M16.0833 12.9167C15.9176 12.9167 15.7586 12.8509 15.6414 12.7337C15.5242 12.6165 15.4583 12.4575 15.4583 12.2917V6.30008L6.94166 14.8167C6.86527 14.899 6.7681 14.9592 6.66039 14.9908C6.55269 15.0225 6.43843 15.0246 6.32966 14.9967C6.22089 14.9689 6.12163 14.9123 6.04235 14.8328C5.96307 14.7533 5.90669 14.6539 5.87916 14.5451C5.85132 14.4364 5.85326 14.3223 5.88479 14.2147C5.91632 14.107 5.97626 14.0099 6.05833 13.9334L14.575 5.41675H8.58333C8.41757 5.41675 8.2586 5.3509 8.14139 5.23369C8.02418 5.11648 7.95833 4.95751 7.95833 4.79175C7.95833 4.62599 8.02418 4.46702 8.14139 4.34981C8.2586 4.2326 8.41757 4.16675 8.58333 4.16675H16.0833C16.2491 4.16675 16.4081 4.2326 16.5253 4.34981C16.6425 4.46702 16.7083 4.62599 16.7083 4.79175V12.2917C16.7083 12.4575 16.6425 12.6165 16.5253 12.7337C16.4081 12.8509 16.2491 12.9167 16.0833 12.9167Z" fill="white" />
                    </svg>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 justify-center py-10 px-[24px]  gap-10'>
                {
                    ProjectData.map(item => (
                        <Card title={item.title} github={item.github} url={item.url} desc={item.desc} stack={item.stack}/>
                    ))
                }

            </div>

        </div>
    )
}

export default Projects