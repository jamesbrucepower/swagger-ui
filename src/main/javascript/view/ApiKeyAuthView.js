'use strict';

SwaggerUi.Views.ApiKeyAuthView = Backbone.View.extend({ // TODO: append this to global SwaggerUi

    events: {
        'change .input_apiKey_entry': 'apiKeyChange',
	'change .input_apiSecret_entry': 'apiSecretChange'
    },

    selectors: {
        apikeyInput: '.input_apiKey_entry',
	apiSecretInput: '.input_apiSecret_entry'
    },

    template: Handlebars.templates.apikey_auth,

    initialize: function(opts) {
        this.options = opts || {};
        this.router = this.options.router;
    },

    render: function (){
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },

    apiKeyChange: function (e) {
        var val = $(e.target).val();
        if (val) {
            this.$(this.selectors.apikeyInput).removeClass('error');
        }

        this.model.set('value', val);
    },

    apiSecretChange: function (e) {
        var val = $(e.target).val();
        if (val) {
            this.$(this.selectors.apiSecretInput).removeClass('error');
        }

        this.model.set('secret', val);
    },

    isValid: function () {
        return this.model.validate();
    },

    highlightInvalid: function () {
        if (!this.isValid()) {
            this.$(this.selectors.apikeyInput).addClass('error');
            this.$(this.selectors.apiSecretInput).addClass('error');
        }
    }

});
