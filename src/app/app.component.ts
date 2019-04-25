import { Component } from '@angular/core';

import applicantData from '../assets/data/applicants.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'applicants';

  columnDefs = [
    {headerName: 'ID', field: 'id', sortable: true, filter: true},
    {headerName: 'Name', field: 'name', sortable: true, filter: true}, 
    {headerName: 'Position', field: 'position', sortable: true, filter: true},
    {headerName: 'Applied', field: 'applied', sortable: true, filter: true},
    {headerName: 'Experience', field: 'experience', sortable: true, filter: true}, 
    {headerName: 'Availability', field: 'availabilty', sortable: true, filter: true},
    {headerName: 'Questions', field: 'questions', sortable: true, filter: true},
    {headerName: 'Favorite', field: 'favorite', sortable: true, filter: true, CellEditor: 'agRichSelectCellEditor',cellEditorParams: {
      values: ['Yes', 'No']
    }}
];


rowData = applicantData;



constructor() {

}


}


