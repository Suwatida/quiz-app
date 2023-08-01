import { Component, Inject } from '@angular/core';
import { Question } from '../question';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {

  quizService: QuizService;

  questions: Question[];
  currentQuestionIndex = 0;
  score = 0;

  constructor(@Inject(QuizService) quizService: QuizService) {
    this.quizService = quizService;
    this.questions = this.quizService.getQuizData();
  }

  onClickBack() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  onClickNext() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      console.log('End of quiz.');
    }
  }

  onClickQuestionList() {
    this.currentQuestionIndex = this.questions.length;
  }

  onClickEach() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    } else {
      this.currentQuestionIndex = this.questions.length - 1;
    }
  }
}