import "./Footer.css"
import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
   <MDBFooter bgColor='light' className='text-center text-lg-left'>
  <div
    className='text-center p-3'
    style={{ backgroundColor: 'rgba(0, 0, 0, 0)', display: 'flex' ,justifyContent: 'center' }}
  >
    &copy; {new Date().getFullYear()} Copyright:{' '}
    <p className='text-dark'>
      ComputerVisionML
    </p>
  </div>
</MDBFooter>

  )
}
