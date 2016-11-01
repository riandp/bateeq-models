'use strict';

var BaseModel = require('capital-models').BaseModel;
// var Component = require('./component');

module.exports = class Item extends BaseModel {
    constructor(source, version, type) {
        super(type || 'item', version || '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';
        this.uom = '';

        this.components = [];
        this.tags = '';

        this.copy(source);

        // this.components = this.components.map(component => {
        //     return new Component(component);
        // });
    };

    stamp(actor, agent) {
        super.stamp(actor, agent);
        for (var component of this.components) {
            if (component.stamp)
                component.stamp(actor, agent);
        }
    }
}