import Event = require('../../event');
declare const Mixin: {
    registerEvent(): void;
    _getEmitter(element: any, event: any): any;
    _getEventObj(type: any, e: any, point: any, target: any): Event;
    _triggerEvent(type: any, e: any): void;
    _emitEvent(type: any, evt: any, point: any, shape: any): any;
};
export = Mixin;
declare type Mixin = typeof Mixin;
