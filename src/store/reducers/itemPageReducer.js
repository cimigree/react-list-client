import * as actionTypes from '../actions/actionTypes'

const initialState = {
  item: {
    brandName: "",
    category: {
      id: 15,
      name: "Misc"
    },
    coupon: false,
    frequency: "weekly",
    id: 0,
    name: "",
    note: "",
    purchased: false,
    quantity: "",
    stores: []
  },
  message: ""
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    case actionTypes.ON_NAME_CHANGE:
    return {
      ...state,
      item: {
        ...state.item,
        name: action.name
      }
    }
    case actionTypes.ON_BRAND_NAME_CHANGE:
    return {
      ...state,
      item: {
        ...state.item,
        brandName: action.brandName
      }
    }
    case actionTypes.ON_COUPON_CHANGE:
    return {
      ...state,
      item: {
        ...state.item,
        coupon: action.coupon
      }
    }
    case actionTypes.ON_QUANTITY_CHANGE:
    return {
      ...state,
      item: {
        ...state.item,
        quantity: action.quantity
      }
    }
    case actionTypes.ON_FREQUENCY_CHANGE:
    return {
      ...state,
      item: {
        ...state.item,
        frequency: action.frequency
      }
    }
    case actionTypes.ON_CATEGORY_CHANGE:
    return {
      ...state,
      item: {
        ...state.item,
        category: action.newCategory
      } 
    }
    case actionTypes.ON_STORE_CHANGE:
    const itemToRemove = state.item.stores.findIndex(s => s.id == action.storeId)
    let newArray = []
    if (itemToRemove >= 0) {
      newArray = state.item.stores.filter(s => s.id != action.storeId)
    }
    else {
      const itemToAdd = action.stores.filter(s => s.id == action.storeId)
      newArray = state.item.stores.concat(itemToAdd)
    }
    return {
      ...state,
      item: {
        ...state.item,
        stores: newArray
      }
    }
    case actionTypes.ON_NOTE_CHANGE:
    return {
      ...state,
      item: {
        ...state.item,
        note: action.note
      }
    }
    case actionTypes.SAVE_NEW_ITEM:
      let successMessage = ""
      if (action.message.status === 200) {
        successMessage = "Item Was Saved"
      }
    return {
      ...state,
      item: initialState.item, 
      message: successMessage,
    }
    default: 
      return state
  }
}
export default reducer

