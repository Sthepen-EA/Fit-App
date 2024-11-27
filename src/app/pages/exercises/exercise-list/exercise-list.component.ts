import { Component, inject } from '@angular/core';
import { ExerciseService } from '../../../core/services/exercise/exercise.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { IExercise } from '../../../interfaces/exercise';

@Component({
  selector: 'app-exercise-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css',
})
export class ExerciseListComponent {
  exerciseService = inject(ExerciseService);

  exerciseList$: Observable<IExercise[]> =
    this.exerciseService.getAllExercises();

  ngOnInit(): void {
    this.exerciseList$.subscribe((data) => console.log(data));
  }
}
