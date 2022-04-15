import React, { Component } from 'react';

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
      newKnife: '',
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

      otherChargesCalc: otherCharges(this.state.formData.clearYN, this.state.formData.cutbacksYN, this.state.formData.resawingYN),
    });

      switch(this.state.run)
      lumberCostTotal: (this.state.bftRequired * this.state.formData.lumberCost),

    });  
  }

  render(){
    return (
      <>
        <div className='app__Form'>

        </div>
      </>
    )
  }
}

export default MoldingForm;