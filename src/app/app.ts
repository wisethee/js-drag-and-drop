export class App {
  constructor() {
    this.updateDOM();
    this.handleEvents();
  }

  // HTML Elements
  private itemList: NodeListOf<HTMLElement> = document.querySelectorAll('.item-list');
  private toDoList: HTMLElement = document.getElementById('to-do-list');
  private progressList: HTMLElement = document.getElementById('progress-list');
  private reviewList: HTMLElement = document.getElementById('review-list');
  private completedList: HTMLElement = document.getElementById('completed-list');
  private headerList: NodeListOf<HTMLElement> = document.querySelectorAll(
    '.column-header-description'
  );

  // List Array
  private itemListArray: any = [];
  private toDoListArray: any = [];
  private progressListArray: any = [];
  private reviewListArray: any = [];
  private completedListArray: any = [];

  private updateOnLoad: boolean = false;

  // Drag
  private draggedItem: any;
  private currentColumn: any;
  private dragging = false;

  private updateDOM() {
    if (!this.updateOnLoad) {
      this.getSavedColumns();
    }

    // ToDO Column
    this.toDoList.textContent = '';
    this.toDoListArray.forEach((toDoItem: any, index: any) => {
      this.createItem(this.toDoList, 0, toDoItem, index);
    });
    this.toDoListArray = this.filterArray(this.toDoListArray);

    // Progress Column
    this.progressList.textContent = '';
    this.progressListArray.forEach((progressItem: any, index: any) => {
      this.createItem(this.progressList, 0, progressItem, index);
    });
    this.progressListArray = this.filterArray(this.progressListArray);

    // Review Column
    this.reviewList.textContent = '';
    this.reviewListArray.forEach((reviewItem: any, index: any) => {
      this.createItem(this.reviewList, 0, reviewItem, index);
    });
    this.reviewListArray = this.filterArray(this.reviewListArray);

    // Completed Column
    this.completedList.textContent = '';
    this.completedListArray.forEach((completedItem: any, index: any) => {
      this.createItem(this.completedList, 0, completedItem, index);
    });
    this.completedListArray = this.filterArray(this.completedListArray);

    this.updateOnLoad = true;
    this.updateSavedColumns();
  }

  private handleEvents() {
    this.allowDrop();
    this.dropItem();
    this.dragEnter();
    // this.makeItemEditable();
    // this.showInputBox();
    // this.hideInputBox();
    // this.updateItem();
  }

  // Get Arrays from localStorage if available, set default values if not
  private getSavedColumns() {
    if (localStorage.getItem('toDoListItems')) {
      this.toDoListArray = JSON.parse(localStorage.toDoListItems);
      this.progressListArray = JSON.parse(localStorage.progressListItems);
      this.reviewListArray = JSON.parse(localStorage.reviewListItems);
      this.completedListArray = JSON.parse(localStorage.completedListItems);
    } else {
      this.toDoListArray = ['Release the course', 'Sit back and relax'];
      this.progressListArray = ['Work on projects', 'Listen to music'];
      this.reviewListArray = ['Being cool', 'Getting stuff done'];
      this.completedListArray = ['Being uncool'];
    }
  }

  // Set localStorage Arrays
  private updateSavedColumns() {
    this.itemListArray = [
      this.toDoListArray,
      this.progressListArray,
      this.reviewListArray,
      this.completedListArray
    ];
    const itemListNames = ['toDo', 'progress', 'review', 'completed'];
    itemListNames.forEach((itemLIstName, index) => {
      localStorage.setItem(
        `${itemLIstName}Items`,
        JSON.stringify(this.itemListArray[index])
      );
    });
  }

  private filterArray(array: any) {
    const filteredArray = array.filter((item: any) => item !== null);
    return filteredArray;
  }

  // Create DOM Elements for each list item
  private createItem(columnEl: any, column: any, item: any, index: any) {
    const listEl = document.createElement('span');
    listEl.textContent = item;
    listEl.id = index;
    listEl.classList.add('item');
    listEl.draggable = true;
    this.dragItem(listEl);
    columnEl.appendChild(listEl);
    listEl.id = index;
  }

  private dragItem(element: HTMLElement) {
    element.addEventListener('dragstart', (event) => {
      this.draggedItem = event.target;
      this.dragging = true;
    });
  }

  private allowDrop() {
    this.itemList.forEach((item: HTMLElement) => {
      item.addEventListener('dragover', (event: Event) => {
        event.preventDefault();
      });
    });
  }

  private dropItem() {
    this.itemList.forEach((item: HTMLElement) => {
      item.addEventListener('drop', (event: Event) => {
        event.preventDefault();
        this.itemList.forEach((itemList: HTMLElement) => {
          // itemList.classList.remove('over');
        });
        const parrentEl = this.itemList[this.currentColumn];
        parrentEl.appendChild(this.draggedItem);
        this.dragging = false;
        this.rebuildArrays();
      });
    });
  }

  private dragEnter() {
    this.itemList.forEach((item: HTMLElement, index: any) => {
      item.addEventListener('dragenter', () => {
        // item.classList.add('over');
        this.currentColumn = index;
      });
    });
  }

  // Allow arrays to reflect drag and drop items
  private rebuildArrays() {
    this.toDoListArray = [];
    this.progressListArray = [];
    this.reviewListArray = [];
    this.completedListArray = [];

    this.toDoListArray = Array.from(this.toDoList.children).map(
      (item: any) => item.textContent
    );

    this.progressListArray = Array.from(this.progressList.children).map(
      (item: any) => item.textContent
    );

    this.reviewListArray = Array.from(this.reviewList.children).map(
      (item: any) => item.textContent
    );

    this.completedListArray = Array.from(this.completedList.children).map(
      (item: any) => item.textContent
    );

    this.updateDOM();
  }
}
