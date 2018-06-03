import React, { Component } from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import axios from 'axios';
import styled from 'styled-components';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import { Label } from 'office-ui-fabric-react/lib/Label';

class AssigmentServiceCall extends Component {
  constructor() {
    super();
    this.state = {
      data: undefined,
      spinning: true
    };
  }
  componentDidMount = async () => {
    const response = await axios.get('https://reqres.in/api/users/2');
    if (response.data !== undefined) {
      this.setState(
        {
          data: [{ ...response.data.data }],
          spinning: false
        },
        () => {
          console.log(this.state);
        }
      );
    } else {
    }
  };

  render() {
    return (
      <div>
        <CenterRuler />
        <Label>{'User Details'}</Label>
        <Fabric className="App">
          {this.state.spinning ? (
            <Spinner size={SpinnerSize.large} />
          ) : (
            <div>
              {this.state.data.map((list) => (
                <li>
                  <img src={list.avatar} height="42" width="42" />
                  <span>{list.first_name}</span>
                  <span>{list.last_name}</span>
                </li>
              ))}
            </div>
          )}
        </Fabric>
      </div>
    );
  }
}

export default AssigmentServiceCall;
export const CenterRuler = styled.hr``;
