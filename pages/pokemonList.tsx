import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setList, selectList } from "./redux";

const PokemonList = () => {
  const list = useSelector(selectList);
  const dispatch = useDispatch();
  const [filteredList, setFilteredList] = useState(null);
  function fetchPokemon(link: string) {
    fetch(link)
      .then((response) => response.json())
      .then((allpokemon) => {
        dispatch(setList(allpokemon));
      });
  }

  useEffect(() => {
    fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=2000");
  }, []);

  useEffect(() => {
    console.log(list);
  }, [list]);

  return <div>Pokemon uwu</div>;
};

export default PokemonList;
