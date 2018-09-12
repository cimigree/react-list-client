import {fetchItems, updateItem, fetchAllItems} from '../../utils/api'

export const GET_ITEMS = 'GET_ITEMS'
export const GET_ALL_ITEMS = 'GET_ALL_ITEMS'
export const GET_ITEM = 'GET_ITEM'
export const EDIT_ITEM = 'EDIT_ITEM'
export const GET_ITEMS_FAILED = 'GET_ITEMS_FAILED'
export const GET_ITEM_FAILED = 'GET_ITEM_FAILED'
export const EDIT_ITEM_FAILED = 'EDIT_ITEM_FAILED'

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
    type: GET_ITEMS,
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
    type: GET_ALL_ITEMS,
    allItems: items
  }
}

export const getItemsFailed = () => {
  return {
    type: GET_ITEMS_FAILED,
  }
}

export const getItem = () => {
  return dispatch => {
    fetchItems().then(response => {
      dispatch(setItem(response.data.item))
    })
    .catch(error => {
      dispatch(getItemFailed(error))
    })
  }
}

const setItem = (item) => {
  return {
    type: GET_ITEM,
    item: item
  }
}

const getItemFailed = () => {
  return {
    type: GET_ITEM_FAILED
  }
}

export const editItem = (item) => {
  return dispatch => {
    updateItem(item).then(response => {
      dispatch(resetItem(response))
      dispatch(getItems())
    })
    .catch(error => {
      dispatch(editItemFailed(error))
    })
    }
  }

const resetItem = (response) => {
  return {
    type: EDIT_ITEM,
    message: response
  }
}

export const editItemFailed = (errorMessage) => {
  return {
    type: EDIT_ITEM_FAILED,
    message: errorMessage.response.data
  }
}