import * as actionTypes from './actionTypes'
import { fetchItem, createItem } from '../../utils/api'
import { getItems, getAllItems } from './itemsList'

export const getItem = (item) => {
  return dispatch => {
    fetchItem(item).then(response => {
      dispatch(setItem(response.data.item))
    })
    .catch(error => {
      dispatch(getItemFailed(error))
    })
  }
}

const setItem = (item) => {
  return {
    type: actionTypes.GET_ITEM,
    item: item
  }
}

const getItemFailed = () => {
  return {
    type: actionTypes.GET_ITEM_FAILED
  }
}

export const onNameChange = (name) => {
  return {
    type: actionTypes.ON_NAME_CHANGE,
    name: name
  }
}

export const onBrandNameChange = (brandName) => {
  return {
    type: actionTypes.ON_BRAND_NAME_CHANGE,
    brandName: brandName
  }
}

export const onCouponChange = (coupon) => {
  return {
    type: actionTypes.ON_COUPON_CHANGE,
    coupon: coupon
  }
}

export const onQuantityChange = (quantity) => {
  return {
    type: actionTypes.ON_QUANTITY_CHANGE,
    quantity: quantity
  }
}

export const onFrequencyChange = (frequency) => {
  return {
    type: actionTypes.ON_FREQUENCY_CHANGE,
    frequency: frequency
  }
}


export const onCategoryChange = (categoryId) => {
  return (dispatch, getState) => {
    const categories = getState().list.categories
    const newCategory = categories.filter(c => c.id == categoryId)
    dispatch(changeCategory(newCategory))
  }
}

const changeCategory = (newCategory) => {
  return {
    type: actionTypes.ON_CATEGORY_CHANGE,
    newCategory: newCategory[0]
  }
}

export const onStoreChange = (storeId) => {
  return (dispatch, getState) => {
    const stores = getState().list.stores
    dispatch(changeStore(storeId, stores))
    }
}

const changeStore = (storeId, stores) => {
  return {
    type: actionTypes.ON_STORE_CHANGE,
    storeId: storeId,
    stores: stores
  }
}

export const onNoteChange = (note) => {
  return {
    type: actionTypes.ON_NOTE_CHANGE,
    note: note
  }
}

export const saveNewItem = (item) => {
  return dispatch => {
    createItem(item).then(response => {
      dispatch(addItemToItems(response))
      dispatch(getItems())
      dispatch(getAllItems())
    })
  }
}

const addItemToItems = (response) => {
  return {
    type: actionTypes.SAVE_NEW_ITEM,
    message: response
  }
}