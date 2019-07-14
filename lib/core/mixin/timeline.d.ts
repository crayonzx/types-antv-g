declare class Timeline {
    constructor(canvas: any);
    initTimer(): void;
    addAnimator(shape: any): void;
    removeAnimator(index: any): void;
    isAnimating(): boolean;
    stop(): void;
    stopAllAnimations(): void;
    getTime(): any;
}
export = Timeline;
