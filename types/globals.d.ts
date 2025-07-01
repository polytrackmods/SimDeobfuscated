declare const THREE: typeof import("three");
declare const Ammo: Awaited<
    ReturnType<typeof import("../node_modules/ammojs3/dist/ammo").default>
> &
    typeof import("../node_modules/ammojs3/dist/ammo").default;
declare const sha256: typeof import("js-sha256");
declare const OBB: typeof import("three/examples/jsm/math/OBB").OBB;
// declare const pako: typeof import("pako");
