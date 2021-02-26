import Search from "./Search";
import Results from "./Results";


function Home(){
    return (
        <div className="home">
            <div><Search/></div>
            <div><Results/></div>
        </div>
    )
}

export default Home;