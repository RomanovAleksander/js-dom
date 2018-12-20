import './menu.css';

const ACCORDION_GENERAL_CLASS = 'item';
const ACCORDION_BTN_CLASS = `${ACCORDION_GENERAL_CLASS}__accordion`;
const ACCORDION_TEXT_CLASS = `${ACCORDION_GENERAL_CLASS}__text`;
const ACCORDION_ACTIVE_CLASS = `active`;
const TEXT = `text`;

export class Menu {
    constructor(targetElement, array) {
        this.targetEl = targetElement;
        this.array = array;
        this.itemArray = [];
        this.render();
        this.renderList();
        this.toggle();
    }

    render() {
        this.item = document.createElement('div');
        this.titleElement = document.createElement('button');
        this.listElement = document.createElement('div');
        this.text = document.createElement('p');

        this.item.classList.add(ACCORDION_GENERAL_CLASS);
        this.titleElement.classList.add(ACCORDION_BTN_CLASS);
        this.listElement.classList.add(ACCORDION_TEXT_CLASS);
        this.text.classList.add(TEXT);

        this.item.appendChild(this.titleElement);
        this.item.appendChild(this.listElement);
        this.listElement.appendChild(this.text);

        this.itemArray.push(this.item);
    }

    renderList() {
        for (let i = 0; i < this.array.length; i++) {
            this.render();
            this.targetEl.appendChild(this.item);
            this.titleElement.textContent = this.array[i].title;
            this.text.textContent = this.array[i].text;
        }
    }

    toggle() {
        this.itemArray.forEach(item => {
            item.addEventListener('click', () => {
                    item.classList.toggle(ACCORDION_ACTIVE_CLASS);
                }
            )
        })
    }
}