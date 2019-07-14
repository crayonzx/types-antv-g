declare class EventEmitter {
    on(evt: string, callback: Callback, one?: boolean): this;
    one(evt: string, callback: Callback): this;
    emit(evt: string): void;
    trigger(): void;
    off(evt: string, callback: Callback): this;
    removeEvent(evt: string): this;
    _getEvents(): any;
}
export = EventEmitter;
declare type Callback = (...args: any[]) => any;
