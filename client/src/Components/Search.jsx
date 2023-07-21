import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";
export const Search = ({ movie, setMovie, searchItem, setSearchItem , submitHandler, deleteHandler}) => {
  return (
    <div className="search">
      <h2>Search for a movie...</h2>
      <SearchInput
        movie={movie}
        setMovie={setMovie}
        searchItem={searchItem}
        setSearchItem={setSearchItem}
      />

      {searchItem &&
        movie.map((item) => {
          return <SearchResults item={item} />;
        })}

<button onClick={submitHandler}>Submit</button>
<button onClick={deleteHandler}>Delete</button>

    </div>
  );
};
