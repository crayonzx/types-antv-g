/// <reference types="@antv/util" />
declare const _default: {
    parsePathString: (pathString: Common.SVGPathOrStr) => Common.SVGPath.Cmd[];
    parsePathArray: (path: any[]) => string;
    pathTocurve: (path: Common.SVGPathOrStr, path2?: Common.SVGPathOrStr) => Common.SVGPath.Cmd[];
    pathToAbsolute: (pathArray: Common.SVGPathOrStr) => Common.SVGPath.Cmd[];
    catmullRomToBezier: (crp: number[], z: boolean) => Common.SVGPath.Cmd[];
    rectPath: (x: number, y: number, w: number, h: number, r?: number) => Common.SVGPath.Cmd[];
    fillPath: (source: any, target: any) => any;
    fillPathByDiff: (source: any, target: any) => any;
    formatPath: (fromPath: any, toPath: any) => any;
    intersection: (path1: Common.SVGPathOrStr, path2: Common.SVGPathOrStr) => Common.Point[];
};
export = _default;
import Common from '../common';
