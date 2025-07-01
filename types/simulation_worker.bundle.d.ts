/**
 *
 * @param {string} operation The name of the operation that requires a deterministic implementation.
 * @throws {Error} Throws an error indicating that the operation does not have a deterministic implementation.
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
    /**
     * Maximum number of frames that can be recorded.
     * @type {number}
     */
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
 * Class representing a physics engine using Ammo.js.
 */
declare class PhysicsEngine {
    /**
     * The maximum physics steps per second.
     * @type {number}
     */
    static stepsPerSecond: number;
    /**
     * The size of the spatial grid used for collision detection.
     * This value determines how finely the world is divided into spatial cells for efficient collision detection.
     * A smaller value results in more cells, which can improve collision detection accuracy but may increase
     * computational overhead.
     * @type {number}
     */
    static spatialGridSize: number;
    /**
     * The collision configuration for the physics engine.
     * @type {InstanceType<typeof Ammo.btDefaultCollisionConfiguration>}
     */
    collisionConfiguration: InstanceType<
        typeof Ammo.btDefaultCollisionConfiguration
    >;
    /**
     * The collision dispatcher for the physics engine.
     * @type {InstanceType<typeof Ammo.btCollisionDispatcher>}
     */
    collisionDispatcher: InstanceType<typeof Ammo.btCollisionDispatcher>;
    /**
     * The broadphase for the physics engine, which is used for collision detection.
     * @type {InstanceType<typeof Ammo.btDbvtBroadphase>}
     */
    broadphase: InstanceType<typeof Ammo.btDbvtBroadphase>;
    /**
     * The constraint solver for the physics engine, which is used to resolve constraints between bodies.
     * @type {InstanceType<typeof Ammo.btSequentialImpulseConstraintSolver>}
     */
    constraintSolver: InstanceType<
        typeof Ammo.btSequentialImpulseConstraintSolver
    >;
    /**
     * The dynamics world for the physics engine, which is the main simulation world.
     * @type {InstanceType<typeof Ammo.btDiscreteDynamicsWorld>}
     */
    dynamicsWorld: InstanceType<typeof Ammo.btDiscreteDynamicsWorld>;
    /**
     *
     * @typedef {Object} StaticBodyData
     * @property {boolean} active - Whether the body is currently active in physics simulation
     * @property {InstanceType<typeof THREE.Matrix4>} matrix - Transform matrix for the body
     * @property {InstanceType<typeof Ammo.btCollisionShape>} shape - Bullet physics collision shape
     * @property {InstanceType<typeof Ammo.btRigidBody>|null} body - Bullet physics rigid body (null when inactive)
     * @property {InstanceType<typeof THREE.Vector3>} min - Minimum bounds of the body's AABB
     * @property {InstanceType<typeof THREE.Vector3>} max - Maximum bounds of the body's AABB
     */
    /**
     * Array of static bodies in the physics world.
     * @type {StaticBodyData[]}
     */
    staticBodies: {
        /**
         * - Whether the body is currently active in physics simulation
         */
        active: boolean;
        /**
         * - Transform matrix for the body
         */
        matrix: InstanceType<typeof THREE.Matrix4>;
        /**
         * - Bullet physics collision shape
         */
        shape: InstanceType<typeof Ammo.btCollisionShape>;
        /**
         * - Bullet physics rigid body (null when inactive)
         */
        body: InstanceType<typeof Ammo.btRigidBody> | null;
        /**
         * - Minimum bounds of the body's AABB
         */
        min: InstanceType<typeof THREE.Vector3>;
        /**
         * - Maximum bounds of the body's AABB
         */
        max: InstanceType<typeof THREE.Vector3>;
    }[];
    /**
     * Map to store spatial hash data for collision detection.
     * @type {Map<number, Map<number, Map<number, StaticBodyData[]>>>}
     */
    spatialHashMap: Map<
        number,
        Map<
            number,
            Map<
                number,
                {
                    /**
                     * - Whether the body is currently active in physics simulation
                     */
                    active: boolean;
                    /**
                     * - Transform matrix for the body
                     */
                    matrix: InstanceType<typeof THREE.Matrix4>;
                    /**
                     * - Bullet physics collision shape
                     */
                    shape: InstanceType<typeof Ammo.btCollisionShape>;
                    /**
                     * - Bullet physics rigid body (null when inactive)
                     */
                    body: InstanceType<typeof Ammo.btRigidBody> | null;
                    /**
                     * - Minimum bounds of the body's AABB
                     */
                    min: InstanceType<typeof THREE.Vector3>;
                    /**
                     * - Maximum bounds of the body's AABB
                     */
                    max: InstanceType<typeof THREE.Vector3>;
                }[]
            >
        >
    >;
    /**
     * Array of active bodies in the physics world.
     * @type {StaticBodyData[]}
     */
    activeBodies: {
        /**
         * - Whether the body is currently active in physics simulation
         */
        active: boolean;
        /**
         * - Transform matrix for the body
         */
        matrix: InstanceType<typeof THREE.Matrix4>;
        /**
         * - Bullet physics collision shape
         */
        shape: InstanceType<typeof Ammo.btCollisionShape>;
        /**
         * - Bullet physics rigid body (null when inactive)
         */
        body: InstanceType<typeof Ammo.btRigidBody> | null;
        /**
         * - Minimum bounds of the body's AABB
         */
        min: InstanceType<typeof THREE.Vector3>;
        /**
         * - Maximum bounds of the body's AABB
         */
        max: InstanceType<typeof THREE.Vector3>;
    }[];
    /**
     * Map to pool static body data for reuse.
     * This is used to avoid creating new objects for every static body, improving performance.
     * @type {Map<InstanceType<typeof Ammo.btCollisionShape>, InstanceType<typeof Ammo.btRigidBody>[]>}
     */
    bodyPool: Map<
        InstanceType<typeof Ammo.btCollisionShape>,
        InstanceType<typeof Ammo.btRigidBody>[]
    >;
    /**
     * The ground plane in the physics world, used for collision detection.
     * @type {{body: InstanceType<typeof Ammo.btRigidBody>, shape: InstanceType<typeof Ammo.btStaticPlaneShape>, isActive: boolean}|null}
     */
    groundPlane: {
        body: InstanceType<typeof Ammo.btRigidBody>;
        shape: InstanceType<typeof Ammo.btStaticPlaneShape>;
        isActive: boolean;
    } | null;
    /**
     * The mountain terrain in the physics world, used for collision detection.
     * @type {{body: InstanceType<typeof Ammo.btRigidBody>, shape: InstanceType<typeof Ammo.btBvhTriangleMeshShape>, triangleMesh: InstanceType<typeof Ammo.btTriangleMesh>, offset: InstanceType<typeof THREE.Vector3>, minimumRadius: number, isActive: boolean}|null}
     */
    mountainTerrain: {
        body: InstanceType<typeof Ammo.btRigidBody>;
        shape: InstanceType<typeof Ammo.btBvhTriangleMeshShape>;
        triangleMesh: InstanceType<typeof Ammo.btTriangleMesh>;
        offset: InstanceType<typeof THREE.Vector3>;
        minimumRadius: number;
        isActive: boolean;
    } | null;
    /**
     * Disposes of the physics engine, cleaning up all resources and removing bodies from the dynamics world.
     * This method should be called when the physics engine is no longer needed to prevent memory leaks
     * and ensure that all resources are properly released.
     */
    dispose(): void;
    /**
     * Creates a ground plane for the physics world.
     * This method initializes a static plane shape that acts as the ground in the physics simulation.
     * The ground plane is created at the origin with a normal pointing up along the Y-axis
     * and a margin of 0.01 units.
     * This ground plane is used to provide a surface for objects to collide with,
     * preventing them from falling indefinitely.
     * @throws {Error} If the ground plane is already initialized.
     */
    createGroundPlane(): void;
    /**
     * Creates a mountain terrain from a given set of vertex data.
     * This method initializes a triangle mesh shape for the mountains, allowing for complex terrain collision detection
     * using a set of vertices defined in a flat array.
     * The vertices should be provided in groups of 9, representing three vertices of a triangle
     * (each vertex consisting of 3 components: x, y, z).
     * The method also calculates the minimum distance from the origin to optimize collision detection.
     * @param {number[]} verticies - An array of vertex data in groups of 9 (3 vertices * 3 components each).
     * @param {InstanceType<typeof THREE.Vector3>} offset - The offset to apply to the mountain terrain's position in the physics world.
     * @throws {Error} If the number of vertices is not divisible by 9 or if mountains are already initialized.
     */
    createMountains(
        verticies: number[],
        offset: InstanceType<typeof THREE.Vector3>
    ): void;
    /**
     * Adds a static body to the physics world.
     * This method creates a static body with a specified transform matrix, bounding box, and collision
     * shape, and adds it to the spatial hash map for efficient collision detection.
     * The static body is not active by default and will not be simulated until activated.
     * The bounding box is transformed to world space using the provided transform matrix.
     * The spatial hash map is used to efficiently manage static bodies in the physics world,
     * allowing for quick lookups based on spatial coordinates.
     * @param {InstanceType<typeof THREE.Matrix4>} transformMatrix - The transformation matrix for the static body.
     * @param {InstanceType<typeof THREE.Box3>} boundingBox - The bounding box of the static body in local space.
     * @param {InstanceType<typeof Ammo.btCollisionShape>} collisionShape - The collision shape for the static body.
     */
    addStaticBody(
        transformMatrix: InstanceType<typeof THREE.Matrix4>,
        boundingBox: InstanceType<typeof THREE.Box3>,
        collisionShape: InstanceType<typeof Ammo.btCollisionShape>
    ): void;
    /**
     * Activates/deactivates physics for bodies based on player position.
     * @param {InstanceType<typeof THREE.Vector3>} playerPosition - The position of the player in the physics world.
     * @throws {Error} If the rigid body is already active when trying to activate it.
     */
    activePhysicsAt(playerPosition: InstanceType<typeof THREE.Vector3>): void;
    /**
     * Steps the physics simulation forward by one fixed time step.
     */
    step(): void;
    /**
     * Returns the dynamics world of the physics engine.
     * @returns {InstanceType<typeof Ammo.btDiscreteDynamicsWorld>} The dynamics world of the physics engine.
     */
    get world(): InstanceType<typeof Ammo.btDiscreteDynamicsWorld>;
    /**
     * Returns the collision dispatcher of the physics engine.
     * @returns {InstanceType<typeof Ammo.btCollisionDispatcher>} The collision dispatcher of the physics
     */
    get dispatcher(): InstanceType<typeof Ammo.btCollisionDispatcher>;
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
