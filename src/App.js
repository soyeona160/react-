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
      suggestions: []
    }
  }
 // 목록 30개 제한, 평점 7.0 이상, 영화 제목 오름차순 정렬
  componentDidMount(){
    fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=7.0&&sort_by=title&limit=30&&order_by=asc')
    .then( res => res.json())
    .then( async (result) => {
      const { data : {movies} } = result
      await this.getMovieSuggesion(movies[0].id, 0)
      
      this.setState({loading: false, movies})
      setInterval(()=>{
        const index = this.getRandomIndex(movies.length)
        this.getMovieSuggesion(this.state.movies.length === 0? movies[0].id: this.state.movies[index].id,index)
      },3000)
    })
  }

  getMovieSuggesion = async (id, index)=>{
    const suggestions = await fetch(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`)
    const movieSuggestions= await suggestions.json()
    const {data: {movies}} = movieSuggestions
    this.setState({suggestions : movies, index})
  }


  getRandomIndex = (length)=>{
    let i = Math.floor(Math.random()*length)
    while(i === this.index){
      i = Math.floor(Math.random()*length)
    }
    return i
  }

  render(){  
    const {loading, movies, index} = this.state
    const style = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent : 'center',
      alignItems: 'center',
      width: '60%',
      textAlign: 'center',
      margin: '0 auto'
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
      return (
        <div>
          <div style={bannerStyle}>
                  <Banner
                  key={movies[index]?.id} 
                  title={movies[index]?.title} 
                  genres={movies[index]?.genres}
                  cover={movies[index]?.large_cover_image}
                  rating={movies[index]?.rating}
                  runtime={movies[index]?.runtime}
                  summary={movies[index]?.summary}
                  suggestions = {this.state.suggestions}
                />
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