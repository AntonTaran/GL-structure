console.log('dcdscds');
import * as dataTree from '../data/tree-data';

let persons = dataTree.persons;
let newPersons = [];

for (let i = 0; i < persons.length; i++) {
  let element = persons[i];

  for (let j = i; j < persons.length; j++) {
    let element2 = persons[j];
    if (element.name === element2.parent) {
      element.children.push(element2);
    }
  }

  newPersons.push(element);
}

var treeData = persons;

// ************** Generate the tree diagram	 *****************

function initTree() {
  var margin = {
    top: 40,
    right: 120,
    bottom: 20,
    left: 120
  };

  var width = 1000;
  var height = 1000;

  var tree = d3
    .layout
    .tree()
    .size([height, width]);

  var diagonal = d3.svg.diagonal()
    .projection(function (d) {
      return [d.x, d.y];
    });

  var svg = d3.select('.chart-container').append('svg')
    .attr('width', width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  var root = treeData[0];

  update({root, tree, diagonal, svg});
}

initTree();

function update(parameters) {
  let {root, tree, diagonal, svg} = parameters;
  let index = 0;

  // Compute the new tree layout.
  let nodes = tree.nodes(root);
  let links = tree.links(nodes);

  // Distance between nodes
  nodes.forEach(function (d) {
    d.y = d.depth * 200;
  });

  // Declare the nodes…
  let node = svg.selectAll('g.node')
    .data(nodes, function (d) {
      return d.id || (d.id = ++index);
    });

  // Enter the nodes.
  let nodeEnter = node.enter().append('g')
    .attr('class', 'node')
    .attr('transform', function (d) {
      return 'translate(' + d.x + ',' + d.y + ')';
    });

//  nodeEnter.html('<div>some</div>');

  let tileWidth = 200;
  let tileHeight = 70;
  const commonAxis = -tileWidth / 2;
  const avatarWidth = 50;
  const avatarHeight = 50;
  const avatarMargin = 5;
  const textGroupMargin = 5;
  const avatarPosition = {
    x: commonAxis + 25,
    y: avatarHeight / 2,
  };

  const textGroupPosition = commonAxis + avatarWidth + avatarMargin + textGroupMargin;

  // Create member card
  nodeEnter.append('rect')
    .attr('x', commonAxis)
    .attr('y', 0)
    .attr('width', tileWidth)
    .attr('height', tileHeight)
    .style('fill', '#444');

  // Create avatar
//  nodeEnter.append('image')
//    .attr('x', -tileWidth / 2)
//    .attr('y', 0)
//    .attr('width', tileWidth)
//    .attr('height', tileHeight)
//    .style('fill', '#444');

//  nodeEnter.append('text')
//    .attr('y', function (d) {
//      return 12; // If child exist change title position
//    })
//    .attr('dy', '.35em')
//    .attr('text-anchor', 'middle')
//    .text(function (d) {
//      return d.name;
//    })
//    .style({'fill-opacity': 1, 'fill': '#fff'});

  let infoNode = nodeEnter.append('g')
    .attr('class', 'person-info')
    .attr('transform', function (d) {
      return 'translate(' + textGroupPosition + ',' + 0 + ')';
    });

  infoNode.append('a')
    .attr("xlink:href", "http://en.wikipedia.org/wiki")
    .attr("target", "_blank")
    .append('text')
    .attr('x', 0)
    .attr('y', 12)
    .attr('dy', '.35em')
    .text(function (d) {
      return d.name;
    })
    .style({'fill-opacity': 1, 'fill': '#fff'});

  infoNode.append('a')
    .attr("xlink:href", "http://en.wikipedia.org/wiki")
    .attr("target", "_blank")
    .append('text')
    .attr('x', 0)
    .attr('y', 32)
    .attr('dy', '.35em')
    .text(function (d) {
      return d.name;
    })
    .style({'fill-opacity': 1, 'fill': '#fff'});

  // Declare the links…
  let link = svg.selectAll('path.link')
    .data(links, function (d) {
      return d.target.id;
    });

//  let avatar = nodeEnter.append("svg:pattern")
//    .attr("id", "grump_avatar")
//    .attr("width", 50)
//    .attr("height", 50)
//    .attr("cx", 0)
//    .attr("cy", 0)
//    .attr("patternUnits", "userSpaceOnUse")
//    .append("svg:image")
//    .attr("xlink:href", 'https://glo-assets.globallogic.com/system/data/66370/profile/me.jpeg?1535720328')
//    .attr("width", 50)
//    .attr("height", 50)
//    .attr("cx", 0)
//    .attr("cy", 0);
//
//  let circle = nodeEnter.append("circle")
//    .attr("transform", "translate(" + 0 + "," + 0 + ")")
//    .attr("cx", avatarPosition.x + avatarMargin)
//    .attr("cy", avatarPosition.y + avatarMargin)
//    .attr("r", 50 / 2)
//    .style("fill", "#fff")
//    .style("fill", "url(#grump_avatar");

//  nodeEnter.append("circle")
//    .attr("transform", "translate(" + 0 + "," + 0 + ")")
//    .attr("cx", avatarPosition.x + avatarMargin)
//    .attr("cy", avatarPosition.y + avatarMargin)
//    .attr("r", avatarWidth / 2)
//    .style("fill", "#fff");

  /*
  * Avatar
  * */
  let avatar = nodeEnter.append('a')
    .attr("xlink:href", "http://en.wikipedia.org/wiki")
    .attr("target", "_blank");

  avatar.append('svg:image')
    .attr({
      'xlink:href': 'https://glo-assets.globallogic.com/system/data/66370/profile/me.jpeg?1535720328',  // can also add svg file here
      x: commonAxis + 5,
      y: avatarMargin,
      width: avatarWidth,
      height: avatarHeight
    });

  /*
  * End Avatar
  * */

  // Enter the links.
  link.enter().insert('path', 'g')
    .attr('class', 'link')
    .attr('d', diagonal);

}