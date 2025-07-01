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
/**
 * Returns the quaternion for a specific block rotation.
 * @param {number} faceNormalIndex The index of the face normal (0-5).
 * @param {number} rotationIndex The index of the rotation (0-3).
 * @returns {InstanceType<typeof THREE.Quaternion>} Returns the quaternion for the specified face normal and rotation index.
 */
declare function getBlockRotation(
    faceNormalIndex: number,
    rotationIndex: number
): InstanceType<typeof THREE.Quaternion>;
/**
 * Encodes binary data to a Base64 URL-safe string
 * @param {Uint8Array} data - Binary data to encode
 * @returns {string} Base64 URL-safe encoded string
 */
declare function encodeBase64Url(data: Uint8Array): string;
/**
 * Decodes a Base64 URL-safe string to binary data
 * @param {string} str - Base64 URL-safe encoded string
 * @returns {Uint8Array|null} Decoded binary data or null if invalid input
 */
declare function decodeBase64Url(str: string): Uint8Array | null;
/**
 * Extracts bits from a Uint8Array at a specific bit position
 * @param {Uint8Array} data - The input byte array
 * @param {number} bitPosition - The bit position to read from (0-based)
 * @throws {Error} If bitPosition is out of range
 * @returns {number} The extracted 6-bit value
 */
declare function extractBits(data: Uint8Array, bitPosition: number): number;
/**
 * Writes bits into a byte array at a specific bit position
 * @param {number[]} bytes - The output byte array (will be modified)
 * @param {number} bitPosition - The bit position to write to (0-based)
 * @param {number} bitCount - Number of bits to write (5 or 6)
 * @param {number} value - The value to write (only the lowest bitCount bits will be used)
 * @param {boolean} isLast - Whether this is the last write operation
 */
declare function writeBits(
    bytes: number[],
    bitPosition: number,
    bitCount: number,
    value: number,
    isLast: boolean
): void;
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
/**
 * Array of pre-calculated quaternions for block rotations.
 * Each row represents a face normal to rotate around.
 * Each quaternion represents a 90-degree-multiple rotation around the corresponding face normal.
 * @type {InstanceType<typeof THREE.Quaternion>[][]}
 */
declare const blockRotationQuaternions: InstanceType<
    typeof THREE.Quaternion
>[][];
/**
 * Class to manage track parts (specifically checkpoints & finish lines) and their physics.
 */
