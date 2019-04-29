/// <reference types="@antv/util" />
import Element = require('./element');
declare const Group2: (new (cfg?: Partial<{
    id: number;
    zIndex: number;
    canvas: any;
    parent: any;
    capture: boolean;
    context: any;
    visible: boolean;
    destroyed: boolean;
}>) => {
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
    initAttrs: (attrs: any) => any;
    getDefaultAttrs: () => {};
    attr: import("./mixin/attribute").IAttr;
    _setAttr: (name: any, value: any) => void;
    clearBBox: () => void;
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
    set: Element.ISet;
    setSilent: (name: any, value: any) => void;
    get: Element.IGet;
    toFront: () => void;
    toBack: () => void;
    _beforeSetZIndex: (zIndex: number) => number;
    _setAttrs: (attrs: any) => any;
    setZIndex: (zIndex: number) => any;
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
} & {
    isGroup: boolean;
    type: string;
    canFill: boolean;
    canStroke: boolean;
    getDefaultCfg(): {};
    _beforeRenderUI(): void;
    _renderUI(): void;
    _bindUI(): void;
    addShape(type: any, cfg: any): any;
    /** 添加图组
     * @param  {Function|Object|undefined} param 图组类
     * @param  {Object} cfg 配置项
     * @return {Object} rst 图组
     */
    addGroup(param: any, cfg: any): any;
    /** 绘制背景
     * @param  {Array} padding 内边距
     * @param  {Attrs} attrs 图形属性
     * @param  {Shape} backShape 背景图形
     * @return {Object} 背景层对象
     */
    renderBack(padding: number[], attrs: any): any;
    removeChild(item: any, destroy: any): any;
    /**
     * 向组中添加shape或者group
     * @param {Object} items 图形或者分组
     * @return {Object} group 本尊
     */
    add(items: any): any;
    _setCfgProperty(item: any): void;
    contain(item: any): boolean;
    getChildByIndex(index: number): any;
    getFirst(): any;
    getLast(): any;
    getBBox(): Required<Common.BBox>;
    getCount(): number;
    sort(): any;
    findById(id: any): any;
    /**
     * 根据查找函数查找分组或者图形
     * @param  {Function} fn 匹配函数
     * @return {Canvas.Base} 分组或者图形
     */
    find(fn: any): any;
    /**
     * @param  {Function} fn filter mathod
     * @return {Array} all the matching shapes and groups
     */
    findAll(fn: any): any[];
    /**
     * @Deprecated
     * @param  {Function} fn filter method
     * @return {Object} found shape or group
     */
    findBy(fn: any): any;
    /**
     * @Deprecated
     * @param  {Function} fn filter mathod
     * @return {Array} all the matching shapes and groups
     */
    findAllBy(fn: any): any[];
    getShape(x: number, y: number): any;
    clearTotalMatrix(): void;
    clear(delayRemove: any): any;
    destroy(): void;
    clone(): any;
}) & {
    superclass: typeof Element;
};
declare class Group extends Group2 {
    addShape: Group.IAddShape;
    addGroup: Group.IAddGroup;
}
export = Group;
import GShapes from '../shape';
import Common from '../common';
declare namespace Group {
    type CFG = Element.CFG;
    type IAddShape = <T extends GShapes.ShapeType>(type: T, cfg: {
        attrs: Partial<GShapes.Attrs<T>>;
    } & Partial<Group.CFG>) => GShapes.Shape<T>;
    interface IAddGroup {
        (cfg?: Partial<Group.CFG>): Group;
        (param: new (...args: any[]) => any, cfg?: Partial<Group.CFG>): Group;
    }
}
