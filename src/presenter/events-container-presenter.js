import EventSortView from '../view/events-sort-view.js';
import EventsListView from '../view/events-list-view.js';
import EventsPresenter from './events-presenter.js';
import { render, RenderPosition } from '../render';


export default class EventsContainerPresenter {
  eventSortComponent = new EventSortView();
  eventsListComponent = new EventsListView();

  init() {
    const eventsConstainerNode = document.querySelector('.trip-events');
    render(this.eventSortComponent, eventsConstainerNode, RenderPosition.AFTERBEGIN);
    render(this.eventsListComponent, eventsConstainerNode, RenderPosition.BEFOREEND);

    const eventListContinerNode = document.querySelector('.trip-events__list');
    const eventsPresenter = new EventsPresenter({ eventsListContainer: eventListContinerNode });

    eventsPresenter.init();
  }
}
