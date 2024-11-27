import { Routes } from '@angular/router';
import { UserDetailsComponent } from './pages/users/user-details/user-details.component';
import { ExerciseListComponent } from './pages/exercises/exercise-list/exercise-list.component';
import { RoutineListComponent } from './pages/routines/routine-list/routine-list.component';

export const routes: Routes = [
  {
    path: 'perfil',
    component: UserDetailsComponent,
  },
  {
    path: 'ejercicios',
    component: ExerciseListComponent,
  },
  {
    path: 'rutinas',
    component: RoutineListComponent,
  },
];
