import "./SearchInput.css";
export const SearchInput = ({ movie, setMovie, searchItem, setSearchItem }) => {
  const onChangeHandler = (event) => {
    setSearchItem(event.target.value);
  };

  const closeHandler = () => {
    setSearchItem("");
    setMovie([]);
  };
  return (
    <div className="search-input">
      <img
        src="https://www.nicepng.com/png/detail/853-8539483_png-file-search-button-icon-png.png"
        alt=""
      />
      <input
        type=""
        className="text-input"
        placeholder="Search Here..."
        value={searchItem}
        onChange={onChangeHandler}
      />
      <div className="closeBtn" onClick={closeHandler}>
        X
      </div>
    </div>
  );
};
