declare const EventEmitter1: (new () => {} & {
    on(evt: any, callback: any, one: any): any;
    one(evt: any, callback: any): any;
    emit(evt: any): void;
    trigger(): void;
    off(evt: any, callback: any): any;
    removeEvent(evt: any): any;
    _getEvents(): any;
}) & {};
declare class EventEmitter extends EventEmitter1 {
}
export = EventEmitter;
