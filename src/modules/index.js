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
    image: "./src/assets/image/Nataliya.jpeg",
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
        image: "./src/assets/image/Nataliya.jpeg",
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
            image: "./src/assets/image/Nataliya.jpeg",
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
            image: "./src/assets/image/Nataliya.jpeg",
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
            image: "./src/assets/image/Nataliya.jpeg",
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
            image: "./src/assets/image/Nataliya.jpeg",
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
            image: "./src/assets/image/Nataliya.jpeg",
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
            image: "./src/assets/image/Nataliya.jpeg",
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
            image: "./src/assets/image/Nataliya.jpeg",
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
        image: "./src/assets/image/Nataliya.jpeg",
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
            image: "./src/assets/image/Nataliya.jpeg",
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
        image: "./src/assets/image/Nataliya.jpeg",
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
            image: "./src/assets/image/Nataliya.jpeg",
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
            image: "./src/assets/image/Nataliya.jpeg",
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
            image: "./src/assets/image/Nataliya.jpeg",
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
        image: "./src/assets/image/Nataliya.jpeg",
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
            image: "./src/assets/image/Nataliya.jpeg",
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
            image: "./src/assets/image/Nataliya.jpeg",
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
            image: "./src/assets/image/Nataliya.jpeg",
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
            image: "./src/assets/image/Nataliya.jpeg",
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
        image: "./src/assets/image/Nataliya.jpeg",
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
            image: "./src/assets/image/Nataliya.jpeg",
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
            image: "./src/assets/image/Nataliya.jpeg",
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
            image: "./src/assets/image/Nataliya.jpeg",
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
            image: "./src/assets/image/Nataliya.jpeg",
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
        image: "./src/assets/image/Nataliya.jpeg",
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
            image: "./src/assets/image/Nataliya.jpeg",
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
            image: "./src/assets/image/Nataliya.jpeg",
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
            image: "./src/assets/image/Nataliya.jpeg",
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
            image: "./src/assets/image/Nataliya.jpeg",
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
            image: "./src/assets/image/Nataliya.jpeg",
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
