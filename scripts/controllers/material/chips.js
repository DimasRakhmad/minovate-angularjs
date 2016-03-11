'use strict';

app

  .controller('mtChipsCtrl', function($scope, $timeout, $mdBottomSheet) {

    $scope.page = {
      title: 'Chips',
      subtitle: 'Place subtitle here...'
    };

  })

  .controller('mtChipsBasicDemoCtrl', mtChipsBasicDemoCtrl)
  .controller('mtChipsContactChipDemoCtrl', mtChipsContactChipDemoCtrl)
  .controller('mtChipsCustomInputDemoCtrl', mtChipsCustomInputDemoCtrl)
  .controller('mtChipsStaticDemoCtrl', mtChipsStaticDemoCtrl);

function mtChipsBasicDemoCtrl ($timeout, $q) {
  var self = this;
  self.readonly = false;
  // Lists of fruit names and Vegetable objects
  self.fruitNames = ['Apple', 'Banana', 'Orange'];
  self.roFruitNames = angular.copy(self.fruitNames);
  self.tags = [];
  self.vegObjs = [
    {
      'name' : 'Broccoli',
      'type' : 'Brassica'
    },
    {
      'name' : 'Cabbage',
      'type' : 'Brassica'
    },
    {
      'name' : 'Carrot',
      'type' : 'Umbelliferous'
    }
  ];
  self.newVeg = function(chip) {
    return {
      name: chip,
      type: 'unknown'
    };
  };
}

function mtChipsContactChipDemoCtrl ($timeout, $q) {
  var self = this;
  self.querySearch = querySearch;
  self.allContacts = loadContacts();
  self.contacts = [self.allContacts[0]];
  self.filterSelected = true;
  /**
   * Search for contacts.
   */
  function querySearch (query) {
    var results = query ?
      self.allContacts.filter(createFilterFor(query)) : [];
    return results;
  }
  /**
   * Create filter function for a query string
   */
  function createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);
    return function filterFn(contact) {
      return (contact._lowername.indexOf(lowercaseQuery) != -1);;
    };
  }
  function loadContacts() {
    var contacts = [
      'Marina Augustine',
      'Oddr Sarno',
      'Nick Giannopoulos',
      'Narayana Garner',
      'Anita Gros',
      'Megan Smith',
      'Tsvetko Metzger',
      'Hector Simek',
      'Some-guy withalongalastaname'
    ];
    return contacts.map(function (c, index) {
      var cParts = c.split(' ');
      var contact = {
        name: c,
        email: cParts[0][0].toLowerCase() + '.' + cParts[1].toLowerCase() + '@example.com',
        image: 'http://lorempixel.com/50/50/people?' + index
      };
      contact._lowername = contact.name.toLowerCase();
      return contact;
    });
  }
}

function mtChipsCustomInputDemoCtrl ($timeout, $q) {
  var self = this;
  self.readonly = false;
  self.selectedItem = null;
  self.searchText = null;
  self.querySearch = querySearch;
  self.vegetables = loadVegetables();
  self.selectedVegetables = [];
  self.numberChips = [];
  self.numberChips2 = [];
  self.numberBuffer = '';
  /**
   * Search for vegetables.
   */
  function querySearch (query) {
    var results = query ? self.vegetables.filter(createFilterFor(query)) : [];
    return results;
  }
  /**
   * Create filter function for a query string
   */
  function createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);
    return function filterFn(vegetable) {
      return (vegetable._lowername.indexOf(lowercaseQuery) === 0) ||
        (vegetable._lowertype.indexOf(lowercaseQuery) === 0);
    };
  }
  function loadVegetables() {
    var veggies = [
      {
        'name': 'Broccoli',
        'type': 'Brassica'
      },
      {
        'name': 'Cabbage',
        'type': 'Brassica'
      },
      {
        'name': 'Carrot',
        'type': 'Umbelliferous'
      },
      {
        'name': 'Lettuce',
        'type': 'Composite'
      },
      {
        'name': 'Spinach',
        'type': 'Goosefoot'
      }
    ];
    return veggies.map(function (veg) {
      veg._lowername = veg.name.toLowerCase();
      veg._lowertype = veg.type.toLowerCase();
      return veg;
    });
  }
}

function mtChipsStaticDemoCtrl ($timeout, $q) {
  this.chipText = 'Football';
}




