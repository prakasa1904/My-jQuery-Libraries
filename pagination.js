/*
| Author : Prakasa <prakasa@devetek.com>
| Desc : Build jQuery pagination
| URL : http://www.terpusat.com
| jQuery version : v1.11.2
| Function version : 0.0.1 BETA
*/
$.fn.pagination = function(options) {
  var defaults = {
    uri: 'http://www.terpusat.com/',
    total:0,
    limit: 10,
    page: 1,
    open_tag: '<li>',
    close_tag: '</li>',
    current_open_tag: '<li class="active">',
    current_close_tag: '</li>',
    prev_text: 'Prev',
    next_text: 'Next'
  };
  var settings = $.extend( {}, defaults, options );
  var navigation_html = ''; var i = 0; var current_link = 1;

  var number_of_pages = Math.round(settings.total/settings.limit);
  if( settings.page > 1 )
    navigation_html += settings.open_tag + '<a href="' + settings.uri + '?page=1&limit=' + settings.limit + '">' + settings.prev_text + '</a>' + settings.close_tag;
    while( number_of_pages > i){
      if( settings.page == current_link )
        navigation_html += settings.current_open_tag + '<a href="' + settings.uri + '?page=' + current_link + '&limit=' + settings.limit + '">' + (current_link) + '</a>' + settings.current_close_tag;
      else
        navigation_html += settings.open_tag + '<a href="' + settings.uri + '?page=' + current_link + '&limit=' + settings.limit + '">'+ (current_link) +'</a>' + settings.close_tag;
      i++; current_link++;
    }
    if( settings.page != number_of_pages && number_of_pages != 0 )
        navigation_html += settings.open_tag + '<a href="' + settings.uri + '?page=' + (number_of_pages) + '&limit=' + settings.limit + '">' + settings.next_text + '</a>' + settings.close_tag;
    $(this).html(navigation_html);
};