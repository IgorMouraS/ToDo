export const TASKS_KEY = 'tasks'

export interface Task {
  id: string;
  title: string;
  concluded: boolean;
  editing: boolean;
}