import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizData: Question[] = [
    {
      id: 1,
      text: 'Politics: Who is the current President/Prime Minister of Canada?',
      choices: 'Justin Trudeau'
    },
    {
      id: 2,
      text: 'Geography: Which river is the longest in the world?',
      choices: 'Nile River'
    },
    {
      id: 3,
      text: 'Literature: Who is the author of the play "Romeo and Juliet"?',
      choices: 'William Shakespeare'
    },
    {
      id: 4,
      text: 'Sports: In which sport would you perform a slam dunk?',
      choices: 'Basketball'
    },
    {
      id: 5,
      text: 'Entertainment: Which actor played the role of Tony Stark/Iron Man in the Marvel Cinematic Universe?',
      choices: 'Robert Downey Jr.',

    },
    {
      id: 6,
      text: 'Who painted this portrait painting?',
      choices: 'Leonardo da Vinci'
    },
    {
      id: 7,
      text: 'Who painted this painting?',
      choices: 'Vincent van Gogh'
    }
  ];
  constructor() { }


  getQuizData() {
    return this.quizData;
  }
}