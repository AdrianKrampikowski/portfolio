import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

const express = require("express")
const router = express.Router()
const { getAllProducts, getSelectedProduct, getSelectedSortProducts, getSortSelectedProducts, getPagination } = require("../controller/productController")

router.route("/").get(getAllProducts)
router.route("/select").get(getSelectedProduct)
router.route("/selectsort").get(getSelectedSortProducts)
router.route("/sortselect").get(getSortSelectedProducts)
router.route("/pagination").get(getPagination)

module.exports = router