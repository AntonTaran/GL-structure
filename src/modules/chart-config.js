let some = {
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
    HTMLclass: 'person-tile',
//    HTMLid: 'cdsc',
    additionalInfo: {},

    text: {
      name: {

        href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
        target: "_blank"
      },
      nodeAlign: 'BOTTOM',
    },
    children: [
      {
        image: "./src/assets/image/Nataliya.jpeg",
        HTMLclass: 'person-tile',
        text: {
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
            HTMLclass: 'person-tile',
            text: {
              name: {
                val: "Some longnameeeeeee",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            stackChildren: true,
            children: [{
              image: "./src/assets/image/Nataliya.jpeg",
              HTMLclass: 'person-tile',
              text: {
                name: {
                  val: "Iulia Izonina",
                  href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                  target: "_blank"
                },
              },
//        stackChildren: true,
//        childrenDropLevel: 2,
              collapsed: true,
            }]
          },
          {
            image: "./src/assets/image/Nataliya.jpeg",
            HTMLclass: 'person-tile',
            text: {
              name: {
                val: "Iulia Izonina",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            stackChildren: true,
            children: [
              {
                image: "./src/assets/image/Nataliya.jpeg",
                HTMLclass: 'person-tile',
                text: {
                  name: {
                    val: "Iulia Izonina",
                    href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                    target: "_blank"
                  },
                },
              },
              {
                image: "./src/assets/image/Nataliya.jpeg",
                HTMLclass: 'person-tile',
                text: {
                  name: {
                    val: "Iulia Izonina",
                    href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                    target: "_blank"
                  },
                },
              }
            ]
          },
          {
            image: "./src/assets/image/Nataliya.jpeg",
            HTMLclass: 'person-tile',
            text: {
              name: {
                val: "Iulia Izonina",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            children: [{
              image: "./src/assets/image/Nataliya.jpeg",
              HTMLclass: 'person-tile',
              text: {
                name: {
                  val: "Iulia Izonina",
                  href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                  target: "_blank"
                },
              },
//        stackChildren: true,
//        childrenDropLevel: 2,
              collapsed: true,
            }]
          },
          {
            image: "./src/assets/image/Nataliya.jpeg",
            HTMLclass: 'person-tile',
            text: {
              name: {
                val: "Iulia Izonina",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            children: [{
              image: "./src/assets/image/Nataliya.jpeg",
              HTMLclass: 'person-tile',
              text: {
                name: {
                  val: "Iulia Izonina",
                  href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                  target: "_blank"
                },
              },
//        stackChildren: true,
//        childrenDropLevel: 2,
              collapsed: true,
            }]
          },
          {
            image: "./src/assets/image/Nataliya.jpeg",
            HTMLclass: 'person-tile',
            text: {
              name: {
                val: "Iulia Izonina",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            children: [{
              image: "./src/assets/image/Nataliya.jpeg",
              HTMLclass: 'person-tile',
              text: {
                name: {
                  val: "Iulia Izonina",
                  href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                  target: "_blank"
                },
              },
//        stackChildren: true,
//        childrenDropLevel: 2,
              collapsed: true,
            }]
          },
          {
            image: "./src/assets/image/Nataliya.jpeg",
            HTMLclass: 'person-tile',
            text: {
              name: {
                val: "Iulia Izonina",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            children: [
              {
                image: "./src/assets/image/Nataliya.jpeg",
                HTMLclass: 'person-tile',
                text: {
                  name: {
                    val: "Iulia Izonina",
                    href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                    target: "_blank"
                  },
                },
//        stackChildren: true,
//        childrenDropLevel: 2,
                collapsed: true,
              },
              {
                image: "./src/assets/image/Nataliya.jpeg",
                HTMLclass: 'person-tile',
                text: {
                  name: {
                    val: "Iulia Izonina",
                    href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                    target: "_blank"
                  },
                },
//        stackChildren: true,
//        childrenDropLevel: 2,
                collapsed: true,
              }
            ]
          },
          {
            image: "./src/assets/image/Nataliya.jpeg",
            HTMLclass: 'person-tile',
            text: {
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
        HTMLclass: 'person-tile',
        text: {
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
            HTMLclass: 'person-tile',
            text: {
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
        HTMLclass: 'person-tile',
        text: {
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
            HTMLclass: 'person-tile',
            text: {
              name: {
                val: "Alexander Lanin",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            stackChildren: true,
            drawLineThrough: true,
            children: [
              {
                image: "./src/assets/image/Nataliya.jpeg",
                HTMLclass: 'person-tile',
                text: {
                  name: {
                    val: "Iulia Izonina",
                    href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                    target: "_blank"
                  },
                },
//        stackChildren: true,
//        childrenDropLevel: 2,
                collapsed: true,
              }
            ]
          },
          {
            image: "./src/assets/image/Nataliya.jpeg",
            HTMLclass: 'person-tile',
            text: {
              name: {
                val: "Vitalii Litvin",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            }
          },
          {
            image: "./src/assets/image/Nataliya.jpeg",
            HTMLclass: 'person-tile',
            text: {
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
        HTMLclass: 'person-tile',
        text: {
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
            HTMLclass: 'person-tile',
            text: {
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
            HTMLclass: 'person-tile',
            text: {
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
            HTMLclass: 'person-tile',
            text: {
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
            HTMLclass: 'person-tile',
            text: {
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            stackChildren: true,
            drawLineThrough: true,
            children: [{
              image: "./src/assets/image/Nataliya.jpeg",
              HTMLclass: 'person-tile',
              text: {
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
                  HTMLclass: 'person-tile',
                  text: {
                    name: {
                      val: "Iulia Izonina",
                      href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                      target: "_blank"
                    },
                  },
//        stackChildren: true,
//        childrenDropLevel: 2,
                  collapsed: true,
                }
              ]
            }]
          },
        ]
      },
      {
        image: "./src/assets/image/Nataliya.jpeg",
        HTMLclass: 'person-tile',
        text: {
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
            HTMLclass: 'person-tile',
            text: {
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
            HTMLclass: 'person-tile',
            text: {
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
            HTMLclass: 'person-tile',
            text: {
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
            HTMLclass: 'person-tile',
            text: {
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
        HTMLclass: 'person-tile',
        text: {
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
            HTMLclass: 'person-tile',
            text: {
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
            HTMLclass: 'person-tile',
            text: {
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
            HTMLclass: 'person-tile',
            text: {
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
            HTMLclass: 'person-tile',
            text: {
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            stackChildren: true,
            drawLineThrough: true,
            children: [{
              image: "./src/assets/image/Nataliya.jpeg",
              HTMLclass: 'person-tile',
              text: {
                name: {
                  val: "Iulia Izonina",
                  href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                  target: "_blank"
                },
              },
//        stackChildren: true,
//        childrenDropLevel: 2,
              collapsed: true,
            }]
          },
          {
            image: "./src/assets/image/Nataliya.jpeg",
            HTMLclass: 'person-tile',
            text: {
              name: {
                val: "Liliya Kondratieva",
                href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
                target: "_blank"
              },
            },
            stackChildren: true,
//            children: [{
//              HTMLclass: 'person-tile',
//            }]
          },
        ]
      },
    ]
  }
};

let config, parent_n, ch_1, ch_2, ch_3, ch_4;

let chart = [
  config = {
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
  parent_n = {
    image: "./src/assets/image/Nataliya.jpeg",
    HTMLclass: 'person-tile',
    additionalInfo: {
      post: 'Director',
      projects: [
        {name: 'Hilti', url: '#'},
        {name: 'Rimage', url: '#'}
      ],
    },
    text: {
      name: "Nataliya Siromakha",
      nodeAlign: 'BOTTOM',
    },
  },
  ch_1 = {
    parent: parent_n,
    image: "./src/assets/image/Nataliya.jpeg",
    HTMLclass: 'person-tile',
    additionalInfo: {
      post: 'Manager',
      projects: [
        {name: 'Medavant', url: '#'},
        {name: 'Some else', url: '#'}
      ],
    },
    text: {
      name: "Iulia Izonina",
      nodeAlign: 'BOTTOM',
    },
  },
  ch_2 = {
    parent: parent_n,
    image: "./src/assets/image/Nataliya.jpeg",
    HTMLclass: 'person-tile',
    additionalInfo: {
      post: 'God',
      projects: [
        {name: 'Sofos', url: '#'},
        {name: 'Rimage', url: '#'}
      ],
    },
    text: {
      name: "Igor Rudko",
      nodeAlign: 'BOTTOM',
    },
    stackChildren: true,
  },
  ch_3 = {
    parent: parent_n,
    image: "./src/assets/image/Nataliya.jpeg",
    HTMLclass: 'person-tile',
    additionalInfo: {
      post: 'God',
      projects: [
        {name: 'Sofos', url: '#'},
        {name: 'Rimage', url: '#'}
      ],
    },
    text: {
      name: "Nataliya Siromakha",
      nodeAlign: 'BOTTOM',
    },
    stackChildren: true,
  },
  ch_4 = {
    parent: ch_3,
    image: "./src/assets/im age/Nataliya.jpeg",
    HTMLclass: 'person-tile',
    additionalInfo: {
      post: 'God',
      projects: [],
    },
    text: {
      name: "Nataliya Siromakha",
      nodeAlign: 'BOTTOM',
    },
    stackChildren: true,
  },
];

let chart_config = chart;
chart_config.map((el, ind) => el.HTMLid = ind);

export {chart_config};