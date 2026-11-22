import Link from 'next/link'


// Link components -> created a clickable navigation elements
export default function Home() {
    return (
        <>
            <h1>Welcome Home!!</h1>
            <Link href = "/blog">Blog</Link>
            <Link href = "/product">Product</Link>
        </>
    );
}