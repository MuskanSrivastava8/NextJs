"use client";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <div>
      About page home
      {/* <button onClick={() => router.push("about/aboutuser")}>
        About User1
      </button> */}
    </div>
  );
};
export default About;
