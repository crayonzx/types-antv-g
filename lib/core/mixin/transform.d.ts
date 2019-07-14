declare const Mixin: {
    initTransform(): void;
    resetMatrix(): void;
    translate<T>(this: T, tx: number, ty: number): T;
    rotate<T>(this: T, radian: number): T;
    scale(s1: any, s2: any): any;
    rotateAtStart<T>(this: T, rotate: number): T;
    move<T>(this: T, x: number, y: number): T;
    transform(ts: any): any;
    setTransform(ts: any): any;
    getMatrix(): any;
    setMatrix(m: any): any;
    apply(v: any, root: any): any;
    _getMatrixByRoot(root: any): number[];
    /**
     * 应用到当前元素上的总的矩阵
     * @return {Matrix} 矩阵
     */
    getTotalMatrix(): any;
    clearTotalMatrix(): void;
    invert(v: any): any;
    resetTransform(context: any): void;
};
export = Mixin;
declare type Mixin = typeof Mixin;
