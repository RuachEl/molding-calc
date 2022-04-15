/* eslint-disable default-case */
function findRunCost(patternWidth, category, quantity) {
    let runCost;

    if(patternWidth < 6) {
        switch(category) {
            case("s4s"):
                switch(quantity) {
                    case(quantity <= 1000):
                        runCost = 125;
                        break;

                    case(quantity <= 2000):
                        runCost = 175;
                        break;
                    
                    case(quantity <= 5000):
                        runCost = 0.1;
                        break;

                    case(quantity <= 10000):
                        runCost = 0.09;
                        break;

                    case(quantity <= 20000):
                        runCost = 0.05;
                        break;

                    case(quantity > 20000):
                        runCost = 0.04;
                        break;            
                }
                break;

            case("standard"):
                switch(quantity) {
                    case(quantity <= 1000):
                        runCost = 200;
                        break;

                    case(quantity <= 2000):
                        runCost = 250;
                        break;
                    
                    case(quantity <= 5000):
                        runCost = 0.12;
                        break;

                    case(quantity <= 10000):
                        runCost = 0.1;
                        break;

                    case(quantity <= 20000):
                        runCost = 0.06;
                        break;

                    case(quantity > 20000):
                        runCost = 0.05;
                        break;            
                }
                break;

            case("complex"):
                switch(quantity) {
                    case(quantity <= 1000):
                        runCost = 250;
                        break;

                    case(quantity <= 2000):
                        runCost = 300;
                        break;
                    
                    case(quantity <= 5000):
                        runCost = 0.15;
                        break;

                    case(quantity <= 10000):
                        runCost = 0.12;
                        break;

                    case(quantity < 10000):
                        runCost = 0.06;
                        break;
                }
                break;
        }
    }

    return runCost;
}