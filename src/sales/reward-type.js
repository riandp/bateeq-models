'use strict'

var BaseModel = require('capital-models').BaseModel; 

module.exports = class RewardType extends BaseModel {
    constructor(source) {
        super('reward-type', '1.0.0');
   
        this.code = ''; 
        this.name = ''; 
        this.description = ''; 
        
        this.copy(source);
    }
}