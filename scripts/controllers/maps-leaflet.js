'use strict';

app
  .controller('LeafletMapCtrl', function ($scope) {

    $scope.page = {
      title: 'Leaflet Maps',
      subtitle: 'Place subtitle here...'
    };

  })

  .controller("leafletMap1", [ "$scope", function($scope) {

  }])

  .controller("leafletMap2", [ "$scope", function($scope) {
    angular.extend($scope, {
      autodiscover: {
        autoDiscover: true
      }
    });
  }])

  .controller("leafletMap3", [ "$scope", "leafletData", function($scope, leafletData) {

    L.Icon.Default.imagePath = 'styles/images';

    angular.extend($scope, {
      london: {
        lat: 51.505,
        lng: -0.09,
        zoom: 4
      },
      controls: {
        draw: {}
      },
      layers: {
        baselayers: {
          mapbox_light: {
            name: 'Mapbox Light',
            url: 'http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
            type: 'xyz',
            layerOptions: {
              apikey: 'pk.eyJ1IjoiYnVmYW51dm9scyIsImEiOiJLSURpX0pnIn0.2_9NrLz1U9bpwMQBhVk97Q',
              mapid: 'bufanuvols.lia22g09'
            },
            layerParams: {
              showOnSelector: false
            }
          }
        },
        overlays: {
          draw: {
            name: 'draw',
            type: 'group',
            visible: true,
            layerParams: {
              showOnSelector: false
            }
          }
        }
      }
    });


    leafletData.getMap("map3").then(function(map) {
      leafletData.getLayers("map3").then(function(baselayers) {
        var drawnItems = baselayers.overlays.draw;
        map.on('draw:created', function (e) {
          var layer = e.layer;
          drawnItems.addLayer(layer);
          console.log(JSON.stringify(layer.toGeoJSON()));
        });
      });
    });
  }])

  .controller("leafletMap4", [ "$scope", function($scope) {

    angular.extend($scope, {
      berlin: {
        lat: 52.52,
        lng: 13.40,
        zoom: 14
      },
      markers: {
        m1: {
          lat: 52.52,
          lng: 13.40
        }
      },
      layers: {
        baselayers: {
          googleTerrain: {
            name: 'Google Terrain',
            layerType: 'TERRAIN',
            type: 'google'
          },
          googleHybrid: {
            name: 'Google Hybrid',
            layerType: 'HYBRID',
            type: 'google'
          },
          googleRoadmap: {
            name: 'Google Streets',
            layerType: 'ROADMAP',
            type: 'google'
          }
        }
      }
    });

  }])

  .controller("leafletMap5", ["$scope", "$http", function($scope, $http) {

    var points = [];
    var heatmap = {
      name: 'Heat Map',
      type: 'heat',
      data: points,
      visible: true
    };

    $http.get("scripts/jsons/heat-points.json").success(function(data) {
      $scope.layers.overlays = {
        heat: {
          name: 'Heat Map',
          type: 'heat',
          data: data,
          layerOptions: {
            radius: 20,
            blur: 10
          },
          visible: true
        }
      };
    });

    angular.extend($scope, {
      center: {
        lat: 37.774546,
        lng: -122.433523,
        zoom: 12
      },
      layers: {
        baselayers: {
          mapbox_light: {
            name: 'Mapbox Light',
            url: 'http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
            type: 'xyz',
            layerOptions: {
              apikey: 'pk.eyJ1IjoiYnVmYW51dm9scyIsImEiOiJLSURpX0pnIn0.2_9NrLz1U9bpwMQBhVk97Q',
              mapid: 'bufanuvols.lia22g09'
            }
          }
        }
      }
    });
  }]);
