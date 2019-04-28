import EventEmitter = require('./event-emitter');
declare const AdvancedEE1: (new () => {} & EventEmitter & {
    emit(evt: any, e: any): void;
}) & {};
declare class AdvancedEE extends AdvancedEE1 {
}
export = AdvancedEE;
