/**
 *
 * @param {string} operation The name of the operation that requires a deterministic implementation.
 */
declare function noDeterministicImplementationError(operation: string): void;
/**
 *
 * @param {string} base64
 * @returns {Uint8Array|null} Returns a Uint8Array if the base64 string is valid, otherwise returns null.
 */
declare function decodeBase64ToUint8Array(base64: string): Uint8Array | null;
declare const fastMathWasm: WebAssembly.Exports;
declare const sineValues: number[];
/**
 * Class to record and decode frame events.
 */
declare class FrameRecorder {
    static maxFrames: number;
    /**
     *
     * Example:
     * ```javascript
     * let states = [1, 3, 5, 7];
     * let frame = 4;
     * let count = FrameRecorder.countInputFlips(states, frame);
     * console.log(count); // Output: 2 - as there are two state changes (1 and 3) before frame 4.
     * ```
     *
     * @param {number[]} states Array of frame numbers representing the state changes.
     * @param {number} frame The frame number to check against the states.
     * @returns {number} Returns the count of input flips up to the specified frame.
     */
    static countInputFlips(states: number[], frame: number): number;
    /**
     *
     * @param {Uint8Array} packetBuffer The packet (for one specific input) to decode.
     * @returns {number[]|null} Returns an array of frame numbers if the packet is valid, otherwise returns null.
     */
    static decodePacket(packetBuffer: Uint8Array): number[] | null;
    /**
     *
     * @param {string} base64
     * @returns {FrameRecorder|null} Returns a FrameRecorder instance if the base64 string is valid, otherwise returns null.
     */
    static deserialize(base64: string): FrameRecorder | null;
    /**
     *
     * @constructor
     * @param {{upFrames: number[], downFrames: number[], leftFrames: number[], rightFrames: number[], resetFrames: number[]}|null} events Object containing arrays of frame events for different actions.
     */
    constructor(
        events: {
            upFrames: number[];
            downFrames: number[];
            leftFrames: number[];
            rightFrames: number[];
            resetFrames: number[];
        } | null
    );
    /**
     * Array of frame numbers when the "up" action was toggled.
     * @type {number[]}
     */
    upFrames: number[];
    /**
     * Array of frame numbers when the "down" action was toggled.
     * @type {number[]}
     */
    downFrames: number[];
    /**
     * Array of frame numbers when the "left" action was toggled.
     * @type {number[]}
     */
    leftFrames: number[];
    /**
     * Array of frame numbers when the "right" action was toggled.
     * @type {number[]}
     */
    rightFrames: number[];
    /**
     * Array of frame numbers when the "reset" action was toggled.
     * @type {number[]}
     */
    resetFrames: number[];
    /**
     *
     * @param {number} frame The frame number for which to get the state.
     * @returns {{up: boolean, down: boolean, left: boolean, right: boolean, reset: boolean}} Returns the state of the frame for the given frame number.
     */
    getFrame(frame: number): {
        up: boolean;
        down: boolean;
        left: boolean;
        right: boolean;
        reset: boolean;
    };
}
/**
 * Class to count frames in a simulation.
 */
declare class FrameCounter {
    /**
     *
     * @param {number} frames The number of frames to initialize the counter with.
     * @throws {Error} Throws an error if frames is not a safe integer.
     * @constructor
     */
    constructor(frames: number);
    /**
     * The number of frames counted.
     * @type {number}
     */
    frames: number;
    /**
     * @returns {number} Returns the number of frames counted.
     */
    get numberOfFrames(): number;
    /**
     * Increments the frame counter by one.
     */
    increment(): void;
    /**
     *
     * @param {FrameCounter} other The other FrameCounter to compare with.
     * @returns {boolean} Returns true if this FrameCounter has fewer frames than the other, otherwise false.
     */
    lessThan(other: FrameCounter): boolean;
    /**
     *
     * @param {FrameCounter} other The other FrameCounter to compare with.
     * @returns {boolean} Returns true if this FrameCounter has fewer or equal frames than the other, otherwise false.
     */
    lessOrEqual(other: FrameCounter): boolean;
    /**
     *
     * @param {FrameCounter} other The other FrameCounter to compare with.
     * @returns {boolean} Returns true if this FrameCounter has the same number of frames as the other, otherwise false.
     */
    equals(other: FrameCounter): boolean;
    /**
     * Creates a new FrameCounter instance with the same number of frames.
     * @returns {FrameCounter} Returns a new FrameCounter instance.
     */
    clone(): FrameCounter;
}
/**
 * Enum which represents the different stages of the race.
 * @type {{ Checkpoint: 0, Finish: 1 }}
 */
declare const RaceStage: {
    Checkpoint: 0;
    Finish: 1;
};
