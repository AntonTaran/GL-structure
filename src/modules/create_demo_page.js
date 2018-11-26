import {creationObservables} from './creation_observables';
import {conditionalOperators} from './conditional_operators';
import {combinationOperators} from './combination_operators';
import {filterOperators} from './filtration_operators';
import {selectionOperators} from './selection_operators';
import {transformationOperators} from './transformation_operators';

class CreateDemoPage {
  constructor() {
    for (let module of [
      creationObservables,
      conditionalOperators,
      combinationOperators,
      filterOperators,
      selectionOperators,
      transformationOperators,
    ]) {
      CreateDemoPage.createControlElement(module);
    }
  }

  static createControlElement(module) {
    for (let operatorName in module.operators) {
      const moduleOperator = module.operators[operatorName];
      const controlElement = document.createElement(moduleOperator.htmlControlElem);

      controlElement.className = operatorName;
      controlElement.innerText = operatorName;

      if (moduleOperator.controlElemId) controlElement.id = moduleOperator.controlElemId;

      CreateDemoPage.addButtonsToContainer(moduleOperator.htmlContainer, controlElement);
      CreateDemoPage.setEventOnButton(moduleOperator, controlElement, operatorName);
    }
  }

  static addButtonsToContainer(container, controlElement) {
    container.appendChild(controlElement);
  }

  static setEventOnButton(operator, controlElement, operatorName) {
    if (operator.htmlControlElem === 'button') {
      controlElement.onclick = () => operator.runDemo();
    } else {
      controlElement.placeholder = operatorName;
      operator.runDemo();
    }
  }
}

new CreateDemoPage();