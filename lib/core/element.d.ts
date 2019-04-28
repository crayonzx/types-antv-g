import Attribute = require('./mixin/attribute');
import Animate = require('./mixin/animation');
import EventEmitter = require('./advanced-event-emitter');
declare const CFG: {
    /**
     * 唯一标示
     * @type {Number}
     */
    id: number;
    /**
     * Z轴的层叠关系，Z值越大离用户越近
     * @type {Number}
     */
    zIndex: number;
    /**
     * Canvas对象
     * @type: {Object}
     */
    canvas: any;
    /**
     * 父元素指针
     * @type {Object}
     */
    parent: any;
    /**
     * 用来设置当前对象是否能被捕捉
     * true 能
     * false 不能
     * 对象默认是都可以被捕捉的, 当capture为false时，group.getShape(x, y)方法无法获得该元素
     * 通过将不必要捕捉的元素的该属性设置成false, 来提高捕捉性能
     * @type {Boolean}
     **/
    capture: boolean;
    /**
     * 画布的上下文
     * @type {Object}
     */
    context: any;
    /**
     * 是否显示
     * @type {Boolean}
     */
    visible: boolean;
    /**
     * 是否被销毁
     * @type: {Boolean}
     */
    destroyed: boolean;
};
declare const Element1: (new (cfg?: Partial<{
    /**
     * 唯一标示
     * @type {Number}
     */
    id: number;
    /**
     * Z轴的层叠关系，Z值越大离用户越近
     * @type {Number}
     */
    zIndex: number;
    /**
     * Canvas对象
     * @type: {Object}
     */
    canvas: any;
    /**
     * 父元素指针
     * @type {Object}
     */
    parent: any;
    /**
     * 用来设置当前对象是否能被捕捉
     * true 能
     * false 不能
     * 对象默认是都可以被捕捉的, 当capture为false时，group.getShape(x, y)方法无法获得该元素
     * 通过将不必要捕捉的元素的该属性设置成false, 来提高捕捉性能
     * @type {Boolean}
     **/
    capture: boolean;
    /**
     * 画布的上下文
     * @type {Object}
     */
    context: any;
    /**
     * 是否显示
     * @type {Boolean}
     */
    visible: boolean;
    /**
     * 是否被销毁
     * @type: {Boolean}
     */
    destroyed: boolean;
}>) => {} & {
    canFill: boolean;
    canStroke: boolean;
    initAttrs(attrs: any): any;
    getDefaultAttrs(): {};
    attr: Attribute.IAttr;
    _setAttr(name: any, value: any): void;
    clearBBox(): void;
    hasFill(): any;
    hasStroke(): any;
    _setClip(item: any): void;
} & {
    animate: Animate.IAnimate;
    stopAnimate(): void;
    pauseAnimate(): any;
    resumeAnimate(): any;
} & EventEmitter & {
    initTransform(): void;
    resetMatrix(): void;
    translate(tx: any, ty: any): any;
    rotate(radian: any): any;
    scale(s1: any, s2: any): any;
    rotateAtStart(rotate: any): any;
    move(x: number, y: number): any;
    transform(ts: any): any;
    setTransform(ts: any): any;
    getMatrix(): any;
    setMatrix(m: any): any;
    apply(v: any, root: any): any;
    _getMatrixByRoot(root: any): number[];
    getTotalMatrix(): any;
    clearTotalMatrix(): void;
    invert(v: any): any;
    resetTransform(context: any): void;
} & {
    init(): void;
    getParent(): any;
    /**
     * 获取默认的配置信息
     * @protected
     * @return {Object} 默认的属性
     */
    getDefaultCfg(): {};
    set: ISet;
    setSilent(name: any, value: any): void;
    get: IGet;
    show(): any;
    hide(): any;
    remove(destroy?: boolean, delayRemove?: boolean): any;
    destroy(): void;
    toFront(): void;
    toBack(): void;
    _beforeSetZIndex(zIndex: number): number;
    _setAttrs(attrs: any): any;
    setZIndex(zIndex: number): any;
    clone(): any;
    getBBox(): void;
}) & {
    CFG: {
        /**
         * 唯一标示
         * @type {Number}
         */
        id: number;
        /**
         * Z轴的层叠关系，Z值越大离用户越近
         * @type {Number}
         */
        zIndex: number;
        /**
         * Canvas对象
         * @type: {Object}
         */
        canvas: any;
        /**
         * 父元素指针
         * @type {Object}
         */
        parent: any;
        /**
         * 用来设置当前对象是否能被捕捉
         * true 能
         * false 不能
         * 对象默认是都可以被捕捉的, 当capture为false时，group.getShape(x, y)方法无法获得该元素
         * 通过将不必要捕捉的元素的该属性设置成false, 来提高捕捉性能
         * @type {Boolean}
         **/
        capture: boolean;
        /**
         * 画布的上下文
         * @type {Object}
         */
        context: any;
        /**
         * 是否显示
         * @type {Boolean}
         */
        visible: boolean;
        /**
         * 是否被销毁
         * @type: {Boolean}
         */
        destroyed: boolean;
    };
};
declare class Element extends Element1 {
    _cfg: Element.CFG;
    get: Element.IGet;
    set: Element.ISet;
}
export = Element;
declare namespace Element {
    type CFG = typeof CFG;
    type IGet = <T extends {
        _cfg: any;
    }, K extends keyof T['_cfg']>(this: T, name: K) => T['_cfg'][K];
    type ISet = <T extends {
        _cfg: any;
    }, K extends keyof T['_cfg']>(this: T, name: K, value: T['_cfg'][K]) => T;
}
