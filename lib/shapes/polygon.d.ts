/// <reference types="@antv/util" />
import Shape = require('../core/shape');
declare const Polygon2: (new (cfg: any) => {
    show: () => any;
    hide: () => any;
    clone: (this: Shape) => any;
    remove: (destroy?: boolean, delayRemove?: boolean) => any;
    transform: (ts: any) => any;
    _attrs: GCommon.Style;
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
    } & {
        box: GCommon.BBox;
    };
    initAttrs: (attrs: any) => any;
    attr: import("../core/mixin/attribute").IAttr;
    _setAttr: (name: any, value: any) => void;
    clearBBox: (this: Shape) => void;
    hasFill: () => any;
    hasStroke: () => any;
    _setClip: (item: any) => void;
    animate: import("../core/mixin/animation").IAnimate;
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
    clearTotalMatrix: (this: Shape) => void;
    invert: (v: any) => any;
    resetTransform: (context: any) => void;
    init: () => void;
    getParent: () => any;
    getDefaultCfg: () => {};
    set: import("../core/element").ISet;
    setSilent: (name: any, value: any) => void;
    get: import("../core/element").IGet;
    destroy: () => void;
    toFront: () => void;
    toBack: () => void;
    _beforeSetZIndex: (zIndex: number) => number;
    _setAttrs: (attrs: any) => any;
    setZIndex: (zIndex: number) => any;
    getBBox: (this: Shape) => GCommon.BBox;
    isPointInPath: (x: number, y: number) => any;
    isShape: boolean;
    drawInner: (context: any) => void;
    afterPath: (...args: any[]) => any;
    isHitBox: (this: Shape) => boolean;
    isHit: (x: number, y: number) => boolean;
    getHitLineWidth: () => number;
} & {
    canFill: boolean;
    canStroke: boolean;
    type: "polygon";
    getDefaultAttrs(): {
        lineWidth: number;
    };
    calculateBox(): {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    };
    createPath(context: any): void;
}) & {
    ATTRS: {
        points: [number, number][];
        lineWidth: number;
    };
    superclass: typeof Shape;
};
declare class Polygon extends Polygon2 {
    _attrs: typeof Polygon.ATTRS & Shape['_attrs'];
}
interface Polygon extends Shape.ShapeEx {
}
export = Polygon;
