const Quote = ({Quote}) => {
    return (
      <div>
        <h1>{Quote.quote}</h1>
        <img src={Quote.image} alt={Quote.character} />
        <p>{Quote.character}</p>
      </div>
    )
  }
  console.log(Quote)
  
  export default Quote