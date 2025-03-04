async function fetchData() {
  let data = await fetch("https://dummyjson.com/users");
  data = await data.json();
  return data.users;
}
export default async function Api() {
  let res = await fetchData();
  console.log(res);
  return (
    <>
      <div>data</div>
      {res.map((i) => {
        return(<li>{i.firstName}</li>)
        
      })}
    </>
  );
}
