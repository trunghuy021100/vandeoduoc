import React,{useState,useContext, useEffect} from 'react'
import {LayThongTinHeThongRap,LayThongTinLichChieuHeThongRap} from './api/QuanLiRap'
import {LayDanhSachPhim} from './api/QuanLiPhim'
const AppContext = React.createContext()
let arr=[];
const AppProvider=({children})=>
    {
        const [listPhim,setListPhim]=useState([]);
        const [heThongRap,setHeThongRap]=useState([]);
        const [lichChieu,setLichChieu]=useState([]);
         const [danhsachdangky,setDanhsachdangky]=useState(JSON.parse(localStorage.getItem("danhsachdangky"))||[]);
         const [tendangnhap,setTendangnhap]=useState([]);
         const [bienPhim,setBienPhim]=useState(null);
         const [luudatve,setLuudatve]=useState(JSON.parse(localStorage.getItem("luudatve"))||null)
         const [loading,setLoading]=useState(true);
        const getListPhim=async ()=>
                {
                    const response =await fetch(LayDanhSachPhim);
                    let products=await response.json();
                   arr=products;
                   let bang=products.filter((item,index)=>index<40)
                    setListPhim(bang);
                    
                    
                }
        const getHeThongRap=async()=>
                {
                    const response =await fetch(LayThongTinHeThongRap);
                    let products=await response.json();
                  
                  
                    setHeThongRap(products);
                }
        const getLichChieu=async()=>
        {
            const response =await fetch(LayThongTinLichChieuHeThongRap);
            let products=await response.json();
            
            
            setLichChieu(products);
            setLoading(false)
        }
const handleDangChieu=()=>
                {
                    let bang=arr.filter((item,index)=>index<40)
                    setListPhim(bang);
                }
const handleSapChieu=()=>
{
    let bang=arr.filter((item,index)=>index>40)
    setListPhim(bang);
}
useEffect(()=>
            {
                getListPhim();
                getHeThongRap();
                getLichChieu();
               
            },[])
        return (
            <AppContext.Provider 
            value={{
                listPhim,
                handleDangChieu,handleSapChieu,
                heThongRap,
                lichChieu,
                danhsachdangky,setDanhsachdangky,
                tendangnhap,setTendangnhap,
                bienPhim,setBienPhim,
                luudatve,setLuudatve,
                loading,

            }}>{children}</AppContext.Provider>
        )
        }
 export const useGlobalContext = () => {
        return useContext(AppContext)
      }
      
export { AppContext, AppProvider }