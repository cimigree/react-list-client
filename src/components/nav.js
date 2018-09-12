import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function nav(props) {
  return (
    <Navbar collapseOnSelect defaultExpanded>
      <Navbar.Header>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
      <Nav>
        <LinkContainer to = "/" exact>
          <NavItem eventKey = { 1 }>Home</NavItem>
        </LinkContainer>
        <LinkContainer to = "/items">
          <NavItem eventKey = { 2 }>Items</NavItem>
        </LinkContainer>
        <LinkContainer to = "/allitems">
          <NavItem eventKey = { 3 }>All Items</NavItem>
        </LinkContainer>
        <LinkContainer to = "/stores">
          <NavItem eventKey = { 4 }>Add/ Edit Stores</NavItem>
        </LinkContainer>
        <LinkContainer to = "/categories">
          <NavItem eventKey = { 5 }>Add/ Edit Categories</NavItem>
        </LinkContainer>
      </Nav>
      </Navbar.Collapse>
    </Navbar>  
  )
}

export default nav