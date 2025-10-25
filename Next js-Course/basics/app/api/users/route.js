import {NextResponse} from 'next/server';

export async function POST(req,res){
    const {name,age,email}=await req.json();
    if(!name||!age||!email){
        return NextResponse.json({error:"data not found",ok:false},
            {status:400})
    }    
    return (NextResponse.json({res:"this message is succesfully delivered."}));
}


