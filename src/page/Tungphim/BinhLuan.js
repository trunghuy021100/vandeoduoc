import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';
import { useGlobalContext } from '../../Context'
import { DataAnh } from '../Trangtru/Data/DataAnh'


function BinhLuan({id,nguoidanhgia,setNguoidanhgia}) {
    const {tendangnhap}=useGlobalContext();
    const [danhsachbinhluan,setDanhsachbinhluan]=useState(JSON.parse(localStorage.getItem("binhluan"))||[])
    const arr=[0,1,2,3,4,5,6,7,8,9];
    const [sosao,setSosao]=useState(-1)
    const [bl,setBl]=useState("")

    const handleDang=()=>
        {   
            if(bl.length>0 && sosao>-1)
            {
                let t=new Date();
            let obj={...tendangnhap[0],noidung:bl,sao:sosao+1,id:id,time:Date.parse(t)};
            let bang=[...danhsachbinhluan,obj];
            setDanhsachbinhluan(bang);
            localStorage.setItem("binhluan",JSON.stringify(bang))
                setTimeout(()=>
                    {
                        setBl("");
                        setSosao(-1);
                    },300)
              let arra=nguoidanhgia.map((item,index)=>
                    {
                        if(item.ma===id)
                            {
                                return {...item,soluong:item.soluong+1,diem:(((item.diem*item.soluong)+(sosao+1))/(item.soluong+1)).toFixed(2)}
                            }
                        else {
                            return {...item};
                        }
                    }
              )
              setNguoidanhgia(arra);
              localStorage.setItem("nguoidanhgianao",JSON.stringify(arra));
            }
        }
    
    if(tendangnhap.length>0)
    {
    return (

        <div className="row">
            <div className="thanh-binh-luan col-12 d-flex p-3">
                <img src={DataAnh[Number(tendangnhap[0].sdt.slice(4,5))]} className="anh-binh-luan ml-1 ml-sm-3">

                </img>
                <div className="noidung-binhluan align-self-center ml-sm-2 mr-sm-2">
                    <input className="text bg-light border-bottom pb-1" placeholder="Bình Luận Công Khai ..." value={bl}
                    onChange={(e)=>setBl(e.target.value)}></input>
                    <div className="khung-luan d-flex justify-content-between mt-1">
                        <div className="khung-sao">
                        {arr.map((item,index)=>
                            {   if(index<=sosao)
                                {
                                return (
                                    <FaStar key={index} className="mr-sm-1 text-warning" onClick={
                                        ()=>setSosao(index)
                                    }></FaStar>
                                )}
                                else{
                                    return (
                                        <FaStar key={index} className="mr-sm-1" onClick={()=>setSosao(index)}></FaStar>
                                    )
                                }
                            })}
                            </div>
                            <div className="btn-binhluan">
                            <button className="btn btn-secondary mr-sm-3  btn-sm" onClick={()=>
                                {
                                    setSosao(-1);
                                    setBl("");
                                }}>Hủy</button>
                            <button className="btn btn-primary mr-sm-3  btn-sm"
                            onClick={handleDang}>Bình Luận</button>
                                
                            </div>
                    </div>
                    
                    
                </div>
               
            </div>
            <div className="col-12 mt-5">
           
                    {danhsachbinhluan.map((item,index)=>
                        { let te=new Date();
                            let sotruoc;
                            let theloai;
                            if(Date.parse(te)-item.time < 60000)
                                {
                                    sotruoc=Math.floor((Date.parse(te)-item.time)/1000);
                                    theloai="giây trước"
                                }
                            else if(Date.parse(te)-item.time < 3600000)
                                {
                                    sotruoc=Math.floor((Date.parse(te)-item.time)/60000);
                                    theloai="phút trước"
                                }
                            else if(Date.parse(te)-item.time < 86400000)
                                {
                                    sotruoc=Math.floor((Date.parse(te)-item.time)/3600000);
                                    theloai="giờ trước"
                                }
                            else{
                                sotruoc=Math.floor((Date.parse(te)-item.time)/86400000);
                                    theloai="ngày trước"
                            }
                            if(item.id===id)
                            {
                            return (
                                <div className="loi-binh-luan d-flex mb-3 mb-sm-4 border-bottom"  key={index}>
                                     <img src={DataAnh[Number(item.sdt.slice(4,5))]} className="anh-binh-luan ml-1 ml-sm-3">

                                    </img>
                                    <div className="tung-binh-luan ml-2 mr-2">
                                        <p>{item.ho} {item.ten}  <b className="ml-2 text-muted">{sotruoc} {theloai}</b></p>
                                        <p>{item.sao} <FaStar className="text-warning"></FaStar></p>
                                        <p>{item.noidung}</p>
                                        </div>
                                </div>
                            )
                            }
                        })}
                </div>
            
        </div>
    )
    }
    else{
        return(
            <div className="row">
                <div className="col-12 mt-3">
                    <div className="alert alert-danger">Bạn cần tài khoản để có thể bình luận</div>
                </div>
                <div className="col-12 mt-5">
           
                    {danhsachbinhluan.map((item,index)=>
                        { let te=new Date();
                            let sotruoc;
                            let theloai;
                            if(Date.parse(te)-item.time < 60000)
                                {
                                    sotruoc=Math.floor((Date.parse(te)-item.time)/1000);
                                    theloai="giây trước"
                                }
                            else if(Date.parse(te)-item.time < 3600000)
                                {
                                    sotruoc=Math.floor((Date.parse(te)-item.time)/60000);
                                    theloai="phút trước"
                                }
                            else if(Date.parse(te)-item.time < 86400000)
                                {
                                    sotruoc=Math.floor((Date.parse(te)-item.time)/3600000);
                                    theloai="giờ trước"
                                }
                            else{
                                sotruoc=Math.floor((Date.parse(te)-item.time)/86400000);
                                    theloai="ngày trước"
                            }
                            if(item.id===id)
                            {
                            return (
                                <div className="loi-binh-luan d-flex mb-3 mb-sm-4 border-bottom"  key={index}>
                                     <img src={DataAnh[Number(item.sdt.slice(4,5))]} className="anh-binh-luan ml-1 ml-sm-3">

                                    </img>
                                    <div className="tung-binh-luan ml-2 mr-2">
                                        <p>{item.ho} {item.ten}  <b className="ml-2 text-muted">{sotruoc} {theloai}</b></p>
                                        <p>{item.sao} <FaStar className="text-warning"></FaStar></p>
                                        <p>{item.noidung}</p>
                                        </div>
                                </div>
                            )
                            }
                        })}
                </div>
            </div>
        )
    }
}

export default BinhLuan
