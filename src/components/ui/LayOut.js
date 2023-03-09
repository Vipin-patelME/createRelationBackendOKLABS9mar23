import React from 'react'
import { Outlet } from 'react-router-dom'
import './ui.css'
import Aside from './Aside'
import Footer from './Footer'
import Header from './Header'

export default function LayOut() {
  return (
    <div className='container pt-5'>
        <Header/>
        <main>
            <div className='row h-100'>
                <div className='col-2'>
                    <Aside side={"Left"}/>
                </div>
                <div className='col-7'>
                    <Outlet/>
                </div>
                <div className='col-3'>
                    <Aside side={"Right"}/>
                </div>
            </div>
        </main>
        <Footer />
    </div>
  )
}
