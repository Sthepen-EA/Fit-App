import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { IExercise } from '../../../interfaces/exercise';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  api_url = `${base_url}/exercises`;

  http: HttpClient = inject(HttpClient);

  getAllExercises() {
    return this.http.get<IExercise[]>(this.api_url);
  }
}
