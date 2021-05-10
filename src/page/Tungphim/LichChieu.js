import React,{useEffect,useState} from 'react'
import { useGlobalContext } from '../../Context';
import { FaChevronDown, FaChevronRight, FaChevronUp } from 'react-icons/fa';
import Khungphim from '../../component/Khungphim';
import KhungHoanthien from '../../component/KhungHoanthien';
import KhungHoanThanh from '../../component/KhungHoanThanh';
import KhungHoanthanh2 from '../../component/KhungHoanthanh2'
let arr=[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
let thu=["Sun","Mon","Tue","Wen","Thu","Fri","Sat"];

function LichChieu({id}) {
    let t=new Date();
    let t2=new Date();
    const [demso,setDemSo]=useState(0);
    
 let bientime=new Date;
 const [songay,setSongay]=useState(0);
const [sotime,setSotime]=useState(bientime.getDate());
const [giotime,setGiotime]=useState(bientime.getHours());
   
    const {listPhim,lichChieu,heThongRap} =useGlobalContext();
    
 const handleChon=(t,index)=>
    {
        let biengio=new Date
        let laylai=new Date();
        biengio.setDate(bientime.getDate()+index)
      
       setSongay(index);
       setSotime(biengio.getDate())
        if(index!==0)
            {
                setGiotime(-1)
            }
        else{
            setGiotime(laylai.getHours())
        }
          
       
    }
    useEffect(()=>
    {
     
const uplen1=document.querySelectorAll(".uplen1");
const khung1=document.querySelectorAll(".square1");
khung1.forEach((item,index)=>
    {
        item.addEventListener('click',function()
            {
                uplen1.forEach((items,indexs)=>
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
    },[demso,lichChieu,songay,sotime,giotime])
    return (
        <div className="khung-dat-lich">
                    <div className="lich-1 d-flex d-md-none py-2 ">
                        {arr.map((item,index)=>
                            {
                                t.setDate(t.getDate()+item)
                                if(t.getDate()>=10)
                                {
                                    
                                    if(t.getDay()===0)
                                    {
                                        return(
                                            <div className={`${index===songay?"khung-lich px-3 text-warning":"khung-lich px-3"}`} key={index}
                                            onClick={()=>
                                                {
                                                  handleChon(t,index);
                                                 
                                                }}>
                                                <b className="text-center pt-2">CN</b>
                                                <h6 className="text-center text-muted">{t.getDate()}</h6>
                                                </div>
                                )
                                }
                                else{
                                    return(
                                        <div className={`${index===songay?"khung-lich px-3 text-warning":"khung-lich px-3"}`} key={index}
                                        onClick={()=>
                                            {
                                                handleChon(t,index)
                                               
                                            }}>
                                            <b className="text-center pt-2">T{t.getDay()+1}</b>
                                            <h6 className="text-center text-muted">{t.getDate()}</h6>
                                            </div>
                            )

                                }
                            }
                                else{
                                    if(t.getDay()===0)
                                    {
                                        return(
                                            <div className={`${index===songay?"khung-lich px-3 text-warning":"khung-lich px-3"}`} key={index}
                                            onClick={()=>
                                                {
                                                    handleChon(t,index)
                                                   
                                                }}>
                                                <b className="text-center pt-2">CN</b>
                                                <h6 className="text-center text-muted">0{t.getDate()}</h6>
                                                </div>
                                )
                                }
                                else{
                                    return(
                                        <div className={`${index===songay?"khung-lich px-3 text-warning":"khung-lich px-3"}`} key={index}
                                        onClick={()=>
                                            {
                                                handleChon(t,index)
                                               
                                            }}>
                                            <b className="text-center pt-2">T{t.getDay()+1}</b>
                                            <h6 className="text-center text-muted">0{t.getDate()}</h6>
                                            </div>
                            )

                                }
                                }
                            })}
                    </div>
                    <div className="khung-kethop container-fluid">
                        <div className="row">
                            <div className="col-md-4 border-right">
                            <ul className="nav nav-pills bieutuong justify-content-between" id="myPill123">
                                {heThongRap.map((item,index)=>
                                    {
                                        
                                        return(
                                            <li className="nav-item border-bottom" key={index} onClick={()=>setDemSo(index)}>
                                            <a href={`#huhu${index}`} className={`${(index===0)?"nav-link active px-lg-1 py-3 ":"nav-link px-lg-1 py-3"}`} data-toggle="pill" >
                                               <div className="d-flex nguqua" data-toggle="collapse" data-target={`#saonguthe${index}`}>
                                                <img src={item.logo}></img>
                                              <p className="float-right text-muted d-block d-md-none"><FaChevronRight></FaChevronRight></p> 
                                                <h6 className="ml-2 align-self-center">{item.tenHeThongRap}</h6>
                                                
                                                </div>
                                                <div>
                                                <div className="d-md-none collapse" id={`saonguthe${index}`}>
                                                    <KhungHoanthanh2 id={id} sotime={sotime} giotime={giotime} demso={index}></KhungHoanthanh2>
                                                </div>
                                                </div>
                                            </a>
                                          
                                            </li>
                                        )
                                    })}

                            </ul>

                            </div>
                           <div className="col-md-8 d-none d-md-block">
                            <div className="lich-2 py-2 ">
                                {arr.map((item,index)=>
                                {
                                t2.setDate(t2.getDate()+item)
                                if(t2.getDate()>=10)
                                {
                                    
                                   
                                        return(
                                            <div className={`${index===songay?"khung-lich px-3 text-warning":"khung-lich px-3"}`} key={index}
                                            onClick={()=>
                                                {
                                                    handleChon(t,index)
                                                   
                                                }}>
                                                <b className="text-center pt-2">{thu[t2.getDay()]}</b>
                                                <h6 className="text-center text-muted">{t2.getDate()}</h6>
                                                </div>
                                )
                                
                               
                            }
                                else{
                                   
                                        return(
                                            <div className={`${index===songay?"khung-lich px-3 text-warning":"khung-lich px-3"}`} key={index}
                                            onClick={()=>
                                                {
                                                    handleChon(t,index)
                                                   
                                                }}>
                                                <b className="text-center pt-2">{thu[t2.getDay()]}</b>
                                                <h6 className="text-center text-muted">0{t2.getDate()}</h6>
                                                </div>
                                )
                                
                            
                                }
                            })}
                    </div>
                    <div className="hoanthien">
                       <KhungHoanThanh id={id} demso={demso} sotime={sotime} giotime={giotime}></KhungHoanThanh>
                    </div>
                    </div>
                                    
                            </div>
                        </div>
                    </div>
                  

             
    )
}

export default LichChieu
