import '../assets/scss/index.scss';

class PageNavigation {
  constructor(info) {
    this.addEventToLink(info.TOP_NAVIGATION);
    this.addEventToScrollButton(info.SCROLL_BUTTON);
  }

  addEventToLink(link) {
    link.addEventListener('click', (event) => {
      if (Array.from(event.target.classList).indexOf('nav-link') !== -1) {

        $('html, body').animate({
          scrollTop: $('#' + event.target.dataset.attr).offset().top - 40
        }, 200);
      }
    })
  }

  addEventToScrollButton(link) {
    link.addEventListener('click', () => {
      $('html, body').animate({
        scrollTop: $('body').offset().top
      }, 200);
    })
  }
}

new PageNavigation({
  TOP_NAVIGATION: document.querySelector('.top-navigation-menu'),
  SCROLL_BUTTON: document.querySelector('.scroll-top-btn'),
});


const persons = [
  {
    "name": "Nataliya Siromakha",
    "par": 'root',
    "children": [],
    "image": "https://glo-assets.globallogic.com/system/data/55495/profile/NS.jpg?1514899516",
    "HTMLclass": "tile tile--small tile--framed",
    collapsed: true,
    "additionalInfo": {
      "post": "Director,EngineeringDirector,EngineeringDirector,Engineering",
      "profileLink": "https://glo.globallogic.com/users/profile/nataliya.siromakha",
      "projects": 'MTC WFA TestSOP, Sophos',
    },
    "text": {
      "name": "Nataliya Siromakha",
    }
  },
  {
    "name": "Yevgenii Kolometskyi",
    "par": "Nataliya Siromakha",
    "children": [],
    "image": "https://glo-assets.globallogic.com/system/data/3549/profile/51725.jpg?1312378925",
    "HTMLclass": "tile tile--small tile--framed",
    collapsed: true,
    "additionalInfo": {
      "post": "Senior Manager,Engineering",
      "projects": 'LeCroy, Sophos',
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
    "HTMLclass": "tile tile--small tile--framed",
    collapsed: true,
    "additionalInfo": {
      "post": "Director,Engineering",
      "projects": 'LeCroy, Sophos',
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
    "HTMLclass": "tile tile--small tile--framed",
    collapsed: true,
    "additionalInfo": {
      "post": "Director,Engineering",
      "projects": 'ABC-Expense report solution',
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
    "HTMLclass": "tile tile--small tile--framed",
    collapsed: true,
    "additionalInfo": {
      "post": "Director,Engineering",
      "projects": []
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
    "HTMLclass": "tile tile--small tile--framed",
    collapsed: true,
    "additionalInfo": {
      "post": "Director,Engineering",
      "projects": "Microsoft - Service Delivery"
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
    "HTMLclass": "tile tile--small tile--framed",
    collapsed: true,
    "additionalInfo": {
      "post": "Director,Engineering",
      "projects": "Microsoft - Service Delivery"
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
    "HTMLclass": "tile tile--small tile--framed",
    collapsed: true,
    "additionalInfo": {
      "post": "Director,Engineering",
      "projects": "Microsoft - Service Delivery"
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
    "HTMLclass": "tile tile--small tile--framed",
    collapsed: true,
    "additionalInfo": {
      "post": "Director,Engineering",
      "projects": "Microsoft - Service Delivery"
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
    "HTMLclass": "tile tile--small tile--framed",
    collapsed: true,
    "additionalInfo": {
      "post": "Director,Engineering",
      "projects": "Microsoft - Service Delivery"
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
    "HTMLclass": "tile tile--small tile--framed",
    collapsed: true,
    "additionalInfo": {
      "post": "Director,Engineering",
      "projects": "Microsoft - Service Delivery"
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
    "HTMLclass": "tile tile--small tile--framed",
    collapsed: true,
    "additionalInfo": {
      "post": "Director,Engineering",
      "projects": "Microsoft - Service Delivery"
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
    "HTMLclass": "tile tile--small tile--framed",
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
      "name": "Iuliia Izonina child",
      "nodeAlign": "BOTTOM"
    }
  },
  {
    "name": "Iuliia Izonina child",
    "par": "Iuliia Izonina",
    "children": [],
    "image": "https://glo-assets.globallogic.com/system/data/12081/profile/IMG_0649.jpg?1360936727",
    "HTMLclass": "tile tile--small tile--framed",
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
      "name": "Iuliia Izonina child",
      "nodeAlign": "BOTTOM"
    }
  },
  {
    "name": "Iuliia Izonina child",
    "par": "Iuliia Izonina",
    "children": [],
    "image": "https://glo-assets.globallogic.com/system/data/12081/profile/IMG_0649.jpg?1360936727",
    "HTMLclass": "tile tile--small tile--framed",
    collapsed: true,
    "additionalInfo": {
      "post": "Director,Engineering",
      "projects": "Microsoft - Service Delivery"
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
    "HTMLclass": "tile tile--small tile--framed",
    collapsed: true,
    "additionalInfo": {
      "post": "Director,Engineering",
      "projects": "Aero Development"
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
    levelSeparation: 30,
    siblingSeparation: 30,
    subTeeSeparation: 30,
    nodeAlign: 'TOP',
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
    console.log(JSON.parse(localStorage.some));
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

const headsOfDivisions = [
  {
    "title": "Inna Dukhota",
    "avatar": "https://glo-assets.globallogic.com/system/data/23822/profile/402888.jpg?1423785644",
    "subtitle": "Talent Aquisition Group ",
    "profileLink": "https://glo.globallogic.com/users/profile/inna.dukhota"
  }, {
    "title": "Anna Veselova",
    "avatar": "https://glo-assets.globallogic.com/system/data/65815/profile/IMG_7129.JPG?1534766416",
    "subtitle": "Resourcing ",
    "profileLink": "https://glo.globallogic.com/users/profile/anna.veselova"
  }, {
    "title": "Ellina Medynska ",
    "avatar": "https://glo-assets.globallogic.com/system/data/48745/profile/IMG_9350.jpg?1498201664",
    "subtitle": "PR & Marketing",
    "profileLink": "https://glo.globallogic.com/users/profile/ellina.medynska"
  }, {
    "title": "Sergii Shmatko",
    "avatar": "https://glo-assets.globallogic.com/system/data/60956/profile/Serhii_Shmatko.jpg?1526999529",
    "subtitle": "IT Infrastructure",
    "profileLink": "https://glo.globallogic.com/users/profile/serhii.shmatko"
  }, {
    "title": "Vladyslav Domin",
    "avatar": "https://glo-assets.globallogic.com/system/data/51449/profile/Vladyslav_Domin.jpg?1504697687",
    "subtitle": "Employee Services ",
    "profileLink": "https://glo.globallogic.com/users/profile/vladyslav.domin"
  }, {
    "title": "Nataliya Osipenko",
    "avatar": "https://glo-assets.globallogic.com/system/data/41292/profile/IMG_9556.jpg?1478695541",
    "subtitle": "Process Management (PMG)",
    "profileLink": "https://glo.globallogic.com/users/profile/nataliia.osypenko"
  }, {"title": "TBD", "avatar": "", "subtitle": "Business Partner ", "profileLink": ""}
];
const focusAreasPersons = [
  {
    "title": "Iuliia Izonina",
    "position": "Director, Engineering",
    "avatar": "https://glo-assets.globallogic.com/system/data/12081/profile/IMG_0649.jpg?1360936727",
    "profileLink": "https://glo.globallogic.com/users/profile/iuliia.izonina",
    "subtitle": "Center Scalability "
  },
  {
    "title": "Oleksandr Lanin",
    "position": "Senior Manager, Engineering",
    "avatar": "https://glo-assets.globallogic.com/system/data/70991/profile/alexlain-gl-2018.jpg?1543590636",
    "profileLink": "https://glo.globallogic.com/users/profile/oleksandr.lanin",
    "subtitle": "Business Development "
  },
  {
    "title": "Nataliya Siromakha",
    "position": "Kharkiv Location Head",
    "avatar": "https://glo-assets.globallogic.com/system/data/55495/profile/NS.jpg?1514899516",
    "profileLink": "https://glo.globallogic.com/users/profile/nataliya.siromakha",
    "subtitle": "Practices Development "
  },
  {
    "title": "Ellina Medynska ",
    "position": "Senior Specialist, Marketing",
    "avatar": "https://glo-assets.globallogic.com/system/data/48745/profile/IMG_9350.jpg?1498201664",
    "profileLink": "https://glo.globallogic.com/users/profile/ellina.medynska",
    "subtitle": "PR & Marketing"
  },
  {
    "title": "Inna Dukhota",
    "position": "Senior Manager, People Development ",
    "avatar": "https://glo-assets.globallogic.com/system/data/23822/profile/402888.jpg?1423785644",
    "profileLink": "https://glo.globallogic.com/users/profile/inna.dukhota",
    "subtitle": "TAG Efficiency"
  },
  {
    "title": "axcacs",
    "position": "Senior Manager, People Development ",
    "avatar": "https://glo-assets.globallogic.com/system/data/23822/profile/402888.jpg?1423785644",
    "profileLink": "https://glo.globallogic.com/users/profile/inna.dukhota",
    "subtitle": "TAG Efficiency"
  }
];
const technologyLeads = [
  {
    "title": "Oleksandr Lanin",
    "position": "Senior Manager, Engineering",
    "avatar": "https://glo-assets.globallogic.com/system/data/70991/profile/alexlain-gl-2018.jpg?1543590636",
    "profileLink": "https://glo.globallogic.com/users/profile/oleksandr.lanin",
    "subtitle": ".NET "
  },
  {
    "title": "Olena Yelisheva",
    "position": "Project Manager, Engineering",
    "avatar": "https://glo-assets.globallogic.com/system/data/12765/profile/IMG_0684_21.jpg?1364295028",
    "profileLink": "https://glo.globallogic.com/users/profile/olena.ielysheva",
    "subtitle": "QA Automation "
  },
  {
    "title": "Oleksandr Rybtsov",
    "position": "Senior Manager, Engineering",
    "avatar": "https://glo-assets.globallogic.com/system/data/70168/profile/Picture.png?1542113014",
    "profileLink": "https://glo.globallogic.com/users/profile/oleksandr.rybtsov",
    "subtitle": "Java "
  },
  {
    "title": "Denys Bratchuk",
    "position": "Director, Engineering",
    "avatar": "https://glo-assets.globallogic.com/system/data/70612/profile/denys-smile.jpg?1542817746",
    "profileLink": "https://glo.globallogic.com/users/profile/denys.bratchuk",
    "subtitle": "JavaScript "
  },
  {
    "title": "Oleksandr Svideniuk",
    "position": "Senior Manager, Engineering",
    "avatar": "https://glo-assets.globallogic.com/system/data/55556/profile/ava_2017.jpg?1514971986",
    "profileLink": "https://glo.globallogic.com/users/profile/oleksandr.svideniuk",
    "subtitle": "C++"
  }
];
const practicesLeads = [
  {
    "title": "Andrii Gnennyi",
    "position": "Principal, Engineering",
    "avatar": "https://glo-assets.globallogic.com/system/data/40620/profile/AGN_Square.jpg?1477057620",
    "profileLink": "https://glo.globallogic.com/users/profile/andriy.gnennyy",
    "subtitle": "Cloud"
  },
  {
    "title": "Andrii Antilikatorov",
    "position": "Consultant, Engineering",
    "avatar": "https://glo-assets.globallogic.com/system/data/16714/profile/Antilikatorov.png?1392109625",
    "profileLink": "https://glo.globallogic.com/users/profile/Andrii.Antilikatorov",
    "subtitle": "Machine Learning/AI"
  },
  {
    "title": "Igor Manzhos",
    "position": "Senior Consultant, Engineering",
    "avatar": "https://glo-assets.globallogic.com/system/data/67610/profile/viber_image.jpg?1537615575",
    "profileLink": "https://glo.globallogic.com/users/profile/igor.manzhos",
    "subtitle": "Machine Learning/AI"
  },
  {
    "title": "Yevhen Napriaglo",
    "position": "Senior Solution Architect, Technology",
    "avatar": "https://glo-assets.globallogic.com/system/data/56844/profile/1.png?1517996955",
    "profileLink": "https://glo.globallogic.com/users/profile/yevhen.napriahlo",
    "subtitle": "Architecture/Digital Transformation"
  },
  {
    "title": "Yevgenii Kolometskyi",
    "position": "Senior Manager, Engineering",
    "avatar": "https://glo-assets.globallogic.com/system/data/3549/profile/51725.jpg?1312378925",
    "profileLink": "https://glo.globallogic.com/users/profile/y.kolometskyi",
    "subtitle": "Automotive/Embedded"
  },
  {
    "title": "Oleksandr Adamov",
    "position": "Consultant, Engineering",
    "avatar": "https://glo-assets.globallogic.com/system/data/57013/profile/me_no_ransomware.jpg?1518506599",
    "profileLink": "https://glo.globallogic.com/users/profile/oleksandr.adamov",
    "subtitle": "Security "
  },
  {
    "title": "Vitaliy Tilinskiy",
    "position": "Project Manager, Engineering",
    "avatar": "https://glo-assets.globallogic.com/system/data/54574/profile/Vitaliy.jpg?1512511121",
    "profileLink": "https://glo.globallogic.com/users/profile/vitaliy.tilinskiy",
    "subtitle": "DevOps"
  },
  {
    "title": "Oleksandra Skybina",
    "position": "Associate Manager, Engineering",
    "avatar": "https://glo-assets.globallogic.com/system/data/3626/profile/52101.jpg?1312378980",
    "profileLink": "https://glo.globallogic.com/users/profile/Oleksandra.Skybina",
    "subtitle": "Agile"
  },
  {
    "title": "Dmytro Dvornichenko",
    "position": "Senior Designer, Usability & Design",
    "avatar": "https://glo-assets.globallogic.com/system/data/60298/profile/379788_2699761009461_1378935210_n.jpg?1525948393",
    "profileLink": "https://glo.globallogic.com/users/profile/dmytro.dvornichenko",
    "subtitle": "UX/UI"
  },
  {
    "title": "Oleksandr Furdylo",
    "position": "Project Manager, Engineering",
    "avatar": "https://glo-assets.globallogic.com/system/data/3401/profile/51782.jpg?1312378817",
    "profileLink": "https://glo.globallogic.com/users/profile/oleksandr.furdylo",
    "subtitle": "Mobility "
  }
];

class FunctionalDivisionsHeads {
  constructor(divisionsInfo) {
    this.divisionsInfo = divisionsInfo;
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
            <p class="tile-name">${item.title}</p>
            <p class="tile-desc">${item.subtitle}</p>
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

class CommonClass {
  constructor(info) {
    this.info = info;
    this.setDataTile();
  }

  setDataTile() {
    this.info.data.forEach((item) => {
      const tile = document.createElement('div');

      tile.className = this.info.classEl;
      tile.innerHTML = `
        <a href="${item.profileLink}" target="_blank" class="tile tile--big">
          <div class="tile-image-holder united-tiles-section__image-holder">
             ${CommonClass.onCheckImage(item)}
          </div>
          <p class="tile-desc">${item.subtitle}</p>
          <p class="tile-name">${item.title}</p>
        </a>`;

      this.info.SECTION_CONTAINER[0].appendChild(tile);
    });
  }

  static onCheckImage(item) {
    if (item.avatar) {
      return `<img src=${item.avatar} alt=${item.name}>`
    } else {
      return `<img src='https://glo-assets.globallogic.com/system/data/1555/orange_theme/profile/avatar.jpg?1312376270' alt=${item.name}>`
    }
  }
}

new CommonClass({
  SECTION_CONTAINER: document.getElementsByClassName('strategic-focus-area__tiles-holder'),
  classEl: 'tile-wrapper',
  data: focusAreasPersons
});

new CommonClass({
  SECTION_CONTAINER: document.getElementsByClassName('technology-leads__tiles-holder'),
  classEl: 'tile-wrapper',
  data: technologyLeads
});

new CommonClass({
  SECTION_CONTAINER: document.getElementsByClassName('practices-leads__tiles-holder'),
  classEl: 'tile-wrapper',
  data: practicesLeads
});


