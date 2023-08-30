import './App.css';
import React from "react";
import {tvsInStock} from "./helper_functions/total_tvs_instock.js";
import {totalPurchased} from "./helper_functions/total_tvs_purchased.js";
import {totalSoldUnits} from "./helper_functions/total_tvs_sold.js";

function App() {

  return (
      <>
          <h1>Tech It Easy Dashboard</h1>
          <h2>Verkoop Overzicht</h2>
              <p className="tvs">Tvs in stock {tvsInStock}</p>
              <p className="tvs">Tvs in purchased {totalPurchased}</p>
              <p className="tvs">Tvs in sold {totalSoldUnits}</p>

      </>
  )
}

export default App
