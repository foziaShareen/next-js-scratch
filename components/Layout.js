import Nav from './Nav';

const Layout = ({mainTitle,footer,children}) => {
    // console.log(children)

    return (
        <div>
            <Nav />
            <hr/>
            <h1>{mainTitle}</h1>
            {children}
            <footer style={{textAlign:"center"}} className="footer"></footer>
            {/* every content for example home page,or about page content will be rendered here as children as props */}
        </div>
    );
};

export default Layout;
// we can also write like this, it is same as above
// const Layout = props=>{
//     return(
//         <div>
//             <Nav />
//             {props.children}
//         </div>
// }