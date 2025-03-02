'use client'

 async function Student({params}) {
    const data = await params;
    console.log("params",data)

  return (
    <div>
      <h1>Student List</h1>
     { data.student}
    </div>
  );
};
export default Student