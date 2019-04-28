/// <reference types="@antv/util" />
declare const _default: {
    parsePathString: (pathString: Common.SVGPathOrStr) => (["m" | "M", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["t" | "T", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
    parsePathArray: (path: []) => string;
    pathTocurve: (path: Common.SVGPathOrStr, path2?: Common.SVGPathOrStr) => (["m" | "M", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["t" | "T", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
    pathToAbsolute: (pathArray: Common.SVGPathOrStr) => (["m" | "M", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["t" | "T", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
    catmullRomToBezier: (crp: number[], z: boolean) => (["m" | "M", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["t" | "T", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
    rectPath: (x: number, y: number, w: number, h: number, r?: number) => (["m" | "M", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["t" | "T", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
    fillPath: (source: any, target: any) => any;
    fillPathByDiff: (source: any, target: any) => any;
    formatPath: (fromPath: any, toPath: any) => any;
    intersection: (path1: Common.SVGPathOrStr, path2: Common.SVGPathOrStr) => Common.Point[];
};
export = _default;
import Common from '../common';
