import React from 'react'
import PropTypes from 'prop-types'
import { Table, Row, Checkbox } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function itemsTable(props) {

  function setPurchased(item, e) {
    item.purchased = e.target.checked
    props.onEditItem(item)
  }

  function displayItemRow(item){
    return (
      <tr key={item.id}>
        <td><Checkbox checked={item.purchased} onChange={(e) => setPurchased(item, e)}></Checkbox></td>
        <td>{ item.name }</td>
        <td>{ item.brandName }</td>
        <td>{ item.quantity }</td>
        <td>{ item.notes }</td>
        <td>{ item.category ? item.category.name : ''  }</td>
        <td><Link to={`items/${item.id}`}><i className="fa fa-pencil" aria-hidden = "true"></i></Link></td>
        <td><i className="fa fa-trash"></i></td>
      </tr>
    )
  }

  return (
    <div>
      <header>
        <Row className = "table-header">
          <h3>Stuff to Buy</h3>
          <Link className="btn btn-primary" to="/items/new">New Item</Link>
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
