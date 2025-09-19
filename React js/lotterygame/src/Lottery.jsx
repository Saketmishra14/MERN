import {useState} from 'react'
import './Ticket.css'
import { genTicket,sum } from './helper.js'
export default function Lottery(){
    const [ticket,setTicket]=useState(genTicket(3));
    let isWinning=sum(ticket)===15;

    return(

        <div>
        <h1>Lottery game</h1>
        <div className='Ticket'>
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div>
        <h3>{isWinning && "congratulation u won"}</h3>

        </div>
    )
}