declare class TrackManager {
    /**
     * The size of each part in the track.
     * @type {number}
     */
    static partSize: number;
    /**
     *
     * @param {number} x The x-coordinate of the part.
     * @param {number} y The y-coordinate of the part.
     * @param {number} z The z-coordinate of the part.
     * @param {number} rotation The rotation index of the part.
     * @param {number} rotationAxis The rotation axis index of the part.
     * @param {number} type The type of the part.
     * @param {PhysicsEngine} physicsEngine The physics engine to use for the part.
     * @param {TrackData} trackData The track data containing information about the part's physics shape.
     */
    static addPhysicsPart(
        x: number,
        y: number,
        z: number,
        rotation: number,
        rotationAxis: number,
        type: number,
        physicsEngine: PhysicsEngine,
        trackData: TrackData
    ): void;
    /**
     * Creates a new TrackManager instance.
     * This constructor initializes the track manager with the provided physics engine, track data, and part provider.
     * It processes the parts provided by the part provider, categorizing them by type and
     * setting up the necessary physics for each part.
     * @param {InstanceType<typeof PhysicsEngine>} physicsEngine - The physics engine to use for the track parts.
     * @param {TrackData} trackData - The track data containing information about the parts and their detectors.
     * @param {undefined} partProvider - The part provider that supplies the parts for the track.
     * @throws {Error} Throws an error if a part detector is missing or if a checkpoint has no checkpoint order.
     * @constructor
     */
    constructor(
        physicsEngine: InstanceType<typeof PhysicsEngine>,
        trackData: TrackData,
        partProvider: undefined
    );
    trackData: TrackData;
    partsByType: Map<any, any>;
    finishParts: any[];
    checkpointParts: any[];
    checkpointOrderList: any[];
    /**
     * Returns the total number of checkpoint indices.
     * @returns {number} The total number of checkpoint indices.
     */
    getTotalNumberOfCheckpointIndices(): number;
    /**
     * Checks if the player is overlapping with a checkpoint.
     * @param {InstanceType<typeof THREE.Box3>} playerBox - The bounding box of the player.
     * @param {number} checkpointIndex - The index of the checkpoint to check against.
     * @returns {{x: number, y: number, z: number, rotation: number, rotationAxis: number, type: string}|null} Returns the part information if the player overlaps with the checkpoint, otherwise null.
     */
    checkCheckpoint(
        playerBox: InstanceType<typeof THREE.Box3>,
        checkpointIndex: number
    ): {
        x: number;
        y: number;
        z: number;
        rotation: number;
        rotationAxis: number;
        type: string;
    } | null;
    /**
     *
     * @param {InstanceType<typeof THREE.Box3>} playerBox - The bounding box of the player.
     * @returns {{x: number, y: number, z: number, rotation: number, rotationAxis: number, type: string}|null} Returns the part information if the player overlaps with the finish line, otherwise null.
     */
    checkFinish(playerBox: InstanceType<typeof THREE.Box3>): {
        x: number;
        y: number;
        z: number;
        rotation: number;
        rotationAxis: number;
        type: string;
    } | null;
    /**
     * Checks if the player is overlapping with a checkpoint or finish line.
     * This method checks the player's bounding box against all parts in the specified checkpoint index.
     * If the checkpoint index is null, it checks against the finish line parts.
     * It returns the part information if an overlap is detected, otherwise returns null.
     * @param {InstanceType<typeof THREE.Box3>} playerBox - The bounding box of the player.
     * @param {number|null} checkpointIndex - The index of the checkpoint to check against, or null to check the finish line.
     * @returns {{x: number, y: number, z: number, rotation: number, rotationAxis: number, type: string}|null} Returns the part information if an overlap is detected, otherwise null.
     */
    checkOverlap(
        playerBox: InstanceType<typeof THREE.Box3>,
        checkpointIndex: number | null
    ): {
        x: number;
        y: number;
        z: number;
        rotation: number;
        rotationAxis: number;
        type: string;
    } | null;
}
declare namespace BlockTypes {
    let Straight: number;
    let TurnSharp: number;
    let SlopeUp: number;
    let SlopeDown: number;
    let Slope: number;
    let Start: number;
    let Finish: number;
    let ToWideMiddle: number;
    let ToWideLeft: number;
    let ToWideRight: number;
    let StraightWide: number;
    let InnerCornerWide: number;
    let OuterCornerWide: number;
    let SlopeUpLeftWide: number;
    let SlopeUpRightWide: number;
    let SlopeDownLeftWide: number;
    let SlopeDownRightWide: number;
    let SlopeLeftWide: number;
    let SlopeRightWide: number;
    let PillarTop: number;
    let PillarMiddle: number;
    let PillarBottom: number;
    let PillarShort: number;
    let PlanePillarBottom: number;
    let PlanePillarShort: number;
    let Plane: number;
    let PlaneWall: number;
    let PlaneWallCorner: number;
    let PlaneWallInnerCorner: number;
    let Block: number;
    let WallTrackTop: number;
    let WallTrackMiddle: number;
    let WallTrackBottom: number;
    let PlaneSlopeUp: number;
    let PlaneSlopeDown: number;
    let PlaneSlope: number;
    let TurnShort: number;
    let TurnLong: number;
    let SlopeUpLong: number;
    let SlopeDownLong: number;
    let SlopePillar: number;
    let TurnSLeft: number;
    let TurnSRight: number;
    let IntersectionT: number;
    let IntersectionCross: number;
    let PillarBranch1: number;
    let PillarBranch2: number;
    let PillarBranch3: number;
    let PillarBranch4: number;
    let WallTrackBottomCorner: number;
    let WallTrackMiddleCorner: number;
    let WallTrackTopCorner: number;
    let Checkpoint: number;
    let HalfBlock: number;
    let QuarterBlock: number;
    let HalfPlane: number;
    let QuarterPlane: number;
    let PlaneBridge: number;
    let SignArrowLeft: number;
    let SignArrowRight: number;
    let SignArrowUp: number;
    let SignArrowDown: number;
    let SignWarning: number;
    let SignWrongWay: number;
    let CheckpointWide: number;
    let WallTrackCeiling: number;
    let WallTrackFloor: number;
    let BlockSlopedDown: number;
    let BlockSlopedDownInnerCorner: number;
    let BlockSlopedDownOuterCorner: number;
    let BlockSlopedUp: number;
    let BlockSlopedUpInnerCorner: number;
    let BlockSlopedUpOuterCorner: number;
    let FinishWide: number;
    let PlaneCheckpoint: number;
    let PlaneFinish: number;
    let PlaneCheckpointWide: number;
    let PlaneFinishWide: number;
    let WallTrackBottomInnerCorner: number;
    let WallTrackInnerCorner: number;
    let WallTrackTopInnerCorner: number;
    let TurnLong2: number;
    let TurnLong3: number;
    let SlopePillarShort: number;
    let BlockSlopeUp: number;
    let BlockSlopeDown: number;
    let BlockSlopeVerticalTop: number;
    let BlockSlopeVerticalBottom: number;
    let PlaneSlopeVerticalBottom: number;
    let StartWide: number;
    let PlaneStart: number;
    let PlaneStartWide: number;
    let TurnShortLeftWide: number;
    let TurnShortRightWide: number;
    let TurnLongLeftWide: number;
    let TurnLongRightWide: number;
    let SlopeUpVertical: number;
    let PlaneSlopePillar: number;
    let PlaneSlopePillarShort: number;
    let PillarBranch1Top: number;
    let PillarBranch1Bottom: number;
    let PillarBranch1Middle: number;
    let PillarBranch2Top: number;
    let PillarBranch2Middle: number;
    let PillarBranch2Bottom: number;
    let PillarBranch3Top: number;
    let PillarBranch3Middle: number;
    let PillarBranch3Bottom: number;
    let PillarBranch4Top: number;
    let PillarBranch4Middle: number;
    let PillarBranch4Bottom: number;
    let PillarBranch5: number;
    let PillarBranch5Top: number;
    let PillarBranch5Middle: number;
    let PillarBranch5Bottom: number;
    let ToWideDouble: number;
    let ToWideDiagonal: number;
    let StraightPillarBottom: number;
    let StraightPillarShort: number;
    let TurnSharpPillarBottom: number;
    let TurnSharpPillarShort: number;
    let IntersectionTPillarBottom: number;
    let IntersectionTPillarShort: number;
    let IntersectionCrossPillarBottom: number;
    let IntersectionCrossPillarShort: number;
    let PlaneBridgeCorner: number;
    let PlaneBridgeIntersectionT: number;
    let PlaneBridgeIntersectionCross: number;
    let BlockBridge: number;
    let BlockBridgeCorner: number;
    let BlockBridgeIntersectionT: number;
    let BlockBridgeIntersectionCross: number;
    let WallTrackCeilingCorner: number;
    let WallTrackCeilingPlaneCorner: number;
    let WallTrackFloorCorner: number;
    let WallTrackFloorPlaneCorner: number;
    let SlopeUpVerticalLeftWide: number;
    let SlopeUpVerticalRightWide: number;
    let BlockSlopeVerticalCornerTop: number;
    let BlockSlopeVerticalCornerBottom: number;
    let WallTrackSlopeToVertical: number;
    let PlaneSlopeToVertical: number;
    let BlockSlopeToVertical: number;
    let PlaneSlopeUpLong: number;
    let PlaneSlopeDownLong: number;
    let SlopeUpLongLeftWide: number;
    let SlopeUpLongRightWide: number;
    let SlopeDownLongLeftWide: number;
    let SlopeDownLongRightWide: number;
    let BlockSlopeUpLong: number;
    let BlockSlopeDownLong: number;
    let BlockSlopeVerticalInnerCornerBottom: number;
    let BlockSlopeVerticalInnerCornerTop: number;
    let BlockInnerCorner: number;
}
/**
 * Enum representing the different rotation axises for blocks.
 * Each axis corresponds to a specific rotation direction.
 * @type {{YPositive: 0, YNegative: 1, XPositive: 2, XNegative: 3, ZPositive: 4, ZNegative: 5}}
 */
