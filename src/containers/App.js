import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
// import _ from 'lodash'
import "../styles/app.css"
import Nav from '../components/nav'
import { connect } from 'react-redux'
import * as actionCreators from '../store/actions/actions'
// import logo from './logo.svg'
import '../styles/app.css'
import ItemsTable from "../components/itemsTable"
import ItemPage from "../components/itemPage"

class App extends Component {

  componentDidMount() {
    this.props.listCurrentItems()
    this.props.listAllItems()
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
                   getItem = { this.props.getItem }
                   /> }
            />
            <Route path = "/items/:id"
                   name = "ItemPage"
                   render = { () => <ItemPage
                  item = { this.props.item }
                  onEditItem = { this.props.editItemHandler }
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
    item: state.item,
    items: state.items,
    allItems: state.allItems,
    itemsError: state.itemsError,
    errorMessage: state.errorMessage,
    editFailed: state.editFailed
  }
}

const mapDispatchToProps = dispatch => {
  return {
    listCurrentItems: () => dispatch(actionCreators.getItems()),
    listAllItems: () => dispatch(actionCreators.getAllItems()),
    editItemHandler: (item) => dispatch(actionCreators.editItem(item)) ,
    getItem: (item) => dispatch(actionCreators.getItem(item))  
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
