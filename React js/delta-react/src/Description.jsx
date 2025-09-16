import './App.css'

function Description(){
    const msg="saket"
    return (<>
    <h1>i am {msg}.</h1>
    </>)
}
function Desk(){
    let val=8;
    return (
        <>
        <p>value of 8*8-:{val*val}</p>
        </>
    )
}
export {Description,Desk}