declare const THREE: typeof import("three");
type AmmoModule = Awaited<ReturnType<typeof import("ammojs3").default>>;
interface AmmoInitFunction {
    (): Promise<AmmoModule>;
}
declare const Ammo: AmmoModule & AmmoInitFunction;
declare const sha256: typeof import("js-sha256");
declare const OBB: typeof import("three/examples/jsm/math/OBB.js").OBB;
// declare const pako: typeof import("pako");
