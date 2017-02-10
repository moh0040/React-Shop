import React , {Component} from 'react'
import { Row , Col } from 'antd';

//we can get data from other page like below
import Header from './section/Header';
import Welcome from './section/Welcome';

export default class About extends Component {

  render() {
      return (
        <Row type="flex" justify="center">
          <Col span={12}>
              <Header SelectedMenu="morepage:about" />
              <Welcome title="Welcome To About page" />
              <Welcome pragraph="this is the about page" />
              <h2>Hello</h2>
          </Col>
        </Row>
      );
  }

}
