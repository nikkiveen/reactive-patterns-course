import { Component, OnInit } from '@angular/core';
import { globalEventBus, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON } from './event-bus';
import { testLessons } from '../shared/models/test-lessons';
import { Lesson } from '../shared/models/lesson';

@Component({
    selector: 'event-bus-experiments',
    templateUrl: './event-bus-experiments.component.html',
    styleUrls: ['./event-bus-experiments.component.scss']
})
export class EventBusExperimentsComponent implements OnInit {
    lessons: Lesson[] = [];

    ngOnInit() {
        console.log("EventBusExperimentsComponent broadcasted all lessons ...");
        this.lessons = testLessons.slice(0);
        globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, this.lessons);

        setTimeout(() => {
            this.lessons.push({
                id: Math.random(),
                description: "New Lesson Arriving From the Backend"
            });

            globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, this.lessons);
        }, 10000);
    }

    addLesson(lessonText: string) {
        globalEventBus.notifyObservers(ADD_NEW_LESSON, lessonText);
    }
}
