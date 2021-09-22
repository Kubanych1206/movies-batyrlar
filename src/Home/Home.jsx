import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Movie from "../Movie/Movie";
// import { AddCinema } from "../Redux/actions";
import "./Home.css"

 const Home = () => {
     const movies = useSelector(state=>state.cinema); 
    //  const dispatc = useDispatch()
    //  console.log(movies);
    return (
        <div className="containerHome">
            <div className="boxmap">{movies.map((el) => {
            return <Movie id ={el.id} name={el.name}  description={el.description} duration={el.duration} release={el.release} img={el.img} />
        })}</div>
        </div>
    )
}
export default Home;