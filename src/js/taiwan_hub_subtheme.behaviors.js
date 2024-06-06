(function ($, Drupal) {
  'use strict';
  Drupal.behaviors.taiwanHubSubtheme = {
    attach: function (context) {
      const searchIcon = $('<i />', { class: 'fas fa-search'});
      const menuSearchLink = $('<a>', { class: 'menu-search-link', 'href': '/search', 'aria-label': 'Go to search page' }).prepend(searchIcon);
      $('.su-multi-menu', context).append(menuSearchLink);
    }
  };

})(jQuery, Drupal);