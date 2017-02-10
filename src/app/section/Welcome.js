import React, {Component} from 'react';
import {Row , Col } from 'antd';


export default class Welcome extends Component{

  render(){
    return(

      <Row>
        <Col>
          <h1 className="header_title">{this.props.title}</h1>
          <p className="header_description">{this.props.pragraph}</p>
        </Col>
      </Row>
    );
  }
}
