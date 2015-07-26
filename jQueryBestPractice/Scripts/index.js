// IIFE - Immediately Invoked Function Expression
(function (Main) {
    // The global jQuery object is passed as a parameter
    Main(window.jQuery, window, document);
}(function ($, window, document) {
    // The $ is now locally scoped

    // The DOM may not be ready!;
    // The code goes here!

    // Listen for the jQuery ready event on the document
    $(function () {
        // The DOM is ready!
        // The code goes here!

    });

    // Listen for the load event on the window
    $(window).on("load", function () {
        // Everything is ready!
        // The code goes here!

    });
}));