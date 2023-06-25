import { useNavigate } from "react-router-dom"
const Home = () => {
    const navigate = useNavigate();

    const navigateToAboutPage = () => {
        console.log("function called")
        navigate("/about");
    }

    return <>
        <h1>Home page</h1>
        <p>This is Home Page fo our awesome App</p>
        <p>and here we are learning about Router</p>
        {/* <Link to="/about">Go to About Page</Link> */}
        <br />
        <button onClick={() => navigateToAboutPage()}>About Page using useNavigate hook</button>

    </>
}
export default Home