'use strict';

var TrelloResource = require('../TrelloResource');
var trelloMethod = TrelloResource.method;

module.exports = TrelloResource.extend({

    path: 'cards',
    includeBasic: [
        'create', 'search', 'searchField', 'update', 'del'
    ],

    addComment: trelloMethod({
        method: 'POST',
        path: '/{cardId}/actions/comments',
        urlParams: ['cardId']
    })

});
