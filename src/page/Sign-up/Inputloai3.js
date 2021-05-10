import React from 'react'

function Inputloai3({value,bien,name,setValue,setBien,so,alert,type,chua}) {
    return (
        <div className="form-group">
        <input type={type} className={`${(bien===true && value.length>=so && value.indexOf(chua)!==-1)?"form-control form-control-lg is-valid"
   :`${(bien===true &&( value.length<so || value.indexOf(chua)===-1 ))?"form-control form-control-lg is-invalid":"form-control form-control-lg"}` }`} placeholder={`${name}*`}
   value={value}
   onChange={(e)=>{
    setBien(true)
    setValue(e.target.value)
    }}
    onBlur={()=>setBien(true)}></input>
    <div className={`${(bien===true && value.length<so)?"invalid-feedback":"d-none"}`}>{alert}</div>
    </div>
    )
    
}

export default Inputloai3
