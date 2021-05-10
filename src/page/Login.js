import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Loading from '../component/Loading';
import { useGlobalContext } from '../Context'
import Inputloai1 from './Sign-up/Inputloai1'
function Login() {
   
    const {danhsachdangky,setTendangnhap,bienPhim}=useGlobalContext();
   
    const [nhaptk,setNhaptk]=useState("");
    const [nhapmk,setNhapmk]=useState("");
    const [bien1,setBien1]=useState("");
    const [bien2,setBien2]=useState("");
    const [duonglink,setDuonglink]=useState(false);
    const [alert,setAlert]=useState(false)
    const [load,setLoad]=useState(true)

    useEffect(()=>
        {
            setTimeout(()=>
                {
                    setLoad(false)
                },1500)
        })
    const handleClick=()=>
        {
            
            if(duonglink)
                {
                    let bang=danhsachdangky.filter((item)=>item.taikhoan===nhaptk && item.matkhau===nhapmk);
                    setTendangnhap(bang)
                    
                }
            else{
                setAlert(true)

                setTimeout(()=>
                    {
                        setAlert(false)
                    },5000)
            }
        }
    useEffect(()=>
        {
            let taikhoan =[... new Set(danhsachdangky.map((item)=>item.taikhoan))]
            let matkhau =[...new Set(danhsachdangky.map((item)=>item.matkhau))]
            if(taikhoan.includes(nhaptk) && matkhau.includes(nhapmk))
                {
                    setDuonglink(true)
                }
        },[nhaptk,nhapmk])
    if(load===true)
        {   return(
            <Loading></Loading>
        )
        }
    return (
        <div className="khung-dang">
            <div className="khung-dang-tren py-5">
                <div className="khung-dang-ky">
                <div className="py-3"></div>
                <div className="khung-anh-log">
                    <img className="" src="https://kdq-react-movie-app.surge.sh/images/logo.png"></img>
                    </div>
                    <h5 className="text-center my-3">Đăng Nhập</h5>
                    <div className="row ">
                        <div className="col-md-12">
                        <Inputloai1 value={nhaptk} bien={bien1} setValue={setNhaptk} setBien={setBien1} name="Tài Khoản"
                        alert="Tài khoản phải chứa ít nhất 6 ký tự" so={6} type="text"></Inputloai1>
                        </div>
                        <div className="col-md-12">
                        <Inputloai1 value={nhapmk} bien={bien2} setValue={setNhapmk} setBien={setBien2} name="Mật Khẩu"
                        alert="Mật Khẩu phải chứa ít nhất 8 ký tự" so={8} type="password"></Inputloai1>
                        </div>
                        <div className="col-12">
                            <div className={`${alert?"alert alert-danger w-100":"d-none"}`}>Tên tài khoản hoặc mật khẩu không chinh xác</div>
                            
                        </div>
                        <div className="col-12">
                            <div className="form-group"></div>
                            <div className="form-check ml-2">
                                <input type="checkbox" className="form-check-input" id="nhanthongbao"></input>
                                <label htmlFor="nhanthongbao" className="form-chẹk-lable">Nhớ mật khẩu</label>
                            </div>
                        <div className="col-12 pb-1">
                        <Link to={`${(duonglink && bienPhim!==null)?`/phim/${bienPhim}`:`${
                            (duonglink && bienPhim===null)?"/":"/dangnhap"
                        }`}`}><button className="btn btn-secondary btn-block"
                          onClick={handleClick}>Đăng Nhập</button> </Link> 
                        </div>
                        <div className="col-12 mt-1">
                            <Link to="/dangky"><p className="text-primary text-center">Chưa có tài khoản tại Tix? Đăng ký ngay</p></Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
