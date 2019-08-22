import { Component, OnInit } from '@angular/core';
import { globalEventBus, Observer } from '../event-bus-experiments/event-bus';
import { Lesson } from '../shared/models/lesson';

@Component({
    selector: 'lessons-list',
    templateUrl: './lessons-list.component.html',
    styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent implements Observer {
    lessons: Lesson[] = [];

    constructor() {
        console.log("LessonsListComponent registered is registered as observer ...");
        globalEventBus.registerObserver(this);
    }

    notify(data: Lesson[]) {
        console.log("LessonsListComponent received data ...");
        this.lessons = data;
    }
}
