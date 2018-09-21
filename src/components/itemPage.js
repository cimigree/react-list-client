import React from 'react'
import PropTypes from 'prop-types'
import { Row, Checkbox, Col, FormGroup, ControlLabel } from 'react-bootstrap'

function itemPage(props) {
  return (
    <div>
      <header>
        <div className="col-sm-6">
          <h1 className="h3">{ props.actionType } Item</h1>
        </div>
		  </header>
      <form>
        <Row>
          <Col>
            <FormGroup className="properties">
              <ControlLabel className="label-padding">Name </ControlLabel>
              <input value = { props.item.name } type="text" />
            </FormGroup>
            <FormGroup className="properties">
              <ControlLabel className="label-padding">Brand Name </ControlLabel>
              <input value = { props.item.name } type="text" />
            </FormGroup>
            <FormGroup className="properties">
              <ControlLabel className="label-padding">Quantity </ControlLabel>
              <input value = { props.item.name } type="text" />
            </FormGroup>
            <FormGroup className="properties">
              <ControlLabel className="label-padding">Brand Name </ControlLabel>
              <input value = { props.item.name } type="text" />
            </FormGroup>
          </Col>
        </Row>
      </form>
    </div>
  )
}

itemPage.propTypes = {
  item: PropTypes.object
}
export default itemPage

// name, brandname, quantity, coupon, note, frequency, category, stores
// need a cancel 

// save/ update button then submit