/**
 * Created by acm1899.3 on 23.10.2016.
 */
$(function () {
   $('.collapse').on('show.bs.collapse',function () {
       $(this).prev().find('.fa').removeClass().addClass('fa fa-minus-circle');
   });
   $('.collapse').on('hide.bs.collapse',function () {
        $(this).prev().find('.fa').removeClass().addClass('fa fa-plus-circle');
   });

   $('#my-form').validator({
       feedback: {
           success: 'fa fa-check-circle',
           error: 'fa fa-times-circle'
       }
   });

   $('.form-select').select2();
   $(".form-select").select2({
        minimumResultsForSearch: Infinity
    });


});
$(document).ready(function () {
    new WOW({
        offset: 100
    }).init();
});


