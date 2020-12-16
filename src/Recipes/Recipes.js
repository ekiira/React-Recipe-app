import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Form, FormControl } from "react-bootstrap";

import style from "./recipes.module.css";

import Header from "../Header/Header";

import { getRecipes, selectedRecipe } from "../redux/action";
import Loader from "../Loader/Loader";

const Recipes = () => {
  const dispatch = useDispatch();
  const recipess = useSelector(({ allRecipes }) => allRecipes);
  const loading = useSelector(({ loading }) => loading);

  const [search, setSearch] = useState("");

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    dispatch(getRecipes(search));
    setSearch("");
  };

  const textClear = () => {
    setSearch("");
  };

  const onLinkClick = (index) => {
    dispatch(selectedRecipe(index));
  };

  return (
    <div className="App">
      <Header />
{!loading ? (
<div>
  <div className="d-flex justify-content-center">
  <Form
    inline
    className={` mt-5 ${style.form_inline}`}
    onSubmit={getSearch}
  >
    <FormControl
      type="text"
      placeholder=""
      className={`px-5 ${style.search_bar}`}
      value={search}
      onChange={updateSearch}
    />
    <i
      className={`fa fa-search ${style.fa_search}`}
      aria-hidden="true"
    ></i>
    {search ? (
      <i
        className={`fa fa-times-circle ${style.fa_times}`}
        aria-hidden="true"
        onClick={textClear}
      ></i>
    ) : null}
  </Form>
</div>

<div className="py-5">
  <div className="container">
    {recipess ? (
      <div className="row">
      {recipess.map(({ recipe }, i) => (
        <div className="col-6 col-md-4 col-lg-3 pb-4" key={i}>
          <Link to="/recipe" onClick={() => onLinkClick(recipe)}>
            <img
              src={recipe.image}
              className="img-fluid"
              alt={recipe.label}
            />
          </Link>
        </div>
      ))}
    </div>
    ): (
     <p className={style.info}>Search through varities of food recipes</p>
    )}
  </div>
</div>
</div>

) : (
  <Loader />
)}
      </div>
  );
};

export default Recipes;
