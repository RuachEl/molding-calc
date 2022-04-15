export default function otherCharges(clearYN, cutbacksYN, resawingYN) {
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