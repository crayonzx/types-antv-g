/// <reference types="@antv/util" />
import Common from '../common';
import Shape = require('../core/shape');
declare const Path2: (new (cfg: any) => {
    show: () => any;
    hide: () => any;
    clone: (this: Shape) => any;
    remove: (destroy?: boolean, delayRemove?: boolean) => any;
    transform: (ts: any) => any;
    _attrs: Common.Style;
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
        box: Common.BBox;
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
    getBBox: (this: Shape) => Common.BBox;
    isPointInPath: (x: number, y: number) => any;
    isShape: boolean;
    drawInner: (context: any) => void;
    isHitBox: (this: Shape) => boolean;
    isHit: (x: number, y: number) => boolean;
    getHitLineWidth: () => number;
} & {
    canFill: boolean;
    canStroke: boolean;
    type: "path";
    getDefaultAttrs(): {
        lineWidth: number;
        startArrow: boolean;
        endArrow: boolean;
    };
    _afterSetAttrPath(path: any): void;
    calculateBox(): {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    };
    _setTcache(): void;
    getTotalLength(): any;
    _calculateCurve(): void;
    getStartTangent(): any;
    getEndTangent(): any;
    getPoint(t: any): {
        x: any;
        y: any;
    };
    createPath(context: any): void;
    afterPath(context: any): void;
}) & {
    ATTRS: {
        path: Common.SVGPathOrStr;
        lineWidth: number;
        startArrow: boolean;
        endArrow: boolean;
    };
    superclass: typeof Shape;
};
declare class Path extends Path2 {
    _attrs: typeof Path.ATTRS & Shape['_attrs'];
}
interface Path extends Shape.ShapeEx {
}
export = Path;
