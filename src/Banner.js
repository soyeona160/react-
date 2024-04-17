import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import React from "react";
import './Banner.css'



function Banner({title, rating, runtime, genres, cover, summary, suggestions}){
    const style={
        width: '90%',
        display: 'flex',
        padding: '15px'
    }

    const setLimitLetter = (summary)=>{
        if(summary.length>500) return summary.substr(0,500)+'...'
        return summary
    }

    return(
        <div style={style}>
            <img src={cover} alt={title}/>
            <div className="banner-details">
                <h1>{title}</h1>
                <span>평점: {rating}</span>
                <span>상영시간: {runtime}</span>
                <span>장르: {genres?.join(",")}</span>
                <p>{setLimitLetter(summary)}</p>
                <div className="banner-recommends">
                    {suggestions.map((movie)=>{
                            return <img src={movie.medium_cover_image}></img>
                        })
                    }
                </div>
            </div>
        </div>
    )
}





export default Banner