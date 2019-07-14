/// <reference types="@antv/util" />
import Event = require('./core/mixin/event');
import Group = require('./core/group');
import Timeline = require('./core/mixin/timeline');
import renderers = require('./renderers/index');
declare class Canvas {
    constructor(cfg?: Partial<Canvas.CFG>);
    static CFG: {
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
    static superclass: Group & {
        prototype: Group;
        constructor: typeof Group;
    };
    init(): void;
    _scale(): void;
    _setGlobalParam(): void;
    _setContainer(): void;
    _initPainter(): void;
    _resize(): void;
    getWidth(): number;
    getHeight(): number;
    changeSize(width: number, height: number): void;
    /**
     * 将窗口坐标转变成 canvas 坐标
     * @param  {Number} clientX 窗口x坐标
     * @param  {Number} clientY 窗口y坐标
     * @return {Object} canvas坐标
     */
    getPointByClient(clientX: number, clientY: number): {
        x: number;
        y: number;
    };
    getClientByPoint(x: number, y: number): {
        clientX: number;
        clientY: number;
    };
    draw(): void;
    getShape<T extends Shapes.ShapeType>(x: number, y: number, e?: Event): Shapes.Shape<T>;
    getRenderer(): Canvas['_cfg']['renderType'];
    _drawSync(): void;
    destroy(): void;
}
export = Canvas;
import Shapes from './shapes';
interface Canvas extends Group, Event {
    _cfg: Group.CFG & GUtil.Overwrite<Canvas.CFG, {
        canvas: Canvas;
        renderType: keyof renderers;
        renderer: renderers['canvas'] | renderers['svg'];
        containerId: string;
        /** or HTMLCanvasElement if renderType is 'canvas'. */
        el: HTMLElement;
        painter: InstanceType<renderers['canvas']['painter'] | renderers['svg']['painter']>;
        timeline: Timeline;
    }>;
}
declare namespace Canvas {
    type CFG = typeof Canvas.CFG;
}
