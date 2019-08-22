import { Component, OnInit } from '@angular/core';
import { globalEventBus, LESSONS_LIST_AVAILABLE } from './event-bus';
import { testLessons } from '../shared/models/test-lessons';

@Component({
    selector: 'event-bus-experiments',
    templateUrl: './event-bus-experiments.component.html',
    styleUrls: ['./event-bus-experiments.component.scss']
})
export class EventBusExperimentsComponent implements OnInit {
    ngOnInit() {
        console.log("EventBusExperimentsComponent broadcasted all lessons ...");
        globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, testLessons);
        testLessons.slice(0);
    }
}
