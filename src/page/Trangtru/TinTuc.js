import React, { useState } from 'react'
import { datadienanh } from './Data/DataDienanh'
import { datareview } from './Data/DataReview'
import { datakhuyenmai} from './Data/DataKhuyenMai'
import TinTucCon from './TinTucCon'

function TinTuc() {
    const [bang,setBang]=useState(JSON.parse(localStorage.getItem("bang"))||[]);

    return (
        <div className="container-fluid mt-5 pb-5" id="tintuc">
            <div className="row">
                <div className="col-lg-10 offset-lg-1 col-12 shadow">
                   <div className="row py-md-5">
                       <div className="col-12 tintuc pb-5">
                           <ul className="nav nav-pills justify-content-center" id="#myTintuc">
                               <li className="nav-item">
                                   <a href="#dienanh" className="nav-link active" data-toggle="pill">
                                       <h6>Điện Ảnh</h6>
                                   </a>
                               </li>
                               <li className="nav-item">
                                   <a href="#review" className="nav-link" data-toggle="pill">
                                       <h6>Review</h6>
                                   </a>
                               </li>
                               <li className="nav-item">
                                   <a href="#khuyenmai" className="nav-link " data-toggle="pill">
                                       <h6>Khuyến Mãi</h6>
                                   </a>
                               </li>
                           </ul>
                       </div>
                       <div className="col-12 ">
                       <div className="tab-content" id="myTintuc1">
                       <div id="dienanh" className="tab-pane fade show active">
                           <TinTucCon data={datadienanh}></TinTucCon>
                           </div>
                        <div id="review" className="tab-pane fade">
                           <TinTucCon data={datareview}></TinTucCon>
                           </div>
                        <div id="khuyenmai" className="tab-pane fade">
                           <TinTucCon data={datakhuyenmai}></TinTucCon>
                           </div>
                           </div>
                           
                           </div>
                       </div>
                   </div>
                </div>

            </div>
      
    )
}

export default TinTuc
