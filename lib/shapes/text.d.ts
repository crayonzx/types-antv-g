/// <reference types="@antv/util" />
import Shape = require('../core/shape');
declare class CText extends Shape {
    constructor(cfg: any);
    static ATTRS: {
        x: number;
        y: number;
        text: string;
        fontSize: number;
        fontFamily: string;
        fontStyle: string;
        fontWeight: string;
        fontVariant: string;
        textAlign: CanvasTextAlign;
        textBaseline: "top" | "middle" | "bottom";
        lineHeight: number;
        textArr: string[];
    };
    _attrs: typeof CText.ATTRS & Shape['_attrs'];
    static superclass: Shape & {
        prototype: Shape;
        constructor: typeof Shape;
    };
    canFill: true;
    canStroke: true;
    type: 'text';
    getDefaultAttrs(): {
        lineWidth: number;
        lineCount: number;
        fontSize: number;
        fontFamily: string;
        fontStyle: string;
        fontWeight: string;
        fontVariant: string;
        textAlign: string;
        textBaseline: string;
    };
    initTransform(): void;
    _assembleFont(): void;
    _setAttrText(): void;
    _getTextHeight(): number;
    isHitBox(): boolean;
    calculateBox(): {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    };
    _getSpaceingY(): number;
    drawInner(context: any): void;
    _drawTextArr(context: any, fill: any): void;
    measureText(): number;
}
export = CText;
