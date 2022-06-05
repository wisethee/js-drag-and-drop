export class App {
  constructor() {
    this.handleDragAndDropEvents();
    this.handleButtonEvents();
  }

  private addBtns: any = document.querySelectorAll('.add-btn:not(.solid)');
  private saveItemBtns: any = document.querySelectorAll('.solid');
  private addItemContainers: any = document.querySelectorAll('.add-container');
  private addItems = document.querySelectorAll('.add-item');

  // Item List
  private itemLists = document.querySelectorAll('.drag-item-list');
  private backlogList = document.getElementById('backlog-list');
  private progressList = document.getElementById('progress-list');
  private completeList = document.getElementById('complete-list');
  private onHoldList = document.getElementById('on-hold-list');

  // Items
  private updatedOnLoad = false;

  // Initialize Arrays
  private backlogListArray: any = [];
  private progressListArray: any = [];
  private completeListArray: any = [];
  private onHoldListArray: any = [];
  private listArrays: any = [];

  // Drag
  private draggedItem: any;
  private currentColumn: any;

  // Get arrays from localStorage if available
  private getSavedColumns() {
    if (localStorage.getItem('backlogItems')) {
      this.backlogListArray = JSON.parse(localStorage.backlogItems);
      this.progressListArray = JSON.parse(localStorage.progressItems);
      this.completeListArray = JSON.parse(localStorage.completeItems);
      this.onHoldListArray = JSON.parse(localStorage.onHoldItems);
    } else {
      this.backlogListArray = ['Release the course', 'Sit back and relax'];
      this.progressListArray = ['Work on projects', 'Listen to music'];
      this.completeListArray = ['Being cool', 'Getting stuff done'];
      this.onHoldListArray = ['Being uncool'];
    }
  }

  // Update columns in DOM, reset HTML, filter array, update localStorage
  updateDOM() {
    // Check localStorage
    if (!this.updatedOnLoad) {
      this.getSavedColumns();
    }

    // Backlog Column
    this.backlogList.textContent = '';
    this.backlogListArray.forEach((backlogItem: any, index: any) => {
      this.createItemEl(this.backlogList, 0, backlogItem, index);
    });
    this.backlogListArray = this.filterArray(this.backlogListArray);

    // Progress Column
    this.progressList.textContent = '';
    this.progressListArray.forEach((progressItem: any, index: any) => {
      this.createItemEl(this.progressList, 1, progressItem, index);
    });
    this.progressListArray = this.filterArray(this.progressListArray);

    // Complete Column
    this.completeList.textContent = '';
    this.completeListArray.forEach((completeItem: any, index: any) => {
      this.createItemEl(this.completeList, 2, completeItem, index);
    });
    this.completeListArray = this.filterArray(this.completeListArray);

    // On Hold Column
    this.onHoldList.textContent = '';
    this.onHoldListArray.forEach((onHoldItem: any, index: any) => {
      this.createItemEl(this.onHoldList, 3, onHoldItem, index);
    });
    this.onHoldListArray = this.filterArray(this.onHoldListArray);

    this.updatedOnLoad = true;
    this.updateSavedColumns();
  }

  // Set localStorage array
  private updateSavedColumns() {
    this.listArrays = [
      this.backlogListArray,
      this.progressListArray,
      this.completeListArray,
      this.onHoldListArray
    ];
    const arrayNames = ['backlog', 'progress', 'complete', 'onHold'];
    arrayNames.forEach((arrayName, index) => {
      localStorage.setItem(
        `${arrayName}Items`,
        JSON.stringify(this.listArrays[index])
      );
    });
  }

  // Create DOM ELements for each list item
  private createItemEl(
    columnEl: HTMLElement,
    column: any,
    item: any,
    index: any
  ) {
    // List Item
    const listEl: HTMLElement = document.createElement('li');
    listEl.classList.add('drag-item');
    listEl.textContent = item;
    listEl.draggable = true;
    this.dragItem(listEl);
    columnEl.appendChild(listEl);
    listEl.setAttribute('contentEditable', 'true');
    listEl.id = index;
  }

  private handleDragAndDropEvents() {
    this.allowDrop();
    this.dropItem();
    this.dragEnter();
  }

  private handleButtonEvents() {
    this.showInputBox();
    this.hideInputBox();
    this.updateItem();
  }

  private dragItem(element: HTMLElement) {
    element.addEventListener('dragstart', (event) => {
      this.draggedItem = event.target;
    });
  }

  private allowDrop() {
    this.itemLists.forEach((itemList: HTMLElement) => {
      itemList.addEventListener('dragover', (event: Event) => {
        event.preventDefault();
      });
    });
  }

  private dropItem() {
    this.itemLists.forEach((itemList: HTMLElement) => {
      itemList.addEventListener('drop', (event: Event) => {
        event.preventDefault();
        this.itemLists.forEach((itemList: HTMLElement) => {
          itemList.classList.remove('over');
        });
        const parrentEl = this.itemLists[this.currentColumn];
        parrentEl.appendChild(this.draggedItem);
        this.rebuildArrays();
      });
    });
  }

  private dragEnter() {
    this.itemLists.forEach((itemList: HTMLElement, index: any) => {
      itemList.addEventListener('dragenter', () => {
        itemList.classList.add('over');
        this.currentColumn = index;
      });
    });
  }
  // Allow arrays to reflect drag and drop items
  private rebuildArrays() {
    this.backlogListArray = [];
    this.completeListArray = [];
    this.progressListArray = [];
    this.onHoldListArray = [];

    for (let i = 0; i < this.backlogList.children.length; i++) {
      this.backlogListArray.push(this.backlogList.children[i].textContent);
    }
    for (let i = 0; i < this.progressList.children.length; i++) {
      this.progressListArray.push(this.progressList.children[i].textContent);
    }

    for (let i = 0; i < this.completeList.children.length; i++) {
      this.completeListArray.push(this.completeList.children[i].textContent);
    }

    for (let i = 0; i < this.onHoldList.children.length; i++) {
      this.onHoldListArray.push(this.onHoldList.children[i].textContent);
    }

    this.updateDOM();
  }

  // Show add item input box
  private showInputBox() {
    this.addBtns.forEach((addBtn: HTMLElement, index: any) => {
      addBtn.addEventListener('click', (event: any) => {
        addBtn.style.visibility = 'hidden';
        this.saveItemBtns[index].style.display = 'flex';
        this.addItemContainers[index].style.display = 'flex';
      });
    });
  }

  // Save and hide item input box
  private hideInputBox() {
    this.saveItemBtns.forEach((saveItemBtn: HTMLElement, index: any) => {
      saveItemBtn.addEventListener('click', (event: any) => {
        saveItemBtn.style.display = 'none';
        this.addBtns[index].style.visibility = 'visible';
        this.addItemContainers[index].style.display = 'none';
        this.addToColumn(index);
      });
    });
  }

  // Add text to localStorage
  private addToColumn(index: any) {
    const itemText = this.addItems[index].textContent;
    const selectedArray = this.listArrays[index];
    if (itemText) {
      selectedArray.push(itemText);
      this.updateDOM();
    }
    this.addItems[index].textContent = '';
  }

  // update item or delete
  private updateItem() {
    this.itemLists.forEach((itemList: HTMLElement, index: any) => {
      itemList.addEventListener('focusout', (event: any) => {
        const id = event.target.id;
        const selectedArray = this.listArrays[index];
        const selectedColumnEl = this.itemLists[index].children;
        if (!selectedColumnEl[id].textContent) {
          delete selectedArray[id];
        }
        console.log(selectedArray);
        console.log(selectedColumnEl[id].textContent);
        this.updateDOM();
      });
    });
  }

  // Filter arrays to remove empty items
  private filterArray(array: any) {
    return array.filter((item: any) => item !== null);
  }
}
