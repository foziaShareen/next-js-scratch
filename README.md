1 npm init 
2 npm i --sava react react-dom next
3 make folder name pages
4 in package.json add following scripts
"scripts": {
    
    "dev":"next",
    "build": "next build",
    "start": "next start"
  },
  5 npm run dev


  //steps to create layout
  1. in components folder create a new folder name layout
  2. make a new file name layout.js in layout folder like this
   import Nav from './Nav';

const Layout = ({children}) => {
    return (
        <div>
            <Nav />
            {children}
        </div>
    );
};

export default Layout;
3.... in index .js add the following code
import Link from "next/link"
import Layout from "../components/Layout"
import Head from 'next/head'
const index = ()=>{
    return(
        <Layout> 
        <Head>
            <title>Home</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content="Home page"/>
            <meta name="keywords" content="react nextjs"/>
            <meta name="author" content="fozia"/>
            
        </Head>

        home page
       
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
//note there is no need of nav separately as it is included in layout 
4....