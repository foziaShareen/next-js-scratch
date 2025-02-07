
import Link from "next/link"
import Layout from "../components/Layout";
import Nav from "../components/Nav";
const About = ()=>{
    return(
    <Layout mainTitle={"about page"} footer={`this  is built by fozia ✍️ copyright ©️${new Date().getFullYear()}`}>
        
         <Link href="/">go to home page</Link>
         <p>lorem ipsum</p>
         
    </Layout>
   
)};


    export default About