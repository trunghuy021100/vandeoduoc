import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Loading from '../component/Loading';
import { useGlobalContext } from '../Context';
import Inputloai1 from './Sign-up/Inputloai1';
import Inputloai2 from './Sign-up/Inputloai2';
import Inputloai3 from './Sign-up/Inputloai3'

function Signup() {

    const {danhsachdangky,setDanhsachdangky}=useGlobalContext();

    const [ho,setHo]=useState("");
    const [bien1,setBien1]=useState(false);
    const [ten,setTen]=useState("");
    const [bien2,setBien2]=useState(false);
    const [taikhoan,setTaikoan]=useState("");
    const [bien3,setBien3]=useState(false);
    const [matkhau,setMatkhau]=useState("");
    const [bien4,setBien4]=useState(false);
    const [nhaclai,setNhaclai]=useState("");
    const [bien5,setBien5]=useState(false);
    const [email,setEmail]=useState("");
    const [bien6,setBien6]=useState(false);
    const [sdt,setSdt]=useState("");
    const [bien7,setBien7]=useState(false);
    const [bienbaoloi,setBienbaoloi]=useState(false)
    const [bienbaodung,setBienbaodung]=useState(false)
    const [bienbaoloi1,setBienbaoloi1]=useState(false)

    const [duonglinh,setDuonglinh]=useState(false);
    const [load,setLoad]=useState(true)

    useEffect(()=>
        {
            setTimeout(()=>
                {
                    setLoad(false)
                },1500)
        })
    const handleDangky=()=>
        {
            
            if(ho.length>=2 && ten.length>=2 && taikhoan.length>=6 && matkhau.length>=8 && matkhau===nhaclai
                && email.length>=10 && sdt.length>=10 && email.indexOf("@gmail.com")!==-1)
                {
                    const arr=[... new Set(danhsachdangky.map((item)=>item.taikhoan))];
                    console.log(arr);
                   if(arr.includes(taikhoan))
                   {
                    setBienbaoloi(true);
                    setTimeout(()=>
                        {
                            setBienbaoloi(false)
                        },3000)

                   }
                   else{
                       setBienbaodung(true);
                       let obj={ho:ho,ten:ten,email:email,taikhoan:taikhoan,sdt:sdt,matkhau:matkhau};
                       let bang=[...danhsachdangky,obj];
                       console.log(bang);
                       setDanhsachdangky(bang);
                       localStorage.setItem("danhsachdangky",JSON.stringify(bang));
                       setTimeout(()=>
                        {
                            setHo("");setTen("");setTaikoan("");setMatkhau("");
                            setNhaclai("");setEmail("");setSdt("");setBien1(false);
                            setBien2(false);setBien3(false);setBien4(false);setBien5(false);
                            setBien6(false);setBien7(false);
                            setBienbaodung(false);
                        },1500)
                        
                   }
                    
                }
                else{
                    setBienbaoloi1(true);
                    setTimeout(()=>
                        {
                            setBienbaoloi1(false)
                        },3000)
                    
                }
        }
        if(load===true)
        {   return(
            <Loading></Loading>
        )
        }
    return (
        <div className="khung-dang">
            <div className="khung-dang-tren pb-5">
                <div className="py-3"></div>
                <div className="khung-dang-ky py-5">
                    <div className="khung-anh-log">
                    <img className="" src="https://kdq-react-movie-app.surge.sh/images/logo.png"></img>
                    </div>
                    <h5 className="text-center my-3">Đăng Ký</h5>
                    <div className="row ">
                        <div className="col-md-6">
                        <Inputloai1 value={ho} bien={bien1} setValue={setHo} setBien={setBien1} name="Họ"
                        alert="Bạn cần điền đủ thông tin" so={2} type="text"></Inputloai1>
                        </div>
                        <div className="col-md-6">
                           <Inputloai1 value={ten} bien={bien2} setValue={setTen} setBien={setBien2} name="Tên" 
                           alert="Bạn cần điền đủ thông tin" so={2} type="text"></Inputloai1>
                        </div>
                        <div className="col-12">
                        <Inputloai1 value={taikhoan} bien={bien3} setValue={setTaikoan} setBien={setBien3} name="Tài Khoản"
                        alert="Tài khoản phải chứa ít nhất 6 ký tự" so={6} type="text"></Inputloai1>
                        </div>
                        <div className="col-md-6">
                        <Inputloai1 value={matkhau} bien={bien4} setValue={setMatkhau} setBien={setBien4} name="Mật Khẩu"
                        alert="Mật Khẩu phải chứa ít nhất 8 ký tự" so={8} type="password"></Inputloai1>
                        </div>
                        <div className="col-md-6">
                           <Inputloai2 value={nhaclai} bien={bien5} setValue={setNhaclai} setBien={setBien5} name="Nhập Lại Mật Khẩu"
                           alert="Mật Khẩu phải chứa ít nhất 8 ký tự" so={8}  sosanh={matkhau} alert1="Mật Khâu chưa trùng nhau"></Inputloai2>
                        </div>
                        <div className="col-md-6">
                        <Inputloai3 value={email} bien={bien6} setValue={setEmail} setBien={setBien6} name="Email" chua="@gmail.com"
                        alert="Email không hợp lệ" so={10} type="text"></Inputloai3>
                        </div>
                        <div className="col-md-6">
                        <Inputloai1 value={sdt} bien={bien7} setValue={setSdt} setBien={setBien7} name="Số Điện Thoại"
                        alert="Số điện thoại phải đủ 10 số" so={10} type="number"></Inputloai1>
                        </div>
                        <div className="col-12">
                            <div className="form-group"></div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="nhanthongbao"></input>
                                <label htmlFor="nhanthongbao" className="form-chẹk-lable">Nhận các thông báo và ưu đãi mới nhất</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className={`${bienbaoloi?"alert alert-danger w-100":"d-none"}`}>Tài khoản này đã có người sử dụng</div>
                            <div className={`${bienbaodung?"alert alert-success w-100":"d-none"}`}>Bạn đã đăng ký thành công</div>
                            <div className={`${bienbaoloi1?"alert alert-warning w-100":"d-none"}`}>Bạn điền thiếu thông tin</div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-secondary btn-block"
                           onClick={handleDangky}>Đăng Ký</button>
                        </div>
                        <div className="col-12 mt-1">
                            <Link to="/dangnhap"><p className="text-primary text-center">Đã có tài khoản tại Tix? Đăng nhập ngay</p></Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Signup
