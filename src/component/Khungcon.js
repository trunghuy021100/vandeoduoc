import React from 'react'
import {Link} from 'react-router-dom'
import { FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa';
import { useGlobalContext } from '../Context';


function Khungcon({sotime,danhSachPhim,giotime,k,tenCumRap,maCumRap,diaChi}) {
    const {setLuudatve,tendangnhap} =useGlobalContext();
    return (
        <div>
            {danhSachPhim.map((itemss,indexss)=>
                    {
                        
            const {hinhAnh,lstLichChieuTheoPhim,maPhim,tenPhim}=itemss;
                {
                    const allCategories = [...new Set(lstLichChieuTheoPhim.map((bien) =>Number(bien.ngayChieuGioChieu.slice(8,10))))];
                    
                    if(allCategories.includes(sotime))
                        {
                            
                            return (
                                <div className="py-4 border-bottom square w-100"  key={indexss} data-toggle="collapse" data-target={`#huy${maPhim}`}>
                                <div className="phim-trongngay  d-flex" >
                                
                                <img src={hinhAnh}></img>
                                
                                <div className="phim-thongtin ml-2 w-100" >
                                <i className="float-right uplen mr-2"><FaChevronCircleDown></FaChevronCircleDown></i>
                                    <div className="d-flex thongtin-phim">
                                    
                                    <button className="mr-1">C 13</button>
                                    <p className="text-truncate ml-1">- {tenPhim}</p>
                                    </div>
                                    
                                    <p className="text-muted">116 phút - TIX 8.6 - IMDb 0</p>
                                    
                                </div>
                                
                                </div>
                                <div id={`huy${maPhim}`} className="collapse">
                                    <h5>2D Digital</h5>
                                
                                    
                                    {lstLichChieuTheoPhim.map((bien,so)=>
                                    {
                                        const {giaVe,maLichChieu,maRap,ngayChieuGioChieu,tenRap}=bien;
                                            if(Number(ngayChieuGioChieu.slice(8,10))===sotime)
                                                {
                                                    if(Number(ngayChieuGioChieu.slice(11,13))<(giotime+1))
                                                        {
                                                            return (
                                                                <button className="btn btn-outline-dark mr-2 mb-1" key={so}>
                                                                    {ngayChieuGioChieu.slice(10)}
                                                                </button>
                                                            )
                                                        }
                                                    else {
                                                    return (
                                                        <Link to={`${tendangnhap.length>0?"/datghe":"/dangnhap"}`} key={so}>
                                                        <button className="btn btn-outline-primary mr-2 mb-1" onClick={
                                                            ()=>
                                                                {
                                                                    let obj={tenCumRap,maCumRap,hinhAnh,tenPhim,maRap,ngayChieuGioChieu,diaChi};
                                                                        localStorage.setItem("luudatve",JSON.stringify(obj))
                                                                        setLuudatve(obj);
                                                                }
                                                        }>
                                                            {ngayChieuGioChieu.slice(10)}
                                                        </button>
                                                        </Link>
                                                    )
                                                    }
                                                }



                                    })}
                                </div>
                                </div>
                            )
                        }
                    else {
                        k=k+1;
                        if(k===danhSachPhim.length)
                            {
                                return (
                                    <div key={indexss} className="alert alert-danger">Cụm Rạp Này Hôm Nay Không Có Phim</div>
                                )
                            }
                    }
                    
                    
                }
                
        })}
</div>
)
}

export default Khungcon
