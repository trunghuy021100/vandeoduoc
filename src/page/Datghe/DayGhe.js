import React from 'react'
import { FaSquare } from 'react-icons/fa';

function DayGhe({name,bangdadat,bangdangdat,setBangdangdat}) {
    
   const handleChon=(name,index)=>
    {
        if(bangdangdat.includes(`${name}${index}`))
            {
                let arr=bangdangdat.filter((item)=>item!==`${name}${index}`)
                setBangdangdat(arr)
                console.log(bangdangdat);
            }
        else{
            let arr=[...bangdangdat,`${name}${index}`];
            setBangdangdat(arr)
            console.log(bangdangdat);
        }
    }
    let mang=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    return (
        <div className="hangghe d-flex">
            <div className="codinh mr-1 mr-md-2 ml-1 ml-md-2">
            <h5 className="">{name}</h5>
            </div>
        
        <div className="tungghe">
            {

                mang.map((item,index)=>
                    {   
                        if(bangdangdat.includes(`${name}${index}`))
                        {
                            return(
                                
                                   
                                <FaSquare key={index} className="moighe mr-1 text-success text-secondary"
                                onClick={()=>handleChon(name,index)}>
                                
                                </FaSquare>
                               
                            )
                        }
                       else if(bangdadat.includes(`${name}${index}`))
                        {
                        return(
                            <FaSquare key={index} className="moighe mr-1 text-secondary"></FaSquare>
                        )
                        }
                        else{
                            return(
                                <FaSquare key={index} className="moighe mr-1" onClick={()=>handleChon(name,index)}></FaSquare>
                            )
                        }
                    })
            }
        </div>
            
        </div>
    )
}

export default DayGhe
