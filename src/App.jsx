import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import React, { useState, useEffect } from 'react'

import Logo from "./components/Logo/Logo";
import logoImg from "./assets/images/logo.png";
import Searchbar from "./components/Searchbar/Searchbar";
import Pagination from "./components/Pagination/Pagination";

import Filters from "./components/Filters/Filters";
import Cards from './components/Cards/Cards';
import s from "./style.module.css";


function App() {
  //fetch data from api 
  let [pageNumber, setPageNumber] = useState(1);

  console.log(pageNumber)
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData // destructure use them separately  

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    //  IIFE (Immediately Invoked Function Expression) en capsular un bloque de código dentro de un ámbito local.
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data)
    })();
  }, [api])

  return (
    <body>
      <div className={s.main_container}>

        <nav className={s.nav}>
          <Logo image={logoImg} />
          <div className="text-center">test bootstrap <span className="text-primary">wiki</span></div>
          <Searchbar />
        </nav>

        <section className={s.sec1}>
          <section className={s.sec1_top} ><h1 className="ubuntu fw-bold pt-1">Rick and Morty </h1>
            <h1 className="ubuntu fw-bolder pb-4">Characters</h1>
          </section>

          <section>
            <Filters />
          </section>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="row justify-content-center">
                  <Cards results={results} />
                  {/* <div className="col-3 text-center">carsd</div>
                  <div className="col-3 text-center">carsd</div>
                  <div className="col-3 text-center">carsd</div>
                  <div className="col-3 text-center">carsd</div> */}

                </div>
              </div>
            </div>
          </div>

          <Pagination setPageNumber={setPageNumber} />

        </section>





      </div>







    </body >
  );
}

export default App;
