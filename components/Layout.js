import Nav from './Nav';

const Layout = ({children}) => {
    // console.log(children)

    return (
        <div>
            <Nav />
            {children}
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