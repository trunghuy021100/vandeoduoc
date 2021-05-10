import React from 'react'
import { useGlobalContext } from '../../Context'

function ThongTin({id}) {
   
    const {listPhim}=useGlobalContext();
    

    return (
        <div>
            {listPhim.map((item,index)=>
                {
                    if(item.maPhim===id)
                        {
                            return(
                                <div className="row text-light ml-sm-5 mr-sm-5" key={index}>

                                        <div className="col-md-3 col-6 thongtin1">
                                            <p>Ngày công chiếu</p>
                                            <p>Đạo diễn</p>
                                            <p>Diễn viên</p>
                                            <p>Thể loại</p>
                                            <p>Định dạng</p>
                                            <p>Ngôn ngữ</p>
                                            
                                        </div>
                                        <div className="col-md-4 col-6 thongtin2 text-warning">
                                            <p>{item.ngayKhoiChieu.slice(0,10)}</p>
                                            <p>Faker</p>
                                            <p>Quỷ Vương</p>
                                            <p>League of legends</p>
                                            <p>LOL</p>
                                            <p>Việt Nam</p>
                                            
                                          
                                        </div>
                                        <div className="col-md-5">
                                            <h6>Nội dung</h6>
                                            <p>{item.moTa}</p>
                                        </div>
                                </div>
                            )
                        }
                })}
        </div>
    )
}

export default ThongTin
