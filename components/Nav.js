import Link from "next/link"

const styleNav ={
    display:"flex",
    justifyContent:"space-around",
    backgroundColor:"skyblue",
    color:"white",
    height:"40px",
    padding:"10px",
    width:"100%",
    margin:"0",
    right:"0",
    paddingTop:"0",
    
    
    
    alignItems:"center",
    listStyle:"none",
    padding:"0",
}
const Nav =()=>{
    return(
        <div style={styleNav} className="mainnav">
            <img src="/static/logo.jpg" height="40px"/>  
        <Link href="/">Home</Link> 
        <Link href="/about">About</Link> 
        <Link href="/blogs">Blogs</Link>
        <Link href="/news">News</Link>
        <style jsx>{`img{color:white; border-radius:50%}`}</style>
        </div>
    )
}

export default Nav