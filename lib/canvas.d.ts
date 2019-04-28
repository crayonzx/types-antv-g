/// <reference types="@antv/util" />
import Group = require('./core/group');
import Timeline = require('./core/mixin/timeline');
import renderers = require('./renderers/index');
declare const CFG: {
    eventEnable: boolean;
    /**
     * 像素宽度
     * @type {Number}
     */
    width: number;
    /**
     * 像素高度
     * @type {Number}
     */
    height: number;
    /**
     * 画布宽度
     * @type {Number}
     */
    widthCanvas: number;
    /**
     * 画布高度
     * @type {Number}
     */
    heightCanvas: number;
    /**
     * CSS宽
     * @type {String}
     */
    widthStyle: string;
    /**
     * CSS高
     * @type {String}
     */
    heightStyle: string;
    /**
     * 容器DOM
     * @type {Object}
     */
    containerDOM: HTMLElement;
    /**
     * 当前Canvas的DOM
     * @type {Object}
     */
    canvasDOM: HTMLElement;
    /**
     * 屏幕像素比
     * @type {Number}
     */
    pixelRatio: number;
    /**
     * 渲染器，默认是canvas
     * @type {String}
     */
    renderer: "canvas" | "svg";
};
declare const Canvas2: (new (cfg?: Partial<{
    eventEnable: boolean;
    /**
     * 像素宽度
     * @type {Number}
     */
    width: number;
    /**
     * 像素高度
     * @type {Number}
     */
    height: number;
    /**
     * 画布宽度
     * @type {Number}
     */
    widthCanvas: number;
    /**
     * 画布高度
     * @type {Number}
     */
    heightCanvas: number;
    /**
     * CSS宽
     * @type {String}
     */
    widthStyle: string;
    /**
     * CSS高
     * @type {String}
     */
    heightStyle: string;
    /**
     * 容器DOM
     * @type {Object}
     */
    containerDOM: HTMLElement;
    /**
     * 当前Canvas的DOM
     * @type {Object}
     */
    canvasDOM: HTMLElement;
    /**
     * 屏幕像素比
     * @type {Number}
     */
    pixelRatio: number;
    /**
     * 渲染器，默认是canvas
     * @type {String}
     */
    renderer: "canvas" | "svg";
}>) => {
    add: (items: any) => any;
    show: () => any;
    hide: () => any;
    clone: () => any;
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
    attr: import("./core/mixin/attribute").IAttr;
    _setAttr: (name: any, value: any) => void;
    clearBBox: () => void;
    hasFill: () => any;
    hasStroke: () => any;
    _setClip: (item: any) => void;
    animate: import("./core/mixin/animation").IAnimate;
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
    clearTotalMatrix: () => void;
    invert: (v: any) => any;
    resetTransform: (context: any) => void;
    getParent: () => any;
    getDefaultCfg: () => {};
    set: import("./core/element").ISet;
    setSilent: (name: any, value: any) => void;
    get: import("./core/element").IGet;
    toFront: () => void;
    toBack: () => void;
    _beforeSetZIndex: (zIndex: number) => number;
    _setAttrs: (attrs: any) => any;
    setZIndex: (zIndex: number) => any;
    getBBox: () => Required<GCommon.BBox>;
    type: string;
    sort: () => any;
    find: (fn: any) => any;
    isGroup: boolean;
    _beforeRenderUI: () => void;
    _renderUI: () => void;
    _bindUI: () => void;
    addShape: Group.IAddShape;
    addGroup: Group.IAddGroup;
    renderBack: (padding: number[], attrs: any) => any;
    removeChild: (item: any, destroy: any) => any;
    _setCfgProperty: (item: any) => void;
    contain: (item: any) => boolean;
    getChildByIndex: (index: number) => any;
    getFirst: () => any;
    getLast: () => any;
    getCount: () => number;
    findById: (id: any) => any;
    findAll: (fn: any) => any[];
    findBy: (fn: any) => any;
    findAllBy: (fn: any) => any[];
    clear: (delayRemove: any) => any;
} & {
    registerEvent(): void;
    _getEmitter(element: any, event: any): any;
    _getEventObj(type: any, e: any, point: any, target: any): Event_;
    _triggerEvent(type: any, e: any): void;
    _emitEvent(type: any, evt: any, point: any, shape: any): any;
} & {
    init(this: Canvas): void;
    _scale(this: Canvas): void;
    _setGlobalParam(this: Canvas): void;
    _setContainer(this: Canvas): void;
    _initPainter(this: Canvas): void;
    _resize(this: Canvas): void;
    getWidth(this: Canvas): number;
    getHeight(this: Canvas): number;
    changeSize(this: Canvas, width: number, height: number): void;
    /**
     * 将窗口坐标转变成 canvas 坐标
     * @param  {Number} clientX 窗口x坐标
     * @param  {Number} clientY 窗口y坐标
     * @return {Object} canvas坐标
     */
    getPointByClient(this: Canvas, clientX: number, clientY: number): {
        x: number;
        y: number;
    };
    getClientByPoint(this: Canvas, x: number, y: number): {
        clientX: number;
        clientY: number;
    };
    draw(this: Canvas): void;
    getShape(this: Canvas, x: number, y: number, e: any): any;
    getRenderer(this: Canvas): "canvas" | "svg";
    _drawSync(this: Canvas): void;
    destroy(this: Canvas): void;
}) & {
    CFG: {
        eventEnable: boolean;
        /**
         * 像素宽度
         * @type {Number}
         */
        width: number;
        /**
         * 像素高度
         * @type {Number}
         */
        height: number;
        /**
         * 画布宽度
         * @type {Number}
         */
        widthCanvas: number;
        /**
         * 画布高度
         * @type {Number}
         */
        heightCanvas: number;
        /**
         * CSS宽
         * @type {String}
         */
        widthStyle: string;
        /**
         * CSS高
         * @type {String}
         */
        heightStyle: string;
        /**
         * 容器DOM
         * @type {Object}
         */
        containerDOM: HTMLElement;
        /**
         * 当前Canvas的DOM
         * @type {Object}
         */
        canvasDOM: HTMLElement;
        /**
         * 屏幕像素比
         * @type {Number}
         */
        pixelRatio: number;
        /**
         * 渲染器，默认是canvas
         * @type {String}
         */
        renderer: "canvas" | "svg";
    };
    superclass: typeof Group;
};
import Event_ from './event';
declare class Canvas extends Canvas2 {
    _cfg: Group.CFG & GUtil.Overwrite<Canvas.CFG, {
        canvas: Canvas;
        renderType: keyof typeof renderers;
        renderer: typeof renderers['canvas'] | typeof renderers['svg'];
        containerId: string;
        /** or HTMLCanvasElement if renderType is 'canvas'. */
        el: HTMLElement;
        painter: InstanceType<typeof renderers['canvas']['painter'] | typeof renderers['svg']['painter']>;
        timeline: Timeline;
    }>;
}
export = Canvas;
declare namespace Canvas {
    type CFG = typeof CFG;
}
