import '../assets/scss/index.scss';
import * as config from './chart-config';
import {Tooltip} from './chart-tooltip';

const svg1 = document.getElementsByTagName('svg');
const wrapper = document.querySelector('#collapsable-example');
const closeButton = document.querySelector('.close-btn');
const container = document.querySelector('.container');
let tree;

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

  showAdditionalInfoModal(selectedElement) {
    this.updateModalContent(selectedElement);
  }

  updateModalContent(selectedElement) {
//    this.modalInfo.MODAL_INFO_PROJECTS.remove();
//    console.log(this.modalInfo.MODAL_INFO_PROJECTS);

    this.modalInfo.MODAL_INFO_TITLE[0].innerHTML = selectedElement.text.name;
    this.modalInfo.MODAL_INFO_POST[0].innerHTML = selectedElement.additionalInfo.post;

    if (selectedElement.additionalInfo.projects) {
      let links = [];

      selectedElement.additionalInfo.projects.forEach((project) => {

        const projectLink = document.createElement('a');
        projectLink.className = 'project-link';
        projectLink.innerHTML = `<a href="${project.url}">${project.name}</a>`;

        links.push();

        some.appendChild(projectLink);
      })
    }
  }

  closeModal(event) {
//    console.log(this.modalInfo.MODAL_INFO_PROJECTS);
//    this.modalInfo.MODAL_INFO_PROJECTS.remove();
  }
}

const modal = new Modal({
  MODAL_HTML: document.getElementsByClassName('additional-info-modal'),
  MODAL_INFO_TITLE: document.getElementsByClassName('modal-title'),
  MODAL_INFO_POST: document.getElementsByClassName('modal-post-info'),
//  MODAL_INFO_PROJECTS: document.querySelector('.modal-project-info')
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
  const selectedElement = config.chart_config.find((item) => {
    return item.HTMLid == event.target.id;
  });

//  showAdditionalInfoModal(selectedElement);
  modal.showAdditionalInfoModal(selectedElement);

}

tree = new Treant(config.chart_config);


