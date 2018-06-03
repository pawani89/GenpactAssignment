import React, { Component } from 'react';
import { TableSimple } from 'react-pagination-table';
import { Button, ButtonType } from 'office-ui-fabric-react/lib/Button';
import styled from 'styled-components';

class ContentTable extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleSetClick = () => {
    this.props.handleClick();
  };
  handleResetClick = () => {
    this.props.handleReset();
  };
  handleResetDropdownClick = () => {
    this.props.handleResetDropdownClick();
  };
  render() {
    return (
      <Container>
        <TableContainer>
          <TableSimple
            title="Content"
            data={this.props.data}
            headers={this.props.header}
            columns="city.area.state.country"
          />
        </TableContainer>
        <ButtonContainer>
          <Button
            primary={true}
            text="Button"
            onClick={this.handleSetClick}
            text="Set"
          />
          <Button
            primary={true}
            text="Button"
            onClick={this.handleResetClick}
            text="Reset"
          />
          <Button
            primary={true}
            text="Button"
            onClick={this.handleResetDropdownClick}
            text="ResetDropDown"
          />
        </ButtonContainer>
      </Container>
    );
  }
}

export default ContentTable;

const Container = styled.section`
  display: inline-flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;
const TableContainer = styled.section`
  width: 100%;
  justify-content: center;
`;
const ButtonContainer = styled.section`
  width: 100%;
  justify-content: center;
  margin-top: 20px;
`;
