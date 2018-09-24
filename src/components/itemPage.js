import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/actions/index'
import PropTypes from 'prop-types'
import { Row, Checkbox, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'

class itemPage extends Component {
  constructor(props) {
    super(props);
    this.id= "";
    this.pageAction = ""
    this.buttonAction = ""  
}
  componentDidMount() {
    this.id  = this.props.match.params.id
    if (this.id!=="new") {
      this.props.getItem(Number(this.id))
      this.pageAction = "Edit"
      this.buttonAction = "Update"
    }
    else {
      this.pageAction = "Create"
      this.buttonAction = "Save"  
    }
  }

  onSaveItem(item) {
    if (this.id === "new") {
      this.props.saveItem(item)
    }
    else {
      this.props.onEditItem(item)
    }  
    this.props.history.goBack()
  }

  render () {
    return (
      <div>
        <div>{this.props.message}</div>
        <header>
          <div className="row">
            <Col xs={6}>
              <h1 className="h3">{ this.pageAction } Item</h1>
            </Col>
          </div>
        </header>
        <form>
          <Row>
            <Col xs={12} md={6}>
              <FormGroup className="properties">
                <ControlLabel className="label-padding">Name </ControlLabel>
                <FormControl value = { this.props.item.name } type="text" onChange={this.props.handleNameChange}/>
              </FormGroup>
            </Col>
            <Col xs={12} md={6}>
              <FormGroup className="properties">
                <ControlLabel className="label-padding">Brand Name </ControlLabel>
                <FormControl value = { this.props.item.brandName } type="text" onChange={this.props.handleBrandNameChange}/>
              </FormGroup>
            </Col>
            <Col xs={12} md={6}>
              <FormGroup className="properties">
                <ControlLabel className="label-padding">Quantity </ControlLabel>
                <FormControl value = { this.props.item.quantity } type="text" onChange={this.props.handleQuantityChange} />
              </FormGroup>
            </Col>
            <Col xs={12} md={6}>
              <FormGroup className="properties">
                <ControlLabel>Frequency</ControlLabel>
                  <FormControl componentClass="select" value={this.props.item.frequency} onChange={this.props.handleFrequencyChange}>
                    <option value="weekly">weekly</option>
                    <option value="biweekly">biweekly</option>
                    <option value="monthly">monthly</option>
                    <option value="as needed">as needed</option>
                  </FormControl>
              </FormGroup>
            </Col>
            <Col xs={12} md={6}>
              <FormGroup className="properties">
                <ControlLabel>Category</ControlLabel>
                  <FormControl componentClass="select" value={this.props.item.category ? this.props.item.category.id : ""} onChange={this.props.handleCategoryChange}>
                    { this.props.categories.map((category, index) => { return (<option value={category.id} key={index}>{category.name}</option>)})}
                  </FormControl>
              </FormGroup>
            </Col>
            <Col xs={12} md={6}>
              <FormGroup className="properties">
                <Checkbox checked={this.props.item.coupon} onChange={this.props.handleCouponChange}>Coupon</Checkbox>
              </FormGroup>
            </Col>
            <Col xs={12} md={6}>
              <FormGroup className="properties">
                <ControlLabel>Stores</ControlLabel>
                  <FormControl componentClass="select" multiple value={this.props.item.stores ?this.props.item.stores.map(s => s.id) : ""} onChange={this.props.handleStoresChange} >
                    { this.props.stores.map((store, index) => { return (<option value={store.id} key={index}>{store.name}</option>)})}
                  </FormControl>
              </FormGroup>
            </Col>
            <Col xs={12} md={6}>
              <FormGroup className="properties">
                <ControlLabel className="label-padding">Notes </ControlLabel>
                <FormControl componentClass="textarea" lines="3" value = { this.props.item.note ? this.props.item.note : ""} type="text" onChange={this.props.handleNoteChange} />
              </FormGroup>
            </Col>
          </Row>
          <Button bsStyle="danger" onClick={() => this.props.history.goBack()}>Cancel</Button>
          <Button bsStyle="primary" onClick={() => this.onSaveItem(this.props.item)}>{ this.buttonAction }</Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    item: state.page.item,
    errorMessage: state.page.errorMessage,
    editFailed: state.page.editFailed,
    message: state.page.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getItem: (item) => dispatch(actionCreators.getItem(item)), 
    saveItem: (item) => dispatch(actionCreators.saveNewItem(item)),
    handleNameChange: (e) => dispatch(actionCreators.onNameChange(e.target.value)), 
    handleBrandNameChange: (e) => dispatch(actionCreators.onBrandNameChange(e.target.value)), 
    handleCouponChange: (e) => dispatch(actionCreators.onCouponChange(e.target.checked)), 
    handleQuantityChange: (e) => dispatch(actionCreators.onQuantityChange(e.target.value)), 
    handleFrequencyChange: (e) => dispatch(actionCreators.onFrequencyChange(e.target.value)), 
    handleCategoryChange: (e) => dispatch(actionCreators.onCategoryChange(e.target.value)), 
    handleNoteChange: (e) => dispatch(actionCreators.onNoteChange(e.target.value)),
    handleStoresChange: (e) => dispatch(actionCreators.onStoreChange(e.target.value)) 
    }
  }

itemPage.propTypes = {
  item: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(itemPage);

// category, stores
// need a cancel 

// "category": {
// "id": 6,
// "name": "Dairy",
// "created_at": "2018-08-31T17:43:43.720Z",
// "updated_at": "2018-08-31T17:43:43.720Z"
// },