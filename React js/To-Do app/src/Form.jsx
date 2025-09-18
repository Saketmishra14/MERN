function handleOnClick(event){
    event.preventDefault();
    console.log("Form is submitted")
}
export default function Form(){
    return(
        <form action="">
            <input type="text" placeholder="write something" />
            <button onClick={handleOnClick}>Submit</button>
        </form>
    )
}