import '../assets/scss/index.scss';

const persons = [
  {
    "name": "Nataliya Siromakha",
    "par": null,
    "children": [],
    "image": "https://glo-assets.globallogic.com/system/data/55495/profile/NS.jpg?1514899516",
    "HTMLclass": "person-tile",
    "additionalInfo": {
      "post": "Director,Engineering",
      "projects": [
        {
          "name": "MTC WFA TestSOP",
          "url": "#"
        },
        {
          "name": " Sophos",
          "url": "#"
        }
      ]
    },
    "text": {
      "name": "Nataliya Siromakha",
      "nodeAlign": "BOTTOM"
    }
  },
  {
    "name": "Yevgenii Kolometskyi",
    "par": "Nataliya Siromakha",
    "children": [],
    "image": "https://glo-assets.globallogic.com/system/data/3549/profile/51725.jpg?1312378925",
    "HTMLclass": "person-tile",
    "additionalInfo": {
      "post": "Senior Manager,Engineering",
      "projects": [
        {
          "name": "LeCroy",
          "url": "#"
        }
      ]
    },
    "text": {
      "name": "Yevgenii Kolometskyi",
      "nodeAlign": "BOTTOM"
    }
  },
  {
    "name": "Igor Rudko",
    "par": "Nataliya Siromakha",
    "children": [],
    "image": "https://glo-assets.globallogic.com/system/data/31317/profile/Igor_Rudko_(1).jpg?1450094171",
    "HTMLclass": "person-tile",
    "additionalInfo": {
      "post": "Director,Engineering",
      "projects": [
        {
          "name": "Medtronic CRHF MTC-WFA",
          "url": "#"
        }
      ]
    },
    "text": {
      "name": "Igor Rudko",
      "nodeAlign": "BOTTOM"
    }
  },
  {
    "name": "Denys Bratchuk",
    "par": "Nataliya Siromakha",
    "children": [],
    "image": "https://glo-assets.globallogic.com/system/data/70612/profile/denys-smile.jpg?1542817746",
    "HTMLclass": "person-tile",
    "additionalInfo": {
      "post": "Director,Engineering",
      "projects": [
        {
          "name": "ABC-Expense report solution",
          "url": "#"
        }
      ]
    },
    "text": {
      "name": "Denys Bratchuk",
      "nodeAlign": "BOTTOM"
    }
  },
  {
    "name": "Viktor Matusov",
    "par": "Nataliya Siromakha",
    "children": [],
    "image": "https://glo-assets.globallogic.com/system/data/20679/profile/me_wedding0.jpg?1415116319",
    "HTMLclass": "person-tile",
    "additionalInfo": {
      "post": "Director,Engineering",
      "projects": [
        {
          "name": "Microsoft - Service Delivery",
          "url": "#"
        }
      ]
    },
    "text": {
      "name": "Viktor Matusov",
      "nodeAlign": "BOTTOM"
    }
  },
  {
    "name": "Viktor Matusov child",
    "par": "Viktor Matusov",
    "children": [],
    "image": "https://glo-assets.globallogic.com/system/data/20679/profile/me_wedding0.jpg?1415116319",
    "HTMLclass": "person-tile",
    "additionalInfo": {
      "post": "Director,Engineering",
      "projects": [
        {
          "name": "Microsoft - Service Delivery",
          "url": "#"
        }
      ]
    },
    "text": {
      "name": "Viktor Matusov",
      "nodeAlign": "BOTTOM"
    }
  },
  {
    "name": "Viktor Matusov child",
    "par": "Viktor Matusov",
    "children": [],
    "image": "https://glo-assets.globallogic.com/system/data/20679/profile/me_wedding0.jpg?1415116319",
    "HTMLclass": "person-tile",
    "additionalInfo": {
      "post": "Director,Engineering",
      "projects": [
        {
          "name": "Microsoft - Service Delivery",
          "url": "#"
        }
      ]
    },
    "text": {
      "name": "Viktor Matusov",
      "nodeAlign": "BOTTOM"
    }
  },
  {
    "name": "Viktor Matusov child",
    "par": "Viktor Matusov",
    "children": [],
    "image": "https://glo-assets.globallogic.com/system/data/20679/profile/me_wedding0.jpg?1415116319",
    "HTMLclass": "person-tile",
    "additionalInfo": {
      "post": "Director,Engineering",
      "projects": [
        {
          "name": "Microsoft - Service Delivery",
          "url": "#"
        }
      ]
    },
    "text": {
      "name": "Viktor Matusov",
      "nodeAlign": "BOTTOM"
    }
  },
  {
    "name": "Viktor Matusov child",
    "par": "Viktor Matusov",
    "children": [],
    "image": "https://glo-assets.globallogic.com/system/data/20679/profile/me_wedding0.jpg?1415116319",
    "HTMLclass": "person-tile",
    "additionalInfo": {
      "post": "Director,Engineering",
      "projects": [
        {
          "name": "Microsoft - Service Delivery",
          "url": "#"
        }
      ]
    },
    "text": {
      "name": "Viktor Matusov child",
      "nodeAlign": "BOTTOM"
    }
  },
  {
    "name": "Iuliia Izonina",
    "par": "Nataliya Siromakha",
    "children": [],
    "image": "https://glo-assets.globallogic.com/system/data/12081/profile/IMG_0649.jpg?1360936727",
    "HTMLclass": "person-tile",
    collapsed: true,
    "additionalInfo": {
      "post": "Director,Engineering",
      "projects": [
        {
          "name": "Aero Development",
          "url": "#"
        },
        {
          "name": " Rimage",
          "url": "#"
        }
      ]
    },
    "text": {
      "name": "Iuliia Izonina",
      "nodeAlign": "BOTTOM"
    }
  },
  {
    "name": "Iuliia Izonina child",
    "par": "Iuliia Izonina",
    "children": [],
    "image": "https://glo-assets.globallogic.com/system/data/12081/profile/IMG_0649.jpg?1360936727",
    "HTMLclass": "person-tile",
    "additionalInfo": {
      "post": "Director,Engineering",
      "projects": [
        {
          "name": "Aero Development",
          "url": "#"
        },
        {
          "name": " Rimage",
          "url": "#"
        }
      ]
    },
    "text": {
      "name": "Iuliia Izonina child",
      "nodeAlign": "BOTTOM"
    }
  },
  {
    "name": "Iuliia Izonina child",
    "par": "Iuliia Izonina",
    "children": [],
    "image": "https://glo-assets.globallogic.com/system/data/12081/profile/IMG_0649.jpg?1360936727",
    "HTMLclass": "person-tile",
    "additionalInfo": {
      "post": "Director,Engineering",
      "projects": [
        {
          "name": "Aero Development",
          "url": "#"
        },
        {
          "name": " Rimage",
          "url": "#"
        }
      ]
    },
    "text": {
      "name": "Iuliia Izonina child",
      "nodeAlign": "BOTTOM"
    }
  },
  {
    "name": "Iuliia Izonina child",
    "par": "Iuliia Izonina",
    "children": [],
    "image": "https://glo-assets.globallogic.com/system/data/12081/profile/IMG_0649.jpg?1360936727",
    "HTMLclass": "person-tile",
    "additionalInfo": {
      "post": "Director,Engineering",
      "projects": [
        {
          "name": "Aero Development",
          "url": "#"
        },
        {
          "name": " Rimage",
          "url": "#"
        }
      ]
    },
    "text": {
      "name": "Iuliia Izonina child",
      "nodeAlign": "BOTTOM"
    }
  },
  {
    "name": "Iuliia Izonina child",
    "par": "Iuliia Izonina",
    "children": [],
    "image": "https://glo-assets.globallogic.com/system/data/12081/profile/IMG_0649.jpg?1360936727",
    "HTMLclass": "person-tile",
    "additionalInfo": {
      "post": "Director,Engineering",
      "projects": [
        {
          "name": "Aero Development",
          "url": "#"
        },
        {
          "name": " Rimage",
          "url": "#"
        }
      ]
    },
    "text": {
      "name": "Iuliia Izonina child",
      "nodeAlign": "BOTTOM"
    }
  },
  {
    "name": "Iuliia Izonina child",
    "par": "Iuliia Izonina",
    "children": [],
    "image": "https://glo-assets.globallogic.com/system/data/12081/profile/IMG_0649.jpg?1360936727",
    "HTMLclass": "person-tile",
    "additionalInfo": {
      "post": "Director,Engineering",
      "projects": [
        {
          "name": "Aero Development",
          "url": "#"
        },
        {
          "name": " Rimage",
          "url": "#"
        }
      ]
    },
    "text": {
      "name": "Iuliia Izonina child",
      "nodeAlign": "BOTTOM"
    }
  },
  {
    "name": "Iuliia Izonina child",
    "par": "Iuliia Izonina",
    "children": [],
    "image": "https://glo-assets.globallogic.com/system/data/12081/profile/IMG_0649.jpg?1360936727",
    "HTMLclass": "person-tile",
    "additionalInfo": {
      "post": "Director,Engineering",
      "projects": [
        {
          "name": "Aero Development",
          "url": "#"
        },
        {
          "name": " Rimage",
          "url": "#"
        }
      ]
    },
    "text": {
      "name": "Iuliia Izonina child",
      "nodeAlign": "BOTTOM"
    }
  },
];

