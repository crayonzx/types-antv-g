import Event = require('../event');
import EventEmitter = require('./event-emitter');
declare class AdvancedEE extends EventEmitter {
    emit(evt: string, e?: Event): void;
}
export = AdvancedEE;
