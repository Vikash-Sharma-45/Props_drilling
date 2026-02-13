import React from 'react'
import RightCard from './RightCard'

const rightContent = (props) => {
  return (
    <div id= "right" className='h-full p-6 flex overflow-x-auto flex-nowrap gap-10 justify-between w-2/3'>
        {props.users.map(function(elem, idx){
          return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
        })}
      
    </div>
  )
}

export default rightContent
