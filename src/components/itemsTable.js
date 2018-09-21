import React from 'react'
import PropTypes from 'prop-types'
import { Table, Row, Checkbox } from 'react-bootstrap'

function itemsTable(props) {

  function setPurchased(item) {
    item.purchased = !item.purchased
    console.log(item.purchased)
    props.onEditItem(item)
  }

  function openEditItem(item) {
    console.log(props)
    props.history.push('/item/:item.id')
    props.getItem(item)
    
  }
  function displayItemRow(item){
    return (
      <tr key={item.id}>
        <td><Checkbox value={item.purchased} onChange={() => setPurchased(item) }></Checkbox></td>
        <td>{ item.name }</td>
        <td>{ item.brandName }</td>
        <td>{ item.quantity }</td>
        <td>{ item.notes }</td>
        <td>{ item.category ? item.category.name : ''  }</td>
        <td><i className="fa fa-pencil" aria-hidden = "true" onClick={() => openEditItem(item)} ></i></td>
        <td><i className="fa fa-trash"></i></td>
      </tr>
    )
  }

  return (
    <div>
      <header>
        <Row className = "table-header">
          <h3>Stuff to Buy</h3>
        </Row>
      </header>
      <Table responsive condensed>
      <thead>
        <tr>
          <th>Purchased</th>
          <th>Item</th>
          <th>Brand</th>    
          <th>Quantity</th>  
          <th>Notes</th>
          <th>Category</th>
          <th>Edit Item</th>
          <th>Delete Item</th>
        </tr>
      </thead>
      <tbody>
        { props.items.map((item) => displayItemRow(item)) } 
      </tbody>
    </Table>
    </div>
  )
}

itemsTable.propTypes = {
  items: PropTypes.array
}

export default itemsTable
