"use client";
export default function ProductBtn() {
    const alerts=()=>{
        alert("hi")
    }
  return (
    <div>
      <button onClick={()=>alerts()}>Click here</button>
    </div>
  );
}
