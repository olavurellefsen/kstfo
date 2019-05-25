import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0 0 0 40px;
  overflow: hidden;
  background-color: #333;
`

const Item = styled.li`
  float: left;
  margin: 0px;
  a {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  a:hover {
    background-color: white;
    color: black;
  }
`
const DropDownContent = styled.div`
  display: none;
  ${Item}:hover & {
    display: block;
  }
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }
  a:hover {
    background-color: #e1e1e1;
  }
`

export default () => (
  <Menu>
    <Item>
      <Link to="/">Heima</Link>
    </Item>
    <Item>
      <Link to="/fo/vidgerdir">
        Viðgerðir
      </Link>
      <DropDownContent>
        <Link to="/fo/samrodur">Sálarfrøðiligar samrøður</Link>
        <Link to="/fo/hypnoterapi">Viðgerð hypnoterapi</Link>
        <Link to="/fo/tft">Viðgerð TFT</Link>
        <Link to="/fo/kst">Viðgerð KST</Link>
        <Link to="/fo/rolfsmetoda">Viðgerð Rolfs Metoda</Link>
        <Link to="/fo/alt">Viðgerð ALT</Link>
      </DropDownContent>
    </Item>
    <Item>
    <Link to="/fo/skeid">Skeið</Link>
    </Item>
    <Item>
      <Link to="/fo/ummeg">Um meg</Link>
    </Item>
    <Item>
      <Link to="/">Føroyskt</Link>
    </Item>
    <Item>
      <Link to="/dkindex">Dansk</Link>
    </Item>
  </Menu>
)
