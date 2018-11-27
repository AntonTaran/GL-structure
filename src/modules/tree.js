import * as dataTree from '../data/tree-data';
import {persons} from '../data/tree-data';

let margin = {
  top: 40,
  right: 120,
  bottom: 20,
  left: 120
};

let width = 1000;
let height = 1000;
let tree = d3
  .layout
  .tree()
  .size([height, width]);

let diagonal = d3.svg.diagonal()
  .projection(function (d) {
    return [d.x, d.y];
  });

let svg = d3.select('.chart-container').append('svg')
  .attr('width', width + margin.right + margin.left)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

/*Combine tree data*/
function combineChartData(persons) {
  return persons.map(function (element, i) {
    for (let j = i; j < persons.length; j++) {
      let element2 = persons[j];

      if (element.name === element2.parent) {
        element.children.push(element2);
      }
    }

    return element;
  });
}

function initTree() {
  let root = combineChartData(dataTree.persons)[0];

  update(root, null);
}

initTree();

function update(element) {
  let root = element;

//  let root = combineChartData(dataTree.persons)[0];

//  let {root, tree, diagonal, svg} = parameters;
  let index = 0;

  // Compute the new tree layout.
  let nodes = tree.nodes(root);
  let links = tree.links(nodes);

  let tileWidth = 200;
  let tileHeight = 70;

  const commonAxis = -tileWidth / 2;
  const avatarWidth = 50;
  const avatarHeight = 50;
  const avatarMargin = 5;
  const textGroupMargin = 5;
  const toggleButtonWidth = 20;
  const toggleButtonHeight = 20;

  const textGroupPosition = commonAxis + avatarWidth + avatarMargin + textGroupMargin;

  // Distance between nodes
  nodes.forEach((d) => d.y = d.depth * 200);

  // Declare the nodes…
  let node = svg
    .selectAll('g.node')
    .data(nodes, (d) => d.id || (d.id = ++index));

  // Enter the nodes.
  let nodeEnter = node.enter()
    .append('g')
    .attr('class', 'node')
    .attr('transform', (d) => 'translate(' + d.x + ',' + d.y + ')')
    .on('click', setEventOnNode);

  // Create member card
  nodeEnter.append('rect')
    .attr('x', commonAxis)
    .attr('y', 0)
    .attr('width', tileWidth)
    .attr('height', tileHeight)
    .style('fill', '#444');

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
    .duration(700)
    .attr("transform", function(d) {
      return "translate(" + root.x + "," + root.y + ")";
    });

  nodeUpdate.select("text")
    .style("fill-opacity", 1);

  // Init event on node
  nodeEnter.append('rect')
    .attr('class', 'toggle-btn')
    .attr('x', -toggleButtonWidth / 2)
    .attr('y', tileHeight - toggleButtonHeight)
    .attr('width', toggleButtonWidth)
    .attr('height', toggleButtonHeight)
    .style('fill', 'white');

//  let toggleButton = svg.selectAll('.toggle-btn').on('click', setEventOnNode);

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

  // Update the links…
  // Enter any new links at the parent's previous position.
  link.enter().insert('path', 'g')
    .attr('class', 'link')
    .attr('d', diagonal);

  // Transition links to their new position.
  link.transition()
    .duration(700)
    .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
//  link.exit().transition()
//    .duration(700)
//    .attr("d", function(d) {
//      var o = {x: root.x, y: root.y};
//      return diagonal({root: o, target: o});
//    })
//    .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });

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
}

/*Add event on node*/
function setEventOnNode(element) {

  if (element.children) {
    element._children = element.children;
    element.children = null;
  } else {
    element.children = element._children;
    element._children = null;
  }
//  combineChartData(persons);
  update(element);
}