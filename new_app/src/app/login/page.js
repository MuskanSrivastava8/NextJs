import Link from "next/link"
const Login = ()=>{
    return(<div>Login page <Link href={'/'}>Go to Home page</Link></div>)
}
export default Login

export function generateMetadata(){
    return{
        title:"user dataone",
        description:"descriptionone"
    }
}