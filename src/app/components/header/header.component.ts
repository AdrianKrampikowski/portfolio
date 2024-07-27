import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor() {}

  showMenuItems: boolean = false;
  @Input() inputNewValue: boolean = false;
  @Output() displayMenuItem = new EventEmitter<any>();
  @Output() imprintToggle = new EventEmitter<any>();

  scrollToSelectedElement(element: any) {
    this.imprintToggle.emit(false);
    setTimeout(() => {
      const headerElement = document.querySelector(element);
      if (headerElement) {
        headerElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 125);
  }

  ngOnChanges(): any {
    this.showMenuItems = this.inputNewValue;
  }

  showMenu() {
    this.showMenuItems = !this.showMenuItems;
    this.displayMenuItem.emit(this.showMenuItems);
  }
}

// const ProductsModel = require("../models/product")

// const getAllProducts = async (req, resp) => {
//     const { price } = req.query
//     const queryObject = {}
//     if (price) {
//         queryObject.price = price
//     }
//     let data = await ProductsModel.find(queryObject)
//     resp.status(200).json(data)
// }

// const getallProductTesting = async (req, resp) => {
//     let { sort } = req.query
//     const queryObject = req.query
//     let apiData
//     if (sort) {
//         let sortFix = sort.replaceAll(",", " ")
//         sort = sortFix
//         delete queryObject.sort
//         apiData = apiData.sort(sort)
//     }
//     apiData = ProductsModel.find(queryObject)
//     let data = await apiData
//     resp.status(200).json(data)
// }

// const getSelectedProducts = async (req, resp) => {
//     let { select } = req.query
//     let queryObject = req.query
//     let apiData
//     if (select) {
//         let changedSelect = select.replaceAll(",", " ")
//         select = changedSelect
//         delete queryObject.select

//     }

//     apiData = ProductsModel.find(queryObject)
//     let data = await apiData.select(select)

//     resp.status(200).json(data)
// }

// const selectSortProducts = async (req, resp) => {
//     let { select, sort } = req.query
//     let queryObject = req.query
//     let apiData
//     if (select) {
//         let changeSelect = select.replaceAll(",", " ")
//         select = changeSelect
//         delete queryObject.select
//     }
//     if (sort) {
//         let changeSort = sort.replaceAll(",", " ")
//         sort = changeSort
//         delete queryObject.sort
//     }
//     apiData = ProductsModel.find(queryObject)
//     let selectedSortedData = apiData.sort(sort).select(select)
//     let data = await selectedSortedData
//     resp.status(200).json(data)
// }

// const getAllProductsWithPagination = async (req, resp) => {
//     let page = Number(req.query.page) || 1
//     let limit = Number(req.query.limit) || 5
//     let skip = (page - 1) * limit
//     let queryObject = req.query
//     if (page) {
//         delete queryObject.page
//     }
//     if (limit) {
//         delete queryObject.limit
//     }
//     let apiData = ProductsModel.find({})
//     apiData = apiData.skip(skip).limit(limit)
//     let data = await apiData

//     // let data = await ProductsModel.find(queryObject)
//     resp.status(200).json({ data: data, pageNumber: page, limit: limit })
// }

// module.exports = { getAllProducts, getallProductTesting, getSelectedProducts, selectSortProducts, getAllProductsWithPagination }

