export class App {
  constructor() {
    this.handleDragAndDrop();
  }

  private addBtns = document.querySelectorAll('.add-btn:not(.solid)');
  private saveItemBtns = document.querySelectorAll('.solid');
  private addItemContainers = document.querySelectorAll('.add-container');
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

    // Progress Column
    this.progressList.textContent = '';
    this.progressListArray.forEach((progressItem: any, index: any) => {
      this.createItemEl(this.progressList, 1, progressItem, index);
    });

    // Complete Column
    this.completeList.textContent = '';
    this.completeListArray.forEach((completeItem: any, index: any) => {
      this.createItemEl(this.completeList, 2, completeItem, index);
    });

    // On Hold Column
    this.onHoldList.textContent = '';
    this.onHoldListArray.forEach((onHoldItem: any, index: any) => {
      this.createItemEl(this.onHoldList, 3, onHoldItem, index);
    });
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
    const listEl = document.createElement('li');
    listEl.classList.add('drag-item');
    listEl.textContent = item;
    listEl.draggable = true;
    this.dragItem(listEl);
    columnEl.appendChild(listEl);
  }

  private handleDragAndDrop() {
    this.allowDrop();
    this.dropItem();
    this.dragEnter();
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
}
