/// <reference types="@antv/util" />
import isPointInPath = require('./mixin/isPointInPath');
import Element = require('./element');
declare class Shape extends Element {
    constructor(cfg: any);
    static ATTRS: {};
    static superclass: Element & {
        prototype: Element;
        constructor: typeof Element;
    };
    isShape: true;
    drawInner(context: any): void;
    afterPath(context: any): void;
    /**
     * 击中图形时是否进行包围盒判断
     * @return {Boolean} [description]
     */
    isHitBox(): boolean;
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
    calculateBox(): Common.BBox;
    getHitLineWidth(): number;
    clearTotalMatrix(): void;
    clearBBox(): void;
    getBBox(): Common.BBox;
    clone<T>(this: T): T;
}
export = Shape;
import Common from '../common';
import ShapeEx_ from './shape-ex';
interface Shape extends Element, isPointInPath, Shape.ShapeEx {
    type: string;
    _attrs: Shape.BaseAttr;
    _cfg: Element['_cfg'] & {
        box: Common.BBox;
    };
}
declare namespace Shape {
    type ShapeEx = ShapeEx_;
    type BaseAttr = Common.Style;
}
