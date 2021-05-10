import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { useGlobalContext } from '../Context';
import {Pie} from 'react-chartjs-2'
import LichChieu from './Tungphim/LichChieu';
import ThongTin from './Tungphim/ThongTin';
import BinhLuan from './Tungphim/BinhLuan';
import Loading from '../component/Loading';

function Tungphim() {
    const {listPhim,heThongRap,setBienPhim} =useGlobalContext();
   const [load,setLoad]=useState(true)
    const {id}=useParams();
   
    const [songuoi,setSonguoi]=useState(null);
    const [sodiem,setSodiem]=useState(null)
    const [nguoidanhgia,setNguoidanhgia]=useState(JSON.parse(localStorage.getItem("nguoidanhgianao"))||[])

    useEffect(()=>
        {
            setTimeout(()=>
            {setLoad(false)},2000)
        })
    useEffect(()=>
        {
            setBienPhim(Number(id));
        },[])
    useEffect(()=>
        {
           
            let arr=nguoidanhgia.find((item)=>item.ma===Number(id));
         
            if(arr!==undefined)
                {
                   
                    setSonguoi(arr.soluong);
                    setSodiem(arr.diem)
                }
            else {
                let ban=listPhim.find((item)=>item.maPhim===Number(id));

                let dem=Math.floor(Math.random()*99);
                setSonguoi(dem);
                
                let diem=ban.danhGia;
                setSodiem(ban.danhGia);
                let bang=[...nguoidanhgia,{ma:Number(id),soluong:dem,diem:diem}]
                localStorage.setItem("nguoidanhgianao",JSON.stringify(bang));
            }
        },[nguoidanhgia,listPhim])
   if(load===true)
        {
            return (
                <div><Loading></Loading></div>
            )
        }
    return (
        
        <div className="detail container-fluid">
            
           
          
            {listPhim.map((item,index)=>
                {
                   
                    const {maPhim,biDanh,hinhAnh,maNhom,danhGia,moTa,ngayKhoiChieu,tenPhim}=item;
                        if(maPhim===Number(id))
                            {
                             
                                return (
                                    <div className="khung-anh row" key={index}>
                                    <div className="khung-anh-bia col-12 d-none d-md-block" style={{backgroundImage:`url(${hinhAnh})`}}>
                                        <div className="khung-mau"></div>
                                        </div>
                                    <div className="offset-lg-1 col-lg-10 khung-chi col-12">
                                        <div className="row text-light text-row">
                                            <div className="col-md-3 bo-khoangcach">
                                                <img src={hinhAnh} className="anh-phim"></img>
                                                <div className="khung-mau-nen d-md-none">
                                                    </div>
                                                </div>
                                            
                                            <div className="col-md-4 pt-md-5 ml-md-5 ml-lg-0 thongtin-chieu">
                                                <p className="pt-lg-5">{ngayKhoiChieu.slice(0,10)}</p>
                                               <h5 className="d-flex align-items-center"><button className="btn btn-warning btn-sm"><b>{maPhim}</b></button><b className="ml-3 align-content-center">{tenPhim}</b> </h5>
                                                <p className="mt-3">2D/Digital</p>
                                                <button className="btn btn-danger mt-md-4 book-ve">Đặt Vé</button>
                                                </div>
                                            <div className=" col-md-3 pt-5 d-none d-md-block">
                                                <div className="circlePercent">
                                                   
                                                        
                                                        <Pie className="chart-pie"
                                                            data={{
                                                            
                                                            datasets: [
                                                                {
                                                                    borderColor:"none",
                                                                backgroundColor: [
                                                                    "#28a745",
                                                                    "#000000",
                                                                   
                                                                ],
                                                                data: [sodiem,10-sodiem]
                                                                }
                                                            ]
                                                            }}
                                                           
                                                        />
                                                <div className="khung-diem">
                                                    <h5>{sodiem}</h5>
                                                    </div>
                                                        </div>
                                                        <div className="so-nguoi">
                                                            
                                                            <p className="text-center">{songuoi} người đánh giá</p>
                                                            </div>
                                                    
                                                    </div>
                                                    
                                               
                                            </div>
                                        </div>
                                      
                                    </div>
                                )
                            }
                })}
             
             
              
            <div className="khung-nen">
            <div className="container-fluid  py-5 ">
            <div className="row">
                <div className="offset-lg-1 col-lg-10 col-12">
                   <div className="row py-md-5">
                       <div className="col-12 tintuc pb-5">
                           <ul className="nav nav-pills justify-content-center bangchon" id="#myTintuc">
                               <li className="nav-item">
                                   <a href="#lichchieu" className="nav-link active" data-toggle="pill">
                                       <h6>Lịch Chiếu</h6>
                                   </a>
                               </li>
                               <li className="nav-item">
                                   <a href="#thongtin" className="nav-link" data-toggle="pill">
                                       <h6>Thông Tin</h6>
                                   </a>
                               </li>
                               <li className="nav-item">
                                   <a href="#danhgia" className="nav-link " data-toggle="pill">
                                       <h6>Đánh Giá</h6>
                                   </a>
                               </li>
                           </ul>
                       </div>
                       <div className="col-12 khung-tiet">
                       <div className="tab-content " id="myTintuc4">
                       <div id="lichchieu" className="tab-pane fade show active bg-light">
                           <LichChieu id={Number(id)}></LichChieu>
                           </div>
                        <div id="thongtin" className="tab-pane fade">
                           <ThongTin id={Number(id)}></ThongTin>
                           </div>
                        <div id="danhgia" className="tab-pane fade bg-light">
                            <BinhLuan id={Number(id)} nguoidanhgia={nguoidanhgia} setNguoidanhgia={setNguoidanhgia}></BinhLuan>
                           </div>
                           </div>
                           
                           </div>
                       </div>
                   </div>
                </div>

            </div>
            </div>
            
        </div>
    )
}

export default Tungphim
