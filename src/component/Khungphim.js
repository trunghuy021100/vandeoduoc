import React from 'react'
import { useGlobalContext } from '../Context'

import Khungcon from './Khungcon';
function Khungphim({demso,sotime,giotime}) {
    const {lichChieu} =useGlobalContext();
    return (
        <div>
            {lichChieu.map((item,index)=>
                                { 
                                    const {logo,lstCumRap,maHeThongRap,mahom,tenHeThongRap}=item;
                                    if(demso===index)
                                        {
                                        return(
                                            <div className="tab-content" key={index}>
                                            
                                                {lstCumRap.map((items,indexs)=>
                                                    {
                                                        let k=0;
                                                        const {danhSachPhim,maCumRap,tenCumRap,heThongRap,diaChi}=items;
                                                            return (
                                                                <div id={maCumRap} className={`${indexs===0?`tab-pane fade show active ten-cum-rap`:`tab-pane fade ten-cum-rap`}`} key={indexs}>
                                                                    <Khungcon sotime={sotime} giotime={giotime} tenCumRap={tenCumRap} maCumRap={maCumRap} diaChi={diaChi} danhSachPhim={danhSachPhim} k={k}></Khungcon>
                                                                    </div>
                                                            )
                                                    })}
                                                
                                            </div>
                                            
                                        )
                                                }
                                })}
        </div>
    )
}

export default Khungphim
