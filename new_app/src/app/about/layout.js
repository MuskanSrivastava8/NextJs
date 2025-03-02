'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
const Layout = ({ children }) => {
    const pathName = usePathname()
  return (
    <div>
    {pathName!="/about/aboutproduct" ?
      <ul>
        <li>
          <Link href="/about">About main button</Link>
        </li>
        <li>
          <Link href="/about/aboutuser">Aboutuser main button</Link>
        </li>
        <li>
          <Link href="/about/aboutproduct">Aboutproduct main button</Link>
        </li>
      </ul> : null }
      <p>......................</p>
      {children}
    </div> 
  );
};
export default Layout;
