import React from 'react'
import { useGlobalContext } from '../Context';
import Khungcon from '../component/Khungcon'

function KhungHoanthien({demso,giotime,sotime,bien,th}) {
    const {lichChieu}=useGlobalContext();
    return (
        <div>
            {lichChieu.map((item,index)=>
                        {
                            const {logo,lstCumRap,maHeThongRap,mahom,tenHeThongRap}=item;

                            if(index===demso)
                            {
                            return (
                            <div id={`${bien}${index}`} className={`${index===0?`tab-pane fade show active ten-cum-rap`:`tab-pane fade ten-cum-rap`}`}  key={index}>
                                <ul className="nav cumrap nav-pills" id="myPin6">
                                    {lstCumRap.map((items,indexs)=>
                                        {  let k=0;
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
                                                <li className="nav-item" key={indexs}>
                                                <a data-toggle="tab" href={`#${items.maCumRap}`}  className={`${indexs===0 ?"nav-link active":"nav-link"}`} >
                                                <div className="cumrap mx-md-2 border-bottom py-4 d-flex" data-toggle="collapse" data-target={`#huy${items.maCumRap}`}>
                                                    <img src={img}></img>
                                                    <div >
                                                    <p className="title-cumrap ml-2 text-truncate "><b className={color}>{maHeThongRap}</b> - {items.tenCumRap} </p>
                                                    <p className="text-cumrap ml-2 text-truncate">{items.diaChi}</p>
                                                    </div>
                                                   
                                                </div>
                                                <div className="collapse d-md-none" id={`huy${items.maCumRap}`}>
                                                        <Khungcon sotime={sotime} giotime={giotime} tenCumRap={items.tenCumRap} diaChi={items.diaChi} maCumRap={items.maCumRap} danhSachPhim={items.danhSachPhim} k={k}></Khungcon>
                                                    </div> 
                                                </a>
                                                
                                                </li>
                                                
                                            )
                                        })}
                                    </ul>
                            </div>)
                            }
                        }
                )}
        </div>
    )
}

export default KhungHoanthien
