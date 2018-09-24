import * as actionTypes from './actionTypes'
import {fetchItems, updateItem, fetchAllItems, fetchCategories, fetchStores } from '../../utils/api'

export const getItems = () => {
  return dispatch => {
    fetchItems().then(response => {
      dispatch(setItems(response.data.items))
    })
    .catch(error => {
      dispatch(getItemsFailed(error))
    })
  }
}

const setItems = (items) => {
  return {
    type: actionTypes.GET_ITEMS,
    items: items
  }
}

export const getAllItems = () => {
  return dispatch => {
    fetchAllItems().then(response => {
      dispatch(setAllItems(response.data.items))
    })
    .catch(error => {
      dispatch(getItemsFailed(error))
    })
  }
}

const setAllItems = (items) => {
  return {
    type: actionTypes.GET_ALL_ITEMS,
    allItems: items
  }
}

export const getItemsFailed = () => {
  return {
    type: actionTypes.GET_ITEMS_FAILED,
  }
}

export const editItem = (item) => {
  return (dispatch) => {
    updateItem(item).then(response => {
      dispatch(resetItem(response))
      // there must be a better way to do this
      dispatch(getItems())
      dispatch(getAllItems())
    })
    .catch(error => {
      dispatch(editItemFailed(error))
    })
    }
  }

const resetItem = (response) => {
  return {
    type: actionTypes.EDIT_ITEM,
    message: response
  }
}

export const editItemFailed = (errorMessage) => {
  return {
    type: actionTypes.EDIT_ITEM_FAILED,
    message: errorMessage.response.data
  }
}

export const getCategories = () => {
  return dispatch => {
    fetchCategories().then(response => {
      dispatch(setCategories(response.data.categories))
    })
  }
}

export const setCategories = (categories) => {
  return {
    type: actionTypes.GET_CATEGORIES,
    categories: categories
  }
}

export const getStores = () => {
  return dispatch => {
    fetchStores().then(response => {
      dispatch(setStores(response.data.stores))
    })
  }
}

export const setStores = (stores) => {
  return {
    type: actionTypes.GET_STORES,
    stores: stores
  }
}