/// <reference types="@antv/util" />
import Shape = require('../core/shape');
declare class CImage extends Shape {
    constructor(cfg: any);
    static ATTRS: {
        x: number;
        y: number;
        img: string;
        width: number;
        height: number;
        sx: any;
        sy: any;
        swidth: any;
        sheight: any;
    };
    _attrs: typeof CImage.ATTRS & Shape['_attrs'];
    static superclass: Shape & {
        prototype: Shape;
        constructor: typeof Shape;
    };
    type: 'image';
    isHitBox(): boolean;
    calculateBox(): {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    };
    _beforeSetLoading(loading: any): any;
    _setAttrImg(): any;
    drawInner(context: any): void;
    _drawImage(context: any): void;
}
export = CImage;
