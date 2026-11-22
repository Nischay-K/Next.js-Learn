import Link from 'next/link';


// Example of Dynamic navigation using the link Components
export default function ProductList() {
    const productId = 100
    return (
        <>
            <Link href = '/'>Home</Link>
            <h1>Product List</h1>
            <h2>
                <Link href = '/product/1'>Product 1</Link>
            </h2>
            <h2>
                <Link href = '/product/2'>Product 2</Link>
            </h2>
            <h2>
                {/* Jumps directly to the home home rather than staying in the product page!! */}
                <Link href = '/product/3' replace>Product 3</Link>
            </h2>
            <h2>                                          
                <Link href = {`/product/${productId}`}>Product {productId}</Link>
            </h2>                                         

        </>
    );
}