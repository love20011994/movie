import React from 'react'

function MovieList(props) {
  return (
	<div>
    {props.movies.map((movie)=>{
		return(
			
				<div class="container">
					
  <div class="row">
	  
    <div class="col-3">
	<div className='image-container d-flex justify-content-start m-3' >
					<img src={movie.Poster} alt='movie'width="200px"></img>
			</div>
    </div>
	<br></br><br></br>
    <div class="col-3">
	<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'width="200px"></img>
			</div>
			<br></br><br></br>
    </div>
    <div class="col-3">
	<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie' width="200px"></img>
			</div>
    </div>
	<div class="col-3">
	<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'width="200px"></img>
			</div>
    </div>
	
  </div>
</div>
			
		)
	})}

	</div>
  )
}

export default MovieList

