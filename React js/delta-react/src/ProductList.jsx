import Product from './Product.jsx'

function ProductList(){
    return (<>
    <Product title="Phone" price={10000}/>
    <Product title="Laptop" price={80000} />
    <Product title="Pen" price={10} />
    </>)
}
export default ProductList;