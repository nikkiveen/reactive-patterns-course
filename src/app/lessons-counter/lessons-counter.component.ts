import { Component, OnInit } from '@angular/core';
import { Observer, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON, globalEventBus } from '../event-bus-experiments/event-bus';
import { Lesson } from '../shared/models/lesson';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.scss']
})
export class LessonsCounterComponent implements Observer {
    lessonsCounter = 0;

    constructor() {
        console.log('LessonsCounterComponent is registered as observer ...');
        globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);

        globalEventBus.registerObserver(ADD_NEW_LESSON, {
            notify: lessonText => this.lessonsCounter += 1
        } );
    }

    notify(data: Lesson[]) {
        console.log('LessonsCounterComponent received data ...');
        this.lessonsCounter = data.length;
    }
}
