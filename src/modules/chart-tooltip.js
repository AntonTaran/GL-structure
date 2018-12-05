import * as config from './chart-config';

class CreateTooltip {
  constructor() {
  }

  static appendTooltipContainer(index) {
    let root = Array.prototype.slice.call(document.getElementById('collapsable-example'));

    const tooltip = document.createElement('div');
    tooltip.className = 'node-tooltip';
    tooltip.innerHTML = `<ul id="${index}" class='tooltip-list'>
         <li>
         <span>Project</span>
         <span>Lorem</span>
         </li>
      </ul>`;

//    root.appendChild(tooltip);
  }

}

let Tooltip = new CreateTooltip();

export {Tooltip}