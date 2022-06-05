export class App {
  constructor() {
    // this.getSavedColumns();
    // this.updateSavedColumns();
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

  // Create DOM ELements for each list item
  createItemEl(columnEl: HTMLElement, column: any, item: any, index: any) {
    // console.log('columnEl: ', columnEl);
    // console.log('column: ', column);
    // console.log('item: ', item);
    // console.log('index: ', index);
    // List Item
    const listEl = document.createElement('li');
    listEl.classList.add('drag-item');
    listEl.textContent = item;
    columnEl.appendChild(listEl);
  }
}
