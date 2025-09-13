System.register("chunks:///_virtual/builtin-pipeline-settings.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './builtin-pipeline-types.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Camera, CCBoolean, CCInteger, CCFloat, Material, Texture2D, rendering, Component, fillRequiredPipelineSettings, makePipelineSettings;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Camera = module.Camera;
      CCBoolean = module.CCBoolean;
      CCInteger = module.CCInteger;
      CCFloat = module.CCFloat;
      Material = module.Material;
      Texture2D = module.Texture2D;
      rendering = module.rendering;
      Component = module.Component;
    }, function (module) {
      fillRequiredPipelineSettings = module.fillRequiredPipelineSettings;
      makePipelineSettings = module.makePipelineSettings;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "de1c2EHcMhAIYRZY5nyTQHG", "builtin-pipeline-settings", undefined);
      var ccclass = _decorator.ccclass,
        disallowMultiple = _decorator.disallowMultiple,
        executeInEditMode = _decorator.executeInEditMode,
        menu = _decorator.menu,
        property = _decorator.property,
        requireComponent = _decorator.requireComponent,
        type = _decorator.type;
      var BuiltinPipelineSettings = exports('BuiltinPipelineSettings', (_dec = ccclass('BuiltinPipelineSettings'), _dec2 = menu('Rendering/BuiltinPipelineSettings'), _dec3 = requireComponent(Camera), _dec4 = property(CCBoolean), _dec5 = property({
        displayName: 'Editor Preview (Experimental)',
        type: CCBoolean
      }), _dec6 = property({
        group: {
          id: 'MSAA',
          name: 'Multisample Anti-Aliasing'
        },
        type: CCBoolean
      }), _dec7 = property({
        group: {
          id: 'MSAA',
          name: 'Multisample Anti-Aliasing',
          style: 'section'
        },
        type: CCInteger,
        range: [2, 4, 2]
      }), _dec8 = property({
        group: {
          id: 'ShadingScale',
          name: 'ShadingScale',
          style: 'section'
        },
        type: CCBoolean
      }), _dec9 = property({
        tooltip: 'i18n:postprocess.shadingScale',
        group: {
          id: 'ShadingScale',
          name: 'ShadingScale'
        },
        type: CCFloat,
        range: [0.01, 4, 0.01],
        slide: true
      }), _dec10 = property({
        group: {
          id: 'Bloom',
          name: 'Bloom (PostProcessing)',
          style: 'section'
        },
        type: CCBoolean
      }), _dec11 = property({
        group: {
          id: 'Bloom',
          name: 'Bloom (PostProcessing)',
          style: 'section'
        },
        type: Material
      }), _dec12 = property({
        tooltip: 'i18n:bloom.enableAlphaMask',
        group: {
          id: 'Bloom',
          name: 'Bloom (PostProcessing)',
          style: 'section'
        },
        type: CCBoolean
      }), _dec13 = property({
        tooltip: 'i18n:bloom.iterations',
        group: {
          id: 'Bloom',
          name: 'Bloom (PostProcessing)',
          style: 'section'
        },
        type: CCInteger,
        range: [1, 6, 1],
        slide: true
      }), _dec14 = property({
        tooltip: 'i18n:bloom.threshold',
        group: {
          id: 'Bloom',
          name: 'Bloom (PostProcessing)',
          style: 'section'
        },
        type: CCFloat,
        min: 0
      }), _dec15 = property({
        group: {
          id: 'Color Grading',
          name: 'ColorGrading (LDR) (PostProcessing)',
          style: 'section'
        },
        type: CCBoolean
      }), _dec16 = property({
        group: {
          id: 'Color Grading',
          name: 'ColorGrading (LDR) (PostProcessing)',
          style: 'section'
        },
        type: Material
      }), _dec17 = property({
        tooltip: 'i18n:color_grading.contribute',
        group: {
          id: 'Color Grading',
          name: 'ColorGrading (LDR) (PostProcessing)',
          style: 'section'
        },
        type: CCFloat,
        range: [0, 1, 0.01],
        slide: true
      }), _dec18 = property({
        tooltip: 'i18n:color_grading.originalMap',
        group: {
          id: 'Color Grading',
          name: 'ColorGrading (LDR) (PostProcessing)',
          style: 'section'
        },
        type: Texture2D
      }), _dec19 = property({
        group: {
          id: 'FXAA',
          name: 'Fast Approximate Anti-Aliasing (PostProcessing)',
          style: 'section'
        },
        type: CCBoolean
      }), _dec20 = property({
        group: {
          id: 'FXAA',
          name: 'Fast Approximate Anti-Aliasing (PostProcessing)',
          style: 'section'
        },
        type: Material
      }), _dec21 = property({
        group: {
          id: 'FSR',
          name: 'FidelityFX Super Resolution',
          style: 'section'
        },
        type: CCBoolean
      }), _dec22 = property({
        group: {
          id: 'FSR',
          name: 'FidelityFX Super Resolution',
          style: 'section'
        },
        type: Material
      }), _dec23 = property({
        group: {
          id: 'FSR',
          name: 'FidelityFX Super Resolution',
          style: 'section'
        },
        type: CCFloat,
        range: [0, 1, 0.01],
        slide: true
      }), _dec24 = property({
        group: {
          id: 'ToneMapping',
          name: 'ToneMapping',
          style: 'section'
        },
        type: Material
      }), _dec(_class = _dec2(_class = _dec3(_class = disallowMultiple(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BuiltinPipelineSettings, _Component);
        function BuiltinPipelineSettings() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_settings", _descriptor, _assertThisInitialized(_this));
          // Editor Preview
          _initializerDefineProperty(_this, "_editorPreview", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = BuiltinPipelineSettings.prototype;
        _proto.getPipelineSettings = function getPipelineSettings() {
          return this._settings;
        }

        // Enable/Disable
        ;

        _proto.onEnable = function onEnable() {
          fillRequiredPipelineSettings(this._settings);
          var cameraComponent = this.getComponent(Camera);
          var camera = cameraComponent.camera;
          camera.pipelineSettings = this._settings;
        };
        _proto.onDisable = function onDisable() {
          var cameraComponent = this.getComponent(Camera);
          var camera = cameraComponent.camera;
          camera.pipelineSettings = null;
        };
        _proto._tryEnableEditorPreview = function _tryEnableEditorPreview() {
          if (rendering === undefined) {
            return;
          }
          if (this._editorPreview) {
            rendering.setEditorPipelineSettings(this._settings);
          } else {
            this._disableEditorPreview();
          }
        };
        _proto._disableEditorPreview = function _disableEditorPreview() {
          if (rendering === undefined) {
            return;
          }
          var current = rendering.getEditorPipelineSettings();
          if (current === this._settings) {
            rendering.setEditorPipelineSettings(null);
          }
        }

        // MSAA
        ;

        _createClass(BuiltinPipelineSettings, [{
          key: "editorPreview",
          get: function get() {
            return this._editorPreview;
          },
          set: function set(v) {
            this._editorPreview = v;
          }
        }, {
          key: "MsaaEnable",
          get: function get() {
            return this._settings.msaa.enabled;
          },
          set: function set(value) {
            this._settings.msaa.enabled = value;
          }
        }, {
          key: "msaaSampleCount",
          get: function get() {
            return this._settings.msaa.sampleCount;
          }

          // Shading Scale
          ,

          set: function set(value) {
            value = Math.pow(2, Math.ceil(Math.log2(Math.max(value, 2))));
            value = Math.min(value, 4);
            this._settings.msaa.sampleCount = value;
          }
        }, {
          key: "shadingScaleEnable",
          get: function get() {
            return this._settings.enableShadingScale;
          },
          set: function set(value) {
            this._settings.enableShadingScale = value;
          }
        }, {
          key: "shadingScale",
          get: function get() {
            return this._settings.shadingScale;
          }

          // Bloom
          ,

          set: function set(value) {
            this._settings.shadingScale = value;
          }
        }, {
          key: "bloomEnable",
          get: function get() {
            return this._settings.bloom.enabled;
          },
          set: function set(value) {
            this._settings.bloom.enabled = value;
          }
        }, {
          key: "bloomMaterial",
          get: function get() {
            return this._settings.bloom.material;
          },
          set: function set(value) {
            if (this._settings.bloom.material === value) {
              return;
            }
            this._settings.bloom.material = value;
          }
        }, {
          key: "bloomEnableAlphaMask",
          get: function get() {
            return this._settings.bloom.enableAlphaMask;
          },
          set: function set(value) {
            this._settings.bloom.enableAlphaMask = value;
          }
        }, {
          key: "bloomIterations",
          get: function get() {
            return this._settings.bloom.iterations;
          },
          set: function set(value) {
            this._settings.bloom.iterations = value;
          }
        }, {
          key: "bloomThreshold",
          get: function get() {
            return this._settings.bloom.threshold;
          },
          set: function set(value) {
            this._settings.bloom.threshold = value;
          }
        }, {
          key: "bloomIntensity",
          get: function get() {
            return this._settings.bloom.intensity;
          }

          // Color Grading (LDR)
          ,

          set: function set(value) {
            this._settings.bloom.intensity = value;
          }
        }, {
          key: "colorGradingEnable",
          get: function get() {
            return this._settings.colorGrading.enabled;
          },
          set: function set(value) {
            this._settings.colorGrading.enabled = value;
          }
        }, {
          key: "colorGradingMaterial",
          get: function get() {
            return this._settings.colorGrading.material;
          },
          set: function set(value) {
            if (this._settings.colorGrading.material === value) {
              return;
            }
            this._settings.colorGrading.material = value;
          }
        }, {
          key: "colorGradingContribute",
          get: function get() {
            return this._settings.colorGrading.contribute;
          },
          set: function set(value) {
            this._settings.colorGrading.contribute = value;
          }
        }, {
          key: "colorGradingMap",
          get: function get() {
            return this._settings.colorGrading.colorGradingMap;
          }

          // FXAA
          ,

          set: function set(val) {
            this._settings.colorGrading.colorGradingMap = val;
          }
        }, {
          key: "fxaaEnable",
          get: function get() {
            return this._settings.fxaa.enabled;
          },
          set: function set(value) {
            this._settings.fxaa.enabled = value;
          }
        }, {
          key: "fxaaMaterial",
          get: function get() {
            return this._settings.fxaa.material;
          }

          // FSR
          ,

          set: function set(value) {
            if (this._settings.fxaa.material === value) {
              return;
            }
            this._settings.fxaa.material = value;
          }
        }, {
          key: "fsrEnable",
          get: function get() {
            return this._settings.fsr.enabled;
          },
          set: function set(value) {
            this._settings.fsr.enabled = value;
          }
        }, {
          key: "fsrMaterial",
          get: function get() {
            return this._settings.fsr.material;
          },
          set: function set(value) {
            if (this._settings.fsr.material === value) {
              return;
            }
            this._settings.fsr.material = value;
          }
        }, {
          key: "fsrSharpness",
          get: function get() {
            return this._settings.fsr.sharpness;
          },
          set: function set(value) {
            this._settings.fsr.sharpness = value;
          }
        }, {
          key: "toneMappingMaterial",
          get: function get() {
            return this._settings.toneMapping.material;
          },
          set: function set(value) {
            if (this._settings.toneMapping.material === value) {
              return;
            }
            this._settings.toneMapping.material = value;
          }
        }]);
        return BuiltinPipelineSettings;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_settings", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return makePipelineSettings();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_editorPreview", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "editorPreview", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "editorPreview"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "MsaaEnable", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "MsaaEnable"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "msaaSampleCount", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "msaaSampleCount"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "shadingScaleEnable", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "shadingScaleEnable"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "shadingScale", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "shadingScale"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "bloomEnable", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "bloomEnable"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "bloomMaterial", [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "bloomMaterial"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "bloomEnableAlphaMask", [_dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "bloomEnableAlphaMask"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "bloomIterations", [_dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "bloomIterations"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "bloomThreshold", [_dec14], Object.getOwnPropertyDescriptor(_class2.prototype, "bloomThreshold"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "colorGradingEnable", [_dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "colorGradingEnable"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "colorGradingMaterial", [_dec16], Object.getOwnPropertyDescriptor(_class2.prototype, "colorGradingMaterial"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "colorGradingContribute", [_dec17], Object.getOwnPropertyDescriptor(_class2.prototype, "colorGradingContribute"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "colorGradingMap", [_dec18], Object.getOwnPropertyDescriptor(_class2.prototype, "colorGradingMap"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fxaaEnable", [_dec19], Object.getOwnPropertyDescriptor(_class2.prototype, "fxaaEnable"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fxaaMaterial", [_dec20], Object.getOwnPropertyDescriptor(_class2.prototype, "fxaaMaterial"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fsrEnable", [_dec21], Object.getOwnPropertyDescriptor(_class2.prototype, "fsrEnable"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fsrMaterial", [_dec22], Object.getOwnPropertyDescriptor(_class2.prototype, "fsrMaterial"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fsrSharpness", [_dec23], Object.getOwnPropertyDescriptor(_class2.prototype, "fsrSharpness"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "toneMappingMaterial", [_dec24], Object.getOwnPropertyDescriptor(_class2.prototype, "toneMappingMaterial"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/builtin-pipeline-types.ts", ['cc'], function (exports) {
  var cclegacy, gfx;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      gfx = module.gfx;
    }],
    execute: function () {
      exports({
        fillRequiredBloom: fillRequiredBloom,
        fillRequiredColorGrading: fillRequiredColorGrading,
        fillRequiredFSR: fillRequiredFSR,
        fillRequiredFXAA: fillRequiredFXAA,
        fillRequiredHBAO: fillRequiredHBAO,
        fillRequiredMSAA: fillRequiredMSAA,
        fillRequiredPipelineSettings: fillRequiredPipelineSettings,
        fillRequiredToneMapping: fillRequiredToneMapping,
        makeBloom: makeBloom,
        makeColorGrading: makeColorGrading,
        makeFSR: makeFSR,
        makeFXAA: makeFXAA,
        makeHBAO: makeHBAO,
        makeMSAA: makeMSAA,
        makePipelineSettings: makePipelineSettings,
        makeToneMapping: makeToneMapping
      });
      cclegacy._RF.push({}, "cbf30kCUX9A3K+QpVC6wnzx", "builtin-pipeline-types", undefined);
      var SampleCount = gfx.SampleCount;
      function makeMSAA() {
        return {
          enabled: false,
          sampleCount: SampleCount.X4
        };
      }
      function fillRequiredMSAA(value) {
        if (value.enabled === undefined) {
          value.enabled = false;
        }
        if (value.sampleCount === undefined) {
          value.sampleCount = SampleCount.X4;
        }
      }
      function makeHBAO() {
        return {
          enabled: false,
          radiusScale: 1,
          angleBiasDegree: 10,
          blurSharpness: 3,
          aoSaturation: 1,
          needBlur: false
        };
      }
      function fillRequiredHBAO(value) {
        if (value.enabled === undefined) {
          value.enabled = false;
        }
        if (value.radiusScale === undefined) {
          value.radiusScale = 1;
        }
        if (value.angleBiasDegree === undefined) {
          value.angleBiasDegree = 10;
        }
        if (value.blurSharpness === undefined) {
          value.blurSharpness = 3;
        }
        if (value.aoSaturation === undefined) {
          value.aoSaturation = 1;
        }
        if (value.needBlur === undefined) {
          value.needBlur = false;
        }
      }
      function makeBloom() {
        return {
          enabled: false,
          material: null,
          enableAlphaMask: false,
          iterations: 3,
          threshold: 0.8,
          intensity: 2.3
        };
      }
      function fillRequiredBloom(value) {
        if (value.enabled === undefined) {
          value.enabled = false;
        }
        if (value.material === undefined) {
          value.material = null;
        }
        if (value.enableAlphaMask === undefined) {
          value.enableAlphaMask = false;
        }
        if (value.iterations === undefined) {
          value.iterations = 3;
        }
        if (value.threshold === undefined) {
          value.threshold = 0.8;
        }
        if (value.intensity === undefined) {
          value.intensity = 2.3;
        }
      }
      function makeColorGrading() {
        return {
          enabled: false,
          material: null,
          contribute: 1,
          colorGradingMap: null
        };
      }
      function fillRequiredColorGrading(value) {
        if (value.enabled === undefined) {
          value.enabled = false;
        }
        if (value.material === undefined) {
          value.material = null;
        }
        if (value.contribute === undefined) {
          value.contribute = 1;
        }
        if (value.colorGradingMap === undefined) {
          value.colorGradingMap = null;
        }
      }
      function makeFSR() {
        return {
          enabled: false,
          material: null,
          sharpness: 0.8
        };
      }
      function fillRequiredFSR(value) {
        if (value.enabled === undefined) {
          value.enabled = false;
        }
        if (value.material === undefined) {
          value.material = null;
        }
        if (value.sharpness === undefined) {
          value.sharpness = 0.8;
        }
      }
      function makeFXAA() {
        return {
          enabled: false,
          material: null
        };
      }
      function fillRequiredFXAA(value) {
        if (value.enabled === undefined) {
          value.enabled = false;
        }
        if (value.material === undefined) {
          value.material = null;
        }
      }
      function makeToneMapping() {
        return {
          material: null
        };
      }
      function fillRequiredToneMapping(value) {
        if (value.material === undefined) {
          value.material = null;
        }
      }
      function makePipelineSettings() {
        return {
          msaa: makeMSAA(),
          enableShadingScale: false,
          shadingScale: 0.5,
          bloom: makeBloom(),
          toneMapping: makeToneMapping(),
          colorGrading: makeColorGrading(),
          fsr: makeFSR(),
          fxaa: makeFXAA()
        };
      }
      function fillRequiredPipelineSettings(value) {
        if (!value.msaa) {
          value.msaa = makeMSAA();
        } else {
          fillRequiredMSAA(value.msaa);
        }
        if (value.enableShadingScale === undefined) {
          value.enableShadingScale = false;
        }
        if (value.shadingScale === undefined) {
          value.shadingScale = 0.5;
        }
        if (!value.bloom) {
          value.bloom = makeBloom();
        } else {
          fillRequiredBloom(value.bloom);
        }
        if (!value.toneMapping) {
          value.toneMapping = makeToneMapping();
        } else {
          fillRequiredToneMapping(value.toneMapping);
        }
        if (!value.colorGrading) {
          value.colorGrading = makeColorGrading();
        } else {
          fillRequiredColorGrading(value.colorGrading);
        }
        if (!value.fsr) {
          value.fsr = makeFSR();
        } else {
          fillRequiredFSR(value.fsr);
        }
        if (!value.fxaa) {
          value.fxaa = makeFXAA();
        } else {
          fillRequiredFXAA(value.fxaa);
        }
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/builtin-pipeline.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './builtin-pipeline-types.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, geometry, gfx, renderer, Vec2, Vec4, rendering, assert, warn, clamp, Vec3, Material, Layers, PipelineEventType, sys, pipeline, makePipelineSettings;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      geometry = module.geometry;
      gfx = module.gfx;
      renderer = module.renderer;
      Vec2 = module.Vec2;
      Vec4 = module.Vec4;
      rendering = module.rendering;
      assert = module.assert;
      warn = module.warn;
      clamp = module.clamp;
      Vec3 = module.Vec3;
      Material = module.Material;
      Layers = module.Layers;
      PipelineEventType = module.PipelineEventType;
      sys = module.sys;
      pipeline = module.pipeline;
    }, function (module) {
      makePipelineSettings = module.makePipelineSettings;
    }],
    execute: function () {
      exports('getPingPongRenderTarget', getPingPongRenderTarget);
      cclegacy._RF.push({}, "ff9b0GZzgRM/obMbHGfCNbk", "builtin-pipeline", undefined);
      var AABB = geometry.AABB,
        Sphere = geometry.Sphere,
        intersect = geometry.intersect;
      var ClearFlagBit = gfx.ClearFlagBit,
        Color = gfx.Color,
        Format = gfx.Format,
        FormatFeatureBit = gfx.FormatFeatureBit,
        LoadOp = gfx.LoadOp,
        StoreOp = gfx.StoreOp,
        TextureType = gfx.TextureType,
        Viewport = gfx.Viewport;
      var scene = renderer.scene;
      var CameraUsage = scene.CameraUsage,
        CSMLevel = scene.CSMLevel,
        LightType = scene.LightType;
      function forwardNeedClearColor(camera) {
        return !!(camera.clearFlag & (ClearFlagBit.COLOR | ClearFlagBit.STENCIL << 1));
      }
      function getCsmMainLightViewport(light, w, h, level, vp, screenSpaceSignY) {
        if (light.shadowFixedArea || light.csmLevel === CSMLevel.LEVEL_1) {
          vp.left = 0;
          vp.top = 0;
          vp.width = Math.trunc(w);
          vp.height = Math.trunc(h);
        } else {
          vp.left = Math.trunc(level % 2 * 0.5 * w);
          if (screenSpaceSignY > 0) {
            vp.top = Math.trunc((1 - Math.floor(level / 2)) * 0.5 * h);
          } else {
            vp.top = Math.trunc(Math.floor(level / 2) * 0.5 * h);
          }
          vp.width = Math.trunc(0.5 * w);
          vp.height = Math.trunc(0.5 * h);
        }
        vp.left = Math.max(0, vp.left);
        vp.top = Math.max(0, vp.top);
        vp.width = Math.max(1, vp.width);
        vp.height = Math.max(1, vp.height);
      }
      var PipelineConfigs = exports('PipelineConfigs', function PipelineConfigs() {
        this.isWeb = false;
        this.isWebGL1 = false;
        this.isWebGPU = false;
        this.isMobile = false;
        this.isHDR = false;
        this.useFloatOutput = false;
        this.toneMappingType = 0;
        // 0: ACES, 1: None
        this.shadowEnabled = false;
        this.shadowMapFormat = Format.R32F;
        this.shadowMapSize = new Vec2(1, 1);
        this.usePlanarShadow = false;
        this.screenSpaceSignY = 1;
        this.supportDepthSample = false;
        this.mobileMaxSpotLightShadowMaps = 1;
        this.platform = new Vec4(0, 0, 0, 0);
      });
      function setupPipelineConfigs(ppl, configs) {
        var sampleFeature = FormatFeatureBit.SAMPLED_TEXTURE | FormatFeatureBit.LINEAR_FILTER;
        var device = ppl.device;
        // Platform
        configs.isWeb = !sys.isNative;
        configs.isWebGL1 = device.gfxAPI === gfx.API.WEBGL;
        configs.isWebGPU = device.gfxAPI === gfx.API.WEBGPU;
        configs.isMobile = sys.isMobile;

        // Rendering
        configs.isHDR = ppl.pipelineSceneData.isHDR; // Has tone mapping
        configs.useFloatOutput = ppl.getMacroBool('CC_USE_FLOAT_OUTPUT');
        configs.toneMappingType = ppl.pipelineSceneData.postSettings.toneMappingType;
        // Shadow
        var shadowInfo = ppl.pipelineSceneData.shadows;
        configs.shadowEnabled = shadowInfo.enabled;
        configs.shadowMapFormat = pipeline.supportsR32FloatTexture(ppl.device) ? Format.R32F : Format.RGBA8;
        configs.shadowMapSize.set(shadowInfo.size);
        configs.usePlanarShadow = shadowInfo.enabled && shadowInfo.type === renderer.scene.ShadowType.Planar;
        // Device
        configs.screenSpaceSignY = ppl.device.capabilities.screenSpaceSignY;
        configs.supportDepthSample = (ppl.device.getFormatFeatures(Format.DEPTH_STENCIL) & sampleFeature) === sampleFeature;
        // Constants
        var screenSpaceSignY = device.capabilities.screenSpaceSignY;
        configs.platform.x = configs.isMobile ? 1.0 : 0.0;
        configs.platform.w = screenSpaceSignY * 0.5 + 0.5 << 1 | device.capabilities.clipSpaceSignY * 0.5 + 0.5;
      }
      var defaultSettings = makePipelineSettings();
      var CameraConfigs = exports('CameraConfigs', function CameraConfigs() {
        this.settings = defaultSettings;
        // Window
        this.isMainGameWindow = false;
        this.renderWindowId = 0;
        // Camera
        this.colorName = '';
        this.depthStencilName = '';
        // Pipeline
        this.enableFullPipeline = false;
        this.enableProfiler = false;
        this.remainingPasses = 0;
        // Shading Scale
        this.enableShadingScale = false;
        this.shadingScale = 1.0;
        this.nativeWidth = 1;
        this.nativeHeight = 1;
        this.width = 1;
        // Scaled width
        this.height = 1;
        // Scaled height
        // Radiance
        this.enableHDR = false;
        this.radianceFormat = gfx.Format.RGBA8;
        // Tone Mapping
        this.copyAndTonemapMaterial = null;
        // Depth
        /** @en mutable */
        this.enableStoreSceneDepth = false;
      });
      var sClearColorTransparentBlack = new Color(0, 0, 0, 0);
      function sortPipelinePassBuildersByConfigOrder(passBuilders) {
        passBuilders.sort(function (a, b) {
          return a.getConfigOrder() - b.getConfigOrder();
        });
      }
      function sortPipelinePassBuildersByRenderOrder(passBuilders) {
        passBuilders.sort(function (a, b) {
          return a.getRenderOrder() - b.getRenderOrder();
        });
      }
      function addCopyToScreenPass(ppl, pplConfigs, cameraConfigs, input) {
        assert(!!cameraConfigs.copyAndTonemapMaterial);
        var pass = ppl.addRenderPass(cameraConfigs.nativeWidth, cameraConfigs.nativeHeight, 'cc-tone-mapping');
        pass.addRenderTarget(cameraConfigs.colorName, LoadOp.CLEAR, StoreOp.STORE, sClearColorTransparentBlack);
        pass.addTexture(input, 'inputTexture');
        pass.setVec4('g_platform', pplConfigs.platform);
        pass.addQueue(rendering.QueueHint.OPAQUE).addFullscreenQuad(cameraConfigs.copyAndTonemapMaterial, 1);
        return pass;
      }
      function getPingPongRenderTarget(prevName, prefix, id) {
        if (prevName.startsWith(prefix)) {
          return "" + prefix + (1 - Number(prevName.charAt(prefix.length))) + "_" + id;
        } else {
          return prefix + "0_" + id;
        }
      }
      var ForwardLighting = /*#__PURE__*/function () {
        function ForwardLighting() {
          // Active lights
          this.lights = [];
          // Active spot lights with shadows (Mutually exclusive with `lights`)
          this.shadowEnabledSpotLights = [];
          // Internal cached resources
          this._sphere = Sphere.create(0, 0, 0, 1);
          this._boundingBox = new AABB();
          this._rangedDirLightBoundingBox = new AABB(0.0, 0.0, 0.0, 0.5, 0.5, 0.5);
        }
        var _proto = ForwardLighting.prototype;
        // ----------------------------------------------------------------
        // Interface
        // ----------------------------------------------------------------
        _proto.cullLights = function cullLights(scene, frustum, cameraPos) {
          // TODO(zhouzhenglong): Make light culling native
          this.lights.length = 0;
          this.shadowEnabledSpotLights.length = 0;
          // spot lights
          for (var _iterator = _createForOfIteratorHelperLoose(scene.spotLights), _step; !(_step = _iterator()).done;) {
            var light = _step.value;
            if (light.baked) {
              continue;
            }
            Sphere.set(this._sphere, light.position.x, light.position.y, light.position.z, light.range);
            if (intersect.sphereFrustum(this._sphere, frustum)) {
              if (light.shadowEnabled) {
                this.shadowEnabledSpotLights.push(light);
              } else {
                this.lights.push(light);
              }
            }
          }
          // sphere lights
          for (var _iterator2 = _createForOfIteratorHelperLoose(scene.sphereLights), _step2; !(_step2 = _iterator2()).done;) {
            var _light = _step2.value;
            if (_light.baked) {
              continue;
            }
            Sphere.set(this._sphere, _light.position.x, _light.position.y, _light.position.z, _light.range);
            if (intersect.sphereFrustum(this._sphere, frustum)) {
              this.lights.push(_light);
            }
          }
          // point lights
          for (var _iterator3 = _createForOfIteratorHelperLoose(scene.pointLights), _step3; !(_step3 = _iterator3()).done;) {
            var _light2 = _step3.value;
            if (_light2.baked) {
              continue;
            }
            Sphere.set(this._sphere, _light2.position.x, _light2.position.y, _light2.position.z, _light2.range);
            if (intersect.sphereFrustum(this._sphere, frustum)) {
              this.lights.push(_light2);
            }
          }
          // ranged dir lights
          for (var _iterator4 = _createForOfIteratorHelperLoose(scene.rangedDirLights), _step4; !(_step4 = _iterator4()).done;) {
            var _light3 = _step4.value;
            AABB.transform(this._boundingBox, this._rangedDirLightBoundingBox, _light3.node.getWorldMatrix());
            if (intersect.aabbFrustum(this._boundingBox, frustum)) {
              this.lights.push(_light3);
            }
          }
          if (cameraPos) {
            this.shadowEnabledSpotLights.sort(function (lhs, rhs) {
              return Vec3.squaredDistance(cameraPos, lhs.position) - Vec3.squaredDistance(cameraPos, rhs.position);
            });
          }
        };
        _proto._addLightQueues = function _addLightQueues(camera, pass) {
          for (var _iterator5 = _createForOfIteratorHelperLoose(this.lights), _step5; !(_step5 = _iterator5()).done;) {
            var light = _step5.value;
            var queue = pass.addQueue(rendering.QueueHint.BLEND, 'forward-add');
            switch (light.type) {
              case LightType.SPHERE:
                queue.name = 'sphere-light';
                break;
              case LightType.SPOT:
                queue.name = 'spot-light';
                break;
              case LightType.POINT:
                queue.name = 'point-light';
                break;
              case LightType.RANGED_DIRECTIONAL:
                queue.name = 'ranged-directional-light';
                break;
              default:
                queue.name = 'unknown-light';
            }
            queue.addScene(camera, rendering.SceneFlags.BLEND, light);
          }
        };
        _proto.addSpotlightShadowPasses = function addSpotlightShadowPasses(ppl, camera, maxNumShadowMaps) {
          var i = 0;
          for (var _iterator6 = _createForOfIteratorHelperLoose(this.shadowEnabledSpotLights), _step6; !(_step6 = _iterator6()).done;) {
            var light = _step6.value;
            var shadowMapSize = ppl.pipelineSceneData.shadows.size;
            var shadowPass = ppl.addRenderPass(shadowMapSize.x, shadowMapSize.y, 'default');
            shadowPass.name = "SpotLightShadowPass" + i;
            shadowPass.addRenderTarget("SpotShadowMap" + i, LoadOp.CLEAR, StoreOp.STORE, new Color(1, 1, 1, 1));
            shadowPass.addDepthStencil("SpotShadowDepth" + i, LoadOp.CLEAR, StoreOp.DISCARD);
            shadowPass.addQueue(rendering.QueueHint.NONE, 'shadow-caster').addScene(camera, rendering.SceneFlags.OPAQUE | rendering.SceneFlags.MASK | rendering.SceneFlags.SHADOW_CASTER).useLightFrustum(light);
            ++i;
            if (i >= maxNumShadowMaps) {
              break;
            }
          }
        };
        _proto.addLightQueues = function addLightQueues(pass, camera, maxNumShadowMaps) {
          this._addLightQueues(camera, pass);
          var i = 0;
          for (var _iterator7 = _createForOfIteratorHelperLoose(this.shadowEnabledSpotLights), _step7; !(_step7 = _iterator7()).done;) {
            var light = _step7.value;
            // Add spot-light pass
            // Save last RenderPass to the `pass` variable
            // TODO(zhouzhenglong): Fix per queue addTexture
            pass.addTexture("SpotShadowMap" + i, 'cc_spotShadowMap');
            var queue = pass.addQueue(rendering.QueueHint.BLEND, 'forward-add');
            queue.addScene(camera, rendering.SceneFlags.BLEND, light);
            ++i;
            if (i >= maxNumShadowMaps) {
              break;
            }
          }
        }

        // Notice: ForwardLighting cannot handle a lot of lights.
        // If there are too many lights, the performance will be very poor.
        // If many lights are needed, please implement a forward+ or deferred rendering pipeline.
        ;

        _proto.addLightPasses = function addLightPasses(colorName, depthStencilName, depthStencilStoreOp, id,
        // window id
        width, height, camera, viewport, ppl, pass) {
          this._addLightQueues(camera, pass);
          var count = 0;
          var shadowMapSize = ppl.pipelineSceneData.shadows.size;
          for (var _iterator8 = _createForOfIteratorHelperLoose(this.shadowEnabledSpotLights), _step8; !(_step8 = _iterator8()).done;) {
            var light = _step8.value;
            var shadowPass = ppl.addRenderPass(shadowMapSize.x, shadowMapSize.y, 'default');
            shadowPass.name = 'SpotlightShadowPass';
            // Reuse csm shadow map
            shadowPass.addRenderTarget("ShadowMap" + id, LoadOp.CLEAR, StoreOp.STORE, new Color(1, 1, 1, 1));
            shadowPass.addDepthStencil("ShadowDepth" + id, LoadOp.CLEAR, StoreOp.DISCARD);
            shadowPass.addQueue(rendering.QueueHint.NONE, 'shadow-caster').addScene(camera, rendering.SceneFlags.OPAQUE | rendering.SceneFlags.MASK | rendering.SceneFlags.SHADOW_CASTER).useLightFrustum(light);

            // Add spot-light pass
            // Save last RenderPass to the `pass` variable
            ++count;
            var storeOp = count === this.shadowEnabledSpotLights.length ? depthStencilStoreOp : StoreOp.STORE;
            pass = ppl.addRenderPass(width, height, 'default');
            pass.name = 'SpotlightWithShadowMap';
            pass.setViewport(viewport);
            pass.addRenderTarget(colorName, LoadOp.LOAD);
            pass.addDepthStencil(depthStencilName, LoadOp.LOAD, storeOp);
            pass.addTexture("ShadowMap" + id, 'cc_spotShadowMap');
            var queue = pass.addQueue(rendering.QueueHint.BLEND, 'forward-add');
            queue.addScene(camera, rendering.SceneFlags.BLEND, light);
          }
          return pass;
        };
        _proto.isMultipleLightPassesNeeded = function isMultipleLightPassesNeeded() {
          return this.shadowEnabledSpotLights.length > 0;
        };
        return ForwardLighting;
      }();
      var BuiltinForwardPassBuilder = exports('BuiltinForwardPassBuilder', /*#__PURE__*/function () {
        function BuiltinForwardPassBuilder() {
          this.forwardLighting = new ForwardLighting();
          this._viewport = new Viewport();
          this._clearColor = new Color(0, 0, 0, 1);
          this._reflectionProbeClearColor = new Vec3(0, 0, 0);
        }
        var _proto2 = BuiltinForwardPassBuilder.prototype;
        _proto2.getConfigOrder = function getConfigOrder() {
          return BuiltinForwardPassBuilder.ConfigOrder;
        };
        _proto2.getRenderOrder = function getRenderOrder() {
          return BuiltinForwardPassBuilder.RenderOrder;
        };
        _proto2.configCamera = function configCamera(camera, pipelineConfigs, cameraConfigs) {
          // Shadow
          cameraConfigs.enableMainLightShadowMap = pipelineConfigs.shadowEnabled && !pipelineConfigs.usePlanarShadow && !!camera.scene && !!camera.scene.mainLight && camera.scene.mainLight.shadowEnabled;
          cameraConfigs.enableMainLightPlanarShadowMap = pipelineConfigs.shadowEnabled && pipelineConfigs.usePlanarShadow && !!camera.scene && !!camera.scene.mainLight && camera.scene.mainLight.shadowEnabled;

          // Reflection Probe
          cameraConfigs.enablePlanarReflectionProbe = cameraConfigs.isMainGameWindow || camera.cameraUsage === CameraUsage.SCENE_VIEW || camera.cameraUsage === CameraUsage.GAME_VIEW;

          // MSAA
          cameraConfigs.enableMSAA = cameraConfigs.settings.msaa.enabled && !cameraConfigs.enableStoreSceneDepth // Cannot store MS depth, resolve depth is also not cross-platform
          && !pipelineConfigs.isWeb // TODO(zhouzhenglong): remove this constraint
          && !pipelineConfigs.isWebGL1;

          // Forward rendering (Depend on MSAA and TBR)
          cameraConfigs.enableSingleForwardPass = pipelineConfigs.isMobile || cameraConfigs.enableMSAA;
          ++cameraConfigs.remainingPasses;
        };
        _proto2.windowResize = function windowResize(ppl, pplConfigs, cameraConfigs, window, camera, nativeWidth, nativeHeight) {
          var ResourceFlags = rendering.ResourceFlags;
          var ResourceResidency = rendering.ResourceResidency;
          var id = window.renderWindowId;
          var settings = cameraConfigs.settings;
          var width = cameraConfigs.enableShadingScale ? Math.max(Math.floor(nativeWidth * cameraConfigs.shadingScale), 1) : nativeWidth;
          var height = cameraConfigs.enableShadingScale ? Math.max(Math.floor(nativeHeight * cameraConfigs.shadingScale), 1) : nativeHeight;

          // MsaaRadiance
          if (cameraConfigs.enableMSAA) {
            // Notice: We never store multisample results.
            // These samples are always resolved and discarded at the end of the render pass.
            // So the ResourceResidency should be MEMORYLESS.
            if (cameraConfigs.enableHDR) {
              ppl.addTexture("MsaaRadiance" + id, TextureType.TEX2D, cameraConfigs.radianceFormat, width, height, 1, 1, 1, settings.msaa.sampleCount, ResourceFlags.COLOR_ATTACHMENT, ResourceResidency.MEMORYLESS);
            } else {
              ppl.addTexture("MsaaRadiance" + id, TextureType.TEX2D, Format.RGBA8, width, height, 1, 1, 1, settings.msaa.sampleCount, ResourceFlags.COLOR_ATTACHMENT, ResourceResidency.MEMORYLESS);
            }
            ppl.addTexture("MsaaDepthStencil" + id, TextureType.TEX2D, Format.DEPTH_STENCIL, width, height, 1, 1, 1, settings.msaa.sampleCount, ResourceFlags.DEPTH_STENCIL_ATTACHMENT, ResourceResidency.MEMORYLESS);
          }

          // Mainlight ShadowMap
          ppl.addRenderTarget("ShadowMap" + id, pplConfigs.shadowMapFormat, pplConfigs.shadowMapSize.x, pplConfigs.shadowMapSize.y);
          ppl.addDepthStencil("ShadowDepth" + id, Format.DEPTH_STENCIL, pplConfigs.shadowMapSize.x, pplConfigs.shadowMapSize.y);

          // Spot-light shadow maps
          if (cameraConfigs.enableSingleForwardPass) {
            var count = pplConfigs.mobileMaxSpotLightShadowMaps;
            for (var i = 0; i !== count; ++i) {
              ppl.addRenderTarget("SpotShadowMap" + i, pplConfigs.shadowMapFormat, pplConfigs.shadowMapSize.x, pplConfigs.shadowMapSize.y);
              ppl.addDepthStencil("SpotShadowDepth" + i, Format.DEPTH_STENCIL, pplConfigs.shadowMapSize.x, pplConfigs.shadowMapSize.y);
            }
          }
        };
        _proto2.setup = function setup(ppl, pplConfigs, cameraConfigs, camera, context) {
          var id = camera.window.renderWindowId;
          var scene = camera.scene;
          var mainLight = scene.mainLight;
          --cameraConfigs.remainingPasses;
          assert(cameraConfigs.remainingPasses >= 0);

          // Forward Lighting (Light Culling)
          this.forwardLighting.cullLights(scene, camera.frustum);

          // Main Directional light CSM Shadow Map
          if (cameraConfigs.enableMainLightShadowMap) {
            assert(!!mainLight);
            this._addCascadedShadowMapPass(ppl, pplConfigs, id, mainLight, camera);
          }

          // Spot light shadow maps (Mobile or MSAA)
          if (cameraConfigs.enableSingleForwardPass) {
            // Currently, only support 1 spot light with shadow map on mobile platform.
            // TODO(zhouzhenglong): Relex this limitation.
            this.forwardLighting.addSpotlightShadowPasses(ppl, camera, pplConfigs.mobileMaxSpotLightShadowMaps);
          }
          this._tryAddReflectionProbePasses(ppl, cameraConfigs, id, mainLight, camera.scene);
          if (cameraConfigs.remainingPasses > 0 || cameraConfigs.enableShadingScale) {
            context.colorName = cameraConfigs.enableShadingScale ? "ScaledRadiance0_" + id : "Radiance0_" + id;
            context.depthStencilName = cameraConfigs.enableShadingScale ? "ScaledSceneDepth_" + id : "SceneDepth_" + id;
          } else {
            context.colorName = cameraConfigs.colorName;
            context.depthStencilName = cameraConfigs.depthStencilName;
          }
          var pass = this._addForwardRadiancePasses(ppl, pplConfigs, cameraConfigs, id, camera, cameraConfigs.width, cameraConfigs.height, mainLight, context.colorName, context.depthStencilName, !cameraConfigs.enableMSAA, cameraConfigs.enableStoreSceneDepth ? StoreOp.STORE : StoreOp.DISCARD);
          if (!cameraConfigs.enableStoreSceneDepth) {
            context.depthStencilName = '';
          }
          if (cameraConfigs.remainingPasses === 0 && cameraConfigs.enableShadingScale) {
            return addCopyToScreenPass(ppl, pplConfigs, cameraConfigs, context.colorName);
          } else {
            return pass;
          }
        };
        _proto2._addCascadedShadowMapPass = function _addCascadedShadowMapPass(ppl, pplConfigs, id, light, camera) {
          var QueueHint = rendering.QueueHint;
          var SceneFlags = rendering.SceneFlags;
          // ----------------------------------------------------------------
          // Dynamic states
          // ----------------------------------------------------------------
          var shadowSize = ppl.pipelineSceneData.shadows.size;
          var width = shadowSize.x;
          var height = shadowSize.y;
          var viewport = this._viewport;
          viewport.left = viewport.top = 0;
          viewport.width = width;
          viewport.height = height;

          // ----------------------------------------------------------------
          // CSM Shadow Map
          // ----------------------------------------------------------------
          var pass = ppl.addRenderPass(width, height, 'default');
          pass.name = 'CascadedShadowMap';
          pass.addRenderTarget("ShadowMap" + id, LoadOp.CLEAR, StoreOp.STORE, new Color(1, 1, 1, 1));
          pass.addDepthStencil("ShadowDepth" + id, LoadOp.CLEAR, StoreOp.DISCARD);
          var csmLevel = ppl.pipelineSceneData.csmSupported ? light.csmLevel : 1;

          // Add shadow map viewports
          for (var level = 0; level !== csmLevel; ++level) {
            getCsmMainLightViewport(light, width, height, level, this._viewport, pplConfigs.screenSpaceSignY);
            var queue = pass.addQueue(QueueHint.NONE, 'shadow-caster');
            if (!pplConfigs.isWebGPU) {
              // Temporary workaround for WebGPU
              queue.setViewport(this._viewport);
            }
            queue.addScene(camera, SceneFlags.OPAQUE | SceneFlags.MASK | SceneFlags.SHADOW_CASTER).useLightFrustum(light, level);
          }
        };
        _proto2._tryAddReflectionProbePasses = function _tryAddReflectionProbePasses(ppl, cameraConfigs, id, mainLight, scene) {
          var reflectionProbeManager = cclegacy.internal.reflectionProbeManager;
          if (!reflectionProbeManager) {
            return;
          }
          var ResourceResidency = rendering.ResourceResidency;
          var probes = reflectionProbeManager.getProbes();
          var maxProbeCount = 4;
          var probeID = 0;
          for (var _iterator9 = _createForOfIteratorHelperLoose(probes), _step9; !(_step9 = _iterator9()).done;) {
            var probe = _step9.value;
            if (!probe.needRender) {
              continue;
            }
            var area = probe.renderArea();
            var width = Math.max(Math.floor(area.x), 1);
            var height = Math.max(Math.floor(area.y), 1);
            if (probe.probeType === renderer.scene.ProbeType.PLANAR) {
              if (!cameraConfigs.enablePlanarReflectionProbe) {
                continue;
              }
              var window = probe.realtimePlanarTexture.window;
              var colorName = "PlanarProbeRT" + probeID;
              var depthStencilName = "PlanarProbeDS" + probeID;
              // ProbeResource
              ppl.addRenderWindow(colorName, cameraConfigs.radianceFormat, width, height, window);
              ppl.addDepthStencil(depthStencilName, gfx.Format.DEPTH_STENCIL, width, height, ResourceResidency.MEMORYLESS);

              // Rendering
              var probePass = ppl.addRenderPass(width, height, 'default');
              probePass.name = "PlanarReflectionProbe" + probeID;
              this._buildReflectionProbePass(probePass, cameraConfigs, id, probe.camera, colorName, depthStencilName, mainLight, scene);
            }
            ++probeID;
            if (probeID === maxProbeCount) {
              break;
            }
          }
        };
        _proto2._buildReflectionProbePass = function _buildReflectionProbePass(pass, cameraConfigs, id, camera, colorName, depthStencilName, mainLight, scene) {
          if (scene === void 0) {
            scene = null;
          }
          var QueueHint = rendering.QueueHint;
          var SceneFlags = rendering.SceneFlags;
          // set viewport
          var colorStoreOp = cameraConfigs.enableMSAA ? StoreOp.DISCARD : StoreOp.STORE;

          // bind output render target
          if (forwardNeedClearColor(camera)) {
            this._reflectionProbeClearColor.x = camera.clearColor.x;
            this._reflectionProbeClearColor.y = camera.clearColor.y;
            this._reflectionProbeClearColor.z = camera.clearColor.z;
            var clearColor = rendering.packRGBE(this._reflectionProbeClearColor);
            this._clearColor.x = clearColor.x;
            this._clearColor.y = clearColor.y;
            this._clearColor.z = clearColor.z;
            this._clearColor.w = clearColor.w;
            pass.addRenderTarget(colorName, LoadOp.CLEAR, colorStoreOp, this._clearColor);
          } else {
            pass.addRenderTarget(colorName, LoadOp.LOAD, colorStoreOp);
          }

          // bind depth stencil buffer
          if (camera.clearFlag & ClearFlagBit.DEPTH_STENCIL) {
            pass.addDepthStencil(depthStencilName, LoadOp.CLEAR, StoreOp.DISCARD, camera.clearDepth, camera.clearStencil, camera.clearFlag & ClearFlagBit.DEPTH_STENCIL);
          } else {
            pass.addDepthStencil(depthStencilName, LoadOp.LOAD, StoreOp.DISCARD);
          }

          // Set shadow map if enabled
          if (cameraConfigs.enableMainLightShadowMap) {
            pass.addTexture("ShadowMap" + id, 'cc_shadowMap');
          }

          // TODO(zhouzhenglong): Separate OPAQUE and MASK queue

          // add opaque and mask queue
          pass.addQueue(QueueHint.NONE, 'reflect-map') // Currently we put OPAQUE and MASK into one queue, so QueueHint is NONE
          .addScene(camera, SceneFlags.OPAQUE | SceneFlags.MASK | SceneFlags.REFLECTION_PROBE, mainLight || undefined, scene ? scene : undefined);
        };
        _proto2._addForwardRadiancePasses = function _addForwardRadiancePasses(ppl, pplConfigs, cameraConfigs, id, camera, width, height, mainLight, colorName, depthStencilName, disableMSAA, depthStencilStoreOp) {
          if (disableMSAA === void 0) {
            disableMSAA = false;
          }
          if (depthStencilStoreOp === void 0) {
            depthStencilStoreOp = StoreOp.DISCARD;
          }
          var QueueHint = rendering.QueueHint;
          var SceneFlags = rendering.SceneFlags;
          // ----------------------------------------------------------------
          // Dynamic states
          // ----------------------------------------------------------------
          // Prepare camera clear color
          var clearColor = camera.clearColor; // Reduce C++/TS interop
          this._clearColor.x = clearColor.x;
          this._clearColor.y = clearColor.y;
          this._clearColor.z = clearColor.z;
          this._clearColor.w = clearColor.w;

          // Prepare camera viewport
          var viewport = camera.viewport; // Reduce C++/TS interop
          this._viewport.left = Math.round(viewport.x * width);
          this._viewport.top = Math.round(viewport.y * height);
          // Here we must use camera.viewport.width instead of camera.viewport.z, which
          // is undefined on native platform. The same as camera.viewport.height.
          this._viewport.width = Math.max(Math.round(viewport.width * width), 1);
          this._viewport.height = Math.max(Math.round(viewport.height * height), 1);

          // MSAA
          var enableMSAA = !disableMSAA && cameraConfigs.enableMSAA;
          assert(!enableMSAA || cameraConfigs.enableSingleForwardPass);

          // ----------------------------------------------------------------
          // Forward Lighting (Main Directional Light)
          // ----------------------------------------------------------------
          var pass = cameraConfigs.enableSingleForwardPass ? this._addForwardSingleRadiancePass(ppl, pplConfigs, cameraConfigs, id, camera, enableMSAA, width, height, mainLight, colorName, depthStencilName, depthStencilStoreOp) : this._addForwardMultipleRadiancePasses(ppl, cameraConfigs, id, camera, width, height, mainLight, colorName, depthStencilName, depthStencilStoreOp);

          // Planar Shadow
          if (cameraConfigs.enableMainLightPlanarShadowMap) {
            this._addPlanarShadowQueue(camera, mainLight, pass);
          }

          // ----------------------------------------------------------------
          // Forward Lighting (Blend)
          // ----------------------------------------------------------------
          // Add transparent queue

          var sceneFlags = SceneFlags.BLEND | (camera.geometryRenderer ? SceneFlags.GEOMETRY : SceneFlags.NONE);
          pass.addQueue(QueueHint.BLEND).addScene(camera, sceneFlags, mainLight || undefined);
          return pass;
        };
        _proto2._addForwardSingleRadiancePass = function _addForwardSingleRadiancePass(ppl, pplConfigs, cameraConfigs, id, camera, enableMSAA, width, height, mainLight, colorName, depthStencilName, depthStencilStoreOp) {
          assert(cameraConfigs.enableSingleForwardPass);
          // ----------------------------------------------------------------
          // Forward Lighting (Main Directional Light)
          // ----------------------------------------------------------------
          var pass;
          if (enableMSAA) {
            var msaaRadianceName = "MsaaRadiance" + id;
            var msaaDepthStencilName = "MsaaDepthStencil" + id;
            var sampleCount = cameraConfigs.settings.msaa.sampleCount;
            var msPass = ppl.addMultisampleRenderPass(width, height, sampleCount, 0, 'default');
            msPass.name = 'MsaaForwardPass';

            // MSAA always discards depth stencil
            this._buildForwardMainLightPass(msPass, cameraConfigs, id, camera, msaaRadianceName, msaaDepthStencilName, StoreOp.DISCARD, mainLight);
            msPass.resolveRenderTarget(msaaRadianceName, colorName);
            pass = msPass;
          } else {
            pass = ppl.addRenderPass(width, height, 'default');
            pass.name = 'ForwardPass';
            this._buildForwardMainLightPass(pass, cameraConfigs, id, camera, colorName, depthStencilName, depthStencilStoreOp, mainLight);
          }
          assert(pass !== undefined);

          // Forward Lighting (Additive Lights)
          this.forwardLighting.addLightQueues(pass, camera, pplConfigs.mobileMaxSpotLightShadowMaps);
          return pass;
        };
        _proto2._addForwardMultipleRadiancePasses = function _addForwardMultipleRadiancePasses(ppl, cameraConfigs, id, camera, width, height, mainLight, colorName, depthStencilName, depthStencilStoreOp) {
          assert(!cameraConfigs.enableSingleForwardPass);

          // Forward Lighting (Main Directional Light)
          var pass = ppl.addRenderPass(width, height, 'default');
          pass.name = 'ForwardPass';
          var firstStoreOp = this.forwardLighting.isMultipleLightPassesNeeded() ? StoreOp.STORE : depthStencilStoreOp;
          this._buildForwardMainLightPass(pass, cameraConfigs, id, camera, colorName, depthStencilName, firstStoreOp, mainLight);

          // Forward Lighting (Additive Lights)
          pass = this.forwardLighting.addLightPasses(colorName, depthStencilName, depthStencilStoreOp, id, width, height, camera, this._viewport, ppl, pass);
          return pass;
        };
        _proto2._buildForwardMainLightPass = function _buildForwardMainLightPass(pass, cameraConfigs, id, camera, colorName, depthStencilName, depthStencilStoreOp, mainLight, scene) {
          if (scene === void 0) {
            scene = null;
          }
          var QueueHint = rendering.QueueHint;
          var SceneFlags = rendering.SceneFlags;
          // set viewport
          pass.setViewport(this._viewport);
          var colorStoreOp = cameraConfigs.enableMSAA ? StoreOp.DISCARD : StoreOp.STORE;

          // bind output render target
          if (forwardNeedClearColor(camera)) {
            pass.addRenderTarget(colorName, LoadOp.CLEAR, colorStoreOp, this._clearColor);
          } else {
            pass.addRenderTarget(colorName, LoadOp.LOAD, colorStoreOp);
          }

          // bind depth stencil buffer
          {
            if (colorName === cameraConfigs.colorName && depthStencilName !== cameraConfigs.depthStencilName) {
              warn('Default framebuffer cannot use custom depth stencil buffer');
            }
          }
          if (camera.clearFlag & ClearFlagBit.DEPTH_STENCIL) {
            pass.addDepthStencil(depthStencilName, LoadOp.CLEAR, depthStencilStoreOp, camera.clearDepth, camera.clearStencil, camera.clearFlag & ClearFlagBit.DEPTH_STENCIL);
          } else {
            pass.addDepthStencil(depthStencilName, LoadOp.LOAD, depthStencilStoreOp);
          }

          // Set shadow map if enabled
          if (cameraConfigs.enableMainLightShadowMap) {
            pass.addTexture("ShadowMap" + id, 'cc_shadowMap');
          }

          // TODO(zhouzhenglong): Separate OPAQUE and MASK queue

          // add opaque and mask queue
          pass.addQueue(QueueHint.NONE) // Currently we put OPAQUE and MASK into one queue, so QueueHint is NONE
          .addScene(camera, SceneFlags.OPAQUE | SceneFlags.MASK, mainLight || undefined, scene ? scene : undefined);
        };
        _proto2._addPlanarShadowQueue = function _addPlanarShadowQueue(camera, mainLight, pass) {
          var QueueHint = rendering.QueueHint;
          var SceneFlags = rendering.SceneFlags;
          pass.addQueue(QueueHint.BLEND, 'planar-shadow').addScene(camera, SceneFlags.SHADOW_CASTER | SceneFlags.PLANAR_SHADOW | SceneFlags.BLEND, mainLight || undefined);
        };
        return BuiltinForwardPassBuilder;
      }());
      BuiltinForwardPassBuilder.ConfigOrder = 100;
      BuiltinForwardPassBuilder.RenderOrder = 100;
      var BuiltinBloomPassBuilder = exports('BuiltinBloomPassBuilder', /*#__PURE__*/function () {
        function BuiltinBloomPassBuilder() {
          // Bloom
          this._clearColorTransparentBlack = new Color(0, 0, 0, 0);
          this._bloomParams = new Vec4(0, 0, 0, 0);
          this._bloomTexSize = new Vec4(0, 0, 0, 0);
          this._bloomWidths = [];
          this._bloomHeights = [];
          this._bloomTexNames = [];
        }
        var _proto3 = BuiltinBloomPassBuilder.prototype;
        _proto3.getConfigOrder = function getConfigOrder() {
          return 0;
        };
        _proto3.getRenderOrder = function getRenderOrder() {
          return 200;
        };
        _proto3.configCamera = function configCamera(camera, pipelineConfigs, cameraConfigs) {
          cameraConfigs.enableBloom = cameraConfigs.settings.bloom.enabled && !!cameraConfigs.settings.bloom.material;
          if (cameraConfigs.enableBloom) {
            ++cameraConfigs.remainingPasses;
          }
        };
        _proto3.windowResize = function windowResize(ppl, pplConfigs, cameraConfigs, window) {
          if (cameraConfigs.enableBloom) {
            var id = window.renderWindowId;
            var bloomWidth = cameraConfigs.width;
            var bloomHeight = cameraConfigs.height;
            for (var i = 0; i !== cameraConfigs.settings.bloom.iterations + 1; ++i) {
              bloomWidth = Math.max(Math.floor(bloomWidth / 2), 1);
              bloomHeight = Math.max(Math.floor(bloomHeight / 2), 1);
              ppl.addRenderTarget("BloomTex" + id + "_" + i, cameraConfigs.radianceFormat, bloomWidth, bloomHeight);
            }
          }
        };
        _proto3.setup = function setup(ppl, pplConfigs, cameraConfigs, camera, context, prevRenderPass) {
          if (!cameraConfigs.enableBloom) {
            return prevRenderPass;
          }
          --cameraConfigs.remainingPasses;
          assert(cameraConfigs.remainingPasses >= 0);
          var id = camera.window.renderWindowId;
          assert(!!cameraConfigs.settings.bloom.material);
          return this._addKawaseDualFilterBloomPasses(ppl, pplConfigs, cameraConfigs, cameraConfigs.settings, cameraConfigs.settings.bloom.material, id, cameraConfigs.width, cameraConfigs.height, context.colorName);
        };
        _proto3._addKawaseDualFilterBloomPasses = function _addKawaseDualFilterBloomPasses(ppl, pplConfigs, cameraConfigs, settings, bloomMaterial, id, width, height, radianceName) {
          var QueueHint = rendering.QueueHint;
          // Based on Kawase Dual Filter Blur. Saves bandwidth on mobile devices.
          // eslint-disable-next-line max-len
          // https://community.arm.com/cfs-file/__key/communityserver-blogs-components-weblogfiles/00-00-00-20-66/siggraph2015_2D00_mmg_2D00_marius_2D00_slides.pdf

          // Size: [prefilter(1/2), downsample(1/4), downsample(1/8), downsample(1/16), ...]
          var iterations = settings.bloom.iterations;
          var sizeCount = iterations + 1;
          this._bloomWidths.length = sizeCount;
          this._bloomHeights.length = sizeCount;
          this._bloomWidths[0] = Math.max(Math.floor(width / 2), 1);
          this._bloomHeights[0] = Math.max(Math.floor(height / 2), 1);
          for (var i = 1; i !== sizeCount; ++i) {
            this._bloomWidths[i] = Math.max(Math.floor(this._bloomWidths[i - 1] / 2), 1);
            this._bloomHeights[i] = Math.max(Math.floor(this._bloomHeights[i - 1] / 2), 1);
          }

          // Bloom texture names
          this._bloomTexNames.length = sizeCount;
          for (var _i = 0; _i !== sizeCount; ++_i) {
            this._bloomTexNames[_i] = "BloomTex" + id + "_" + _i;
          }

          // Setup bloom parameters
          this._bloomParams.x = pplConfigs.useFloatOutput ? 1 : 0;
          this._bloomParams.x = 0; // unused
          this._bloomParams.z = settings.bloom.threshold;
          this._bloomParams.w = settings.bloom.enableAlphaMask ? 1 : 0;

          // Prefilter pass
          var prefilterPass = ppl.addRenderPass(this._bloomWidths[0], this._bloomHeights[0], 'cc-bloom-prefilter');
          prefilterPass.addRenderTarget(this._bloomTexNames[0], LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
          prefilterPass.addTexture(radianceName, 'inputTexture');
          prefilterPass.setVec4('g_platform', pplConfigs.platform);
          prefilterPass.setVec4('bloomParams', this._bloomParams);
          prefilterPass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(bloomMaterial, 0);

          // Downsample passes
          for (var _i2 = 1; _i2 !== sizeCount; ++_i2) {
            var downPass = ppl.addRenderPass(this._bloomWidths[_i2], this._bloomHeights[_i2], 'cc-bloom-downsample');
            downPass.addRenderTarget(this._bloomTexNames[_i2], LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            downPass.addTexture(this._bloomTexNames[_i2 - 1], 'bloomTexture');
            this._bloomTexSize.x = this._bloomWidths[_i2 - 1];
            this._bloomTexSize.y = this._bloomHeights[_i2 - 1];
            downPass.setVec4('g_platform', pplConfigs.platform);
            downPass.setVec4('bloomTexSize', this._bloomTexSize);
            downPass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(bloomMaterial, 1);
          }

          // Upsample passes
          for (var _i3 = iterations; _i3-- > 0;) {
            var upPass = ppl.addRenderPass(this._bloomWidths[_i3], this._bloomHeights[_i3], 'cc-bloom-upsample');
            upPass.addRenderTarget(this._bloomTexNames[_i3], LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            upPass.addTexture(this._bloomTexNames[_i3 + 1], 'bloomTexture');
            this._bloomTexSize.x = this._bloomWidths[_i3 + 1];
            this._bloomTexSize.y = this._bloomHeights[_i3 + 1];
            upPass.setVec4('g_platform', pplConfigs.platform);
            upPass.setVec4('bloomTexSize', this._bloomTexSize);
            upPass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(bloomMaterial, 2);
          }

          // Combine pass
          var combinePass = ppl.addRenderPass(width, height, 'cc-bloom-combine');
          combinePass.addRenderTarget(radianceName, LoadOp.LOAD, StoreOp.STORE);
          combinePass.addTexture(this._bloomTexNames[0], 'bloomTexture');
          combinePass.setVec4('g_platform', pplConfigs.platform);
          combinePass.setVec4('bloomParams', this._bloomParams);
          combinePass.addQueue(QueueHint.BLEND).addFullscreenQuad(bloomMaterial, 3);
          if (cameraConfigs.remainingPasses === 0) {
            return addCopyToScreenPass(ppl, pplConfigs, cameraConfigs, radianceName);
          } else {
            return combinePass;
          }
        };
        return BuiltinBloomPassBuilder;
      }());
      var BuiltinToneMappingPassBuilder = exports('BuiltinToneMappingPassBuilder', /*#__PURE__*/function () {
        function BuiltinToneMappingPassBuilder() {
          this._colorGradingTexSize = new Vec2(0, 0);
        }
        var _proto4 = BuiltinToneMappingPassBuilder.prototype;
        _proto4.getConfigOrder = function getConfigOrder() {
          return 0;
        };
        _proto4.getRenderOrder = function getRenderOrder() {
          return 300;
        };
        _proto4.configCamera = function configCamera(camera, pplConfigs, cameraConfigs) {
          var settings = cameraConfigs.settings;
          cameraConfigs.enableColorGrading = settings.colorGrading.enabled && !!settings.colorGrading.material && !!settings.colorGrading.colorGradingMap;
          cameraConfigs.enableToneMapping = cameraConfigs.enableHDR // From Half to RGBA8
          || cameraConfigs.enableColorGrading; // Color grading

          if (cameraConfigs.enableToneMapping) {
            ++cameraConfigs.remainingPasses;
          }
        };
        _proto4.windowResize = function windowResize(ppl, pplConfigs, cameraConfigs) {
          if (cameraConfigs.enableColorGrading) {
            assert(!!cameraConfigs.settings.colorGrading.material);
            cameraConfigs.settings.colorGrading.material.setProperty('colorGradingMap', cameraConfigs.settings.colorGrading.colorGradingMap);
          }
        };
        _proto4.setup = function setup(ppl, pplConfigs, cameraConfigs, camera, context, prevRenderPass) {
          if (!cameraConfigs.enableToneMapping) {
            return prevRenderPass;
          }
          --cameraConfigs.remainingPasses;
          assert(cameraConfigs.remainingPasses >= 0);
          if (cameraConfigs.remainingPasses === 0) {
            return this._addCopyAndTonemapPass(ppl, pplConfigs, cameraConfigs, cameraConfigs.width, cameraConfigs.height, context.colorName, cameraConfigs.colorName);
          } else {
            var id = cameraConfigs.renderWindowId;
            var ldrColorPrefix = cameraConfigs.enableShadingScale ? "ScaledLdrColor" : "LdrColor";
            var ldrColorName = getPingPongRenderTarget(context.colorName, ldrColorPrefix, id);
            var radianceName = context.colorName;
            context.colorName = ldrColorName;
            return this._addCopyAndTonemapPass(ppl, pplConfigs, cameraConfigs, cameraConfigs.width, cameraConfigs.height, radianceName, ldrColorName);
          }
        };
        _proto4._addCopyAndTonemapPass = function _addCopyAndTonemapPass(ppl, pplConfigs, cameraConfigs, width, height, radianceName, colorName) {
          var pass;
          var settings = cameraConfigs.settings;
          if (cameraConfigs.enableColorGrading) {
            assert(!!settings.colorGrading.material);
            assert(!!settings.colorGrading.colorGradingMap);
            var lutTex = settings.colorGrading.colorGradingMap;
            this._colorGradingTexSize.x = lutTex.width;
            this._colorGradingTexSize.y = lutTex.height;
            var isSquareMap = lutTex.width === lutTex.height;
            if (isSquareMap) {
              pass = ppl.addRenderPass(width, height, 'cc-color-grading-8x8');
            } else {
              pass = ppl.addRenderPass(width, height, 'cc-color-grading-nx1');
            }
            pass.addRenderTarget(colorName, LoadOp.CLEAR, StoreOp.STORE, sClearColorTransparentBlack);
            pass.addTexture(radianceName, 'sceneColorMap');
            pass.setVec4('g_platform', pplConfigs.platform);
            pass.setVec2('lutTextureSize', this._colorGradingTexSize);
            pass.setFloat('contribute', settings.colorGrading.contribute);
            pass.addQueue(rendering.QueueHint.OPAQUE).addFullscreenQuad(settings.colorGrading.material, isSquareMap ? 1 : 0);
          } else {
            pass = ppl.addRenderPass(width, height, 'cc-tone-mapping');
            pass.addRenderTarget(colorName, LoadOp.CLEAR, StoreOp.STORE, sClearColorTransparentBlack);
            pass.addTexture(radianceName, 'inputTexture');
            pass.setVec4('g_platform', pplConfigs.platform);
            if (settings.toneMapping.material) {
              pass.addQueue(rendering.QueueHint.OPAQUE).addFullscreenQuad(settings.toneMapping.material, 0);
            } else {
              assert(!!cameraConfigs.copyAndTonemapMaterial);
              pass.addQueue(rendering.QueueHint.OPAQUE).addFullscreenQuad(cameraConfigs.copyAndTonemapMaterial, 0);
            }
          }
          return pass;
        };
        return BuiltinToneMappingPassBuilder;
      }());
      var BuiltinFXAAPassBuilder = exports('BuiltinFXAAPassBuilder', /*#__PURE__*/function () {
        function BuiltinFXAAPassBuilder() {
          // FXAA
          this._fxaaParams = new Vec4(0, 0, 0, 0);
        }
        var _proto5 = BuiltinFXAAPassBuilder.prototype;
        _proto5.getConfigOrder = function getConfigOrder() {
          return 0;
        };
        _proto5.getRenderOrder = function getRenderOrder() {
          return 400;
        };
        _proto5.configCamera = function configCamera(camera, pplConfigs, cameraConfigs) {
          cameraConfigs.enableFXAA = cameraConfigs.settings.fxaa.enabled && !!cameraConfigs.settings.fxaa.material;
          if (cameraConfigs.enableFXAA) {
            ++cameraConfigs.remainingPasses;
          }
        };
        _proto5.setup = function setup(ppl, pplConfigs, cameraConfigs, camera, context, prevRenderPass) {
          if (!cameraConfigs.enableFXAA) {
            return prevRenderPass;
          }
          --cameraConfigs.remainingPasses;
          assert(cameraConfigs.remainingPasses >= 0);
          var id = cameraConfigs.renderWindowId;
          var ldrColorPrefix = cameraConfigs.enableShadingScale ? "ScaledLdrColor" : "LdrColor";
          var ldrColorName = getPingPongRenderTarget(context.colorName, ldrColorPrefix, id);
          assert(!!cameraConfigs.settings.fxaa.material);
          if (cameraConfigs.remainingPasses === 0) {
            if (cameraConfigs.enableShadingScale) {
              this._addFxaaPass(ppl, pplConfigs, cameraConfigs.settings.fxaa.material, cameraConfigs.width, cameraConfigs.height, context.colorName, ldrColorName);
              return addCopyToScreenPass(ppl, pplConfigs, cameraConfigs, ldrColorName);
            } else {
              assert(cameraConfigs.width === cameraConfigs.nativeWidth);
              assert(cameraConfigs.height === cameraConfigs.nativeHeight);
              return this._addFxaaPass(ppl, pplConfigs, cameraConfigs.settings.fxaa.material, cameraConfigs.width, cameraConfigs.height, context.colorName, cameraConfigs.colorName);
            }
          } else {
            var inputColorName = context.colorName;
            context.colorName = ldrColorName;
            var lastPass = this._addFxaaPass(ppl, pplConfigs, cameraConfigs.settings.fxaa.material, cameraConfigs.width, cameraConfigs.height, inputColorName, ldrColorName);
            return lastPass;
          }
        };
        _proto5._addFxaaPass = function _addFxaaPass(ppl, pplConfigs, fxaaMaterial, width, height, ldrColorName, colorName) {
          this._fxaaParams.x = width;
          this._fxaaParams.y = height;
          this._fxaaParams.z = 1 / width;
          this._fxaaParams.w = 1 / height;
          var pass = ppl.addRenderPass(width, height, 'cc-fxaa');
          pass.addRenderTarget(colorName, LoadOp.CLEAR, StoreOp.STORE, sClearColorTransparentBlack);
          pass.addTexture(ldrColorName, 'sceneColorMap');
          pass.setVec4('g_platform', pplConfigs.platform);
          pass.setVec4('texSize', this._fxaaParams);
          pass.addQueue(rendering.QueueHint.OPAQUE).addFullscreenQuad(fxaaMaterial, 0);
          return pass;
        };
        return BuiltinFXAAPassBuilder;
      }());
      var BuiltinFsrPassBuilder = exports('BuiltinFsrPassBuilder', /*#__PURE__*/function () {
        function BuiltinFsrPassBuilder() {
          // FSR
          this._fsrParams = new Vec4(0, 0, 0, 0);
          this._fsrTexSize = new Vec4(0, 0, 0, 0);
        }
        var _proto6 = BuiltinFsrPassBuilder.prototype;
        _proto6.getConfigOrder = function getConfigOrder() {
          return 0;
        };
        _proto6.getRenderOrder = function getRenderOrder() {
          return 500;
        };
        _proto6.configCamera = function configCamera(camera, pplConfigs, cameraConfigs) {
          // FSR (Depend on Shading scale)
          cameraConfigs.enableFSR = cameraConfigs.settings.fsr.enabled && !!cameraConfigs.settings.fsr.material && cameraConfigs.enableShadingScale && cameraConfigs.shadingScale < 1.0;
          if (cameraConfigs.enableFSR) {
            ++cameraConfigs.remainingPasses;
          }
        };
        _proto6.setup = function setup(ppl, pplConfigs, cameraConfigs, camera, context, prevRenderPass) {
          if (!cameraConfigs.enableFSR) {
            return prevRenderPass;
          }
          --cameraConfigs.remainingPasses;
          var inputColorName = context.colorName;
          var outputColorName = cameraConfigs.remainingPasses === 0 ? cameraConfigs.colorName : getPingPongRenderTarget(context.colorName, 'UiColor', cameraConfigs.renderWindowId);
          context.colorName = outputColorName;
          assert(!!cameraConfigs.settings.fsr.material);
          return this._addFsrPass(ppl, pplConfigs, cameraConfigs, cameraConfigs.settings, cameraConfigs.settings.fsr.material, cameraConfigs.renderWindowId, cameraConfigs.width, cameraConfigs.height, inputColorName, cameraConfigs.nativeWidth, cameraConfigs.nativeHeight, outputColorName);
        };
        _proto6._addFsrPass = function _addFsrPass(ppl, pplConfigs, cameraConfigs, settings, fsrMaterial, id, width, height, inputColorName, nativeWidth, nativeHeight, outputColorName) {
          this._fsrTexSize.x = width;
          this._fsrTexSize.y = height;
          this._fsrTexSize.z = nativeWidth;
          this._fsrTexSize.w = nativeHeight;
          this._fsrParams.x = clamp(1.0 - settings.fsr.sharpness, 0.02, 0.98);
          var uiColorPrefix = 'UiColor';
          var fsrColorName = getPingPongRenderTarget(outputColorName, uiColorPrefix, id);
          var easuPass = ppl.addRenderPass(nativeWidth, nativeHeight, 'cc-fsr-easu');
          easuPass.addRenderTarget(fsrColorName, LoadOp.CLEAR, StoreOp.STORE, sClearColorTransparentBlack);
          easuPass.addTexture(inputColorName, 'outputResultMap');
          easuPass.setVec4('g_platform', pplConfigs.platform);
          easuPass.setVec4('fsrTexSize', this._fsrTexSize);
          easuPass.addQueue(rendering.QueueHint.OPAQUE).addFullscreenQuad(fsrMaterial, 0);
          var rcasPass = ppl.addRenderPass(nativeWidth, nativeHeight, 'cc-fsr-rcas');
          rcasPass.addRenderTarget(outputColorName, LoadOp.CLEAR, StoreOp.STORE, sClearColorTransparentBlack);
          rcasPass.addTexture(fsrColorName, 'outputResultMap');
          rcasPass.setVec4('g_platform', pplConfigs.platform);
          rcasPass.setVec4('fsrTexSize', this._fsrTexSize);
          rcasPass.setVec4('fsrParams', this._fsrParams);
          rcasPass.addQueue(rendering.QueueHint.OPAQUE).addFullscreenQuad(fsrMaterial, 1);
          return rcasPass;
        };
        return BuiltinFsrPassBuilder;
      }());
      var BuiltinUiPassBuilder = exports('BuiltinUiPassBuilder', /*#__PURE__*/function () {
        function BuiltinUiPassBuilder() {}
        var _proto7 = BuiltinUiPassBuilder.prototype;
        _proto7.getConfigOrder = function getConfigOrder() {
          return 0;
        };
        _proto7.getRenderOrder = function getRenderOrder() {
          return 1000;
        };
        _proto7.setup = function setup(ppl, pplConfigs, cameraConfigs, camera, context, prevRenderPass) {
          assert(!!prevRenderPass);
          var flags = rendering.SceneFlags.UI;
          if (cameraConfigs.enableProfiler) {
            flags |= rendering.SceneFlags.PROFILER;
            prevRenderPass.showStatistics = true;
          }
          prevRenderPass.addQueue(rendering.QueueHint.BLEND, 'default', 'default').addScene(camera, flags);
          return prevRenderPass;
        };
        return BuiltinUiPassBuilder;
      }());
      if (rendering) {
        var QueueHint = rendering.QueueHint,
          SceneFlags = rendering.SceneFlags;
        var BuiltinPipelineBuilder = /*#__PURE__*/function () {
          function BuiltinPipelineBuilder() {
            this._pipelineEvent = cclegacy.director.root.pipelineEvent;
            this._forwardPass = new BuiltinForwardPassBuilder();
            this._bloomPass = new BuiltinBloomPassBuilder();
            this._toneMappingPass = new BuiltinToneMappingPassBuilder();
            this._fxaaPass = new BuiltinFXAAPassBuilder();
            this._fsrPass = new BuiltinFsrPassBuilder();
            this._uiPass = new BuiltinUiPassBuilder();
            // Internal cached resources
            this._clearColor = new Color(0, 0, 0, 1);
            this._viewport = new Viewport();
            this._configs = new PipelineConfigs();
            this._cameraConfigs = new CameraConfigs();
            // Materials
            this._copyAndTonemapMaterial = new Material();
            // Internal States
            this._initialized = false;
            // TODO(zhouzhenglong): Make default effect asset loading earlier and remove this flag
            this._passBuilders = [];
          }
          var _proto8 = BuiltinPipelineBuilder.prototype;
          _proto8._setupPipelinePreview = function _setupPipelinePreview(camera, cameraConfigs) {
            var isEditorView = camera.cameraUsage === CameraUsage.SCENE_VIEW || camera.cameraUsage === CameraUsage.PREVIEW;
            if (isEditorView) {
              var editorSettings = rendering.getEditorPipelineSettings();
              if (editorSettings) {
                cameraConfigs.settings = editorSettings;
              } else {
                cameraConfigs.settings = defaultSettings;
              }
            } else {
              if (camera.pipelineSettings) {
                cameraConfigs.settings = camera.pipelineSettings;
              } else {
                cameraConfigs.settings = defaultSettings;
              }
            }
          };
          _proto8._preparePipelinePasses = function _preparePipelinePasses(cameraConfigs) {
            var passBuilders = this._passBuilders;
            passBuilders.length = 0;
            var settings = cameraConfigs.settings;
            if (settings._passes) {
              for (var _iterator10 = _createForOfIteratorHelperLoose(settings._passes), _step10; !(_step10 = _iterator10()).done;) {
                var pass = _step10.value;
                passBuilders.push(pass);
              }
              assert(passBuilders.length === settings._passes.length);
            }
            passBuilders.push(this._forwardPass);
            if (settings.bloom.enabled) {
              passBuilders.push(this._bloomPass);
            }
            passBuilders.push(this._toneMappingPass);
            if (settings.fxaa.enabled) {
              passBuilders.push(this._fxaaPass);
            }
            if (settings.fsr.enabled) {
              passBuilders.push(this._fsrPass);
            }
            passBuilders.push(this._uiPass);
          };
          _proto8._setupBuiltinCameraConfigs = function _setupBuiltinCameraConfigs(camera, pipelineConfigs, cameraConfigs) {
            var window = camera.window;
            var isMainGameWindow = camera.cameraUsage === CameraUsage.GAME && !!window.swapchain;

            // Window
            cameraConfigs.isMainGameWindow = isMainGameWindow;
            cameraConfigs.renderWindowId = window.renderWindowId;

            // Camera
            cameraConfigs.colorName = window.colorName;
            cameraConfigs.depthStencilName = window.depthStencilName;

            // Pipeline
            cameraConfigs.enableFullPipeline = (camera.visibility & Layers.Enum.DEFAULT) !== 0;
            cameraConfigs.enableProfiler = isMainGameWindow;
            cameraConfigs.remainingPasses = 0;

            // Shading scale
            cameraConfigs.shadingScale = cameraConfigs.settings.shadingScale;
            cameraConfigs.enableShadingScale = cameraConfigs.settings.enableShadingScale && cameraConfigs.shadingScale !== 1.0;
            cameraConfigs.nativeWidth = Math.max(Math.floor(window.width), 1);
            cameraConfigs.nativeHeight = Math.max(Math.floor(window.height), 1);
            cameraConfigs.width = cameraConfigs.enableShadingScale ? Math.max(Math.floor(cameraConfigs.nativeWidth * cameraConfigs.shadingScale), 1) : cameraConfigs.nativeWidth;
            cameraConfigs.height = cameraConfigs.enableShadingScale ? Math.max(Math.floor(cameraConfigs.nativeHeight * cameraConfigs.shadingScale), 1) : cameraConfigs.nativeHeight;

            // Radiance
            cameraConfigs.enableHDR = cameraConfigs.enableFullPipeline && pipelineConfigs.useFloatOutput;
            cameraConfigs.radianceFormat = cameraConfigs.enableHDR ? gfx.Format.RGBA16F : gfx.Format.RGBA8;

            // Tone Mapping
            cameraConfigs.copyAndTonemapMaterial = this._copyAndTonemapMaterial;

            // Depth
            cameraConfigs.enableStoreSceneDepth = false;
          };
          _proto8._setupCameraConfigs = function _setupCameraConfigs(camera, pipelineConfigs, cameraConfigs) {
            this._setupPipelinePreview(camera, cameraConfigs);
            this._preparePipelinePasses(cameraConfigs);
            sortPipelinePassBuildersByConfigOrder(this._passBuilders);
            this._setupBuiltinCameraConfigs(camera, pipelineConfigs, cameraConfigs);
            for (var _iterator11 = _createForOfIteratorHelperLoose(this._passBuilders), _step11; !(_step11 = _iterator11()).done;) {
              var builder = _step11.value;
              if (builder.configCamera) {
                builder.configCamera(camera, pipelineConfigs, cameraConfigs);
              }
            }
          }

          // ----------------------------------------------------------------
          // Interface
          // ----------------------------------------------------------------
          ;

          _proto8.windowResize = function windowResize(ppl, window, camera, nativeWidth, nativeHeight) {
            setupPipelineConfigs(ppl, this._configs);
            this._setupCameraConfigs(camera, this._configs, this._cameraConfigs);

            // Render Window (UI)
            var id = window.renderWindowId;
            ppl.addRenderWindow(this._cameraConfigs.colorName, Format.RGBA8, nativeWidth, nativeHeight, window, this._cameraConfigs.depthStencilName);
            var width = this._cameraConfigs.width;
            var height = this._cameraConfigs.height;
            if (this._cameraConfigs.enableShadingScale) {
              ppl.addDepthStencil("ScaledSceneDepth_" + id, Format.DEPTH_STENCIL, width, height);
              ppl.addRenderTarget("ScaledRadiance0_" + id, this._cameraConfigs.radianceFormat, width, height);
              ppl.addRenderTarget("ScaledRadiance1_" + id, this._cameraConfigs.radianceFormat, width, height);
              ppl.addRenderTarget("ScaledLdrColor0_" + id, Format.RGBA8, width, height);
              ppl.addRenderTarget("ScaledLdrColor1_" + id, Format.RGBA8, width, height);
            } else {
              ppl.addDepthStencil("SceneDepth_" + id, Format.DEPTH_STENCIL, width, height);
              ppl.addRenderTarget("Radiance0_" + id, this._cameraConfigs.radianceFormat, width, height);
              ppl.addRenderTarget("Radiance1_" + id, this._cameraConfigs.radianceFormat, width, height);
              ppl.addRenderTarget("LdrColor0_" + id, Format.RGBA8, width, height);
              ppl.addRenderTarget("LdrColor1_" + id, Format.RGBA8, width, height);
            }
            ppl.addRenderTarget("UiColor0_" + id, Format.RGBA8, nativeWidth, nativeHeight);
            ppl.addRenderTarget("UiColor1_" + id, Format.RGBA8, nativeWidth, nativeHeight);
            for (var _iterator12 = _createForOfIteratorHelperLoose(this._passBuilders), _step12; !(_step12 = _iterator12()).done;) {
              var builder = _step12.value;
              if (builder.windowResize) {
                builder.windowResize(ppl, this._configs, this._cameraConfigs, window, camera, nativeWidth, nativeHeight);
              }
            }
          };
          _proto8.setup = function setup(cameras, ppl) {
            // TODO(zhouzhenglong): Make default effect asset loading earlier and remove _initMaterials
            if (this._initMaterials(ppl)) {
              return;
            }
            // Render cameras
            // log(`==================== One Frame ====================`);
            for (var _iterator13 = _createForOfIteratorHelperLoose(cameras), _step13; !(_step13 = _iterator13()).done;) {
              var camera = _step13.value;
              // Skip invalid camera
              if (!camera.scene || !camera.window) {
                continue;
              }
              // Setup camera configs
              this._setupCameraConfigs(camera, this._configs, this._cameraConfigs);
              // log(`Setup camera: ${camera.node!.name}, window: ${camera.window.renderWindowId}, isFull: ${this._cameraConfigs.enableFullPipeline}, `
              //     + `size: ${camera.window.width}x${camera.window.height}`);

              this._pipelineEvent.emit(PipelineEventType.RENDER_CAMERA_BEGIN, camera);

              // Build pipeline
              if (this._cameraConfigs.enableFullPipeline) {
                this._buildForwardPipeline(ppl, camera, camera.scene, this._passBuilders);
              } else {
                this._buildSimplePipeline(ppl, camera);
              }
              this._pipelineEvent.emit(PipelineEventType.RENDER_CAMERA_END, camera);
            }
          }
          // ----------------------------------------------------------------
          // Pipelines
          // ----------------------------------------------------------------
          ;

          _proto8._buildSimplePipeline = function _buildSimplePipeline(ppl, camera) {
            var width = Math.max(Math.floor(camera.window.width), 1);
            var height = Math.max(Math.floor(camera.window.height), 1);
            var colorName = this._cameraConfigs.colorName;
            var depthStencilName = this._cameraConfigs.depthStencilName;
            var viewport = camera.viewport; // Reduce C++/TS interop
            this._viewport.left = Math.round(viewport.x * width);
            this._viewport.top = Math.round(viewport.y * height);
            // Here we must use camera.viewport.width instead of camera.viewport.z, which
            // is undefined on native platform. The same as camera.viewport.height.
            this._viewport.width = Math.max(Math.round(viewport.width * width), 1);
            this._viewport.height = Math.max(Math.round(viewport.height * height), 1);
            var clearColor = camera.clearColor; // Reduce C++/TS interop
            this._clearColor.x = clearColor.x;
            this._clearColor.y = clearColor.y;
            this._clearColor.z = clearColor.z;
            this._clearColor.w = clearColor.w;
            var pass = ppl.addRenderPass(width, height, 'default');

            // bind output render target
            if (forwardNeedClearColor(camera)) {
              pass.addRenderTarget(colorName, LoadOp.CLEAR, StoreOp.STORE, this._clearColor);
            } else {
              pass.addRenderTarget(colorName, LoadOp.LOAD, StoreOp.STORE);
            }

            // bind depth stencil buffer
            if (camera.clearFlag & ClearFlagBit.DEPTH_STENCIL) {
              pass.addDepthStencil(depthStencilName, LoadOp.CLEAR, StoreOp.DISCARD, camera.clearDepth, camera.clearStencil, camera.clearFlag & ClearFlagBit.DEPTH_STENCIL);
            } else {
              pass.addDepthStencil(depthStencilName, LoadOp.LOAD, StoreOp.DISCARD);
            }
            pass.setViewport(this._viewport);

            // The opaque queue is used for Reflection probe preview
            pass.addQueue(QueueHint.OPAQUE).addScene(camera, SceneFlags.OPAQUE);

            // The blend queue is used for UI and Gizmos
            var flags = SceneFlags.BLEND | SceneFlags.UI;
            if (this._cameraConfigs.enableProfiler) {
              flags |= SceneFlags.PROFILER;
              pass.showStatistics = true;
            }
            pass.addQueue(QueueHint.BLEND).addScene(camera, flags);
          };
          _proto8._buildForwardPipeline = function _buildForwardPipeline(ppl, camera, scene, passBuilders) {
            sortPipelinePassBuildersByRenderOrder(passBuilders);
            var context = {
              colorName: '',
              depthStencilName: ''
            };
            var lastPass = undefined;
            for (var _iterator14 = _createForOfIteratorHelperLoose(passBuilders), _step14; !(_step14 = _iterator14()).done;) {
              var builder = _step14.value;
              if (builder.setup) {
                lastPass = builder.setup(ppl, this._configs, this._cameraConfigs, camera, context, lastPass);
              }
            }
            assert(this._cameraConfigs.remainingPasses === 0);
          };
          _proto8._initMaterials = function _initMaterials(ppl) {
            if (this._initialized) {
              return 0;
            }
            setupPipelineConfigs(ppl, this._configs);

            // When add new effect asset, please add its uuid to the dependentAssets in cc.config.json.
            this._copyAndTonemapMaterial._uuid = "builtin-pipeline-tone-mapping-material";
            this._copyAndTonemapMaterial.initialize({
              effectName: 'pipeline/post-process/tone-mapping'
            });
            if (this._copyAndTonemapMaterial.effectAsset) {
              this._initialized = true;
            }
            return this._initialized ? 0 : 1;
          };
          return BuiltinPipelineBuilder;
        }();
        rendering.setCustomPipeline('Builtin', new BuiltinPipelineBuilder());
      } // if (rendering)
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/internal", ['./builtin-pipeline-settings.ts', './builtin-pipeline-types.ts', './builtin-pipeline.ts'], function () {
  return {
    setters: [null, null, null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/internal', 'chunks:///_virtual/internal'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2ZpbGU6L0M6L1Byb2dyYW1EYXRhL2NvY29zL2VkaXRvcnMvQ3JlYXRvci8zLjguNi9yZXNvdXJjZXMvcmVzb3VyY2VzLzNkL2VuZ2luZS9lZGl0b3IvYXNzZXRzL2RlZmF1bHRfcmVuZGVycGlwZWxpbmUvZmlsZTovQzovUHJvZ3JhbURhdGEvY29jb3MvZWRpdG9ycy9DcmVhdG9yLzMuOC42L3Jlc291cmNlcy9yZXNvdXJjZXMvM2QvZW5naW5lL2VkaXRvci9hc3NldHMvZGVmYXVsdF9yZW5kZXJwaXBlbGluZS9idWlsdGluLXBpcGVsaW5lLXNldHRpbmdzLnRzIiwiLi4vZmlsZTovQzovUHJvZ3JhbURhdGEvY29jb3MvZWRpdG9ycy9DcmVhdG9yLzMuOC42L3Jlc291cmNlcy9yZXNvdXJjZXMvM2QvZW5naW5lL2VkaXRvci9hc3NldHMvZGVmYXVsdF9yZW5kZXJwaXBlbGluZS9maWxlOi9DOi9Qcm9ncmFtRGF0YS9jb2Nvcy9lZGl0b3JzL0NyZWF0b3IvMy44LjYvcmVzb3VyY2VzL3Jlc291cmNlcy8zZC9lbmdpbmUvZWRpdG9yL2Fzc2V0cy9kZWZhdWx0X3JlbmRlcnBpcGVsaW5lL2J1aWx0aW4tcGlwZWxpbmUtdHlwZXMudHMiLCIuLi9maWxlOi9DOi9Qcm9ncmFtRGF0YS9jb2Nvcy9lZGl0b3JzL0NyZWF0b3IvMy44LjYvcmVzb3VyY2VzL3Jlc291cmNlcy8zZC9lbmdpbmUvZWRpdG9yL2Fzc2V0cy9kZWZhdWx0X3JlbmRlcnBpcGVsaW5lL2ZpbGU6L0M6L1Byb2dyYW1EYXRhL2NvY29zL2VkaXRvcnMvQ3JlYXRvci8zLjguNi9yZXNvdXJjZXMvcmVzb3VyY2VzLzNkL2VuZ2luZS9lZGl0b3IvYXNzZXRzL2RlZmF1bHRfcmVuZGVycGlwZWxpbmUvYnVpbHRpbi1waXBlbGluZS50cyJdLCJuYW1lcyI6WyJjY2NsYXNzIiwiX2RlY29yYXRvciIsImRpc2FsbG93TXVsdGlwbGUiLCJleGVjdXRlSW5FZGl0TW9kZSIsIm1lbnUiLCJwcm9wZXJ0eSIsInJlcXVpcmVDb21wb25lbnQiLCJ0eXBlIiwiQnVpbHRpblBpcGVsaW5lU2V0dGluZ3MiLCJfZGVjIiwiX2RlYzIiLCJfZGVjMyIsIkNhbWVyYSIsIl9kZWM0IiwiQ0NCb29sZWFuIiwiX2RlYzUiLCJkaXNwbGF5TmFtZSIsIl9kZWM2IiwiZ3JvdXAiLCJpZCIsIm5hbWUiLCJfZGVjNyIsInN0eWxlIiwiQ0NJbnRlZ2VyIiwicmFuZ2UiLCJfZGVjOCIsIl9kZWM5IiwidG9vbHRpcCIsIkNDRmxvYXQiLCJzbGlkZSIsIl9kZWMxMCIsIl9kZWMxMSIsIk1hdGVyaWFsIiwiX2RlYzEyIiwiX2RlYzEzIiwiX2RlYzE0IiwibWluIiwiX2RlYzE1IiwiX2RlYzE2IiwiX2RlYzE3IiwiX2RlYzE4IiwiVGV4dHVyZTJEIiwiX2RlYzE5IiwiX2RlYzIwIiwiX2RlYzIxIiwiX2RlYzIyIiwiX2RlYzIzIiwiX2RlYzI0IiwiX2NsYXNzIiwiX2NsYXNzMiIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHNMb29zZSIsIl90aGlzIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJfaW5pdGlhbGl6ZXJEZWZpbmVQcm9wZXJ0eSIsIl9kZXNjcmlwdG9yIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIl9kZXNjcmlwdG9yMiIsIl9wcm90byIsInByb3RvdHlwZSIsImdldFBpcGVsaW5lU2V0dGluZ3MiLCJfc2V0dGluZ3MiLCJvbkVuYWJsZSIsImZpbGxSZXF1aXJlZFBpcGVsaW5lU2V0dGluZ3MiLCJjYW1lcmFDb21wb25lbnQiLCJnZXRDb21wb25lbnQiLCJjYW1lcmEiLCJwaXBlbGluZVNldHRpbmdzIiwib25EaXNhYmxlIiwiX3RyeUVuYWJsZUVkaXRvclByZXZpZXciLCJyZW5kZXJpbmciLCJ1bmRlZmluZWQiLCJfZWRpdG9yUHJldmlldyIsInNldEVkaXRvclBpcGVsaW5lU2V0dGluZ3MiLCJfZGlzYWJsZUVkaXRvclByZXZpZXciLCJjdXJyZW50IiwiZ2V0RWRpdG9yUGlwZWxpbmVTZXR0aW5ncyIsIl9jcmVhdGVDbGFzcyIsImtleSIsImdldCIsInNldCIsInYiLCJtc2FhIiwiZW5hYmxlZCIsInZhbHVlIiwic2FtcGxlQ291bnQiLCJNYXRoIiwicG93IiwiY2VpbCIsImxvZzIiLCJtYXgiLCJlbmFibGVTaGFkaW5nU2NhbGUiLCJzaGFkaW5nU2NhbGUiLCJibG9vbSIsIm1hdGVyaWFsIiwiZW5hYmxlQWxwaGFNYXNrIiwiaXRlcmF0aW9ucyIsInRocmVzaG9sZCIsImludGVuc2l0eSIsImNvbG9yR3JhZGluZyIsImNvbnRyaWJ1dGUiLCJjb2xvckdyYWRpbmdNYXAiLCJ2YWwiLCJmeGFhIiwiZnNyIiwic2hhcnBuZXNzIiwidG9uZU1hcHBpbmciLCJDb21wb25lbnQiLCJfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yIiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiaW5pdGlhbGl6ZXIiLCJtYWtlUGlwZWxpbmVTZXR0aW5ncyIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9SRiIsInBvcCIsIlNhbXBsZUNvdW50IiwiZ2Z4IiwibWFrZU1TQUEiLCJYNCIsImZpbGxSZXF1aXJlZE1TQUEiLCJtYWtlSEJBTyIsInJhZGl1c1NjYWxlIiwiYW5nbGVCaWFzRGVncmVlIiwiYmx1clNoYXJwbmVzcyIsImFvU2F0dXJhdGlvbiIsIm5lZWRCbHVyIiwiZmlsbFJlcXVpcmVkSEJBTyIsIm1ha2VCbG9vbSIsImZpbGxSZXF1aXJlZEJsb29tIiwibWFrZUNvbG9yR3JhZGluZyIsImZpbGxSZXF1aXJlZENvbG9yR3JhZGluZyIsIm1ha2VGU1IiLCJmaWxsUmVxdWlyZWRGU1IiLCJtYWtlRlhBQSIsImZpbGxSZXF1aXJlZEZYQUEiLCJtYWtlVG9uZU1hcHBpbmciLCJmaWxsUmVxdWlyZWRUb25lTWFwcGluZyIsIkFBQkIiLCJnZW9tZXRyeSIsIlNwaGVyZSIsImludGVyc2VjdCIsIkNsZWFyRmxhZ0JpdCIsIkNvbG9yIiwiRm9ybWF0IiwiRm9ybWF0RmVhdHVyZUJpdCIsIkxvYWRPcCIsIlN0b3JlT3AiLCJUZXh0dXJlVHlwZSIsIlZpZXdwb3J0Iiwic2NlbmUiLCJyZW5kZXJlciIsIkNhbWVyYVVzYWdlIiwiQ1NNTGV2ZWwiLCJMaWdodFR5cGUiLCJmb3J3YXJkTmVlZENsZWFyQ29sb3IiLCJjbGVhckZsYWciLCJDT0xPUiIsIlNURU5DSUwiLCJnZXRDc21NYWluTGlnaHRWaWV3cG9ydCIsImxpZ2h0IiwidyIsImgiLCJsZXZlbCIsInZwIiwic2NyZWVuU3BhY2VTaWduWSIsInNoYWRvd0ZpeGVkQXJlYSIsImNzbUxldmVsIiwiTEVWRUxfMSIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsInRydW5jIiwiaGVpZ2h0IiwiZmxvb3IiLCJQaXBlbGluZUNvbmZpZ3MiLCJpc1dlYiIsImlzV2ViR0wxIiwiaXNXZWJHUFUiLCJpc01vYmlsZSIsImlzSERSIiwidXNlRmxvYXRPdXRwdXQiLCJ0b25lTWFwcGluZ1R5cGUiLCJzaGFkb3dFbmFibGVkIiwic2hhZG93TWFwRm9ybWF0IiwiUjMyRiIsInNoYWRvd01hcFNpemUiLCJWZWMyIiwidXNlUGxhbmFyU2hhZG93Iiwic3VwcG9ydERlcHRoU2FtcGxlIiwibW9iaWxlTWF4U3BvdExpZ2h0U2hhZG93TWFwcyIsInBsYXRmb3JtIiwiVmVjNCIsInNldHVwUGlwZWxpbmVDb25maWdzIiwicHBsIiwiY29uZmlncyIsInNhbXBsZUZlYXR1cmUiLCJTQU1QTEVEX1RFWFRVUkUiLCJMSU5FQVJfRklMVEVSIiwiZGV2aWNlIiwic3lzIiwiaXNOYXRpdmUiLCJnZnhBUEkiLCJBUEkiLCJXRUJHTCIsIldFQkdQVSIsInBpcGVsaW5lU2NlbmVEYXRhIiwiZ2V0TWFjcm9Cb29sIiwicG9zdFNldHRpbmdzIiwic2hhZG93SW5mbyIsInNoYWRvd3MiLCJwaXBlbGluZSIsInN1cHBvcnRzUjMyRmxvYXRUZXh0dXJlIiwiUkdCQTgiLCJzaXplIiwiU2hhZG93VHlwZSIsIlBsYW5hciIsImNhcGFiaWxpdGllcyIsImdldEZvcm1hdEZlYXR1cmVzIiwiREVQVEhfU1RFTkNJTCIsIngiLCJjbGlwU3BhY2VTaWduWSIsImRlZmF1bHRTZXR0aW5ncyIsIkNhbWVyYUNvbmZpZ3MiLCJzZXR0aW5ncyIsImlzTWFpbkdhbWVXaW5kb3ciLCJyZW5kZXJXaW5kb3dJZCIsImNvbG9yTmFtZSIsImRlcHRoU3RlbmNpbE5hbWUiLCJlbmFibGVGdWxsUGlwZWxpbmUiLCJlbmFibGVQcm9maWxlciIsInJlbWFpbmluZ1Bhc3NlcyIsIm5hdGl2ZVdpZHRoIiwibmF0aXZlSGVpZ2h0IiwiZW5hYmxlSERSIiwicmFkaWFuY2VGb3JtYXQiLCJjb3B5QW5kVG9uZW1hcE1hdGVyaWFsIiwiZW5hYmxlU3RvcmVTY2VuZURlcHRoIiwic0NsZWFyQ29sb3JUcmFuc3BhcmVudEJsYWNrIiwic29ydFBpcGVsaW5lUGFzc0J1aWxkZXJzQnlDb25maWdPcmRlciIsInBhc3NCdWlsZGVycyIsInNvcnQiLCJhIiwiYiIsImdldENvbmZpZ09yZGVyIiwic29ydFBpcGVsaW5lUGFzc0J1aWxkZXJzQnlSZW5kZXJPcmRlciIsImdldFJlbmRlck9yZGVyIiwiYWRkQ29weVRvU2NyZWVuUGFzcyIsInBwbENvbmZpZ3MiLCJjYW1lcmFDb25maWdzIiwiaW5wdXQiLCJhc3NlcnQiLCJwYXNzIiwiYWRkUmVuZGVyUGFzcyIsImFkZFJlbmRlclRhcmdldCIsIkNMRUFSIiwiU1RPUkUiLCJhZGRUZXh0dXJlIiwic2V0VmVjNCIsImFkZFF1ZXVlIiwiUXVldWVIaW50IiwiT1BBUVVFIiwiYWRkRnVsbHNjcmVlblF1YWQiLCJnZXRQaW5nUG9uZ1JlbmRlclRhcmdldCIsInByZXZOYW1lIiwicHJlZml4Iiwic3RhcnRzV2l0aCIsIk51bWJlciIsImNoYXJBdCIsIkZvcndhcmRMaWdodGluZyIsImxpZ2h0cyIsInNoYWRvd0VuYWJsZWRTcG90TGlnaHRzIiwiX3NwaGVyZSIsImNyZWF0ZSIsIl9ib3VuZGluZ0JveCIsIl9yYW5nZWREaXJMaWdodEJvdW5kaW5nQm94IiwiY3VsbExpZ2h0cyIsImZydXN0dW0iLCJjYW1lcmFQb3MiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlIiwic3BvdExpZ2h0cyIsIl9zdGVwIiwiZG9uZSIsImJha2VkIiwicG9zaXRpb24iLCJ5IiwieiIsInNwaGVyZUZydXN0dW0iLCJwdXNoIiwiX2l0ZXJhdG9yMiIsInNwaGVyZUxpZ2h0cyIsIl9zdGVwMiIsIl9pdGVyYXRvcjMiLCJwb2ludExpZ2h0cyIsIl9zdGVwMyIsIl9pdGVyYXRvcjQiLCJyYW5nZWREaXJMaWdodHMiLCJfc3RlcDQiLCJ0cmFuc2Zvcm0iLCJub2RlIiwiZ2V0V29ybGRNYXRyaXgiLCJhYWJiRnJ1c3R1bSIsImxocyIsInJocyIsIlZlYzMiLCJzcXVhcmVkRGlzdGFuY2UiLCJfYWRkTGlnaHRRdWV1ZXMiLCJfaXRlcmF0b3I1IiwiX3N0ZXA1IiwicXVldWUiLCJCTEVORCIsIlNQSEVSRSIsIlNQT1QiLCJQT0lOVCIsIlJBTkdFRF9ESVJFQ1RJT05BTCIsImFkZFNjZW5lIiwiU2NlbmVGbGFncyIsImFkZFNwb3RsaWdodFNoYWRvd1Bhc3NlcyIsIm1heE51bVNoYWRvd01hcHMiLCJpIiwiX2l0ZXJhdG9yNiIsIl9zdGVwNiIsInNoYWRvd1Bhc3MiLCJhZGREZXB0aFN0ZW5jaWwiLCJESVNDQVJEIiwiTk9ORSIsIk1BU0siLCJTSEFET1dfQ0FTVEVSIiwidXNlTGlnaHRGcnVzdHVtIiwiYWRkTGlnaHRRdWV1ZXMiLCJfaXRlcmF0b3I3IiwiX3N0ZXA3IiwiYWRkTGlnaHRQYXNzZXMiLCJkZXB0aFN0ZW5jaWxTdG9yZU9wIiwidmlld3BvcnQiLCJjb3VudCIsIl9pdGVyYXRvcjgiLCJfc3RlcDgiLCJzdG9yZU9wIiwic2V0Vmlld3BvcnQiLCJMT0FEIiwiaXNNdWx0aXBsZUxpZ2h0UGFzc2VzTmVlZGVkIiwiQnVpbHRpbkZvcndhcmRQYXNzQnVpbGRlciIsImZvcndhcmRMaWdodGluZyIsIl92aWV3cG9ydCIsIl9jbGVhckNvbG9yIiwiX3JlZmxlY3Rpb25Qcm9iZUNsZWFyQ29sb3IiLCJfcHJvdG8yIiwiQ29uZmlnT3JkZXIiLCJSZW5kZXJPcmRlciIsImNvbmZpZ0NhbWVyYSIsInBpcGVsaW5lQ29uZmlncyIsImVuYWJsZU1haW5MaWdodFNoYWRvd01hcCIsIm1haW5MaWdodCIsImVuYWJsZU1haW5MaWdodFBsYW5hclNoYWRvd01hcCIsImVuYWJsZVBsYW5hclJlZmxlY3Rpb25Qcm9iZSIsImNhbWVyYVVzYWdlIiwiU0NFTkVfVklFVyIsIkdBTUVfVklFVyIsImVuYWJsZU1TQUEiLCJlbmFibGVTaW5nbGVGb3J3YXJkUGFzcyIsIndpbmRvd1Jlc2l6ZSIsIndpbmRvdyIsIlJlc291cmNlRmxhZ3MiLCJSZXNvdXJjZVJlc2lkZW5jeSIsIlRFWDJEIiwiQ09MT1JfQVRUQUNITUVOVCIsIk1FTU9SWUxFU1MiLCJERVBUSF9TVEVOQ0lMX0FUVEFDSE1FTlQiLCJzZXR1cCIsImNvbnRleHQiLCJfYWRkQ2FzY2FkZWRTaGFkb3dNYXBQYXNzIiwiX3RyeUFkZFJlZmxlY3Rpb25Qcm9iZVBhc3NlcyIsIl9hZGRGb3J3YXJkUmFkaWFuY2VQYXNzZXMiLCJzaGFkb3dTaXplIiwiY3NtU3VwcG9ydGVkIiwicmVmbGVjdGlvblByb2JlTWFuYWdlciIsImNjbGVnYWN5IiwiaW50ZXJuYWwiLCJwcm9iZXMiLCJnZXRQcm9iZXMiLCJtYXhQcm9iZUNvdW50IiwicHJvYmVJRCIsIl9pdGVyYXRvcjkiLCJfc3RlcDkiLCJwcm9iZSIsIm5lZWRSZW5kZXIiLCJhcmVhIiwicmVuZGVyQXJlYSIsInByb2JlVHlwZSIsIlByb2JlVHlwZSIsIlBMQU5BUiIsInJlYWx0aW1lUGxhbmFyVGV4dHVyZSIsImFkZFJlbmRlcldpbmRvdyIsInByb2JlUGFzcyIsIl9idWlsZFJlZmxlY3Rpb25Qcm9iZVBhc3MiLCJjb2xvclN0b3JlT3AiLCJjbGVhckNvbG9yIiwicGFja1JHQkUiLCJjbGVhckRlcHRoIiwiY2xlYXJTdGVuY2lsIiwiUkVGTEVDVElPTl9QUk9CRSIsImRpc2FibGVNU0FBIiwicm91bmQiLCJfYWRkRm9yd2FyZFNpbmdsZVJhZGlhbmNlUGFzcyIsIl9hZGRGb3J3YXJkTXVsdGlwbGVSYWRpYW5jZVBhc3NlcyIsIl9hZGRQbGFuYXJTaGFkb3dRdWV1ZSIsInNjZW5lRmxhZ3MiLCJnZW9tZXRyeVJlbmRlcmVyIiwiR0VPTUVUUlkiLCJtc2FhUmFkaWFuY2VOYW1lIiwibXNhYURlcHRoU3RlbmNpbE5hbWUiLCJtc1Bhc3MiLCJhZGRNdWx0aXNhbXBsZVJlbmRlclBhc3MiLCJfYnVpbGRGb3J3YXJkTWFpbkxpZ2h0UGFzcyIsInJlc29sdmVSZW5kZXJUYXJnZXQiLCJmaXJzdFN0b3JlT3AiLCJ3YXJuIiwiUExBTkFSX1NIQURPVyIsIkJ1aWx0aW5CbG9vbVBhc3NCdWlsZGVyIiwiX2NsZWFyQ29sb3JUcmFuc3BhcmVudEJsYWNrIiwiX2Jsb29tUGFyYW1zIiwiX2Jsb29tVGV4U2l6ZSIsIl9ibG9vbVdpZHRocyIsIl9ibG9vbUhlaWdodHMiLCJfYmxvb21UZXhOYW1lcyIsIl9wcm90bzMiLCJlbmFibGVCbG9vbSIsImJsb29tV2lkdGgiLCJibG9vbUhlaWdodCIsInByZXZSZW5kZXJQYXNzIiwiX2FkZEthd2FzZUR1YWxGaWx0ZXJCbG9vbVBhc3NlcyIsImJsb29tTWF0ZXJpYWwiLCJyYWRpYW5jZU5hbWUiLCJzaXplQ291bnQiLCJwcmVmaWx0ZXJQYXNzIiwiZG93blBhc3MiLCJ1cFBhc3MiLCJjb21iaW5lUGFzcyIsIkJ1aWx0aW5Ub25lTWFwcGluZ1Bhc3NCdWlsZGVyIiwiX2NvbG9yR3JhZGluZ1RleFNpemUiLCJfcHJvdG80IiwiZW5hYmxlQ29sb3JHcmFkaW5nIiwiZW5hYmxlVG9uZU1hcHBpbmciLCJzZXRQcm9wZXJ0eSIsIl9hZGRDb3B5QW5kVG9uZW1hcFBhc3MiLCJsZHJDb2xvclByZWZpeCIsImxkckNvbG9yTmFtZSIsImx1dFRleCIsImlzU3F1YXJlTWFwIiwic2V0VmVjMiIsInNldEZsb2F0IiwiQnVpbHRpbkZYQUFQYXNzQnVpbGRlciIsIl9meGFhUGFyYW1zIiwiX3Byb3RvNSIsImVuYWJsZUZYQUEiLCJfYWRkRnhhYVBhc3MiLCJpbnB1dENvbG9yTmFtZSIsImxhc3RQYXNzIiwiZnhhYU1hdGVyaWFsIiwiQnVpbHRpbkZzclBhc3NCdWlsZGVyIiwiX2ZzclBhcmFtcyIsIl9mc3JUZXhTaXplIiwiX3Byb3RvNiIsImVuYWJsZUZTUiIsIm91dHB1dENvbG9yTmFtZSIsIl9hZGRGc3JQYXNzIiwiZnNyTWF0ZXJpYWwiLCJjbGFtcCIsInVpQ29sb3JQcmVmaXgiLCJmc3JDb2xvck5hbWUiLCJlYXN1UGFzcyIsInJjYXNQYXNzIiwiQnVpbHRpblVpUGFzc0J1aWxkZXIiLCJfcHJvdG83IiwiZmxhZ3MiLCJVSSIsIlBST0ZJTEVSIiwic2hvd1N0YXRpc3RpY3MiLCJCdWlsdGluUGlwZWxpbmVCdWlsZGVyIiwiX3BpcGVsaW5lRXZlbnQiLCJkaXJlY3RvciIsInJvb3QiLCJwaXBlbGluZUV2ZW50IiwiX2ZvcndhcmRQYXNzIiwiX2Jsb29tUGFzcyIsIl90b25lTWFwcGluZ1Bhc3MiLCJfZnhhYVBhc3MiLCJfZnNyUGFzcyIsIl91aVBhc3MiLCJfY29uZmlncyIsIl9jYW1lcmFDb25maWdzIiwiX2NvcHlBbmRUb25lbWFwTWF0ZXJpYWwiLCJfaW5pdGlhbGl6ZWQiLCJfcGFzc0J1aWxkZXJzIiwiX3Byb3RvOCIsIl9zZXR1cFBpcGVsaW5lUHJldmlldyIsImlzRWRpdG9yVmlldyIsIlBSRVZJRVciLCJlZGl0b3JTZXR0aW5ncyIsIl9wcmVwYXJlUGlwZWxpbmVQYXNzZXMiLCJfcGFzc2VzIiwiX2l0ZXJhdG9yMTAiLCJfc3RlcDEwIiwiX3NldHVwQnVpbHRpbkNhbWVyYUNvbmZpZ3MiLCJHQU1FIiwic3dhcGNoYWluIiwidmlzaWJpbGl0eSIsIkxheWVycyIsIkVudW0iLCJERUZBVUxUIiwiUkdCQTE2RiIsIl9zZXR1cENhbWVyYUNvbmZpZ3MiLCJfaXRlcmF0b3IxMSIsIl9zdGVwMTEiLCJidWlsZGVyIiwiX2l0ZXJhdG9yMTIiLCJfc3RlcDEyIiwiY2FtZXJhcyIsIl9pbml0TWF0ZXJpYWxzIiwiX2l0ZXJhdG9yMTMiLCJfc3RlcDEzIiwiZW1pdCIsIlBpcGVsaW5lRXZlbnRUeXBlIiwiUkVOREVSX0NBTUVSQV9CRUdJTiIsIl9idWlsZEZvcndhcmRQaXBlbGluZSIsIl9idWlsZFNpbXBsZVBpcGVsaW5lIiwiUkVOREVSX0NBTUVSQV9FTkQiLCJfaXRlcmF0b3IxNCIsIl9zdGVwMTQiLCJfdXVpZCIsImluaXRpYWxpemUiLCJlZmZlY3ROYW1lIiwiZWZmZWN0QXNzZXQiLCJzZXRDdXN0b21QaXBlbGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BbUNBLElBQVFBLE9BQU8sR0FBa0ZDLFVBQVUsQ0FBbkdELE9BQU87UUFBRUUsZ0JBQWdCLEdBQWdFRCxVQUFVLENBQTFGQyxnQkFBZ0I7UUFBRUMsaUJBQWlCLEdBQTZDRixVQUFVLENBQXhFRSxpQkFBaUI7UUFBRUMsSUFBSSxHQUF1Q0gsVUFBVSxDQUFyREcsSUFBSTtRQUFFQyxRQUFRLEdBQTZCSixVQUFVLENBQS9DSSxRQUFRO1FBQUVDLGdCQUFnQixHQUFXTCxVQUFVLENBQXJDSyxnQkFBZ0I7UUFBRUMsSUFBSSxHQUFLTixVQUFVLENBQW5CTSxJQUFJO1VBTy9FQyx1QkFBdUIsdUNBQUFDLElBQUEsR0FMbkNULE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxFQUFBVSxLQUFBLEdBQ2xDTixJQUFJLENBQUMsbUNBQW1DLENBQUMsRUFBQU8sS0FBQSxHQUN6Q0wsZ0JBQWdCLENBQUNNLE1BQU0sQ0FBQyxFQUFBQyxLQUFBLEdBaUNwQlIsUUFBUSxDQUFDUyxTQUFTLENBQUMsRUFBQUMsS0FBQSxHQUduQlYsUUFBUSxDQUFDO1FBQ05XLFdBQVcsRUFBRSwrQkFBK0I7UUFDNUNULElBQUksRUFBRU87TUFDVixDQUFDLENBQUMsRUFBQUcsS0FBQSxHQStCRFosUUFBUSxDQUFDO1FBQ05hLEtBQUssRUFBRTtVQUFFQyxFQUFFLEVBQUUsTUFBTTtV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QUM1RDVhLE1BQU0sRUFBRW1ULE9BQU8sRUFBRXdGLFFBQVEsQ0FBQzs7O1lBSXRDaE4sTUFBTSxDQUFDLElBQUksQ0FBQ2lQLGNBQWMsQ0FBQ3JRLGVBQWUsS0FBSyxDQUFDLENBQUM7V0FDcEQ7VUFBQXlRLE9BQUEsQ0FFT3dCLGNBQWMsR0FBdEIsU0FBQUEsZUFBdUJ0VSxHQUE0QixFQUFVO1lBQ3pELElBQUksSUFBSSxDQUFDNFMsWUFBWSxFQUFFO2NBQ25CLE9BQU8sQ0FBQzs7WUFHWjdTLG9CQUFvQixDQUFDQyxHQUFHLEVBQUUsSUFBSSxDQUFDeVMsUUFBUSxDQUFDOzs7WUFHeEMsSUFBSSxDQUFDRSx1QkFBdUIsQ0FBQ3NDLEtBQUssMkNBQTJDO1lBQzdFLElBQUksQ0FBQ3RDLHVCQUF1QixDQUFDdUMsVUFBVSxDQUFDO2NBQUVDLFVBQVUsRUFBRTthQUFzQyxDQUFDO1lBRTdGLElBQUksSUFBSSxDQUFDeEMsdUJBQXVCLENBQUN5QyxXQUFXLEVBQUU7Y0FDMUMsSUFBSSxDQUFDeEMsWUFBWSxHQUFHLElBQUk7O1lBRzVCLE9BQU8sSUFBSSxDQUFDQSxZQUFZLEdBQUcsQ0FBQyxHQUFHLENBQUM7V0FDbkM7VUFBQSxPQUFBZCxzQkFBQTs7UUFHTDVaLFNBQVMsQ0FBQ21kLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxJQUFJdkQsc0JBQXNCLEVBQUUsQ0FBQztNQUV4RSxDQUFDO2NBQUMsQ0FBQTlXLEdBQUEsQ0FBQUMsR0FBQSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gQ29weXJpZ2h0IChjKSAyMDIxLTIwMjQgWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXHJcblxyXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xyXG5cclxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cclxuIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzXHJcbiBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXHJcbiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcbiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiBUSEUgU09GVFdBUkUuXHJcbiovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgX2RlY29yYXRvciwgQ2FtZXJhLCBDQ0Jvb2xlYW4sIENDRmxvYXQsIENDSW50ZWdlciwgQ29tcG9uZW50LFxyXG4gICAgTWF0ZXJpYWwsIHJlbmRlcmluZywgVGV4dHVyZTJELFxyXG59IGZyb20gJ2NjJztcclxuXHJcbmltcG9ydCB7IEVESVRPUiB9IGZyb20gJ2NjL2Vudic7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgZmlsbFJlcXVpcmVkUGlwZWxpbmVTZXR0aW5ncywgbWFrZVBpcGVsaW5lU2V0dGluZ3MsIFBpcGVsaW5lU2V0dGluZ3MsXHJcbn0gZnJvbSAnLi9idWlsdGluLXBpcGVsaW5lLXR5cGVzJztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgZGlzYWxsb3dNdWx0aXBsZSwgZXhlY3V0ZUluRWRpdE1vZGUsIG1lbnUsIHByb3BlcnR5LCByZXF1aXJlQ29tcG9uZW50LCB0eXBlIH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0J1aWx0aW5QaXBlbGluZVNldHRpbmdzJylcclxuQG1lbnUoJ1JlbmRlcmluZy9CdWlsdGluUGlwZWxpbmVTZXR0aW5ncycpXHJcbkByZXF1aXJlQ29tcG9uZW50KENhbWVyYSlcclxuQGRpc2FsbG93TXVsdGlwbGVcclxuQGV4ZWN1dGVJbkVkaXRNb2RlXHJcbmV4cG9ydCBjbGFzcyBCdWlsdGluUGlwZWxpbmVTZXR0aW5ncyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3NldHRpbmdzOiBQaXBlbGluZVNldHRpbmdzID0gbWFrZVBpcGVsaW5lU2V0dGluZ3MoKTtcclxuXHJcbiAgICBnZXRQaXBlbGluZVNldHRpbmdzKCk6IFBpcGVsaW5lU2V0dGluZ3Mge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncztcclxuICAgIH1cclxuXHJcbiAgICAvLyBFbmFibGUvRGlzYWJsZVxyXG4gICAgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgZmlsbFJlcXVpcmVkUGlwZWxpbmVTZXR0aW5ncyh0aGlzLl9zZXR0aW5ncyk7XHJcbiAgICAgICAgY29uc3QgY2FtZXJhQ29tcG9uZW50ID0gdGhpcy5nZXRDb21wb25lbnQoQ2FtZXJhKSE7XHJcbiAgICAgICAgY29uc3QgY2FtZXJhID0gY2FtZXJhQ29tcG9uZW50LmNhbWVyYTtcclxuICAgICAgICBjYW1lcmEucGlwZWxpbmVTZXR0aW5ncyA9IHRoaXMuX3NldHRpbmdzO1xyXG5cclxuICAgICAgICBpZiAoRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyeUVuYWJsZUVkaXRvclByZXZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY2FtZXJhQ29tcG9uZW50ID0gdGhpcy5nZXRDb21wb25lbnQoQ2FtZXJhKSE7XHJcbiAgICAgICAgY29uc3QgY2FtZXJhID0gY2FtZXJhQ29tcG9uZW50LmNhbWVyYTtcclxuICAgICAgICBjYW1lcmEucGlwZWxpbmVTZXR0aW5ncyA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChFRElUT1IpIHtcclxuICAgICAgICAgICAgdGhpcy5fZGlzYWJsZUVkaXRvclByZXZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRWRpdG9yIFByZXZpZXdcclxuICAgIEBwcm9wZXJ0eShDQ0Jvb2xlYW4pXHJcbiAgICBwcm90ZWN0ZWQgX2VkaXRvclByZXZpZXcgPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnRWRpdG9yIFByZXZpZXcgKEV4cGVyaW1lbnRhbCknLFxyXG4gICAgICAgIHR5cGU6IENDQm9vbGVhbixcclxuICAgIH0pXHJcbiAgICBnZXQgZWRpdG9yUHJldmlldygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWRpdG9yUHJldmlldztcclxuICAgIH1cclxuICAgIHNldCBlZGl0b3JQcmV2aWV3KHY6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9lZGl0b3JQcmV2aWV3ID0gdjtcclxuICAgICAgICBpZiAoRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyeUVuYWJsZUVkaXRvclByZXZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgX3RyeUVuYWJsZUVkaXRvclByZXZpZXcoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHJlbmRlcmluZyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2VkaXRvclByZXZpZXcpIHtcclxuICAgICAgICAgICAgcmVuZGVyaW5nLnNldEVkaXRvclBpcGVsaW5lU2V0dGluZ3ModGhpcy5fc2V0dGluZ3MpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Rpc2FibGVFZGl0b3JQcmV2aWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIF9kaXNhYmxlRWRpdG9yUHJldmlldygpOiB2b2lkIHtcclxuICAgICAgICBpZiAocmVuZGVyaW5nID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjdXJyZW50ID0gcmVuZGVyaW5nLmdldEVkaXRvclBpcGVsaW5lU2V0dGluZ3MoKSBhcyBQaXBlbGluZVNldHRpbmdzIHwgbnVsbDtcclxuICAgICAgICBpZiAoY3VycmVudCA9PT0gdGhpcy5fc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgcmVuZGVyaW5nLnNldEVkaXRvclBpcGVsaW5lU2V0dGluZ3MobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE1TQUFcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgZ3JvdXA6IHsgaWQ6ICdNU0FBJywgbmFtZTogJ011bHRpc2FtcGxlIEFudGktQWxpYXNpbmcnIH0sXHJcbiAgICAgICAgdHlwZTogQ0NCb29sZWFuLFxyXG4gICAgfSlcclxuICAgIGdldCBNc2FhRW5hYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5tc2FhLmVuYWJsZWQ7XHJcbiAgICB9XHJcbiAgICBzZXQgTXNhYUVuYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLm1zYWEuZW5hYmxlZCA9IHZhbHVlO1xyXG4gICAgICAgIGlmIChFRElUT1IpIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJ5RW5hYmxlRWRpdG9yUHJldmlldygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGdyb3VwOiB7IGlkOiAnTVNBQScsIG5hbWU6ICdNdWx0aXNhbXBsZSBBbnRpLUFsaWFzaW5nJywgc3R5bGU6ICdzZWN0aW9uJyB9LFxyXG4gICAgICAgIHR5cGU6IENDSW50ZWdlcixcclxuICAgICAgICByYW5nZTogWzIsIDQsIDJdLFxyXG4gICAgfSlcclxuICAgIHNldCBtc2FhU2FtcGxlQ291bnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHZhbHVlID0gMiAqKiBNYXRoLmNlaWwoTWF0aC5sb2cyKE1hdGgubWF4KHZhbHVlLCAyKSkpO1xyXG4gICAgICAgIHZhbHVlID0gTWF0aC5taW4odmFsdWUsIDQpO1xyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLm1zYWEuc2FtcGxlQ291bnQgPSB2YWx1ZTtcclxuICAgICAgICBpZiAoRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyeUVuYWJsZUVkaXRvclByZXZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgbXNhYVNhbXBsZUNvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLm1zYWEuc2FtcGxlQ291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2hhZGluZyBTY2FsZVxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBncm91cDogeyBpZDogJ1NoYWRpbmdTY2FsZScsIG5hbWU6ICdTaGFkaW5nU2NhbGUnLCBzdHlsZTogJ3NlY3Rpb24nIH0sXHJcbiAgICAgICAgdHlwZTogQ0NCb29sZWFuLFxyXG4gICAgfSlcclxuICAgIHNldCBzaGFkaW5nU2NhbGVFbmFibGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXR0aW5ncy5lbmFibGVTaGFkaW5nU2NhbGUgPSB2YWx1ZTtcclxuICAgICAgICBpZiAoRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyeUVuYWJsZUVkaXRvclByZXZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgc2hhZGluZ1NjYWxlRW5hYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5lbmFibGVTaGFkaW5nU2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0b29sdGlwOiAnaTE4bjpwb3N0cHJvY2Vzcy5zaGFkaW5nU2NhbGUnLFxyXG4gICAgICAgIGdyb3VwOiB7IGlkOiAnU2hhZGluZ1NjYWxlJywgbmFtZTogJ1NoYWRpbmdTY2FsZScgfSxcclxuICAgICAgICB0eXBlOiBDQ0Zsb2F0LFxyXG4gICAgICAgIHJhbmdlOiBbMC4wMSwgNCwgMC4wMV0sXHJcbiAgICAgICAgc2xpZGU6IHRydWUsXHJcbiAgICB9KVxyXG4gICAgc2V0IHNoYWRpbmdTY2FsZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3Muc2hhZGluZ1NjYWxlID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKEVESVRPUikge1xyXG4gICAgICAgICAgICB0aGlzLl90cnlFbmFibGVFZGl0b3JQcmV2aWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IHNoYWRpbmdTY2FsZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5zaGFkaW5nU2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQmxvb21cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgZ3JvdXA6IHsgaWQ6ICdCbG9vbScsIG5hbWU6ICdCbG9vbSAoUG9zdFByb2Nlc3NpbmcpJywgc3R5bGU6ICdzZWN0aW9uJyB9LFxyXG4gICAgICAgIHR5cGU6IENDQm9vbGVhbixcclxuICAgIH0pXHJcbiAgICBzZXQgYmxvb21FbmFibGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXR0aW5ncy5ibG9vbS5lbmFibGVkID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKEVESVRPUikge1xyXG4gICAgICAgICAgICB0aGlzLl90cnlFbmFibGVFZGl0b3JQcmV2aWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGJsb29tRW5hYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5ibG9vbS5lbmFibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgZ3JvdXA6IHsgaWQ6ICdCbG9vbScsIG5hbWU6ICdCbG9vbSAoUG9zdFByb2Nlc3NpbmcpJywgc3R5bGU6ICdzZWN0aW9uJyB9LFxyXG4gICAgICAgIHR5cGU6IE1hdGVyaWFsLFxyXG4gICAgfSlcclxuICAgIHNldCBibG9vbU1hdGVyaWFsKHZhbHVlOiBNYXRlcmlhbCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5ibG9vbS5tYXRlcmlhbCA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zZXR0aW5ncy5ibG9vbS5tYXRlcmlhbCA9IHZhbHVlO1xyXG4gICAgICAgIGlmIChFRElUT1IpIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJ5RW5hYmxlRWRpdG9yUHJldmlldygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBibG9vbU1hdGVyaWFsKCk6IE1hdGVyaWFsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuYmxvb20ubWF0ZXJpYWwhO1xyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdG9vbHRpcDogJ2kxOG46Ymxvb20uZW5hYmxlQWxwaGFNYXNrJyxcclxuICAgICAgICBncm91cDogeyBpZDogJ0Jsb29tJywgbmFtZTogJ0Jsb29tIChQb3N0UHJvY2Vzc2luZyknLCBzdHlsZTogJ3NlY3Rpb24nIH0sXHJcbiAgICAgICAgdHlwZTogQ0NCb29sZWFuLFxyXG4gICAgfSlcclxuICAgIHNldCBibG9vbUVuYWJsZUFscGhhTWFzayh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLmJsb29tLmVuYWJsZUFscGhhTWFzayA9IHZhbHVlO1xyXG4gICAgICAgIGlmIChFRElUT1IpIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJ5RW5hYmxlRWRpdG9yUHJldmlldygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBibG9vbUVuYWJsZUFscGhhTWFzaygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuYmxvb20uZW5hYmxlQWxwaGFNYXNrO1xyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdG9vbHRpcDogJ2kxOG46Ymxvb20uaXRlcmF0aW9ucycsXHJcbiAgICAgICAgZ3JvdXA6IHsgaWQ6ICdCbG9vbScsIG5hbWU6ICdCbG9vbSAoUG9zdFByb2Nlc3NpbmcpJywgc3R5bGU6ICdzZWN0aW9uJyB9LFxyXG4gICAgICAgIHR5cGU6IENDSW50ZWdlcixcclxuICAgICAgICByYW5nZTogWzEsIDYsIDFdLFxyXG4gICAgICAgIHNsaWRlOiB0cnVlLFxyXG4gICAgfSlcclxuICAgIHNldCBibG9vbUl0ZXJhdGlvbnModmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLmJsb29tLml0ZXJhdGlvbnMgPSB2YWx1ZTtcclxuICAgICAgICBpZiAoRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyeUVuYWJsZUVkaXRvclByZXZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgYmxvb21JdGVyYXRpb25zKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmJsb29tLml0ZXJhdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0b29sdGlwOiAnaTE4bjpibG9vbS50aHJlc2hvbGQnLFxyXG4gICAgICAgIGdyb3VwOiB7IGlkOiAnQmxvb20nLCBuYW1lOiAnQmxvb20gKFBvc3RQcm9jZXNzaW5nKScsIHN0eWxlOiAnc2VjdGlvbicgfSxcclxuICAgICAgICB0eXBlOiBDQ0Zsb2F0LFxyXG4gICAgICAgIG1pbjogMCxcclxuICAgIH0pXHJcbiAgICBzZXQgYmxvb21UaHJlc2hvbGQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLmJsb29tLnRocmVzaG9sZCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGJsb29tVGhyZXNob2xkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmJsb29tLnRocmVzaG9sZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgYmxvb21JbnRlbnNpdHkodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLmJsb29tLmludGVuc2l0eSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGJsb29tSW50ZW5zaXR5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmJsb29tLmludGVuc2l0eTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb2xvciBHcmFkaW5nIChMRFIpXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGdyb3VwOiB7IGlkOiAnQ29sb3IgR3JhZGluZycsIG5hbWU6ICdDb2xvckdyYWRpbmcgKExEUikgKFBvc3RQcm9jZXNzaW5nKScsIHN0eWxlOiAnc2VjdGlvbicgfSxcclxuICAgICAgICB0eXBlOiBDQ0Jvb2xlYW4sXHJcbiAgICB9KVxyXG4gICAgc2V0IGNvbG9yR3JhZGluZ0VuYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLmNvbG9yR3JhZGluZy5lbmFibGVkID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKEVESVRPUikge1xyXG4gICAgICAgICAgICB0aGlzLl90cnlFbmFibGVFZGl0b3JQcmV2aWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGNvbG9yR3JhZGluZ0VuYWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuY29sb3JHcmFkaW5nLmVuYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBncm91cDogeyBpZDogJ0NvbG9yIEdyYWRpbmcnLCBuYW1lOiAnQ29sb3JHcmFkaW5nIChMRFIpIChQb3N0UHJvY2Vzc2luZyknLCBzdHlsZTogJ3NlY3Rpb24nIH0sXHJcbiAgICAgICAgdHlwZTogTWF0ZXJpYWwsXHJcbiAgICB9KVxyXG4gICAgc2V0IGNvbG9yR3JhZGluZ01hdGVyaWFsKHZhbHVlOiBNYXRlcmlhbCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5jb2xvckdyYWRpbmcubWF0ZXJpYWwgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MuY29sb3JHcmFkaW5nLm1hdGVyaWFsID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKEVESVRPUikge1xyXG4gICAgICAgICAgICB0aGlzLl90cnlFbmFibGVFZGl0b3JQcmV2aWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGNvbG9yR3JhZGluZ01hdGVyaWFsKCk6IE1hdGVyaWFsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuY29sb3JHcmFkaW5nLm1hdGVyaWFsITtcclxuICAgIH1cclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHRvb2x0aXA6ICdpMThuOmNvbG9yX2dyYWRpbmcuY29udHJpYnV0ZScsXHJcbiAgICAgICAgZ3JvdXA6IHsgaWQ6ICdDb2xvciBHcmFkaW5nJywgbmFtZTogJ0NvbG9yR3JhZGluZyAoTERSKSAoUG9zdFByb2Nlc3NpbmcpJywgc3R5bGU6ICdzZWN0aW9uJyB9LFxyXG4gICAgICAgIHR5cGU6IENDRmxvYXQsXHJcbiAgICAgICAgcmFuZ2U6IFswLCAxLCAwLjAxXSxcclxuICAgICAgICBzbGlkZTogdHJ1ZSxcclxuICAgIH0pXHJcbiAgICBzZXQgY29sb3JHcmFkaW5nQ29udHJpYnV0ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MuY29sb3JHcmFkaW5nLmNvbnRyaWJ1dGUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGdldCBjb2xvckdyYWRpbmdDb250cmlidXRlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmNvbG9yR3JhZGluZy5jb250cmlidXRlO1xyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdG9vbHRpcDogJ2kxOG46Y29sb3JfZ3JhZGluZy5vcmlnaW5hbE1hcCcsXHJcbiAgICAgICAgZ3JvdXA6IHsgaWQ6ICdDb2xvciBHcmFkaW5nJywgbmFtZTogJ0NvbG9yR3JhZGluZyAoTERSKSAoUG9zdFByb2Nlc3NpbmcpJywgc3R5bGU6ICdzZWN0aW9uJyB9LFxyXG4gICAgICAgIHR5cGU6IFRleHR1cmUyRCxcclxuICAgIH0pXHJcbiAgICBzZXQgY29sb3JHcmFkaW5nTWFwKHZhbDogVGV4dHVyZTJEKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MuY29sb3JHcmFkaW5nLmNvbG9yR3JhZGluZ01hcCA9IHZhbDtcclxuICAgICAgICBpZiAoRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyeUVuYWJsZUVkaXRvclByZXZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgY29sb3JHcmFkaW5nTWFwKCk6IFRleHR1cmUyRCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmNvbG9yR3JhZGluZy5jb2xvckdyYWRpbmdNYXAhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZYQUFcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgZ3JvdXA6IHsgaWQ6ICdGWEFBJywgbmFtZTogJ0Zhc3QgQXBwcm94aW1hdGUgQW50aS1BbGlhc2luZyAoUG9zdFByb2Nlc3NpbmcpJywgc3R5bGU6ICdzZWN0aW9uJyB9LFxyXG4gICAgICAgIHR5cGU6IENDQm9vbGVhbixcclxuICAgIH0pXHJcbiAgICBzZXQgZnhhYUVuYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLmZ4YWEuZW5hYmxlZCA9IHZhbHVlO1xyXG4gICAgICAgIGlmIChFRElUT1IpIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJ5RW5hYmxlRWRpdG9yUHJldmlldygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBmeGFhRW5hYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5meGFhLmVuYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBncm91cDogeyBpZDogJ0ZYQUEnLCBuYW1lOiAnRmFzdCBBcHByb3hpbWF0ZSBBbnRpLUFsaWFzaW5nIChQb3N0UHJvY2Vzc2luZyknLCBzdHlsZTogJ3NlY3Rpb24nIH0sXHJcbiAgICAgICAgdHlwZTogTWF0ZXJpYWwsXHJcbiAgICB9KVxyXG4gICAgc2V0IGZ4YWFNYXRlcmlhbCh2YWx1ZTogTWF0ZXJpYWwpIHtcclxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MuZnhhYS5tYXRlcmlhbCA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zZXR0aW5ncy5meGFhLm1hdGVyaWFsID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKEVESVRPUikge1xyXG4gICAgICAgICAgICB0aGlzLl90cnlFbmFibGVFZGl0b3JQcmV2aWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGZ4YWFNYXRlcmlhbCgpOiBNYXRlcmlhbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmZ4YWEubWF0ZXJpYWwhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZTUlxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBncm91cDogeyBpZDogJ0ZTUicsIG5hbWU6ICdGaWRlbGl0eUZYIFN1cGVyIFJlc29sdXRpb24nLCBzdHlsZTogJ3NlY3Rpb24nIH0sXHJcbiAgICAgICAgdHlwZTogQ0NCb29sZWFuLFxyXG4gICAgfSlcclxuICAgIHNldCBmc3JFbmFibGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXR0aW5ncy5mc3IuZW5hYmxlZCA9IHZhbHVlO1xyXG4gICAgICAgIGlmIChFRElUT1IpIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJ5RW5hYmxlRWRpdG9yUHJldmlldygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBmc3JFbmFibGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmZzci5lbmFibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgZ3JvdXA6IHsgaWQ6ICdGU1InLCBuYW1lOiAnRmlkZWxpdHlGWCBTdXBlciBSZXNvbHV0aW9uJywgc3R5bGU6ICdzZWN0aW9uJyB9LFxyXG4gICAgICAgIHR5cGU6IE1hdGVyaWFsLFxyXG4gICAgfSlcclxuICAgIHNldCBmc3JNYXRlcmlhbCh2YWx1ZTogTWF0ZXJpYWwpIHtcclxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MuZnNyLm1hdGVyaWFsID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLmZzci5tYXRlcmlhbCA9IHZhbHVlO1xyXG4gICAgICAgIGlmIChFRElUT1IpIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJ5RW5hYmxlRWRpdG9yUHJldmlldygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBmc3JNYXRlcmlhbCgpOiBNYXRlcmlhbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmZzci5tYXRlcmlhbCE7XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBncm91cDogeyBpZDogJ0ZTUicsIG5hbWU6ICdGaWRlbGl0eUZYIFN1cGVyIFJlc29sdXRpb24nLCBzdHlsZTogJ3NlY3Rpb24nIH0sXHJcbiAgICAgICAgdHlwZTogQ0NGbG9hdCxcclxuICAgICAgICByYW5nZTogWzAsIDEsIDAuMDFdLFxyXG4gICAgICAgIHNsaWRlOiB0cnVlLFxyXG4gICAgfSlcclxuICAgIHNldCBmc3JTaGFycG5lc3ModmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLmZzci5zaGFycG5lc3MgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGdldCBmc3JTaGFycG5lc3MoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuZnNyLnNoYXJwbmVzcztcclxuICAgIH1cclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGdyb3VwOiB7IGlkOiAnVG9uZU1hcHBpbmcnLCBuYW1lOiAnVG9uZU1hcHBpbmcnLCBzdHlsZTogJ3NlY3Rpb24nIH0sXHJcbiAgICAgICAgdHlwZTogTWF0ZXJpYWwsXHJcbiAgICB9KVxyXG4gICAgc2V0IHRvbmVNYXBwaW5nTWF0ZXJpYWwodmFsdWU6IE1hdGVyaWFsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLnRvbmVNYXBwaW5nLm1hdGVyaWFsID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLnRvbmVNYXBwaW5nLm1hdGVyaWFsID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKEVESVRPUikge1xyXG4gICAgICAgICAgICB0aGlzLl90cnlFbmFibGVFZGl0b3JQcmV2aWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IHRvbmVNYXBwaW5nTWF0ZXJpYWwoKTogTWF0ZXJpYWwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy50b25lTWFwcGluZy5tYXRlcmlhbCE7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuIENvcHlyaWdodCAoYykgMjAyMS0yMDI0IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxyXG5cclxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbVxyXG5cclxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cclxuIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzXHJcbiBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXHJcbiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcbiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiBUSEUgU09GVFdBUkUuXHJcbiovXHJcblxyXG4vKipcclxuICogPT09PT09PT09PT09PT09PT09PT09PT09PSAhRE8gTk9UIENIQU5HRSBUSEUgRk9MTE9XSU5HIFNFQ1RJT04gTUFOVUFMTFkhID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICogVGhlIGZvbGxvd2luZyBzZWN0aW9uIGlzIGF1dG8tZ2VuZXJhdGVkLlxyXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09ICFETyBOT1QgQ0hBTkdFIFRIRSBGT0xMT1dJTkcgU0VDVElPTiBNQU5VQUxMWSEgPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKi9cclxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xyXG5pbXBvcnQgeyBNYXRlcmlhbCwgVGV4dHVyZTJELCBnZnggfSBmcm9tICdjYyc7XHJcblxyXG5jb25zdCB7IFNhbXBsZUNvdW50IH0gPSBnZng7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1TQUEge1xyXG4gICAgZW5hYmxlZDogYm9vbGVhbjsgLyogZmFsc2UgKi9cclxuICAgIHNhbXBsZUNvdW50OiBnZnguU2FtcGxlQ291bnQ7IC8qIFNhbXBsZUNvdW50Llg0ICovXHJcbiAgICBbbmFtZTogc3RyaW5nXTogdW5rbm93bjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VNU0FBKCk6IE1TQUEge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICBzYW1wbGVDb3VudDogU2FtcGxlQ291bnQuWDQsXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlsbFJlcXVpcmVkTVNBQSh2YWx1ZTogTVNBQSk6IHZvaWQge1xyXG4gICAgaWYgKHZhbHVlLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5zYW1wbGVDb3VudCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUuc2FtcGxlQ291bnQgPSBTYW1wbGVDb3VudC5YNDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIQkFPIHtcclxuICAgIGVuYWJsZWQ6IGJvb2xlYW47IC8qIGZhbHNlICovXHJcbiAgICByYWRpdXNTY2FsZTogbnVtYmVyOyAvKiAxICovXHJcbiAgICBhbmdsZUJpYXNEZWdyZWU6IG51bWJlcjsgLyogMTAgKi9cclxuICAgIGJsdXJTaGFycG5lc3M6IG51bWJlcjsgLyogMyAqL1xyXG4gICAgYW9TYXR1cmF0aW9uOiBudW1iZXI7IC8qIDEgKi9cclxuICAgIG5lZWRCbHVyOiBib29sZWFuOyAvKiBmYWxzZSAqL1xyXG4gICAgW25hbWU6IHN0cmluZ106IHVua25vd247XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlSEJBTygpOiBIQkFPIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgcmFkaXVzU2NhbGU6IDEsXHJcbiAgICAgICAgYW5nbGVCaWFzRGVncmVlOiAxMCxcclxuICAgICAgICBibHVyU2hhcnBuZXNzOiAzLFxyXG4gICAgICAgIGFvU2F0dXJhdGlvbjogMSxcclxuICAgICAgICBuZWVkQmx1cjogZmFsc2UsXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlsbFJlcXVpcmVkSEJBTyh2YWx1ZTogSEJBTyk6IHZvaWQge1xyXG4gICAgaWYgKHZhbHVlLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5yYWRpdXNTY2FsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUucmFkaXVzU2NhbGUgPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLmFuZ2xlQmlhc0RlZ3JlZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUuYW5nbGVCaWFzRGVncmVlID0gMTA7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUuYmx1clNoYXJwbmVzcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUuYmx1clNoYXJwbmVzcyA9IDM7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUuYW9TYXR1cmF0aW9uID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5hb1NhdHVyYXRpb24gPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLm5lZWRCbHVyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5uZWVkQmx1ciA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJsb29tIHtcclxuICAgIGVuYWJsZWQ6IGJvb2xlYW47IC8qIGZhbHNlICovXHJcbiAgICAvKiByZWZjb3VudCAqLyBtYXRlcmlhbDogTWF0ZXJpYWwgfCBudWxsO1xyXG4gICAgZW5hYmxlQWxwaGFNYXNrOiBib29sZWFuOyAvKiBmYWxzZSAqL1xyXG4gICAgaXRlcmF0aW9uczogbnVtYmVyOyAvKiAzICovXHJcbiAgICB0aHJlc2hvbGQ6IG51bWJlcjsgLyogMC44ICovXHJcbiAgICBpbnRlbnNpdHk6IG51bWJlcjsgLyogMi4zICovXHJcbiAgICBbbmFtZTogc3RyaW5nXTogdW5rbm93bjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VCbG9vbSgpOiBCbG9vbSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIG1hdGVyaWFsOiBudWxsLFxyXG4gICAgICAgIGVuYWJsZUFscGhhTWFzazogZmFsc2UsXHJcbiAgICAgICAgaXRlcmF0aW9uczogMyxcclxuICAgICAgICB0aHJlc2hvbGQ6IDAuOCxcclxuICAgICAgICBpbnRlbnNpdHk6IDIuMyxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxsUmVxdWlyZWRCbG9vbSh2YWx1ZTogQmxvb20pOiB2b2lkIHtcclxuICAgIGlmICh2YWx1ZS5lbmFibGVkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUubWF0ZXJpYWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLm1hdGVyaWFsID0gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5lbmFibGVBbHBoYU1hc2sgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLmVuYWJsZUFscGhhTWFzayA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLml0ZXJhdGlvbnMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLml0ZXJhdGlvbnMgPSAzO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLnRocmVzaG9sZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUudGhyZXNob2xkID0gMC44O1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLmludGVuc2l0eSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUuaW50ZW5zaXR5ID0gMi4zO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yR3JhZGluZyB7XHJcbiAgICBlbmFibGVkOiBib29sZWFuOyAvKiBmYWxzZSAqL1xyXG4gICAgLyogcmVmY291bnQgKi8gbWF0ZXJpYWw6IE1hdGVyaWFsIHwgbnVsbDtcclxuICAgIGNvbnRyaWJ1dGU6IG51bWJlcjsgLyogMSAqL1xyXG4gICAgLyogcmVmY291bnQgKi8gY29sb3JHcmFkaW5nTWFwOiBUZXh0dXJlMkQgfCBudWxsO1xyXG4gICAgW25hbWU6IHN0cmluZ106IHVua25vd247XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ29sb3JHcmFkaW5nKCk6IENvbG9yR3JhZGluZyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIG1hdGVyaWFsOiBudWxsLFxyXG4gICAgICAgIGNvbnRyaWJ1dGU6IDEsXHJcbiAgICAgICAgY29sb3JHcmFkaW5nTWFwOiBudWxsLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxSZXF1aXJlZENvbG9yR3JhZGluZyh2YWx1ZTogQ29sb3JHcmFkaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodmFsdWUuZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLm1hdGVyaWFsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5tYXRlcmlhbCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUuY29udHJpYnV0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUuY29udHJpYnV0ZSA9IDE7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUuY29sb3JHcmFkaW5nTWFwID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5jb2xvckdyYWRpbmdNYXAgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZTUiB7XHJcbiAgICBlbmFibGVkOiBib29sZWFuOyAvKiBmYWxzZSAqL1xyXG4gICAgLyogcmVmY291bnQgKi8gbWF0ZXJpYWw6IE1hdGVyaWFsIHwgbnVsbDtcclxuICAgIHNoYXJwbmVzczogbnVtYmVyOyAvKiAwLjggKi9cclxuICAgIFtuYW1lOiBzdHJpbmddOiB1bmtub3duO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUZTUigpOiBGU1Ige1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICBtYXRlcmlhbDogbnVsbCxcclxuICAgICAgICBzaGFycG5lc3M6IDAuOCxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxsUmVxdWlyZWRGU1IodmFsdWU6IEZTUik6IHZvaWQge1xyXG4gICAgaWYgKHZhbHVlLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5tYXRlcmlhbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUubWF0ZXJpYWwgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLnNoYXJwbmVzcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUuc2hhcnBuZXNzID0gMC44O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZYQUEge1xyXG4gICAgZW5hYmxlZDogYm9vbGVhbjsgLyogZmFsc2UgKi9cclxuICAgIC8qIHJlZmNvdW50ICovIG1hdGVyaWFsOiBNYXRlcmlhbCB8IG51bGw7XHJcbiAgICBbbmFtZTogc3RyaW5nXTogdW5rbm93bjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGWEFBKCk6IEZYQUEge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICBtYXRlcmlhbDogbnVsbCxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxsUmVxdWlyZWRGWEFBKHZhbHVlOiBGWEFBKTogdm9pZCB7XHJcbiAgICBpZiAodmFsdWUuZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLm1hdGVyaWFsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5tYXRlcmlhbCA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVG9uZU1hcHBpbmcge1xyXG4gICAgLyogcmVmY291bnQgKi8gbWF0ZXJpYWw6IE1hdGVyaWFsIHwgbnVsbDtcclxuICAgIFtuYW1lOiBzdHJpbmddOiB1bmtub3duO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZVRvbmVNYXBwaW5nKCk6IFRvbmVNYXBwaW5nIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWF0ZXJpYWw6IG51bGwsXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlsbFJlcXVpcmVkVG9uZU1hcHBpbmcodmFsdWU6IFRvbmVNYXBwaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodmFsdWUubWF0ZXJpYWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLm1hdGVyaWFsID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQaXBlbGluZVNldHRpbmdzIHtcclxuICAgIHJlYWRvbmx5IG1zYWE6IE1TQUE7XHJcbiAgICBlbmFibGVTaGFkaW5nU2NhbGU6IGJvb2xlYW47IC8qIGZhbHNlICovXHJcbiAgICBzaGFkaW5nU2NhbGU6IG51bWJlcjsgLyogMC41ICovXHJcbiAgICByZWFkb25seSBibG9vbTogQmxvb207XHJcbiAgICByZWFkb25seSB0b25lTWFwcGluZzogVG9uZU1hcHBpbmc7XHJcbiAgICByZWFkb25seSBjb2xvckdyYWRpbmc6IENvbG9yR3JhZGluZztcclxuICAgIHJlYWRvbmx5IGZzcjogRlNSO1xyXG4gICAgcmVhZG9ubHkgZnhhYTogRlhBQTtcclxuICAgIFtuYW1lOiBzdHJpbmddOiB1bmtub3duO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZVBpcGVsaW5lU2V0dGluZ3MoKTogUGlwZWxpbmVTZXR0aW5ncyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1zYWE6IG1ha2VNU0FBKCksXHJcbiAgICAgICAgZW5hYmxlU2hhZGluZ1NjYWxlOiBmYWxzZSxcclxuICAgICAgICBzaGFkaW5nU2NhbGU6IDAuNSxcclxuICAgICAgICBibG9vbTogbWFrZUJsb29tKCksXHJcbiAgICAgICAgdG9uZU1hcHBpbmc6IG1ha2VUb25lTWFwcGluZygpLFxyXG4gICAgICAgIGNvbG9yR3JhZGluZzogbWFrZUNvbG9yR3JhZGluZygpLFxyXG4gICAgICAgIGZzcjogbWFrZUZTUigpLFxyXG4gICAgICAgIGZ4YWE6IG1ha2VGWEFBKCksXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlsbFJlcXVpcmVkUGlwZWxpbmVTZXR0aW5ncyh2YWx1ZTogUGlwZWxpbmVTZXR0aW5ncyk6IHZvaWQge1xyXG4gICAgaWYgKCF2YWx1ZS5tc2FhKSB7XHJcbiAgICAgICAgKHZhbHVlLm1zYWEgYXMgTVNBQSkgPSBtYWtlTVNBQSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmaWxsUmVxdWlyZWRNU0FBKHZhbHVlLm1zYWEpO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLmVuYWJsZVNoYWRpbmdTY2FsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUuZW5hYmxlU2hhZGluZ1NjYWxlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUuc2hhZGluZ1NjYWxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5zaGFkaW5nU2NhbGUgPSAwLjU7XHJcbiAgICB9XHJcbiAgICBpZiAoIXZhbHVlLmJsb29tKSB7XHJcbiAgICAgICAgKHZhbHVlLmJsb29tIGFzIEJsb29tKSA9IG1ha2VCbG9vbSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmaWxsUmVxdWlyZWRCbG9vbSh2YWx1ZS5ibG9vbSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXZhbHVlLnRvbmVNYXBwaW5nKSB7XHJcbiAgICAgICAgKHZhbHVlLnRvbmVNYXBwaW5nIGFzIFRvbmVNYXBwaW5nKSA9IG1ha2VUb25lTWFwcGluZygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmaWxsUmVxdWlyZWRUb25lTWFwcGluZyh2YWx1ZS50b25lTWFwcGluZyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXZhbHVlLmNvbG9yR3JhZGluZykge1xyXG4gICAgICAgICh2YWx1ZS5jb2xvckdyYWRpbmcgYXMgQ29sb3JHcmFkaW5nKSA9IG1ha2VDb2xvckdyYWRpbmcoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsbFJlcXVpcmVkQ29sb3JHcmFkaW5nKHZhbHVlLmNvbG9yR3JhZGluZyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXZhbHVlLmZzcikge1xyXG4gICAgICAgICh2YWx1ZS5mc3IgYXMgRlNSKSA9IG1ha2VGU1IoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsbFJlcXVpcmVkRlNSKHZhbHVlLmZzcik7XHJcbiAgICB9XHJcbiAgICBpZiAoIXZhbHVlLmZ4YWEpIHtcclxuICAgICAgICAodmFsdWUuZnhhYSBhcyBGWEFBKSA9IG1ha2VGWEFBKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbGxSZXF1aXJlZEZYQUEodmFsdWUuZnhhYSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuIENvcHlyaWdodCAoYykgMjAyMS0yMDI0IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxyXG5cclxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cclxuXHJcbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcbiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvXHJcbiB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllc1xyXG4gb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxyXG4gc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG4gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxyXG4gVEhFIFNPRlRXQVJFLlxyXG4qL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIGFzc2VydCwgY2NsZWdhY3ksIGNsYW1wLCBnZW9tZXRyeSwgZ2Z4LCBMYXllcnMsIE1hdGVyaWFsLCBwaXBlbGluZSxcclxuICAgIFBpcGVsaW5lRXZlbnRQcm9jZXNzb3IsIFBpcGVsaW5lRXZlbnRUeXBlLCBSZWZsZWN0aW9uUHJvYmVNYW5hZ2VyLCByZW5kZXJlcixcclxuICAgIHJlbmRlcmluZywgc3lzLCBWZWMyLCBWZWMzLCBWZWM0LCB3YXJuLFxyXG59IGZyb20gJ2NjJztcclxuXHJcbmltcG9ydCB7IERFQlVHLCBFRElUT1IgfSBmcm9tICdjYy9lbnYnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIG1ha2VQaXBlbGluZVNldHRpbmdzLFxyXG4gICAgUGlwZWxpbmVTZXR0aW5ncyxcclxufSBmcm9tICcuL2J1aWx0aW4tcGlwZWxpbmUtdHlwZXMnO1xyXG5cclxuY29uc3QgeyBBQUJCLCBTcGhlcmUsIGludGVyc2VjdCB9ID0gZ2VvbWV0cnk7XHJcbmNvbnN0IHsgQ2xlYXJGbGFnQml0LCBDb2xvciwgRm9ybWF0LCBGb3JtYXRGZWF0dXJlQml0LCBMb2FkT3AsIFN0b3JlT3AsIFRleHR1cmVUeXBlLCBWaWV3cG9ydCB9ID0gZ2Z4O1xyXG5jb25zdCB7IHNjZW5lIH0gPSByZW5kZXJlcjtcclxuY29uc3QgeyBDYW1lcmFVc2FnZSwgQ1NNTGV2ZWwsIExpZ2h0VHlwZSB9ID0gc2NlbmU7XHJcblxyXG5mdW5jdGlvbiBmb3J3YXJkTmVlZENsZWFyQ29sb3IoY2FtZXJhOiByZW5kZXJlci5zY2VuZS5DYW1lcmEpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIShjYW1lcmEuY2xlYXJGbGFnICYgKENsZWFyRmxhZ0JpdC5DT0xPUiB8IChDbGVhckZsYWdCaXQuU1RFTkNJTCA8PCAxKSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDc21NYWluTGlnaHRWaWV3cG9ydChcclxuICAgIGxpZ2h0OiByZW5kZXJlci5zY2VuZS5EaXJlY3Rpb25hbExpZ2h0LFxyXG4gICAgdzogbnVtYmVyLFxyXG4gICAgaDogbnVtYmVyLFxyXG4gICAgbGV2ZWw6IG51bWJlcixcclxuICAgIHZwOiBnZnguVmlld3BvcnQsXHJcbiAgICBzY3JlZW5TcGFjZVNpZ25ZOiBudW1iZXIsXHJcbik6IHZvaWQge1xyXG4gICAgaWYgKGxpZ2h0LnNoYWRvd0ZpeGVkQXJlYSB8fCBsaWdodC5jc21MZXZlbCA9PT0gQ1NNTGV2ZWwuTEVWRUxfMSkge1xyXG4gICAgICAgIHZwLmxlZnQgPSAwO1xyXG4gICAgICAgIHZwLnRvcCA9IDA7XHJcbiAgICAgICAgdnAud2lkdGggPSBNYXRoLnRydW5jKHcpO1xyXG4gICAgICAgIHZwLmhlaWdodCA9IE1hdGgudHJ1bmMoaCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZwLmxlZnQgPSBNYXRoLnRydW5jKGxldmVsICUgMiAqIDAuNSAqIHcpO1xyXG4gICAgICAgIGlmIChzY3JlZW5TcGFjZVNpZ25ZID4gMCkge1xyXG4gICAgICAgICAgICB2cC50b3AgPSBNYXRoLnRydW5jKCgxIC0gTWF0aC5mbG9vcihsZXZlbCAvIDIpKSAqIDAuNSAqIGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZwLnRvcCA9IE1hdGgudHJ1bmMoTWF0aC5mbG9vcihsZXZlbCAvIDIpICogMC41ICogaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZwLndpZHRoID0gTWF0aC50cnVuYygwLjUgKiB3KTtcclxuICAgICAgICB2cC5oZWlnaHQgPSBNYXRoLnRydW5jKDAuNSAqIGgpO1xyXG4gICAgfVxyXG4gICAgdnAubGVmdCA9IE1hdGgubWF4KDAsIHZwLmxlZnQpO1xyXG4gICAgdnAudG9wID0gTWF0aC5tYXgoMCwgdnAudG9wKTtcclxuICAgIHZwLndpZHRoID0gTWF0aC5tYXgoMSwgdnAud2lkdGgpO1xyXG4gICAgdnAuaGVpZ2h0ID0gTWF0aC5tYXgoMSwgdnAuaGVpZ2h0KTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBpcGVsaW5lQ29uZmlncyB7XHJcbiAgICBpc1dlYiA9IGZhbHNlO1xyXG4gICAgaXNXZWJHTDEgPSBmYWxzZTtcclxuICAgIGlzV2ViR1BVID0gZmFsc2U7XHJcbiAgICBpc01vYmlsZSA9IGZhbHNlO1xyXG4gICAgaXNIRFIgPSBmYWxzZTtcclxuICAgIHVzZUZsb2F0T3V0cHV0ID0gZmFsc2U7XHJcbiAgICB0b25lTWFwcGluZ1R5cGUgPSAwOyAvLyAwOiBBQ0VTLCAxOiBOb25lXHJcbiAgICBzaGFkb3dFbmFibGVkID0gZmFsc2U7XHJcbiAgICBzaGFkb3dNYXBGb3JtYXQgPSBGb3JtYXQuUjMyRjtcclxuICAgIHNoYWRvd01hcFNpemUgPSBuZXcgVmVjMigxLCAxKTtcclxuICAgIHVzZVBsYW5hclNoYWRvdyA9IGZhbHNlO1xyXG4gICAgc2NyZWVuU3BhY2VTaWduWSA9IDE7XHJcbiAgICBzdXBwb3J0RGVwdGhTYW1wbGUgPSBmYWxzZTtcclxuICAgIG1vYmlsZU1heFNwb3RMaWdodFNoYWRvd01hcHMgPSAxO1xyXG5cclxuICAgIHBsYXRmb3JtID0gbmV3IFZlYzQoMCwgMCwgMCwgMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwUGlwZWxpbmVDb25maWdzKFxyXG4gICAgcHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSxcclxuICAgIGNvbmZpZ3M6IFBpcGVsaW5lQ29uZmlncyxcclxuKTogdm9pZCB7XHJcbiAgICBjb25zdCBzYW1wbGVGZWF0dXJlID0gRm9ybWF0RmVhdHVyZUJpdC5TQU1QTEVEX1RFWFRVUkUgfCBGb3JtYXRGZWF0dXJlQml0LkxJTkVBUl9GSUxURVI7XHJcbiAgICBjb25zdCBkZXZpY2UgPSBwcGwuZGV2aWNlO1xyXG4gICAgLy8gUGxhdGZvcm1cclxuICAgIGNvbmZpZ3MuaXNXZWIgPSAhc3lzLmlzTmF0aXZlO1xyXG4gICAgY29uZmlncy5pc1dlYkdMMSA9IGRldmljZS5nZnhBUEkgPT09IGdmeC5BUEkuV0VCR0w7XHJcbiAgICBjb25maWdzLmlzV2ViR1BVID0gZGV2aWNlLmdmeEFQSSA9PT0gZ2Z4LkFQSS5XRUJHUFU7XHJcbiAgICBjb25maWdzLmlzTW9iaWxlID0gc3lzLmlzTW9iaWxlO1xyXG5cclxuICAgIC8vIFJlbmRlcmluZ1xyXG4gICAgY29uZmlncy5pc0hEUiA9IHBwbC5waXBlbGluZVNjZW5lRGF0YS5pc0hEUjsgLy8gSGFzIHRvbmUgbWFwcGluZ1xyXG4gICAgY29uZmlncy51c2VGbG9hdE91dHB1dCA9IHBwbC5nZXRNYWNyb0Jvb2woJ0NDX1VTRV9GTE9BVF9PVVRQVVQnKTtcclxuICAgIGNvbmZpZ3MudG9uZU1hcHBpbmdUeXBlID0gcHBsLnBpcGVsaW5lU2NlbmVEYXRhLnBvc3RTZXR0aW5ncy50b25lTWFwcGluZ1R5cGU7XHJcbiAgICAvLyBTaGFkb3dcclxuICAgIGNvbnN0IHNoYWRvd0luZm8gPSBwcGwucGlwZWxpbmVTY2VuZURhdGEuc2hhZG93cztcclxuICAgIGNvbmZpZ3Muc2hhZG93RW5hYmxlZCA9IHNoYWRvd0luZm8uZW5hYmxlZDtcclxuICAgIGNvbmZpZ3Muc2hhZG93TWFwRm9ybWF0ID0gcGlwZWxpbmUuc3VwcG9ydHNSMzJGbG9hdFRleHR1cmUocHBsLmRldmljZSkgPyBGb3JtYXQuUjMyRiA6IEZvcm1hdC5SR0JBODtcclxuICAgIGNvbmZpZ3Muc2hhZG93TWFwU2l6ZS5zZXQoc2hhZG93SW5mby5zaXplKTtcclxuICAgIGNvbmZpZ3MudXNlUGxhbmFyU2hhZG93ID0gc2hhZG93SW5mby5lbmFibGVkICYmIHNoYWRvd0luZm8udHlwZSA9PT0gcmVuZGVyZXIuc2NlbmUuU2hhZG93VHlwZS5QbGFuYXI7XHJcbiAgICAvLyBEZXZpY2VcclxuICAgIGNvbmZpZ3Muc2NyZWVuU3BhY2VTaWduWSA9IHBwbC5kZXZpY2UuY2FwYWJpbGl0aWVzLnNjcmVlblNwYWNlU2lnblk7XHJcbiAgICBjb25maWdzLnN1cHBvcnREZXB0aFNhbXBsZSA9IChwcGwuZGV2aWNlLmdldEZvcm1hdEZlYXR1cmVzKEZvcm1hdC5ERVBUSF9TVEVOQ0lMKSAmIHNhbXBsZUZlYXR1cmUpID09PSBzYW1wbGVGZWF0dXJlO1xyXG4gICAgLy8gQ29uc3RhbnRzXHJcbiAgICBjb25zdCBzY3JlZW5TcGFjZVNpZ25ZID0gZGV2aWNlLmNhcGFiaWxpdGllcy5zY3JlZW5TcGFjZVNpZ25ZO1xyXG4gICAgY29uZmlncy5wbGF0Zm9ybS54ID0gY29uZmlncy5pc01vYmlsZSA/IDEuMCA6IDAuMDtcclxuICAgIGNvbmZpZ3MucGxhdGZvcm0udyA9IChzY3JlZW5TcGFjZVNpZ25ZICogMC41ICsgMC41KSA8PCAxIHwgKGRldmljZS5jYXBhYmlsaXRpZXMuY2xpcFNwYWNlU2lnblkgKiAwLjUgKyAwLjUpO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBpcGVsaW5lU2V0dGluZ3MyIGV4dGVuZHMgUGlwZWxpbmVTZXR0aW5ncyB7XHJcbiAgICBfcGFzc2VzPzogcmVuZGVyaW5nLlBpcGVsaW5lUGFzc0J1aWxkZXJbXTtcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFNldHRpbmdzID0gbWFrZVBpcGVsaW5lU2V0dGluZ3MoKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW1lcmFDb25maWdzIHtcclxuICAgIHNldHRpbmdzOiBQaXBlbGluZVNldHRpbmdzID0gZGVmYXVsdFNldHRpbmdzO1xyXG4gICAgLy8gV2luZG93XHJcbiAgICBpc01haW5HYW1lV2luZG93ID0gZmFsc2U7XHJcbiAgICByZW5kZXJXaW5kb3dJZCA9IDA7XHJcbiAgICAvLyBDYW1lcmFcclxuICAgIGNvbG9yTmFtZSA9ICcnO1xyXG4gICAgZGVwdGhTdGVuY2lsTmFtZSA9ICcnO1xyXG4gICAgLy8gUGlwZWxpbmVcclxuICAgIGVuYWJsZUZ1bGxQaXBlbGluZSA9IGZhbHNlO1xyXG4gICAgZW5hYmxlUHJvZmlsZXIgPSBmYWxzZTtcclxuICAgIHJlbWFpbmluZ1Bhc3NlcyA9IDA7XHJcbiAgICAvLyBTaGFkaW5nIFNjYWxlXHJcbiAgICBlbmFibGVTaGFkaW5nU2NhbGUgPSBmYWxzZTtcclxuICAgIHNoYWRpbmdTY2FsZSA9IDEuMDtcclxuICAgIG5hdGl2ZVdpZHRoID0gMTtcclxuICAgIG5hdGl2ZUhlaWdodCA9IDE7XHJcbiAgICB3aWR0aCA9IDE7IC8vIFNjYWxlZCB3aWR0aFxyXG4gICAgaGVpZ2h0ID0gMTsgLy8gU2NhbGVkIGhlaWdodFxyXG4gICAgLy8gUmFkaWFuY2VcclxuICAgIGVuYWJsZUhEUiA9IGZhbHNlO1xyXG4gICAgcmFkaWFuY2VGb3JtYXQgPSBnZnguRm9ybWF0LlJHQkE4O1xyXG4gICAgLy8gVG9uZSBNYXBwaW5nXHJcbiAgICBjb3B5QW5kVG9uZW1hcE1hdGVyaWFsOiBNYXRlcmlhbCB8IG51bGwgPSBudWxsO1xyXG4gICAgLy8gRGVwdGhcclxuICAgIC8qKiBAZW4gbXV0YWJsZSAqL1xyXG4gICAgZW5hYmxlU3RvcmVTY2VuZURlcHRoID0gZmFsc2U7XHJcbn1cclxuXHJcbmNvbnN0IHNDbGVhckNvbG9yVHJhbnNwYXJlbnRCbGFjayA9IG5ldyBDb2xvcigwLCAwLCAwLCAwKTtcclxuXHJcbmZ1bmN0aW9uIHNvcnRQaXBlbGluZVBhc3NCdWlsZGVyc0J5Q29uZmlnT3JkZXIocGFzc0J1aWxkZXJzOiByZW5kZXJpbmcuUGlwZWxpbmVQYXNzQnVpbGRlcltdKTogdm9pZCB7XHJcbiAgICBwYXNzQnVpbGRlcnMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIHJldHVybiBhLmdldENvbmZpZ09yZGVyKCkgLSBiLmdldENvbmZpZ09yZGVyKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc29ydFBpcGVsaW5lUGFzc0J1aWxkZXJzQnlSZW5kZXJPcmRlcihwYXNzQnVpbGRlcnM6IHJlbmRlcmluZy5QaXBlbGluZVBhc3NCdWlsZGVyW10pOiB2b2lkIHtcclxuICAgIHBhc3NCdWlsZGVycy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGEuZ2V0UmVuZGVyT3JkZXIoKSAtIGIuZ2V0UmVuZGVyT3JkZXIoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb3B5VG9TY3JlZW5QYXNzKFxyXG4gICAgcHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSxcclxuICAgIHBwbENvbmZpZ3M6IFJlYWRvbmx5PFBpcGVsaW5lQ29uZmlncz4sXHJcbiAgICBjYW1lcmFDb25maWdzOiBDYW1lcmFDb25maWdzLFxyXG4gICAgaW5wdXQ6IHN0cmluZyxcclxuKTogcmVuZGVyaW5nLkJhc2ljUmVuZGVyUGFzc0J1aWxkZXIge1xyXG4gICAgYXNzZXJ0KCEhY2FtZXJhQ29uZmlncy5jb3B5QW5kVG9uZW1hcE1hdGVyaWFsKTtcclxuICAgIGNvbnN0IHBhc3MgPSBwcGwuYWRkUmVuZGVyUGFzcyhcclxuICAgICAgICBjYW1lcmFDb25maWdzLm5hdGl2ZVdpZHRoLFxyXG4gICAgICAgIGNhbWVyYUNvbmZpZ3MubmF0aXZlSGVpZ2h0LFxyXG4gICAgICAgICdjYy10b25lLW1hcHBpbmcnKTtcclxuICAgIHBhc3MuYWRkUmVuZGVyVGFyZ2V0KFxyXG4gICAgICAgIGNhbWVyYUNvbmZpZ3MuY29sb3JOYW1lLFxyXG4gICAgICAgIExvYWRPcC5DTEVBUiwgU3RvcmVPcC5TVE9SRSxcclxuICAgICAgICBzQ2xlYXJDb2xvclRyYW5zcGFyZW50QmxhY2spO1xyXG4gICAgcGFzcy5hZGRUZXh0dXJlKGlucHV0LCAnaW5wdXRUZXh0dXJlJyk7XHJcbiAgICBwYXNzLnNldFZlYzQoJ2dfcGxhdGZvcm0nLCBwcGxDb25maWdzLnBsYXRmb3JtKTtcclxuICAgIHBhc3MuYWRkUXVldWUocmVuZGVyaW5nLlF1ZXVlSGludC5PUEFRVUUpXHJcbiAgICAgICAgLmFkZEZ1bGxzY3JlZW5RdWFkKGNhbWVyYUNvbmZpZ3MuY29weUFuZFRvbmVtYXBNYXRlcmlhbCwgMSk7XHJcbiAgICByZXR1cm4gcGFzcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBpbmdQb25nUmVuZGVyVGFyZ2V0KHByZXZOYW1lOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nLCBpZDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGlmIChwcmV2TmFtZS5zdGFydHNXaXRoKHByZWZpeCkpIHtcclxuICAgICAgICByZXR1cm4gYCR7cHJlZml4fSR7MSAtIE51bWJlcihwcmV2TmFtZS5jaGFyQXQocHJlZml4Lmxlbmd0aCkpfV8ke2lkfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBgJHtwcmVmaXh9MF8ke2lkfWA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGlwZWxpbmVDb250ZXh0IHtcclxuICAgIGNvbG9yTmFtZTogc3RyaW5nO1xyXG4gICAgZGVwdGhTdGVuY2lsTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5jbGFzcyBGb3J3YXJkTGlnaHRpbmcge1xyXG4gICAgLy8gQWN0aXZlIGxpZ2h0c1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsaWdodHM6IHJlbmRlcmVyLnNjZW5lLkxpZ2h0W10gPSBbXTtcclxuICAgIC8vIEFjdGl2ZSBzcG90IGxpZ2h0cyB3aXRoIHNoYWRvd3MgKE11dHVhbGx5IGV4Y2x1c2l2ZSB3aXRoIGBsaWdodHNgKVxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzaGFkb3dFbmFibGVkU3BvdExpZ2h0czogcmVuZGVyZXIuc2NlbmUuU3BvdExpZ2h0W10gPSBbXTtcclxuXHJcbiAgICAvLyBJbnRlcm5hbCBjYWNoZWQgcmVzb3VyY2VzXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9zcGhlcmUgPSBTcGhlcmUuY3JlYXRlKDAsIDAsIDAsIDEpO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfYm91bmRpbmdCb3ggPSBuZXcgQUFCQigpO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfcmFuZ2VkRGlyTGlnaHRCb3VuZGluZ0JveCA9IG5ldyBBQUJCKDAuMCwgMC4wLCAwLjAsIDAuNSwgMC41LCAwLjUpO1xyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIEludGVyZmFjZVxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgcHVibGljIGN1bGxMaWdodHMoc2NlbmU6IHJlbmRlcmVyLlJlbmRlclNjZW5lLCBmcnVzdHVtOiBnZW9tZXRyeS5GcnVzdHVtLCBjYW1lcmFQb3M/OiBWZWMzKTogdm9pZCB7XHJcbiAgICAgICAgLy8gVE9ETyh6aG91emhlbmdsb25nKTogTWFrZSBsaWdodCBjdWxsaW5nIG5hdGl2ZVxyXG4gICAgICAgIHRoaXMubGlnaHRzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5zaGFkb3dFbmFibGVkU3BvdExpZ2h0cy5sZW5ndGggPSAwO1xyXG4gICAgICAgIC8vIHNwb3QgbGlnaHRzXHJcbiAgICAgICAgZm9yIChjb25zdCBsaWdodCBvZiBzY2VuZS5zcG90TGlnaHRzKSB7XHJcbiAgICAgICAgICAgIGlmIChsaWdodC5iYWtlZCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgU3BoZXJlLnNldCh0aGlzLl9zcGhlcmUsIGxpZ2h0LnBvc2l0aW9uLngsIGxpZ2h0LnBvc2l0aW9uLnksIGxpZ2h0LnBvc2l0aW9uLnosIGxpZ2h0LnJhbmdlKTtcclxuICAgICAgICAgICAgaWYgKGludGVyc2VjdC5zcGhlcmVGcnVzdHVtKHRoaXMuX3NwaGVyZSwgZnJ1c3R1bSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChsaWdodC5zaGFkb3dFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFkb3dFbmFibGVkU3BvdExpZ2h0cy5wdXNoKGxpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saWdodHMucHVzaChsaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc3BoZXJlIGxpZ2h0c1xyXG4gICAgICAgIGZvciAoY29uc3QgbGlnaHQgb2Ygc2NlbmUuc3BoZXJlTGlnaHRzKSB7XHJcbiAgICAgICAgICAgIGlmIChsaWdodC5iYWtlZCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgU3BoZXJlLnNldCh0aGlzLl9zcGhlcmUsIGxpZ2h0LnBvc2l0aW9uLngsIGxpZ2h0LnBvc2l0aW9uLnksIGxpZ2h0LnBvc2l0aW9uLnosIGxpZ2h0LnJhbmdlKTtcclxuICAgICAgICAgICAgaWYgKGludGVyc2VjdC5zcGhlcmVGcnVzdHVtKHRoaXMuX3NwaGVyZSwgZnJ1c3R1bSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlnaHRzLnB1c2gobGlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHBvaW50IGxpZ2h0c1xyXG4gICAgICAgIGZvciAoY29uc3QgbGlnaHQgb2Ygc2NlbmUucG9pbnRMaWdodHMpIHtcclxuICAgICAgICAgICAgaWYgKGxpZ2h0LmJha2VkKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBTcGhlcmUuc2V0KHRoaXMuX3NwaGVyZSwgbGlnaHQucG9zaXRpb24ueCwgbGlnaHQucG9zaXRpb24ueSwgbGlnaHQucG9zaXRpb24ueiwgbGlnaHQucmFuZ2UpO1xyXG4gICAgICAgICAgICBpZiAoaW50ZXJzZWN0LnNwaGVyZUZydXN0dW0odGhpcy5fc3BoZXJlLCBmcnVzdHVtKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saWdodHMucHVzaChsaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmFuZ2VkIGRpciBsaWdodHNcclxuICAgICAgICBmb3IgKGNvbnN0IGxpZ2h0IG9mIHNjZW5lLnJhbmdlZERpckxpZ2h0cykge1xyXG4gICAgICAgICAgICBBQUJCLnRyYW5zZm9ybSh0aGlzLl9ib3VuZGluZ0JveCwgdGhpcy5fcmFuZ2VkRGlyTGlnaHRCb3VuZGluZ0JveCwgbGlnaHQubm9kZSEuZ2V0V29ybGRNYXRyaXgoKSk7XHJcbiAgICAgICAgICAgIGlmIChpbnRlcnNlY3QuYWFiYkZydXN0dW0odGhpcy5fYm91bmRpbmdCb3gsIGZydXN0dW0pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpZ2h0cy5wdXNoKGxpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNhbWVyYVBvcykge1xyXG4gICAgICAgICAgICB0aGlzLnNoYWRvd0VuYWJsZWRTcG90TGlnaHRzLnNvcnQoXHJcbiAgICAgICAgICAgICAgICAobGhzLCByaHMpID0+IFZlYzMuc3F1YXJlZERpc3RhbmNlKGNhbWVyYVBvcywgbGhzLnBvc2l0aW9uKSAtIFZlYzMuc3F1YXJlZERpc3RhbmNlKGNhbWVyYVBvcywgcmhzLnBvc2l0aW9uKSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9hZGRMaWdodFF1ZXVlcyhjYW1lcmE6IHJlbmRlcmVyLnNjZW5lLkNhbWVyYSwgcGFzczogcmVuZGVyaW5nLkJhc2ljUmVuZGVyUGFzc0J1aWxkZXIpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGxpZ2h0IG9mIHRoaXMubGlnaHRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXVlID0gcGFzcy5hZGRRdWV1ZShyZW5kZXJpbmcuUXVldWVIaW50LkJMRU5ELCAnZm9yd2FyZC1hZGQnKTtcclxuICAgICAgICAgICAgc3dpdGNoIChsaWdodC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIExpZ2h0VHlwZS5TUEhFUkU6XHJcbiAgICAgICAgICAgICAgICAgICAgcXVldWUubmFtZSA9ICdzcGhlcmUtbGlnaHQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBMaWdodFR5cGUuU1BPVDpcclxuICAgICAgICAgICAgICAgICAgICBxdWV1ZS5uYW1lID0gJ3Nwb3QtbGlnaHQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBMaWdodFR5cGUuUE9JTlQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcXVldWUubmFtZSA9ICdwb2ludC1saWdodCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIExpZ2h0VHlwZS5SQU5HRURfRElSRUNUSU9OQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgcXVldWUubmFtZSA9ICdyYW5nZWQtZGlyZWN0aW9uYWwtbGlnaHQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBxdWV1ZS5uYW1lID0gJ3Vua25vd24tbGlnaHQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHF1ZXVlLmFkZFNjZW5lKFxyXG4gICAgICAgICAgICAgICAgY2FtZXJhLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyaW5nLlNjZW5lRmxhZ3MuQkxFTkQsXHJcbiAgICAgICAgICAgICAgICBsaWdodCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWRkU3BvdGxpZ2h0U2hhZG93UGFzc2VzKFxyXG4gICAgICAgIHBwbDogcmVuZGVyaW5nLkJhc2ljUGlwZWxpbmUsXHJcbiAgICAgICAgY2FtZXJhOiByZW5kZXJlci5zY2VuZS5DYW1lcmEsXHJcbiAgICAgICAgbWF4TnVtU2hhZG93TWFwczogbnVtYmVyLFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIGZvciAoY29uc3QgbGlnaHQgb2YgdGhpcy5zaGFkb3dFbmFibGVkU3BvdExpZ2h0cykge1xyXG4gICAgICAgICAgICBjb25zdCBzaGFkb3dNYXBTaXplID0gcHBsLnBpcGVsaW5lU2NlbmVEYXRhLnNoYWRvd3Muc2l6ZTtcclxuICAgICAgICAgICAgY29uc3Qgc2hhZG93UGFzcyA9IHBwbC5hZGRSZW5kZXJQYXNzKHNoYWRvd01hcFNpemUueCwgc2hhZG93TWFwU2l6ZS55LCAnZGVmYXVsdCcpO1xyXG4gICAgICAgICAgICBzaGFkb3dQYXNzLm5hbWUgPSBgU3BvdExpZ2h0U2hhZG93UGFzcyR7aX1gO1xyXG4gICAgICAgICAgICBzaGFkb3dQYXNzLmFkZFJlbmRlclRhcmdldChgU3BvdFNoYWRvd01hcCR7aX1gLCBMb2FkT3AuQ0xFQVIsIFN0b3JlT3AuU1RPUkUsIG5ldyBDb2xvcigxLCAxLCAxLCAxKSk7XHJcbiAgICAgICAgICAgIHNoYWRvd1Bhc3MuYWRkRGVwdGhTdGVuY2lsKGBTcG90U2hhZG93RGVwdGgke2l9YCwgTG9hZE9wLkNMRUFSLCBTdG9yZU9wLkRJU0NBUkQpO1xyXG4gICAgICAgICAgICBzaGFkb3dQYXNzLmFkZFF1ZXVlKHJlbmRlcmluZy5RdWV1ZUhpbnQuTk9ORSwgJ3NoYWRvdy1jYXN0ZXInKVxyXG4gICAgICAgICAgICAgICAgLmFkZFNjZW5lKGNhbWVyYSwgcmVuZGVyaW5nLlNjZW5lRmxhZ3MuT1BBUVVFIHwgcmVuZGVyaW5nLlNjZW5lRmxhZ3MuTUFTSyB8IHJlbmRlcmluZy5TY2VuZUZsYWdzLlNIQURPV19DQVNURVIpXHJcbiAgICAgICAgICAgICAgICAudXNlTGlnaHRGcnVzdHVtKGxpZ2h0KTtcclxuICAgICAgICAgICAgKytpO1xyXG4gICAgICAgICAgICBpZiAoaSA+PSBtYXhOdW1TaGFkb3dNYXBzKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBhZGRMaWdodFF1ZXVlcyhwYXNzOiByZW5kZXJpbmcuQmFzaWNSZW5kZXJQYXNzQnVpbGRlcixcclxuICAgICAgICBjYW1lcmE6IHJlbmRlcmVyLnNjZW5lLkNhbWVyYSwgbWF4TnVtU2hhZG93TWFwczogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fYWRkTGlnaHRRdWV1ZXMoY2FtZXJhLCBwYXNzKTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgZm9yIChjb25zdCBsaWdodCBvZiB0aGlzLnNoYWRvd0VuYWJsZWRTcG90TGlnaHRzKSB7XHJcbiAgICAgICAgICAgIC8vIEFkZCBzcG90LWxpZ2h0IHBhc3NcclxuICAgICAgICAgICAgLy8gU2F2ZSBsYXN0IFJlbmRlclBhc3MgdG8gdGhlIGBwYXNzYCB2YXJpYWJsZVxyXG4gICAgICAgICAgICAvLyBUT0RPKHpob3V6aGVuZ2xvbmcpOiBGaXggcGVyIHF1ZXVlIGFkZFRleHR1cmVcclxuICAgICAgICAgICAgcGFzcy5hZGRUZXh0dXJlKGBTcG90U2hhZG93TWFwJHtpfWAsICdjY19zcG90U2hhZG93TWFwJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXVlID0gcGFzcy5hZGRRdWV1ZShyZW5kZXJpbmcuUXVldWVIaW50LkJMRU5ELCAnZm9yd2FyZC1hZGQnKTtcclxuICAgICAgICAgICAgcXVldWUuYWRkU2NlbmUoY2FtZXJhLCByZW5kZXJpbmcuU2NlbmVGbGFncy5CTEVORCwgbGlnaHQpO1xyXG4gICAgICAgICAgICArK2k7XHJcbiAgICAgICAgICAgIGlmIChpID49IG1heE51bVNoYWRvd01hcHMpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE5vdGljZTogRm9yd2FyZExpZ2h0aW5nIGNhbm5vdCBoYW5kbGUgYSBsb3Qgb2YgbGlnaHRzLlxyXG4gICAgLy8gSWYgdGhlcmUgYXJlIHRvbyBtYW55IGxpZ2h0cywgdGhlIHBlcmZvcm1hbmNlIHdpbGwgYmUgdmVyeSBwb29yLlxyXG4gICAgLy8gSWYgbWFueSBsaWdodHMgYXJlIG5lZWRlZCwgcGxlYXNlIGltcGxlbWVudCBhIGZvcndhcmQrIG9yIGRlZmVycmVkIHJlbmRlcmluZyBwaXBlbGluZS5cclxuICAgIHB1YmxpYyBhZGRMaWdodFBhc3NlcyhcclxuICAgICAgICBjb2xvck5hbWU6IHN0cmluZyxcclxuICAgICAgICBkZXB0aFN0ZW5jaWxOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgZGVwdGhTdGVuY2lsU3RvcmVPcDogZ2Z4LlN0b3JlT3AsXHJcbiAgICAgICAgaWQ6IG51bWJlciwgLy8gd2luZG93IGlkXHJcbiAgICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgICAgICBjYW1lcmE6IHJlbmRlcmVyLnNjZW5lLkNhbWVyYSxcclxuICAgICAgICB2aWV3cG9ydDogZ2Z4LlZpZXdwb3J0LFxyXG4gICAgICAgIHBwbDogcmVuZGVyaW5nLkJhc2ljUGlwZWxpbmUsXHJcbiAgICAgICAgcGFzczogcmVuZGVyaW5nLkJhc2ljUmVuZGVyUGFzc0J1aWxkZXIsXHJcbiAgICApOiByZW5kZXJpbmcuQmFzaWNSZW5kZXJQYXNzQnVpbGRlciB7XHJcbiAgICAgICAgdGhpcy5fYWRkTGlnaHRRdWV1ZXMoY2FtZXJhLCBwYXNzKTtcclxuXHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICBjb25zdCBzaGFkb3dNYXBTaXplID0gcHBsLnBpcGVsaW5lU2NlbmVEYXRhLnNoYWRvd3Muc2l6ZTtcclxuICAgICAgICBmb3IgKGNvbnN0IGxpZ2h0IG9mIHRoaXMuc2hhZG93RW5hYmxlZFNwb3RMaWdodHMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2hhZG93UGFzcyA9IHBwbC5hZGRSZW5kZXJQYXNzKHNoYWRvd01hcFNpemUueCwgc2hhZG93TWFwU2l6ZS55LCAnZGVmYXVsdCcpO1xyXG4gICAgICAgICAgICBzaGFkb3dQYXNzLm5hbWUgPSAnU3BvdGxpZ2h0U2hhZG93UGFzcyc7XHJcbiAgICAgICAgICAgIC8vIFJldXNlIGNzbSBzaGFkb3cgbWFwXHJcbiAgICAgICAgICAgIHNoYWRvd1Bhc3MuYWRkUmVuZGVyVGFyZ2V0KGBTaGFkb3dNYXAke2lkfWAsIExvYWRPcC5DTEVBUiwgU3RvcmVPcC5TVE9SRSwgbmV3IENvbG9yKDEsIDEsIDEsIDEpKTtcclxuICAgICAgICAgICAgc2hhZG93UGFzcy5hZGREZXB0aFN0ZW5jaWwoYFNoYWRvd0RlcHRoJHtpZH1gLCBMb2FkT3AuQ0xFQVIsIFN0b3JlT3AuRElTQ0FSRCk7XHJcbiAgICAgICAgICAgIHNoYWRvd1Bhc3MuYWRkUXVldWUocmVuZGVyaW5nLlF1ZXVlSGludC5OT05FLCAnc2hhZG93LWNhc3RlcicpXHJcbiAgICAgICAgICAgICAgICAuYWRkU2NlbmUoY2FtZXJhLCByZW5kZXJpbmcuU2NlbmVGbGFncy5PUEFRVUUgfCByZW5kZXJpbmcuU2NlbmVGbGFncy5NQVNLIHwgcmVuZGVyaW5nLlNjZW5lRmxhZ3MuU0hBRE9XX0NBU1RFUilcclxuICAgICAgICAgICAgICAgIC51c2VMaWdodEZydXN0dW0obGlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gQWRkIHNwb3QtbGlnaHQgcGFzc1xyXG4gICAgICAgICAgICAvLyBTYXZlIGxhc3QgUmVuZGVyUGFzcyB0byB0aGUgYHBhc3NgIHZhcmlhYmxlXHJcbiAgICAgICAgICAgICsrY291bnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlT3AgPSBjb3VudCA9PT0gdGhpcy5zaGFkb3dFbmFibGVkU3BvdExpZ2h0cy5sZW5ndGhcclxuICAgICAgICAgICAgICAgID8gZGVwdGhTdGVuY2lsU3RvcmVPcFxyXG4gICAgICAgICAgICAgICAgOiBTdG9yZU9wLlNUT1JFO1xyXG5cclxuICAgICAgICAgICAgcGFzcyA9IHBwbC5hZGRSZW5kZXJQYXNzKHdpZHRoLCBoZWlnaHQsICdkZWZhdWx0Jyk7XHJcbiAgICAgICAgICAgIHBhc3MubmFtZSA9ICdTcG90bGlnaHRXaXRoU2hhZG93TWFwJztcclxuICAgICAgICAgICAgcGFzcy5zZXRWaWV3cG9ydCh2aWV3cG9ydCk7XHJcbiAgICAgICAgICAgIHBhc3MuYWRkUmVuZGVyVGFyZ2V0KGNvbG9yTmFtZSwgTG9hZE9wLkxPQUQpO1xyXG4gICAgICAgICAgICBwYXNzLmFkZERlcHRoU3RlbmNpbChkZXB0aFN0ZW5jaWxOYW1lLCBMb2FkT3AuTE9BRCwgc3RvcmVPcCk7XHJcbiAgICAgICAgICAgIHBhc3MuYWRkVGV4dHVyZShgU2hhZG93TWFwJHtpZH1gLCAnY2Nfc3BvdFNoYWRvd01hcCcpO1xyXG4gICAgICAgICAgICBjb25zdCBxdWV1ZSA9IHBhc3MuYWRkUXVldWUocmVuZGVyaW5nLlF1ZXVlSGludC5CTEVORCwgJ2ZvcndhcmQtYWRkJyk7XHJcbiAgICAgICAgICAgIHF1ZXVlLmFkZFNjZW5lKFxyXG4gICAgICAgICAgICAgICAgY2FtZXJhLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyaW5nLlNjZW5lRmxhZ3MuQkxFTkQsXHJcbiAgICAgICAgICAgICAgICBsaWdodCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhc3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzTXVsdGlwbGVMaWdodFBhc3Nlc05lZWRlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaGFkb3dFbmFibGVkU3BvdExpZ2h0cy5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvcndhcmRQYXNzQ29uZmlncyB7XHJcbiAgICBlbmFibGVNYWluTGlnaHRTaGFkb3dNYXA6IGJvb2xlYW47XHJcbiAgICBlbmFibGVNYWluTGlnaHRQbGFuYXJTaGFkb3dNYXA6IGJvb2xlYW47XHJcbiAgICBlbmFibGVQbGFuYXJSZWZsZWN0aW9uUHJvYmU6IGJvb2xlYW47XHJcbiAgICBlbmFibGVNU0FBOiBib29sZWFuO1xyXG4gICAgZW5hYmxlU2luZ2xlRm9yd2FyZFBhc3M6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCdWlsdGluRm9yd2FyZFBhc3NCdWlsZGVyIGltcGxlbWVudHMgcmVuZGVyaW5nLlBpcGVsaW5lUGFzc0J1aWxkZXIge1xyXG4gICAgc3RhdGljIENvbmZpZ09yZGVyID0gMTAwO1xyXG4gICAgc3RhdGljIFJlbmRlck9yZGVyID0gMTAwO1xyXG4gICAgZ2V0Q29uZmlnT3JkZXIoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gQnVpbHRpbkZvcndhcmRQYXNzQnVpbGRlci5Db25maWdPcmRlcjtcclxuICAgIH1cclxuICAgIGdldFJlbmRlck9yZGVyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIEJ1aWx0aW5Gb3J3YXJkUGFzc0J1aWxkZXIuUmVuZGVyT3JkZXI7XHJcbiAgICB9XHJcbiAgICBjb25maWdDYW1lcmEoXHJcbiAgICAgICAgY2FtZXJhOiBSZWFkb25seTxyZW5kZXJlci5zY2VuZS5DYW1lcmE+LFxyXG4gICAgICAgIHBpcGVsaW5lQ29uZmlnczogUmVhZG9ubHk8UGlwZWxpbmVDb25maWdzPixcclxuICAgICAgICBjYW1lcmFDb25maWdzOiBDYW1lcmFDb25maWdzICYgRm9yd2FyZFBhc3NDb25maWdzKTogdm9pZCB7XHJcbiAgICAgICAgLy8gU2hhZG93XHJcbiAgICAgICAgY2FtZXJhQ29uZmlncy5lbmFibGVNYWluTGlnaHRTaGFkb3dNYXAgPSBwaXBlbGluZUNvbmZpZ3Muc2hhZG93RW5hYmxlZFxyXG4gICAgICAgICAgICAmJiAhcGlwZWxpbmVDb25maWdzLnVzZVBsYW5hclNoYWRvd1xyXG4gICAgICAgICAgICAmJiAhIWNhbWVyYS5zY2VuZVxyXG4gICAgICAgICAgICAmJiAhIWNhbWVyYS5zY2VuZS5tYWluTGlnaHRcclxuICAgICAgICAgICAgJiYgY2FtZXJhLnNjZW5lLm1haW5MaWdodC5zaGFkb3dFbmFibGVkO1xyXG5cclxuICAgICAgICBjYW1lcmFDb25maWdzLmVuYWJsZU1haW5MaWdodFBsYW5hclNoYWRvd01hcCA9IHBpcGVsaW5lQ29uZmlncy5zaGFkb3dFbmFibGVkXHJcbiAgICAgICAgICAgICYmIHBpcGVsaW5lQ29uZmlncy51c2VQbGFuYXJTaGFkb3dcclxuICAgICAgICAgICAgJiYgISFjYW1lcmEuc2NlbmVcclxuICAgICAgICAgICAgJiYgISFjYW1lcmEuc2NlbmUubWFpbkxpZ2h0XHJcbiAgICAgICAgICAgICYmIGNhbWVyYS5zY2VuZS5tYWluTGlnaHQuc2hhZG93RW5hYmxlZDtcclxuXHJcbiAgICAgICAgLy8gUmVmbGVjdGlvbiBQcm9iZVxyXG4gICAgICAgIGNhbWVyYUNvbmZpZ3MuZW5hYmxlUGxhbmFyUmVmbGVjdGlvblByb2JlID0gY2FtZXJhQ29uZmlncy5pc01haW5HYW1lV2luZG93XHJcbiAgICAgICAgICAgIHx8IGNhbWVyYS5jYW1lcmFVc2FnZSA9PT0gQ2FtZXJhVXNhZ2UuU0NFTkVfVklFV1xyXG4gICAgICAgICAgICB8fCBjYW1lcmEuY2FtZXJhVXNhZ2UgPT09IENhbWVyYVVzYWdlLkdBTUVfVklFVztcclxuXHJcbiAgICAgICAgLy8gTVNBQVxyXG4gICAgICAgIGNhbWVyYUNvbmZpZ3MuZW5hYmxlTVNBQSA9IGNhbWVyYUNvbmZpZ3Muc2V0dGluZ3MubXNhYS5lbmFibGVkXHJcbiAgICAgICAgICAgICYmICFjYW1lcmFDb25maWdzLmVuYWJsZVN0b3JlU2NlbmVEZXB0aCAvLyBDYW5ub3Qgc3RvcmUgTVMgZGVwdGgsIHJlc29sdmUgZGVwdGggaXMgYWxzbyBub3QgY3Jvc3MtcGxhdGZvcm1cclxuICAgICAgICAgICAgJiYgIXBpcGVsaW5lQ29uZmlncy5pc1dlYiAvLyBUT0RPKHpob3V6aGVuZ2xvbmcpOiByZW1vdmUgdGhpcyBjb25zdHJhaW50XHJcbiAgICAgICAgICAgICYmICFwaXBlbGluZUNvbmZpZ3MuaXNXZWJHTDE7XHJcblxyXG4gICAgICAgIC8vIEZvcndhcmQgcmVuZGVyaW5nIChEZXBlbmQgb24gTVNBQSBhbmQgVEJSKVxyXG4gICAgICAgIGNhbWVyYUNvbmZpZ3MuZW5hYmxlU2luZ2xlRm9yd2FyZFBhc3NcclxuICAgICAgICAgICAgPSBwaXBlbGluZUNvbmZpZ3MuaXNNb2JpbGUgfHwgY2FtZXJhQ29uZmlncy5lbmFibGVNU0FBO1xyXG5cclxuICAgICAgICArK2NhbWVyYUNvbmZpZ3MucmVtYWluaW5nUGFzc2VzO1xyXG4gICAgfVxyXG4gICAgd2luZG93UmVzaXplKFxyXG4gICAgICAgIHBwbDogcmVuZGVyaW5nLkJhc2ljUGlwZWxpbmUsXHJcbiAgICAgICAgcHBsQ29uZmlnczogUmVhZG9ubHk8UGlwZWxpbmVDb25maWdzPixcclxuICAgICAgICBjYW1lcmFDb25maWdzOiBSZWFkb25seTxDYW1lcmFDb25maWdzICYgRm9yd2FyZFBhc3NDb25maWdzPixcclxuICAgICAgICB3aW5kb3c6IHJlbmRlcmVyLlJlbmRlcldpbmRvdyxcclxuICAgICAgICBjYW1lcmE6IHJlbmRlcmVyLnNjZW5lLkNhbWVyYSxcclxuICAgICAgICBuYXRpdmVXaWR0aDogbnVtYmVyLFxyXG4gICAgICAgIG5hdGl2ZUhlaWdodDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgUmVzb3VyY2VGbGFncyA9IHJlbmRlcmluZy5SZXNvdXJjZUZsYWdzO1xyXG4gICAgICAgIGNvbnN0IFJlc291cmNlUmVzaWRlbmN5ID0gcmVuZGVyaW5nLlJlc291cmNlUmVzaWRlbmN5O1xyXG4gICAgICAgIGNvbnN0IGlkID0gd2luZG93LnJlbmRlcldpbmRvd0lkO1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gY2FtZXJhQ29uZmlncy5zZXR0aW5ncztcclxuXHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSBjYW1lcmFDb25maWdzLmVuYWJsZVNoYWRpbmdTY2FsZVxyXG4gICAgICAgICAgICA/IE1hdGgubWF4KE1hdGguZmxvb3IobmF0aXZlV2lkdGggKiBjYW1lcmFDb25maWdzLnNoYWRpbmdTY2FsZSksIDEpXHJcbiAgICAgICAgICAgIDogbmF0aXZlV2lkdGg7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gY2FtZXJhQ29uZmlncy5lbmFibGVTaGFkaW5nU2NhbGVcclxuICAgICAgICAgICAgPyBNYXRoLm1heChNYXRoLmZsb29yKG5hdGl2ZUhlaWdodCAqIGNhbWVyYUNvbmZpZ3Muc2hhZGluZ1NjYWxlKSwgMSlcclxuICAgICAgICAgICAgOiBuYXRpdmVIZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vIE1zYWFSYWRpYW5jZVxyXG4gICAgICAgIGlmIChjYW1lcmFDb25maWdzLmVuYWJsZU1TQUEpIHtcclxuICAgICAgICAgICAgLy8gTm90aWNlOiBXZSBuZXZlciBzdG9yZSBtdWx0aXNhbXBsZSByZXN1bHRzLlxyXG4gICAgICAgICAgICAvLyBUaGVzZSBzYW1wbGVzIGFyZSBhbHdheXMgcmVzb2x2ZWQgYW5kIGRpc2NhcmRlZCBhdCB0aGUgZW5kIG9mIHRoZSByZW5kZXIgcGFzcy5cclxuICAgICAgICAgICAgLy8gU28gdGhlIFJlc291cmNlUmVzaWRlbmN5IHNob3VsZCBiZSBNRU1PUllMRVNTLlxyXG4gICAgICAgICAgICBpZiAoY2FtZXJhQ29uZmlncy5lbmFibGVIRFIpIHtcclxuICAgICAgICAgICAgICAgIHBwbC5hZGRUZXh0dXJlKGBNc2FhUmFkaWFuY2Uke2lkfWAsIFRleHR1cmVUeXBlLlRFWDJELCBjYW1lcmFDb25maWdzLnJhZGlhbmNlRm9ybWF0LCB3aWR0aCwgaGVpZ2h0LCAxLCAxLCAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLm1zYWEuc2FtcGxlQ291bnQsIFJlc291cmNlRmxhZ3MuQ09MT1JfQVRUQUNITUVOVCwgUmVzb3VyY2VSZXNpZGVuY3kuTUVNT1JZTEVTUyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcGwuYWRkVGV4dHVyZShgTXNhYVJhZGlhbmNlJHtpZH1gLCBUZXh0dXJlVHlwZS5URVgyRCwgRm9ybWF0LlJHQkE4LCB3aWR0aCwgaGVpZ2h0LCAxLCAxLCAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLm1zYWEuc2FtcGxlQ291bnQsIFJlc291cmNlRmxhZ3MuQ09MT1JfQVRUQUNITUVOVCwgUmVzb3VyY2VSZXNpZGVuY3kuTUVNT1JZTEVTUyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHBsLmFkZFRleHR1cmUoYE1zYWFEZXB0aFN0ZW5jaWwke2lkfWAsIFRleHR1cmVUeXBlLlRFWDJELCBGb3JtYXQuREVQVEhfU1RFTkNJTCwgd2lkdGgsIGhlaWdodCwgMSwgMSwgMSxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzLm1zYWEuc2FtcGxlQ291bnQsIFJlc291cmNlRmxhZ3MuREVQVEhfU1RFTkNJTF9BVFRBQ0hNRU5ULCBSZXNvdXJjZVJlc2lkZW5jeS5NRU1PUllMRVNTKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE1haW5saWdodCBTaGFkb3dNYXBcclxuICAgICAgICBwcGwuYWRkUmVuZGVyVGFyZ2V0KFxyXG4gICAgICAgICAgICBgU2hhZG93TWFwJHtpZH1gLFxyXG4gICAgICAgICAgICBwcGxDb25maWdzLnNoYWRvd01hcEZvcm1hdCxcclxuICAgICAgICAgICAgcHBsQ29uZmlncy5zaGFkb3dNYXBTaXplLngsXHJcbiAgICAgICAgICAgIHBwbENvbmZpZ3Muc2hhZG93TWFwU2l6ZS55LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcHBsLmFkZERlcHRoU3RlbmNpbChcclxuICAgICAgICAgICAgYFNoYWRvd0RlcHRoJHtpZH1gLFxyXG4gICAgICAgICAgICBGb3JtYXQuREVQVEhfU1RFTkNJTCxcclxuICAgICAgICAgICAgcHBsQ29uZmlncy5zaGFkb3dNYXBTaXplLngsXHJcbiAgICAgICAgICAgIHBwbENvbmZpZ3Muc2hhZG93TWFwU2l6ZS55LFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIFNwb3QtbGlnaHQgc2hhZG93IG1hcHNcclxuICAgICAgICBpZiAoY2FtZXJhQ29uZmlncy5lbmFibGVTaW5nbGVGb3J3YXJkUGFzcykge1xyXG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IHBwbENvbmZpZ3MubW9iaWxlTWF4U3BvdExpZ2h0U2hhZG93TWFwcztcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgIT09IGNvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgICAgIHBwbC5hZGRSZW5kZXJUYXJnZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgYFNwb3RTaGFkb3dNYXAke2l9YCxcclxuICAgICAgICAgICAgICAgICAgICBwcGxDb25maWdzLnNoYWRvd01hcEZvcm1hdCxcclxuICAgICAgICAgICAgICAgICAgICBwcGxDb25maWdzLnNoYWRvd01hcFNpemUueCxcclxuICAgICAgICAgICAgICAgICAgICBwcGxDb25maWdzLnNoYWRvd01hcFNpemUueSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBwcGwuYWRkRGVwdGhTdGVuY2lsKFxyXG4gICAgICAgICAgICAgICAgICAgIGBTcG90U2hhZG93RGVwdGgke2l9YCxcclxuICAgICAgICAgICAgICAgICAgICBGb3JtYXQuREVQVEhfU1RFTkNJTCxcclxuICAgICAgICAgICAgICAgICAgICBwcGxDb25maWdzLnNoYWRvd01hcFNpemUueCxcclxuICAgICAgICAgICAgICAgICAgICBwcGxDb25maWdzLnNoYWRvd01hcFNpemUueSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXR1cChcclxuICAgICAgICBwcGw6IHJlbmRlcmluZy5CYXNpY1BpcGVsaW5lLFxyXG4gICAgICAgIHBwbENvbmZpZ3M6IFJlYWRvbmx5PFBpcGVsaW5lQ29uZmlncz4sXHJcbiAgICAgICAgY2FtZXJhQ29uZmlnczogQ2FtZXJhQ29uZmlncyAmIEZvcndhcmRQYXNzQ29uZmlncyxcclxuICAgICAgICBjYW1lcmE6IHJlbmRlcmVyLnNjZW5lLkNhbWVyYSxcclxuICAgICAgICBjb250ZXh0OiBQaXBlbGluZUNvbnRleHQpOiByZW5kZXJpbmcuQmFzaWNSZW5kZXJQYXNzQnVpbGRlciB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBjYW1lcmEud2luZG93LnJlbmRlcldpbmRvd0lkO1xyXG5cclxuICAgICAgICBjb25zdCBzY2VuZSA9IGNhbWVyYS5zY2VuZSE7XHJcbiAgICAgICAgY29uc3QgbWFpbkxpZ2h0ID0gc2NlbmUubWFpbkxpZ2h0O1xyXG5cclxuICAgICAgICAtLWNhbWVyYUNvbmZpZ3MucmVtYWluaW5nUGFzc2VzO1xyXG4gICAgICAgIGFzc2VydChjYW1lcmFDb25maWdzLnJlbWFpbmluZ1Bhc3NlcyA+PSAwKTtcclxuXHJcbiAgICAgICAgLy8gRm9yd2FyZCBMaWdodGluZyAoTGlnaHQgQ3VsbGluZylcclxuICAgICAgICB0aGlzLmZvcndhcmRMaWdodGluZy5jdWxsTGlnaHRzKHNjZW5lLCBjYW1lcmEuZnJ1c3R1bSk7XHJcblxyXG4gICAgICAgIC8vIE1haW4gRGlyZWN0aW9uYWwgbGlnaHQgQ1NNIFNoYWRvdyBNYXBcclxuICAgICAgICBpZiAoY2FtZXJhQ29uZmlncy5lbmFibGVNYWluTGlnaHRTaGFkb3dNYXApIHtcclxuICAgICAgICAgICAgYXNzZXJ0KCEhbWFpbkxpZ2h0KTtcclxuICAgICAgICAgICAgdGhpcy5fYWRkQ2FzY2FkZWRTaGFkb3dNYXBQYXNzKHBwbCwgcHBsQ29uZmlncywgaWQsIG1haW5MaWdodCwgY2FtZXJhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNwb3QgbGlnaHQgc2hhZG93IG1hcHMgKE1vYmlsZSBvciBNU0FBKVxyXG4gICAgICAgIGlmIChjYW1lcmFDb25maWdzLmVuYWJsZVNpbmdsZUZvcndhcmRQYXNzKSB7XHJcbiAgICAgICAgICAgIC8vIEN1cnJlbnRseSwgb25seSBzdXBwb3J0IDEgc3BvdCBsaWdodCB3aXRoIHNoYWRvdyBtYXAgb24gbW9iaWxlIHBsYXRmb3JtLlxyXG4gICAgICAgICAgICAvLyBUT0RPKHpob3V6aGVuZ2xvbmcpOiBSZWxleCB0aGlzIGxpbWl0YXRpb24uXHJcbiAgICAgICAgICAgIHRoaXMuZm9yd2FyZExpZ2h0aW5nLmFkZFNwb3RsaWdodFNoYWRvd1Bhc3NlcyhcclxuICAgICAgICAgICAgICAgIHBwbCwgY2FtZXJhLCBwcGxDb25maWdzLm1vYmlsZU1heFNwb3RMaWdodFNoYWRvd01hcHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fdHJ5QWRkUmVmbGVjdGlvblByb2JlUGFzc2VzKHBwbCwgY2FtZXJhQ29uZmlncywgaWQsIG1haW5MaWdodCwgY2FtZXJhLnNjZW5lKTtcclxuXHJcbiAgICAgICAgaWYgKGNhbWVyYUNvbmZpZ3MucmVtYWluaW5nUGFzc2VzID4gMCB8fCBjYW1lcmFDb25maWdzLmVuYWJsZVNoYWRpbmdTY2FsZSkge1xyXG4gICAgICAgICAgICBjb250ZXh0LmNvbG9yTmFtZSA9IGNhbWVyYUNvbmZpZ3MuZW5hYmxlU2hhZGluZ1NjYWxlXHJcbiAgICAgICAgICAgICAgICA/IGBTY2FsZWRSYWRpYW5jZTBfJHtpZH1gXHJcbiAgICAgICAgICAgICAgICA6IGBSYWRpYW5jZTBfJHtpZH1gO1xyXG4gICAgICAgICAgICBjb250ZXh0LmRlcHRoU3RlbmNpbE5hbWUgPSBjYW1lcmFDb25maWdzLmVuYWJsZVNoYWRpbmdTY2FsZVxyXG4gICAgICAgICAgICAgICAgPyBgU2NhbGVkU2NlbmVEZXB0aF8ke2lkfWBcclxuICAgICAgICAgICAgICAgIDogYFNjZW5lRGVwdGhfJHtpZH1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuY29sb3JOYW1lID0gY2FtZXJhQ29uZmlncy5jb2xvck5hbWU7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZGVwdGhTdGVuY2lsTmFtZSA9IGNhbWVyYUNvbmZpZ3MuZGVwdGhTdGVuY2lsTmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBhc3MgPSB0aGlzLl9hZGRGb3J3YXJkUmFkaWFuY2VQYXNzZXMoXHJcbiAgICAgICAgICAgIHBwbCwgcHBsQ29uZmlncywgY2FtZXJhQ29uZmlncywgaWQsIGNhbWVyYSxcclxuICAgICAgICAgICAgY2FtZXJhQ29uZmlncy53aWR0aCwgY2FtZXJhQ29uZmlncy5oZWlnaHQsIG1haW5MaWdodCxcclxuICAgICAgICAgICAgY29udGV4dC5jb2xvck5hbWUsIGNvbnRleHQuZGVwdGhTdGVuY2lsTmFtZSxcclxuICAgICAgICAgICAgIWNhbWVyYUNvbmZpZ3MuZW5hYmxlTVNBQSxcclxuICAgICAgICAgICAgY2FtZXJhQ29uZmlncy5lbmFibGVTdG9yZVNjZW5lRGVwdGggPyBTdG9yZU9wLlNUT1JFIDogU3RvcmVPcC5ESVNDQVJEKTtcclxuXHJcbiAgICAgICAgaWYgKCFjYW1lcmFDb25maWdzLmVuYWJsZVN0b3JlU2NlbmVEZXB0aCkge1xyXG4gICAgICAgICAgICBjb250ZXh0LmRlcHRoU3RlbmNpbE5hbWUgPSAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjYW1lcmFDb25maWdzLnJlbWFpbmluZ1Bhc3NlcyA9PT0gMCAmJiBjYW1lcmFDb25maWdzLmVuYWJsZVNoYWRpbmdTY2FsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWRkQ29weVRvU2NyZWVuUGFzcyhwcGwsIHBwbENvbmZpZ3MsIGNhbWVyYUNvbmZpZ3MsIGNvbnRleHQuY29sb3JOYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFzcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9hZGRDYXNjYWRlZFNoYWRvd01hcFBhc3MoXHJcbiAgICAgICAgcHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSxcclxuICAgICAgICBwcGxDb25maWdzOiBSZWFkb25seTxQaXBlbGluZUNvbmZpZ3M+LFxyXG4gICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgbGlnaHQ6IHJlbmRlcmVyLnNjZW5lLkRpcmVjdGlvbmFsTGlnaHQsXHJcbiAgICAgICAgY2FtZXJhOiByZW5kZXJlci5zY2VuZS5DYW1lcmEsXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBRdWV1ZUhpbnQgPSByZW5kZXJpbmcuUXVldWVIaW50O1xyXG4gICAgICAgIGNvbnN0IFNjZW5lRmxhZ3MgPSByZW5kZXJpbmcuU2NlbmVGbGFncztcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gRHluYW1pYyBzdGF0ZXNcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgY29uc3Qgc2hhZG93U2l6ZSA9IHBwbC5waXBlbGluZVNjZW5lRGF0YS5zaGFkb3dzLnNpemU7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSBzaGFkb3dTaXplLng7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gc2hhZG93U2l6ZS55O1xyXG5cclxuICAgICAgICBjb25zdCB2aWV3cG9ydCA9IHRoaXMuX3ZpZXdwb3J0O1xyXG4gICAgICAgIHZpZXdwb3J0LmxlZnQgPSB2aWV3cG9ydC50b3AgPSAwO1xyXG4gICAgICAgIHZpZXdwb3J0LndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdmlld3BvcnQuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gQ1NNIFNoYWRvdyBNYXBcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgY29uc3QgcGFzcyA9IHBwbC5hZGRSZW5kZXJQYXNzKHdpZHRoLCBoZWlnaHQsICdkZWZhdWx0Jyk7XHJcbiAgICAgICAgcGFzcy5uYW1lID0gJ0Nhc2NhZGVkU2hhZG93TWFwJztcclxuICAgICAgICBwYXNzLmFkZFJlbmRlclRhcmdldChgU2hhZG93TWFwJHtpZH1gLCBMb2FkT3AuQ0xFQVIsIFN0b3JlT3AuU1RPUkUsIG5ldyBDb2xvcigxLCAxLCAxLCAxKSk7XHJcbiAgICAgICAgcGFzcy5hZGREZXB0aFN0ZW5jaWwoYFNoYWRvd0RlcHRoJHtpZH1gLCBMb2FkT3AuQ0xFQVIsIFN0b3JlT3AuRElTQ0FSRCk7XHJcbiAgICAgICAgY29uc3QgY3NtTGV2ZWwgPSBwcGwucGlwZWxpbmVTY2VuZURhdGEuY3NtU3VwcG9ydGVkID8gbGlnaHQuY3NtTGV2ZWwgOiAxO1xyXG5cclxuICAgICAgICAvLyBBZGQgc2hhZG93IG1hcCB2aWV3cG9ydHNcclxuICAgICAgICBmb3IgKGxldCBsZXZlbCA9IDA7IGxldmVsICE9PSBjc21MZXZlbDsgKytsZXZlbCkge1xyXG4gICAgICAgICAgICBnZXRDc21NYWluTGlnaHRWaWV3cG9ydChsaWdodCwgd2lkdGgsIGhlaWdodCwgbGV2ZWwsIHRoaXMuX3ZpZXdwb3J0LCBwcGxDb25maWdzLnNjcmVlblNwYWNlU2lnblkpO1xyXG4gICAgICAgICAgICBjb25zdCBxdWV1ZSA9IHBhc3MuYWRkUXVldWUoUXVldWVIaW50Lk5PTkUsICdzaGFkb3ctY2FzdGVyJyk7XHJcbiAgICAgICAgICAgIGlmICghcHBsQ29uZmlncy5pc1dlYkdQVSkgeyAvLyBUZW1wb3Jhcnkgd29ya2Fyb3VuZCBmb3IgV2ViR1BVXHJcbiAgICAgICAgICAgICAgICBxdWV1ZS5zZXRWaWV3cG9ydCh0aGlzLl92aWV3cG9ydCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcXVldWVcclxuICAgICAgICAgICAgICAgIC5hZGRTY2VuZShjYW1lcmEsIFNjZW5lRmxhZ3MuT1BBUVVFIHwgU2NlbmVGbGFncy5NQVNLIHwgU2NlbmVGbGFncy5TSEFET1dfQ0FTVEVSKVxyXG4gICAgICAgICAgICAgICAgLnVzZUxpZ2h0RnJ1c3R1bShsaWdodCwgbGV2ZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgX3RyeUFkZFJlZmxlY3Rpb25Qcm9iZVBhc3NlcyhcclxuICAgICAgICBwcGw6IHJlbmRlcmluZy5CYXNpY1BpcGVsaW5lLFxyXG4gICAgICAgIGNhbWVyYUNvbmZpZ3M6IFJlYWRvbmx5PENhbWVyYUNvbmZpZ3MgJiBGb3J3YXJkUGFzc0NvbmZpZ3M+LFxyXG4gICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgbWFpbkxpZ2h0OiByZW5kZXJlci5zY2VuZS5EaXJlY3Rpb25hbExpZ2h0IHwgbnVsbCxcclxuICAgICAgICBzY2VuZTogcmVuZGVyZXIuUmVuZGVyU2NlbmUgfCBudWxsLFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgcmVmbGVjdGlvblByb2JlTWFuYWdlciA9IGNjbGVnYWN5LmludGVybmFsLnJlZmxlY3Rpb25Qcm9iZU1hbmFnZXIgYXMgUmVmbGVjdGlvblByb2JlTWFuYWdlciB8IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAoIXJlZmxlY3Rpb25Qcm9iZU1hbmFnZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBSZXNvdXJjZVJlc2lkZW5jeSA9IHJlbmRlcmluZy5SZXNvdXJjZVJlc2lkZW5jeTtcclxuICAgICAgICBjb25zdCBwcm9iZXMgPSByZWZsZWN0aW9uUHJvYmVNYW5hZ2VyLmdldFByb2JlcygpO1xyXG4gICAgICAgIGNvbnN0IG1heFByb2JlQ291bnQgPSA0O1xyXG4gICAgICAgIGxldCBwcm9iZUlEID0gMDtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb2JlIG9mIHByb2Jlcykge1xyXG4gICAgICAgICAgICBpZiAoIXByb2JlLm5lZWRSZW5kZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGFyZWEgPSBwcm9iZS5yZW5kZXJBcmVhKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoTWF0aC5mbG9vcihhcmVhLngpLCAxKTtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoTWF0aC5mbG9vcihhcmVhLnkpLCAxKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9iZS5wcm9iZVR5cGUgPT09IHJlbmRlcmVyLnNjZW5lLlByb2JlVHlwZS5QTEFOQVIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghY2FtZXJhQ29uZmlncy5lbmFibGVQbGFuYXJSZWZsZWN0aW9uUHJvYmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHdpbmRvdzogcmVuZGVyZXIuUmVuZGVyV2luZG93ID0gcHJvYmUucmVhbHRpbWVQbGFuYXJUZXh0dXJlIS53aW5kb3chO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JOYW1lID0gYFBsYW5hclByb2JlUlQke3Byb2JlSUR9YDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlcHRoU3RlbmNpbE5hbWUgPSBgUGxhbmFyUHJvYmVEUyR7cHJvYmVJRH1gO1xyXG4gICAgICAgICAgICAgICAgLy8gUHJvYmVSZXNvdXJjZVxyXG4gICAgICAgICAgICAgICAgcHBsLmFkZFJlbmRlcldpbmRvdyhjb2xvck5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhQ29uZmlncy5yYWRpYW5jZUZvcm1hdCwgd2lkdGgsIGhlaWdodCwgd2luZG93KTtcclxuICAgICAgICAgICAgICAgIHBwbC5hZGREZXB0aFN0ZW5jaWwoZGVwdGhTdGVuY2lsTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBnZnguRm9ybWF0LkRFUFRIX1NURU5DSUwsIHdpZHRoLCBoZWlnaHQsIFJlc291cmNlUmVzaWRlbmN5Lk1FTU9SWUxFU1MpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFJlbmRlcmluZ1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvYmVQYXNzID0gcHBsLmFkZFJlbmRlclBhc3Mod2lkdGgsIGhlaWdodCwgJ2RlZmF1bHQnKTtcclxuICAgICAgICAgICAgICAgIHByb2JlUGFzcy5uYW1lID0gYFBsYW5hclJlZmxlY3Rpb25Qcm9iZSR7cHJvYmVJRH1gO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYnVpbGRSZWZsZWN0aW9uUHJvYmVQYXNzKHByb2JlUGFzcywgY2FtZXJhQ29uZmlncywgaWQsIHByb2JlLmNhbWVyYSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvck5hbWUsIGRlcHRoU3RlbmNpbE5hbWUsIG1haW5MaWdodCwgc2NlbmUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKEVESVRPUikge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZmFjZUlkeCA9IDA7IGZhY2VJZHggPCBwcm9iZS5iYWtlZEN1YmVUZXh0dXJlcy5sZW5ndGg7IGZhY2VJZHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2JlLnVwZGF0ZUNhbWVyYURpcihmYWNlSWR4KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB3aW5kb3c6IHJlbmRlcmVyLlJlbmRlcldpbmRvdyA9IHByb2JlLmJha2VkQ3ViZVRleHR1cmVzW2ZhY2VJZHhdLndpbmRvdyE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sb3JOYW1lID0gYEN1YmVQcm9iZVJUJHtwcm9iZUlEfSR7ZmFjZUlkeH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlcHRoU3RlbmNpbE5hbWUgPSBgQ3ViZVByb2JlRFMke3Byb2JlSUR9JHtmYWNlSWR4fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUHJvYmVSZXNvdXJjZVxyXG4gICAgICAgICAgICAgICAgICAgIHBwbC5hZGRSZW5kZXJXaW5kb3coY29sb3JOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW1lcmFDb25maWdzLnJhZGlhbmNlRm9ybWF0LCB3aWR0aCwgaGVpZ2h0LCB3aW5kb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBwbC5hZGREZXB0aFN0ZW5jaWwoZGVwdGhTdGVuY2lsTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2Z4LkZvcm1hdC5ERVBUSF9TVEVOQ0lMLCB3aWR0aCwgaGVpZ2h0LCBSZXNvdXJjZVJlc2lkZW5jeS5NRU1PUllMRVNTKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVuZGVyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvYmVQYXNzID0gcHBsLmFkZFJlbmRlclBhc3Mod2lkdGgsIGhlaWdodCwgJ2RlZmF1bHQnKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9iZVBhc3MubmFtZSA9IGBDdWJlUHJvYmUke3Byb2JlSUR9JHtmYWNlSWR4fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnVpbGRSZWZsZWN0aW9uUHJvYmVQYXNzKHByb2JlUGFzcywgY2FtZXJhQ29uZmlncywgaWQsIHByb2JlLmNhbWVyYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JOYW1lLCBkZXB0aFN0ZW5jaWxOYW1lLCBtYWluTGlnaHQsIHNjZW5lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHByb2JlLm5lZWRSZW5kZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICArK3Byb2JlSUQ7XHJcbiAgICAgICAgICAgIGlmIChwcm9iZUlEID09PSBtYXhQcm9iZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgX2J1aWxkUmVmbGVjdGlvblByb2JlUGFzcyhcclxuICAgICAgICBwYXNzOiByZW5kZXJpbmcuQmFzaWNSZW5kZXJQYXNzQnVpbGRlcixcclxuICAgICAgICBjYW1lcmFDb25maWdzOiBSZWFkb25seTxDYW1lcmFDb25maWdzICYgRm9yd2FyZFBhc3NDb25maWdzPixcclxuICAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgIGNhbWVyYTogcmVuZGVyZXIuc2NlbmUuQ2FtZXJhLFxyXG4gICAgICAgIGNvbG9yTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIGRlcHRoU3RlbmNpbE5hbWU6IHN0cmluZyxcclxuICAgICAgICBtYWluTGlnaHQ6IHJlbmRlcmVyLnNjZW5lLkRpcmVjdGlvbmFsTGlnaHQgfCBudWxsLFxyXG4gICAgICAgIHNjZW5lOiByZW5kZXJlci5SZW5kZXJTY2VuZSB8IG51bGwgPSBudWxsLFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgUXVldWVIaW50ID0gcmVuZGVyaW5nLlF1ZXVlSGludDtcclxuICAgICAgICBjb25zdCBTY2VuZUZsYWdzID0gcmVuZGVyaW5nLlNjZW5lRmxhZ3M7XHJcbiAgICAgICAgLy8gc2V0IHZpZXdwb3J0XHJcbiAgICAgICAgY29uc3QgY29sb3JTdG9yZU9wID0gY2FtZXJhQ29uZmlncy5lbmFibGVNU0FBID8gU3RvcmVPcC5ESVNDQVJEIDogU3RvcmVPcC5TVE9SRTtcclxuXHJcbiAgICAgICAgLy8gYmluZCBvdXRwdXQgcmVuZGVyIHRhcmdldFxyXG4gICAgICAgIGlmIChmb3J3YXJkTmVlZENsZWFyQ29sb3IoY2FtZXJhKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZWZsZWN0aW9uUHJvYmVDbGVhckNvbG9yLnggPSBjYW1lcmEuY2xlYXJDb2xvci54O1xyXG4gICAgICAgICAgICB0aGlzLl9yZWZsZWN0aW9uUHJvYmVDbGVhckNvbG9yLnkgPSBjYW1lcmEuY2xlYXJDb2xvci55O1xyXG4gICAgICAgICAgICB0aGlzLl9yZWZsZWN0aW9uUHJvYmVDbGVhckNvbG9yLnogPSBjYW1lcmEuY2xlYXJDb2xvci56O1xyXG4gICAgICAgICAgICBjb25zdCBjbGVhckNvbG9yID0gcmVuZGVyaW5nLnBhY2tSR0JFKHRoaXMuX3JlZmxlY3Rpb25Qcm9iZUNsZWFyQ29sb3IpO1xyXG4gICAgICAgICAgICB0aGlzLl9jbGVhckNvbG9yLnggPSBjbGVhckNvbG9yLng7XHJcbiAgICAgICAgICAgIHRoaXMuX2NsZWFyQ29sb3IueSA9IGNsZWFyQ29sb3IueTtcclxuICAgICAgICAgICAgdGhpcy5fY2xlYXJDb2xvci56ID0gY2xlYXJDb2xvci56O1xyXG4gICAgICAgICAgICB0aGlzLl9jbGVhckNvbG9yLncgPSBjbGVhckNvbG9yLnc7XHJcbiAgICAgICAgICAgIHBhc3MuYWRkUmVuZGVyVGFyZ2V0KGNvbG9yTmFtZSwgTG9hZE9wLkNMRUFSLCBjb2xvclN0b3JlT3AsIHRoaXMuX2NsZWFyQ29sb3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBhc3MuYWRkUmVuZGVyVGFyZ2V0KGNvbG9yTmFtZSwgTG9hZE9wLkxPQUQsIGNvbG9yU3RvcmVPcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBiaW5kIGRlcHRoIHN0ZW5jaWwgYnVmZmVyXHJcbiAgICAgICAgaWYgKGNhbWVyYS5jbGVhckZsYWcgJiBDbGVhckZsYWdCaXQuREVQVEhfU1RFTkNJTCkge1xyXG4gICAgICAgICAgICBwYXNzLmFkZERlcHRoU3RlbmNpbChcclxuICAgICAgICAgICAgICAgIGRlcHRoU3RlbmNpbE5hbWUsXHJcbiAgICAgICAgICAgICAgICBMb2FkT3AuQ0xFQVIsXHJcbiAgICAgICAgICAgICAgICBTdG9yZU9wLkRJU0NBUkQsXHJcbiAgICAgICAgICAgICAgICBjYW1lcmEuY2xlYXJEZXB0aCxcclxuICAgICAgICAgICAgICAgIGNhbWVyYS5jbGVhclN0ZW5jaWwsXHJcbiAgICAgICAgICAgICAgICBjYW1lcmEuY2xlYXJGbGFnICYgQ2xlYXJGbGFnQml0LkRFUFRIX1NURU5DSUwsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGFzcy5hZGREZXB0aFN0ZW5jaWwoZGVwdGhTdGVuY2lsTmFtZSwgTG9hZE9wLkxPQUQsIFN0b3JlT3AuRElTQ0FSRCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTZXQgc2hhZG93IG1hcCBpZiBlbmFibGVkXHJcbiAgICAgICAgaWYgKGNhbWVyYUNvbmZpZ3MuZW5hYmxlTWFpbkxpZ2h0U2hhZG93TWFwKSB7XHJcbiAgICAgICAgICAgIHBhc3MuYWRkVGV4dHVyZShgU2hhZG93TWFwJHtpZH1gLCAnY2Nfc2hhZG93TWFwJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUT0RPKHpob3V6aGVuZ2xvbmcpOiBTZXBhcmF0ZSBPUEFRVUUgYW5kIE1BU0sgcXVldWVcclxuXHJcbiAgICAgICAgLy8gYWRkIG9wYXF1ZSBhbmQgbWFzayBxdWV1ZVxyXG4gICAgICAgIHBhc3MuYWRkUXVldWUoUXVldWVIaW50Lk5PTkUsICdyZWZsZWN0LW1hcCcpIC8vIEN1cnJlbnRseSB3ZSBwdXQgT1BBUVVFIGFuZCBNQVNLIGludG8gb25lIHF1ZXVlLCBzbyBRdWV1ZUhpbnQgaXMgTk9ORVxyXG4gICAgICAgICAgICAuYWRkU2NlbmUoY2FtZXJhLFxyXG4gICAgICAgICAgICAgICAgU2NlbmVGbGFncy5PUEFRVUUgfCBTY2VuZUZsYWdzLk1BU0sgfCBTY2VuZUZsYWdzLlJFRkxFQ1RJT05fUFJPQkUsXHJcbiAgICAgICAgICAgICAgICBtYWluTGlnaHQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgc2NlbmUgPyBzY2VuZSA6IHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9hZGRGb3J3YXJkUmFkaWFuY2VQYXNzZXMoXHJcbiAgICAgICAgcHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSxcclxuICAgICAgICBwcGxDb25maWdzOiBSZWFkb25seTxQaXBlbGluZUNvbmZpZ3M+LFxyXG4gICAgICAgIGNhbWVyYUNvbmZpZ3M6IFJlYWRvbmx5PENhbWVyYUNvbmZpZ3MgJiBGb3J3YXJkUGFzc0NvbmZpZ3M+LFxyXG4gICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgY2FtZXJhOiByZW5kZXJlci5zY2VuZS5DYW1lcmEsXHJcbiAgICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgICAgICBtYWluTGlnaHQ6IHJlbmRlcmVyLnNjZW5lLkRpcmVjdGlvbmFsTGlnaHQgfCBudWxsLFxyXG4gICAgICAgIGNvbG9yTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIGRlcHRoU3RlbmNpbE5hbWU6IHN0cmluZyxcclxuICAgICAgICBkaXNhYmxlTVNBQTogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgICAgIGRlcHRoU3RlbmNpbFN0b3JlT3A6IGdmeC5TdG9yZU9wID0gU3RvcmVPcC5ESVNDQVJELFxyXG4gICAgKTogcmVuZGVyaW5nLkJhc2ljUmVuZGVyUGFzc0J1aWxkZXIge1xyXG4gICAgICAgIGNvbnN0IFF1ZXVlSGludCA9IHJlbmRlcmluZy5RdWV1ZUhpbnQ7XHJcbiAgICAgICAgY29uc3QgU2NlbmVGbGFncyA9IHJlbmRlcmluZy5TY2VuZUZsYWdzO1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBEeW5hbWljIHN0YXRlc1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBQcmVwYXJlIGNhbWVyYSBjbGVhciBjb2xvclxyXG4gICAgICAgIGNvbnN0IGNsZWFyQ29sb3IgPSBjYW1lcmEuY2xlYXJDb2xvcjsgLy8gUmVkdWNlIEMrKy9UUyBpbnRlcm9wXHJcbiAgICAgICAgdGhpcy5fY2xlYXJDb2xvci54ID0gY2xlYXJDb2xvci54O1xyXG4gICAgICAgIHRoaXMuX2NsZWFyQ29sb3IueSA9IGNsZWFyQ29sb3IueTtcclxuICAgICAgICB0aGlzLl9jbGVhckNvbG9yLnogPSBjbGVhckNvbG9yLno7XHJcbiAgICAgICAgdGhpcy5fY2xlYXJDb2xvci53ID0gY2xlYXJDb2xvci53O1xyXG5cclxuICAgICAgICAvLyBQcmVwYXJlIGNhbWVyYSB2aWV3cG9ydFxyXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0ID0gY2FtZXJhLnZpZXdwb3J0OyAvLyBSZWR1Y2UgQysrL1RTIGludGVyb3BcclxuICAgICAgICB0aGlzLl92aWV3cG9ydC5sZWZ0ID0gTWF0aC5yb3VuZCh2aWV3cG9ydC54ICogd2lkdGgpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdwb3J0LnRvcCA9IE1hdGgucm91bmQodmlld3BvcnQueSAqIGhlaWdodCk7XHJcbiAgICAgICAgLy8gSGVyZSB3ZSBtdXN0IHVzZSBjYW1lcmEudmlld3BvcnQud2lkdGggaW5zdGVhZCBvZiBjYW1lcmEudmlld3BvcnQueiwgd2hpY2hcclxuICAgICAgICAvLyBpcyB1bmRlZmluZWQgb24gbmF0aXZlIHBsYXRmb3JtLiBUaGUgc2FtZSBhcyBjYW1lcmEudmlld3BvcnQuaGVpZ2h0LlxyXG4gICAgICAgIHRoaXMuX3ZpZXdwb3J0LndpZHRoID0gTWF0aC5tYXgoTWF0aC5yb3VuZCh2aWV3cG9ydC53aWR0aCAqIHdpZHRoKSwgMSk7XHJcbiAgICAgICAgdGhpcy5fdmlld3BvcnQuaGVpZ2h0ID0gTWF0aC5tYXgoTWF0aC5yb3VuZCh2aWV3cG9ydC5oZWlnaHQgKiBoZWlnaHQpLCAxKTtcclxuXHJcbiAgICAgICAgLy8gTVNBQVxyXG4gICAgICAgIGNvbnN0IGVuYWJsZU1TQUEgPSAhZGlzYWJsZU1TQUEgJiYgY2FtZXJhQ29uZmlncy5lbmFibGVNU0FBO1xyXG4gICAgICAgIGFzc2VydCghZW5hYmxlTVNBQSB8fCBjYW1lcmFDb25maWdzLmVuYWJsZVNpbmdsZUZvcndhcmRQYXNzKTtcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIEZvcndhcmQgTGlnaHRpbmcgKE1haW4gRGlyZWN0aW9uYWwgTGlnaHQpXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGNvbnN0IHBhc3MgPSBjYW1lcmFDb25maWdzLmVuYWJsZVNpbmdsZUZvcndhcmRQYXNzXHJcbiAgICAgICAgICAgID8gdGhpcy5fYWRkRm9yd2FyZFNpbmdsZVJhZGlhbmNlUGFzcyhwcGwsIHBwbENvbmZpZ3MsIGNhbWVyYUNvbmZpZ3MsXHJcbiAgICAgICAgICAgICAgICBpZCwgY2FtZXJhLCBlbmFibGVNU0FBLCB3aWR0aCwgaGVpZ2h0LCBtYWluTGlnaHQsXHJcbiAgICAgICAgICAgICAgICBjb2xvck5hbWUsIGRlcHRoU3RlbmNpbE5hbWUsIGRlcHRoU3RlbmNpbFN0b3JlT3ApXHJcbiAgICAgICAgICAgIDogdGhpcy5fYWRkRm9yd2FyZE11bHRpcGxlUmFkaWFuY2VQYXNzZXMocHBsLCBjYW1lcmFDb25maWdzLFxyXG4gICAgICAgICAgICAgICAgaWQsIGNhbWVyYSwgd2lkdGgsIGhlaWdodCwgbWFpbkxpZ2h0LFxyXG4gICAgICAgICAgICAgICAgY29sb3JOYW1lLCBkZXB0aFN0ZW5jaWxOYW1lLCBkZXB0aFN0ZW5jaWxTdG9yZU9wKTtcclxuXHJcbiAgICAgICAgLy8gUGxhbmFyIFNoYWRvd1xyXG4gICAgICAgIGlmIChjYW1lcmFDb25maWdzLmVuYWJsZU1haW5MaWdodFBsYW5hclNoYWRvd01hcCkge1xyXG4gICAgICAgICAgICB0aGlzLl9hZGRQbGFuYXJTaGFkb3dRdWV1ZShjYW1lcmEsIG1haW5MaWdodCwgcGFzcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gRm9yd2FyZCBMaWdodGluZyAoQmxlbmQpXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIEFkZCB0cmFuc3BhcmVudCBxdWV1ZVxyXG5cclxuICAgICAgICBjb25zdCBzY2VuZUZsYWdzID0gU2NlbmVGbGFncy5CTEVORCB8XHJcbiAgICAgICAgICAgIChjYW1lcmEuZ2VvbWV0cnlSZW5kZXJlclxyXG4gICAgICAgICAgICAgICAgPyBTY2VuZUZsYWdzLkdFT01FVFJZXHJcbiAgICAgICAgICAgICAgICA6IFNjZW5lRmxhZ3MuTk9ORSk7XHJcblxyXG4gICAgICAgIHBhc3NcclxuICAgICAgICAgICAgLmFkZFF1ZXVlKFF1ZXVlSGludC5CTEVORClcclxuICAgICAgICAgICAgLmFkZFNjZW5lKGNhbWVyYSwgc2NlbmVGbGFncywgbWFpbkxpZ2h0IHx8IHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICAgIHJldHVybiBwYXNzO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfYWRkRm9yd2FyZFNpbmdsZVJhZGlhbmNlUGFzcyhcclxuICAgICAgICBwcGw6IHJlbmRlcmluZy5CYXNpY1BpcGVsaW5lLFxyXG4gICAgICAgIHBwbENvbmZpZ3M6IFJlYWRvbmx5PFBpcGVsaW5lQ29uZmlncz4sXHJcbiAgICAgICAgY2FtZXJhQ29uZmlnczogUmVhZG9ubHk8Q2FtZXJhQ29uZmlncyAmIEZvcndhcmRQYXNzQ29uZmlncz4sXHJcbiAgICAgICAgaWQ6IG51bWJlcixcclxuICAgICAgICBjYW1lcmE6IHJlbmRlcmVyLnNjZW5lLkNhbWVyYSxcclxuICAgICAgICBlbmFibGVNU0FBOiBib29sZWFuLFxyXG4gICAgICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgbWFpbkxpZ2h0OiByZW5kZXJlci5zY2VuZS5EaXJlY3Rpb25hbExpZ2h0IHwgbnVsbCxcclxuICAgICAgICBjb2xvck5hbWU6IHN0cmluZyxcclxuICAgICAgICBkZXB0aFN0ZW5jaWxOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgZGVwdGhTdGVuY2lsU3RvcmVPcDogZ2Z4LlN0b3JlT3BcclxuICAgICk6IHJlbmRlcmluZy5CYXNpY1JlbmRlclBhc3NCdWlsZGVyIHtcclxuICAgICAgICBhc3NlcnQoY2FtZXJhQ29uZmlncy5lbmFibGVTaW5nbGVGb3J3YXJkUGFzcyk7XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIEZvcndhcmQgTGlnaHRpbmcgKE1haW4gRGlyZWN0aW9uYWwgTGlnaHQpXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGxldCBwYXNzOiByZW5kZXJpbmcuQmFzaWNSZW5kZXJQYXNzQnVpbGRlcjtcclxuICAgICAgICBpZiAoZW5hYmxlTVNBQSkge1xyXG4gICAgICAgICAgICBjb25zdCBtc2FhUmFkaWFuY2VOYW1lID0gYE1zYWFSYWRpYW5jZSR7aWR9YDtcclxuICAgICAgICAgICAgY29uc3QgbXNhYURlcHRoU3RlbmNpbE5hbWUgPSBgTXNhYURlcHRoU3RlbmNpbCR7aWR9YDtcclxuICAgICAgICAgICAgY29uc3Qgc2FtcGxlQ291bnQgPSBjYW1lcmFDb25maWdzLnNldHRpbmdzLm1zYWEuc2FtcGxlQ291bnQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtc1Bhc3MgPSBwcGwuYWRkTXVsdGlzYW1wbGVSZW5kZXJQYXNzKHdpZHRoLCBoZWlnaHQsIHNhbXBsZUNvdW50LCAwLCAnZGVmYXVsdCcpO1xyXG4gICAgICAgICAgICBtc1Bhc3MubmFtZSA9ICdNc2FhRm9yd2FyZFBhc3MnO1xyXG5cclxuICAgICAgICAgICAgLy8gTVNBQSBhbHdheXMgZGlzY2FyZHMgZGVwdGggc3RlbmNpbFxyXG4gICAgICAgICAgICB0aGlzLl9idWlsZEZvcndhcmRNYWluTGlnaHRQYXNzKG1zUGFzcywgY2FtZXJhQ29uZmlncywgaWQsIGNhbWVyYSxcclxuICAgICAgICAgICAgICAgIG1zYWFSYWRpYW5jZU5hbWUsIG1zYWFEZXB0aFN0ZW5jaWxOYW1lLCBTdG9yZU9wLkRJU0NBUkQsIG1haW5MaWdodCk7XHJcblxyXG4gICAgICAgICAgICBtc1Bhc3MucmVzb2x2ZVJlbmRlclRhcmdldChtc2FhUmFkaWFuY2VOYW1lLCBjb2xvck5hbWUpO1xyXG5cclxuICAgICAgICAgICAgcGFzcyA9IG1zUGFzcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwYXNzID0gcHBsLmFkZFJlbmRlclBhc3Mod2lkdGgsIGhlaWdodCwgJ2RlZmF1bHQnKTtcclxuICAgICAgICAgICAgcGFzcy5uYW1lID0gJ0ZvcndhcmRQYXNzJztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2J1aWxkRm9yd2FyZE1haW5MaWdodFBhc3MocGFzcywgY2FtZXJhQ29uZmlncywgaWQsIGNhbWVyYSxcclxuICAgICAgICAgICAgICAgIGNvbG9yTmFtZSwgZGVwdGhTdGVuY2lsTmFtZSwgZGVwdGhTdGVuY2lsU3RvcmVPcCwgbWFpbkxpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXNzZXJ0KHBhc3MgIT09IHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICAgIC8vIEZvcndhcmQgTGlnaHRpbmcgKEFkZGl0aXZlIExpZ2h0cylcclxuICAgICAgICB0aGlzLmZvcndhcmRMaWdodGluZy5hZGRMaWdodFF1ZXVlcyhcclxuICAgICAgICAgICAgcGFzcyxcclxuICAgICAgICAgICAgY2FtZXJhLFxyXG4gICAgICAgICAgICBwcGxDb25maWdzLm1vYmlsZU1heFNwb3RMaWdodFNoYWRvd01hcHMsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBhc3M7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9hZGRGb3J3YXJkTXVsdGlwbGVSYWRpYW5jZVBhc3NlcyhcclxuICAgICAgICBwcGw6IHJlbmRlcmluZy5CYXNpY1BpcGVsaW5lLFxyXG4gICAgICAgIGNhbWVyYUNvbmZpZ3M6IFJlYWRvbmx5PENhbWVyYUNvbmZpZ3MgJiBGb3J3YXJkUGFzc0NvbmZpZ3M+LFxyXG4gICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgY2FtZXJhOiByZW5kZXJlci5zY2VuZS5DYW1lcmEsXHJcbiAgICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgICAgICBtYWluTGlnaHQ6IHJlbmRlcmVyLnNjZW5lLkRpcmVjdGlvbmFsTGlnaHQgfCBudWxsLFxyXG4gICAgICAgIGNvbG9yTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIGRlcHRoU3RlbmNpbE5hbWU6IHN0cmluZyxcclxuICAgICAgICBkZXB0aFN0ZW5jaWxTdG9yZU9wOiBnZnguU3RvcmVPcFxyXG4gICAgKTogcmVuZGVyaW5nLkJhc2ljUmVuZGVyUGFzc0J1aWxkZXIge1xyXG4gICAgICAgIGFzc2VydCghY2FtZXJhQ29uZmlncy5lbmFibGVTaW5nbGVGb3J3YXJkUGFzcyk7XHJcblxyXG4gICAgICAgIC8vIEZvcndhcmQgTGlnaHRpbmcgKE1haW4gRGlyZWN0aW9uYWwgTGlnaHQpXHJcbiAgICAgICAgbGV0IHBhc3MgPSBwcGwuYWRkUmVuZGVyUGFzcyh3aWR0aCwgaGVpZ2h0LCAnZGVmYXVsdCcpO1xyXG4gICAgICAgIHBhc3MubmFtZSA9ICdGb3J3YXJkUGFzcyc7XHJcblxyXG4gICAgICAgIGNvbnN0IGZpcnN0U3RvcmVPcCA9IHRoaXMuZm9yd2FyZExpZ2h0aW5nLmlzTXVsdGlwbGVMaWdodFBhc3Nlc05lZWRlZCgpXHJcbiAgICAgICAgICAgID8gU3RvcmVPcC5TVE9SRVxyXG4gICAgICAgICAgICA6IGRlcHRoU3RlbmNpbFN0b3JlT3A7XHJcblxyXG4gICAgICAgIHRoaXMuX2J1aWxkRm9yd2FyZE1haW5MaWdodFBhc3MocGFzcywgY2FtZXJhQ29uZmlncyxcclxuICAgICAgICAgICAgaWQsIGNhbWVyYSwgY29sb3JOYW1lLCBkZXB0aFN0ZW5jaWxOYW1lLCBmaXJzdFN0b3JlT3AsIG1haW5MaWdodCk7XHJcblxyXG4gICAgICAgIC8vIEZvcndhcmQgTGlnaHRpbmcgKEFkZGl0aXZlIExpZ2h0cylcclxuICAgICAgICBwYXNzID0gdGhpcy5mb3J3YXJkTGlnaHRpbmdcclxuICAgICAgICAgICAgLmFkZExpZ2h0UGFzc2VzKGNvbG9yTmFtZSwgZGVwdGhTdGVuY2lsTmFtZSwgZGVwdGhTdGVuY2lsU3RvcmVPcCxcclxuICAgICAgICAgICAgICAgIGlkLCB3aWR0aCwgaGVpZ2h0LCBjYW1lcmEsIHRoaXMuX3ZpZXdwb3J0LCBwcGwsIHBhc3MpO1xyXG5cclxuICAgICAgICByZXR1cm4gcGFzcztcclxuICAgIH1cclxuICAgIHByaXZhdGUgX2J1aWxkRm9yd2FyZE1haW5MaWdodFBhc3MoXHJcbiAgICAgICAgcGFzczogcmVuZGVyaW5nLkJhc2ljUmVuZGVyUGFzc0J1aWxkZXIsXHJcbiAgICAgICAgY2FtZXJhQ29uZmlnczogUmVhZG9ubHk8Q2FtZXJhQ29uZmlncyAmIEZvcndhcmRQYXNzQ29uZmlncz4sXHJcbiAgICAgICAgaWQ6IG51bWJlcixcclxuICAgICAgICBjYW1lcmE6IHJlbmRlcmVyLnNjZW5lLkNhbWVyYSxcclxuICAgICAgICBjb2xvck5hbWU6IHN0cmluZyxcclxuICAgICAgICBkZXB0aFN0ZW5jaWxOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgZGVwdGhTdGVuY2lsU3RvcmVPcDogZ2Z4LlN0b3JlT3AsXHJcbiAgICAgICAgbWFpbkxpZ2h0OiByZW5kZXJlci5zY2VuZS5EaXJlY3Rpb25hbExpZ2h0IHwgbnVsbCxcclxuICAgICAgICBzY2VuZTogcmVuZGVyZXIuUmVuZGVyU2NlbmUgfCBudWxsID0gbnVsbCxcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IFF1ZXVlSGludCA9IHJlbmRlcmluZy5RdWV1ZUhpbnQ7XHJcbiAgICAgICAgY29uc3QgU2NlbmVGbGFncyA9IHJlbmRlcmluZy5TY2VuZUZsYWdzO1xyXG4gICAgICAgIC8vIHNldCB2aWV3cG9ydFxyXG4gICAgICAgIHBhc3Muc2V0Vmlld3BvcnQodGhpcy5fdmlld3BvcnQpO1xyXG5cclxuICAgICAgICBjb25zdCBjb2xvclN0b3JlT3AgPSBjYW1lcmFDb25maWdzLmVuYWJsZU1TQUEgPyBTdG9yZU9wLkRJU0NBUkQgOiBTdG9yZU9wLlNUT1JFO1xyXG5cclxuICAgICAgICAvLyBiaW5kIG91dHB1dCByZW5kZXIgdGFyZ2V0XHJcbiAgICAgICAgaWYgKGZvcndhcmROZWVkQ2xlYXJDb2xvcihjYW1lcmEpKSB7XHJcbiAgICAgICAgICAgIHBhc3MuYWRkUmVuZGVyVGFyZ2V0KGNvbG9yTmFtZSwgTG9hZE9wLkNMRUFSLCBjb2xvclN0b3JlT3AsIHRoaXMuX2NsZWFyQ29sb3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBhc3MuYWRkUmVuZGVyVGFyZ2V0KGNvbG9yTmFtZSwgTG9hZE9wLkxPQUQsIGNvbG9yU3RvcmVPcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBiaW5kIGRlcHRoIHN0ZW5jaWwgYnVmZmVyXHJcbiAgICAgICAgaWYgKERFQlVHKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2xvck5hbWUgPT09IGNhbWVyYUNvbmZpZ3MuY29sb3JOYW1lICYmXHJcbiAgICAgICAgICAgICAgICBkZXB0aFN0ZW5jaWxOYW1lICE9PSBjYW1lcmFDb25maWdzLmRlcHRoU3RlbmNpbE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHdhcm4oJ0RlZmF1bHQgZnJhbWVidWZmZXIgY2Fubm90IHVzZSBjdXN0b20gZGVwdGggc3RlbmNpbCBidWZmZXInKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNhbWVyYS5jbGVhckZsYWcgJiBDbGVhckZsYWdCaXQuREVQVEhfU1RFTkNJTCkge1xyXG4gICAgICAgICAgICBwYXNzLmFkZERlcHRoU3RlbmNpbChcclxuICAgICAgICAgICAgICAgIGRlcHRoU3RlbmNpbE5hbWUsXHJcbiAgICAgICAgICAgICAgICBMb2FkT3AuQ0xFQVIsXHJcbiAgICAgICAgICAgICAgICBkZXB0aFN0ZW5jaWxTdG9yZU9wLFxyXG4gICAgICAgICAgICAgICAgY2FtZXJhLmNsZWFyRGVwdGgsXHJcbiAgICAgICAgICAgICAgICBjYW1lcmEuY2xlYXJTdGVuY2lsLFxyXG4gICAgICAgICAgICAgICAgY2FtZXJhLmNsZWFyRmxhZyAmIENsZWFyRmxhZ0JpdC5ERVBUSF9TVEVOQ0lMLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBhc3MuYWRkRGVwdGhTdGVuY2lsKGRlcHRoU3RlbmNpbE5hbWUsIExvYWRPcC5MT0FELCBkZXB0aFN0ZW5jaWxTdG9yZU9wKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNldCBzaGFkb3cgbWFwIGlmIGVuYWJsZWRcclxuICAgICAgICBpZiAoY2FtZXJhQ29uZmlncy5lbmFibGVNYWluTGlnaHRTaGFkb3dNYXApIHtcclxuICAgICAgICAgICAgcGFzcy5hZGRUZXh0dXJlKGBTaGFkb3dNYXAke2lkfWAsICdjY19zaGFkb3dNYXAnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRPRE8oemhvdXpoZW5nbG9uZyk6IFNlcGFyYXRlIE9QQVFVRSBhbmQgTUFTSyBxdWV1ZVxyXG5cclxuICAgICAgICAvLyBhZGQgb3BhcXVlIGFuZCBtYXNrIHF1ZXVlXHJcbiAgICAgICAgcGFzcy5hZGRRdWV1ZShRdWV1ZUhpbnQuTk9ORSkgLy8gQ3VycmVudGx5IHdlIHB1dCBPUEFRVUUgYW5kIE1BU0sgaW50byBvbmUgcXVldWUsIHNvIFF1ZXVlSGludCBpcyBOT05FXHJcbiAgICAgICAgICAgIC5hZGRTY2VuZShjYW1lcmEsXHJcbiAgICAgICAgICAgICAgICBTY2VuZUZsYWdzLk9QQVFVRSB8IFNjZW5lRmxhZ3MuTUFTSyxcclxuICAgICAgICAgICAgICAgIG1haW5MaWdodCB8fCB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBzY2VuZSA/IHNjZW5lIDogdW5kZWZpbmVkKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX2FkZFBsYW5hclNoYWRvd1F1ZXVlKFxyXG4gICAgICAgIGNhbWVyYTogcmVuZGVyZXIuc2NlbmUuQ2FtZXJhLFxyXG4gICAgICAgIG1haW5MaWdodDogcmVuZGVyZXIuc2NlbmUuRGlyZWN0aW9uYWxMaWdodCB8IG51bGwsXHJcbiAgICAgICAgcGFzczogcmVuZGVyaW5nLkJhc2ljUmVuZGVyUGFzc0J1aWxkZXIsXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBRdWV1ZUhpbnQgPSByZW5kZXJpbmcuUXVldWVIaW50O1xyXG4gICAgICAgIGNvbnN0IFNjZW5lRmxhZ3MgPSByZW5kZXJpbmcuU2NlbmVGbGFncztcclxuICAgICAgICBwYXNzLmFkZFF1ZXVlKFF1ZXVlSGludC5CTEVORCwgJ3BsYW5hci1zaGFkb3cnKVxyXG4gICAgICAgICAgICAuYWRkU2NlbmUoXHJcbiAgICAgICAgICAgICAgICBjYW1lcmEsXHJcbiAgICAgICAgICAgICAgICBTY2VuZUZsYWdzLlNIQURPV19DQVNURVIgfCBTY2VuZUZsYWdzLlBMQU5BUl9TSEFET1cgfCBTY2VuZUZsYWdzLkJMRU5ELFxyXG4gICAgICAgICAgICAgICAgbWFpbkxpZ2h0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZm9yd2FyZExpZ2h0aW5nID0gbmV3IEZvcndhcmRMaWdodGluZygpO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfdmlld3BvcnQgPSBuZXcgVmlld3BvcnQoKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2NsZWFyQ29sb3IgPSBuZXcgQ29sb3IoMCwgMCwgMCwgMSk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9yZWZsZWN0aW9uUHJvYmVDbGVhckNvbG9yID0gbmV3IFZlYzMoMCwgMCwgMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmxvb21QYXNzQ29uZmlncyB7XHJcbiAgICBlbmFibGVCbG9vbTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1aWx0aW5CbG9vbVBhc3NCdWlsZGVyIGltcGxlbWVudHMgcmVuZGVyaW5nLlBpcGVsaW5lUGFzc0J1aWxkZXIge1xyXG4gICAgZ2V0Q29uZmlnT3JkZXIoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGdldFJlbmRlck9yZGVyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDIwMDtcclxuICAgIH1cclxuICAgIGNvbmZpZ0NhbWVyYShcclxuICAgICAgICBjYW1lcmE6IFJlYWRvbmx5PHJlbmRlcmVyLnNjZW5lLkNhbWVyYT4sXHJcbiAgICAgICAgcGlwZWxpbmVDb25maWdzOiBSZWFkb25seTxQaXBlbGluZUNvbmZpZ3M+LFxyXG4gICAgICAgIGNhbWVyYUNvbmZpZ3M6IENhbWVyYUNvbmZpZ3MgJiBCbG9vbVBhc3NDb25maWdzKTogdm9pZCB7XHJcbiAgICAgICAgY2FtZXJhQ29uZmlncy5lbmFibGVCbG9vbVxyXG4gICAgICAgICAgICA9IGNhbWVyYUNvbmZpZ3Muc2V0dGluZ3MuYmxvb20uZW5hYmxlZFxyXG4gICAgICAgICAgICAmJiAhIWNhbWVyYUNvbmZpZ3Muc2V0dGluZ3MuYmxvb20ubWF0ZXJpYWw7XHJcbiAgICAgICAgaWYgKGNhbWVyYUNvbmZpZ3MuZW5hYmxlQmxvb20pIHtcclxuICAgICAgICAgICAgKytjYW1lcmFDb25maWdzLnJlbWFpbmluZ1Bhc3NlcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3dSZXNpemUoXHJcbiAgICAgICAgcHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSxcclxuICAgICAgICBwcGxDb25maWdzOiBSZWFkb25seTxQaXBlbGluZUNvbmZpZ3M+LFxyXG4gICAgICAgIGNhbWVyYUNvbmZpZ3M6IENhbWVyYUNvbmZpZ3MgJiBCbG9vbVBhc3NDb25maWdzLFxyXG4gICAgICAgIHdpbmRvdzogcmVuZGVyZXIuUmVuZGVyV2luZG93KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNhbWVyYUNvbmZpZ3MuZW5hYmxlQmxvb20pIHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSB3aW5kb3cucmVuZGVyV2luZG93SWQ7XHJcbiAgICAgICAgICAgIGxldCBibG9vbVdpZHRoID0gY2FtZXJhQ29uZmlncy53aWR0aDtcclxuICAgICAgICAgICAgbGV0IGJsb29tSGVpZ2h0ID0gY2FtZXJhQ29uZmlncy5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpICE9PSBjYW1lcmFDb25maWdzLnNldHRpbmdzLmJsb29tLml0ZXJhdGlvbnMgKyAxOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGJsb29tV2lkdGggPSBNYXRoLm1heChNYXRoLmZsb29yKGJsb29tV2lkdGggLyAyKSwgMSk7XHJcbiAgICAgICAgICAgICAgICBibG9vbUhlaWdodCA9IE1hdGgubWF4KE1hdGguZmxvb3IoYmxvb21IZWlnaHQgLyAyKSwgMSk7XHJcbiAgICAgICAgICAgICAgICBwcGwuYWRkUmVuZGVyVGFyZ2V0KGBCbG9vbVRleCR7aWR9XyR7aX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYUNvbmZpZ3MucmFkaWFuY2VGb3JtYXQsIGJsb29tV2lkdGgsIGJsb29tSGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXR1cChcclxuICAgICAgICBwcGw6IHJlbmRlcmluZy5CYXNpY1BpcGVsaW5lLFxyXG4gICAgICAgIHBwbENvbmZpZ3M6IFJlYWRvbmx5PFBpcGVsaW5lQ29uZmlncz4sXHJcbiAgICAgICAgY2FtZXJhQ29uZmlnczogQ2FtZXJhQ29uZmlncyAmIEJsb29tUGFzc0NvbmZpZ3MsXHJcbiAgICAgICAgY2FtZXJhOiByZW5kZXJlci5zY2VuZS5DYW1lcmEsXHJcbiAgICAgICAgY29udGV4dDogUGlwZWxpbmVDb250ZXh0LFxyXG4gICAgICAgIHByZXZSZW5kZXJQYXNzPzogcmVuZGVyaW5nLkJhc2ljUmVuZGVyUGFzc0J1aWxkZXIpXHJcbiAgICAgICAgOiByZW5kZXJpbmcuQmFzaWNSZW5kZXJQYXNzQnVpbGRlciB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKCFjYW1lcmFDb25maWdzLmVuYWJsZUJsb29tKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2UmVuZGVyUGFzcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC0tY2FtZXJhQ29uZmlncy5yZW1haW5pbmdQYXNzZXM7XHJcbiAgICAgICAgYXNzZXJ0KGNhbWVyYUNvbmZpZ3MucmVtYWluaW5nUGFzc2VzID49IDApO1xyXG4gICAgICAgIGNvbnN0IGlkID0gY2FtZXJhLndpbmRvdy5yZW5kZXJXaW5kb3dJZDtcclxuICAgICAgICBhc3NlcnQoISFjYW1lcmFDb25maWdzLnNldHRpbmdzLmJsb29tLm1hdGVyaWFsKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWRkS2F3YXNlRHVhbEZpbHRlckJsb29tUGFzc2VzKFxyXG4gICAgICAgICAgICBwcGwsIHBwbENvbmZpZ3MsXHJcbiAgICAgICAgICAgIGNhbWVyYUNvbmZpZ3MsXHJcbiAgICAgICAgICAgIGNhbWVyYUNvbmZpZ3Muc2V0dGluZ3MsXHJcbiAgICAgICAgICAgIGNhbWVyYUNvbmZpZ3Muc2V0dGluZ3MuYmxvb20ubWF0ZXJpYWwsXHJcbiAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICBjYW1lcmFDb25maWdzLndpZHRoLFxyXG4gICAgICAgICAgICBjYW1lcmFDb25maWdzLmhlaWdodCxcclxuICAgICAgICAgICAgY29udGV4dC5jb2xvck5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2FkZEthd2FzZUR1YWxGaWx0ZXJCbG9vbVBhc3NlcyhcclxuICAgICAgICBwcGw6IHJlbmRlcmluZy5CYXNpY1BpcGVsaW5lLFxyXG4gICAgICAgIHBwbENvbmZpZ3M6IFJlYWRvbmx5PFBpcGVsaW5lQ29uZmlncz4sXHJcbiAgICAgICAgY2FtZXJhQ29uZmlnczogQ2FtZXJhQ29uZmlncyAmIFJlYWRvbmx5PEJsb29tUGFzc0NvbmZpZ3M+LFxyXG4gICAgICAgIHNldHRpbmdzOiBQaXBlbGluZVNldHRpbmdzLFxyXG4gICAgICAgIGJsb29tTWF0ZXJpYWw6IE1hdGVyaWFsLFxyXG4gICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgICAgICByYWRpYW5jZU5hbWU6IHN0cmluZyxcclxuICAgICk6IHJlbmRlcmluZy5CYXNpY1JlbmRlclBhc3NCdWlsZGVyIHtcclxuICAgICAgICBjb25zdCBRdWV1ZUhpbnQgPSByZW5kZXJpbmcuUXVldWVIaW50O1xyXG4gICAgICAgIC8vIEJhc2VkIG9uIEthd2FzZSBEdWFsIEZpbHRlciBCbHVyLiBTYXZlcyBiYW5kd2lkdGggb24gbW9iaWxlIGRldmljZXMuXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cclxuICAgICAgICAvLyBodHRwczovL2NvbW11bml0eS5hcm0uY29tL2Nmcy1maWxlL19fa2V5L2NvbW11bml0eXNlcnZlci1ibG9ncy1jb21wb25lbnRzLXdlYmxvZ2ZpbGVzLzAwLTAwLTAwLTIwLTY2L3NpZ2dyYXBoMjAxNV8yRDAwX21tZ18yRDAwX21hcml1c18yRDAwX3NsaWRlcy5wZGZcclxuXHJcbiAgICAgICAgLy8gU2l6ZTogW3ByZWZpbHRlcigxLzIpLCBkb3duc2FtcGxlKDEvNCksIGRvd25zYW1wbGUoMS84KSwgZG93bnNhbXBsZSgxLzE2KSwgLi4uXVxyXG4gICAgICAgIGNvbnN0IGl0ZXJhdGlvbnMgPSBzZXR0aW5ncy5ibG9vbS5pdGVyYXRpb25zO1xyXG4gICAgICAgIGNvbnN0IHNpemVDb3VudCA9IGl0ZXJhdGlvbnMgKyAxO1xyXG4gICAgICAgIHRoaXMuX2Jsb29tV2lkdGhzLmxlbmd0aCA9IHNpemVDb3VudDtcclxuICAgICAgICB0aGlzLl9ibG9vbUhlaWdodHMubGVuZ3RoID0gc2l6ZUNvdW50O1xyXG4gICAgICAgIHRoaXMuX2Jsb29tV2lkdGhzWzBdID0gTWF0aC5tYXgoTWF0aC5mbG9vcih3aWR0aCAvIDIpLCAxKTtcclxuICAgICAgICB0aGlzLl9ibG9vbUhlaWdodHNbMF0gPSBNYXRoLm1heChNYXRoLmZsb29yKGhlaWdodCAvIDIpLCAxKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSAhPT0gc2l6ZUNvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmxvb21XaWR0aHNbaV0gPSBNYXRoLm1heChNYXRoLmZsb29yKHRoaXMuX2Jsb29tV2lkdGhzW2kgLSAxXSAvIDIpLCAxKTtcclxuICAgICAgICAgICAgdGhpcy5fYmxvb21IZWlnaHRzW2ldID0gTWF0aC5tYXgoTWF0aC5mbG9vcih0aGlzLl9ibG9vbUhlaWdodHNbaSAtIDFdIC8gMiksIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQmxvb20gdGV4dHVyZSBuYW1lc1xyXG4gICAgICAgIHRoaXMuX2Jsb29tVGV4TmFtZXMubGVuZ3RoID0gc2l6ZUNvdW50O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpICE9PSBzaXplQ291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLl9ibG9vbVRleE5hbWVzW2ldID0gYEJsb29tVGV4JHtpZH1fJHtpfWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTZXR1cCBibG9vbSBwYXJhbWV0ZXJzXHJcbiAgICAgICAgdGhpcy5fYmxvb21QYXJhbXMueCA9IHBwbENvbmZpZ3MudXNlRmxvYXRPdXRwdXQgPyAxIDogMDtcclxuICAgICAgICB0aGlzLl9ibG9vbVBhcmFtcy54ID0gMDsgLy8gdW51c2VkXHJcbiAgICAgICAgdGhpcy5fYmxvb21QYXJhbXMueiA9IHNldHRpbmdzLmJsb29tLnRocmVzaG9sZDtcclxuICAgICAgICB0aGlzLl9ibG9vbVBhcmFtcy53ID0gc2V0dGluZ3MuYmxvb20uZW5hYmxlQWxwaGFNYXNrID8gMSA6IDA7XHJcblxyXG4gICAgICAgIC8vIFByZWZpbHRlciBwYXNzXHJcbiAgICAgICAgY29uc3QgcHJlZmlsdGVyUGFzcyA9IHBwbC5hZGRSZW5kZXJQYXNzKHRoaXMuX2Jsb29tV2lkdGhzWzBdLCB0aGlzLl9ibG9vbUhlaWdodHNbMF0sICdjYy1ibG9vbS1wcmVmaWx0ZXInKTtcclxuICAgICAgICBwcmVmaWx0ZXJQYXNzLmFkZFJlbmRlclRhcmdldChcclxuICAgICAgICAgICAgdGhpcy5fYmxvb21UZXhOYW1lc1swXSxcclxuICAgICAgICAgICAgTG9hZE9wLkNMRUFSLFxyXG4gICAgICAgICAgICBTdG9yZU9wLlNUT1JFLFxyXG4gICAgICAgICAgICB0aGlzLl9jbGVhckNvbG9yVHJhbnNwYXJlbnRCbGFjayxcclxuICAgICAgICApO1xyXG4gICAgICAgIHByZWZpbHRlclBhc3MuYWRkVGV4dHVyZShyYWRpYW5jZU5hbWUsICdpbnB1dFRleHR1cmUnKTtcclxuICAgICAgICBwcmVmaWx0ZXJQYXNzLnNldFZlYzQoJ2dfcGxhdGZvcm0nLCBwcGxDb25maWdzLnBsYXRmb3JtKTtcclxuICAgICAgICBwcmVmaWx0ZXJQYXNzLnNldFZlYzQoJ2Jsb29tUGFyYW1zJywgdGhpcy5fYmxvb21QYXJhbXMpO1xyXG4gICAgICAgIHByZWZpbHRlclBhc3NcclxuICAgICAgICAgICAgLmFkZFF1ZXVlKFF1ZXVlSGludC5PUEFRVUUpXHJcbiAgICAgICAgICAgIC5hZGRGdWxsc2NyZWVuUXVhZChibG9vbU1hdGVyaWFsLCAwKTtcclxuXHJcbiAgICAgICAgLy8gRG93bnNhbXBsZSBwYXNzZXNcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSAhPT0gc2l6ZUNvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgY29uc3QgZG93blBhc3MgPSBwcGwuYWRkUmVuZGVyUGFzcyh0aGlzLl9ibG9vbVdpZHRoc1tpXSwgdGhpcy5fYmxvb21IZWlnaHRzW2ldLCAnY2MtYmxvb20tZG93bnNhbXBsZScpO1xyXG4gICAgICAgICAgICBkb3duUGFzcy5hZGRSZW5kZXJUYXJnZXQodGhpcy5fYmxvb21UZXhOYW1lc1tpXSwgTG9hZE9wLkNMRUFSLCBTdG9yZU9wLlNUT1JFLCB0aGlzLl9jbGVhckNvbG9yVHJhbnNwYXJlbnRCbGFjayk7XHJcbiAgICAgICAgICAgIGRvd25QYXNzLmFkZFRleHR1cmUodGhpcy5fYmxvb21UZXhOYW1lc1tpIC0gMV0sICdibG9vbVRleHR1cmUnKTtcclxuICAgICAgICAgICAgdGhpcy5fYmxvb21UZXhTaXplLnggPSB0aGlzLl9ibG9vbVdpZHRoc1tpIC0gMV07XHJcbiAgICAgICAgICAgIHRoaXMuX2Jsb29tVGV4U2l6ZS55ID0gdGhpcy5fYmxvb21IZWlnaHRzW2kgLSAxXTtcclxuICAgICAgICAgICAgZG93blBhc3Muc2V0VmVjNCgnZ19wbGF0Zm9ybScsIHBwbENvbmZpZ3MucGxhdGZvcm0pO1xyXG4gICAgICAgICAgICBkb3duUGFzcy5zZXRWZWM0KCdibG9vbVRleFNpemUnLCB0aGlzLl9ibG9vbVRleFNpemUpO1xyXG4gICAgICAgICAgICBkb3duUGFzc1xyXG4gICAgICAgICAgICAgICAgLmFkZFF1ZXVlKFF1ZXVlSGludC5PUEFRVUUpXHJcbiAgICAgICAgICAgICAgICAuYWRkRnVsbHNjcmVlblF1YWQoYmxvb21NYXRlcmlhbCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVcHNhbXBsZSBwYXNzZXNcclxuICAgICAgICBmb3IgKGxldCBpID0gaXRlcmF0aW9uczsgaS0tID4gMDspIHtcclxuICAgICAgICAgICAgY29uc3QgdXBQYXNzID0gcHBsLmFkZFJlbmRlclBhc3ModGhpcy5fYmxvb21XaWR0aHNbaV0sIHRoaXMuX2Jsb29tSGVpZ2h0c1tpXSwgJ2NjLWJsb29tLXVwc2FtcGxlJyk7XHJcbiAgICAgICAgICAgIHVwUGFzcy5hZGRSZW5kZXJUYXJnZXQodGhpcy5fYmxvb21UZXhOYW1lc1tpXSwgTG9hZE9wLkNMRUFSLCBTdG9yZU9wLlNUT1JFLCB0aGlzLl9jbGVhckNvbG9yVHJhbnNwYXJlbnRCbGFjayk7XHJcbiAgICAgICAgICAgIHVwUGFzcy5hZGRUZXh0dXJlKHRoaXMuX2Jsb29tVGV4TmFtZXNbaSArIDFdLCAnYmxvb21UZXh0dXJlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jsb29tVGV4U2l6ZS54ID0gdGhpcy5fYmxvb21XaWR0aHNbaSArIDFdO1xyXG4gICAgICAgICAgICB0aGlzLl9ibG9vbVRleFNpemUueSA9IHRoaXMuX2Jsb29tSGVpZ2h0c1tpICsgMV07XHJcbiAgICAgICAgICAgIHVwUGFzcy5zZXRWZWM0KCdnX3BsYXRmb3JtJywgcHBsQ29uZmlncy5wbGF0Zm9ybSk7XHJcbiAgICAgICAgICAgIHVwUGFzcy5zZXRWZWM0KCdibG9vbVRleFNpemUnLCB0aGlzLl9ibG9vbVRleFNpemUpO1xyXG4gICAgICAgICAgICB1cFBhc3NcclxuICAgICAgICAgICAgICAgIC5hZGRRdWV1ZShRdWV1ZUhpbnQuT1BBUVVFKVxyXG4gICAgICAgICAgICAgICAgLmFkZEZ1bGxzY3JlZW5RdWFkKGJsb29tTWF0ZXJpYWwsIDIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ29tYmluZSBwYXNzXHJcbiAgICAgICAgY29uc3QgY29tYmluZVBhc3MgPSBwcGwuYWRkUmVuZGVyUGFzcyh3aWR0aCwgaGVpZ2h0LCAnY2MtYmxvb20tY29tYmluZScpO1xyXG4gICAgICAgIGNvbWJpbmVQYXNzLmFkZFJlbmRlclRhcmdldChyYWRpYW5jZU5hbWUsIExvYWRPcC5MT0FELCBTdG9yZU9wLlNUT1JFKTtcclxuICAgICAgICBjb21iaW5lUGFzcy5hZGRUZXh0dXJlKHRoaXMuX2Jsb29tVGV4TmFtZXNbMF0sICdibG9vbVRleHR1cmUnKTtcclxuICAgICAgICBjb21iaW5lUGFzcy5zZXRWZWM0KCdnX3BsYXRmb3JtJywgcHBsQ29uZmlncy5wbGF0Zm9ybSk7XHJcbiAgICAgICAgY29tYmluZVBhc3Muc2V0VmVjNCgnYmxvb21QYXJhbXMnLCB0aGlzLl9ibG9vbVBhcmFtcyk7XHJcbiAgICAgICAgY29tYmluZVBhc3NcclxuICAgICAgICAgICAgLmFkZFF1ZXVlKFF1ZXVlSGludC5CTEVORClcclxuICAgICAgICAgICAgLmFkZEZ1bGxzY3JlZW5RdWFkKGJsb29tTWF0ZXJpYWwsIDMpO1xyXG5cclxuICAgICAgICBpZiAoY2FtZXJhQ29uZmlncy5yZW1haW5pbmdQYXNzZXMgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFkZENvcHlUb1NjcmVlblBhc3MocHBsLCBwcGxDb25maWdzLCBjYW1lcmFDb25maWdzLCByYWRpYW5jZU5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lUGFzcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBCbG9vbVxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY2xlYXJDb2xvclRyYW5zcGFyZW50QmxhY2sgPSBuZXcgQ29sb3IoMCwgMCwgMCwgMCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9ibG9vbVBhcmFtcyA9IG5ldyBWZWM0KDAsIDAsIDAsIDApO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfYmxvb21UZXhTaXplID0gbmV3IFZlYzQoMCwgMCwgMCwgMCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9ibG9vbVdpZHRoczogQXJyYXk8bnVtYmVyPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfYmxvb21IZWlnaHRzOiBBcnJheTxudW1iZXI+ID0gW107XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9ibG9vbVRleE5hbWVzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVG9uZU1hcHBpbmdQYXNzQ29uZmlncyB7XHJcbiAgICBlbmFibGVUb25lTWFwcGluZzogYm9vbGVhbjtcclxuICAgIGVuYWJsZUNvbG9yR3JhZGluZzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1aWx0aW5Ub25lTWFwcGluZ1Bhc3NCdWlsZGVyIGltcGxlbWVudHMgcmVuZGVyaW5nLlBpcGVsaW5lUGFzc0J1aWxkZXIge1xyXG4gICAgZ2V0Q29uZmlnT3JkZXIoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGdldFJlbmRlck9yZGVyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDMwMDtcclxuICAgIH1cclxuICAgIGNvbmZpZ0NhbWVyYShcclxuICAgICAgICBjYW1lcmE6IFJlYWRvbmx5PHJlbmRlcmVyLnNjZW5lLkNhbWVyYT4sXHJcbiAgICAgICAgcHBsQ29uZmlnczogUmVhZG9ubHk8UGlwZWxpbmVDb25maWdzPixcclxuICAgICAgICBjYW1lcmFDb25maWdzOiBDYW1lcmFDb25maWdzICYgVG9uZU1hcHBpbmdQYXNzQ29uZmlncyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gY2FtZXJhQ29uZmlncy5zZXR0aW5ncztcclxuXHJcbiAgICAgICAgY2FtZXJhQ29uZmlncy5lbmFibGVDb2xvckdyYWRpbmdcclxuICAgICAgICAgICAgPSBzZXR0aW5ncy5jb2xvckdyYWRpbmcuZW5hYmxlZFxyXG4gICAgICAgICAgICAmJiAhIXNldHRpbmdzLmNvbG9yR3JhZGluZy5tYXRlcmlhbFxyXG4gICAgICAgICAgICAmJiAhIXNldHRpbmdzLmNvbG9yR3JhZGluZy5jb2xvckdyYWRpbmdNYXA7XHJcblxyXG4gICAgICAgIGNhbWVyYUNvbmZpZ3MuZW5hYmxlVG9uZU1hcHBpbmdcclxuICAgICAgICAgICAgPSBjYW1lcmFDb25maWdzLmVuYWJsZUhEUiAvLyBGcm9tIEhhbGYgdG8gUkdCQThcclxuICAgICAgICAgICAgfHwgY2FtZXJhQ29uZmlncy5lbmFibGVDb2xvckdyYWRpbmc7IC8vIENvbG9yIGdyYWRpbmdcclxuXHJcbiAgICAgICAgaWYgKGNhbWVyYUNvbmZpZ3MuZW5hYmxlVG9uZU1hcHBpbmcpIHtcclxuICAgICAgICAgICAgKytjYW1lcmFDb25maWdzLnJlbWFpbmluZ1Bhc3NlcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3dSZXNpemUoXHJcbiAgICAgICAgcHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSxcclxuICAgICAgICBwcGxDb25maWdzOiBSZWFkb25seTxQaXBlbGluZUNvbmZpZ3M+LFxyXG4gICAgICAgIGNhbWVyYUNvbmZpZ3M6IENhbWVyYUNvbmZpZ3MgJiBUb25lTWFwcGluZ1Bhc3NDb25maWdzKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNhbWVyYUNvbmZpZ3MuZW5hYmxlQ29sb3JHcmFkaW5nKSB7XHJcbiAgICAgICAgICAgIGFzc2VydCghIWNhbWVyYUNvbmZpZ3Muc2V0dGluZ3MuY29sb3JHcmFkaW5nLm1hdGVyaWFsKTtcclxuICAgICAgICAgICAgY2FtZXJhQ29uZmlncy5zZXR0aW5ncy5jb2xvckdyYWRpbmcubWF0ZXJpYWwuc2V0UHJvcGVydHkoXHJcbiAgICAgICAgICAgICAgICAnY29sb3JHcmFkaW5nTWFwJyxcclxuICAgICAgICAgICAgICAgIGNhbWVyYUNvbmZpZ3Muc2V0dGluZ3MuY29sb3JHcmFkaW5nLmNvbG9yR3JhZGluZ01hcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0dXAoXHJcbiAgICAgICAgcHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSxcclxuICAgICAgICBwcGxDb25maWdzOiBSZWFkb25seTxQaXBlbGluZUNvbmZpZ3M+LFxyXG4gICAgICAgIGNhbWVyYUNvbmZpZ3M6IENhbWVyYUNvbmZpZ3MgJiBUb25lTWFwcGluZ1Bhc3NDb25maWdzLFxyXG4gICAgICAgIGNhbWVyYTogcmVuZGVyZXIuc2NlbmUuQ2FtZXJhLFxyXG4gICAgICAgIGNvbnRleHQ6IFBpcGVsaW5lQ29udGV4dCxcclxuICAgICAgICBwcmV2UmVuZGVyUGFzcz86IHJlbmRlcmluZy5CYXNpY1JlbmRlclBhc3NCdWlsZGVyKVxyXG4gICAgICAgIDogcmVuZGVyaW5nLkJhc2ljUmVuZGVyUGFzc0J1aWxkZXIgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGlmICghY2FtZXJhQ29uZmlncy5lbmFibGVUb25lTWFwcGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJldlJlbmRlclBhc3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAtLWNhbWVyYUNvbmZpZ3MucmVtYWluaW5nUGFzc2VzO1xyXG4gICAgICAgIGFzc2VydChjYW1lcmFDb25maWdzLnJlbWFpbmluZ1Bhc3NlcyA+PSAwKTtcclxuICAgICAgICBpZiAoY2FtZXJhQ29uZmlncy5yZW1haW5pbmdQYXNzZXMgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENvcHlBbmRUb25lbWFwUGFzcyhwcGwsIHBwbENvbmZpZ3MsIGNhbWVyYUNvbmZpZ3MsXHJcbiAgICAgICAgICAgICAgICBjYW1lcmFDb25maWdzLndpZHRoLCBjYW1lcmFDb25maWdzLmhlaWdodCxcclxuICAgICAgICAgICAgICAgIGNvbnRleHQuY29sb3JOYW1lLCBjYW1lcmFDb25maWdzLmNvbG9yTmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBjYW1lcmFDb25maWdzLnJlbmRlcldpbmRvd0lkO1xyXG4gICAgICAgICAgICBjb25zdCBsZHJDb2xvclByZWZpeCA9IGNhbWVyYUNvbmZpZ3MuZW5hYmxlU2hhZGluZ1NjYWxlXHJcbiAgICAgICAgICAgICAgICA/IGBTY2FsZWRMZHJDb2xvcmBcclxuICAgICAgICAgICAgICAgIDogYExkckNvbG9yYDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxkckNvbG9yTmFtZSA9IGdldFBpbmdQb25nUmVuZGVyVGFyZ2V0KGNvbnRleHQuY29sb3JOYW1lLCBsZHJDb2xvclByZWZpeCwgaWQpO1xyXG4gICAgICAgICAgICBjb25zdCByYWRpYW5jZU5hbWUgPSBjb250ZXh0LmNvbG9yTmFtZTtcclxuICAgICAgICAgICAgY29udGV4dC5jb2xvck5hbWUgPSBsZHJDb2xvck5hbWU7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ29weUFuZFRvbmVtYXBQYXNzKHBwbCwgcHBsQ29uZmlncywgY2FtZXJhQ29uZmlncyxcclxuICAgICAgICAgICAgICAgIGNhbWVyYUNvbmZpZ3Mud2lkdGgsIGNhbWVyYUNvbmZpZ3MuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgcmFkaWFuY2VOYW1lLCBsZHJDb2xvck5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgX2FkZENvcHlBbmRUb25lbWFwUGFzcyhcclxuICAgICAgICBwcGw6IHJlbmRlcmluZy5CYXNpY1BpcGVsaW5lLFxyXG4gICAgICAgIHBwbENvbmZpZ3M6IFJlYWRvbmx5PFBpcGVsaW5lQ29uZmlncz4sXHJcbiAgICAgICAgY2FtZXJhQ29uZmlnczogQ2FtZXJhQ29uZmlncyAmIFRvbmVNYXBwaW5nUGFzc0NvbmZpZ3MsXHJcbiAgICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgICAgICByYWRpYW5jZU5hbWU6IHN0cmluZyxcclxuICAgICAgICBjb2xvck5hbWU6IHN0cmluZyxcclxuICAgICk6IHJlbmRlcmluZy5CYXNpY1JlbmRlclBhc3NCdWlsZGVyIHtcclxuICAgICAgICBsZXQgcGFzczogcmVuZGVyaW5nLkJhc2ljUmVuZGVyUGFzc0J1aWxkZXI7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBjYW1lcmFDb25maWdzLnNldHRpbmdzO1xyXG4gICAgICAgIGlmIChjYW1lcmFDb25maWdzLmVuYWJsZUNvbG9yR3JhZGluZykge1xyXG4gICAgICAgICAgICBhc3NlcnQoISFzZXR0aW5ncy5jb2xvckdyYWRpbmcubWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICBhc3NlcnQoISFzZXR0aW5ncy5jb2xvckdyYWRpbmcuY29sb3JHcmFkaW5nTWFwKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGx1dFRleCA9IHNldHRpbmdzLmNvbG9yR3JhZGluZy5jb2xvckdyYWRpbmdNYXA7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbG9yR3JhZGluZ1RleFNpemUueCA9IGx1dFRleC53aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5fY29sb3JHcmFkaW5nVGV4U2l6ZS55ID0gbHV0VGV4LmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGlzU3F1YXJlTWFwID0gbHV0VGV4LndpZHRoID09PSBsdXRUZXguaGVpZ2h0O1xyXG4gICAgICAgICAgICBpZiAoaXNTcXVhcmVNYXApIHtcclxuICAgICAgICAgICAgICAgIHBhc3MgPSBwcGwuYWRkUmVuZGVyUGFzcyh3aWR0aCwgaGVpZ2h0LCAnY2MtY29sb3ItZ3JhZGluZy04eDgnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhc3MgPSBwcGwuYWRkUmVuZGVyUGFzcyh3aWR0aCwgaGVpZ2h0LCAnY2MtY29sb3ItZ3JhZGluZy1ueDEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXNzLmFkZFJlbmRlclRhcmdldChjb2xvck5hbWUsIExvYWRPcC5DTEVBUiwgU3RvcmVPcC5TVE9SRSwgc0NsZWFyQ29sb3JUcmFuc3BhcmVudEJsYWNrKTtcclxuICAgICAgICAgICAgcGFzcy5hZGRUZXh0dXJlKHJhZGlhbmNlTmFtZSwgJ3NjZW5lQ29sb3JNYXAnKTtcclxuICAgICAgICAgICAgcGFzcy5zZXRWZWM0KCdnX3BsYXRmb3JtJywgcHBsQ29uZmlncy5wbGF0Zm9ybSk7XHJcbiAgICAgICAgICAgIHBhc3Muc2V0VmVjMignbHV0VGV4dHVyZVNpemUnLCB0aGlzLl9jb2xvckdyYWRpbmdUZXhTaXplKTtcclxuICAgICAgICAgICAgcGFzcy5zZXRGbG9hdCgnY29udHJpYnV0ZScsIHNldHRpbmdzLmNvbG9yR3JhZGluZy5jb250cmlidXRlKTtcclxuICAgICAgICAgICAgcGFzcy5hZGRRdWV1ZShyZW5kZXJpbmcuUXVldWVIaW50Lk9QQVFVRSlcclxuICAgICAgICAgICAgICAgIC5hZGRGdWxsc2NyZWVuUXVhZChzZXR0aW5ncy5jb2xvckdyYWRpbmcubWF0ZXJpYWwsIGlzU3F1YXJlTWFwID8gMSA6IDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBhc3MgPSBwcGwuYWRkUmVuZGVyUGFzcyh3aWR0aCwgaGVpZ2h0LCAnY2MtdG9uZS1tYXBwaW5nJyk7XHJcbiAgICAgICAgICAgIHBhc3MuYWRkUmVuZGVyVGFyZ2V0KGNvbG9yTmFtZSwgTG9hZE9wLkNMRUFSLCBTdG9yZU9wLlNUT1JFLCBzQ2xlYXJDb2xvclRyYW5zcGFyZW50QmxhY2spO1xyXG4gICAgICAgICAgICBwYXNzLmFkZFRleHR1cmUocmFkaWFuY2VOYW1lLCAnaW5wdXRUZXh0dXJlJyk7XHJcbiAgICAgICAgICAgIHBhc3Muc2V0VmVjNCgnZ19wbGF0Zm9ybScsIHBwbENvbmZpZ3MucGxhdGZvcm0pO1xyXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MudG9uZU1hcHBpbmcubWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIHBhc3MuYWRkUXVldWUocmVuZGVyaW5nLlF1ZXVlSGludC5PUEFRVUUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZEZ1bGxzY3JlZW5RdWFkKHNldHRpbmdzLnRvbmVNYXBwaW5nLm1hdGVyaWFsLCAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFzc2VydCghIWNhbWVyYUNvbmZpZ3MuY29weUFuZFRvbmVtYXBNYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICBwYXNzLmFkZFF1ZXVlKHJlbmRlcmluZy5RdWV1ZUhpbnQuT1BBUVVFKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRGdWxsc2NyZWVuUXVhZChjYW1lcmFDb25maWdzLmNvcHlBbmRUb25lbWFwTWF0ZXJpYWwsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXNzO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY29sb3JHcmFkaW5nVGV4U2l6ZSA9IG5ldyBWZWMyKDAsIDApO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZYQUFQYXNzQ29uZmlncyB7XHJcbiAgICBlbmFibGVGWEFBOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQnVpbHRpbkZYQUFQYXNzQnVpbGRlciBpbXBsZW1lbnRzIHJlbmRlcmluZy5QaXBlbGluZVBhc3NCdWlsZGVyIHtcclxuICAgIGdldENvbmZpZ09yZGVyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBnZXRSZW5kZXJPcmRlcigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiA0MDA7XHJcbiAgICB9XHJcbiAgICBjb25maWdDYW1lcmEoXHJcbiAgICAgICAgY2FtZXJhOiBSZWFkb25seTxyZW5kZXJlci5zY2VuZS5DYW1lcmE+LFxyXG4gICAgICAgIHBwbENvbmZpZ3M6IFJlYWRvbmx5PFBpcGVsaW5lQ29uZmlncz4sXHJcbiAgICAgICAgY2FtZXJhQ29uZmlnczogQ2FtZXJhQ29uZmlncyAmIEZYQUFQYXNzQ29uZmlncyk6IHZvaWQge1xyXG4gICAgICAgIGNhbWVyYUNvbmZpZ3MuZW5hYmxlRlhBQVxyXG4gICAgICAgICAgICA9IGNhbWVyYUNvbmZpZ3Muc2V0dGluZ3MuZnhhYS5lbmFibGVkXHJcbiAgICAgICAgICAgICYmICEhY2FtZXJhQ29uZmlncy5zZXR0aW5ncy5meGFhLm1hdGVyaWFsO1xyXG4gICAgICAgIGlmIChjYW1lcmFDb25maWdzLmVuYWJsZUZYQUEpIHtcclxuICAgICAgICAgICAgKytjYW1lcmFDb25maWdzLnJlbWFpbmluZ1Bhc3NlcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXR1cChcclxuICAgICAgICBwcGw6IHJlbmRlcmluZy5CYXNpY1BpcGVsaW5lLFxyXG4gICAgICAgIHBwbENvbmZpZ3M6IFJlYWRvbmx5PFBpcGVsaW5lQ29uZmlncz4sXHJcbiAgICAgICAgY2FtZXJhQ29uZmlnczogQ2FtZXJhQ29uZmlncyAmIEZYQUFQYXNzQ29uZmlncyxcclxuICAgICAgICBjYW1lcmE6IHJlbmRlcmVyLnNjZW5lLkNhbWVyYSxcclxuICAgICAgICBjb250ZXh0OiBQaXBlbGluZUNvbnRleHQsXHJcbiAgICAgICAgcHJldlJlbmRlclBhc3M/OiByZW5kZXJpbmcuQmFzaWNSZW5kZXJQYXNzQnVpbGRlcilcclxuICAgICAgICA6IHJlbmRlcmluZy5CYXNpY1JlbmRlclBhc3NCdWlsZGVyIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAoIWNhbWVyYUNvbmZpZ3MuZW5hYmxlRlhBQSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJldlJlbmRlclBhc3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC0tY2FtZXJhQ29uZmlncy5yZW1haW5pbmdQYXNzZXM7XHJcbiAgICAgICAgYXNzZXJ0KGNhbWVyYUNvbmZpZ3MucmVtYWluaW5nUGFzc2VzID49IDApO1xyXG5cclxuICAgICAgICBjb25zdCBpZCA9IGNhbWVyYUNvbmZpZ3MucmVuZGVyV2luZG93SWQ7XHJcbiAgICAgICAgY29uc3QgbGRyQ29sb3JQcmVmaXggPSBjYW1lcmFDb25maWdzLmVuYWJsZVNoYWRpbmdTY2FsZVxyXG4gICAgICAgICAgICA/IGBTY2FsZWRMZHJDb2xvcmBcclxuICAgICAgICAgICAgOiBgTGRyQ29sb3JgO1xyXG4gICAgICAgIGNvbnN0IGxkckNvbG9yTmFtZSA9IGdldFBpbmdQb25nUmVuZGVyVGFyZ2V0KGNvbnRleHQuY29sb3JOYW1lLCBsZHJDb2xvclByZWZpeCwgaWQpO1xyXG5cclxuICAgICAgICBhc3NlcnQoISFjYW1lcmFDb25maWdzLnNldHRpbmdzLmZ4YWEubWF0ZXJpYWwpO1xyXG4gICAgICAgIGlmIChjYW1lcmFDb25maWdzLnJlbWFpbmluZ1Bhc3NlcyA9PT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoY2FtZXJhQ29uZmlncy5lbmFibGVTaGFkaW5nU2NhbGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FkZEZ4YWFQYXNzKHBwbCwgcHBsQ29uZmlncyxcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmFDb25maWdzLnNldHRpbmdzLmZ4YWEubWF0ZXJpYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhQ29uZmlncy53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmFDb25maWdzLmhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmNvbG9yTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBsZHJDb2xvck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkZENvcHlUb1NjcmVlblBhc3MocHBsLCBwcGxDb25maWdzLCBjYW1lcmFDb25maWdzLCBsZHJDb2xvck5hbWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXNzZXJ0KGNhbWVyYUNvbmZpZ3Mud2lkdGggPT09IGNhbWVyYUNvbmZpZ3MubmF0aXZlV2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgYXNzZXJ0KGNhbWVyYUNvbmZpZ3MuaGVpZ2h0ID09PSBjYW1lcmFDb25maWdzLm5hdGl2ZUhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYWRkRnhhYVBhc3MocHBsLCBwcGxDb25maWdzLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYUNvbmZpZ3Muc2V0dGluZ3MuZnhhYS5tYXRlcmlhbCxcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmFDb25maWdzLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYUNvbmZpZ3MuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuY29sb3JOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYUNvbmZpZ3MuY29sb3JOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0Q29sb3JOYW1lID0gY29udGV4dC5jb2xvck5hbWU7XHJcbiAgICAgICAgICAgIGNvbnRleHQuY29sb3JOYW1lID0gbGRyQ29sb3JOYW1lO1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0UGFzcyA9IHRoaXMuX2FkZEZ4YWFQYXNzKHBwbCwgcHBsQ29uZmlncyxcclxuICAgICAgICAgICAgICAgIGNhbWVyYUNvbmZpZ3Muc2V0dGluZ3MuZnhhYS5tYXRlcmlhbCxcclxuICAgICAgICAgICAgICAgIGNhbWVyYUNvbmZpZ3Mud2lkdGgsXHJcbiAgICAgICAgICAgICAgICBjYW1lcmFDb25maWdzLmhlaWdodCxcclxuICAgICAgICAgICAgICAgIGlucHV0Q29sb3JOYW1lLFxyXG4gICAgICAgICAgICAgICAgbGRyQ29sb3JOYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIGxhc3RQYXNzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgX2FkZEZ4YWFQYXNzKFxyXG4gICAgICAgIHBwbDogcmVuZGVyaW5nLkJhc2ljUGlwZWxpbmUsXHJcbiAgICAgICAgcHBsQ29uZmlnczogUmVhZG9ubHk8UGlwZWxpbmVDb25maWdzPixcclxuICAgICAgICBmeGFhTWF0ZXJpYWw6IE1hdGVyaWFsLFxyXG4gICAgICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgbGRyQ29sb3JOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgY29sb3JOYW1lOiBzdHJpbmcsXHJcbiAgICApOiByZW5kZXJpbmcuQmFzaWNSZW5kZXJQYXNzQnVpbGRlciB7XHJcbiAgICAgICAgdGhpcy5fZnhhYVBhcmFtcy54ID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5fZnhhYVBhcmFtcy55ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuX2Z4YWFQYXJhbXMueiA9IDEgLyB3aWR0aDtcclxuICAgICAgICB0aGlzLl9meGFhUGFyYW1zLncgPSAxIC8gaGVpZ2h0O1xyXG5cclxuICAgICAgICBjb25zdCBwYXNzID0gcHBsLmFkZFJlbmRlclBhc3Mod2lkdGgsIGhlaWdodCwgJ2NjLWZ4YWEnKTtcclxuICAgICAgICBwYXNzLmFkZFJlbmRlclRhcmdldChjb2xvck5hbWUsIExvYWRPcC5DTEVBUiwgU3RvcmVPcC5TVE9SRSwgc0NsZWFyQ29sb3JUcmFuc3BhcmVudEJsYWNrKTtcclxuICAgICAgICBwYXNzLmFkZFRleHR1cmUobGRyQ29sb3JOYW1lLCAnc2NlbmVDb2xvck1hcCcpO1xyXG4gICAgICAgIHBhc3Muc2V0VmVjNCgnZ19wbGF0Zm9ybScsIHBwbENvbmZpZ3MucGxhdGZvcm0pO1xyXG4gICAgICAgIHBhc3Muc2V0VmVjNCgndGV4U2l6ZScsIHRoaXMuX2Z4YWFQYXJhbXMpO1xyXG4gICAgICAgIHBhc3MuYWRkUXVldWUocmVuZGVyaW5nLlF1ZXVlSGludC5PUEFRVUUpXHJcbiAgICAgICAgICAgIC5hZGRGdWxsc2NyZWVuUXVhZChmeGFhTWF0ZXJpYWwsIDApO1xyXG4gICAgICAgIHJldHVybiBwYXNzO1xyXG4gICAgfVxyXG4gICAgLy8gRlhBQVxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZnhhYVBhcmFtcyA9IG5ldyBWZWM0KDAsIDAsIDAsIDApO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZTUlBhc3NDb25maWdzIHtcclxuICAgIGVuYWJsZUZTUjogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1aWx0aW5Gc3JQYXNzQnVpbGRlciBpbXBsZW1lbnRzIHJlbmRlcmluZy5QaXBlbGluZVBhc3NCdWlsZGVyIHtcclxuICAgIGdldENvbmZpZ09yZGVyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBnZXRSZW5kZXJPcmRlcigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiA1MDA7XHJcbiAgICB9XHJcbiAgICBjb25maWdDYW1lcmEoXHJcbiAgICAgICAgY2FtZXJhOiBSZWFkb25seTxyZW5kZXJlci5zY2VuZS5DYW1lcmE+LFxyXG4gICAgICAgIHBwbENvbmZpZ3M6IFJlYWRvbmx5PFBpcGVsaW5lQ29uZmlncz4sXHJcbiAgICAgICAgY2FtZXJhQ29uZmlnczogQ2FtZXJhQ29uZmlncyAmIEZTUlBhc3NDb25maWdzKTogdm9pZCB7XHJcbiAgICAgICAgLy8gRlNSIChEZXBlbmQgb24gU2hhZGluZyBzY2FsZSlcclxuICAgICAgICBjYW1lcmFDb25maWdzLmVuYWJsZUZTUiA9IGNhbWVyYUNvbmZpZ3Muc2V0dGluZ3MuZnNyLmVuYWJsZWRcclxuICAgICAgICAgICAgJiYgISFjYW1lcmFDb25maWdzLnNldHRpbmdzLmZzci5tYXRlcmlhbFxyXG4gICAgICAgICAgICAmJiBjYW1lcmFDb25maWdzLmVuYWJsZVNoYWRpbmdTY2FsZVxyXG4gICAgICAgICAgICAmJiBjYW1lcmFDb25maWdzLnNoYWRpbmdTY2FsZSA8IDEuMDtcclxuXHJcbiAgICAgICAgaWYgKGNhbWVyYUNvbmZpZ3MuZW5hYmxlRlNSKSB7XHJcbiAgICAgICAgICAgICsrY2FtZXJhQ29uZmlncy5yZW1haW5pbmdQYXNzZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0dXAoXHJcbiAgICAgICAgcHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSxcclxuICAgICAgICBwcGxDb25maWdzOiBSZWFkb25seTxQaXBlbGluZUNvbmZpZ3M+LFxyXG4gICAgICAgIGNhbWVyYUNvbmZpZ3M6IENhbWVyYUNvbmZpZ3MgJiBGU1JQYXNzQ29uZmlncyxcclxuICAgICAgICBjYW1lcmE6IHJlbmRlcmVyLnNjZW5lLkNhbWVyYSxcclxuICAgICAgICBjb250ZXh0OiBQaXBlbGluZUNvbnRleHQsXHJcbiAgICAgICAgcHJldlJlbmRlclBhc3M/OiByZW5kZXJpbmcuQmFzaWNSZW5kZXJQYXNzQnVpbGRlcilcclxuICAgICAgICA6IHJlbmRlcmluZy5CYXNpY1JlbmRlclBhc3NCdWlsZGVyIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAoIWNhbWVyYUNvbmZpZ3MuZW5hYmxlRlNSKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2UmVuZGVyUGFzcztcclxuICAgICAgICB9XHJcbiAgICAgICAgLS1jYW1lcmFDb25maWdzLnJlbWFpbmluZ1Bhc3NlcztcclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXRDb2xvck5hbWUgPSBjb250ZXh0LmNvbG9yTmFtZTtcclxuICAgICAgICBjb25zdCBvdXRwdXRDb2xvck5hbWVcclxuICAgICAgICAgICAgPSBjYW1lcmFDb25maWdzLnJlbWFpbmluZ1Bhc3NlcyA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyBjYW1lcmFDb25maWdzLmNvbG9yTmFtZVxyXG4gICAgICAgICAgICAgICAgOiBnZXRQaW5nUG9uZ1JlbmRlclRhcmdldChjb250ZXh0LmNvbG9yTmFtZSwgJ1VpQ29sb3InLCBjYW1lcmFDb25maWdzLnJlbmRlcldpbmRvd0lkKTtcclxuICAgICAgICBjb250ZXh0LmNvbG9yTmFtZSA9IG91dHB1dENvbG9yTmFtZTtcclxuXHJcbiAgICAgICAgYXNzZXJ0KCEhY2FtZXJhQ29uZmlncy5zZXR0aW5ncy5mc3IubWF0ZXJpYWwpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRGc3JQYXNzKHBwbCwgcHBsQ29uZmlncywgY2FtZXJhQ29uZmlncyxcclxuICAgICAgICAgICAgY2FtZXJhQ29uZmlncy5zZXR0aW5ncyxcclxuICAgICAgICAgICAgY2FtZXJhQ29uZmlncy5zZXR0aW5ncy5mc3IubWF0ZXJpYWwsXHJcbiAgICAgICAgICAgIGNhbWVyYUNvbmZpZ3MucmVuZGVyV2luZG93SWQsXHJcbiAgICAgICAgICAgIGNhbWVyYUNvbmZpZ3Mud2lkdGgsXHJcbiAgICAgICAgICAgIGNhbWVyYUNvbmZpZ3MuaGVpZ2h0LFxyXG4gICAgICAgICAgICBpbnB1dENvbG9yTmFtZSxcclxuICAgICAgICAgICAgY2FtZXJhQ29uZmlncy5uYXRpdmVXaWR0aCxcclxuICAgICAgICAgICAgY2FtZXJhQ29uZmlncy5uYXRpdmVIZWlnaHQsXHJcbiAgICAgICAgICAgIG91dHB1dENvbG9yTmFtZSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9hZGRGc3JQYXNzKFxyXG4gICAgICAgIHBwbDogcmVuZGVyaW5nLkJhc2ljUGlwZWxpbmUsXHJcbiAgICAgICAgcHBsQ29uZmlnczogUmVhZG9ubHk8UGlwZWxpbmVDb25maWdzPixcclxuICAgICAgICBjYW1lcmFDb25maWdzOiBDYW1lcmFDb25maWdzICYgRlNSUGFzc0NvbmZpZ3MsXHJcbiAgICAgICAgc2V0dGluZ3M6IFBpcGVsaW5lU2V0dGluZ3MsXHJcbiAgICAgICAgZnNyTWF0ZXJpYWw6IE1hdGVyaWFsLFxyXG4gICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgICAgICBpbnB1dENvbG9yTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIG5hdGl2ZVdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgbmF0aXZlSGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgb3V0cHV0Q29sb3JOYW1lOiBzdHJpbmcsXHJcbiAgICApOiByZW5kZXJpbmcuQmFzaWNSZW5kZXJQYXNzQnVpbGRlciB7XHJcbiAgICAgICAgdGhpcy5fZnNyVGV4U2l6ZS54ID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5fZnNyVGV4U2l6ZS55ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuX2ZzclRleFNpemUueiA9IG5hdGl2ZVdpZHRoO1xyXG4gICAgICAgIHRoaXMuX2ZzclRleFNpemUudyA9IG5hdGl2ZUhlaWdodDtcclxuICAgICAgICB0aGlzLl9mc3JQYXJhbXMueCA9IGNsYW1wKDEuMCAtIHNldHRpbmdzLmZzci5zaGFycG5lc3MsIDAuMDIsIDAuOTgpO1xyXG5cclxuICAgICAgICBjb25zdCB1aUNvbG9yUHJlZml4ID0gJ1VpQ29sb3InO1xyXG5cclxuICAgICAgICBjb25zdCBmc3JDb2xvck5hbWUgPSBnZXRQaW5nUG9uZ1JlbmRlclRhcmdldChvdXRwdXRDb2xvck5hbWUsIHVpQ29sb3JQcmVmaXgsIGlkKTtcclxuXHJcbiAgICAgICAgY29uc3QgZWFzdVBhc3MgPSBwcGwuYWRkUmVuZGVyUGFzcyhuYXRpdmVXaWR0aCwgbmF0aXZlSGVpZ2h0LCAnY2MtZnNyLWVhc3UnKTtcclxuICAgICAgICBlYXN1UGFzcy5hZGRSZW5kZXJUYXJnZXQoZnNyQ29sb3JOYW1lLCBMb2FkT3AuQ0xFQVIsIFN0b3JlT3AuU1RPUkUsIHNDbGVhckNvbG9yVHJhbnNwYXJlbnRCbGFjayk7XHJcbiAgICAgICAgZWFzdVBhc3MuYWRkVGV4dHVyZShpbnB1dENvbG9yTmFtZSwgJ291dHB1dFJlc3VsdE1hcCcpO1xyXG4gICAgICAgIGVhc3VQYXNzLnNldFZlYzQoJ2dfcGxhdGZvcm0nLCBwcGxDb25maWdzLnBsYXRmb3JtKTtcclxuICAgICAgICBlYXN1UGFzcy5zZXRWZWM0KCdmc3JUZXhTaXplJywgdGhpcy5fZnNyVGV4U2l6ZSk7XHJcbiAgICAgICAgZWFzdVBhc3NcclxuICAgICAgICAgICAgLmFkZFF1ZXVlKHJlbmRlcmluZy5RdWV1ZUhpbnQuT1BBUVVFKVxyXG4gICAgICAgICAgICAuYWRkRnVsbHNjcmVlblF1YWQoZnNyTWF0ZXJpYWwsIDApO1xyXG5cclxuICAgICAgICBjb25zdCByY2FzUGFzcyA9IHBwbC5hZGRSZW5kZXJQYXNzKG5hdGl2ZVdpZHRoLCBuYXRpdmVIZWlnaHQsICdjYy1mc3ItcmNhcycpO1xyXG4gICAgICAgIHJjYXNQYXNzLmFkZFJlbmRlclRhcmdldChvdXRwdXRDb2xvck5hbWUsIExvYWRPcC5DTEVBUiwgU3RvcmVPcC5TVE9SRSwgc0NsZWFyQ29sb3JUcmFuc3BhcmVudEJsYWNrKTtcclxuICAgICAgICByY2FzUGFzcy5hZGRUZXh0dXJlKGZzckNvbG9yTmFtZSwgJ291dHB1dFJlc3VsdE1hcCcpO1xyXG4gICAgICAgIHJjYXNQYXNzLnNldFZlYzQoJ2dfcGxhdGZvcm0nLCBwcGxDb25maWdzLnBsYXRmb3JtKTtcclxuICAgICAgICByY2FzUGFzcy5zZXRWZWM0KCdmc3JUZXhTaXplJywgdGhpcy5fZnNyVGV4U2l6ZSk7XHJcbiAgICAgICAgcmNhc1Bhc3Muc2V0VmVjNCgnZnNyUGFyYW1zJywgdGhpcy5fZnNyUGFyYW1zKTtcclxuICAgICAgICByY2FzUGFzc1xyXG4gICAgICAgICAgICAuYWRkUXVldWUocmVuZGVyaW5nLlF1ZXVlSGludC5PUEFRVUUpXHJcbiAgICAgICAgICAgIC5hZGRGdWxsc2NyZWVuUXVhZChmc3JNYXRlcmlhbCwgMSk7XHJcblxyXG4gICAgICAgIHJldHVybiByY2FzUGFzcztcclxuICAgIH1cclxuICAgIC8vIEZTUlxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZnNyUGFyYW1zID0gbmV3IFZlYzQoMCwgMCwgMCwgMCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9mc3JUZXhTaXplID0gbmV3IFZlYzQoMCwgMCwgMCwgMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCdWlsdGluVWlQYXNzQnVpbGRlciBpbXBsZW1lbnRzIHJlbmRlcmluZy5QaXBlbGluZVBhc3NCdWlsZGVyIHtcclxuICAgIGdldENvbmZpZ09yZGVyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBnZXRSZW5kZXJPcmRlcigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAxMDAwO1xyXG4gICAgfVxyXG4gICAgc2V0dXAoXHJcbiAgICAgICAgcHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSxcclxuICAgICAgICBwcGxDb25maWdzOiBSZWFkb25seTxQaXBlbGluZUNvbmZpZ3M+LFxyXG4gICAgICAgIGNhbWVyYUNvbmZpZ3M6IENhbWVyYUNvbmZpZ3MgJiBGU1JQYXNzQ29uZmlncyxcclxuICAgICAgICBjYW1lcmE6IHJlbmRlcmVyLnNjZW5lLkNhbWVyYSxcclxuICAgICAgICBjb250ZXh0OiBQaXBlbGluZUNvbnRleHQsXHJcbiAgICAgICAgcHJldlJlbmRlclBhc3M/OiByZW5kZXJpbmcuQmFzaWNSZW5kZXJQYXNzQnVpbGRlcilcclxuICAgICAgICA6IHJlbmRlcmluZy5CYXNpY1JlbmRlclBhc3NCdWlsZGVyIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBhc3NlcnQoISFwcmV2UmVuZGVyUGFzcyk7XHJcblxyXG4gICAgICAgIGxldCBmbGFncyA9IHJlbmRlcmluZy5TY2VuZUZsYWdzLlVJO1xyXG4gICAgICAgIGlmIChjYW1lcmFDb25maWdzLmVuYWJsZVByb2ZpbGVyKSB7XHJcbiAgICAgICAgICAgIGZsYWdzIHw9IHJlbmRlcmluZy5TY2VuZUZsYWdzLlBST0ZJTEVSO1xyXG4gICAgICAgICAgICBwcmV2UmVuZGVyUGFzcy5zaG93U3RhdGlzdGljcyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZXZSZW5kZXJQYXNzXHJcbiAgICAgICAgICAgIC5hZGRRdWV1ZShyZW5kZXJpbmcuUXVldWVIaW50LkJMRU5ELCAnZGVmYXVsdCcsICdkZWZhdWx0JylcclxuICAgICAgICAgICAgLmFkZFNjZW5lKGNhbWVyYSwgZmxhZ3MpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHJldlJlbmRlclBhc3M7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlmIChyZW5kZXJpbmcpIHtcclxuXHJcbiAgICBjb25zdCB7IFF1ZXVlSGludCwgU2NlbmVGbGFncyB9ID0gcmVuZGVyaW5nO1xyXG5cclxuICAgIGNsYXNzIEJ1aWx0aW5QaXBlbGluZUJ1aWxkZXIgaW1wbGVtZW50cyByZW5kZXJpbmcuUGlwZWxpbmVCdWlsZGVyIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9waXBlbGluZUV2ZW50OiBQaXBlbGluZUV2ZW50UHJvY2Vzc29yID0gY2NsZWdhY3kuZGlyZWN0b3Iucm9vdC5waXBlbGluZUV2ZW50IGFzIFBpcGVsaW5lRXZlbnRQcm9jZXNzb3I7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfZm9yd2FyZFBhc3MgPSBuZXcgQnVpbHRpbkZvcndhcmRQYXNzQnVpbGRlcigpO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2Jsb29tUGFzcyA9IG5ldyBCdWlsdGluQmxvb21QYXNzQnVpbGRlcigpO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX3RvbmVNYXBwaW5nUGFzcyA9IG5ldyBCdWlsdGluVG9uZU1hcHBpbmdQYXNzQnVpbGRlcigpO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2Z4YWFQYXNzID0gbmV3IEJ1aWx0aW5GWEFBUGFzc0J1aWxkZXIoKTtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9mc3JQYXNzID0gbmV3IEJ1aWx0aW5Gc3JQYXNzQnVpbGRlcigpO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX3VpUGFzcyA9IG5ldyBCdWlsdGluVWlQYXNzQnVpbGRlcigpO1xyXG4gICAgICAgIC8vIEludGVybmFsIGNhY2hlZCByZXNvdXJjZXNcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9jbGVhckNvbG9yID0gbmV3IENvbG9yKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX3ZpZXdwb3J0ID0gbmV3IFZpZXdwb3J0KCk7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfY29uZmlncyA9IG5ldyBQaXBlbGluZUNvbmZpZ3MoKTtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9jYW1lcmFDb25maWdzID0gbmV3IENhbWVyYUNvbmZpZ3MoKTtcclxuICAgICAgICAvLyBNYXRlcmlhbHNcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9jb3B5QW5kVG9uZW1hcE1hdGVyaWFsID0gbmV3IE1hdGVyaWFsKCk7XHJcblxyXG4gICAgICAgIC8vIEludGVybmFsIFN0YXRlc1xyXG4gICAgICAgIHByaXZhdGUgX2luaXRpYWxpemVkID0gZmFsc2U7IC8vIFRPRE8oemhvdXpoZW5nbG9uZyk6IE1ha2UgZGVmYXVsdCBlZmZlY3QgYXNzZXQgbG9hZGluZyBlYXJsaWVyIGFuZCByZW1vdmUgdGhpcyBmbGFnXHJcbiAgICAgICAgcHJpdmF0ZSBfcGFzc0J1aWxkZXJzOiByZW5kZXJpbmcuUGlwZWxpbmVQYXNzQnVpbGRlcltdID0gW107XHJcblxyXG4gICAgICAgIHByaXZhdGUgX3NldHVwUGlwZWxpbmVQcmV2aWV3KFxyXG4gICAgICAgICAgICBjYW1lcmE6IHJlbmRlcmVyLnNjZW5lLkNhbWVyYSxcclxuICAgICAgICAgICAgY2FtZXJhQ29uZmlnczogQ2FtZXJhQ29uZmlncykge1xyXG4gICAgICAgICAgICBjb25zdCBpc0VkaXRvclZpZXc6IGJvb2xlYW5cclxuICAgICAgICAgICAgICAgID0gY2FtZXJhLmNhbWVyYVVzYWdlID09PSBDYW1lcmFVc2FnZS5TQ0VORV9WSUVXXHJcbiAgICAgICAgICAgICAgICB8fCBjYW1lcmEuY2FtZXJhVXNhZ2UgPT09IENhbWVyYVVzYWdlLlBSRVZJRVc7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNFZGl0b3JWaWV3KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlZGl0b3JTZXR0aW5ncyA9IHJlbmRlcmluZy5nZXRFZGl0b3JQaXBlbGluZVNldHRpbmdzKCkgYXMgUGlwZWxpbmVTZXR0aW5ncyB8IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWRpdG9yU2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmFDb25maWdzLnNldHRpbmdzID0gZWRpdG9yU2V0dGluZ3M7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYUNvbmZpZ3Muc2V0dGluZ3MgPSBkZWZhdWx0U2V0dGluZ3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FtZXJhLnBpcGVsaW5lU2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmFDb25maWdzLnNldHRpbmdzID0gY2FtZXJhLnBpcGVsaW5lU2V0dGluZ3MgYXMgUGlwZWxpbmVTZXR0aW5ncztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhQ29uZmlncy5zZXR0aW5ncyA9IGRlZmF1bHRTZXR0aW5ncztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfcHJlcGFyZVBpcGVsaW5lUGFzc2VzKGNhbWVyYUNvbmZpZ3M6IENhbWVyYUNvbmZpZ3MpOiB2b2lkIHtcclxuICAgICAgICAgICAgY29uc3QgcGFzc0J1aWxkZXJzID0gdGhpcy5fcGFzc0J1aWxkZXJzO1xyXG4gICAgICAgICAgICBwYXNzQnVpbGRlcnMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gY2FtZXJhQ29uZmlncy5zZXR0aW5ncyBhcyBQaXBlbGluZVNldHRpbmdzMjtcclxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLl9wYXNzZXMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGFzcyBvZiBzZXR0aW5ncy5fcGFzc2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc0J1aWxkZXJzLnB1c2gocGFzcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhc3NlcnQocGFzc0J1aWxkZXJzLmxlbmd0aCA9PT0gc2V0dGluZ3MuX3Bhc3Nlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwYXNzQnVpbGRlcnMucHVzaCh0aGlzLl9mb3J3YXJkUGFzcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MuYmxvb20uZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgcGFzc0J1aWxkZXJzLnB1c2godGhpcy5fYmxvb21QYXNzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGFzc0J1aWxkZXJzLnB1c2godGhpcy5fdG9uZU1hcHBpbmdQYXNzKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5meGFhLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHBhc3NCdWlsZGVycy5wdXNoKHRoaXMuX2Z4YWFQYXNzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLmZzci5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBwYXNzQnVpbGRlcnMucHVzaCh0aGlzLl9mc3JQYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXNzQnVpbGRlcnMucHVzaCh0aGlzLl91aVBhc3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfc2V0dXBCdWlsdGluQ2FtZXJhQ29uZmlncyhcclxuICAgICAgICAgICAgY2FtZXJhOiByZW5kZXJlci5zY2VuZS5DYW1lcmEsXHJcbiAgICAgICAgICAgIHBpcGVsaW5lQ29uZmlnczogUGlwZWxpbmVDb25maWdzLFxyXG4gICAgICAgICAgICBjYW1lcmFDb25maWdzOiBDYW1lcmFDb25maWdzXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IGNhbWVyYS53aW5kb3c7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzTWFpbkdhbWVXaW5kb3c6IGJvb2xlYW4gPSBjYW1lcmEuY2FtZXJhVXNhZ2UgPT09IENhbWVyYVVzYWdlLkdBTUUgJiYgISF3aW5kb3cuc3dhcGNoYWluO1xyXG5cclxuICAgICAgICAgICAgLy8gV2luZG93XHJcbiAgICAgICAgICAgIGNhbWVyYUNvbmZpZ3MuaXNNYWluR2FtZVdpbmRvdyA9IGlzTWFpbkdhbWVXaW5kb3c7XHJcbiAgICAgICAgICAgIGNhbWVyYUNvbmZpZ3MucmVuZGVyV2luZG93SWQgPSB3aW5kb3cucmVuZGVyV2luZG93SWQ7XHJcblxyXG4gICAgICAgICAgICAvLyBDYW1lcmFcclxuICAgICAgICAgICAgY2FtZXJhQ29uZmlncy5jb2xvck5hbWUgPSB3aW5kb3cuY29sb3JOYW1lO1xyXG4gICAgICAgICAgICBjYW1lcmFDb25maWdzLmRlcHRoU3RlbmNpbE5hbWUgPSB3aW5kb3cuZGVwdGhTdGVuY2lsTmFtZTtcclxuXHJcbiAgICAgICAgICAgIC8vIFBpcGVsaW5lXHJcbiAgICAgICAgICAgIGNhbWVyYUNvbmZpZ3MuZW5hYmxlRnVsbFBpcGVsaW5lID0gKGNhbWVyYS52aXNpYmlsaXR5ICYgKExheWVycy5FbnVtLkRFRkFVTFQpKSAhPT0gMDtcclxuICAgICAgICAgICAgY2FtZXJhQ29uZmlncy5lbmFibGVQcm9maWxlciA9IERFQlVHICYmIGlzTWFpbkdhbWVXaW5kb3c7XHJcbiAgICAgICAgICAgIGNhbWVyYUNvbmZpZ3MucmVtYWluaW5nUGFzc2VzID0gMDtcclxuXHJcbiAgICAgICAgICAgIC8vIFNoYWRpbmcgc2NhbGVcclxuICAgICAgICAgICAgY2FtZXJhQ29uZmlncy5zaGFkaW5nU2NhbGUgPSBjYW1lcmFDb25maWdzLnNldHRpbmdzLnNoYWRpbmdTY2FsZTtcclxuICAgICAgICAgICAgY2FtZXJhQ29uZmlncy5lbmFibGVTaGFkaW5nU2NhbGUgPSBjYW1lcmFDb25maWdzLnNldHRpbmdzLmVuYWJsZVNoYWRpbmdTY2FsZVxyXG4gICAgICAgICAgICAgICAgJiYgY2FtZXJhQ29uZmlncy5zaGFkaW5nU2NhbGUgIT09IDEuMDtcclxuXHJcbiAgICAgICAgICAgIGNhbWVyYUNvbmZpZ3MubmF0aXZlV2lkdGggPSBNYXRoLm1heChNYXRoLmZsb29yKHdpbmRvdy53aWR0aCksIDEpO1xyXG4gICAgICAgICAgICBjYW1lcmFDb25maWdzLm5hdGl2ZUhlaWdodCA9IE1hdGgubWF4KE1hdGguZmxvb3Iod2luZG93LmhlaWdodCksIDEpO1xyXG5cclxuICAgICAgICAgICAgY2FtZXJhQ29uZmlncy53aWR0aCA9IGNhbWVyYUNvbmZpZ3MuZW5hYmxlU2hhZGluZ1NjYWxlXHJcbiAgICAgICAgICAgICAgICA/IE1hdGgubWF4KE1hdGguZmxvb3IoY2FtZXJhQ29uZmlncy5uYXRpdmVXaWR0aCAqIGNhbWVyYUNvbmZpZ3Muc2hhZGluZ1NjYWxlKSwgMSlcclxuICAgICAgICAgICAgICAgIDogY2FtZXJhQ29uZmlncy5uYXRpdmVXaWR0aDtcclxuICAgICAgICAgICAgY2FtZXJhQ29uZmlncy5oZWlnaHQgPSBjYW1lcmFDb25maWdzLmVuYWJsZVNoYWRpbmdTY2FsZVxyXG4gICAgICAgICAgICAgICAgPyBNYXRoLm1heChNYXRoLmZsb29yKGNhbWVyYUNvbmZpZ3MubmF0aXZlSGVpZ2h0ICogY2FtZXJhQ29uZmlncy5zaGFkaW5nU2NhbGUpLCAxKVxyXG4gICAgICAgICAgICAgICAgOiBjYW1lcmFDb25maWdzLm5hdGl2ZUhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIFJhZGlhbmNlXHJcbiAgICAgICAgICAgIGNhbWVyYUNvbmZpZ3MuZW5hYmxlSERSID0gY2FtZXJhQ29uZmlncy5lbmFibGVGdWxsUGlwZWxpbmVcclxuICAgICAgICAgICAgICAgICYmIHBpcGVsaW5lQ29uZmlncy51c2VGbG9hdE91dHB1dDtcclxuICAgICAgICAgICAgY2FtZXJhQ29uZmlncy5yYWRpYW5jZUZvcm1hdCA9IGNhbWVyYUNvbmZpZ3MuZW5hYmxlSERSXHJcbiAgICAgICAgICAgICAgICA/IGdmeC5Gb3JtYXQuUkdCQTE2RiA6IGdmeC5Gb3JtYXQuUkdCQTg7XHJcblxyXG4gICAgICAgICAgICAvLyBUb25lIE1hcHBpbmdcclxuICAgICAgICAgICAgY2FtZXJhQ29uZmlncy5jb3B5QW5kVG9uZW1hcE1hdGVyaWFsID0gdGhpcy5fY29weUFuZFRvbmVtYXBNYXRlcmlhbDtcclxuXHJcbiAgICAgICAgICAgIC8vIERlcHRoXHJcbiAgICAgICAgICAgIGNhbWVyYUNvbmZpZ3MuZW5hYmxlU3RvcmVTY2VuZURlcHRoID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9zZXR1cENhbWVyYUNvbmZpZ3MoXHJcbiAgICAgICAgICAgIGNhbWVyYTogcmVuZGVyZXIuc2NlbmUuQ2FtZXJhLFxyXG4gICAgICAgICAgICBwaXBlbGluZUNvbmZpZ3M6IFBpcGVsaW5lQ29uZmlncyxcclxuICAgICAgICAgICAgY2FtZXJhQ29uZmlnczogQ2FtZXJhQ29uZmlnc1xyXG4gICAgICAgICk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXR1cFBpcGVsaW5lUHJldmlldyhjYW1lcmEsIGNhbWVyYUNvbmZpZ3MpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fcHJlcGFyZVBpcGVsaW5lUGFzc2VzKGNhbWVyYUNvbmZpZ3MpO1xyXG5cclxuICAgICAgICAgICAgc29ydFBpcGVsaW5lUGFzc0J1aWxkZXJzQnlDb25maWdPcmRlcih0aGlzLl9wYXNzQnVpbGRlcnMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fc2V0dXBCdWlsdGluQ2FtZXJhQ29uZmlncyhjYW1lcmEsIHBpcGVsaW5lQ29uZmlncywgY2FtZXJhQ29uZmlncyk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGJ1aWxkZXIgb2YgdGhpcy5fcGFzc0J1aWxkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnVpbGRlci5jb25maWdDYW1lcmEpIHtcclxuICAgICAgICAgICAgICAgICAgICBidWlsZGVyLmNvbmZpZ0NhbWVyYShjYW1lcmEsIHBpcGVsaW5lQ29uZmlncywgY2FtZXJhQ29uZmlncyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBJbnRlcmZhY2VcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgd2luZG93UmVzaXplKFxyXG4gICAgICAgICAgICBwcGw6IHJlbmRlcmluZy5CYXNpY1BpcGVsaW5lLFxyXG4gICAgICAgICAgICB3aW5kb3c6IHJlbmRlcmVyLlJlbmRlcldpbmRvdyxcclxuICAgICAgICAgICAgY2FtZXJhOiByZW5kZXJlci5zY2VuZS5DYW1lcmEsXHJcbiAgICAgICAgICAgIG5hdGl2ZVdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgICAgIG5hdGl2ZUhlaWdodDogbnVtYmVyLFxyXG4gICAgICAgICk6IHZvaWQge1xyXG4gICAgICAgICAgICBzZXR1cFBpcGVsaW5lQ29uZmlncyhwcGwsIHRoaXMuX2NvbmZpZ3MpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fc2V0dXBDYW1lcmFDb25maWdzKGNhbWVyYSwgdGhpcy5fY29uZmlncywgdGhpcy5fY2FtZXJhQ29uZmlncyk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZW5kZXIgV2luZG93IChVSSlcclxuICAgICAgICAgICAgY29uc3QgaWQgPSB3aW5kb3cucmVuZGVyV2luZG93SWQ7XHJcblxyXG4gICAgICAgICAgICBwcGwuYWRkUmVuZGVyV2luZG93KHRoaXMuX2NhbWVyYUNvbmZpZ3MuY29sb3JOYW1lLFxyXG4gICAgICAgICAgICAgICAgRm9ybWF0LlJHQkE4LCBuYXRpdmVXaWR0aCwgbmF0aXZlSGVpZ2h0LCB3aW5kb3csXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW1lcmFDb25maWdzLmRlcHRoU3RlbmNpbE5hbWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLl9jYW1lcmFDb25maWdzLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLl9jYW1lcmFDb25maWdzLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZVNoYWRpbmdTY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgcHBsLmFkZERlcHRoU3RlbmNpbChgU2NhbGVkU2NlbmVEZXB0aF8ke2lkfWAsIEZvcm1hdC5ERVBUSF9TVEVOQ0lMLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHBwbC5hZGRSZW5kZXJUYXJnZXQoYFNjYWxlZFJhZGlhbmNlMF8ke2lkfWAsIHRoaXMuX2NhbWVyYUNvbmZpZ3MucmFkaWFuY2VGb3JtYXQsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgcHBsLmFkZFJlbmRlclRhcmdldChgU2NhbGVkUmFkaWFuY2UxXyR7aWR9YCwgdGhpcy5fY2FtZXJhQ29uZmlncy5yYWRpYW5jZUZvcm1hdCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBwcGwuYWRkUmVuZGVyVGFyZ2V0KGBTY2FsZWRMZHJDb2xvcjBfJHtpZH1gLCBGb3JtYXQuUkdCQTgsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgcHBsLmFkZFJlbmRlclRhcmdldChgU2NhbGVkTGRyQ29sb3IxXyR7aWR9YCwgRm9ybWF0LlJHQkE4LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBwbC5hZGREZXB0aFN0ZW5jaWwoYFNjZW5lRGVwdGhfJHtpZH1gLCBGb3JtYXQuREVQVEhfU1RFTkNJTCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBwcGwuYWRkUmVuZGVyVGFyZ2V0KGBSYWRpYW5jZTBfJHtpZH1gLCB0aGlzLl9jYW1lcmFDb25maWdzLnJhZGlhbmNlRm9ybWF0LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHBwbC5hZGRSZW5kZXJUYXJnZXQoYFJhZGlhbmNlMV8ke2lkfWAsIHRoaXMuX2NhbWVyYUNvbmZpZ3MucmFkaWFuY2VGb3JtYXQsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgcHBsLmFkZFJlbmRlclRhcmdldChgTGRyQ29sb3IwXyR7aWR9YCwgRm9ybWF0LlJHQkE4LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHBwbC5hZGRSZW5kZXJUYXJnZXQoYExkckNvbG9yMV8ke2lkfWAsIEZvcm1hdC5SR0JBOCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHBsLmFkZFJlbmRlclRhcmdldChgVWlDb2xvcjBfJHtpZH1gLCBGb3JtYXQuUkdCQTgsIG5hdGl2ZVdpZHRoLCBuYXRpdmVIZWlnaHQpO1xyXG4gICAgICAgICAgICBwcGwuYWRkUmVuZGVyVGFyZ2V0KGBVaUNvbG9yMV8ke2lkfWAsIEZvcm1hdC5SR0JBOCwgbmF0aXZlV2lkdGgsIG5hdGl2ZUhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGJ1aWxkZXIgb2YgdGhpcy5fcGFzc0J1aWxkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnVpbGRlci53aW5kb3dSZXNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICBidWlsZGVyLndpbmRvd1Jlc2l6ZShwcGwsIHRoaXMuX2NvbmZpZ3MsIHRoaXMuX2NhbWVyYUNvbmZpZ3MsIHdpbmRvdywgY2FtZXJhLCBuYXRpdmVXaWR0aCwgbmF0aXZlSGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXR1cChjYW1lcmFzOiByZW5kZXJlci5zY2VuZS5DYW1lcmFbXSwgcHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSk6IHZvaWQge1xyXG4gICAgICAgICAgICAvLyBUT0RPKHpob3V6aGVuZ2xvbmcpOiBNYWtlIGRlZmF1bHQgZWZmZWN0IGFzc2V0IGxvYWRpbmcgZWFybGllciBhbmQgcmVtb3ZlIF9pbml0TWF0ZXJpYWxzXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbml0TWF0ZXJpYWxzKHBwbCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBSZW5kZXIgY2FtZXJhc1xyXG4gICAgICAgICAgICAvLyBsb2coYD09PT09PT09PT09PT09PT09PT09IE9uZSBGcmFtZSA9PT09PT09PT09PT09PT09PT09PWApO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNhbWVyYSBvZiBjYW1lcmFzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTa2lwIGludmFsaWQgY2FtZXJhXHJcbiAgICAgICAgICAgICAgICBpZiAoIWNhbWVyYS5zY2VuZSB8fCAhY2FtZXJhLndpbmRvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gU2V0dXAgY2FtZXJhIGNvbmZpZ3NcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldHVwQ2FtZXJhQ29uZmlncyhjYW1lcmEsIHRoaXMuX2NvbmZpZ3MsIHRoaXMuX2NhbWVyYUNvbmZpZ3MpO1xyXG4gICAgICAgICAgICAgICAgLy8gbG9nKGBTZXR1cCBjYW1lcmE6ICR7Y2FtZXJhLm5vZGUhLm5hbWV9LCB3aW5kb3c6ICR7Y2FtZXJhLndpbmRvdy5yZW5kZXJXaW5kb3dJZH0sIGlzRnVsbDogJHt0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZUZ1bGxQaXBlbGluZX0sIGBcclxuICAgICAgICAgICAgICAgIC8vICAgICArIGBzaXplOiAke2NhbWVyYS53aW5kb3cud2lkdGh9eCR7Y2FtZXJhLndpbmRvdy5oZWlnaHR9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGlwZWxpbmVFdmVudC5lbWl0KFBpcGVsaW5lRXZlbnRUeXBlLlJFTkRFUl9DQU1FUkFfQkVHSU4sIGNhbWVyYSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQnVpbGQgcGlwZWxpbmVcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZUZ1bGxQaXBlbGluZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2J1aWxkRm9yd2FyZFBpcGVsaW5lKHBwbCwgY2FtZXJhLCBjYW1lcmEuc2NlbmUsIHRoaXMuX3Bhc3NCdWlsZGVycyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2J1aWxkU2ltcGxlUGlwZWxpbmUocHBsLCBjYW1lcmEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3BpcGVsaW5lRXZlbnQuZW1pdChQaXBlbGluZUV2ZW50VHlwZS5SRU5ERVJfQ0FNRVJBX0VORCwgY2FtZXJhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gUGlwZWxpbmVzXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIHByaXZhdGUgX2J1aWxkU2ltcGxlUGlwZWxpbmUoXHJcbiAgICAgICAgICAgIHBwbDogcmVuZGVyaW5nLkJhc2ljUGlwZWxpbmUsXHJcbiAgICAgICAgICAgIGNhbWVyYTogcmVuZGVyZXIuc2NlbmUuQ2FtZXJhLFxyXG4gICAgICAgICk6IHZvaWQge1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KE1hdGguZmxvb3IoY2FtZXJhLndpbmRvdy53aWR0aCksIDEpO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heChNYXRoLmZsb29yKGNhbWVyYS53aW5kb3cuaGVpZ2h0KSwgMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yTmFtZSA9IHRoaXMuX2NhbWVyYUNvbmZpZ3MuY29sb3JOYW1lO1xyXG4gICAgICAgICAgICBjb25zdCBkZXB0aFN0ZW5jaWxOYW1lID0gdGhpcy5fY2FtZXJhQ29uZmlncy5kZXB0aFN0ZW5jaWxOYW1lO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgdmlld3BvcnQgPSBjYW1lcmEudmlld3BvcnQ7ICAvLyBSZWR1Y2UgQysrL1RTIGludGVyb3BcclxuICAgICAgICAgICAgdGhpcy5fdmlld3BvcnQubGVmdCA9IE1hdGgucm91bmQodmlld3BvcnQueCAqIHdpZHRoKTtcclxuICAgICAgICAgICAgdGhpcy5fdmlld3BvcnQudG9wID0gTWF0aC5yb3VuZCh2aWV3cG9ydC55ICogaGVpZ2h0KTtcclxuICAgICAgICAgICAgLy8gSGVyZSB3ZSBtdXN0IHVzZSBjYW1lcmEudmlld3BvcnQud2lkdGggaW5zdGVhZCBvZiBjYW1lcmEudmlld3BvcnQueiwgd2hpY2hcclxuICAgICAgICAgICAgLy8gaXMgdW5kZWZpbmVkIG9uIG5hdGl2ZSBwbGF0Zm9ybS4gVGhlIHNhbWUgYXMgY2FtZXJhLnZpZXdwb3J0LmhlaWdodC5cclxuICAgICAgICAgICAgdGhpcy5fdmlld3BvcnQud2lkdGggPSBNYXRoLm1heChNYXRoLnJvdW5kKHZpZXdwb3J0LndpZHRoICogd2lkdGgpLCAxKTtcclxuICAgICAgICAgICAgdGhpcy5fdmlld3BvcnQuaGVpZ2h0ID0gTWF0aC5tYXgoTWF0aC5yb3VuZCh2aWV3cG9ydC5oZWlnaHQgKiBoZWlnaHQpLCAxKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNsZWFyQ29sb3IgPSBjYW1lcmEuY2xlYXJDb2xvcjsgIC8vIFJlZHVjZSBDKysvVFMgaW50ZXJvcFxyXG4gICAgICAgICAgICB0aGlzLl9jbGVhckNvbG9yLnggPSBjbGVhckNvbG9yLng7XHJcbiAgICAgICAgICAgIHRoaXMuX2NsZWFyQ29sb3IueSA9IGNsZWFyQ29sb3IueTtcclxuICAgICAgICAgICAgdGhpcy5fY2xlYXJDb2xvci56ID0gY2xlYXJDb2xvci56O1xyXG4gICAgICAgICAgICB0aGlzLl9jbGVhckNvbG9yLncgPSBjbGVhckNvbG9yLnc7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwYXNzID0gcHBsLmFkZFJlbmRlclBhc3Mod2lkdGgsIGhlaWdodCwgJ2RlZmF1bHQnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGJpbmQgb3V0cHV0IHJlbmRlciB0YXJnZXRcclxuICAgICAgICAgICAgaWYgKGZvcndhcmROZWVkQ2xlYXJDb2xvcihjYW1lcmEpKSB7XHJcbiAgICAgICAgICAgICAgICBwYXNzLmFkZFJlbmRlclRhcmdldChjb2xvck5hbWUsIExvYWRPcC5DTEVBUiwgU3RvcmVPcC5TVE9SRSwgdGhpcy5fY2xlYXJDb2xvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXNzLmFkZFJlbmRlclRhcmdldChjb2xvck5hbWUsIExvYWRPcC5MT0FELCBTdG9yZU9wLlNUT1JFKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gYmluZCBkZXB0aCBzdGVuY2lsIGJ1ZmZlclxyXG4gICAgICAgICAgICBpZiAoY2FtZXJhLmNsZWFyRmxhZyAmIENsZWFyRmxhZ0JpdC5ERVBUSF9TVEVOQ0lMKSB7XHJcbiAgICAgICAgICAgICAgICBwYXNzLmFkZERlcHRoU3RlbmNpbChcclxuICAgICAgICAgICAgICAgICAgICBkZXB0aFN0ZW5jaWxOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIExvYWRPcC5DTEVBUixcclxuICAgICAgICAgICAgICAgICAgICBTdG9yZU9wLkRJU0NBUkQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLmNsZWFyRGVwdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLmNsZWFyU3RlbmNpbCxcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEuY2xlYXJGbGFnICYgQ2xlYXJGbGFnQml0LkRFUFRIX1NURU5DSUwsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFzcy5hZGREZXB0aFN0ZW5jaWwoZGVwdGhTdGVuY2lsTmFtZSwgTG9hZE9wLkxPQUQsIFN0b3JlT3AuRElTQ0FSRCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBhc3Muc2V0Vmlld3BvcnQodGhpcy5fdmlld3BvcnQpO1xyXG5cclxuICAgICAgICAgICAgLy8gVGhlIG9wYXF1ZSBxdWV1ZSBpcyB1c2VkIGZvciBSZWZsZWN0aW9uIHByb2JlIHByZXZpZXdcclxuICAgICAgICAgICAgcGFzcy5hZGRRdWV1ZShRdWV1ZUhpbnQuT1BBUVVFKVxyXG4gICAgICAgICAgICAgICAgLmFkZFNjZW5lKGNhbWVyYSwgU2NlbmVGbGFncy5PUEFRVUUpO1xyXG5cclxuICAgICAgICAgICAgLy8gVGhlIGJsZW5kIHF1ZXVlIGlzIHVzZWQgZm9yIFVJIGFuZCBHaXptb3NcclxuICAgICAgICAgICAgbGV0IGZsYWdzID0gU2NlbmVGbGFncy5CTEVORCB8IFNjZW5lRmxhZ3MuVUk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZVByb2ZpbGVyKSB7XHJcbiAgICAgICAgICAgICAgICBmbGFncyB8PSBTY2VuZUZsYWdzLlBST0ZJTEVSO1xyXG4gICAgICAgICAgICAgICAgcGFzcy5zaG93U3RhdGlzdGljcyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGFzcy5hZGRRdWV1ZShRdWV1ZUhpbnQuQkxFTkQpXHJcbiAgICAgICAgICAgICAgICAuYWRkU2NlbmUoY2FtZXJhLCBmbGFncyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9idWlsZEZvcndhcmRQaXBlbGluZShcclxuICAgICAgICAgICAgcHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSxcclxuICAgICAgICAgICAgY2FtZXJhOiByZW5kZXJlci5zY2VuZS5DYW1lcmEsXHJcbiAgICAgICAgICAgIHNjZW5lOiByZW5kZXJlci5SZW5kZXJTY2VuZSxcclxuICAgICAgICAgICAgcGFzc0J1aWxkZXJzOiByZW5kZXJpbmcuUGlwZWxpbmVQYXNzQnVpbGRlcltdLFxyXG4gICAgICAgICk6IHZvaWQge1xyXG4gICAgICAgICAgICBzb3J0UGlwZWxpbmVQYXNzQnVpbGRlcnNCeVJlbmRlck9yZGVyKHBhc3NCdWlsZGVycyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb250ZXh0OiBQaXBlbGluZUNvbnRleHQgPSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvck5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgZGVwdGhTdGVuY2lsTmFtZTogJycsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBsZXQgbGFzdFBhc3M6IHJlbmRlcmluZy5CYXNpY1JlbmRlclBhc3NCdWlsZGVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBidWlsZGVyIG9mIHBhc3NCdWlsZGVycykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ1aWxkZXIuc2V0dXApIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0UGFzcyA9IGJ1aWxkZXIuc2V0dXAocHBsLCB0aGlzLl9jb25maWdzLCB0aGlzLl9jYW1lcmFDb25maWdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW1lcmEsIGNvbnRleHQsIGxhc3RQYXNzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXNzZXJ0KHRoaXMuX2NhbWVyYUNvbmZpZ3MucmVtYWluaW5nUGFzc2VzID09PSAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX2luaXRNYXRlcmlhbHMocHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSk6IG51bWJlciB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldHVwUGlwZWxpbmVDb25maWdzKHBwbCwgdGhpcy5fY29uZmlncyk7XHJcblxyXG4gICAgICAgICAgICAvLyBXaGVuIGFkZCBuZXcgZWZmZWN0IGFzc2V0LCBwbGVhc2UgYWRkIGl0cyB1dWlkIHRvIHRoZSBkZXBlbmRlbnRBc3NldHMgaW4gY2MuY29uZmlnLmpzb24uXHJcbiAgICAgICAgICAgIHRoaXMuX2NvcHlBbmRUb25lbWFwTWF0ZXJpYWwuX3V1aWQgPSBgYnVpbHRpbi1waXBlbGluZS10b25lLW1hcHBpbmctbWF0ZXJpYWxgO1xyXG4gICAgICAgICAgICB0aGlzLl9jb3B5QW5kVG9uZW1hcE1hdGVyaWFsLmluaXRpYWxpemUoeyBlZmZlY3ROYW1lOiAncGlwZWxpbmUvcG9zdC1wcm9jZXNzL3RvbmUtbWFwcGluZycgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY29weUFuZFRvbmVtYXBNYXRlcmlhbC5lZmZlY3RBc3NldCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5pdGlhbGl6ZWQgPyAwIDogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyaW5nLnNldEN1c3RvbVBpcGVsaW5lKCdCdWlsdGluJywgbmV3IEJ1aWx0aW5QaXBlbGluZUJ1aWxkZXIoKSk7XHJcblxyXG59IC8vIGlmIChyZW5kZXJpbmcpXHJcbiJdfQ==