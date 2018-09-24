import * as actionTypes from '../actions/actionTypes'

const initialState = {
  categories: [],
  selectedCategory: {
    id: 0,
    name:"",
    editable: false
  },
  message: ""
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      }
    case actionTypes.ADD_CATEGORY:
      let successMessage = ""
      if (action.message.status === 200) {
        successMessage = "Item Was Saved"
      }
      return {
        ...state,
        message: successMessage,
      }

      case actionTypes.EDIT_CATEGORY:
      successMessage = ""
      if (action.message.status === 200) {
        successMessage = "Item Was Edited"
      }
      return {
        ...state,
        message: successMessage,
      }

      case actionTypes.DELETE_CATEGORY:
      successMessage = ""
      if (action.message.status === 200) {
        successMessage = "Item Was Deleted"
      }
      return {
        ...state,
        message: successMessage,
      }

      case actionTypes.GET_SELECTED_CATEGORY: 
        const selectedCategory = state.categories.filter(c => c.id == action.selectedCategoryId)
        const categoryIndex = state.categories.findIndex(c => c.id == action.selectedCategoryId)
        selectedCategory[0].editable = true
        let newArray = [...state.categories]
        newArray[categoryIndex].editable = true
        return {
          ...state,
          categories: newArray,
          selectedCategory: selectedCategory[0]
        }
      case actionTypes.CATEGORY_CHANGE:
        const editedCategoryIndex = state.categories.findIndex(c => c.id == action.category.id)
        let newArrayForEditing = [...state.categories]
        newArrayForEditing[editedCategoryIndex].name = action.category.name
        return {
          ...state,
          categories: newArrayForEditing
        }

      case actionTypes.CANCEL_CATEGORY_CHANGE:
        const cancelCategoryIndex = state.categories.findIndex(c => c.id == action.category.id)
        let newArrayWithCancelled = [...state.categories]
        newArrayWithCancelled[cancelCategoryIndex].editable = false
      return {
        ...state,
        categories: newArrayWithCancelled,
        selectedCategory: {}
      }
    default: 
      return state
  }
}

export default reducer
