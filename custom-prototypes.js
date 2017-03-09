'use strict';

String.prototype.ucwords = function() {
    return this.toLowerCase().replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,
        function($1){
            return $1.toUpperCase();
        }).replace(/-/g, '');
};

String.prototype.lcfirst = function() {
    return this.charAt(0).toLowerCase() + this.slice(1);
}

String.prototype.ucfirst = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}