declare const BlockRotationAxises: {
    YPositive: 0;
    YNegative: 1;
    XPositive: 2;
    XNegative: 3;
    ZPositive: 4;
    ZNegative: 5;
};
/**
 * Physics attributes for the car and its components.
 * @type {{massOffset: number, detectorBoxCenter: InstanceType<typeof THREE.Vector3>, detectorBoxSize: InstanceType<typeof THREE.Vector3>, suspensionResetLengthFront: number, suspensionResetLengthRear: number}}
 */
declare const PhysicsAttributes: {
    massOffset: number;
    detectorBoxCenter: InstanceType<typeof THREE.Vector3>;
    detectorBoxSize: InstanceType<typeof THREE.Vector3>;
    suspensionResetLengthFront: number;
    suspensionResetLengthRear: number;
};
/**
 * Class to manage track data, including physics shapes and detectors.
 */
declare class TrackData {
    /**
     * Creates a physics shape from an array of vertices.
     * The vertices should be in groups of 9, representing triangles in the format:
     * [x1, y1, z1, x2, y2, z2, x3, y3, z3].
     * The method constructs a triangle mesh and a bounding box from the vertices.
     * @param {number[]} vertices - An array of vertices representing triangles.
     * @returns {{boundingBox: InstanceType<typeof THREE.Box3>, shape: InstanceType<typeof Ammo.btBvhTriangleMeshShape>, triangleMesh: InstanceType<typeof Ammo.btTriangleMesh>}}
     * @throws {Error} Throws an error if the vertices length is not divisible by 9.
     */
    static createPhysicsShape(vertices: number[]): {
        boundingBox: InstanceType<typeof THREE.Box3>;
        shape: InstanceType<typeof Ammo.btBvhTriangleMeshShape>;
        triangleMesh: InstanceType<typeof Ammo.btTriangleMesh>;
    };
    /**
     * Creates a new TrackData instance.
     * @param {Array<{id: number, vertices: number[], detector?: {type: number, center: number[], size: number[]}, startOffset?: number[]}>} models - An array of track models with their vertices and optional detectors and start offsets.
     * @throws {Error} Throws an error if the vertices length is not divisible by 9.
     * @constructor
     */
    constructor(
        models: Array<{
            id: number;
            vertices: number[];
            detector?: {
                type: number;
                center: number[];
                size: number[];
            };
            startOffset?: number[];
        }>
    );
    models: Map<any, any>;
    /**
     * Disposes of the track data.
     */
    dispose(): void;
    /**
     * Returns the physics shape for a given track part id.
     * @param {number} id - The id of the track part.
     * @throws {Error} Throws an error if the track part with the given id does
     * @returns {{boundingBox: InstanceType<typeof THREE.Box3>, shape: InstanceType<typeof Ammo.btCollisionShape>}}
     */
    getPhysicsShape(id: number): {
        boundingBox: InstanceType<typeof THREE.Box3>;
        shape: InstanceType<typeof Ammo.btCollisionShape>;
    };
    /**
     * Returns an array of part types that have a detector of the specified type.
     * @param {number} type - The type of the detector to filter by.
     * @returns {Array<number>} An array of part types that have a detector of the
     */
    getPartTypesWithDetector(type: number): Array<number>;
    /**
     * Returns an array of part types that are considered start parts.
     * @returns {Array<number>} An array of part types that are considered start parts.
     */
    getStartPartTypes(): Array<number>;
    /**
     * Returns the start offset for a given track part id.
     * @param {number} id - The id of the track part.
     * @throws {Error} Throws an error if the track part with the given id does not exist.
     * @returns {InstanceType<typeof THREE.Vector3>|null} The start offset for the track part, or null if not defined.
     */
    getPartStartOffset(id: number): InstanceType<typeof THREE.Vector3> | null;
    /**
     * Returns the detector for a given track part id.
     * @param {number} id - The id of the track part.
     * @throws {Error} Throws an error if the track part with the given id does not exist.
     * @returns {Object} The detector object containing type, center, and size.
     */
    getDetector(id: number): any;
}
declare namespace SimAPICommands {
    let Init: number;
    let Verify: number;
    let TestDeterminism: number;
    let CreateCar: number;
    let DeleteCar: number;
    let StartCar: number;
    let ControlCar: number;
    let PauseCar: number;
    let VerifyResult: number;
    let DeterminismResult: number;
    let UpdateResult: number;
}
/**
 * Class to review replay frames.
 */
