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

  private addBtns: any = document.querySelectorAll('.button-add');
  private saveItemBtns: any = document.querySelectorAll('.button-save');
  private addItemContainers: any = document.querySelectorAll('.column-add-container');
  private addItems = document.querySelectorAll('.add-item');

  private itemsCount = document.querySelectorAll('.column-header-count');

  // List Array
  private itemListArray: any = [];
  private toDoListArray: any = [];
  private progressListArray: any = [];
  private reviewListArray: any = [];
  private completedListArray: any = [];

  private updatedOnLoad = false;

  // Drag
  private draggedItem: any;
  private currentColumn: any;
  private dragging = false;

  updateDOM() {
    // Check localStorage
    if (!this.updatedOnLoad) {
      this.getSavedColumns();
    }

    // Backlog Column
    this.toDoList.textContent = '';
    this.toDoListArray.forEach((backlogItem: any, index: any) => {
      this.createItem(this.toDoList, 0, backlogItem, index);
    });
    this.toDoListArray = this.filterArray(this.toDoListArray);

    // Progress Column
    this.progressList.textContent = '';
    this.progressListArray.forEach((progressItem: any, index: any) => {
      this.createItem(this.progressList, 1, progressItem, index);
    });
    this.progressListArray = this.filterArray(this.progressListArray);

    // Complete Column
    this.reviewList.textContent = '';
    this.reviewListArray.forEach((completeItem: any, index: any) => {
      this.createItem(this.reviewList, 2, completeItem, index);
    });
    this.reviewListArray = this.filterArray(this.reviewListArray);

    // On Hold Column
    this.completedList.textContent = '';
    this.completedListArray.forEach((onHoldItem: any, index: any) => {
      this.createItem(this.completedList, 3, onHoldItem, index);
    });
    this.completedListArray = this.filterArray(this.completedListArray);

    this.updatedOnLoad = true;
    this.updateSavedColumns();
    this.updateCount();
  }

  private handleEvents() {
    this.allowDrop();
    this.dropItem();
    this.dragEnter();
    this.makeItemEditable();
    this.showInputBox();
    this.hideInputBox();
    this.updateItem();
  }

  // Get Arrays from localStorage if available, set default values if not
  private getSavedColumns() {
    if (localStorage.length > 0) {
      this.toDoListArray = JSON.parse(localStorage.toDoItems);
      this.progressListArray = JSON.parse(localStorage.progressItems);
      this.reviewListArray = JSON.parse(localStorage.reviewItems);
      this.completedListArray = JSON.parse(localStorage.completedItems);
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
    const arrayNames = ['toDo', 'progress', 'review', 'completed'];
    arrayNames.forEach((arrayName, index) => {
      localStorage.setItem(
        `${arrayName}Items`,
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

    // console.log('before: ', this.toDoListArray);

    this.toDoListArray = Array.from(this.toDoList.children).map(
      (item: any) => item.textContent
    );
    // console.log('after: ', this.toDoListArray);

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

  // Show add item input box
  private showInputBox() {
    this.addBtns.forEach((addBtn: HTMLElement, index: any) => {
      addBtn.addEventListener('click', (event: any) => {
        addBtn.style.visibility = 'hidden';
        this.saveItemBtns[index].style.display = 'flex';
        this.addItemContainers[index].style.display = 'block';
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
    const selectedArray = this.itemListArray[index];
    if (itemText) {
      selectedArray.push(itemText);
      this.updateDOM();
    }
    this.addItems[index].textContent = '';
  }

  // update item or delete
  private updateItem() {
    this.itemList.forEach((item: HTMLElement, index: any) => {
      item.addEventListener('focusout', (event: any) => {
        const id = event.target.id;
        const selectedArray = this.itemListArray[index];
        const selectedColumnEl = this.itemList[index].children;

        if (!selectedColumnEl[id].textContent) {
          delete selectedArray[id];
        } else {
          selectedArray[id] = selectedColumnEl[id].textContent;
        }
        this.updateDOM();
      });
    });
  }

  private makeItemEditable() {
    this.itemList.forEach((item: HTMLElement, index: any) => {
      if (!this.dragging) {
        item.addEventListener('click', (event: any) => {
          event.target.setAttribute('contentEditable', 'true');
        });
      }
    });
  }

  private updateCount() {
    this.itemList.forEach((item: HTMLElement, index: any) => {
      const itemEl: any = item.children.length;
      this.itemsCount[index].textContent = itemEl;
    });
  }
}
