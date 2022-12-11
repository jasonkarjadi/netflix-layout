const Display = ({ movies }) => {
  return (
    <div className="moviesdisplay">
      {movies.map(({ title, url }) => (
        <img src={url} alt={title} width="200px" height="300px" />
      ))}
    </div>
  );
};

export default Display;
