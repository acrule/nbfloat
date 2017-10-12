/*
NBFloat:  Jupyter Notebook extension to track notebook history
*/

define([
    'jquery',
    'base/js/namespace'
], function(
    $,
    Jupyter,
){

// VARIABLES
    // Reference object constructors so we can patch their functions
    var Notebook = Jupyter.notebook;

    function floatGuide(){
        console.log("Float the guide");
        create_toc_div();
    }

    var create_toc_div = function() {
        var toc_wrapper = $('<div id="toc-wrapper"/>')
            .css("width", "200px")
            .css("height", "300px")
            .css("position", "absolute")
            .css("top", "120px")
            .css("right", "10px")
            .css("background", "white")
            .css("box-shadow", "0px 0px 12px 1px rgba(87, 87, 87, 0.2)")
            .append(
                $('<div id="toc-header"/>')
                .addClass("header")
                .text("Floating Guide ")                
            )
        $("body").append(toc_wrapper);
      }

// LOAD EXTENSION
    function load_extension(){
        /* Called as extension loads and notebook opens */
        console.log('[NBFloat] is working');
        floatGuide()
    }

    return {
        load_jupyter_extension: load_extension,
        load_ipython_extension: load_extension
    };
});
