function lumberWeightFactor(species) {
const speciesArray = ["Alder","Ash","Basswood","Beech","Birch, Yellow","Cedar, Aromatic","Cedar, Spanish","Cedar, Western Red","Cherry","Cypress,Sinker","Cypress, Yellow","Fir","Hickory","Ipe","Jatoba","Mahogany, African","Makore","Maple, Hard","Maple, Pacific","Maple, Soft","Oak, Red","Oak, White","Padauk","Pecan","Pine, East","Pine, Ponderossa","Pine, Radiata","Pine, Sinker","Pine, Yellow","Poplar, Yellow","Purpleheart","Redwood","Sapele","Teak","Walnut"];
const speciesWeightArray = [2.28,3.42,2.03,3.60,3.72,2.37,2.75,2.10,3.18,3.00,2.84,2.50,4.33,7.04,4.67,3.00,3.08,3.52,3.52,3.32,3.88,4.06,3.75,4.06,2.03,1.97,4.00,3.66,2.45,2.71,4.60,1.73,3.50,3.10,3.45]

    let lumberWeightFactorValue = speciesWeightArray[speciesArray.indexOf(species)];

    return lumberWeightFactorValue;
}