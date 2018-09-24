import * as actionTypes from './actionTypes'
import { createStore, updateStore, removeStore } from '../../utils/api'
import { getStores } from '../actions/itemsList'

export const editStore = (store) => {
  return (dispatch) => {
    updateStore(store).then(response => {
      dispatch(resetStore(response))
      dispatch(getStores())
    })
  }
}

const resetStore = (response) => {
  return {
    type: actionTypes.EDIT_STORE,
    message: response
  }
}

export const addStore = (store) => {
  return (dispatch) => {
    createStore(store).then(response => {
      dispatch(setStore(response))
      dispatch(getStores())
    })
  }
}

const setStore = (response) => {
  return {
    type: actionTypes.ADD_STORE,
    message: response
  }
}

export const deleteStore = (store) => {
  return (dispatch) => {
    removeStore(store).then(response => {
      dispatch(setLessStore(response))
      dispatch(getStores())
    })
  }
}

const setLessStore = (response) => {
  return {
    type: actionTypes.DELETE_STORE,
    message: response
  }
}
