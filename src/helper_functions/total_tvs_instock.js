import {totalPurchased} from "./total_tvs_purchased.js";
import {totalSoldUnits} from "./total_tvs_sold.js";

function calculateTvsInStock () {

    return totalPurchased - totalSoldUnits;
}
export let tvsInStock = calculateTvsInStock()


