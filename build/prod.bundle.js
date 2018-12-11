

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
  nodeStructure: combineNestedNodes()
};

function increaseScale() {
  let scale = 0;

  return function () {
    scale = scale + (1 / 10);
    return scale;
  }
}

let counter = increaseScale();
let currentZoom;

function scaleOnCollapse(x) {
  console.log(Array.from(svg1)[0].getBoundingClientRect().right);
  console.log(container.clientWidth);

  if (Array.from(svg1)[0].getBoundingClientRect().right > container.clientWidth) {
    currentZoom = 1 - counter();
    wrapper.style.transform = `scale(${1 - counter()})`;
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

