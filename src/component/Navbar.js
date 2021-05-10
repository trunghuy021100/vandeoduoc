import React from 'react'
import {Link} from 'react-router-dom'
import { useGlobalContext } from '../Context'
import { DataAnh } from '../page/Trangtru/Data/DataAnh';
function Navbar() {
  const {tendangnhap,setTendangnhap}=useGlobalContext();

  if(tendangnhap.length===0)
  {
    return (
       <header className="header">
            <nav className="navbar navbar-expand-md bg-light navbar-light">
  
  <a className="navbar-brand" href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxhkLDqxutsxghEXDgOlXJOyGXpZBDK2u8A&usqp=CAU"></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-between" id="collapsibleNavbar">
  
    <ul className="navbar-nav navbar-list">
      <li className="nav-item">
        <a className="nav-link" href="/#lichchieu">LỊCH CHIẾU</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#cumrap">CỤM RẠP</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#tintuc">TIN TỨC</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#ungdung">ỨNG DỤNG</a>
      </li>
      </ul>
      <ul className={"navbar-nav navbar-log"}>
      <li className="nav-item login">
       
          <img className="mr-2" src="data:image/jpeg;base64,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"></img>
          <Link to="/dangnhap">
       <p className="nav-link">ĐĂNG NHẬP</p>
       </Link>
      </li>
      <li className="nav-item sigin" >
      <Link to="/dangky">
        <p className="nav-link" >ĐĂNG KÝ</p>
        </Link>
      </li>
    </ul>
   
  </div>
        </nav>
        </header>
    )
}
else{
  return (
    <header className="header">
         <nav className="navbar navbar-expand-md bg-light navbar-light">

<a className="navbar-brand" href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxhkLDqxutsxghEXDgOlXJOyGXpZBDK2u8A&usqp=CAU"></img></a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
 <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse justify-content-between" id="collapsibleNavbar">

 <ul className="navbar-nav navbar-list">
   <li className="nav-item">
     <a className="nav-link" href="/#lichchieu">LỊCH CHIẾU</a>
   </li>
   <li className="nav-item">
     <a className="nav-link" href="/#cumrap">CỤM RẠP</a>
   </li>
   <li className="nav-item">
     <a className="nav-link" href="/#tintuc">TIN TỨC</a>
   </li>
   <li className="nav-item">
     <a className="nav-link" href="/#ungdung">ỨNG DỤNG</a>
   </li>
   </ul>
   <ul className={"navbar-nav navbar-log"}>
   <li className="nav-item login">
  
        <img className="mr-2" src={DataAnh[Number(tendangnhap[0].sdt.slice(4,5))]}></img>
   
    <p className="nav-link text-uppercase">{tendangnhap[0].ho} {tendangnhap[0].ten}</p>
     
   </li>
   <li className="nav-item sigin" >
     
     <p className="nav-link" onClick={()=>
      {setTendangnhap([])}}>ĐĂNG XUẤT</p>
     
     
   </li>
 </ul>

</div>
     </nav>
     </header>
 )

}
}

export default Navbar
