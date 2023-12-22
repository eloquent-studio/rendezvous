import React from 'react'

const serviceItems = [
  {
  id: 1,
  svgPath: "M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z",
  title: "Education",
  info: "Tutoring, Online Classes, Colleges & Universities, Schools",
  },
  {
    id: 2,
    title: "Photography",
    svgPath: "M240-320h320v-22q0-44-44-71t-116-27q-72 0-116 27t-44 71v22Zm160-160q33 0 56.5-23.5T480-560q0-33-23.5-56.5T400-640q-33 0-56.5 23.5T320-560q0 33 23.5 56.5T400-480ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z",
    info: "Photographers, video editors, live streamers",
  },
  {
    id: 3,
    title: "Education",
    svgPath: "M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z",
    info: "Tutoring, Online Classes, Colleges & Universities, Schools",
  },
  {
    id: 4,
    title: "Photography",
    svgPath: "M240-320h320v-22q0-44-44-71t-116-27q-72 0-116 27t-44 71v22Zm160-160q33 0 56.5-23.5T480-560q0-33-23.5-56.5T400-640q-33 0-56.5 23.5T320-560q0 33 23.5 56.5T400-480ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z",
    info: "Photographers, video editors, live streamers",
  },
  {
    id: 5,
    title: "Education",
    svgPath: "M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z",
    info: "Tutoring, Online Classes, Colleges & Universities, Schools",
  },
  {
    id: 6,
    title: "Education",
    svgPath: "M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z",
    info: "Tutoring, Online Classes, Colleges & Universities, Schools",
  },
]

const PopularServices = () => {
  return (
    <div className='max-w-screen-lg mx-auto p-4 lg:p-0 my-8 md:my-16'>
      <h1 className='text-xl font-semibold text-start'>we idk what is our name has the ability to serve almost any business segment</h1>
      <span className='text-gray-800 text-start text-sm'>
      Our appointment management software is fit for professionals, service-based local businesses, and mid-large enterprises across multiple industries
      </span>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8'>
        {serviceItems.map((item) => (
          <div 
          key={item.id}
          className="w-full rounded-lg shadow">
              <div className="flex flex-col items-center pb-4">
                <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36" className='opacity-70 my-2'><path d={item.svgPath}/></svg>
                <h5 className="mb-1 font-medium text-gray-900">{item.title}</h5>
                <span className="text-xs text-gray-500 text-center">{item.info}</span>
              </div>
          </div>
          ))}
      </div>
    </div>
  )
}

export default PopularServices