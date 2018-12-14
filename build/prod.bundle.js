
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
        showHideCollapsed(element2);
      }
    }
    sortedNodes.push(element);
  }

  sortedNodes.map((item) => {
    if (!item.children.length) {
      item.collapsed = false;
    }
  });

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
    nodeAlign: 'CENTER',
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

function showHideCollapsed(element) {
//  console.log(element);
  if (!element.children.length) {
//    element.collapsed = false;
  }
}

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

class Modal {
  constructor(modalInfo) {
    this.modalInfo = modalInfo;
    this.addCancelBtnEventListener();
  }

  addCancelBtnEventListener() {
    this.modalInfo.MODAL_CANCEL_BTN.addEventListener('click', () => {
      this.closeModal();
    })
  }

  onPersonTileClick(selectedElement, event) {
    this.openModal();
    this.updateModalContent(selectedElement);
    this.setProfileLinkToModalBtn(selectedElement);
  }

  openModal() {
    this.modalInfo.MODAL_HTML[0].classList.add('additional-info-modal--open');
    this.modalInfo.MODAL_OVERLAY[0].classList.add('modal-overlay--open');
//    this.modalInfo.MODAL_HTML[0].style.top = `${event.pageY - 348}px `;
//    console.log(event);
  }

  updateModalContent(selectedElement) {
    // Clear container with projects
//    this.modalInfo.MODAL_INFO_PROJECTS[0].innerHTML = '';

    // Set values for title and post
    this.modalInfo.MODAL_INFO_AVATAR[0].innerHTML = `<img src=${selectedElement.image} alt=${selectedElement.text.name}>`;
    this.modalInfo.MODAL_INFO_NAME[0].innerHTML = selectedElement.text.name;
    this.modalInfo.MODAL_INFO_POST[0].innerHTML = selectedElement.additionalInfo.post;
    this.modalInfo.MODAL_INFO_PROJECTS[0].innerHTML = selectedElement.additionalInfo.projects;

    // Create project links
//    if (selectedElement.additionalInfo.projects) {
//      selectedElement.additionalInfo.projects.forEach((project) => {
//        const projectLink = document.createElement('a');
//
//        projectLink.className = 'project-link';
//        projectLink.innerHTML = `<a href="${project.url}">${project.name}</a>`;
//
//        if (this.modalInfo.MODAL_INFO_PROJECTS) {
//          this.modalInfo.MODAL_INFO_PROJECTS[0].appendChild(projectLink);
//        } else {
//          console.log('Projects link container is absent!!!!');
//        }
//      })
//    }
  }

  closeModal() {
    this.modalInfo.MODAL_HTML[0].classList.remove('additional-info-modal--open');
    this.modalInfo.MODAL_OVERLAY[0].classList.remove('modal-overlay--open');
  }

  setProfileLinkToModalBtn(selectedElement) {
    this.modalInfo.MODAL_VIEW_PROFILE[0].href = selectedElement.additionalInfo.profileLink;
  }
}

const modal = new Modal({
  MODAL_HTML: document.getElementsByClassName('additional-info-modal'),
  MODAL_INFO_AVATAR: document.getElementsByClassName('image-holder'),
  MODAL_INFO_NAME: document.getElementsByClassName('person-name'),
  MODAL_INFO_POST: document.getElementsByClassName('person-post'),
  MODAL_INFO_PROJECTS: document.getElementsByClassName('person-projects'),
  MODAL_OVERLAY: document.getElementsByClassName('modal-overlay'),
  MODAL_CANCEL_BTN: document.querySelector('.modal-cancel-btn'),
  MODAL_VIEW_PROFILE: document.getElementsByClassName('modal-link-btn'),
});

class Zoom {
  constructor(controls) {
    this.controls = controls;

    this.addControlEventListener();
    this.fullScreenMode = false;

    this.addDocumentEventListener();
  }

  addControlEventListener() {
    this.controls.ZOOM_CONTROLS.addEventListener('click', (event) => {
      this.onControlClick(event.target)
    })
  }

  addDocumentEventListener() {
    document.addEventListener('fullscreenchange', this.onToggleScreenMode);
    document.addEventListener('webkitfullscreenchange', this.onToggleScreenMode);
    document.addEventListener('mozfullscreenchange', this.onToggleScreenMode);
    document.addEventListener('MSFullscreenChange', this.onToggleScreenMode);
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
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
      console.log(elem.webkitRequestFullScreen);
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }

    if (!this.fullScreenMode) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }

  onToggleScreenMode() {
    this.fullScreenMode = !this.fullScreenMode;
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

  modal.onPersonTileClick(selectedElement, event);
}

modalOverlay.addEventListener('click', ((event) => {
  modal.closeModal(event);
}));

tree = new Treant(chart_config);

/*Divisions Section*/

