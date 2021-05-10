import React, { useEffect, useState } from 'react'
import { datanuoc } from './Datadoan/Datanuoc'
import {datapoca} from './Datadoan/Datapoca'
import {datakeo} from './Datadoan/Datakeo'
import {datamon} from './Datadoan/Datamon'
import {datacombo} from './Datadoan/Datacombo'
import {dataly} from './Datadoan/Dataly'
import {databap} from './Datadoan/Databap'
import {databeer} from './Datadoan/Databeer'
import {databia} from './Datadoan/Databia'
import {datango} from './Datadoan/Dattango'
import TungDo from './TungDo'

function Doan({danhcombo,setDanhcombo}) {
    const [nuoc,setNuoc]=useState([]);
    const [keo,setKeo]=useState([]);
    const [poca,setPoca]=useState([]);
    const [mon,setMon]=useState([]);
    const [combo,setCombo]=useState([]);
    const [ly,setLy]=useState([]);
    const [bap,setBap]=useState([]);
    const [beer,setBeer]=useState([]);
    const [bia,setBia]=useState([]);
    const [ngo,setNgo]=useState([]);
    
    useEffect(()=>
        {
            let arr=[...nuoc,...poca,...keo,...mon,...combo,...ly,...bap,...beer,...bia,...ngo];
          console.log(arr);
            if(arr.length>0)
            {
           setDanhcombo(arr)
            }
        },[nuoc,poca,keo,mon,combo,ly,bap,beer,bia,ngo])
    return (
        <div className="container ml-2 mr-2">
         <TungDo title="NƯỚC NON/CHAI" data={datanuoc} danhcombo={nuoc} setDanhcombo={setNuoc}></TungDo> 
         <TungDo title="SNACK - KẸO" data={datakeo} danhcombo={keo} setDanhcombo={setKeo}></TungDo> 
         <TungDo title="POCA" data={datapoca} danhcombo={poca} setDanhcombo={setPoca}></TungDo>   
         <TungDo title="MÓN MỚI" data={datamon} danhcombo={mon} setDanhcombo={setMon}></TungDo> 
         <TungDo title="COMBO MỚI" data={datacombo} danhcombo={combo} setDanhcombo={setCombo}></TungDo> 
         <TungDo title="NƯỚC NGỌT LY" data={dataly} danhcombo={ly} setDanhcombo={setLy}></TungDo> 
         <TungDo title="BẮP RANG" data={databap} danhcombo={bap} setDanhcombo={setBap}></TungDo> 
         <TungDo title="BEER" data={databeer} danhcombo={beer} setDanhcombo={setBeer}></TungDo> 
         <TungDo title="COMBO BEER" data={databia} danhcombo={bia} setDanhcombo={setBia}></TungDo> 
         <TungDo title="COMBO BẮP" data={datango} danhcombo={ngo} setDanhcombo={setNgo}></TungDo> 
        </div>
    )
}

export default Doan
