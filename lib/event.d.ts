declare class Event {
    constructor(type: any, event: any, bubbles: any, cancelable: any);
    preventDefault(): void;
    stopPropagation(): void;
    remove(): void;
    clone(): this;
    toString(): string;
}
export = Event;
