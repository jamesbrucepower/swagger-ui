'use strict';

SwaggerUi.Models.ApiKeyAuthModel = Backbone.Model.extend({
    defaults: {
        'in': '',
        name: '',
        title: '',
        value: '', 
	secret: ''
    },

    initialize: function () {
        this.on('change', this.validate);
    },

    validate: function () {
        var valid = !!this.get('value') && !!this.get('secret');

        this.set('valid', valid);

        return valid;
    }
});
