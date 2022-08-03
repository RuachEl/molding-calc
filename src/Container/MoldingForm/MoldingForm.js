/* eslint-disable default-case */
import React, { Component } from 'react';
import {Label, Input, Button, Form} from 'reactstrap';

import { bftFactor, lumberWeightFactor, otherCharges, findRunCost } from '../../Functions';
import './MoldingForm.scss';

class MoldingForm extends Component {
  constructor(props){
    super(props);
    this.state = {
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
      markup: '',
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
      orderWeight: '',
      lumberWeightFactorValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  
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
      
      runCostValue: findRunCost(this.state.patternWidth, this.state.category, this.state.quantity),

      bftFactorValue: bftFactor(this.state.patternWidth, this.state.lumberThickness),

      bftRequired: (this.state.quantity * this.state.bftFactorValue),

      otherChargesPercentage: otherCharges(this.state.clearYN, this.state.cutbacksYN, this.state.resawingYN),
    });

      switch(this.state.runCostValue) {
        case(this.state.runCostValue > 1):
          this.setState({ 
            runCharge: this.state.runCostValue
          });
          break;
        case(this.state.runCostValue < 1):
          this.setState({ 
            runCharge: this.state.runCostValue * this.state.quantity
          });
          break;
      }

    this.setState({
      lumberCostTotal: (this.state.bftRequired * this.state.lumberCost),

      subtotal1: (this.state.lumberCostTotal * this.state.runCharge),

      additionalCharge: (this.state.subtotal1 * this.state.otherChargesPercentage),
    });

    if(this.state.newKnifeYN === 'y'){ 
      this.setState({
        knifeCharge: 50
      })
    }

