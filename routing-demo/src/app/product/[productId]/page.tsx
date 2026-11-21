export default async function ProductDetails({ params } : {
    params : Promise<{ productId : string}>;
}) {
    const productId = (await params).productId
    return <h1>Details about the product {productId}!!</h1>
}

// [] -> this treats as a dynamic routing so we need not to add elements or id's manually one-after the other