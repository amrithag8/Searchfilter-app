import "./SearchResults.css";
export const SearchResults = ({ item }) => {
  return (
    <>
      
        <div className="search-results">
          <img
            src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
            alt=""
          />
          <p>{item.title}</p>
        </div>
      
    </>
  );
};
