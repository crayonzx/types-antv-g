/// <reference types="@antv/util" />
import Element = require('./element');
declare class Group extends Element {
    constructor(cfg?: Partial<Group.CFG>);
    static superclass: Element & {
        prototype: Element;
        constructor: typeof Element;
    };
    isGroup: true;
    type: 'group';
    canFill: true;
    canStroke: true;
    getDefaultCfg(): {};
    _beforeRenderUI(): void;
    _renderUI(): void;
    _bindUI(): void;
    addShape: Group.IAddShape;
    /** 添加图组
     * @param  {Function|Object|undefined} param 图组类
     * @param  {Object} cfg 配置项
     * @return {Object} rst 图组
     */
    addGroup: Group.IAddGroup;
    /** 绘制背景
     * @param  {Array} padding 内边距
     * @param  {Attrs} attrs 图形属性
     * @param  {Shape} backShape 背景图形
     * @return {Object} 背景层对象
     */
    renderBack(padding: number[], attrs?: Partial<Rect['_attrs']>): Rect;
    removeChild(item?: Group.Child | boolean, destroy?: boolean): this;
    /**
     * 向组中添加shape或者group
     * @param {Object} items 图形或者分组
     * @return {Object} group 本尊
     */
    add(items: Group.Child | Group.Child[]): this;
    _setCfgProperty(item: any): void;
    contain(item: Group.Child | any): item is Group.Child;
    getChildByIndex(index: number): Group.Child;
    getFirst(): Group.Child;
    getLast(): Group.Child;
    getBBox(): Common.BBox;
    getCount(): number;
    sort(): this;
    findById(id: string): Group.Child | null;
    /**
     * 根据查找函数查找分组或者图形
     * @param  {Function} fn 匹配函数
     * @return {Canvas.Base} 分组或者图形
     */
    find(fn: string | ((item: Group.Child) => unknown)): Group.Child | null;
    /**
     * @param  {Function} fn filter mathod
     * @return {Array} all the matching shapes and groups
     */
    findAll(fn: (item: Group.Child) => unknown): Group.Child[];
    /**
     * @Deprecated
     * @param  {Function} fn filter method
     * @return {Object} found shape or group
     */
    findBy(fn: (item: Group.Child) => unknown): Group.Child | null;
    /**
     * @Deprecated
     * @param  {Function} fn filter mathod
     * @return {Array} all the matching shapes and groups
     */
    findAllBy(fn: (item: Group.Child) => unknown): Group.Child[];
    getShape(x: number, y: number): Shapes.Base;
    clearTotalMatrix(): void;
    clear(delayRemove?: boolean): this;
    destroy(): void;
    clone(): any;
}
export = Group;
import Shapes from '../shapes';
import Common from '../common';
import Rect from '../shapes/rect';
declare namespace Group {
    type CFG = Element.CFG & {
        children: Child[];
    };
    type Child = Group | Shapes.Base;
    type IAddShape = <T extends Shapes.ShapeType>(type: T, cfg?: {
        attrs?: Partial<Shapes.Attrs<T>>;
    } & Partial<Group.CFG>) => Shapes.Shape<T>;
    interface IAddGroup {
        (cfg?: Partial<Group.CFG>): Group;
        (param: new (...args: any[]) => any, cfg?: Partial<Group.CFG>): Group;
    }
}
