import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function MovieCard({ id, poster_path, backdrop_path }) {
    const cardRef = useRef(null)
    useEffect(()=>{
        const cardSize = cardRef.current.offsetWidth
        console.log(cardSize)
    })


    return (
        <div className="flex flex-col gap-5 items-center">
            {/* <img src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} /> */}
            <Link to={`/movies/${id}`}> <img className="px-2 min-w-48 min-h-72 hover:brightness-200 hover:scale-105 transition ease-in-out duration-[0.3s]" ref={cardRef} src={`https://image.tmdb.org/t/p/w154${poster_path}`} /></Link>
        </div>
    )

}