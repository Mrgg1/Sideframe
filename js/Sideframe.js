+function($){
    'use strict';
    var defaults={
        direction:"left",
        toggle:false,
        doubleTapToGo:false,
    }
    $.fn.sideframe=function(options) {
        this.options = $.extend({}, defaults, options);
        if (!this.options.doubleTapToGo) {
            if (this.options.direction == "left") {
                $(this).css("float", "left");
            } else if (this.options.direction == "right") {
                $(this).css("float", "right");
            }
            if (!this.options.toggle) {
                $($(this).find(".menu h3")).click(function () {
                    $(this).next().slideDown();
                    $($(this).parent().parent().find(".menu h3")).not($(this)).each(function () {
                        $(this).next().slideUp(500);
                    });
                });
            } else {
                $($(this).find(".menu h3")).click(function () {
                    if ($(this).next().css("display") == "none") {
                        $(this).next().slideDown();
                    } else {
                        $(this).next().slideUp(500);
                    }
                    $($(this).parent().parent().find(".menu h3")).not($(this)).each(function () {
                        $(this).next().slideUp(500);
                    });
                });
            }
        }else {
            if (this.options.direction == "left") {
                $(this).css("float", "left");
            } else if (this.options.direction == "right") {
                $(this).css("float", "right");
            }
            if (!this.options.toggle) {
                $($(this).find(".menu h3")).click(function () {
                    $(this).next().slideDown();
                });
            } else {
                $($(this).find(".menu h3")).click(function () {
                    if ($(this).next().css("display") == "none") {
                        $(this).next().slideDown();
                    } else {
                        $(this).next().slideUp(500);
                    }

                });
            }
        }
    }

}(jQuery);
