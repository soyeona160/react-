import './App.css';
import React, { Component } from 'react';
import Movie from './Movie';
import Banner from './Banner';

// 서버에서 넘어온 가상의 메뉴 데이터

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading : true,
      movies: [],
      index: 0,
    }
  }
 // 목록 30개 제한, 평점 7.0 이상, 영화 제목 오름차순 정렬
  componentDidMount(){
    fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=7.0&&sort_by=title&limit=30&&order_by=asc')
    .then( res => res.json())
    .then( result => {
      const { data : {movies} } = result
      this.setState({loading: false, movies})
    })
  }

  getRandomIndex = (length)=>{
    return Math.floor(Math.random()*length)
  }
  render(){  
    const {loading, movies, index} = this.state
    const style = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent : 'center',
      alignItems: 'center',
      width: '60%',
      textAlign: 'center'
    }
    const bannerStyle = {
      display: 'flex',
      width: '100vw',
      height: '700px',
    }
    const loadingStyle = {
      position: 'absolute', 
      left: '50%', 
      top:'50%', 
      transform: 'translate(-50%, -50%)', 
      fontSize: '2rem'
    }

    if(loading){
      return(
        <div style={loadingStyle}>
          <h1>Loading . . .</h1>
        </div>
      )
    }else{
      console.log(movies[0])
      return (
        <div>
          <div style={bannerStyle}>
            {setInterval(()=>{
              const index = Math.floor(Math.random()*30)
              if(index === this.index)
              return(
                  <Banner
                  key={movies[0].id} 
                  title={movies[0].title} 
                  genres={movies[0].genres}
                  cover={movies[0].large_cover_image}
                  reting={movies[0].rating}
                  runtime={movies[0].runtime}
                  summary={movies[0].summary}
                />
              )
            }
            , 3000)}

          </div>
          <div style={style}>
            {movies.map(movie=>{
              return(
                <Movie 
                  key={movie.id} 
                  title={movie.title} 
                  genres={movie.genres}
                  cover={movie.medium_cover_image}
                  summary={movie.summary}
                ></Movie>
              )
            })}
          </div>
          </div>
      )
    }
  }
}

export default App;