declare class ReplayReviewer {
    /**
     * Creates a new ReplayReviewer instance.
     * @param {InstanceType<typeof FrameRecorder>} frameRecorder - The frame recorder to use for reviewing frames.
     * @constructor
     */
    constructor(frameRecorder: InstanceType<typeof FrameRecorder>);
    frameRecorder: FrameRecorder;
    /**
     * Retrieves the controls for a specific frame index.
     * This method returns the controls recorded for the specified frame index.
     * @param {number} frameIndex - The index of the frame to retrieve controls for
     * @returns {{up: boolean, down: boolean, left: boolean, right: boolean, reset: boolean}} The controls for the specified frame index.
     */
    getControls(frameIndex: number): {
        up: boolean;
        down: boolean;
        left: boolean;
        right: boolean;
        reset: boolean;
    };
}
/**
 * Base64 URL-safe character set (RFC 4648).
 * @type {string[]}
 */
declare const BASE64_CHARS: string[];
/**
 * Lookup table for character codes to Base64 indices.
 * @type {number[]}
 */
declare const CHAR_TO_INDEX: number[];
/**
 * Class representing an angle in a range of 0 to 179 degrees.
 */
declare class Angle {
    /**
     * Creates an Angle from degrees
     * @param {number} degrees - Angle in degrees
     * @returns {Angle} New Angle instance
     */
    static fromDegrees(degrees: number): Angle;
    /**
     * Creates a new Angle instance
     * @param {number} representation - Angle representation (0-179, default 28)
     * @throws {Error} If representation is not a safe integer or out of range
     * @constructor
     */
    constructor(representation?: number);
    angle: number;
    /**
     * Creates a copy of this Angle
     * @returns {Angle} A new Angle with the same value
     */
    clone(): Angle;
    /**
     * Converts the internal representation to degrees
     * @returns {number} Angle in degrees (0-358)
     */
    toDegrees(): number;
    /**
     * Calculates a sun position vector based on this angle
     * @returns {InstanceType<typeof THREE.Vector3>} Normalized 3D vector representing sun position
     */
    getSunPosition(): InstanceType<typeof THREE.Vector3>;
    /**
     * Gets the internal angle representation
     * @returns {number} The internal representation (0-179)
     */
    get representation(): number;
}
/**
 * Enum representing different environments in the simulation.
 * @type {{Summer: 0, Winter: 1, Desert: 2}}
 */
declare const Environments: {
    Summer: 0;
    Winter: 1;
    Desert: 2;
};
declare namespace ExtendedEnvironments {
    let Default: number;
    let Summer: number;
    let Winter: number;
    let Desert: number;
    let Custom0: number;
    let Custom1: number;
    let Custom2: number;
    let Custom3: number;
    let Custom4: number;
    let Custom5: number;
    let Custom6: number;
    let Custom7: number;
    let Custom8: number;
}
declare namespace PartsCategories {
    export let Special: number;
    export let Road: number;
    export let RoadTurns: number;
    export let RoadWide: number;
    let Plane_1: number;
    export { Plane_1 as Plane };
    let Block_1: number;
    export { Block_1 as Block };
    export let WallTrack: number;
    export let Pillar: number;
    export let Sign: number;
}
