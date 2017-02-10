
import React, {Component} from 'react';
import {Row , Col,  Card,Tag  } from 'antd';


export default class Product extends Component  {
  constructor(props) {
    super(props);


  }

  render(){
    console.log(this.props.details)
    let details = this.props.details;
    {/*? meanse that if it is ok return '' if not : other part*/}
    let StyleBuy=details.available && this.props.orders.indexOf(this.props.index)==-1 ?'':{cursor:'not-allowed', backgroundColor:'#999'};

    return(
      <Card style={{ margin:'auto 15px' }} bodyStyle={{ padding: 0 }}>
        <div className="custom-image">
          <img alt="example" width="100%" src={details.image} />
        </div>
        <div className="custom-card">
          <h3>{details.title}</h3>
          <p>{details.description}</p>
        </div>
        <div style={{padding: '0px 16px 10px'}}>
          <Tag color="#54d068">{details.price}$</Tag>
          <Tag color="#108ee9" style={StyleBuy} onClick={()=>this.props.addToCart(this.props.index )}>Add toCart</Tag>

        </div>
      </Card>


    );
  }
}
