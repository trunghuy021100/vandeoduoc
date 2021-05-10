import React from 'react'

function Inputloai2({value,bien,name,setValue,setBien,so,alert,sosanh,alert1}) {
    return (
        <div className="form-group">
        <input type="password" className={`${(bien===true && value.length>=so && value===sosanh)?"form-control form-control-lg is-valid"
   :`${(bien===true && (value.length<so ||value!==sosanh))?"form-control form-control-lg is-invalid":"form-control form-control-lg"}` }`} placeholder={`${name}*`}
   value={value}
   onChange={(e)=>{
    
    setValue(e.target.value)
    }}
    onBlur={()=>setBien(true)}></input>
    <div className={`${(bien===true && value.length<so)?"invalid-feedback":"d-none"}`}>{alert}</div>
    <div className={`${(bien===true && value.length>=so && value!==sosanh)?"invalid-feedback":"d-none"}`}>{alert1}</div>
    </div>
    )
}

export default Inputloai2
