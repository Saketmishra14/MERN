import {NextResponse} from 'next/server'
export function GET(){
    return (NextResponse.json({sucess:"this message is sucessfully delivered."}))
}