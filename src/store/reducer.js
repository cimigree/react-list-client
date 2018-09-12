import * as actionTypes from "./actions/actions"

const initialState = {
  allItems: [],
  items: [],
  item: {},
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
    case actionTypes.GET_ITEM:
      return {
        ...state,
        item: action.item,
        itemError: false
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
    default:
      return state
  }
}

export default reducer