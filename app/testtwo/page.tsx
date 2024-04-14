'use client';

import React from 'react';

// import component 👇
import Drawer from 'react-modern-drawer';

//import styles 👇
import 'react-modern-drawer/dist/index.css';

export default function TestTwo() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className='min-h-screen'>
      <button onClick={toggleDrawer}>Show</button>
      <Drawer
        open={isOpen}
        size={500}
        onClose={toggleDrawer}
        direction='bottom'
        className='bla bla bla'
      >
        <div>Hello World</div>
      </Drawer>
    </div>
  );
}
