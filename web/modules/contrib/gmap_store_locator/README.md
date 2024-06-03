## Google Maps - Store Locator

Store Locator module provides a simple way to add the stores and display them
in Google Maps with configurable InfoWindow & List.

### Requirements

No special requirements at this time.

### Install

Install this module as usual. Please see
http://drupal.org/documentation/install/modules-themes/modules-8

We recommend installing through composer:

```bash
composer require drupal/gmap_store_locator
drush en store_locator
```

### Usage

To use this module, create store entity pages with configurable options:

* Add items in _/admin/store-locator/add_ page.
* Click on the 'Calculate Lat/Long' to get the Latitude & Longitude of the
  entered fields or click on the map to auto generate latitude & longitude.
* View the Store Locator page at _/store-locator_.
* Place the 'Store Locator' block anywhere by visiting _/admin/structure/block_.

### Configuration

Global module settings can be found at _/admin/config/store-locator/settings_.

* Upload Marker Icon to display the marker on the map.
* Generate Google Map API key and add it.
  https://developers.google.com/maps/documentation/javascript/get-api-key
* Items Visibility in List & Infowindow with sort option.

Entity Settings & List Page:

* Store Locator Administration page _/admin/structure/store_locator/settings_.
* Store Locator List page _/admin/store-locator/list_.

### Support

Please use the issue queue to report bugs or request support:
http://drupal.org/project/issues/gmap_store_locator

### Maintainers

* https://www.drupal.org/u/geoanders
* https://www.drupal.org/u/vedprakash
