// IIFE - Immediately Invoked Function Expression
(function (Main) {
    // uncomment to invoke strict mode in this scope
    // 'use strict';
    // The global object is passed as a parameter
    Main(this.jQuery, this.document, this);

    // 'this' is exactly window object
}).call(this, function ($, document, window, undefined) {
    // The $, document, window, undefined is now locally scoped

    // ========
    // $ is exactly global jQuery object
    // document is exactly document object
    // window is exactly window object
    // undefined is exactly undefined

    // due to lots of keywords are mutable in javascript before ES5, don't trust anything
    // never use
    //     var o = new Object();
    // because Object probably be overwrited
    // and primitive values has better performence

    // var x1 = {};                // new object
    // var x2 = "";                // new primitive string
    // var x3 = 0;                 // new primitive number
    // var x4 = false;             // new primitive boolean
    // var x5 = [];                // new array object
    // var x6 = /()/;              // new regexp object
    // var x7 = function () { };   // new function object
    // ========

    // The DOM may not be ready!;
    // The code goes here!


    // Listen for the jQuery ready event on the document
    $(function () {
        // The DOM is ready!
        // The code goes here!

    });

    // Listen for the load event on the window
    $(window).on('load', function () {
        // Everything is ready!
        // The code goes here!

    });
});