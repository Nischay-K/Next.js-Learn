import { Metadata } from "next";

type props = {                             
    params : Promise<{productId : string}>;
}; 


// Dynamic Routing !!!
export const generateMetadata = async({ params } : props) : Promise<Metadata> => {
    const id = (await params).productId
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iPhone ${id}`);
        } , 100);
    });

    return {
        title : `Product ${title}`,
    };
};

// We can't use both metadata object and generate metadata function in the same route segment 
// It is one or the other 
// It doesn't work with the pages that are marked with the client directives 


export default async function ProductDetails({ params } : props)  {
    const productId = (await params).productId
    return <h1>Details about the product {productId}!!</h1>
}

// [] -> this treats as a dynamic routing so we need not to add elements or id's manually one-after the other