/* eslint-disable default-case */
import React, { Component } from 'react';
import {Label, Input, Button, Form} from 'reactstrap';

import { bftFactor, lumberWeightFactor, otherCharges, findRunCost } from '../../Functions';
import './MoldingForm.scss';

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
      orderWeight: '',
      lumberWeightFactorValue: ''
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
      
      runCostValue: findRunCost(this.state.formData.patternWidth, this.state.formData.category, this.state.formData.quantity),

      bftFactorValue: bftFactor(this.state.formData.patternWidth, this.state.formData.lumberThickness),

      bftRequired: (this.state.formData.quantity * this.state.bftFactorValue),

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

      totalPerLFT: (this.state.totalPrice / this.state.formData.quantity),

      lumberWeightFactorValue: lumberWeightFactor(this.state.formData.species)
    });
  }

  handleReset = () => {
    this.setState({
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
              <Label>
                Customer Name:
                <Input type="text" name='customerName' value={this.state.formData.customerName} onChange={this.handleChange}/>
              </Label>
            </div>
            <div className='app__form-item'>
              <Label>
                Customer #:
                <Input type="text"  name='customerID' value={this.state.formData.customerID} onChange={this.handleChange} />
              </Label>
            </div>
            <div className='app__form-item'>
              <Label>
                Quote Number:
                <Input type="number" name='quoteNumber' value={this.state.formData.quoteNumber} onChange={this.handleChange} />
              </Label>
            </div>
            <div className='app__form-item'>
              <Label>
                Order Date:
                <Input type="date" name='orderDate' value={this.state.formData.orderDate} onChange={this.handleChange} />
              </Label>
            </div>
            <div className='app__form-item'>
              <Label>
                Ship Date:
                <Input type="date" name='requestShip' value={this.state.formData.requestShip} onChange={this.handleChange} />
              </Label>
            </div>
            <div className='app__form-item'>
              <Label>
                Pattern Width:
                <Input type="select" name='patternWidth' value={this.state.formData.patternWidth} onChange={this.handleChange} required>
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
                <Input type="select" name='category' value={this.state.formData.category} onChange={this.handleChange} required>
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
                <Input type='select' name='lumberThickness' value={this.state.formData.lumberThickness} onChange={this.handleChange} required>
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
              <Input type="number" name='quantity' value={this.state.formData.quantity} onChange={this.handleChange} />
              </Label>
            </div>
            <div className='app__form-item'>
              <Label>
                Lumber Cost:
                <Input type="number" name='lumberCost' value={this.state.formData.lumberCost} onChange={this.handleChange} />
              </Label>
            </div>
            <div className='app__form-item'>
              <Label>
                Markup%:
                <Input type="number" name='markup' value={this.state.formData.markup} onChange={this.handleChange} />
              </Label>
            </div>
            <div className='app__form-item'>
              <Label>
                Clear:
                <Input type="select" name='clearYN' value={this.state.formData.clearYN} onChange={this.handleChange} required>
                  <option default disabled></option>
                  <option value='y'>Yes</option>
                  <option value='n'>No</option>
                </Input>
              </Label>
            </div>
            <div className='app__form-item'>
              <Label>
                Cutbacks:
                <Input type="select" name='cutbacksYN' value={this.state.formData.cutbacksYN} onChange={this.handleChange} required>
                  <option default disabled></option>
                  <option value='y'>Yes</option>
                  <option value='n'>No</option>
                </Input>
              </Label>
            </div>
            <div className='app__form-item'>
              <Label>
                New Knife:
                <Input type="select" name='newKnifeYN' value={this.state.formData.newKnifeYN} onChange={this.handleChange} required>
                  <option default disabled></option>  
                  <option value='y'>Yes</option>
                  <option value='n'>No</option>
                </Input>
              </Label>
            </div>
            <div className='app__form-item'>
              <Label>
                Resawing:
                <Input type="select" name='resawingYN' value={this.state.formData.resawingYN} onChange={this.handleChange} required>
                  <option default disabled></option>
                  <option value='y'>Yes</option>
                  <option value='n'>No</option>
                </Input>
              </Label>
            </div>
            <div className='app__form-item'>
              <Label>
                Species:
                <Input type="select" name='species' value={this.state.formData.species} onChange={this.handleChange} required>
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
                <Input type='textarea' name='comments' value={this.state.formData.comments} onChange={this.handleChange} />
              </Label>
            </div>
            <div className='app__form-item'>
              <Button type='submit' onClick={this.onClick}>Submit</Button>
              <Button type='reset' onClick={this.handleReset}>Reset</Button>            
            </div>
          </Form>
        </div>
      </>
    )
  }
}

export default MoldingForm;