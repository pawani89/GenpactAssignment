import React, { Component } from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { Button, ButtonType } from 'office-ui-fabric-react/lib/Button';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';

import ContentTable from '../Assignment/table';
import styled from 'styled-components';

const Header = ['City', 'Area', 'State', 'Country'];

class Assignment extends Component {
  constructor() {
    super();
    this.state = {
      selectedItemCity: undefined,
      selectedItemState: undefined,
      selectedItemCountry: undefined,
      selectedItems: [],
      data: []
    };
  }

  copyArray = (array: any[]): any[] => {
    const newArray: any[] = [];
    for (let i = 0; i < array.length; i++) {
      newArray[i] = array[i];
    }
    return newArray;
  };

  // generating the data prop required by table to display data
  handleButtonClick = () => {
    const City = this.state.selectedItemCity;
    const Area = this.state.selectedItems.toString();
    const State = this.state.selectedItemState;
    const Country = this.state.selectedItemCountry;
    const data = [{ city: City, area: Area, state: State, country: Country }];
    this.setState({
      data
    });
  };

  // reset the state value for selected city
  handleDropdownChangeCity = (selectedItem) => {
    this.setState((prevState, props) => ({
      ...prevState,
      selectedItemCity: selectedItem.text
    }));
  };

  // reset the state value for selected area
  handleDropdownChangeArea = (item) => {
    const updatedSelectedItem = this.state.selectedItems
      ? this.copyArray(this.state.selectedItems)
      : [];
    if (item.selected) {
      // add the option if it's checked
      updatedSelectedItem.push(item.key);
    } else {
      // remove the option if it's unchecked
      const currIndex = updatedSelectedItem.indexOf(item.key);
      if (currIndex > -1) {
        updatedSelectedItem.splice(currIndex, 1);
      }
    }
    this.setState({
      selectedItems: updatedSelectedItem
    });
  };

  // reset the state value for selected state
  handleDropdownChangeState = (selectedItem) => {
    this.setState((prevState, props) => ({
      ...prevState,
      selectedItemState: selectedItem.text
    }));
  };

  // reset the state value for selected country
  handleDropdownChangeCountry = (selectedItem) => {
    this.setState((prevState, props) => ({
      ...prevState,
      selectedItemCountry: selectedItem.text
    }));
  };

  // to reset the data displayed by table
  handleReset = () => {
    this.setState({
      data: []
    });
  };

  // to reset the dropdown values.
  // ISSUE : the state is changing in this but not able to display same in the dropdown. dropdown still shows the value
  handleResetDropdownClick = () => {
    this.setState(
      {
        selectedItemCity: undefined,
        selectedItemState: undefined,
        selectedItemCountry: undefined,
        selectedItems: []
        //data: [] can also reset the table
      },
      () => {
        alert(
          'the state for dropdown changed,but not for table. could not reset the value in dropdown. check console'
        );
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div>
        <Fabric className="App">
          <DropdownContainer>
            <Dropdown
              placeHolder="Select an Option"
              label="CITY"
              id="CityDropdown"
              selectedKey={
                this.state.selectedItemCity
                  ? this.state.selectedItemCity.key
                  : undefined
              }
              // not able to reset the selected values for all dropdowns
              onChanged={this.handleDropdownChangeCity}
              options={[
                { key: 'A', text: 'Patel Nagar' },
                { key: 'B', text: 'Deoli' },
                { key: 'D', text: 'Delhi Cantonment' },
                { key: 'E', text: 'Nangloi Jat' },
                { key: 'F', text: 'Hastsal' },
                { key: 'G', text: 'Dallo Pura' },
                { key: 'H', text: 'Mandoli' },
                { key: 'I', text: 'Gokal Pur' },
                { key: 'J', text: 'Mustafabad' }
              ]}
            />
            <Dropdown
              placeHolder="Select an Option"
              label="AREA"
              id="AreaDropdown"
              ariaLabel="Basic dropdown example"
              selectedKeys={this.state.selectedItems ? this.selectedItems : []}
              onChanged={this.handleDropdownChangeArea}
              multiSelect
              options={[
                { key: 'A', text: 'Area1' },
                { key: 'B', text: 'Area2' },
                { key: 'D', text: 'Area3' },
                { key: 'E', text: 'Area4' },
                { key: 'F', text: 'Area5' },
                { key: 'G', text: 'Area6' },
                { key: 'H', text: 'Area7' },
                { key: 'I', text: 'Area8' },
                { key: 'J', text: 'Area9' }
              ]}
            />
            <Dropdown
              placeHolder="Select an Option"
              label="STATE"
              id="StateDropdown"
              ariaLabel="Basic dropdown example"
              selectedKey={
                this.state.selectedItemState
                  ? this.state.selectedItemState.key
                  : undefined
              }
              onChanged={this.handleDropdownChangeState}
              options={[
                { key: 'A', text: 'Delhi' },
                { key: 'B', text: 'Karnataka' },
                { key: 'D', text: 'Tamil Nadu' },
                { key: 'E', text: 'Hyderabad' },
                { key: 'F', text: 'Punjab' },
                { key: 'G', text: 'Odisha' },
                { key: 'H', text: 'Maharashtra' }
              ]}
            />
            <Dropdown
              placeHolder="Select an Option"
              label="Country"
              id="CountryDropdown"
              ariaLabel="Basic dropdown example"
              selectedKey={
                this.state.selectedItemCountry
                  ? this.state.selectedItemCountry.key
                  : undefined
              }
              onChanged={this.handleDropdownChangeCountry}
              options={[
                { key: 'A', text: 'India1' },
                { key: 'B', text: 'India2' },
                { key: 'D', text: 'India3' },
                { key: 'E', text: 'India4' },
                { key: 'F', text: 'India5' },
                { key: 'G', text: 'India6' },
                { key: 'H', text: 'India7' },
                { key: 'I', text: 'India8' },
                { key: 'J', text: 'India9' }
              ]}
            />
          </DropdownContainer>
          <ButtonContainer>
            <Button
              primary={true}
              text="Button"
              onClick={this.handleButtonClick}
            />
          </ButtonContainer>
        </Fabric>
        <CenterRuler />
        <ContentTable
          header={Header}
          data={this.state.data}
          handleClick={this.handleButtonClick}
          handleReset={this.handleReset}
          handleResetDropdownClick={this.handleResetDropdownClick}
        />
      </div>
    );
  }
}

export default Assignment;
const DropdownContainer = styled.section`
  display: inline-flex;
  width: 100%;
  justify-content: center;
`;
const ButtonContainer = styled.section`
  margin-top: 20px;
`;
export const CenterRuler = styled.hr``;
