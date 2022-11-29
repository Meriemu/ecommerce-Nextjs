 import Image from "next/image";
 import Head from "next/head";

const singleProduct = ({res}) => {
const { id, title, price, description, category, image } = res;
  return (
    <div className="singleProduct__container">
        <Head>
            <title> title of product { id } - {title}</title>
        </Head>
        <Image src={image} width='200' height='150' alt={`single product ${id}`} priority={id} />
        <h2> { title } </h2>
        <p className="singleProduct__price"> { price } $ </p>
        <p className="singleProduct__description"> { description} </p>
        <p className="singleProduct__category"> { category } </p>
    </div>
  )
}

export default singleProduct


export async function getStaticPaths() {
    const req = await fetch ("https://fakestoreapi.com/products");
    const res = await req.json();

    const paths = res.map(product => {
        return {
            params: { id: product.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const req = await fetch("https://fakestoreapi.com/products/" + id);
    const res = await req.json();

    return {
        props: { res }
    }
}