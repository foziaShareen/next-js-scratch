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
        <div style={styleNav}>  
        <Link href="/">Home</Link> 
        <Link href="/about">About</Link> 
        </div>
    )
}

export default Nav