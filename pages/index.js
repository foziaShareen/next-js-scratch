import Link from "next/link"
import Layout from "../components/Layout"
import Head from 'next/head'
const index = ()=>{
    return(
        <Layout mainTitle={"home page"} footer={`this  is built by fozia ✍️ copyright ©️${new Date().getFullYear()}`}> 
        <Head>
            <title>Home</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content="Home page"/>
            <meta name="keywords" content="react nextjs"/>
            <meta name="author" content="fozia"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
            
            
        </Head>
        

        
        {/* we dont want to use href in nextjs , because if you use href it will load on server side, we dont want navigation on client 
        side so we use next link so it will not reload
        
        so import Link from next/link
        */}
        {/* <a href="/about">about page</a> */}
        <Link href="/about">about page</Link>
        <p>lorem ipsum

        </p>
        {/* we can style in next js like below , it will be scoped to this page , and not global */}
        <style jsx>{`p{color:red}`}</style>
        </Layout>
    )
}

export default index
// import { Link, useNavigate } from 'react-router-dom';

// function MyComponent() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <Link to="/">Home</Link>
//       <button onClick={() => navigate('/')}>Go to Home</button>
//     </div>
//   );
// }