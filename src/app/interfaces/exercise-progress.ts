import { IExerciseSet } from './exercise-set';

export interface IExerciseProgress {
  _id: string;
  exerciseId: number;
  sets: IExerciseSet[];
  restTime: number;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
