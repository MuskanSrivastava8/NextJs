'use client'
import Link from "next/link";
const StudentList = () => {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li>
          <Link href={"/studentlist/student1"}>Student 1</Link>
        </li>
        <li>
          <Link href={"/studentlist/student2"}>Student 2</Link>
        </li>
  
      </ul>
    </div>
  );
};

export default StudentList