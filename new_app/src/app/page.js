"use client";
import custom from "./custome.module.css";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import customnew from "@/style/customenew.module.css";
import { useState } from "react";
import Profile from "../../public/next.svg";

export default function Home() {
  const navigate = (urlName) => {
    router.push(urlName);
  };
  const router = useRouter();
  const [color, setColor] = useState("red");
  const { red } = customnew;
  return (
    <div className={styles.page}>
      <Image src={Profile} height={500} width={400}/>
      Image

      {/* <main className={styles.main}>HI</main>
      <div className={custom.main}>custome</div>
      <div className={customnew.main}>custome new</div>
      <div className={color == "red" ? customnew.red : customnew.purple}>
        custome new
      </div>
      <h2 style={{ backgroundColor: color == "red" ? "red" : "green" }}>
        Heading
      </h2>
      <div id={customnew.id}>custome ID</div>

      <div className={red}>custome ID1</div>
      <div className={red}>custome ID2</div>
      <div className={red}>custome ID3</div>
      <div className={red}>custome ID4</div>

      <button onClick={() => setColor("purple")}>Button</button> */}
      {/* <User name="Muskan" /> */}
      {/* <Link href={"/login"}>Go to Login page</Link>
      <button onClick={() => navigate("/login")}>Login</button> */}
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