const svg1 = document.getElementsByTagName('svg');
const wrapper = document.querySelector('#collapsable-example');
const closeButton = document.querySelector('.close-btn');
const container = document.querySelector('.container');
const modalOverlay = document.querySelector('.modal-overlay');
let tree;

function setPersonId() {
  persons.map((el, ind) => el.HTMLid = ind + 1);
}

function combineNestedNodes() {
  setPersonId();
  let sortedNodes = [];

  for (let i = 0; i < persons.length; i++) {
    let element = persons[i];

    for (let j = i; j < persons.length; j++) {
      let element2 = persons[j];

      if (element.name === element2.par) {
        element.children.push(element2);
      }
    }
    sortedNodes.push(element);
  }

  return sortedNodes[0];
}

let chart_config = {
  chart: {
    container: "#collapsable-example",
    animateOnInit: true,
    callback: {
      onToggleCollapseFinished: function (e) {
//        scaleOnCollapse(e.X);
      }
    },
    node: {
      collapsable: true
    },
    levelSeparation: 120,
    siblingSeparation: 50,
    subTeeSeparation: 50,
    nodeAlign: 'LEFT',
    connectors: {
      type: 'step',
      style: {
        'stroke': '#72849a',
        'stroke-width': 2,
      }
    },
    animation: {
      nodeAnimation: "linear ",
      nodeSpeed: 500,
      connectorsAnimation: "linear",
      connectorsSpeed: 100
    }
  },
  nodeStructure: combineNestedNodes()
};

