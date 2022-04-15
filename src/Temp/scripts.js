let customerName = "default";
let customerID = "default";
let quoteNumber = "default";
let orderDate = "default";
let requestShip = "default";
let patternWidth = "default";
let category = "default";
let lumberThickness = "default";
let quantity = "default";
let lumberCost = "default";
let clearYN = "default";
let cutbacksYN = "default";
let newKnife = "default";
let resawing = "default";
let species = "default";
let comments = "default";
let markup = "default";

function formChange() {
    let customerName = document.getElementById("customerName")[0].value;
    let customerID = document.getElementById("customerID")[0].value;
    let quoteNumber = document.getElementById("quoteNumber")[0].value;
    let orderDate = document.getElementById("orderDate")[0].value;
    let requestShip = document.getElementById("requestShip")[0].value;
    let patternWidth = document.getElementById("patternWidth")[0].value;
    let category = document.getElementById("category")[0].value;
    let lumberThickness = document.getElementById("lumberThickness")[0].value;
    let quantity = document.getElementById("quantity")[0].value;
    let lumberCost = document.getElementById("lumberCost")[0].value;
    let clearYN = document.getElementById("clearYN")[0].value;
    let cutbacksYN = document.getElementById("cutbacksYN")[0].value;
    let newKnifeYN = document.getElementById("newKnifeYN")[0].value;
    let resawingYN = document.getElementById("resawingYN")[0].value;
    let species = document.getElementById("species")[0].value;
    let comments = document.getElementById("comments")[0].value;
    let markup = document.getElementById("markup")[0];
    let formArray = [customerName, customerID, quoteNumber, orderDate, requestShip, patternWidth,category,
                        lumberThickness, quantity, lumberCost, clearYN, cutbacksYN, newKnifeYN, resawingYN, 
                        species, comments, markup];
    sessionStorage.setItem('formArray', JSON.stringify(formArray))
}

