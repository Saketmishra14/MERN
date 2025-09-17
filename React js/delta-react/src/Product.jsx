import "./Product.css"
function Product({title, price, features=[], features2}){
    const isdiscount=price>30000;
    let styles={backgroundColor:isdiscount ?"yellow":"pink"}
        return (<div className="Product" style={styles} >
        <h2>Product-: {title}</h2>
        <h6>Product Price -: {price}</h6>
         <p>Arrays: {features}</p>
         <ul>{features.map((feat)=>(<li >{feat}</li>))}</ul>
         {/* <p>{price>30000 ? "10% discount apply":""}</p> */}
         {isdiscount && <p>10% discount apply</p>}
    </div>)}
export default Product;