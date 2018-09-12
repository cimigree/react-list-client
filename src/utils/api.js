import axios from 'axios'

function fetchItems() {
  return axios.get('http://localhost:3001/items')
}

function fetchAllItems() {
  return axios.get('http://localhost:3001/items/items_all')
}

function getItem(itemId) {
  return axios.get(`http://localhost:3001/items/${itemId}`)
}



function updateItem(itemToEdit) {
  return axios.put(`http://localhost:3001/items/${itemToEdit.id}`, 
  {
    item: {
      name: itemToEdit.name,
      brandName: itemToEdit.brandName,
      category: itemToEdit.categoryId,
      coupon: itemToEdit.coupon,
      frequency: itemToEdit.frequency,
      note: itemToEdit.note,
      purchased: itemToEdit.purchased,
      quantity: itemToEdit.quantity,
      storeIds: itemToEdit.storeIds
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
      storeIds: itemToCreate.storeIds
    }
  })
}

function deleteItem(itemId) {
  return axios.delete(`http://localhost:3001/items/${itemId}`)
}

function getStores() {
  return axios.get('http://localhost:3001/stores')
}

function getStoreAllItems(storeId) {
  return axios.get(`http://localhost:3001/stores/${storeId}/all_items`)
}

function getStore(storeId) {
  return axios.get(`http://localhost:3001/stores/${storeId}`)
}

function editStore(storeToEdit) {
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

function deleteStore(storeId) {
  return axios.delete(`http://localhost:3001/stores/${storeId}`)
}

function getCategories() {
  return axios.get('http://localhost:3001/categories')
}

function editCategory(categoryToEdit) {
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

function deleteCategory(categoryId) {
  return axios.delete(`http://localhost:3001/categories/${categoryId}`)
}

export { fetchItems, fetchAllItems, getItem, updateItem, createItem, deleteItem, getStores, getStoreAllItems, getStore, editStore, createStore, deleteStore, getCategories, editCategory, createCategory, deleteCategory }
