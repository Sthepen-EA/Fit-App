import { Component } from '@angular/core';
import { TableComponent } from '../../../shared/components/table/table.component';

@Component({
  selector: 'app-routine-list',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './routine-list.component.html',
  styleUrl: './routine-list.component.css',
})
export class RoutineListComponent {}
