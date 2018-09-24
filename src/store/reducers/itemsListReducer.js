import * as actionTypes from "../actions/actionTypes"

const initialState = {
  allItems: [],
  items: [],
  categories: [],
  stores: [],
  itemsError: false,
  itemError: false,
  successMessage: false,
  editFailed: false,
  errorMessage: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ITEMS:
      return {
        ...state,
        items: action.items,
        itemsError: false
      }
    case actionTypes.GET_ALL_ITEMS:
      return {
        ...state,
        allItems: action.allItems,
        itemsError: false
      }
    case actionTypes.EDIT_ITEM:
      return {
        ...state,
        successMessage: true,
        editFailed: false
      }
    case actionTypes.EDIT_ITEM_FAILED:
      return {
        ...state,
        errorMessage: action.message.error[0],
        statusFailed: true
      }
    case actionTypes.GET_ITEMS_FAILED:
      return {
        ...state,
        itemsError: true
      }
    case actionTypes.GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      }
    case actionTypes.GET_STORES:
      return {
        ...state,
        stores: action.stores
      }
    default:
      return state
  }
}

export default reducer