    this.setState({
      subtotal2: (this.state.subtotal1 + this.state.additionalCharge + this.state.knifeCharge),

      markupPercentage: (this.state.markup / 100),

      totalPrice: (this.state.subtotal2 * (1 + this.state.markupPercentage)),

      totalPerLFT: (this.state.totalPrice / this.state.quantity),

      lumberWeightFactorValue: lumberWeightFactor(this.state.species)
    });
  }

  handleReset = () => {
    this.setState({
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
        markup: '',
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
        orderWeight: '',
        lumberWeightFactorValue: ''
    });
  }
  
  render(){
    return (
      <>
        <div className='app__form'>
          <Form>
            <div className='app__form-item'>
              <label>
                Customer Name:
                <input type="text" name='customerName' 
                  value={this.state.customerName} 
                  onChange={this.handleChange}
                  required
                />
              </label>
            </div>
            <div className='app__form-item'>
              <Label>
                Customer #:
                <Input type="text"  name='customerID' 
                  value={this.state.customerID} 
                  onChange={this.handleChange}
                  required
                />
              </Label>
            </div>
            <div className='app__form-item'>
              <Label>
                Quote Number:
                <Input type="number" name='quoteNumber' 
                  value={this.state.quoteNumber} 
                  onChange={this.handleChange}
                  required
                />
              </Label>
            </div>
            <div className='app__form-item'>
              <Label>
                Order Date:
                <Input type="date" name='orderDate' 
                  value={this.state.orderDate} 
                  onChange={this.handleChange} 
                  required
                />
              </Label>
            </div>
            <div className='app__form-item'>
              <Label>
                Ship Date:
                <Input type="date" name='requestShip' 
                  value={this.state.requestShip} 
                  onChange={this.handleChange}
                  required
                />
              </Label>
            </div>
            <div className='app__form-item'>
              <Label>
                Pattern Width:
                <Input type="select" name='patternWidth' 
                  value={this.state.patternWidth} 
                  onChange={this.handleChange} 
                  required
                >
                  <option default disabled></option>
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
            </div>
            <div className='app__form-item'>
              <Label>
                Category:
                <Input type="select" name='category' 
                  value={this.state.category} 
                  onChange={this.handleChange} 
                  required
                >
                  <option default disabled></option>
                  <option value='s4s'>S4S</option>
                  <option value='standard'>Standard</option>
                  <option value='complex'>Complex</option>
                </Input>
              </Label>
            </div>
            <div className='app__form-item'>
              <Label>
                Lumber Thickness:
                <Input type='select' name='lumberThickness' 
                  value={this.state.lumberThickness} 
                  onChange={this.handleChange} 
                  required
                >
                  <option default disabled></option>
                  <option value='4/4'>4/4</option>
                  <option value='5/4'>5/4</option>
                  <option value='6/4'>6/4</option>
                  <option value='8/4'>8/4</option>
                  <option value='10/4'>10/4</option>
                  <option value='12/4'>12/4</option>
                </Input>
              </Label>
            </div>
            <div className='app__form-item'>
              <Label>
                Quantity:
              <Input type="number" name='quantity' 
                value={this.state.quantity} 
                onChange={this.handleChange} 
                required
              />
              </Label>
            </div>
            <div className='app__form-item'>
              <Label>
                Lumber Cost:
                <Input type="number" name='lumberCost' 
                  value={this.state.lumberCost} 
                  onChange={this.handleChange} 
                  required
                />
              </Label>
            </div>
            <div className='app__form-item'>
              <Label>
                Markup%:
                <Input type="number" name='markup' 
                  value={this.state.markup} 
                  onChange={this.handleChange} 
                  required
                />
              </Label>
            </div>
            <div className='app__form-item'>
              <Label>
                Clear:
                <Input type="select" name='clearYN' 
                  value={this.state.clearYN} 
                  onChange={this.handleChange} 
                  required
                >
                  <option default disabled></option>
                  <option value='y'>Yes</option>
                  <option value='n'>No</option>
                </Input>
              </Label>
            </div>
            <div className='app__form-item'>
              <Label>
                Cutbacks:
                <Input type="select" name='cutbacksYN' 
                  value={this.state.cutbacksYN} 
                  onChange={this.handleChange} 
                  required
                >
                  <option default disabled></option>
                  <option value='y'>Yes</option>
                  <option value='n'>No</option>
                </Input>
              </Label>
            </div>
            <div className='app__form-item'>
              <Label>
                New Knife:
                <Input type="select" name='newKnifeYN' 
                  value={this.state.newKnifeYN} 
                  onChange={this.handleChange} 
                  required
                >
                  <option default disabled></option>  
                  <option value='y'>Yes</option>
                  <option value='n'>No</option>
                </Input>
              </Label>
            </div>
            <div className='app__form-item'>
              <Label>
                Resawing:
                <Input type="select" name='resawingYN' 
                  value={this.state.resawingYN} 
                  onChange={this.handleChange} 
                  required
                >
                  <option default disabled></option>
                  <option value='y'>Yes</option>
                  <option value='n'>No</option>
                </Input>
              </Label>
            </div>
            <div className='app__form-item'>
              <Label>
                Species:
                <Input type="select" name='species' 
                  value={this.state.species} 
                  onChange={this.handleChange} 
                  required
                >
                  <option default disabled></option>
                  <option default disabled></option>
                  <option value="Alder">Alder</option>
                  <option value="Ash">Ash</option>
                  <option value="Basswood">Basswood</option>
                  <option value="Beech">Beech</option>
                  <option value="Birch, Yellow">Birch, Yellow</option>
                  <option value="Cedar, Aromatic">Cedar, Aromatic</option>
                  <option value="Cedar, Spanish">Cedar, Spanish</option>
                  <option value="Cedar, Western Red">Cedar, Western Red</option>
                  <option value="Cherry">Cherry</option>
                  <option value="Cypress,Sinker">Cypres, Sinker</option>
                  <option value="Cypress, Yellow">Cypress, Yellow</option>
                  <option value="Fir">Fir</option>
                  <option value="Hickory">Hickory</option>
                  <option value="Ipe">Ipe</option>
                  <option value="Jatoba">Jatoba</option>
                  <option value="Mahogany, African">Mahogany, African</option>
                  <option value="Makore">Makore</option>
                  <option value="Maple, Hard">Maple, Hard</option>
                  <option value="Maple, Pacific">Maple, Pacific</option>
                  <option value="Maple, Soft">Maple, Soft</option>
                  <option value="Oak, Red">Oak, Red</option>
                  <option value="Oak, White">Oak, White</option>
                  <option value="Padauk">Padauk</option>
                  <option value="Pecan">Pecan</option>
                  <option value="Pine, East">Pine, Eastern</option>
                  <option value="Pine, Ponderossa">Pine, Ponderossa</option>
                  <option value="Pine, Radiata">Pine, Radiata</option>
                  <option value="Pine, Sinker">Pine, Sinker</option>
                  <option value="Pine, Yellow">Pine, Yellow</option>
                  <option value="Poplar, Yellow">Poplar, Yellow</option>
                  <option value="Purpleheart">Purpleheart</option>
                  <option value="Redwood">Redwood</option>
                  <option value="Sapele">Sapele</option>
                  <option value="Teak">Teak</option>
                  <option value="Walnut">Walnut</option>
                </Input>
              </Label>
            </div>
            <div className='app__form-item'> 
              <Label>
                Comments:
                <Input type='textarea' name='comments' 
                  value={this.state.comments} 
                  onChange={this.handleChange} 
                />
              </Label>
            </div>
            <div className='app__form-item'>
              <Button type='submit' onClick={this.handleClick}>Submit</Button>
              <Button type='reset' onClick={this.handleReset}>Reset</Button>            
            </div>
          </Form>
        </div>
        <div>
          <div className='app_output'>
            <div>
                <p className="p-text">Customer Name: {this.state.customerName} </p>
            </div>
            <div>
                <p className="p-text">Customer ID: {this.state.customerID} </p>
            </div>
            <div>
                <p className="p-text">Quote Number: {this.state.quoteNumber} </p>
            </div>
            <div>
                <p className="p-text">Order Date: {this.state.orderDate} </p>
            </div>
            <div>
                <p className="p-text">Ship Date: {this.state.requestShip} </p>
            </div>
            <div>
                <p className="p-text">Pattern Width: {this.state.patternWidth} </p>
            </div>
            <div>
                <p className="p-text">Category: {this.state.category} </p>
            </div>
            <div>
                <p className="p-text">Lumber Thickness: {this.state.lumberThickness} </p>
            </div>
            <div>
                <p className="p-text">Clear: {this.state.clearYN} </p>
            </div>
            <div>
                <p className="p-text">Cutbacks: {this.state.cutbacksYN} </p>
            </div>
            <div>
                <p className="p-text">New Knife: {this.state.newKnifeYN} </p>
            </div>
            <div>
                <p className="p-text">Resawing: {this.state.resawingYN} </p>
            </div>
            <div>
                <p className="p-text">Species: {this.state.species} </p>
            </div>
            <div>
                <p className="p-text">Total Price: {this.state.totalPrice} </p>
            </div>
            <div>
                <p className="p-text">Price/LFT: {this.state.totalPerLFT} </p>
            </div>
            <div>
                <p className="p-text">Est. Weight: {this.state.orderWeight} </p>
            </div>
          </div>

        </div>
      </>
    )
  }
}

export default MoldingForm;