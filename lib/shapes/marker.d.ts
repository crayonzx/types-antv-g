/// <reference types="@antv/util" />
import Common from '../common';
import Shape = require('../core/shape');
declare const Marker2: (new (cfg: any) => {
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
    isPointInPath: (x: number, y: number) => any;
    isShape: boolean;
    drawInner: (context: any) => void;
    afterPath: (...args: any[]) => any;
    isHitBox: (this: Shape) => boolean;
    isHit: (x: number, y: number) => boolean;
    getHitLineWidth: () => number;
} & {
    type: "marker";
    canFill: boolean;
    canStroke: boolean;
    getDefaultAttrs(): {
        x: number;
        y: number;
        lineWidth: number;
    };
    calculateBox(): {
        minX: number;
        minY: number;
        maxX: any;
        maxY: any;
    };
    _getPath(): (["m" | "M", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["t" | "T", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
    createPath(context: any): void;
}) & {
    ATTRS: {
        path: any;
        lineWidth: number;
        x: number;
        y: number;
        r: number;
        radius: number;
        symbol: "square" | "triangle" | "circle" | "diamond" | "triangle-down" | ((x: number, y: number, r: number) => (["m" | "M", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["t" | "T", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[]);
    };
    superclass: typeof Shape;
    Symbols: {
        circle(x: any, y: any, r: any): any[][];
        square(x: any, y: any, r: any): any[][];
        diamond(x: any, y: any, r: any): any[][];
        triangle(x: any, y: any, r: any): any[][];
        'triangle-down': (x: any, y: any, r: any) => any[][];
    };
};
declare class Marker extends Marker2 {
    _attrs: typeof Marker.ATTRS & Shape['_attrs'];
}
interface Marker extends Shape.ShapeEx {
}
export = Marker;
