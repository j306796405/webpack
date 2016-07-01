/**
 * FileName header
 * Date 2016-07-01
 * Created by jianglinj
 */
require('lib/jquery.autocompleter.js');

var data = [
    { "value": "1", "label": "one" },
    { "value": "2", "label": "two" },
    { "value": "3", "label": "three" }
];
$('#l-search').autocompleter({ source: data });