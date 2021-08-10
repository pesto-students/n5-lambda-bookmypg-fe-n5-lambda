import SearchBar from "material-ui-search-bar";

export default function Searchbar() {
  return (
    <SearchBar
      onChange={() => console.log("onChange")}
      onRequestSearch={() => console.log("onRequestSearch")}
      style={{
        minWidth: 400,
        marginLeft: "60em",
      }}
    />
  );
}
