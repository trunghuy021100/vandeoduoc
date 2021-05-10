import React from 'react'
import { useGlobalContext } from '../Context';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const KhungHoanthanh2 = ({id,demso,giotime,sotime}) => {
    const {lichChieu,setLuudatve,tendangnhap} =useGlobalContext();
   
    return (
        <div>
             {lichChieu.map((item,index)=>
                        {
                            const {logo,lstCumRap,maHeThongRap,mahom,tenHeThongRap}=item;

                            if(index===demso)
                            {
                                            let k=0,i=0;
                                            let img,color;
                                            if (index===0)
                                                {
                                                        color="text-success"
                                                        img="https://kdq-react-movie-app.surge.sh/images/BHDStar_theater.jpg"
                                                }
                                            else if(index===1)
                                                {
                                                    color="text-danger"
                                                    img="https://kdq-react-movie-app.surge.sh/images/CGV_theater.jpg"
                                                }
                                            else if(index===2)
                                            {
                                                color="text-primary"
                                                img="https://kdq-react-movie-app.surge.sh/images/CineStar_theater.jpg"
                                            }
                                            else if(index===3)
                                                {
                                                    color="text-cam"
                                                    img="https://kdq-react-movie-app.surge.sh/images/Galaxy_theater.jpg"
                                                }
                                            else if(index===4)
                                                {
                                                    color="text-tim"
                                                    img="https://kdq-react-movie-app.surge.sh/images/LotteCinima_theater.jpg"
                                                }
                                            else if(index===5)
                                                {
                                                    color="text-warning"
                                                    img="https://kdq-react-movie-app.surge.sh/images/MegaGS_theater.jpg"
                                                }
                            return (
                                    <div key={index}>
                               
                                    {lstCumRap.map((items,indexs)=>
                                        { 
                                            const {danhSachPhim,tenCumRap,maCumRap,diaChi}=items;
                                        const mang=[...new Set(danhSachPhim.map((bien) =>Number(bien.maPhim)))]
                                            if(mang.includes(id))
                                            {
                                                return (
                                                    <div key={indexs}>
                                                        {danhSachPhim.map((itemss,indexss)=>
                                                            {
                                                               

                                                                const {hinhAnh,lstLichChieuTheoPhim,maPhim,tenPhim}=itemss;
                                                                {
                                                                    if(maPhim===id)
                                                                    {
                                                                    const allCategories = [...new Set(lstLichChieuTheoPhim.map((bien) =>Number(bien.ngayChieuGioChieu.slice(8,10))))];
                                                                   
                                                                    
                                                                    if(allCategories.includes(sotime))
                                                                        {
                                                                            
                                                                            
                                                                            
                                                                            return (
                                                                                <div className=" ml-md-3  mt-2 mb-2 py-3  maulen" key={indexss}>
                                                                                <div className="khung-rapchieu d-flex lol collapsed" data-toggle="collapse" data-target={`#nhulol${maCumRap}`}>
                                                                                <i className="float-right  mr-2 uplen1"><FaChevronUp></FaChevronUp></i>
                                                                                    <i className="float-right  mr-2 xuong1"><FaChevronDown></FaChevronDown></i>
                                                                               
                                                                                    <img src={img}></img>
                                                                                    <p className="align-self-center pt-2 ml-3"><b className={color}>{tenCumRap.slice(0,3)}</b><b>{tenCumRap.slice(3)}</b></p>
                                                                                        
                                                                                    </div>
                                                                                    <div id={`nhulol${maCumRap}`} className="collapse mt-2">
                                                                                 
                                                                                        <p>2D Digital</p>
                                                                                    
                                                                                        
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
                                                                                                            <button className="btn btn-outline-primary mr-2 mb-1"
                                                                                                             onClick={()=>
                                                                                                                {
                                                                                                                    let obj={tenCumRap,maCumRap,hinhAnh,tenPhim,maRap,ngayChieuGioChieu,diaChi};
                                                                                                                    localStorage.setItem("luudatve",JSON.stringify(obj))
                                                                                                                    setLuudatve(obj);
                                                                                                                }}>
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
                                                                    else{
                                                                        i=i+1;
                                                                        if(i===lstCumRap.length)
                                                                        {
                                                                            return(
                                                                                <div key={indexs} className="alert alert-danger w-100 mt-2">Cụm Rạp Này Hôm Nay Không Có Phim</div>
                                                                                )
                                                                        }
                                                                       
                                                                    }
                                                                        
                                                                    }
                                                                    
                                                                }
                                                            })}
                                                      
                                                        </div>
                                                )
                                            }
                                            
                                            else{
                                                k++;i=i+1;
                                                if(k===lstCumRap.length || i===lstCumRap.length)
                                                {
                                                return(
                                                <div key={indexs} className="alert alert-danger w-100 mt-2">Cụm Rạp Này Hôm Nay Không Có Phim</div>
                                                )
                                                }
                                            }
                                           
                                            
                                        })}
                                   
                            </div>
                            )
                            }
                        }
                )}
        </div>
    )
}

export default KhungHoanthanh2

