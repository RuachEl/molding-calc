import React, { Component } from 'react';
import {Label, Input} from 'reactstrap';

class MoldingForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      formData: {
      customerName: '',
      customerID: '',
      quoteNumber: '',
      orderDate: '',
      requestShip: '',
      patternWidth: '',
      category: '',
      lumberThickness: '',
      quantity: '',
      lumberCost: '',
      clearYN: '',
      cutbacksYN: '',
      newKnifeYN: '',
      resawingYN: '',
      species: '',
      comments: '',
      markup: ''
      },
      runCostValue: '',
      bftFactorValue: '',
      bftRequired: '',
      otherChargesPercentage: '',
      runCharge: '',
      subtotal1: '',
      subtotal2: '',
      knifeCharge: 0,
      lumberCostTotal: '',
      additionalCharge: '',
      markupPercentage: '',
      totalPrice: '',
      totalPerLFT: '',
      orderWeight: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name]: value
    });
  };

  handleClick = () => {
    this.setState({ 
      
      runCostValue: runCost(this.state.formData.patternWidth, this.state.formData.category, this.state.formData.quantity),

      bftFactorValue: bftFactor(this.state.formData.patternWidth, lumberThickness),

      bftRequired: (this.state.formData.quantity * bftFactorValueCalc),

      otherChargesPercentage: otherCharges(this.state.formData.clearYN, this.state.formData.cutbacksYN, this.state.formData.resawingYN),
    });

      switch(this.state.runCostValue) {
        case(this.state.runCostValue > 1):
          this.setState({ runCharge: this.state.runCostValue});
          break;
        case(this.state.runCostValue < 1):
          this.setState({ 
            runCharge: this.state.runCostValue * this.state.formData.quantity
          });
      }

    this.setState({
      lumberCostTotal: (this.state.bftRequired * this.state.formData.lumberCost),

      subtotal1: (this.state.lumberCostTotal * this.state.runCharge),

      additionalCharge: (this.state.subtotal1 * this.state.otherChargesPercentage),
    });

    if(this.state.formData.newKnifeYN === 'y'){ 
      this.setState({
        knifeCharge: 50
      })
    }

    this.setState({
      subtotal2: (this.state.subtotal1 + this.state.additionalCharge + this.state.knifeCharge),

      markupPercentage: (this.state.formData.markup / 100),

      totalPrice: (this.state.subtotal2 * (1 + this.state.markupPercentage)),

      totalPerLFT: (this.state.totalPrice / this.state.formData.quantity)
    });
  }
  
  render(){
    return (
      <>
        <div className='app__Form'>
          <div className='app__Form-items'>
            <Label className='app__Form-item'>
              Customer Name:
              <Input type="text" name='cutomerName' value={this.state.formData.customerName} onChange={this.handleChange} />
            </Label>
            <Label className='app__Form-item'>
              Customer #:
              <Input type="text"  name='customerID' value={this.state.formData.customerID} onChange={this.handleChange} />
            </Label>
            <Label className='app__Form-item'>
              Quote Number:
              <Input type="number" name='quoteNumber' value={this.state.formData.quoteNumber} onChange={this.handleChange} />
            </Label>
            <Label className='app__Form-item'>
              Order Date:
              <Input type="date" name='orderDate' value={this.state.formData.orderDate} onChange={this.handleChange} />
            </Label>
            <Label className='app__Form-item'>
              Ship Date:
              <Input type="date" name='requestShip' value={this.state.formData.requestShip} onChange={this.handleChange} />
            </Label>
            <Label className='app__Form-item'>
              Pattern Width:
              <Input type="select" name='patternWidth' value={this.state.formData.patternWidth} onChange={this.handleChange} >
                <option value='0.50'>1/2"</option>
                <option value='0.625'>5/8"</option>
                <option value='0.75'>3/4"</option>
                <option value='0.875'>7/8"</option>
                <option value='1.0'>1"</option>
                <option value='1.25'>1 1/4"</option>
                <option value='1.50'>1 1/2"</option>
                <option value='1.75'>1 3/4"</option>
                <option value='2.0'>2"</option>
                <option value='2.25'>2 1/4"</option>
                <option value='2.50'>2 1/2"</option>
                <option value='2.75'>2 3/4"</option>
                <option value='3.0'>3"</option>
                <option value='3.25'>3 1/4"</option>
                <option value='3.50'>3 1/2"</option>
                <option value='3.75'>3 3/4"</option>
                <option value='4.0'>4"</option>
                <option value='4.25'>4 1/4"</option>
                <option value='4.50'>4 1/2"</option>
                <option value='4.75'>4 3/4"</option>
                <option value='5.0'>5"</option>
                <option value='5.25'>5 1/4"</option>
                <option value='5.50'>5 1/2"</option>
                <option value='5.75'>5 3/4"</option>
              </Input>
            </Label>
            <Label>
              Category:
              <Input type="select" name='category' value={this.state.formData.category} onChange={this.handleChange} >
                <option value='s4s'>S4S</option>
                <option value='standard'>Standard</option>
                <option value='complex'>Complex</option>
              </Input>
            </Label>
            <Label>
              Lumber Thickness:
              <Input type='select' name='lumberThickness' value={this.state.formData.lumberThickness} onChange={this.handleChange} >
                <option value='4/4'>4/4</option>
                <option value='5/4'>5/4</option>
                <option value='6/4'>6/4</option>
                <option value='8/4'>8/4</option>
                <option value='10/4'>10/4</option>
                <option value='12/4'>12/4</option>
              </Input>
            </Label>
              quantity
              lumberCost
              clearYN
              cutbacksYN
              newKnifeYN
              resawingYN

            
          </div>
        </div>
      </>
    )
  }
}

export default MoldingForm;