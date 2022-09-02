import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Loder from './Loder'

const Layout = (props) => {
    return (
        <div>
            {props.loading && (<Loder />)}
            <Header />
            <div className='contain'>
                {props.children}
            </div>
            {/*  <Footer />*/}
        </div>
    )
}

export default Layout