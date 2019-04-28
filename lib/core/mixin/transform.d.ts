declare const _default: {
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
    /**
     * 应用到当前元素上的总的矩阵
     * @return {Matrix} 矩阵
     */
    getTotalMatrix(): any;
    clearTotalMatrix(): void;
    invert(v: any): any;
    resetTransform(context: any): void;
};
export = _default;
