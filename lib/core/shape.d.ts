/// <reference types="@antv/util" />
import Element = require('./element');
declare const Shape2: (new (cfg: any) => {
    show: () => any;
    hide: () => any;
    remove: (destroy?: boolean, delayRemove?: boolean) => any;
    transform: (ts: any) => any;
    rotate: (radian: any) => any;
    on: (evt: any, callback: any, one: any) => any;
    one: (evt: any, callback: any) => any;
    emit: ((evt: any) => void) & ((evt: any, e: any) => void);
    trigger: () => void;
    off: (evt: any, callback: any) => any;
    removeEvent: (evt: any) => any;
    _getEvents: () => any;
    _cfg: {
        id: number;
        zIndex: number;
        canvas: any;
        parent: any;
        capture: boolean;
        context: any;
        visible: boolean;
        destroyed: boolean;
    };
    canFill: boolean;
    canStroke: boolean;
    initAttrs: (attrs: any) => any;
    getDefaultAttrs: () => {};
    attr: import("./mixin/attribute").IAttr;
    _setAttr: (name: any, value: any) => void;
    hasFill: () => any;
    hasStroke: () => any;
    _setClip: (item: any) => void;
    animate: import("./mixin/animation").IAnimate;
    stopAnimate: () => void;
    pauseAnimate: () => any;
    resumeAnimate: () => any;
    initTransform: () => void;
    resetMatrix: () => void;
    translate: (tx: any, ty: any) => any;
    scale: (s1: any, s2: any) => any;
    rotateAtStart: (rotate: any) => any;
    move: (x: number, y: number) => any;
    setTransform: (ts: any) => any;
    getMatrix: () => any;
    setMatrix: (m: any) => any;
    apply: (v: any, root: any) => any;
    _getMatrixByRoot: (root: any) => number[];
    getTotalMatrix: () => any;
    invert: (v: any) => any;
    resetTransform: (context: any) => void;
    init: () => void;
    getParent: () => any;
    getDefaultCfg: () => {};
    set: Element.ISet;
    setSilent: (name: any, value: any) => void;
    get: Element.IGet;
    destroy: () => void;
    toFront: () => void;
    toBack: () => void;
    _beforeSetZIndex: (zIndex: number) => number;
    _setAttrs: (attrs: any) => any;
    setZIndex: (zIndex: number) => any;
} & {
    isPointInPath(x: number, y: number): any;
} & {
    isShape: boolean;
    drawInner(context: any): void;
    afterPath(...args: any[]): any;
    /**
     * 击中图形时是否进行包围盒判断
     * @return {Boolean} [description]
     */
    isHitBox(this: Shape): boolean;
    /**
     * 节点是否能够被击中
     * @param {Number} x x坐标
     * @param {Number} y y坐标
     * @return {Boolean} 是否在图形中
     */
    isHit(x: number, y: number): boolean;
    /**
     * @protected
     * 计算包围盒
     * @return {Object} 包围盒
     */
    calculateBox(this: Shape): any;
    getHitLineWidth(): number;
    clearTotalMatrix(this: Shape): void;
    clearBBox(this: Shape): void;
    getBBox(this: Shape): Common.BBox;
    clone(this: Shape): any;
}) & {
    ATTRS: {};
    superclass: typeof Element;
};
declare class Shape extends Shape2 {
    _attrs: Shape.BaseAttr;
}
export = Shape;
import Common from '../common';
import ShapeEx_ from './shape-ex';
interface Shape extends ShapeEx_ {
    type: string;
    _cfg: Element['_cfg'] & {
        box: Common.BBox;
    };
}
declare namespace Shape {
    type ShapeEx = ShapeEx_;
    type BaseAttr = Common.Style;
}
