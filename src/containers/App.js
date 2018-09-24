import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
// import _ from 'lodash'
import "../styles/app.css"
import Nav from '../components/nav'
import { connect } from 'react-redux'
import * as actionCreators from '../store/actions/index'
// import logo from './logo.svg'
import '../styles/app.css'
import ItemsTable from "../components/itemsTable"
import ItemPage from "../components/itemPage"
import CategoryPage from "../components/categoryPage"
import StorePage from "../components/storePage"

class App extends Component {

  componentDidMount() {
    this.props.listCurrentItems()
    this.props.listAllItems()
    this.props.listCategories()
    this.props.listStores()
  }

  render() {
    return (
      <div>
        <Nav />
        <div>
          <Switch>
            <Route path = "/items"
                   exact
                   name = "ItemsTable"
                   render = { () => <ItemsTable 
                   items = { this.props.items }
                   onEditItem = { this.props.editItemHandler }

                   /> }
            />
            <Route path = "/allitems"
                   name = "ItemsTable"
                   render = { () => <ItemsTable 
                   items = { this.props.allItems }
                   onEditItem = { this.props.editItemHandler }
                   /> }
            />
            <Route path = "/items/:id"
                   name = "ItemPage"
                   render = { ({match}) => <ItemPage
                   categories = { this.props.categories }
                   stores = {this.props.stores }
                   match = { match }
                   history = { this.props.history }
                   onEditItem = { this.props.editItemHandler }
                   /> }
            />
            <Route path = "/categories"
                   name = "CategoryPage"
                   render = { ({}) => <CategoryPage
                   categories = { this.props.categories }
                   onEditCategory = { this.props.editCategory }
                   onAddCategory = { this.props.addCategory }
                   onDeleteCategory = { this.props.deleteCategory }
                   selectedCategory = { this.props.selectedCategory }
                   setSelectedCategory = { this.props.setSelectedCategory }
                   handleCategoryChange = { this.props.onCategoryChange }
                   cancelCategoryChange = { this.props.cancelCategoryChange }
                   /> }
              />
              <Route path = "/stores"
                   name = "StorePage"
                   render = { ({}) => <StorePage
                   stores = { this.props.stores }
                   onEditStore = { this.props.editStore }
                   onAddStore = { this.props.addStore }
                   onDeleteStore = { this.props.deleteStore }
                   /> }
              />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.list.items,
    selectedCategory: state.category.selectedCategory,
    categories: state.list.categories,
    stores: state.list.stores,
    allItems: state.list.allItems,
    itemsError: state.list.itemsError,
    errorMessage: state.list.errorMessage,
    editFailed: state.list.editFailed
  }
}

const mapDispatchToProps = dispatch => {
  return {
    listCurrentItems: () => dispatch(actionCreators.getItems()),
    listAllItems: () => dispatch(actionCreators.getAllItems()),
    listCategories: () => dispatch(actionCreators.getCategories()),
    listStores: () => dispatch(actionCreators.getStores()),
    editItemHandler: (item) => dispatch(actionCreators.editItem(item)) ,
    getItem: (item) => dispatch(actionCreators.getItem(item)),
    addStore: (store) => dispatch(actionCreators.addStore(store)), 
    editStore: (store) => dispatch(actionCreators.editStore(store)),
    deleteStore: (store) => dispatch(actionCreators.deleteStore(store)), 
    addCategory: (category) => dispatch(actionCreators.addCategory(category)), 
    editCategory: (category) => dispatch(actionCreators.editCategory(category)),
    deleteCategory: (category) => dispatch(actionCreators.deleteCategory(category)),
    setSelectedCategory: (id) => dispatch(actionCreators.getSelectedCategory(id)),
    onCategoryChange: (category) => dispatch(actionCreators.categoryChange(category)),
    cancelCategoryChange: (category) => dispatch(actionCreators.cancelCategoryChange(category))
    }
  }

App.propTypes = {
  item: PropTypes.object,
  items: PropTypes.array,
  listCurrentItems: PropTypes.func,
  editItemHandler: PropTypes.func,
  getItem: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
