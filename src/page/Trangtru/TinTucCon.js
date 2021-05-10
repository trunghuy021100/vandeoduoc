import React, { useState } from 'react'
import { FaComment, FaCommentAlt, FaThumbsUp } from 'react-icons/fa';

function TinTucCon({data}) {
    const [sodem,setSodem]=useState(0)
    const handleXemThem=()=>
        {
            setSodem(sodem+1);
        }
    const handleThuGon=()=>
        {
            setSodem(sodem-1);
        }
    return (
        <div className="row">
        <div className="col-12">
            <div className="row">
           {data.map((item,index)=>
            {   
                if(index<((sodem*5)+5))
                {
                if(index%5===0 || index%5===1)
                {
                return (
                    <div className="col-sm-6 pb-2" key={index}>
                        <img className="img-fluid rounded-lg pb-1" src={item.image}></img>
                        <h6 className="text-tren">{item.title}</h6>
                        <p className="text-duoi">{item.content}</p>
                        <b className="like text-muted mr-4"><FaThumbsUp className="mr-1"></FaThumbsUp> {item.like}</b>
                        <b className="comment text-muted"><FaCommentAlt className="mr-1"></FaCommentAlt> {item.comment}</b>
                    </div>
                )
                }
                if(index%5===2 || index%5===3)
                {
                return (
                    <div className="col-sm-4 pb-2" key={index}>
                        <img className="img-fluid rounded-lg pb-1" src={item.image}></img>
                        <h6 className="text-tren">{item.title}</h6>
                        <p className="text-duoi">{item.content}</p>
                        <b className="like text-muted mr-4"><FaThumbsUp className="mr-1"></FaThumbsUp> {item.like}</b>
                        <b className="comment text-muted"><FaCommentAlt className="mr-1"></FaCommentAlt> {item.comment}</b>
                    </div>
                )
                }
                if(index%5===4)
                {
                return (
                    <div className="col-sm-4 pt-3 pt-sm-0 pb-2" key={index}>
                        <ul className="tintuc-nho">
                            <li className="d-flex">
                                <img src={item.image1}></img>
                                <p className="ml-2" > {item.text1}</p>
                            </li>
                            <li className="d-flex">
                            <img src={item.image2}></img>
                                <p className="ml-2"> {item.text2}</p>
                            </li>
                            <li className="d-flex">
                            <img src={item.image3}></img>
                                <p className="ml-2"> {item.text3}</p>
                            </li>
                            <li className="d-flex">
                            <img src={item.image4}></img>
                                <p className="ml-2"> {item.text4}</p>
                            </li>
                        </ul>
                    </div>
                )
                }
            }
            })}
            </div>
            </div>
            <div className="col-12 justify-content-center py-4">
                <ul className="d-flex justify-content-center">
                    <li className="mx-3">
                        <button className={`${sodem>0?"btn btn-danger":"d-none"}`}
                        onClick={handleThuGon}>Thu Gọn</button>
                    </li>
                    <li>
                    <button className={`${((sodem*5)+5)<data.length?"btn btn-warning":"d-none"}`}
                    onClick={handleXemThem}>Xem Thêm</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TinTucCon
