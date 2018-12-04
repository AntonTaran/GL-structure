import '../assets/scss/index.scss';

//var css = require('../assets/styles/index.css');

var svg1 = document.getElementsByTagName('svg');
var wrapper = document.querySelector('#collapsable-example');
var container = document.querySelector('.container');

var tree;

function foo2() {
  var scale = 0;

  return function () {
    scale = scale + (1 / 10);
    return scale;
  }
}

var counter = foo2();
var currentZoom;
function scaleOnCollapse(x) {
  console.log(Array.from(svg1)[0].getBoundingClientRect().right);
  console.log(container.clientWidth);

  if (Array.from(svg1)[0].getBoundingClientRect().right > container.clientWidth) {
    currentZoom = 1 - counter();
    wrapper.style.transform = `scale(${1 - counter()})`;
  }
}

function onChangeZoom() {

}

var chart_config = {
  chart: {
    container: "#collapsable-example",
    animateOnInit: true,
    callback: {
      onToggleCollapseFinished: function (e) {

//        scaleOnCollapse(e.X);
      },
    },
    node: {
      collapsable: true
    },
    levelSeparation: 30,
    siblingSeparation: 10,
    subTeeSeparation: 15,
    nodeAlign: 'LEFT',
    connectors: {
      type: 'step',
      style: {
        'stroke': 'grey',
//        'arrow-end': {string},
//        'cursor': {string},
//        'fill': {string},
////'fill-opacity': {0.5},
//        'opacity': {number},
//        'stroke': {string},
//        'stroke-dasharray': {string},
//        'stroke-linecap': {string},
//        'stroke-opacity': {number},
        'stroke-width': 4,
      }
    },
    animation: {
      nodeAnimation: "linear ",
      nodeSpeed: 500,
      connectorsAnimation: "linear",
      connectorsSpeed: 100
    }
  },
  nodeStructure: {
    image: "../assets/image/Nataliya.j",
    text: {
      desc: 'i',
      name: {
        val: "Nataliya Siromakha",
        href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
        target: "_blank"
      },
      nodeAlign: 'BOTTOM',
    },
    children: [
      {
        image: "../assets/image/Nataliya.j",
        text: {
          desc: 'i',
          name: {
            val: "Iulia Izonina",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          },
        },
//        stackChildren: true,
//        childrenDropLevel: 2,
        collapsed: true,
        children: [
          {
            image: "../assets/image/Nataliya.j",
            text: {
              desc: 'i',
              name: {
                val: "Some longnameeeeeee",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            stackChildren: true,
            children: [{}]
          },
          {
            image: "../assets/image/Nataliya.j",
            text: {
              desc: 'i',
              name: {
                val: "Iulia Izonina",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            stackChildren: true,
            children: [{}, {}]
          },
          {
            image: "../assets/image/Nataliya.j",
            text: {
              desc: 'i',
              name: {
                val: "Iulia Izonina",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            children: [{}]
          },
          {
            image: "../assets/image/Nataliya.j",
            text: {
              desc: 'i',
              name: {
                val: "Iulia Izonina",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            children: [{}]
          },
          {
            image: "../assets/image/Nataliya.j",
            text: {
              desc: 'i',
              name: {
                val: "Iulia Izonina",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            children: [{}]
          },
          {
            image: "../assets/image/Nataliya.j",
            text: {
              desc: 'i',
              name: {
                val: "Iulia Izonina",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            children: [{}, {}]
          },
          {
            image: "../assets/image/Nataliya.j",
            text: {
              desc: 'i',
              name: {
                val: "Iuldcdscsia Izonina",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
          },
        ]
      },
      {
        image: "../assets/image/Nataliya.j",
        text: {
          desc: 'i',
          name: {
            val: "Igor Rudko",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          },
        },
        stackChildren: true,
        collapsed: true,
        children: [
          {
            image: "../assets/image/Nataliya.j",
            text: {
              desc: 'i',
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            stackChildren: true,
            drawLineThrough: true
          },
        ]
      },
      {
        image: "../assets/image/Nataliya.j",
        text: {
          desc: 'i',
          name: {
            val: "Viktor Matusov",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          },
        },
        stackChildren: true,
        drawLineThrough: true,
        collapsed: true,
        children: [
          {
            image: "../assets/image/Nataliya.j",
            text: {
              desc: 'i',
              name: {
                val: "Alexander Lanin",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            stackChildren: true,
            drawLineThrough: true,
            children: [
              {}
            ]
          },
          {
            image: "../assets/image/Nataliya.j",
            text: {
              desc: 'i',
              name: {
                val: "Vitalii Litvin",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            }
          },
          {
            image: "../assets/image/Nataliya.j",
            text: {
              desc: 'i',
              name: {
                val: "Vitalii Tilinskii",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            }
          },
        ]
      },
      {
        image: "../assets/image/Nataliya.j",
        text: {
          desc: 'i',
          name: {
            val: "Yevgenii Kolometskiy",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          },
        },
        stackChildren: true,
        collapsed: true,
        children: [
          {
            image: "../assets/image/Nataliya.j",
            text: {
              desc: 'i',
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            stackChildren: true,
            drawLineThrough: true
          },
          {
            image: "../assets/image/Nataliya.j",
            text: {
              desc: 'i',
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            stackChildren: true,
            drawLineThrough: true
          },
          {
            image: "../assets/image/Nataliya.j",
            text: {
              desc: 'i',
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            stackChildren: true,
            drawLineThrough: true
          },
          {
            image: "../assets/image/Nataliya.j",
            text: {
              desc: 'i',
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            stackChildren: true,
            drawLineThrough: true,
            children: [{
              children: [{}]
            }]
          },
        ]
      },
      {
        image: "../assets/image/Nataliya.j",
        text: {
          desc: 'i',
          name: {
            val: "Dmytro Levitskiy (US)",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          },
        },
        stackChildren: true,
        collapsed: true,
        children: [
          {
            image: "../assets/image/Nataliya.j",
            text: {
              desc: 'i',
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            stackChildren: true,
            drawLineThrough: true
          },
          {
            image: "../assets/image/Nataliya.j",
            text: {
              desc: 'i',
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            stackChildren: true,
            drawLineThrough: true
          },
          {
            image: "../assets/image/Nataliya.j",
            text: {
              desc: 'i',
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            stackChildren: true,
            drawLineThrough: true
          },
          {
            image: "../assets/image/Nataliya.j",
            text: {
              desc: 'i',
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            stackChildren: true,
            drawLineThrough: true,
          },
        ]
      },
      {
        image: "../assets/image/Nataliya.j",
        text: {
          desc: 'i',
          name: {
            val: "Denys Bratchuk",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          },
        },
        stackChildren: true,
        collapsed: true,
        children: [
          {
            image: "../assets/image/Nataliya.j",
            text: {
              desc: 'i',
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            stackChildren: true,
            drawLineThrough: true
          },
          {
            image: "../assets/image/Nataliya.j",
            text: {
              desc: 'i',
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            stackChildren: true,
            drawLineThrough: true
          },
          {
            image: "../assets/image/Nataliya.j",
            text: {
              desc: 'i',
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            stackChildren: true,
            drawLineThrough: true
          },
          {
            image: "../assets/image/Nataliya.jpeg",
            text: {
              desc: 'i',
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            stackChildren: true,
            drawLineThrough: true,
            children: [{}]
          },
          {
            image: "../assets/image/Nataliya.j",
            text: {
              desc: 'i',
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            stackChildren: true,
            children: [{}]
          },
        ]
      },
    ]
  }
};

tree = new Treant(chart_config);

//import * as dataTree from '../data/test-tree-data';
import * as dataTree from '../data/tree-data';
//import {persons} from '../data/tree-data';

// Const params
const margin = {
  top: 40,
  right: 120,
  bottom: 20,
  left: 120
};

//const tableData = [dataTree.root];
const tableData = dataTree.persons;

let root = combineChartData(tableData)[0];

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
console.log('cdscdscdscs');

const width = 960 - margin.right - margin.left;
const height = 1800 - margin.top - margin.bottom;
const tree = d3.layout.tree().nodeSize([200, 70]);

const tileWidth = 200;
const tileHeight = 70;
const commonAxis = -tileWidth / 2;
const avatar = {
  width: 50,
  height: 50,
  margin: 5,
};
const textGroupMargin = 5;
const toggleButton = {
  width: 10,
  height: 10,
  margin: 5,
};
const textGroupPosition = commonAxis + avatar.width + avatar.margin + textGroupMargin;

let diagonal = d3.svg.diagonal()
  .projection(function (d) {
    return [d.x + tileWidth / 2, d.y + tileHeight / 2];
  });

var zm;

//let svg = d3.select('.chart-container').append('svg')
//  .attr('width', width + margin.right + margin.left)
//  .attr('height', height + margin.top + margin.bottom)
//  .append('g')
//  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
//  .style("height", "800px");

var svg = d3.select(".chart-container").append("svg").attr("width", 1000).attr("height", 1000)
  .call(zm = d3.behavior.zoom().scaleExtent([1, 3]).on("zoom", redraw)).append("g")
  .attr("transform", "translate(" + 350 + "," + 20 + ")");

root.x0 = 0;
root.y0 = height / 2;

function collapse(d) {
  if (d.children) {
    d._children = d.children;
    d._children.forEach(collapse);
    d.children = null;
  }
}

root.children.forEach(collapse);
//update(root);

// Update the nodes…
function updateNodes(nodes) {
  let index = 0;
  let node = svg
    .selectAll('g.node')
    .data(nodes, (d) => d.id || (d.id = ++index));

  return node;
}

// Enter any new nodes at the parent's previous position.
function nodeEnterAtParentsPosition(node) {
  let nodeEnter = node.enter()
    .append('g')
    .attr('class', 'node')
    .attr('id', (element) => 'node-' + element.id)
    .attr('transform', (element) => 'translate(' + element.x + ',' + element.y + ')')
    .on('click', setEventOnNode);

  nodeEnter.append("rect")
    .attr("width", rectW)
    .attr("height", rectH)
    .attr("stroke", "black")
    .attr("stroke-width", 1)
    .style("fill", function (d) {
      return d._children ? "lightsteelblue" : "#fff";
    });

  nodeEnter.append("text")
    .attr("x", rectW / 2)
    .attr("y", rectH / 2)
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .text(function (d) {
      return d.name;
    });

  return nodeEnter;
}

// Create person card
function createPersonCard(nodeEnter) {
  nodeEnter.append('rect')
    .attr('x', commonAxis)
    .attr('y', 0)
    .attr('width', tileWidth)
    .attr('height', tileHeight)
    .style('fill', '#444');

//  let infoNode = nodeEnter.append('g')
//    .attr('class', 'person-info')
//    .attr('transform', function (d) {
//      return 'translate(' + textGroupPosition + ',' + 0 + ')';
//    });
//
//  infoNode.append('a')
//    .attr("xlink:href", "http://en.wikipedia.org/wiki")
//    .attr("target", "_blank")
//    .append('text')
//    .attr('x', 0)
//    .attr('y', 12)
//    .attr('dy', '.35em')
//    .text(function (d) {
//      return d.name;
//    })
//    .style({'fill-opacity': 1, 'fill': '#fff'});
//
//  infoNode.append('a')
//    .attr("xlink:href", "http://en.wikipedia.org/wiki")
//    .attr("target", "_blank")
//    .append('text')
//    .attr('x', 0)
//    .attr('y', 32)
//    .attr('dy', '.35em')
//    .text(function (d) {
//      return d.name;
//    })
//    .style({'fill-opacity': 1, 'fill': '#fff'});
}

// Create avatar
function createAvatar(nodeEnter) {
  let avatarNode = nodeEnter.append('a')
    .attr("xlink:href", "http://en.wikipedia.org/wiki")
    .attr("target", "_blank");

  avatarNode.append('svg:image')
    .attr({
      'xlink:href': 'https://glo-assets.globallogic.com/system/data/66370/profile/me.jpeg?1535720328',  // can also add svg file here
      x: commonAxis + 5,
      y: avatar.margin,
      width: avatar.width,
      height: avatar.height
    });
}

// Transition nodes to their new position.
function nodeUpdate(node) {
  let nodeUpdate = node.transition()
    .duration(400)
    .attr("transform", function (d) {
      return "translate(" + d.x + "," + d.y + ")";
    });

  nodeUpdate.select("rect")
    .attr("width", tileWidth)
    .attr("height", tileHeight)
    .attr("stroke", "black")
    .attr("stroke-width", 1)
    .style("fill", function (d) {
      return d._children ? "lightsteelblue" : "#444";
    });

  nodeUpdate.select("text")
    .style("fill-opacity", 1);
}

// Create toggle button
function createToggleButton(nodeEnter) {
  nodeEnter.append('rect')
    .attr('class', 'toggle-btn')
    .attr('x', -toggleButton.width / 2)
    .attr('y', tileHeight - toggleButton.height - toggleButton.margin)
    .attr('width', toggleButton.width)
    .attr('height', toggleButton.height)
    .style('fill', 'white');
}

function createLink(links, source) {
  let link = svg.selectAll('path.link')
    .data(links, function (d) {
      return d.target.id;
    });

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
    .duration(400)
    .attr("d", function (d) {
      var o = {
        x: source.x,
        y: source.y
      };
      return diagonal({
        source: o,
        target: o
      });
    })
    .remove();

  return link;
}

// Enter any new links at the parent's previous position.
function enterLinkAtParentPosition(link, source) {
  link.enter().insert("path", "g")
    .attr("class", "link")
    .attr("x", tileWidth / 2)
    .attr("y", tileHeight / 2)
    .attr("d", function (d) {
      let o = {
        x: source.x0,
        y: source.y0
      };
      return diagonal({
        source: o,
        target: o
      });
    });
}
// Transition links to their new position.
function transitionLinkToNewPosition(link) {
  link.transition()
    .duration(700)
    .attr("d", diagonal);
}

// Stash the old positions for transition.
function stashOldPositionsForTransition(nodes) {
  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}

function update(source) {
  // Compute the new tree layout.
  let nodes = tree.nodes(source).reverse();
  let links = tree.links(nodes);

  // Distance between nodes
   nodes.forEach((d) => d.y = d.depth * 200);

  // Update the nodes…
  let node = updateNodes(nodes);
  // Enter any new nodes at the parent's previous position.
  let nodeEnter = nodeEnterAtParentsPosition(node);

  // Create person card
  createPersonCard(nodeEnter);
  createAvatar(nodeEnter);

  // Create toggle button
  createToggleButton(nodeEnter);
  // Transition nodes to their new position.
  nodeUpdate(node);

  // Create the links…
  let link = createLink(links, source);
  // Enter any new links at the parent's previous position.
  enterLinkAtParentPosition(link, source);
  // Transition links to their new position.
  transitionLinkToNewPosition(link);
  // Stash the old positions for transition.
  stashOldPositionsForTransition(nodes);
}

// Toggle children on click.
function setEventOnNode(element) {
  if (element.children) {
    element._children = element.children;
    element.children = null;
  } else {
    element.children = element._children;
    element._children = null;
  }
  update(element);
}

/*Collapse node*/
function collapseNode(element, node, nodeEnter) {
  let children = element.children;
//  console.log(nodeEnter);
  let targetId = `#node-${element.id}`;
  svg.select(targetId).transition()
    .duration(700)
    .attr('transform', function (d) {
      return 'translate(' + 0 + ',' + 0 + ')';
    });


  children.forEach(function (item) {
    item.x = element.x;
    item.y = element.y;

    node[0].forEach((e)=> {

    });
  });
}

//Redraw for zoom
function redraw() {
  //console.log("here", d3.event.translate, d3.event.scale);
  svg.attr("transform",
    "translate(" + d3.event.translate + ")"
    + " scale(" + d3.event.scale + ")");
}