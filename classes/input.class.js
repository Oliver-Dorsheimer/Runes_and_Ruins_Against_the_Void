class Input{
    canvas;
    camera;
    events = {};
    keyStates = new Map();

    leftMouseButtonPressed = false;
    leftMouseButtonReleased = false;

    mousePositionInCanvas = new Vector2D(0, 0);
    mousePositionInGameWorld = new Vector2D(0, 0);
    constructor(canvas){
        this.canvas = canvas;
        this.initializeKeyListeners();
    };

    on(eventName, listener){
        if(!this.events[eventName]){
            this.events[eventName] = [];
        };
        this.events[eventName].push(listener);
    };

    off(eventName, listener){
        if(!this.events[eventName]) {
            return;
        };
        this.events[eventName] = this.events[eventName].filter(fn => fn !== listener);
        if (this.events[eventName].length == 0){
            delete this.events[eventName];
        };
    };

    emit(eventName, ...args){
        if(!this.events[eventName]) return;
        this.events[eventName].forEach((fn => fn(...args)));
    };

    once(eventName, listener){
        const onceListener = (...args)=> {
            listener(...args);
            this.off(eventName, onceListener);
        };
        this.on(eventName, onceListener);
    };

    initializeKeyListeners(){
        window.addEventListener("keydown", (event) => {this.handleKeyEvent(event, true)});
        window.addEventListener("keyup", (event) => {this.handleKeyEvent(event, false)});
        this.canvas.addEventListener("mousemove", (event) => {this.handleMouseMove(event)});
        this.canvas.addEventListener("mousedown", (event) => {this.handleMouseButton(event, true)});
        this.canvas.addEventListener("mouseup", (event) => {this.handleMouseButton(event, false)});
    };

    handleKeyEvent(event, pressed){
        const keyName = this.mapKeyCodeToName(event.code);

        this[`${keyName}Pressed`] = pressed;
        this[`${keyName}Released`] = !pressed;

        this.emit(`${keyName}${pressed ? "Pressed" : "Released"}`);
    };

    mapKeyCodeToName(code){
        switch(code){
            case "KeyW": return "moveUp";
            case "KeyS": return "moveDown";
            case "KeyA": return "moveLeft";
            case "KeyD": return "moveRight";
            case "Space": return "dash";
            case "ShiftLeft":
            case "ShiftRight": return "shift";
            default: return null;
        };
    };

    handleMouseButton(event, pressed){
        if(event.button !== 0) return;
        this.leftMouseButtonPressed = pressed;
        this.leftMouseButtonReleased = !pressed;
        this.emit(pressed ? "leftMouseButtonPressed" : "leftMouseButtonReleased", { position: this.mousePositionInCanvas, event });
    };

    handleMouseMove(event){
        this.mousePositionInCanvas = this.getMousePositionInsideCanvas(event);
        this.emit("mouseMove", { position: this.mousePositionInCanvas, event });
    };

    getMousePositionInsideCanvas(event){
        const rect = this.canvas.getBoundingClientRect();
        const x = Math.floor(event.clientX - rect.left);
        const y = Math.floor(event.clientY - rect.top);
        this.mousePositionInCanvas = new Vector2D(x, y);
        return this.mousePositionInCanvas;
    };
};