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