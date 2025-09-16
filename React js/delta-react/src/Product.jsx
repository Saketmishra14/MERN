import "./Product.css"
function Product({title,price}){
    return (<div className="Product">
        <h2>Product-: {title}</h2>
        <h6>Product Price -: {price}</h6>
    </div>
    );
}
export default Product;