class FunctionalDivisionsHeads {
  constructor(divisionsInfo) {
    this.divisionsInfo = divisionsInfo;

    console.log(this.divisionsInfo);
    this.setDataTile();
  }

  setDataTile() {
    headsOfDivisions.forEach((item) => {
      const tile = document.createElement('div');

      tile.className = 'divisions_heads tile-wrapper';
      tile.innerHTML = `
         <a href="${item.profileLink}" target="_blank" class="tile tile--small tile--framed division-head-tile">
           <div class="tile-image-holder division-head__image-holder">
                ${this.onCheckImage(item)}
             </div>
            <p class="tile-name">${item.name}</p>
            <p class="tile-desc">${item.divisionName}</p>
         </a>`;

      this.divisionsInfo.SECTION_CONTAINER[0].appendChild(tile);
    });
  }

  onCheckImage(item) {
    if (item.avatar) {
      return `<img src=${item.avatar} alt=${item.name}>`
    } else {
      return `<img src='https://glo-assets.globallogic.com/system/data/1555/orange_theme/profile/avatar.jpg?1312376270' alt=${item.name}>`
    }

  }
}

new FunctionalDivisionsHeads({
  SECTION_CONTAINER: document.getElementsByClassName('division-heads'),
});

class StrategicFocusArea {
  constructor(StrategicFocusAreaInfo) {
    this.StrategicFocusAreaInfo = StrategicFocusAreaInfo;

    this.setDataTile();
  }

  setDataTile() {
    focusAreasPersons.forEach((item) => {
      const tile = document.createElement('div');

      tile.className = 'tile-wrapper';
      tile.innerHTML = `
        <a href="${item.profileLink}" target="_blank" class="tile tile--big">
          <div class="tile-image-holder united-tiles-section__image-holder">
             ${this.onCheckImage(item)}
          </div>
          <p class="tile-desc">${item.functionalArea}</p>
          <p class="tile-name">${item.name}</p>
        </a>`;

      this.StrategicFocusAreaInfo.SECTION_CONTAINER[0].appendChild(tile);
    });
  }

  onCheckImage(item) {
    if (item.avatar) {
      return `<img src=${item.avatar} alt=${item.name}>`
    } else {
      return `<img src='https://glo-assets.globallogic.com/system/data/1555/orange_theme/profile/avatar.jpg?1312376270' alt=${item.name}>`
    }

  }
}

new StrategicFocusArea({
  SECTION_CONTAINER: document.getElementsByClassName('strategic-focus-area__tiles-holder'),
});

class TechnologyList {
  constructor(technologyLeadsInfo) {
    this.technologyLeadsInfo = technologyLeadsInfo;

    this.setDataTile();
  }

  setDataTile() {
    technologyLeads.forEach((item) => {
      const tile = document.createElement('div');

      tile.className = 'tile-wrapper';
      tile.innerHTML = `
        <a href="${item.profileLink}" target="_blank" class="tile tile--big">
          <div class="tile-image-holder united-tiles-section__image-holder">
             ${this.onCheckImage(item)}
          </div>
          <p class="tile-desc">${item.technology}</p>
          <p class="tile-name">${item.name}</p>
        </a>`;

      this.technologyLeadsInfo.SECTION_CONTAINER[0].appendChild(tile);
    });
  }

  onCheckImage(item) {
    if (item.avatar) {
      return `<img src=${item.avatar} alt=${item.name}>`
    } else {
      return `<img src='https://glo-assets.globallogic.com/system/data/1555/orange_theme/profile/avatar.jpg?1312376270' alt=${item.name}>`
    }

  }
}

new TechnologyList({
  SECTION_CONTAINER: document.getElementsByClassName('technology-leads__tiles-holder'),
});

class PracticesLeads {
  constructor(practicesLeads) {
    this.practicesLeads = practicesLeads;

    this.setDataTile();
  }

  setDataTile() {
    practicesLeads.forEach((item) => {
      const tile = document.createElement('div');

      tile.className = 'tile-wrapper';
      tile.innerHTML = `
        <a href="${item.profileLink}" target="_blank" class="tile tile--big">
          <div class="tile-image-holder united-tiles-section__image-holder">
             ${this.onCheckImage(item)}
          </div>
          <p class="tile-desc">${item.technology}</p>
          <p class="tile-name">${item.name}</p>
        </a>`;

      this.practicesLeads.SECTION_CONTAINER[0].appendChild(tile);
    });
  }

  onCheckImage(item) {
    if (item.avatar) {
      return `<img src=${item.avatar} alt=${item.name}>`
    } else {
      return `<img src='https://glo-assets.globallogic.com/system/data/1555/orange_theme/profile/avatar.jpg?1312376270' alt=${item.name}>`
    }

  }
}

new PracticesLeads({
  SECTION_CONTAINER: document.getElementsByClassName('practices-leads__tiles-holder'),
});

