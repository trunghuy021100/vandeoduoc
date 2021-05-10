import React, { useEffect, useState } from 'react'
import { FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa';
import { useStore } from 'react-redux';
import { useGlobalContext } from '../../Context'
import Khungphim from '../../component/Khungphim';
import Khungcon from '../../component/Khungcon';
import KhungHoanthien from '../../component/KhungHoanthien';

function Phim() {
    const {heThongRap,lichChieu}=useGlobalContext();
  
 const [demso,setDemSo]=useState(0);
 
 let bientime=new Date;
let sotime=bientime.getDate();
let giotime=bientime.getHours();


useEffect(()=>
    {
     
const uplen=document.querySelectorAll(".uplen");
const khung=document.querySelectorAll(".square");
khung.forEach((item,index)=>
    {
        item.addEventListener('click',function()
            {
                uplen.forEach((items,indexs)=>
                    {
                        if(index===indexs)
                            {
                               if(items.classList.contains("xoay")){
                                   items.classList.remove("xoay")
                               }
                               else{
                                items.classList.add("xoay")
                               }
                            }
                    })
            })
    })
    },[demso,lichChieu])
    return (
        <div className="container-fluid mt-5 pb-5 "  id="cumrap">
        <div className="row pt-md-5">
                <div className="col-lg-10 offset-lg-1 col-12 shadow ">
                    <div className="row">
                        <div className="col-md-1 col-12 border">
                            <ul className="nav nav-pills logo justify-content-between" id="myPill">
                                {heThongRap.map((item,index)=>
                                    {
                                        
                                        return(
                                            <li className="nav-item py-4" key={index}>
                                            <a href={`#logo${index}`} className={`${index===0?"nav-link active px-lg-1":"nav-link px-lg-1"}`} data-toggle="pill" >
                                               
                                            <img src={item.logo} onClick={()=>
                                                {
                                                    setDemSo(index)
                                                }}></img>
                     
                                            </a>
                                            </li>
                                        )
                                    })}

                            </ul>
                        </div>
            <div className="col-md-5 border">
                    <div className="tab-content" id="myTabContent1">
                        <KhungHoanthien demso={demso} sotime={sotime} giotime={giotime} bien={"logo"}></KhungHoanthien>
                    </div>
            </div>
            <div className="d-none d-md-inline col-md-6 border">
                        <Khungphim demso={demso} sotime={sotime} giotime={giotime}></Khungphim>
                            
                        
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default Phim
