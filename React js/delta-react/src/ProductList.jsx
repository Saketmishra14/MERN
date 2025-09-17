import Product from './Product.jsx'

function ProductList(){
     const features = ["Hi-Tech", "Durable", "Fast"];
    return (<>
    <Product title="Phone" price={10000} features={features} features2={{a:"saket",b:"ayush",c:"amit"}}/>
    <Product title="Laptop" price={80000} features={features} />
    <Product title="Pen" price={10} />
    </>)
}
export default ProductList;