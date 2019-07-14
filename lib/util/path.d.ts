/// <reference types="@antv/util" />
declare function parsePathString(pathString: Common.SVGPathOrStr): Common.SVGPath;
declare function catmullRom2bezier(crp: number[], z: boolean): Common.SVGPath;
declare function pathToAbsolute(pathArray: Common.SVGPathOrStr): Common.SVGPath;
declare function pathTocurve(path: Common.SVGPathOrStr, path2?: Common.SVGPathOrStr): Common.SVGPath;
declare function rectPath(x: number, y: number, w: number, h: number, r?: number): Common.SVGPath;
declare const _default: {
    parsePathString: typeof parsePathString;
    parsePathArray: (path: []) => string;
    pathTocurve: typeof pathTocurve;
    pathToAbsolute: typeof pathToAbsolute;
    catmullRomToBezier: typeof catmullRom2bezier;
    rectPath: typeof rectPath;
    fillPath: (source: any, target: any) => any;
    fillPathByDiff: (source: any, target: any) => any;
    formatPath: (fromPath: any, toPath: any) => any;
    intersection: (path1: Common.SVGPathOrStr, path2: Common.SVGPathOrStr) => Common.Point[];
};
export = _default;
import Common from '../common';
