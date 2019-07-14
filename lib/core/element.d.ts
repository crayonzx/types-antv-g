/// <reference types="@antv/util" />
import Attribute = require('./mixin/attribute');
import Transform = require('./mixin/transform');
import Animate = require('./mixin/animation');
import EventEmitter = require('./advanced-event-emitter');
declare class Element {
    constructor(cfg?: Partial<Element.CFG>);
    static CFG: {
        /**
         * 唯一标示
         * @type {Number}
         */
        id: number;
        /**
         * Z轴的层叠关系，Z值越大离用户越近
         * @type {Number}
         */
        zIndex: number;
        /**
         * Canvas对象
         * @type: {Object}
         */
        canvas: Canvas;
        /**
         * 父元素指针
         * @type {Object}
         */
        parent: Element;
        /**
         * 用来设置当前对象是否能被捕捉
         * true 能
         * false 不能
         * 对象默认是都可以被捕捉的, 当capture为false时，group.getShape(x, y)方法无法获得该元素
         * 通过将不必要捕捉的元素的该属性设置成false, 来提高捕捉性能
         * @type {Boolean}
         **/
        capture: boolean;
        /**
         * 画布的上下文
         * @type {Object}
         */
        context: any;
        /**
         * 是否显示
         * @type {Boolean}
         */
        visible: boolean;
        /**
         * 是否被销毁
         * @type: {Boolean}
         */
        destroyed: boolean;
    };
    init(): void;
    getParent(): Element;
    /**
     * 获取默认的配置信息
     * @protected
     * @return {Object} 默认的属性
     */
    getDefaultCfg<T extends {
        _cfg: any;
    }>(this: T): T['_cfg'];
    set: Element.ISet;
    setSilent(name: any, value: any): void;
    get: Element.IGet;
    show<T>(this: T): T;
    hide(): this;
    remove<T>(this: T, destroy?: boolean, delayRemove?: boolean): T;
    destroy(): void;
    toFront(): void;
    toBack(): void;
    _beforeSetZIndex(zIndex: any): any;
    _setAttrs(attrs: any): any;
    setZIndex(zIndex: number): number;
    clone<T>(this: T): T;
    getBBox(): Common.BBox;
}
export = Element;
import Common from '../common';
import Canvas from '../canvas';
interface Element extends Attribute, Transform, EventEmitter, Animate {
    _cfg: Element.CFG;
}
declare namespace Element {
    type CFG = typeof Element.CFG;
    interface IGet {
        <T extends {
            _cfg: any;
        }, K extends keyof T['_cfg']>(this: T, name: K): T['_cfg'][K];
        <T>(name: string): T;
    }
    interface ISet {
        <T extends {
            _cfg: any;
        }, K extends keyof T['_cfg']>(this: T, name: K, value: T['_cfg'][K]): T;
        <T>(this: T, name: string, value: any): T;
    }
}