function getScaleStep() {
  let scale = 0;

  return function () {
    scale = scale + (1 / 10);
    return scale;
  }
}

let counter = getScaleStep();
let currentZoom = 1;
let zoomStep = counter();

function scaleOnCollapse(x) {
  console.log(Array.from(svg1)[0].getBoundingClientRect().right > container.clientWidth);

  if (Array.from(svg1)[0].getBoundingClientRect().right > container.clientWidth) {
    currentZoom = 1 - zoomStep;
    decreaseScale();
  }

  if (Array.from(svg1)[0].getBoundingClientRect().right < container.clientWidth) {
    increaseScale();
  }
}
function increaseScale() {
  wrapper.style.transform = `scale(${currentZoom + (1 - currentZoom)})`;
}
function decreaseScale() {
  if (Array.from(svg1)[0].getBoundingClientRect().right > container.clientWidth) {
    wrapper.style.transform = `scale(${currentZoom - (1 / 10)})`;
  }
}

class Modal {
  constructor(modalInfo) {
    this.modalInfo = modalInfo;
//    Modal.showAdditionalInfoModal();
  }

  onPersonTileClick(selectedElement) {
    this.openModal();
    this.updateModalContent(selectedElement);
  }

  openModal() {
    this.modalInfo.MODAL_HTML[0].classList.add('additional-info-modal--open');
    this.modalInfo.MODAL_OVERLAY[0].classList.add('modal-overlay--open');
  }

