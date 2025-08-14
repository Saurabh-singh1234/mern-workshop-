import { useEffect, useState } from "react"; 

function Pagination({users,send}){
    const [rows,setRows]=useEffect(5);
    const users_length =users.length
    const [C_page,setC_page]=useState(1)
    const l_row=C_page*rows;
    const first_row=l_row-rows

    send ([rows,users_length,C_page,l_row,first_row])
    return(
        <div>
            <table>

            </table>
        </div>
    )


} 
export default Pagination