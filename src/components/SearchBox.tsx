import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "../styles/components/searchBox.scss";
import ProductItem from "./ProductItem";
import useThrottle from "../hooks/useThrottle";
import { IProduct } from "../interfaces/IProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface Props {
  handleSearch: Function;
  getSuggestionRequest: Function;
}

const SearchBox = (props: Props) => {
  const { handleSearch, getSuggestionRequest } = props;
  const [show, setShow] = useState<boolean>(false);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<IProduct[]>([]);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const search = e.target.value;
    setSearch(search);
    if (search.length > 3) {
      getSuggestion(search);
    } else {
      setShow(false);
    }
  };

  const handleHideSuggestion = () => {
    setShow(false);
  };

  const handleSearchValue = (keyword: string) => {
    setSearch(keyword);
  };

  const getSuggestion = useThrottle((keyword: string) => {
    if (keyword === "") {
      setSuggestions([]);
      return;
    } else {
      getSuggestionRequest(keyword)
        .then((res: any) => {
          if (res.data.length > 0) {
            setShow(true);
            setSuggestions(res.data);
          } else {
            setShow(false);
          }
        })
        .catch((err: any) => console.log(err));
    }
  }, 500);
  return (
    <Form className="search-box w-100">
      <div className="input-group">
        <input
          className="search"
          type="search"
          placeholder="Search Products"
          aria-label="Search"
          onChange={handleChangeSearch}
          value={search}
        />
        <span className="icon-search" onClick={() => handleSearch(search)}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        {suggestions?.length > 0 ? (
          <div
            className="suggestion-list"
            style={{ visibility: show ? "visible" : "hidden" }}
          >
            {suggestions.map((suggestion, index) => (
              <ProductItem
                key={index}
                product={suggestion}
                hideSuggestion={handleHideSuggestion}
                setSearchValue={handleSearchValue}
              />
            ))}
          </div>
        ) : null}
      </div>
    </Form>
  );
};

export default SearchBox;
