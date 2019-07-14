/// <reference types="@antv/util" />
import Common from '../common';
import Shape = require('../core/shape');
declare class Marker extends Shape {
    constructor(cfg: any);
    static Symbols: {
        circle(x: any, y: any, r: any): any[][];
        square(x: any, y: any, r: any): any[][];
        diamond(x: any, y: any, r: any): any[][];
        triangle(x: any, y: any, r: any): any[][];
        'triangle-down': (x: any, y: any, r: any) => any[][];
    };
    static ATTRS: {
        path: any;
        lineWidth: number;
        x: number;
        y: number;
        r: number;
        radius: number;
        symbol: "square" | "triangle" | "circle" | "diamond" | "triangle-down" | ((x: number, y: number, r: number) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[]);
    };
    _attrs: typeof Marker.ATTRS & Shape['_attrs'];
    static superclass: Shape & {
        prototype: Shape;
        constructor: typeof Shape;
    };
    type: 'marker';
    canFill: true;
    canStroke: true;
    getDefaultAttrs(): {
        x: number;
        y: number;
        lineWidth: number;
    };
    calculateBox(): {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    };
    _getPath(): Common.SVGPath;
    createPath(context: any): void;
}
export = Marker;
