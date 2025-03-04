import ProductBtn from "./productBtn";

async function getDetails() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}
export default async function Productlistserver() {
  const data = await getDetails();

  return (
    <>
      {data.map((item) => {
        return (
          <>
           <h1 style={{backgroundColor:"pink"}}> {item.title}</h1>
           <h2>hii</h2>
            <ProductBtn/>
          </>
        );
      })}
    </>
  );
}
