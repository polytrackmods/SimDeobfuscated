import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.js"],
        plugins: { js },
        extends: ["js/recommended"],
    },
    { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
    {
        files: ["**/*.js"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.worker,

                THREE: "readonly",
                pako: "readonly",
                sha256: "readonly",
                OBB: "readonly",
                Ammo: "readonly",
            },
        },
    },
]);
