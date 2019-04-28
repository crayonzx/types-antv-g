declare const Event1: (new (type: any, event: any, bubbles: any, cancelable: any) => {} & {
    preventDefault(): void;
    stopPropagation(): void;
    remove(): void;
    clone(): any;
    toString(): string;
}) & {};
declare class Event extends Event1 {
}
export = Event;
