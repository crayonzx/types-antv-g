/// <reference types="@antv/util" />
declare const _default: {
    isFunction: (value: any) => value is (...args: any[]) => any;
    isObject: <T extends object = {
        [x: string]: any;
    }>(value: any) => value is T;
    isBoolean: (value: any) => value is boolean;
    isNil: (value: any) => value is null;
    isString: (value: any) => value is string;
    isArray: <T = any>(value: any) => value is T[];
    isNumber: (value: any) => value is number;
    isEmpty: (value: any) => boolean;
    uniqueId: (prefix?: string) => string;
    clone: <T>(obj: T) => T;
    deepMix: <T, U extends any[]>(dist: T, ...src: U) => T & GUtil.MixArray<U, undefined>;
    assign: (dist: any, src1?: any, src2?: any, src3?: any) => any;
    merge: <T, U extends any[]>(dist: T, ...src: U) => T & GUtil.MixArray<U, undefined>;
    upperFirst: (value: string) => string;
    each: {
        <T>(elements: T[], func: (value: T, index: number) => boolean | void): void;
        <T extends object>(elements: T, func: <K extends keyof T>(value: T[K], key: K) => boolean | void): void;
    };
    isEqual: (value: any, other: any) => boolean;
    toArray: (value: any) => any[];
    extend: <T extends GUtil.TwoFunctionTypes, U extends GUtil.NewFunctionType, V, W>(subclass: T, superclass: U, overrides?: V, staticOverrides?: W) => { [P in Exclude<keyof GUtil.ToClassType<T>, never>]: GUtil.ToClassType<T>[P]; } & {
        new (...args: GUtil.ArgsType<GUtil.ToClassType<T>>): GUtil._Overwrite<GUtil._Overwrite<GUtil.NewReturnType<U>, GUtil.NewReturnType<GUtil.ToClassType<T>>>, V>;
        superclass: U;
    } & { [P in Exclude<keyof (W extends null ? {} : W), never>]: (W extends null ? {} : W)[P]; };
    augment: <T extends GUtil.TwoFunctionTypes, U extends any[]>(dist: T, ...src: U) => (new (...args: GUtil.ArgsType<GUtil.ToClassType<T>>) => GUtil._Overwrite<GUtil.ProtoType<GUtil.ToClassType<T>>, GUtil.UnionToIntersection<GUtil.ProtoType<U extends (infer V)[] ? V : never>>>) & { [P in Exclude<keyof GUtil.ToClassType<T>, never>]: GUtil.ToClassType<T>[P]; };
    remove: (arr: any, ...args: any[]) => any;
    isNumberEqual: (a: number, b: number) => boolean;
    toRadian: (degree: number) => number;
    toDegree: (radian: number) => number;
    mod: (n: number, m: number) => number;
    clamp: (a: number, min: number, max: number) => number;
    createDom: <K extends "" | "object" | "link" | "small" | "sub" | "sup" | "track" | "progress" | "a" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "main" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "slot" | "source" | "span" | "strong" | "style" | "summary" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "u" | "ul" | "var" | "video" | "wbr" = "", T extends string = string>(domStr: HTMLElement | T) => K extends "object" | "link" | "small" | "sub" | "sup" | "track" | "progress" | "a" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "main" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "slot" | "source" | "span" | "strong" | "style" | "summary" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "u" | "ul" | "var" | "video" | "wbr" ? HTMLElementTagNameMap[K] : T extends "object" | "link" | "small" | "sub" | "sup" | "track" | "progress" | "a" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "main" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "slot" | "source" | "span" | "strong" | "style" | "summary" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "u" | "ul" | "var" | "video" | "wbr" ? HTMLElementTagNameMap[T] : HTMLElement;
    modifyCSS: (dom: any, css: any) => any;
    requestAnimationFrame: (fn: any) => any;
    getRatio: () => number;
    mat3: any;
    vec2: any;
    vec3: any;
    transform: (m: any, ts: any) => any;
};
export = _default;
