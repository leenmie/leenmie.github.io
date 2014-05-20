$(function() {
    loadTemplate = function(nav_bar) {
        $.get('header.html', '', function(response) {
            var load_header = $(response).find('.masthead');
            var load_footer = $(response).find('.mastfoot');
            var our_header = $('.masthead');
            var our_footer = $('.mastfoot');
            our_header.html(load_header);
            our_footer.html(load_footer);
            $('#project-dropdown').hover(function() {
                $(this).dropdown('toggle');
            }, function() {
            }).click(function() {
                window.location = $(this).attr('href');
            });
            $(nav_bar).addClass('active'); 
        });
   };
}); 