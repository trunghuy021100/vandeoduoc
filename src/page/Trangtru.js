import React, { useEffect, useState } from 'react'
import Sliders from './Trangtru/Sliders'
import ListPhim from './Trangtru/ListPhim'
import Phim from './Trangtru/Phim'
import TinTuc from './Trangtru/TinTuc'
import UngDung from './Trangtru/UngDung'
import { useGlobalContext } from '../Context'
import Loading from '../component/Loading'

function Trangtru() {
    const {setBienPhim,loading}=useGlobalContext();
    console.log(loading);
    useEffect(()=>
        {
            setBienPhim(null)
        },[])
    if(loading===true)
        {
            return(
                <Loading></Loading>
            )
        }
    else {
    return (
       <div>
           <Sliders ></Sliders>
           <ListPhim ></ListPhim>
           <Phim></Phim>
           <TinTuc></TinTuc>
          <UngDung></UngDung>
           
       </div>
    )
}
}

export default Trangtru
