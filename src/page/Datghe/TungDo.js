import React, { useEffect, useState } from 'react'
import { FaExclamation, FaMinus, FaPlus } from 'react-icons/fa'

function TungDo({title,data,danhcombo,setDanhcombo}) {
    const [doan,setDoan]=useState(data);
    useEffect(()=>
        {   
        
            let arr=doan.filter((item)=>item.amount>0);
            
        
                setDanhcombo(arr)
            
           
        },[doan])
    const handleGiam=(index)=>
        {
            
            let bang=doan.map((item,indexs)=>
                {
                    if(index===indexs && item.amount>0)
                        {
                            return (
                                {...item,amount:item.amount-1}
                            )
                            
                        }
                    else{
                        return (
                            {...item}
                        )
                    }
                })
                setDoan(bang)
        }
    const handleThem=(index)=>
        {
            
            let bang=doan.map((item,indexs)=>
                {
                    if(index===indexs)
                        {
                            return (
                                {...item,amount:item.amount+1}
                            )
                            
                        }
                    else{
                        return (
                            {...item}
                        )
                    }
                })
                setDoan(bang)
        }
    return (
        <div className="tungdo row mt-4">
        <div className="col-12">
               <div className="title-tungdo">
                   <p className="ml-2 py-2">{title}</p>
               </div>
            </div>   
        <div className="cacmon col-12">
                {
                    doan.map((item,index)=>
                        {
                            return (
                                <div className="tungmon d-flex mb-4" key={index}>
                                    <img src="https://kdq-react-movie-app.surge.sh/images/popcorn.png"></img>
                                    <div className="content-tungmon align-self-center d-flex w-100 justify-content-between">
                                        <div className="content-tren">
                                            <div className="ten-mon">
                                               <FaExclamation className="icon-mon ml-1"></FaExclamation>
                                               <b className="ml-1">{item.name}</b>
                                                </div>
                                                <b className="gia-tien text-success ml-3">{item.price} $</b>
                                            </div>
                                        <div className="content-duoi d-flex mr-2 mt-3">
                                            <FaMinus className="text-muted mx-3 mt-1"
                                            onClick={()=>handleGiam(index)}></FaMinus>
                                            <span className="px-2 khung-soluong">{item.amount}</span>
                                            <FaPlus className="text-danger mx-3 mt-1"
                                            onClick={()=>handleThem(index)}></FaPlus>
                                            </div>
                                        </div>
                                </div>
                            )
                        })
                }
            </div>        
        </div>
    )
}

export default TungDo
