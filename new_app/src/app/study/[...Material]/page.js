"use client";
async function Material({params}) {
  const data = await params;
  console.log("params",data)
  return (
    <div>
      <h1>Material List {data.Material[1]}</h1>
    </div>
  );
};

export default Material

