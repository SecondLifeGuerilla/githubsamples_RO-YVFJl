System.register([], function (_export2, _context2) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            System.register(['rodin/core'], function (_export, _context) {
                "use strict";

                var RODIN;
                return {
                    setters: [function (_rodinCore) {
                        RODIN = _rodinCore;
                    }],
                    execute: function () {
                        RODIN.start();

                        /**
                         * Create spherical skybox
                         * Radius is 72 meters
                         * Number of segments is 36, by horizontal and vertical axes
                         * Set material rendering side to back
                         * Load texture from URL
                         * Add to the scene
                         */
                        const sphericalSkybox = new RODIN.Sphere(72, 720, 4, new THREE.MeshBasicMaterial({
                            map: RODIN.Loader.loadTexture('./textures/pitch_deck_spherical.jpg')
                        }));
                        sphericalSkybox.on(RODIN.CONST.READY, evt => {
                            evt.target.scale.set(-1, 1, 1);
                            evt.target.rotation.y = Math.PI;
                        });
                        RODIN.Scene.add(sphericalSkybox);
                    }
                };
            });
        }
    };
});