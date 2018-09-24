import * as actionTypes from './actionTypes'
import { createCategory, updateCategory, removeCategory } from '../../utils/api'
import { getCategories } from '../actions/itemsList'

export const editCategory = (category) => {
  return (dispatch) => {
    updateCategory(category).then(response => {
      dispatch(resetCategory(response))
      dispatch(getCategories())
    })
  }
}

const resetCategory = (response) => {
  return {
    type: actionTypes.EDIT_CATEGORY,
    message: response
  }
}

export const addCategory = (category) => {
  return (dispatch) => {
    createCategory(category).then(response => {
      dispatch(setCategory(response))
      dispatch(getCategories())
    })
  }
}

const setCategory = (response) => {
  return {
    type: actionTypes.ADD_CATEGORY,
    message: response
  }
}

export const deleteCategory = (category) => {
  return (dispatch) => {
    removeCategory(category).then(response => {
      dispatch(setLessCategory(response))
      dispatch(getCategories())
    })
  }
}

const setLessCategory = (response) => {
  return {
    type: actionTypes.DELETE_CATEGORY,
    message: response
  }
}

export const getSelectedCategory = categoryId => {
  return {
    type: actionTypes.GET_SELECTED_CATEGORY,
    selectedCategoryId: categoryId
  }
}

export const categoryChange = category => {
  return {
    type: actionTypes.CATEGORY_CHANGE,
    category: category
  }
}

export const cancelCategoryChange = category => {
  return {
    type: actionTypes.CANCEL_CATEGORY_CHANGE,
    category: category
  }
}