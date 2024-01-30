import React from 'react'

const Scroll = (props) => {
  return  (
    <div sstyle= {{ overflowY: 'scroll' ,border: '5  px solid black', height: '800px' }}>
        {props.children}
    </div>
  )
};

export default Scroll;