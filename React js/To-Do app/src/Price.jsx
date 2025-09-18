function Price({oldPrice,newPrice}){
    let oldstyle={
        textDecorationLine:"line-through"
    }
    let newstyle={
        fontWeight:"bold"
    }
    let style={
        backgroundColor:"#e0c367",
        height:"30px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px",
    }
    return(
        <div style={style}>
        <span style={oldstyle}>{oldPrice}</span>
        &nbsp;&nbsp;&nbsp;
        <span style={newstyle}>{newPrice}</span>
        </div>
    )
}
export default Price;