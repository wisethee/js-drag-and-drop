export class App {
  constructor() {
    this.getSavedColumns();
    this.updateSavedColumns();
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
}
