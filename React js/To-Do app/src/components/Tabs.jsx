export function Tabs(props){
    const {todos}=props
    const tabs=['All','Open','Completed']
    return ( 
        <nav className="tab-container">
            {tabs.map((tab,tabIndex)=>{
                const NumofTask=tab ==='All'?
                todos.length:
                tab==='Open'?
                todos.filter(val=>!val.complete).
                length:todos.filter(val=>val.complete).length
                return (
                    <button className="tab-button"><h4>{tab} <span>({NumofTask})</span></h4></button>
                )
            })}

        </nav>
    )
}