function brains() {
    let runCostValue;
    let bftFactorValue;
    let bftRequired;
    let otherChargesPercentage;
    let runCharge;
    let subtotal1;
    let subtotal2;
    let knifeCharge = 0;
    let lumberCostTotal;
    let additionalCharge;
    let markupPercentage;
    let totalPrice;
    let totalPerLFT;
    let orderWeight;

    pricingComponents();
    pricing();
    otherCharges();



    function pricingComponents() {
        runCostValue = runCost(patternWidth, category, quantity);
        bftFactorValue = bftFactor(patternWidth, lumberThickness);
        bftRequired = (quantity * bftFactorValue);
        otherChargesPercentage = otherCharges(clearYN, cutbacksYN, resawingYN);


    }
    
    function pricing() {
        switch (runCostValue) {
            case (runCostValue > 1):
                runCharge = runCostValue;
                break;
            case (runCostValue < 1):
                runCharge = (runCostValue * quantity);
                break;
        }

        lumberCostTotal = bftRequired * lumberCost;
        
        subtotal1 = lumberCostTotal + runCharge;
        additionalCharge = subtotal1 * otherChargesPercentage; 
        if(newKnifeYN === 'y') {
            knifeCharge = 50.00;
        }
        subtotal2 = subtotal1 + additionalCharge+knifeCharge;
        markupPercentage = markup / 100;
        totalPrice = subtotal2 * (1 + markupPercentage);
        totalPerLFT = totalPrice / quantity;
        
    }

    function runCost(patternWidth, category, quantity) {
        if(patternWidth < 6) {
            switch(category) {
                case "s4s":
                    if(quantity <= 1000) {
                        runCost = 125;
                        break;
                    }
                    else if(quantity <= 2000) {
                        runCost = 175;
                        break;
                    }
                    else if(quantity <= 5000) {
                        runCost = 0.10;
                        break;
                    }
                    else if(quantity <= 10000) {
                        runCost = 0.09;
                        break;
                    }
                    else if(quantity <= 20000) {
                        runCost = 0.05;
                        break;
                    }
                    else if(quantity > 20000) {
                        runCost = 0.04;
                        break;
                    };
                case "standard":
                    if(quantity <= 1000) {
                        runCost = 200;
                        break;
                    }
                    else if(quantity <= 2000) {
                        runCost = 250;
                        break;
                    }
                    else if(quantity <= 5000) {
                        runCost = 0.12;
                        break;
                    }
                    else if(quantity <= 10000) {
                        runCost = 0.1;
                        break;
                    }
                    else if(quantity <= 20000) {
                        runCost = 0.06;
                        break;
                    }
                    else if(quantity > 20000) {
                        runCost = 0.05;
                        break;
                    };
                case "complex":
                    if(quantity <= 1000) {
                        runCost = 250;
                        break;
                    }
                    else if(quantity <= 2000) {
                        runCost = 300;
                        break;
                    }
                    else if(quantity <= 5000) {
                        runCost = 0.15;
                        break;
                    }
                    else if(quantity <= 10000) {
                        runCost = 0.12;
                        break;
                    }
                    else if(quantity <= 20000) {
                        runCost = 0.06;
                        break;
                    }
                    else if(quantity > 20000) {
                        runCost = 0.06;
                        break;
                    };               
            }
        }
        if(patternWidth >= 6) {
            switch(category) {
                case "s4s":
                    if(quantity <= 1000) {
                        runCost = 175;
                        break;
                    }
                    else if(quantity <= 2000) {
                        runCost = 225;
                        break;
                    }
                    else if(quantity <= 5000) {
                        runCost = 0.14;
                        break;
                    }
                    else if(quantity <= 10000) {
                        runCost = 0.11;
                        break;
                    }
                    else if(quantity <= 20000) {
                        runCost = 0.06;
                        break;
                    }
                    else if(quantity > 20000) {
                        runCost = 0.05;
                        break;
                    };
                case "standard":
                    if(quantity <= 1000) {
                        runCost = 250;
                        break;
                    }
                    else if(quantity <= 2000) {
                        runCost = 350;
                        break;
                    }
                    else if(quantity <= 5000) {
                        runCost = 0.17;
                        break;
                    }
                    else if(quantity <= 10000) {
                        runCost = 0.13;
                        break;
                    }
                    else if(quantity <= 20000) {
                        runCost = 0.07;
                        break;
                    }
                    else if(quantity > 20000) {
                        runCost = 0.06;
                        break;
                    };
                case "complex":
                    if(quantity <= 1000) {
                        runCost = 300;
                        break;
                    }
                    else if(quantity <= 2000) {
                        runCost = 400;
                        break;
                    }
                    else if(quantity <= 5000) {
                        runCost = 0.22;
                        break;
                    }
                    else if(quantity <= 10000) {
                        runCost = 0.15;
                        break;
                    }
                    else if(quantity <= 20000) {
                        runCost = 0.1;
                        break;
                    }
                    else if(quantity > 20000) {
                        runCost = 0.1;
                        break;
                    };   
            }
        }
        return runCostValue;
    }

    function otherCharges(clearYN, cutbacksYN, resawingYN) {
        let otherChargesPercentage = 0;
    
        if(clearYN === 'y') {
            otherChargesPercentage += 0.1;
        }
        
        if(cutbacksYN === 'y') {
            otherChargesPercentage += 0.1;
        }
        if(resawingYN === 'y') {
            otherChargesPercentage += 0.1;
        }
    
    
        return otherChargesPercentage;
    }

    function lumberWeightFactor(species) {
        const speciesArray = ["Alder","Ash","Basswood","Beech","Birch, Yellow","Cedar, Aromatic","Cedar, Spanish","Cedar, Western Red","Cherry","Cypress,Sinker","Cypress, Yellow","Fir","Hickory","Ipe","Jatoba","Mahogany, African","Makore","Maple, Hard","Maple, Pacific","Maple, Soft","Oak, Red","Oak, White","Padauk","Pecan","Pine, East","Pine, Ponderossa","Pine, Radiata","Pine, Sinker","Pine, Yellow","Poplar, Yellow","Purpleheart","Redwood","Sapele","Teak","Walnut"];
        const speciesWeightArray = [2.28,3.42,2.03,3.60,3.72,2.37,2.75,2.10,3.18,3.00,2.84,2.50,4.33,7.04,4.67,3.00,3.08,3.52,3.52,3.32,3.88,4.06,3.75,4.06,2.03,1.97,4.00,3.66,2.45,2.71,4.60,1.73,3.50,3.10,3.45]
        
            let lumberWeightFactorValue = speciesWeightArray[speciesArray.indexOf(species)];
            console.log(lumberWeightFactorValue);
            return lumberWeightFactorValue;
        }


        function bftFactor(patternWidth, lumberThickness) {
            const patternWidthArray = ["1/2","5/8","3/4","7/8","1","1 1/4","1 1/2","1 3/4","2","2 1/4","2 1/2","2 3/4","3","3 1/4","3 1/2","3 3/4","4","4 1/4","4 1/2","4 3/4","5","5 1/4","5 1/2","5 3/4","6","6 1/4","6 1/2","6 3/4","7","7 1/4","7 1/2","7 3/4","8","8 1/4","8 1/2","8 3/4","9","9 1/4","9 1/2","9 3/4","10","10 1/4","10 1/2","10 3/4","11","11 1/4","11 1/2","11 3/4","12"];
            const fourQuarterFactor = [0.1250,0.1375,0.1500,0.1625,0.1750,0.2000,0.2250,0.2500,0.2750,0.3000,0.3250,0.4000,0.4250,0.4500,0.4750,0.5000,0.5500,0.5750,0.6000,0.6250,0.6500,0.6750,0.7000,0.7250,0.7895,0.8158,0.8421,0.8684,0.9730,1.0000,1.0270,1.0541,1.1111,1.8060,1.2500,1.2778,1.3429,1.3714,1.4000,1.4286,1.5000,1.5294,1.5588,1.5882,1.7188,1.7500,1.7813,1.8125,1.8438];
            const fiveQuarterFactor = [0.1563,0.1719,0.1875,0.2031,0.2188,0.2500,0.2813,0.3125,0.3438,0.3750,0.4063,0.5000,0.5313,0.5625,0.5938,0.6250,0.6675,0.7188,0.7500,0.7813,0.8125,0.8438,0.8750,0.9063,0.9868,1.0197,1.0526,1.0855,1.2162,1.2500,1.2838,1.3176,1.3889,1.4757,1.5625,1.5972,1.6786,1.7143,1.7500,1.7857,1.8750,1.9118,1.9485,1.9853,2.1484,2.1875,2.2266,2.2656,2.3047];
            const sixQuarterFactor = [0.1865,0.2063,0.2250,0.2483,0.2625,0.3000,0.3375,0.3750,0.4125,0.4500,0.4875,0.6000,0.6375,0.6750,0.7125,0.7500,0.8250,0.8625,0.9000,0.9375,0.9750,1.0125,1.0500,1.0875,1.0842,1.2237,1.2632,1.3026,1.4595,1.5000,1.5405,1.5811,1.6667,1.7708,1.8750,1.9167,2.0143,2.0571,2.1000,2.1429,2.2500,2.2941,2.3362,2.3824,2.5781,2.6250,2.6719,2.7188,2.7656];
            const eightQuarterFactor = [0.2500,0.2750,0.3000,0.3250,0.3500,0.4000,0.4500,0.5000,0.5500,0.6000,0.6500,0.8000,0.8500,0.9000,0.9500,1.0000,1.1000,1.1500,1.2000,1.2500,1.3000,1.3500,1.4000,1.4500,1.5789,1.6316,1.6842,1.7368,1.9459,2.0000,2.0541,2.1081,2.2222,2.3611,2.5000,2.5556,2.6857,2.7429,2.8000,2.8571,3.0000,3.0588,3.1176,3.1765,3.4375,3.5000,3.5625,3.6250,3.6875]; 
            const tenQuarterFactor = [0.3125,0.3438,0.3750,0.4063,0.4375,0.5000,0.5625,0.6250,0.6875,0.7500,0.8125,1.0000,1.0625,1.1250,1.1875,1.2500,1.3750,1.4375,1.5000,1.5625,1.6250,1.6875,1.7500,1.8125,1.9737,2.0395,2.1053,2.1711,2.4324,2.5000,2.5676,2.6351,2.7778,2.9514,3.1250,3.1944,3.3571,3.4286,3.5000,3.5714,3.7500,3.8235,3.8971,3.9706,4.2969,4.3750,4.4531,4.5313,4.6094];
            const twelveQuarterFactor = [0.3750,0.4125,0.4500,0.4875,0.5250,0.6000,0.6750,0.7500,0.8250,0.9000,0.9750,1.2000,1.2750,1.3500,1.4250,1.5000,1.6500,1.7250,1.8000,1.8750,1.9500,2.0250,2.1000,2.1750,2.3684,2.4474,2.5263,2.6053,2.9189,3.0000,3.0811,3.1622,3.3333,3.5417,3.7500,3.8333,4.0286,4.1143,4.2000,4.2857,4.5000,4.5882,4.6765,4.7647,5.1565,5.2500,5.343, 8.4375,5.5313]; 
            let bftArrayLocation;
            let bftFactor;
        
            switch(lumberThickness) {
                case "4/4":
                    bftArrayLocation = patternWidthArray.indexOf(patternWidth);
                    bftFactor = fourQuarterFactor[bftArrayLocation];
                    break;
                case "5/4":
                    bftArrayLocation = patternWidthArray.indexOf(patternWidth);
                    bftFactor = fiveQuarterFactor[bftArrayLocation];
                    break;
                case "6/4":
                    bftArrayLocation = patternWidthArray.indexOf(patternWidth);
                    bftFactor = sixQuarterFactor[bftArrayLocation];
                    break;
                case "8/4":
                    bftArrayLocation = patternWidthArray.indexOf(patternWidth);
                    bftFactor = eightQuarterFactor[bftArrayLocation];
                    break;
                case "10/4":
                    bftArrayLocation = patternWidthArray.indexOf(patternWidth);
                    bftFactor = tenQuarterFactor[bftArrayLocation];
                    break;
                case "12/4":
                    bftArrayLocation = patternWidthArray.indexOf(patternWidth);
                    bftFactor = twelveQuarterFactor[bftArrayLocation];
                    break;
            }       
            return bftFactor;
        }
    
    orderWeight = lumberWeightFactor(species) * bftRequired;
    console.log(totalPrice);
    console.log(orderWeight);   
}