  updateModalContent(selectedElement) {
    // Clear container with links
    this.modalInfo.MODAL_INFO_PROJECTS[0].innerHTML = '';
    // Set values for title and post
    this.modalInfo.MODAL_INFO_TITLE[0].innerHTML = selectedElement.text.name;
    this.modalInfo.MODAL_INFO_POST[0].innerHTML = selectedElement.additionalInfo.post;

    // Create project links
    if (selectedElement.additionalInfo.projects) {
      selectedElement.additionalInfo.projects.forEach((project) => {
        const projectLink = document.createElement('a');

        projectLink.className = 'project-link';
        projectLink.innerHTML = `<a href="${project.url}">${project.name}</a>`;

        if (this.modalInfo.MODAL_INFO_PROJECTS) {
          this.modalInfo.MODAL_INFO_PROJECTS[0].appendChild(projectLink);
        } else {
          console.log('Projects link container is absent!!!!');
        }
      })
    }
  }

  closeModal(event) {
    this.modalInfo.MODAL_HTML[0].classList.remove('additional-info-modal--open');
    this.modalInfo.MODAL_OVERLAY[0].classList.remove('modal-overlay--open');
  }
}

const modal = new Modal({
  MODAL_HTML: document.getElementsByClassName('additional-info-modal'),
  MODAL_INFO_TITLE: document.getElementsByClassName('modal-title'),
  MODAL_INFO_POST: document.getElementsByClassName('modal-post-info'),
  MODAL_INFO_PROJECTS: document.getElementsByClassName('modal-project-info'),
  MODAL_OVERLAY: document.getElementsByClassName('modal-overlay'),
});

class Zoom {
  constructor(controls) {
    this.controls = controls;
    
    this.addControlEventListener();
  }

  addControlEventListener() {
    this.controls.ZOOM_CONTROLS.addEventListener('click', (event) => {
      this.onControlClick(event.target)
    })
  }

  onControlClick(controlInfo) {

    if (Array.from(controlInfo.classList).indexOf('decrease-zoom') !== -1 && this.controls.ZOOM_VALUE > 5) {
      this.decreaseZoom();

      if (this.controls.ZOOM_VALUE <= 5) {
        this.disableControl('decrease-zoom');
      } else {
        this.enableControl('increase-zoom');
      }
    }

    if (Array.from(controlInfo.classList).indexOf('increase-zoom') !== -1 && this.controls.ZOOM_VALUE <= 15) {
      this.increaseZoom();

      if (this.controls.ZOOM_VALUE >= 15) {
        this.disableControl('increase-zoom');
      } else {
        this.enableControl('decrease-zoom');
      }
    }

    if (Array.from(controlInfo.classList).indexOf('fullscreen-mode') !== -1) {
      this.openFullScreen();
    }
  }

  increaseZoom() {
    wrapper.style.transform = `scale(${++this.controls.ZOOM_VALUE / 10})`;
  }

  decreaseZoom() {
    wrapper.style.transform = `scale(${--this.controls.ZOOM_VALUE / 10})`;
  }

  disableControl(disabledBtn) {
    switch (disabledBtn) {
      case 'decrease-zoom':
        this.controls.DECREASE_CONTROL.classList.add('zoom-control--disabled');
        break;

      case 'increase-zoom':
        this.controls.INCREASE_CONTROL.classList.add('zoom-control--disabled');
        break;
    }
  }

  enableControl(enabledBtn) {
    switch (enabledBtn) {
      case 'decrease-zoom':
        this.controls.DECREASE_CONTROL.classList.remove('zoom-control--disabled');
        break;

      case 'increase-zoom':
        this.controls.INCREASE_CONTROL.classList.remove('zoom-control--disabled');
    }
  }

  openFullScreen() {
    let elem = document.querySelector(".container");
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
  }
}

const zoom = new Zoom({
  ZOOM_CONTROLS: document.querySelector('.zoom-controls'),
  DECREASE_CONTROL: document.querySelector('.decrease-zoom'),
  INCREASE_CONTROL: document.querySelector('.increase-zoom'),
  ZOOM_VALUE: 10,
});

wrapper.addEventListener('click', ((event) => {
  if (Array.from(event.target.classList).indexOf('node') !== -1) {
    getAdditionalInfo(event);
  }
}));

closeButton.addEventListener('click', ((event) => {
  modal.closeModal(event);
}));

function getAdditionalInfo(event) {
  const selectedElement = persons.find((item) => {
    return item.HTMLid == event.target.id;
  });

  modal.onPersonTileClick(selectedElement);
}

modalOverlay.addEventListener('click', ((event) => {
  modal.closeModal(event);
}));

tree = new Treant(chart_config);

