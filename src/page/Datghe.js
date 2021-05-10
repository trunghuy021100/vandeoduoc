import React, { useEffect, useState } from 'react'
import { FaCheck, FaSquare, FaTimes, FaWater } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Loading from '../component/Loading';
import { useGlobalContext } from '../Context'
import DayGhe from './Datghe/DayGhe';
import DayGheVip from './Datghe/DayGheVip';
import Doan from './Datghe/Doan';


function Datghe() {
    let mang=["A","B","C","D","E","F","G","H","I","K"];
    const [ghedadat,setGhedadat]=useState(JSON.parse(localStorage.getItem("saokhongduoc"))||[])
    const {luudatve}=useGlobalContext();
    const [demgiay,setDemgiay]=useState(120);
    const [thongbao,setThongbao]=useState(false);
    const [bangdadat,setBangdadat]=useState([]);
    const [bangdangdat,setBangdangdat]=useState([]);
    const [danhcombo,setDanhcombo]=useState([]);
    const [hiencombo,setHiencombo]=useState(false);
    const [sotien,setSotien]=useState(0);
    const [tongtien,setTongtien]=useState(0);
    const [tiencom,setTienCom]=useState(0);
    const [thanhtoan,setThanhToan]=useState(false)
    const [load,setLoad]=useState(true)

    useEffect(()=>
        {
            setTimeout(()=>
                {
                    setLoad(false)
                },2000)
        })
    const handleThanhToan=()=>
        {
            if(sotien>0)
                {
                   let bang1=[...bangdadat,...bangdangdat];
                   console.log(bang1);
                let ghemoi= ghedadat.map((item,index)=>
                    {
                        if(item.maPhim===luudatve.maPhim && item.maCupRap===luudatve.maCupRap && item.ngayChieuGioChieu===luudatve.ngayChieuGioChieu)
                        {
                            return {...item,datroi:bang1}
                        }
                        else {
                            return {...item}
                        }
                    })
                    console.log(ghemoi);
                   setBangdadat(bang1)
                    setBangdangdat([]);
                    localStorage.setItem("saokhongduoc",JSON.stringify(ghemoi))
                    setDanhcombo([])
                    setThanhToan(true)
              
                }
        }


    useEffect(()=>
        {
            setTongtien(tiencom+sotien)
        },[tiencom,sotien])
    useEffect(()=>
        {
            let tienve=0;
            let truocvip=["C","D","E","E","G","H"];
            let sauvip=["2","3","4","5","6","7","8","9","10","11","12","13","14"]
            bangdangdat.map((item,index)=>
                {
                   if(truocvip.includes(item.slice(0,1)) && sauvip.includes(item.slice(1)))
                    {
                        tienve=tienve+7;
                    }
                    else {
                        tienve=tienve+5;
                    }
                   
                })
                setSotien(tienve)
        },[bangdangdat])

    useEffect(()=>
        {
            let tiencombo=0;
            danhcombo.map((item,index)=>
                {
                    tiencombo=tiencombo+(item.price*item.amount);
                })
            setTienCom(tiencombo)
        })

    useEffect(()=>
        {
           
           
            if(ghedadat.length>0 && luudatve!==null)
                {
        
                    let day=ghedadat.find((item,index)=>item.maPhim===luudatve.maPhim && item.maCupRap===luudatve.maCupRap && item.ngayChieuGioChieu===luudatve.ngayChieuGioChieu)
                   
                    if(day!==undefined)
                        {
                            setBangdadat(day.datroi)
                        }
                    else{
                        let bang=[],arr=[];
                        for(let i=0;i<20;i++)
                            {
                                let dau=mang[Math.floor(Math.random()*10)];
                                let cuoi=Math.floor(Math.random()*10 +2);
                                let cum=`${dau}${cuoi}`
                                if(bang.includes(cum)===false)
                                    {
                                        bang.push(cum);
                                    }
                            }
                        arr=[...ghedadat,{...luudatve,datroi:bang}]
                        localStorage.setItem("saokhongduoc",JSON.stringify(arr))
                         setBangdadat(bang)
                        
                    }
                    
                }
            else{
                let bang=[],arr=[];
                        for(let i=0;i<20;i++)
                            {
                                let dau=mang[Math.floor(Math.random()*10)];
                                let cuoi=Math.floor(Math.random()*10 +2);
                                let cum=`${dau}${cuoi}`
                                if(bang.includes(cum)===false)
                                    {
                                        bang.push(cum);
                                    }
                            }
                            arr=[...ghedadat,{...luudatve,datroi:bang}]
                        localStorage.setItem("saokhongduoc",JSON.stringify(arr))
                         setBangdadat(bang)
                        
            }
        },[])

    useEffect(()=>
        {
            if(demgiay===1)
                {
                    setThongbao(true);
                }
            if(demgiay>0)
                {
                    setTimeout(()=>
                        {
                            setDemgiay(demgiay-1)
                        },1000)
                }
            
        },[demgiay])

    if(load===true)
        {
            return (<Loading></Loading>)
        }
    if(luudatve!==null)
    {
        let t=Math.floor(demgiay/60);
    return (
        <div className="datghe container-fluid">
            <div className="row">
                <div className="col-lg-9 col-md-8 pl-r">
                    <div className="info py-2 d-flex justify-content-between">
                        <div className="khung-info d-flex">
                            <img className="anh-info" src={luudatve.hinhAnh}></img>
                            <div className="content-info ml-2">
                                <h6>{luudatve.tenCumRap}</h6>
                                <b className="text-muted">{luudatve.diaChi}</b>
                            </div>
                        </div>
                        <div className="khung-dem text-danger mr-md-2">
                            <h3>0{t}:{`${demgiay-t*60 >9?demgiay-t*60:`0${demgiay-t*60}`}`}</h3>
                        </div>
                        <div class={`${thongbao?"modal fade modal-dialog-centered show mo-info":"modal fade modal-dialog-centered "}`} id="mymodal"
                        style={{display:`${thongbao?"block":"none"}`}}>
                        <div class="modal-dialog">
                            <div class="modal-content text-center py-4 px-5">
                                <b class="icon-error"><FaWater></FaWater></b>
                                <h3><b>HẾT GIỜ</b></h3>
                                <p>Bạn có muốn đặt vé lại không</p>
                                <div className="khung-btn-chon">
                                    <button class="btn btn-primary mx-1"
                                    onClick={()=>{
                                        setThongbao(false);
                                        setDemgiay(120)
                                    }}>Đồng Ý</button>
                                   <Link to="/"><button class="btn btn-secondary mx-1">Hủy Bỏ</button></Link> 
                                </div>
                            </div>     
                        </div>
                    </div>
                    </div>
                    <img className="manhinh" src="https://kdq-react-movie-app.surge.sh/images/screen.png"></img>
                    <div className="so-do-ghe">
                        <DayGhe name="A" bangdadat={bangdadat} bangdangdat={bangdangdat} setBangdangdat={setBangdangdat} ></DayGhe>
                        <DayGhe name="B" bangdadat={bangdadat} bangdangdat={bangdangdat} setBangdangdat={setBangdangdat}></DayGhe>
                        <DayGheVip name="C" bangdadat={bangdadat} bangdangdat={bangdangdat} setBangdangdat={setBangdangdat}></DayGheVip>
                        <DayGheVip name="D" bangdadat={bangdadat} bangdangdat={bangdangdat} setBangdangdat={setBangdangdat}></DayGheVip>
                        <DayGheVip name="E" bangdadat={bangdadat} bangdangdat={bangdangdat} setBangdangdat={setBangdangdat}></DayGheVip>
                        <DayGheVip name="F" bangdadat={bangdadat} bangdangdat={bangdangdat} setBangdangdat={setBangdangdat}></DayGheVip>
                        <DayGheVip name="G" bangdadat={bangdadat} bangdangdat={bangdangdat} setBangdangdat={setBangdangdat}></DayGheVip>
                        <DayGheVip name="H" bangdadat={bangdadat} bangdangdat={bangdangdat} setBangdangdat={setBangdangdat}></DayGheVip>
                        <DayGhe name="I" bangdadat={bangdadat} bangdangdat={bangdangdat} setBangdangdat={setBangdangdat}></DayGhe>
                        <DayGhe name="K" bangdadat={bangdadat} bangdangdat={bangdangdat} setBangdangdat={setBangdangdat}></DayGhe>

                    </div>
                    <div className="ghichu d-flex justify-content-center mt-4 mb-2">
                        <div className="tung-ghi-chu mx-2">
                            <div className="text-center"><FaSquare className="moighe "></FaSquare></div>
                            <p className="text-muted text-center">Ghế Thường</p>
                        </div>
                        <div className="tung-ghi-chu mx-2">
                            <div className="text-center"><FaSquare className="moighe text-warning"></FaSquare></div>
                            <p className="text-muted text-center">Ghế Vip</p>
                        </div>
                        <div className="tung-ghi-chu mx-2">
                            <div className="text-center"><FaSquare className="moighe text-success"></FaSquare></div>
                            <p className="text-muted text-center">Ghế Đang Chọn</p>
                        </div>
                        <div className="tung-ghi-chu mx-2">
                            <div className="text-center"><FaSquare className="moighe text-secondary"></FaSquare></div>
                            <p className="text-muted text-center">Ghế Đã Có Người Chọn</p>
                        </div>
                    </div>
                </div>
                <div className={`${hiencombo?"khung-mua-combo col-lg-9 col-md-8 ":"khung-mua-combo col-lg-9 col-md-8 bien"}`}>
                        <div className="khung-combo">
                            <div className="list-doan hienlen">
                                <b className="dongmo text-danger"  onClick={()=>setHiencombo(false)}><FaTimes></FaTimes></b>
                                <Doan danhcombo={danhcombo} setDanhcombo={setDanhcombo}></Doan>
                            </div>
                           <div className="khung-dong"
                           onClick={()=>setHiencombo(false)}>

                           </div>
                        </div>
                    </div>
                <div className="col-md-4 col-lg-3 shadow nhulol">
                    <div className="ve">
                    <div className="row">
                        <div className="col-12">
                   <div className="ticket">
                      
                       <p className="border-bottom py-3 font-weight-bold">{luudatve.tenPhim}</p>
                       <div className="ticket-gio d-flex justify-content-between py-2 border-bottom">
                           <p>Ngày Giờ Chiếu</p>
                           <p className="font-weight-bold">{luudatve.ngayChieuGioChieu}</p>
                       </div>
                       <div className="ticket-gio ticket-cum d-flex justify-content-between border-bottom pt-4 pb-2">
                           <p>Cụm Rap</p>
                           <p className="font-weight-bold ">{luudatve.tenCumRap}</p>
                       </div>
                       <div className="ticket-gio d-flex justify-content-between pt-4 pb-2 border-bottom">
                           <p>Mã Rạp</p>
                           <p className="font-weight-bold">{luudatve.maRap}</p>
                       </div>
                       <div className="ticket-gio d-flex justify-content-between pt-4 pb-2 border-bottom">
                           <p className={`${bangdangdat.length>0?"d-none":"text-danger"}`}>Vui lòng chọn ghế</p>
                           <div className={`${bangdangdat.length>0?"ticket-dat d-flex ticket-cum text-danger":"d-none"}`}>
                                <p className="mr-2">Ghế </p>
                                <div className="d-flex">
                                    {bangdangdat.map((item,index)=>
                                        {
                                            return (
                                                <p> {item} , </p>
                                            )
                                        })}
                                </div>
                            </div>
                           <h6 className="font-weight-bold text-success">{sotien} $</h6>

                       </div>
                       <div className="ticket-gio d-flex justify-content-between pt-4 pb-2 border-bottom"
                       onClick={()=>setHiencombo(true)}>
                           <p className="text-danger">Chọn Combo</p>
                        
                           <h6 className="font-weight-bold text-success">{tiencom} $</h6>

                       </div>
                       <div className={"ticket-gio d-flex justify-content-between pt-4 pb-2 border-bottom"}>
                       <p className="text-danger">Tổng</p>
                        
                        <h6 className="font-weight-bold text-success">{tongtien} $</h6>
                           </div>
                       <div className="ticket-gio d-flex justify-content-between pt-4 pb-2 border-bottom">
                           <p>Ưu đãi</p>
                           <p className="font-weight-bold">0 %</p>
                       </div>
                       <div className="thanh-toan">
                    <button className="btn btn-block" onClick={handleThanhToan}>THANH TOÁN</button>
                   
                   </div>
                   <div class={`${thanhtoan?"modal fade modal-dialog-centered show mo-info":"modal fade modal-dialog-centered"}`} 
                   style={{display:`${thanhtoan?"block":"none"}`}}>
                        <div class="modal-dialog">
                            <div class="modal-content text-center py-4 px-5">
                                <b class="icon-check text-success mb-2"><FaCheck></FaCheck></b>
                                <h3 className="mb-4"><b>Bạn Đã Thanh Toán Thành Công</b></h3>
                               
                                
                                   <Link to="/trangtru"><button class="btn btn-secondary mx-1">Đóng</button></Link>
                            </div>     
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
    else{
        return (
            <div>
                <Loading></Loading>
            </div>
        )
    }
}

export default Datghe
