import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button, Row, FormControl } from 'react-bootstrap'

function categoryPage(props) {
  let categoryToSave = ""
  let categoryInput = React.createRef();

  // can't edit the name of the category. not sure why. maybe need to move state out of redux
  
  function displayCategoryRow(category){
    if (category.editable === true) {
      return (
      <tr key={category.id}><td><FormControl type="text" value = {category.name} onChange={(e)=> handleCategoryChange(e, category)} /></td>
      <td><Button bsStyle="primary" onClick={() => updateCategory(categoryToSave, category)}>Update Category</Button></td>
      <td><Button bsStyle="danger" onClick={() => props.cancelCategoryChange(category)}>Cancel Update</Button></td>
      </tr>)
    }
    else {
      return (
        <tr key={category.id}>
          <td>{ category.name }</td>
          <td><i className="fa fa-pencil" onClick= {() => props.setSelectedCategory(category.id)} aria-hidden = "true"></i></td>
          <td><i className="fa fa-trash" onClick={() => props.onDeleteCategory(category.id)}></i></td>
        </tr>
      )
    }
  }

  function handleCategoryChange(e, category) {
    category.name = e.target.value
    props.handleCategoryChange(category)
  }

  function addNewCategory(name) {
    categoryToSave = name
  }

  function saveCategory(categoryToSave) {
    props.onAddCategory(categoryToSave)
    categoryInput.current.value = ""
    categoryToSave=""
  }

  function updateCategory(categoryName, category ) {
    const categoryToUpdate = {
      name: categoryName,
      id: category.id}
    props.onEditCategory(categoryToUpdate)
    category.editable = false
  }

  return (
    <div>
      <header>
        <Row className = "table-header">
          <h3>Categories</h3>
        </Row>
      </header>
      <Table responsive condensed>
      <thead>
        <tr>
          <th>Name</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        { props.categories.map(category => displayCategoryRow(category))}
        <tr>
          <td><input type="text" ref={categoryInput} onChange={(e)=>addNewCategory(e.target.value)} /></td>
          <td><Button bsStyle="primary" onClick={() => saveCategory(categoryToSave)}>Save New Category</Button></td></tr>
      </tbody>
      </Table>
    </div>
  )
}

categoryPage.propTypes = {
  categories: PropTypes.array
}
export default categoryPage