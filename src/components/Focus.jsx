const Focus = () => {
  return (
    <div className="moviefocus">
      <img
        src="/my-id-gangnam-beauty-logo.webp"
        alt="movie-logo"
        height="150px"
      />
      <p className="moviesynopsis">
        Di-bully karena tampang, Mi-rae melakukan operasi plastik demi hidup
        yang lebih baik, tapi malah menghadapi tantangan baru di kampus.
        Berdasarkan webtoon Korea populer.
      </p>
      <div>
        <button className="btnmovie btnplay">Putar</button>
        <button className="btnmovie btninfo">Selengkapnya</button>
      </div>
    </div>
  );
};

export default Focus;
