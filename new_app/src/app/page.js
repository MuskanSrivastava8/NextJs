'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const navigate = (urlName)=>{
    router.push(urlName)
  }
  const router = useRouter()
  return (
    <div className={styles.page}>
      <main className={styles.main}>HI</main>
      {/* <User name="Muskan" /> */}
      <Link href={'/login'}>Go to Login page</Link>
      <button onClick={()=>navigate("/login")}>Login</button>

    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h>{props.name}</h>
    </div>
  );
};
