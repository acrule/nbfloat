/*
NBFloat:  Jupyter Notebook extension to track notebook history
*/

define([
    'require',
    'jquery',
    'base/js/namespace'
], function(
    require,
    $,
    Jupyter,
){

// VARIABLES
    // Reference object constructors so we can patch their functions
    var Notebook = Jupyter.notebook;

    function floatGuide(){
        console.log("Float the guide");
        create_toc_div();
        load_css();
    }

    var load_css = function() {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = require.toUrl("./main.css");
        document.getElementsByTagName("head")[0].appendChild(link);
    };

    var create_toc_div = function() {
        var toc_wrapper = $('<div id="toc-wrapper"/>');
        $("body").append(toc_wrapper);

        var toc_form = $('<form id="toc-form"/>')
            .text("What's on your mind?")
        $("#toc-wrapper").append(toc_form);

        $("#toc-form").append("<br/>");

        var toc_input = $('<input id="toc-input"/>')
        toc_input.type = "text"
        $("#toc-form").append(toc_input);

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
