const MovieItem = ({ src, alt, handleClick }) => {
  return (
    <div className="movieitem" onClick={handleClick}>
      <img className="movieimage" src={src} alt={alt} />
    </div>
  );
};

export default MovieItem;
