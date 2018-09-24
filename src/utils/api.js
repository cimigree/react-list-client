import axios from 'axios'

function fetchItems() {
  return axios.get('http://localhost:3001/items')
}

function fetchAllItems() {
  return axios.get('http://localhost:3001/items/items_all')
}

function fetchItem(itemId) {
  return axios.get(`http://localhost:3001/items/${itemId}`)
}



function updateItem(itemToEdit) {
  return axios.put(`http://localhost:3001/items/${itemToEdit.id}`, 
  {
    item: {
      name: itemToEdit.name,
      brandName: itemToEdit.brandName,
      category: itemToEdit.category.id,
      coupon: itemToEdit.coupon,
      frequency: itemToEdit.frequency,
      note: itemToEdit.note,
      purchased: itemToEdit.purchased,
      quantity: itemToEdit.quantity,
      storeIds: itemToEdit.stores.map(s => {return s.id} )
    }
  })
}

function createItem(itemToCreate) {
  return axios.post('http://localhost:3001/items/', {
    item: {
      name: itemToCreate.name,
      brandName: itemToCreate.brandName,
      categoryId: itemToCreate.category.id,
      coupon: itemToCreate.coupon,
      frequency: itemToCreate.frequency,
      note: itemToCreate.note,
      purchased: itemToCreate.purchased,
      quantity: itemToCreate.quantity,
      storeIds: itemToCreate.stores.map(s => {return s.id} )
    }
  })
}

function deleteItem(itemId) {
  return axios.delete(`http://localhost:3001/items/${itemId}`)
}

function fetchStores() {
  return axios.get('http://localhost:3001/stores')
}

function getStoreAllItems(storeId) {
  return axios.get(`http://localhost:3001/stores/${storeId}/all_items`)
}

function getStore(storeId) {
  return axios.get(`http://localhost:3001/stores/${storeId}`)
}

function updateStore(storeToEdit) {
  return axios.put(`http://localhost:3001/stores/${storeToEdit.id}`, {
          store: {
            name: storeToEdit.name
          }
        })
}

function createStore(storeToCreate) {
  return axios.post('http://localhost:3001/stores/', {
          store: {
            name: storeToCreate
          }
        })
}

function removeStore(storeId) {
  return axios.delete(`http://localhost:3001/stores/${storeId}`)
}

function fetchCategories() {
  return axios.get('http://localhost:3001/categories')
}

function updateCategory(categoryToEdit) {
  return axios.put(`http://localhost:3001/categories/${categoryToEdit.id}`, {
          category: {
            name: categoryToEdit.name
          }
        })
}

function createCategory(categoryToCreate) {
  return axios.post('http://localhost:3001/categories/', {
          category: {
            name: categoryToCreate
          }
        })
}

function removeCategory(categoryId) {
  return axios.delete(`http://localhost:3001/categories/${categoryId}`)
}

export { fetchItems, fetchAllItems, fetchItem, updateItem, createItem, deleteItem, fetchStores, getStoreAllItems, getStore, updateStore, createStore, removeStore, fetchCategories, updateCategory, createCategory, removeCategory }
