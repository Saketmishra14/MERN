export function Header(props){
    const {todos}=props
    const todoslength=todos.length
    const isTaskPlural=todos.length !=1
    const istask=isTaskPlural ? 'Tasks':'Task'

    return (
        <header>
            <h1 className="text-gradient">You have {todoslength} Open {istask}.</h1> </header>
    )
}