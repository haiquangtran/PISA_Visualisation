'use strict';

/**
 * @ngdoc service
 * @name pisaVisualisationApp.fileService
 * @description
 * # fileService
 * Factory in the pisaVisualisationApp.
 */
angular.module('pisaVisualisationApp')
  .factory('fileService', function ($http, $q) {
    var dir = "data/";

    /* Load Data from Files */

    function loadFileMiserables() {
      return $http.get(dir + 'miserables.json');
    };

    function loadFileHeatMap() {
      return $http.get(dir + 'pm25.json');
    }

    function loadFileRaw() {
      return $http.get(dir + 'raw_data.csv');
    }

    /* Get the name of CSV files */

    function getFileNameRaw() {
      return dir + "raw_data.csv";
    }

    function getFileNameParents() {
      return dir + "parent_answers.csv";
    }

    function getFileNameStudents() {
      return dir + "students_answers.csv";
    }

    function getFileNameParentsExpectations() {
      return dir + "parents_expectations.csv";
    }

    // Public API here
    return {
      getForceMapData: loadFileMiserables(),
      getHeatMapData: loadFileHeatMap(),
      getStackedBarData: loadFileRaw(),
      getRawFileName: getFileNameRaw(),
      getStudentsFileName: getFileNameStudents(),
      getParentsFileName: getFileNameParents(),
      getParentsExpectationsFileName: getFileNameParentsExpectations()
    };
  });

