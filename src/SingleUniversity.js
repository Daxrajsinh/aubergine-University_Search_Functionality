import {NavLink, useParams} from "react-router-dom";
import useFetch from "./useFetch";
import University from "./University";

function SingleUniversity() {
    const {id} = useParams();
    const {isLoading, movie, isError} = useFetch(`&i=${id}`);

    if(isLoading) {
        return (
            <section className="movie-section">
                <div className="loading">Loading...</div>
            </section>
        );
    }
    
    return (
        <section className="university-section">
            <div className="university-card">
                <figure>
                <img src={University.Image} alt="" />
                </figure>
                <div className="card-content">
                <p className="title">{University.Title}</p>
                <p className=""></p>
                <p className="card-text">{University.Released}</p>
                <p className="card-text">{University.Country}</p>
                <NavLink to="/" className="back-btn">
                    Go Back
                </NavLink>
                </div>
            </div>
        </section>
    )
}

export default SingleUniversity;