import React, { useEffect, useState } from 'react'
import  {useGlobalContext } from '../../Context'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import {FaPlayCircle, FaStar, FaVideo} from 'react-icons/fa'
import { Link } from 'react-router-dom'


function ListPhim() {
    const  {listPhim,handleDangChieu,handleSapChieu}=useGlobalContext();
    
    const [trailer,setTrailer]=useState(null);
    const [dangchieu,setDangChieu]=useState(true);
    const bien=Math.floor(listPhim.length/8);
   let data=[];

        for(let i=0;i<bien;i++)
            {
                data.push(i);
              
            }
     
    const handleChonTrailer=(item)=>
                {
                    setTrailer(item.trailer);
                }
    const renderSlides = () =>
        data.map((num,so) => (
    
              <div key={so} className="row khung-bo" id="lichchieu">
                {
                    listPhim.map((item,index)=>
                        {
                            
                            if(so*8<=index && index<(so*8+8))
                                {
                                    return(
                                        <div key={index} className="col-md-3 col-sm-4 mb-5 bo-phim">
                                          
                                             
                                            <div className="tung-phim">

                                            <img src={item.hinhAnh} className="img-fluid rounded-lg"></img>
                                            <button className="btn btn-success danhgia">{item.danhGia} <b className="text-warning"><FaStar></FaStar></b></button>
                                            <div className="khung-mo justify-content-center">
                                                <div className="khung-video" data-toggle="modal" data-target="#myModal">
                                               <img src="https://kdq-react-movie-app.surge.sh/images/play.png"
                                                onClick={()=>handleChonTrailer(item)}></img>
                                                        
                                                </div>
                                                
                                               <Link to={`/phim/${item.maPhim}`}> <button className="btn btn-danger datve">ĐẶT VÉ</button></Link>
                                                </div>
                                                
                                            <div className="khung-ten d-flex align-items-center">
                                            <button className="btn btn-sm btn-dark mt-2">{item.maPhim}</button>
                                           
                                            <b className="text-muted pl-1 ten-phim">{item.tenPhim}</b>
                                            </div>
                                            
                                            </div>
                                         
                                        </div>
                                    )
                                }
                        })
                }
              </div>
            ));
    
   
    return (
     <div className="container-fluid w-100 mt-5">
         <div className="row">
             <div className="col-12 d-sm-flex justify-content-center mb-4">
                 <h6 className={`${dangchieu?"mx-2 text-center text-danger":"mx-2 text-center"}`}
                 onClick={()=>
                    {
                       
                        setDangChieu(true);
                        handleDangChieu();
                    }}>ĐANG CHIẾU</h6>
                 <h6 className={`${dangchieu?"mx-2 text-center":"mx-2 text-center text-danger"}`}
                  onClick={()=>
                    {
                        
                        setDangChieu(false);
                        handleSapChieu();                    }}>SẮP CHIẾU</h6>
             </div>
        <div className="offset-lg-1 col-lg-10 col-12 khung-phim">
        <Slider
     slidesToShow={1}
     slidesToScroll={1}
     autoplay={true}
     speed={700}
     arrows={true}
     adaptiveHeight={false}
   
     autoplaySpeed={10000}>
         {renderSlides()}

     </Slider>
     <div className="modal fade" id="myModal" onClick={()=>setTrailer(null)}>
         <div className="modal-dialog modal-lg modal-dialog-centered">
             <div className="modal-content">
                <iframe src={trailer} className="frame-video"></iframe>
             </div>
         </div>
        </div>                                 
     </div>
     </div>
     </div>
    )
}

export default ListPhim
