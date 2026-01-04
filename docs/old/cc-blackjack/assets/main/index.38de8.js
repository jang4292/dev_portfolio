System.register("chunks:///_virtual/ApiTypes.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b790av1q7RC36//qh5t5MdO", "ApiTypes", undefined);
      /*
       * ApiTypes.ts — Sample DTOs / Contracts for Cocos Creator 3.8.x (TypeScript, MVVM)
       *
       * Purpose
       *  - Single source of truth for client↔server request/response shapes
       *  - Strong typing for Repository & ViewModel layers
       *  - Clear boundaries for auth/session, user, gameplay/economy, and common envelopes
       */
      // =========================
      // REQUEST Login 
      // =========================
      // =========================
      // RESPONSE  
      // =========================
      // =========================
      // Game List
      // =========================
      // =========================
      // Common & Utilities
      // =========================
      // export type ISODateTime = string; // e.g., "2025-08-25T03:00:00.000Z"
      // export type UnixMillis = number;  // e.g., Date.now()
      // export type UserId = string & { readonly __brand: unique symbol };
      // export type ItemId = string & { readonly __brand: unique symbol };
      // export type SessionToken = string & { readonly __brand: unique symbol };
      // export enum Platform {
      //   Web = "web",
      //   WebView = "webview",
      //   FBInstant = "fbinstant",
      //   AndroidNative = "android",
      //   IOSNative = "ios",
      // }
      // export enum CurrencyCode {
      //   COIN = "COIN",
      //   GEM = "GEM",
      //   KRW = "KRW",
      //   USD = "USD",
      // }
      // export interface Pagination {
      //   page: number;      // 1-based
      //   pageSize: number;  // items per page
      // }
      // export interface PageMeta {
      //   total: number;
      //   page: number;
      //   pageSize: number;
      // }
      // // Standard API envelope (either wrap responses or return naked payloads—choose one policy and stick to it)
      // export interface ApiMeta {
      //   serverTime: ISODateTime;
      //   requestId: string; // trace id
      // }
      // export interface ApiSuccess<T> {
      //   ok: true;
      //   data: T;
      //   meta?: ApiMeta;
      // }
      // export enum ApiErrorCode {
      //   UNKNOWN = "UNKNOWN",
      //   VALIDATION = "VALIDATION",
      //   UNAUTHORIZED = "UNAUTHORIZED",
      //   FORBIDDEN = "FORBIDDEN",
      //   NOT_FOUND = "NOT_FOUND",
      //   RATE_LIMITED = "RATE_LIMITED",
      //   CONFLICT = "CONFLICT",
      //   SERVER_ERROR = "SERVER_ERROR",
      //   SESSION_EXPIRED = "SESSION_EXPIRED",
      // }
      // export interface ApiErrorDetailField {
      //   field: string;
      //   message: string;
      // }
      // export interface ApiFail {
      //   ok: false;
      //   code: ApiErrorCode;
      //   message: string;
      //   status?: number; // HTTP status
      //   details?: ApiErrorDetailField[] | Record<string, unknown>;
      //   meta?: ApiMeta;
      // }
      // export type ApiResponse<T> = ApiSuccess<T> | ApiFail;
      // // Helper to build paged responses
      // export interface Paged<T> {
      //   data: T[];
      //   meta: PageMeta;
      // }
      // // =========================
      // // Auth / Session
      // // =========================
      // export interface LoginRequest {
      //   // FBInstant might return empty getID in v8+; signedInfo is recommended for server-side verification
      //   fbId?: string;            // optional if using signedInfo only
      //   signedInfo?: string;      // getSignedPlayerInfoAsync(...).getSignature()
      //   // Environment hints (optional but useful for analytics & risk)
      //   platform: Platform;
      //   appVersion?: string;      // client app build version
      //   deviceId?: string;        // vendor/device fingerprint if available
      //   locale?: string;          // e.g., "ko-KR"
      //   tzOffsetMinutes?: number; // client timezone offset
      // }
      // export interface LoginUser {
      //   userId: UserId;
      //   nickname?: string;
      //   country?: string;
      //   createdAt: ISODateTime;
      //   lastLoginAt: ISODateTime;
      // }
      // export interface LoginResponse {
      //   accessToken: SessionToken;
      //   // If you use refresh tokens via HttpOnly cookie, you may omit it here on the client
      //   expiresInSec: number;   // lifetime of access token
      //   user: LoginUser;
      // }
      // export interface RefreshResponse {
      //   accessToken: SessionToken;
      //   expiresInSec: number;
      // }
      // export interface LogoutResponse {
      //   success: true;
      // }
      // // =========================
      // // User/Profile
      // // =========================
      // export interface UserProfile {
      //   userId: UserId;
      //   nickname: string;
      //   level: number;
      //   exp: number;
      //   avatarUrl?: string;
      //   // add any FBInstant-linked flags if needed
      // }
      // export interface UpdateNicknameRequest {
      //   nickname: string;
      // }
      // export interface UpdateSettingsRequest {
      //   sfxOn?: boolean;
      //   bgmOn?: boolean;
      //   pushAllowed?: boolean;
      //   language?: string; // e.g., "ko", "en"
      // }
      // export interface UserSettingsResponse {
      //   userId: UserId;
      //   sfxOn: boolean;
      //   bgmOn: boolean;
      //   pushAllowed: boolean;
      //   language: string;
      // }
      // // =========================
      // // Economy / Wallet / Inventory
      // // =========================
      // export interface Wallet {
      //   userId: UserId;
      //   balances: Record<CurrencyCode, number>; // e.g., { COIN: 1000, GEM: 50 }
      //   updatedAt: ISODateTime;
      // }
      // export interface InventoryItem {
      //   itemId: ItemId;
      //   sku: string;       // shop sku
      //   displayName: string;
      //   quantity: number;
      //   meta?: Record<string, unknown>;
      // }
      // export interface InventoryResponse {
      //   userId: UserId;
      //   items: InventoryItem[];
      //   updatedAt: ISODateTime;
      // }
      // export interface GrantCurrencyRequest {
      //   currency: CurrencyCode;
      //   amount: number; // positive to grant, negative to deduct (if server allows)
      //   reason?: string;
      // }
      // export interface GrantCurrencyResponse {
      //   wallet: Wallet;
      // }
      // export interface ConsumeItemRequest {
      //   itemId: ItemId;
      //   quantity: number;
      // }
      // export interface ConsumeItemResponse {
      //   inventory: InventoryResponse;
      //   wallet?: Wallet; // if consumption also affects balances
      // }
      // // =========================
      // // Shop / Purchase (optional)
      // // =========================
      // export interface ShopItem {
      //   sku: string;
      //   title: string;
      //   description?: string;
      //   price: number; // real money or soft currency depending on policy
      //   currency: CurrencyCode;
      //   iconUrl?: string;
      //   payload?: Record<string, unknown>;
      // }
      // export type ShopCatalogResponse = Paged<ShopItem>;
      // export interface PurchaseRequest {
      //   sku: string;
      //   provider?: "fb" | "iap" | "web"; // payment provider hint
      //   payload?: Record<string, unknown>;   // provider-specific data
      // }
      // export interface PurchaseResult {
      //   orderId: string;
      //   sku: string;
      //   granted: {
      //     currencies?: { code: CurrencyCode; amount: number }[];
      //     items?: { itemId: ItemId; quantity: number }[];
      //   };
      //   wallet?: Wallet;
      //   inventory?: InventoryResponse;
      // }
      // // =========================
      // // Leaderboard / Social (optional)
      // // =========================
      // export interface LeaderboardEntry {
      //   userId: UserId;
      //   nickname: string;
      //   score: number;
      //   rank: number;
      //   updatedAt: ISODateTime;
      // }
      // export type LeaderboardResponse = Paged<LeaderboardEntry>;
      // // =========================
      // // Server Utilities
      // // =========================
      // export interface ServerTimeResponse {
      //   serverTime: ISODateTime;
      // }
      // export interface HealthResponse {
      //   status: "ok" | "degraded" | "down";
      //   version: string;       // api/service version
      //   build: string;         // commit or build id
      //   time: ISODateTime;
      // }
      // // =========================
      // // WebSocket / Push (optional, example)
      // // =========================
      // export type PushEventType =
      //   | "wallet.updated"
      //   | "inventory.updated"
      //   | "system.announcement";
      // export interface PushEnvelope<TType extends PushEventType, TPayload> {
      //   type: TType;
      //   ts: UnixMillis;
      //   payload: TPayload;
      // }
      // export type WalletUpdatedPush = PushEnvelope<
      //   "wallet.updated",
      //   { wallet: Wallet }
      // >;
      // export type InventoryUpdatedPush = PushEnvelope<
      //   "inventory.updated",
      //   { inventory: InventoryResponse }
      // >;
      // export type SystemAnnouncementPush = PushEnvelope<
      //   "system.announcement",
      //   { message: string; locale?: string }
      // >;
      // export type AnyPush =
      //   | WalletUpdatedPush
      //   | InventoryUpdatedPush
      //   | SystemAnnouncementPush;
      // // =========================
      // // Example: Narrow "naked" endpoints vs envelope style
      // // =========================
      // // Choose one style across your API surface to keep consistency.
      // // 1) Envelope style: ApiResponse<LoginResponse>
      // // 2) Naked style: LoginResponse
      // // Your HttpClient/Repository can adapt either by decoding ApiResponse<T> or passing T directly.
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AuthGameService.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7f1e89wlkJHzYf7mYPWSH/b", "AuthGameService", undefined); // core/auth/AuthGameService.ts
      // 로그인, 토큰/세션 관리
      var AuthGameService = exports('AuthGameService', /*#__PURE__*/function () {
        function AuthGameService(http) {
          this.SID = null;
          this.PK = {
            t: "",
            n: ""
          };
          this.http = http;
        }
        var _proto = AuthGameService.prototype;
        _proto.login = function login(pType, pCode) {
          var _this = this;
          return new Promise( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resovle) {
            var res;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this.http.post('login', {
                    pType: pType,
                    pCode: pCode
                  });
                case 2:
                  res = _context.sent;
                  console.log(" res : " + JSON.stringify(res));

                  // this.PK = res.PK;
                  // this.SID = res.SID;
                  return _context.abrupt("return", resovle(res.data));
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })));
        };
        _proto.onDeal = function onDeal(bet) {
          var _this2 = this;
          return new Promise( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve) {
            var res;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _this2.http.post('game_start', {
                    bet: bet
                  });
                case 2:
                  res = _context2.sent;
                  console.log(" res : " + JSON.stringify(res));
                  console.log(res);
                  return _context2.abrupt("return", resolve(res.data));
                case 6:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          })));
        };
        _proto.refreshGameStates = function refreshGameStates() {
          var _this3 = this;
          return new Promise( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve) {
            var res;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return _this3.http.post('game_status');
                case 2:
                  res = _context3.sent;
                  console.log(" res : " + JSON.stringify(res));
                  console.log(res);
                  return _context3.abrupt("return", resolve(res.data));
                case 6:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          })));
        };
        _proto.gameAction = function gameAction(actionType, sid, req) {
          var _this4 = this;
          if (actionType === void 0) {
            actionType = 1;
          }
          if (sid === void 0) {
            sid = 0;
          }
          if (req === void 0) {
            req = 0;
          }
          return new Promise( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve) {
            var res;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return _this4.http.post('game_action', {
                    act: actionType,
                    sid: sid,
                    req: req
                  });
                case 2:
                  res = _context4.sent;
                  return _context4.abrupt("return", resolve(res.data));
                case 4:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          })));
        };
        return AuthGameService;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AuthService.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameListData.ts', './FBManager.ts', './SessionStore.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, GameListData, FBManager, SessionStore;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameListData = module.GameListData;
    }, function (module) {
      FBManager = module.FBManager;
    }, function (module) {
      SessionStore = module.SessionStore;
    }],
    execute: function () {
      cclegacy._RF.push({}, "938adxb9yZJkrlsx85p1MqH", "AuthService", undefined);
      var AuthService = exports('AuthService', /*#__PURE__*/function () {
        function AuthService(http) {
          this.http = http;
        }
        var _proto = AuthService.prototype;
        _proto.loginWithFB = function loginWithFB() {
          var _this = this;
          // FBInstant SDK에서 가져온 식별자/서명
          // v8 환경에서 getID가 null인 케이스는 별도 처리(서명 정보 사용 등) — 서버 계약에 맞춰 조정
          return new Promise( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve) {
            var _navigator$language;
            var pType, pCode, locale, osCode, res;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  pType = FBManager.getPlayerType();
                  pCode = FBManager.getPlayerIdSafe().toString();
                  locale = (_navigator$language = navigator.language) != null ? _navigator$language : "NONE";
                  osCode = FBManager.getPlayerOsCode();
                  if (pCode) {
                    _context.next = 6;
                    break;
                  }
                  throw new Error("FBInstant player ID is null, cannot login");
                case 6:
                  _context.next = 8;
                  return _this.http.post('login', null, {
                    pType: pType,
                    pCode: pCode,
                    locale: locale,
                    osCode: osCode
                  });
                case 8:
                  res = _context.sent;
                  if (res.success === -2) {
                    console.error("Login Failed: wrong parameters error code -2");
                  }
                  SessionStore.setLoginSession({
                    SID: res.SID
                  });
                  SessionStore.setUserDataSession(res.data);
                  return _context.abrupt("return", resolve());
                case 13:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })));
        };
        _proto.logout = function logout() {
          SessionStore.setLoginSession(null);
        };
        _proto.loadGameList = function loadGameList() {
          var _this2 = this;
          return new Promise( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve) {
            var _SessionStore$getLogi;
            var res;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _this2.http.post('game_list', (_SessionStore$getLogi = SessionStore.getLoginSession()) == null ? void 0 : _SessionStore$getLogi.SID);
                case 2:
                  res = _context2.sent;
                  SessionStore.setGameListDataSession(res);
                  GameListData.setData(res.data);
                  return _context2.abrupt("return", resolve());
                case 6:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          })));
        };
        _proto.loadFeaturesUnlockList = function loadFeaturesUnlockList() {
          var _this3 = this;
          return new Promise( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve) {
            var _SessionStore$getLogi2;
            var res;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return _this3.http.post('unlock_list', (_SessionStore$getLogi2 = SessionStore.getLoginSession()) == null ? void 0 : _SessionStore$getLogi2.SID);
                case 2:
                  res = _context3.sent;
                  SessionStore.setFeaturesUnlockListDataSession(res);
                  return _context3.abrupt("return", resolve());
                case 5:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          })));
        };
        _proto.loadRewardBoxList = function loadRewardBoxList() {
          var _this4 = this;
          return new Promise( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve) {
            var _SessionStore$getLogi3;
            var res;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return _this4.http.post('rewardbox_list', (_SessionStore$getLogi3 = SessionStore.getLoginSession()) == null ? void 0 : _SessionStore$getLogi3.SID);
                case 2:
                  res = _context4.sent;
                  SessionStore.setRewardBoxListDataSession(res);
                  return _context4.abrupt("return", resolve());
                case 5:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          })));
        };
        _proto.loadPictureList = function loadPictureList() {
          var _this5 = this;
          return new Promise( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve) {
            var _SessionStore$getLogi4;
            var res;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return _this5.http.post('picture_list', (_SessionStore$getLogi4 = SessionStore.getLoginSession()) == null ? void 0 : _SessionStore$getLogi4.SID);
                case 2:
                  res = _context5.sent;
                  SessionStore.setPictureListDataSession(res);
                  return _context5.abrupt("return", resolve());
                case 5:
                case "end":
                  return _context5.stop();
              }
            }, _callee5);
          })));
        };
        return AuthService;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BasePopup.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "cb4ab7vcgVBVIdO5AfyP/8E", "BasePopup", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BasePopup = exports('BasePopup', (_dec = ccclass('BasePopup'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BasePopup, _Component);
        function BasePopup() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "content", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = BasePopup.prototype;
        // 스케일/페이드 대상
        _proto.onOpen = function onOpen(initData) {
          // 자식 클래스에서 초기값 바인딩
          // this.playOpenAnim();
        };
        _proto.onClose = function onClose() {
          // 자식 클래스에서 정리 로직
        };
        _proto.playOpenAnim = function playOpenAnim() {
          if (!this.content) return;
          // this.content.scale = this.content.scale.set(0.9, 0.9, 1);
          // this.content.opacity = 0;
          // tween(this.content)
          //   .to(0.1, { opacity: 255 })
          //   .to(0.12, { scale: this.content.scale.set(1.0, 1.0, 1) })
          //   .start();
        };

        _proto.playCloseAnim = function playCloseAnim(cb) {
          if (!this.content) {
            cb();
            return;
          }
          return cb();
          //   tween(this.content)
          //     .to(0.12, { scale: this.content.scale.set(0.92, 0.92, 1) })
          //     .to(0.08, { opacity: 0 })
          //     .call(cb)
          //     .start();
        };

        return BasePopup;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BootManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HttpClient.ts', './AuthService.ts', './SessionStore.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, director, Component, HttpClient, AuthService, SessionStore;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      HttpClient = module.HttpClient;
    }, function (module) {
      AuthService = module.AuthService;
    }, function (module) {
      SessionStore = module.SessionStore;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "62fafr0/K1HmqvMsXRjdqYl", "BootManager", undefined);
      var ccclass = _decorator.ccclass;
      var BootManager = exports('BootManager', (_dec = ccclass('BootManager'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BootManager, _Component);
        function BootManager() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = BootManager.prototype;
        _proto.onLoad = function onLoad() {
          director.addPersistRootNode(this.node);
        };
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var http, auth;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  // 부트 시퀀스 구현
                  console.log('BootManager started');
                  // 1) FBInstant 준비 완료 가정 (initializeAsync/startGameAsync는 밖에서 완료 확인)
                  // 2) 세션 없으면 로그인 시도

                  // const params = new URLSearchParams(window.location.search);
                  // const playerId = params.get("playerId");     // "12345"

                  // console.log('playerId : ' + playerId)
                  // const id = params.get("id");     // "12345"
                  // const code = params.get("code"); // "abc"
                  // const type = params.get("type"); // "preview"
                  if (SessionStore.isLoggedIn()) {
                    _context.next = 8;
                    break;
                  }
                  http = new HttpClient({
                    baseURL: 'https://dev.4tune3.com:41618'
                  });
                  auth = new AuthService(http);
                  _context.next = 6;
                  return auth.loginWithFB();
                case 6:
                  _context.next = 8;
                  return Promise.all([auth.loadGameList(), auth.loadFeaturesUnlockList(), auth.loadRewardBoxList(), auth.loadPictureList()]);
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function start() {
            return _start.apply(this, arguments);
          }
          return start;
        }();
        return BootManager;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ButtonController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "5bde65mGEFBW6VrVE9MY30r", "ButtonController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ButtonController = exports('ButtonController', (_dec = ccclass('ButtonController'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ButtonController, _Component);
        function ButtonController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "surrenderButton", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "splitButton", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "doubleDownButton", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "standButton", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hitButton", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ButtonController.prototype;
        // public hide() {
        //     this.node.active = false;
        // }
        // public show() {
        //     this.node.active = true;
        // }
        _proto.refreshButtons = function refreshButtons(data) {
          // debugger
          if ((data & 1) === 0) {
            this.hitButton.node.active = false;
          } else {
            this.hitButton.node.active = true;
          }
          if ((data & 2) === 0) {
            this.standButton.node.active = false;
          } else {
            this.standButton.node.active = true;
          }
          if ((data & 4) === 0) {
            this.doubleDownButton.node.active = false;
          } else {
            this.doubleDownButton.node.active = true;
          }
          if ((data & 8) === 0) {
            this.splitButton.node.active = false;
          } else {
            this.splitButton.node.active = true;
          }
          if ((data & 16) === 0) {
            this.surrenderButton.node.active = false;
          } else {
            this.surrenderButton.node.active = true;
          }
        };
        return ButtonController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "surrenderButton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "splitButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "doubleDownButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "standButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "hitButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Cards.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Prefab, Node, instantiate, Sprite, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Prefab = module.Prefab;
      Node = module.Node;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "b81c7QImYROP71vEJwNJ3/T", "Cards", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Cards = exports('Cards', (_dec = ccclass('Cards'), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec7 = property(Prefab), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Cards, _Component);
        function Cards() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "backCard", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cards0", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cards1", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cards2", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cards3", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardPrefab", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dealerCards", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "userCards", _descriptor8, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Cards.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.clearCards = function clearCards() {
          this.dealerCards.removeAllChildren();
          this.userCards.removeAllChildren();
        };
        _proto.setDealerCards = function setDealerCards(decks) {
          var _this2 = this;
          this.dealerCards.removeAllChildren();
          decks.forEach(function (deck, index) {
            var prefab = instantiate(_this2.cardPrefab);
            prefab.setParent(_this2.dealerCards);
            var cardSprite = prefab.getComponent(Sprite);
            _this2.setCard(cardSprite, deck);
            var out = prefab.getPosition();
            out.x = out.x + 50 * index;
            prefab.setPosition(out);
          });
        };
        _proto.setUserCards = function setUserCards(decks) {
          var _this3 = this;
          this.userCards.removeAllChildren();
          decks.forEach(function (deck, index) {
            var prefab = instantiate(_this3.cardPrefab);
            prefab.setParent(_this3.userCards);
            var cardSprite = prefab.getComponent(Sprite);
            _this3.setCard(cardSprite, deck);
            var out = prefab.getPosition();
            out.x = out.x + 50 * index;
            prefab.setPosition(out);
          });
        };
        _proto.setCard = function setCard(card, value) {
          if (value === 0) {
            card.spriteFrame = this.backCard;
            return;
          }
          var type = Math.floor(value / 100);
          var number = value % 100 - 1;
          if (type === 1) {
            card.spriteFrame = this.cards0[number];
          }
          if (type === 2) {
            card.spriteFrame = this.cards1[number];
          }
          if (type === 3) {
            card.spriteFrame = this.cards2[number];
          }
          if (type === 4) {
            card.spriteFrame = this.cards3[number];
          }
        };
        return Cards;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "backCard", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cards0", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cards1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cards2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "cards3", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "cardPrefab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "dealerCards", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "userCards", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventBus.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, EventTarget;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      EventTarget = module.EventTarget;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d284aJBrDNBVawpS1MN1RH3", "EventBus", undefined);
      var AppEvent = exports('AppEvent', /*#__PURE__*/function (AppEvent) {
        AppEvent["Logined"] = "Logined";
        AppEvent["UpdateGameList"] = "UpdateGameList";
        AppEvent["UpdateUserData"] = "UpdateUserData";
        AppEvent["LoadedUnlockList"] = "LoadedUnlockList";
        AppEvent["LoadedRewardBoxList"] = "LoadedRewardBoxList";
        AppEvent["LoadedPictureList"] = "LoadedPictureList";
        return AppEvent;
      }({})); // SessionChanged = 'SessionChanged',
      // UserUpdated = 'UserUpdated',
      // WalletUpdated = 'WalletUpdated',
      var TopEvent = exports('TopEvent', /*#__PURE__*/function (TopEvent) {
        TopEvent["ProfileUpdated"] = "ProfileUpdated";
        return TopEvent;
      }({}));
      var _EventBus = /*#__PURE__*/function (_EventTarget) {
        _inheritsLoose(_EventBus, _EventTarget);
        function _EventBus() {
          return _EventTarget.apply(this, arguments) || this;
        }
        return _EventBus;
      }(EventTarget);
      var EventBus = exports('EventBus', new _EventBus());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/fbinstant.mock.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function () {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3206e9WvNJPNoegcSya21ea", "fbinstant.mock", undefined);
      // assets/scripts/core/fbinstant.mock.ts
      (function installIGMock() {
        var g = globalThis;
        if (g.FBInstant) return; // 컨테이너면 그대로 사용
        // 개발/로컬 미리보기 안전 목
        var mock = {
          initializeAsync: function initializeAsync() {
            return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }))();
          },
          startGameAsync: function startGameAsync() {
            return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }))();
          },
          setLoadingProgress: function setLoadingProgress(_p) {},
          getPlatform: function getPlatform() {
            return 'TEST';
          },
          getLocale: function getLocale() {
            return 'ko_KR';
          },
          player: {
            // getID(){ return 'PLAYER_DEV_' + Math.floor(Math.random()*1e6); },
            getID: function getID() {
              return 416184161810002;
            },
            // 테스트용 고정 ID
            getSignedPlayerInfoAsync: function getSignedPlayerInfoAsync(_payload) {
              return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return", {
                        getSignature: function getSignature() {
                          return 'mock.signature.payload';
                        }
                      });
                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3);
              }))();
            }
          }
        };
        g.FBInstant = mock;
      })();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/fbinstant.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8fa2dRevKBOPY5+FHQfjP4i", "fbinstant", undefined); // assets/scripts/core/fbinstant.ts
      function resolveFBI() {
        var _ref, _ref2, _g$FBInstant, _g$top, _g$parent;
        var g = globalThis;
        // 컨테이너 상위 컨텍스트까지 탐색
        return (_ref = (_ref2 = (_g$FBInstant = g.FBInstant) != null ? _g$FBInstant : (_g$top = g.top) == null ? void 0 : _g$top.FBInstant) != null ? _ref2 : (_g$parent = g.parent) == null ? void 0 : _g$parent.FBInstant) != null ? _ref : null;
      }
      var FBIG = exports('FBIG', function (_ref3, _ref3$__ig) {
        (_ref3$__ig = (_ref3 = globalThis).__ig) != null ? _ref3$__ig : _ref3.__ig = {
          phase: 'idle',
          initP: null,
          startP: null
        };
        var S = globalThis.__ig;
        function initOnce() {
          return _initOnce.apply(this, arguments);
        }
        function _initOnce() {
          _initOnce = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var IG;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(S.phase === 'initialized' || S.phase === 'starting' || S.phase === 'started')) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  if (!S.initP) {
                    _context.next = 4;
                    break;
                  }
                  return _context.abrupt("return", S.initP);
                case 4:
                  IG = resolveFBI();
                  if (IG) {
                    _context.next = 7;
                    break;
                  }
                  throw new Error('FBInstant not available (not in IG container yet)');
                case 7:
                  S.phase = 'initializing';
                  S.initP = IG.initializeAsync().then(function () {
                    S.phase = 'initialized';
                  });
                  return _context.abrupt("return", S.initP);
                case 10:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return _initOnce.apply(this, arguments);
        }
        function startOnce() {
          return _startOnce.apply(this, arguments);
        }
        function _startOnce() {
          _startOnce = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var IG;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(S.phase === 'started')) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  if (!S.startP) {
                    _context2.next = 4;
                    break;
                  }
                  return _context2.abrupt("return", S.startP);
                case 4:
                  _context2.next = 6;
                  return initOnce();
                case 6:
                  IG = resolveFBI();
                  if (IG) {
                    _context2.next = 9;
                    break;
                  }
                  throw new Error('FBInstant lost after init');
                case 9:
                  S.phase = 'starting';
                  S.startP = IG.startGameAsync().then(function () {
                    S.phase = 'started';
                  });
                  return _context2.abrupt("return", S.startP);
                case 12:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          return _startOnce.apply(this, arguments);
        }
        function apiOrNull() {
          return resolveFBI();
        }
        function getPlayerIdSafe() {
          var IG = resolveFBI();
          if (!IG) return null;
          // await startOnce();

          // debugger
          try {
            var _IG$player$getID;
            var id = (_IG$player$getID = IG.player.getID == null ? void 0 : IG.player.getID()) != null ? _IG$player$getID : null;
            return id;
          } catch (e) {
            console.warn('FBInstant.getPlayerIdSafe failed, returning null ' + e);
            // getID() 실패 시 null 반환
            return null;
          } // v8에서도 유효
        }

        return {
          initOnce: initOnce,
          startOnce: startOnce,
          apiOrNull: apiOrNull,
          getPlayerIdSafe: getPlayerIdSafe,
          get phase() {
            return S.phase;
          }
        };
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FBInstantManager.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      // // assets/scripts/core/fbinstant.ts
      cclegacy._RF.push({}, "c04b9bDjjNFtLmxVwEzVyZi", "FBInstantManager", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FBManager.mock.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function () {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a7881xWfZZAxKSzbEb5I+n4", "FBManager.mock", undefined);
      // assets/scripts/core/fbinstant.mock.ts
      (function installIGMock() {
        var g = globalThis;
        if (g.FBInstant) return; // 컨테이너면 그대로 사용
        // 개발/로컬 미리보기 안전 목
        var mock = {
          // async initializeAsync(){},
          // async startGameAsync(){},
          // setLoadingProgress(_p:number){},
          getPlatform: function getPlatform() {
            return 'TEST';
          },
          getLocale: function getLocale() {
            return 'ko_KR';
          },
          player: {
            // getID(){ return 'PLAYER_DEV_' + Math.floor(Math.random()*1e6); },
            getID: function getID() {
              return 416184161810002;
            },
            // 테스트용 고정 ID
            getSignedPlayerInfoAsync: function getSignedPlayerInfoAsync(_payload) {
              return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", {
                        getSignature: function getSignature() {
                          return 'mock.signature.payload';
                        }
                      });
                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }))();
            }
          },
          getPlayerType: function getPlayerType() {
            return 100;
          }
        };
        g.FBInstant = mock;
      })();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FBManager.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f053dNO1lJOmZ8Yoozm6P62", "FBManager", undefined);
      var FBManager = exports('FBManager', /*#__PURE__*/function () {
        function FBManager() {}
        // public static getPlayerIdSafe(): Promise<string | null> {
        FBManager.getPlayerIdSafe = function getPlayerIdSafe() {
          var _ref, _ref2, _g$FBInstant, _g$top, _g$parent;
          var g = globalThis;
          // 컨테이너 상위 컨텍스트까지 탐색
          var IG = (_ref = (_ref2 = (_g$FBInstant = g.FBInstant) != null ? _g$FBInstant : (_g$top = g.top) == null ? void 0 : _g$top.FBInstant) != null ? _ref2 : (_g$parent = g.parent) == null ? void 0 : _g$parent.FBInstant) != null ? _ref : null;
          if (!IG) return null;
          try {
            var _IG$player$getID;
            var id = (_IG$player$getID = IG.player.getID == null ? void 0 : IG.player.getID()) != null ? _IG$player$getID : null;
            // console.log("SignedPlayerInfoAsync : ", IG.player.getSignedPlayerInfoAsync())
            return id;
          } catch (e) {
            console.warn('FBInstant.getPlayerIdSafe failed, returning null ' + e);
            // getID() 실패 시 null 반환
            return null;
          } // v8에서도 유효
        };

        FBManager.getPlayerOsCode = function getPlayerOsCode() {
          var _ref3, _ref4, _g$FBInstant2, _g$top2, _g$parent2;
          var g = globalThis;
          // 컨테이너 상위 컨텍스트까지 탐색
          var IG = (_ref3 = (_ref4 = (_g$FBInstant2 = g.FBInstant) != null ? _g$FBInstant2 : (_g$top2 = g.top) == null ? void 0 : _g$top2.FBInstant) != null ? _ref4 : (_g$parent2 = g.parent) == null ? void 0 : _g$parent2.FBInstant) != null ? _ref3 : null;
          if (!IG) return null;
          try {
            var _IG$getPlatform;
            var id = (_IG$getPlatform = IG.getPlatform == null ? void 0 : IG.getPlatform()) != null ? _IG$getPlatform : null;
            return id;
          } catch (e) {
            console.warn('FBInstant.getPlatform failed, returning null ' + e);
            // getPlatform() 실패 시 null 반환
            return null;
          } // v8에서도 유효
        };

        FBManager.getPlayerType = function getPlayerType() {
          var _ref5, _ref6, _g$FBInstant3, _g$top3, _g$parent3;
          var g = globalThis;
          // 컨테이너 상위 컨텍스트까지 탐색
          var IG = (_ref5 = (_ref6 = (_g$FBInstant3 = g.FBInstant) != null ? _g$FBInstant3 : (_g$top3 = g.top) == null ? void 0 : _g$top3.FBInstant) != null ? _ref6 : (_g$parent3 = g.parent) == null ? void 0 : _g$parent3.FBInstant) != null ? _ref5 : null;
          if (!IG) return null;
          try {
            var _IG$getPlayerType;
            var type = (_IG$getPlayerType = IG.getPlayerType == null ? void 0 : IG.getPlayerType()) != null ? _IG$getPlayerType : 1;
            return type;
          } catch (e) {
            console.warn('FBInstant.getPlayerType failed, returning null ' + e);
            // getPlatform() 실패 시 null 반환
            return null;
          } // v8에서도 유효
        };

        return FBManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameListData.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "18250p7didJwIU25+sAjlxr", "GameListData", undefined);
      var GameListData = exports('GameListData', /*#__PURE__*/function () {
        function GameListData() {}
        GameListData.setData = function setData(data) {
          var _this = this;
          var game = data.game;
          game.forEach(function (gameData) {
            var obj = gameData;
            _this.list.push(obj);
          });
        };
        GameListData.getGameServerURL = function getGameServerURL(index) {
          if (index === void 0) {
            index = 0;
          }
          var gameData = this.list[index];
          return gameData.gURL;
        };
        return GameListData;
      }());
      GameListData.list = [];
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ButtonController.ts', './Cards.ts', './HttpGameClient.ts', './AuthGameService.ts', './GameListData.ts', './PopupManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Node, Button, Label, Component, ButtonController, Cards, HttpGameClient, AuthGameService, GameListData, PopupManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      Button = module.Button;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      ButtonController = module.ButtonController;
    }, function (module) {
      Cards = module.Cards;
    }, function (module) {
      HttpGameClient = module.HttpGameClient;
    }, function (module) {
      AuthGameService = module.AuthGameService;
    }, function (module) {
      GameListData = module.GameListData;
    }, function (module) {
      PopupManager = module.PopupManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "779c3BBYthJXJuKiwos+rpW", "GameScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameScene = exports('GameScene', (_dec = ccclass('GameScene'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(ButtonController), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Button), _dec8 = property(Label), _dec9 = property(Cards), _dec10 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameScene, _Component);
        function GameScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "settingsPopup", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chipController", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buttonController", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "subButtonController", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dealButton", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "undoButton", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "currentBetLabel", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cards", _descriptor8, _assertThisInitialized(_this));
          _this.timeoutId = -1;
          _this.currentBetValue = 0;
          _this.betArray = [];
          _this.auth = void 0;
          _initializerDefineProperty(_this, "balanceLable", _descriptor9, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = GameScene.prototype;
        _proto.onLoad = function onLoad() {
          var url = GameListData.getGameServerURL(0);
          var http = new HttpGameClient({
            baseURL: url
          });
          this.auth = new AuthGameService(http);
          this.login();
        };
        _proto.login = /*#__PURE__*/function () {
          var _login = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var pType, pCode, res;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  pType = 100;
                  pCode = "416184161810002";
                  _context.next = 4;
                  return this.auth.login(pType, pCode);
                case 4:
                  res = _context.sent;
                  console.log(res);
                  this.balanceLable.string = res.balance.toLocaleString();
                  this.chipController.active = false;
                  this.undoButton.interactable = false;
                  this.dealButton.active = false;
                  this.buttonController.node.active = false;
                  this.subButtonController.active = false;
                  if (res.GID > 0) {
                    this.resetGameStates();
                  } else {
                    this.chipController.active = true;
                  }
                case 13:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function login() {
            return _login.apply(this, arguments);
          }
          return login;
        }();
        _proto.onClickChip = function onClickChip(eventTouch, customEventData) {
          this.currentBetValue += Number(customEventData);
          this.betArray.push(customEventData);
          this.currentBetLabel.string = this.currentBetValue.toLocaleString();
          if (this.currentBetValue > 0) {
            this.dealButton.active = true;
            this.undoButton.interactable = true;
          }
        };
        _proto.onClickRevertChip = function onClickRevertChip() {
          var _this$betArray$pop;
          var bet = (_this$betArray$pop = this.betArray.pop()) != null ? _this$betArray$pop : 0;
          this.currentBetValue -= bet;
          if (this.currentBetValue < 0) {
            this.currentBetValue = 0;
          }
          if (this.currentBetValue === 0) {
            this.dealButton.active = false;
            this.undoButton.interactable = false;
          }
          this.currentBetLabel.string = this.currentBetValue.toLocaleString();
        };
        _proto.onClickDealButton = /*#__PURE__*/function () {
          var _onClickDealButton = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var res;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(this.currentBetValue > 0)) {
                    _context2.next = 12;
                    break;
                  }
                  this.chipController.active = false;
                  this.undoButton.interactable = false;
                  this.dealButton.active = false;
                  _context2.next = 6;
                  return this.auth.onDeal(this.currentBetValue);
                case 6:
                  res = _context2.sent;
                  this.buttonController.refreshButtons(res.game.user.set[0].possible);
                  console.log(res);
                  this.balanceLable.string = res.balance.toLocaleString();
                  this.setCardData(res.game);
                  if (res.game.gs === 3) {
                    this.checkInsurance();
                  } else {
                    this.buttonController.node.active = true;
                  }
                case 12:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function onClickDealButton() {
            return _onClickDealButton.apply(this, arguments);
          }
          return onClickDealButton;
        }();
        _proto.resetGameStates = /*#__PURE__*/function () {
          var _resetGameStates = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var res, bet;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  this.buttonController.node.active = false;
                  _context3.next = 3;
                  return this.auth.refreshGameStates();
                case 3:
                  res = _context3.sent;
                  console.log('resetGameStates : ', JSON.stringify(res));
                  bet = res.game.user.set[0].bet;
                  this.currentBetLabel.string = bet;
                  this.setCardData(res.game);
                  if (res.game.gs === 3) {
                    this.checkInsurance();
                  } else if (res.game.gs === 30) {
                    this.gameEnd(res.balance);
                  } else if (res.game.gs === 10) {
                    this.buttonController.node.active = true;
                  } else {
                    this.chipController.active = true;
                  }
                case 9:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function resetGameStates() {
            return _resetGameStates.apply(this, arguments);
          }
          return resetGameStates;
        }();
        _proto.setCardData = function setCardData(game) {
          var userDeck = game.user.set[0].deck;
          var dealerDeck = game.dealer.deck;
          this.cards.setUserCards(userDeck);
          this.cards.setDealerCards(dealerDeck);
        };
        _proto.checkInsurance = function checkInsurance() {
          this.buttonController.node.active = false;
          this.subButtonController.active = true;
        };
        _proto.onHit = /*#__PURE__*/function () {
          var _onHit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var res;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  this.buttonController.node.active = false;
                  _context4.next = 3;
                  return this.auth.gameAction(1);
                case 3:
                  res = _context4.sent;
                  console.log('onHit : ', JSON.stringify(res));
                  this.setCardData(res.game);
                  this.buttonController.refreshButtons(res.game.user.set[0].possible);
                  if (res.game.gs === 10) {
                    this.buttonController.node.active = true;
                  } else if (res.game.gs === 30) {
                    this.gameEnd(res.balance);
                  }
                case 8:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function onHit() {
            return _onHit.apply(this, arguments);
          }
          return onHit;
        }();
        _proto.onStand = /*#__PURE__*/function () {
          var _onStand = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var res;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  this.buttonController.node.active = false;
                  _context5.next = 3;
                  return this.auth.gameAction(2);
                case 3:
                  res = _context5.sent;
                  this.buttonController.refreshButtons(res.game.user.set[0].possible);
                  console.log('onStand : ', JSON.stringify(res));
                  this.setCardData(res.game);
                  this.gameEnd(res.balance);
                case 8:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function onStand() {
            return _onStand.apply(this, arguments);
          }
          return onStand;
        }();
        _proto.gameEnd = function gameEnd(balance) {
          var _this2 = this;
          this.balanceLable.string = balance.toLocaleString();
          this.betArray = [];
          this.currentBetValue = 0;
          this.timeoutId = setTimeout(function () {
            _this2.cards.clearCards();
            _this2.chipController.active = true;
            _this2.dealButton.active = false;
            _this2.undoButton.interactable = false;
            _this2.currentBetLabel.string = _this2.currentBetValue.toLocaleString();
          }, 2000);
        };
        _proto.onDoubleDown = /*#__PURE__*/function () {
          var _onDoubleDown = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var res;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return this.auth.gameAction(4);
                case 2:
                  res = _context6.sent;
                  this.buttonController.refreshButtons(res.game.user.set[0].possible);
                  this.setCardData(res.game);
                  console.log('onDoubleDown : ', JSON.stringify(res));
                case 6:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
          function onDoubleDown() {
            return _onDoubleDown.apply(this, arguments);
          }
          return onDoubleDown;
        }();
        _proto.onSplit = /*#__PURE__*/function () {
          var _onSplit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var res;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return this.auth.gameAction(8);
                case 2:
                  res = _context7.sent;
                  this.buttonController.refreshButtons(res.game.user.set[0].possible);
                  this.setCardData(res.game);
                  console.log('onSplit : ', JSON.stringify(res));
                case 6:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));
          function onSplit() {
            return _onSplit.apply(this, arguments);
          }
          return onSplit;
        }();
        _proto.onSurrender = /*#__PURE__*/function () {
          var _onSurrender = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
            var res;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  this.buttonController.node.active = false;
                  _context8.next = 3;
                  return this.auth.gameAction(16);
                case 3:
                  res = _context8.sent;
                  this.buttonController.refreshButtons(res.game.user.set[0].possible);
                  console.log('onSurrender : ', JSON.stringify(res));
                  this.setCardData(res.game);
                  this.gameEnd(res.balance);
                case 8:
                case "end":
                  return _context8.stop();
              }
            }, _callee8, this);
          }));
          function onSurrender() {
            return _onSurrender.apply(this, arguments);
          }
          return onSurrender;
        }();
        _proto.onInsurance = function onInsurance() {};
        _proto.onEvenMoney = function onEvenMoney() {};
        _proto.onClickYes = /*#__PURE__*/function () {
          var _onClickYes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
            var res;
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  this.buttonController.node.active = false;
                  this.subButtonController.active = false;
                  _context9.next = 4;
                  return this.auth.gameAction(1000, 0, 1);
                case 4:
                  res = _context9.sent;
                  this.buttonController.refreshButtons(res.game.user.set[0].possible);
                  console.log('onClickYes : ', JSON.stringify(res));
                  this.buttonController.node.active = true;
                case 8:
                case "end":
                  return _context9.stop();
              }
            }, _callee9, this);
          }));
          function onClickYes() {
            return _onClickYes.apply(this, arguments);
          }
          return onClickYes;
        }();
        _proto.onClickNo = /*#__PURE__*/function () {
          var _onClickNo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
            var res;
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  this.buttonController.node.active = false;
                  this.subButtonController.active = false;
                  _context10.next = 4;
                  return this.auth.gameAction(1000, 0, 0);
                case 4:
                  res = _context10.sent;
                  console.log('onClickNo : ', JSON.stringify(res));
                  this.buttonController.refreshButtons(res.game.user.set[0].possible);
                  this.buttonController.node.active = true;
                  if (res.game.gs === 30) {
                    this.setCardData(res.game);
                    this.gameEnd(res.balance);
                  }
                case 9:
                case "end":
                  return _context10.stop();
              }
            }, _callee10, this);
          }));
          function onClickNo() {
            return _onClickNo.apply(this, arguments);
          }
          return onClickNo;
        }();
        _proto.onClickSettingButton = /*#__PURE__*/function () {
          var _onClickSettingButton = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
            var res, _res$payload;
            return _regeneratorRuntime().wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  console.log('setting button clicked');
                  _context11.next = 3;
                  return PopupManager.I().open(this.settingsPopup, {
                    musicOn: true,
                    sfxOn: false,
                    volume: 0.6
                  }, {
                    closeOnDim: true
                  });
                case 3:
                  res = _context11.sent;
                  if (res.action === 'confirm') {
                    _res$payload = res.payload, _res$payload.musicOn, _res$payload.sfxOn, _res$payload.volume; // TODO: AudioManager 적용, 저장 등
                  }

                case 5:
                case "end":
                  return _context11.stop();
              }
            }, _callee11, this);
          }));
          function onClickSettingButton() {
            return _onClickSettingButton.apply(this, arguments);
          }
          return onClickSettingButton;
        }();
        return GameScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "settingsPopup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "chipController", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "buttonController", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "subButtonController", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "dealButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "undoButton", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "currentBetLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "cards", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "balanceLable", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Gem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GemViewModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Component, GemViewModel;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      GemViewModel = module.GemViewModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "7899aqQzGRPWLMqURaKi+cq", "Gem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Gem = exports('Gem', (_dec = ccclass('Gem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Gem, _Component);
        function Gem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "countLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "timerLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fullCountLabel", _descriptor3, _assertThisInitialized(_this));
          _this.viewModel = new GemViewModel();
          return _this;
        }
        var _proto = Gem.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.viewModel.initListener({
            onCountChange: function onCountChange(count) {
              _this2.setCount(count);
            },
            onTimerTick: function onTimerTick(min, sec) {
              if (min < 0) min = 0;
              if (sec < 0) sec = 0;
              _this2.setTimer(min, sec);
            }
          });
          this.viewModel.initialize();
        };
        _proto.setCount = function setCount(count) {
          if (count === void 0) {
            count = 0;
          }
          this.countLabel.string = count.toString();
          if (count === 5) {
            this.timerLabel.node.active = false;
            this.fullCountLabel.active = true;
          } else {
            this.timerLabel.node.active = true;
            this.fullCountLabel.active = false;
          }
        };
        _proto.setTimer = function setTimer(min, sec) {
          if (min === void 0) {
            min = 0;
          }
          if (sec === void 0) {
            sec = 0;
          }
          this.timerLabel.string = min + " : " + sec;
        };
        return Gem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "countLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "timerLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "fullCountLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GemViewModel.ts", ['cc', './UserData2.ts'], function (exports) {
  var cclegacy, userData;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      userData = module.userData;
    }],
    execute: function () {
      cclegacy._RF.push({}, "29472JfeTlCB46dvbo56ldc", "GemViewModel", undefined);
      var GemViewModel = exports('GemViewModel', /*#__PURE__*/function () {
        function GemViewModel() {
          // ViewModel logic here if needed
          this.model = userData.gem;
          this.timeoutId = -1;
          this.onTimerTick = void 0;
          this.onCountChange = void 0;
        }
        var _proto = GemViewModel.prototype;
        _proto.initialize = function initialize() {
          var _this = this;
          this.model.subscribe(function () {
            _this.updateNotify();
          });
          this.updateNotify();
        };
        _proto.initListener = function initListener(callbacks) {
          this.onTimerTick = callbacks.onTimerTick;
          this.onCountChange = callbacks.onCountChange;
        };
        _proto.updateNotify = function updateNotify() {
          if (this.onCountChange) this.onCountChange(this.model.count);
          if (this.timer) this.timer(this.model.tsGemNext);
        };
        _proto.timer = function timer(seconds) {
          var _this2 = this;
          if (this.timeoutId > 0) clearTimeout(this.timeoutId);
          if (seconds < 0) {
            if (this.onTimerTick) this.onTimerTick(0, 0);
            return;
          }
          this.model.setTsGemNext(seconds);
          var min = Math.floor(seconds / 60);
          var sec = seconds % 60;
          this.onTimerTick(min, sec);
          this.timeoutId = setTimeout(function () {
            return _this2.timer(seconds - 1);
          }, 1000);
        };
        return GemViewModel;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HttpClient.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "aaf87tjk7dE6YlZl/QIEwOp", "HttpClient", undefined); // core/api/HttpClient.ts
      // 공통 HTTP 클라이언트 (토큰 주입, 재시도, 에러 표준화)
      var HttpClient = exports('HttpClient', /*#__PURE__*/function () {
        function HttpClient(opts) {
          this.opts = opts;
        }
        var _proto = HttpClient.prototype;
        _proto.request = /*#__PURE__*/function () {
          var _request = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(method, cmd, SID, body) {
            var _this$opts$getToken, _this$opts, _this$opts$retry$retr, _this$opts$retry, _this$opts$retry$dela, _this$opts$retry2;
            var headers, token, attempt, lastErr, retries, delayMs, data, res, payload, jsonRes;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  headers = {
                    'Content-Type': 'application/json'
                  };
                  token = (_this$opts$getToken = (_this$opts = this.opts).getToken) == null ? void 0 : _this$opts$getToken.call(_this$opts);
                  if (token) headers['Authorization'] = "Bearer " + token;
                  attempt = 0;
                  retries = (_this$opts$retry$retr = (_this$opts$retry = this.opts.retry) == null ? void 0 : _this$opts$retry.retries) != null ? _this$opts$retry$retr : 0;
                  delayMs = (_this$opts$retry$dela = (_this$opts$retry2 = this.opts.retry) == null ? void 0 : _this$opts$retry2.delayMs) != null ? _this$opts$retry$dela : 0;
                case 6:
                  if (!(attempt <= retries)) {
                    _context.next = 36;
                    break;
                  }
                  _context.prev = 7;
                  data = JSON.stringify({
                    cmd: cmd,
                    SID: SID,
                    data: body != null ? body : {}
                  });
                  console.log(data);
                  _context.next = 12;
                  return fetch(this.opts.baseURL, {
                    method: method,
                    headers: headers,
                    body: data
                  });
                case 12:
                  res = _context.sent;
                  if (res.ok) {
                    _context.next = 18;
                    break;
                  }
                  _context.next = 16;
                  return safeJson(res);
                case 16:
                  payload = _context.sent;
                  throw {
                    status: res.status,
                    payload: payload
                  };
                case 18:
                  _context.next = 20;
                  return safeJson(res);
                case 20:
                  jsonRes = _context.sent;
                  console.log(jsonRes);
                  return _context.abrupt("return", jsonRes);
                case 25:
                  _context.prev = 25;
                  _context.t0 = _context["catch"](7);
                  lastErr = _context.t0;
                  if (!(attempt++ < retries)) {
                    _context.next = 33;
                    break;
                  }
                  _context.next = 31;
                  return sleep(delayMs);
                case 31:
                  _context.next = 34;
                  break;
                case 33:
                  throw lastErr;
                case 34:
                  _context.next = 6;
                  break;
                case 36:
                  throw lastErr;
                case 37:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[7, 25]]);
          }));
          function request(_x, _x2, _x3, _x4) {
            return _request.apply(this, arguments);
          }
          return request;
        }();
        _proto.get = function get(u) {
          return this.request('GET', u);
        };
        _proto.post = function post(cmd, SID, b) {
          return this.request('POST', cmd, SID, b);
        };
        return HttpClient;
      }());
      function safeJson(_x5) {
        return _safeJson.apply(this, arguments);
      }
      function _safeJson() {
        _safeJson = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(res) {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return res.json();
              case 3:
                return _context2.abrupt("return", _context2.sent);
              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", null);
              case 9:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[0, 6]]);
        }));
        return _safeJson.apply(this, arguments);
      }
      function sleep(ms) {
        return new Promise(function (r) {
          return setTimeout(r, ms);
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HttpGameClient.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c8a51Ccro9Dm7mZz9MqGOz/", "HttpGameClient", undefined); // core/api/HttpClient.ts
      // 공통 HTTP 클라이언트 (토큰 주입, 재시도, 에러 표준화)
      var HttpGameClient = exports('HttpGameClient', /*#__PURE__*/function () {
        function HttpGameClient(opts) {
          this.SID = "";
          this.PK = {
            t: "",
            n: ""
          };
          this.opts = opts;
        }
        var _proto = HttpGameClient.prototype;
        // public async request<T>(method: HttpMethod, cmd: string, SID?: string, body?: any): Promise<T> {
        _proto.request = /*#__PURE__*/
        function () {
          var _request = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(method, cmd, body) {
            var _this$opts$getToken, _this$opts, _this$opts$retry$retr, _this$opts$retry, _this$opts$retry$dela, _this$opts$retry2;
            var headers, token, attempt, lastErr, retries, delayMs, data, res, payload, jsonRes;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  headers = {
                    'Content-Type': 'application/json'
                  };
                  token = (_this$opts$getToken = (_this$opts = this.opts).getToken) == null ? void 0 : _this$opts$getToken.call(_this$opts);
                  if (token) headers['Authorization'] = "Bearer " + token;
                  attempt = 0;
                  retries = (_this$opts$retry$retr = (_this$opts$retry = this.opts.retry) == null ? void 0 : _this$opts$retry.retries) != null ? _this$opts$retry$retr : 0;
                  delayMs = (_this$opts$retry$dela = (_this$opts$retry2 = this.opts.retry) == null ? void 0 : _this$opts$retry2.delayMs) != null ? _this$opts$retry$dela : 0;
                case 6:
                  if (!(attempt <= retries)) {
                    _context.next = 38;
                    break;
                  }
                  _context.prev = 7;
                  data = JSON.stringify({
                    cmd: cmd,
                    SID: this.SID,
                    PK: this.PK.n,
                    data: body != null ? body : {}
                  });
                  console.log(data);
                  _context.next = 12;
                  return fetch(this.opts.baseURL, {
                    method: method,
                    headers: headers,
                    body: data
                  });
                case 12:
                  res = _context.sent;
                  if (res.ok) {
                    _context.next = 18;
                    break;
                  }
                  _context.next = 16;
                  return safeJson(res);
                case 16:
                  payload = _context.sent;
                  throw {
                    status: res.status,
                    payload: payload
                  };
                case 18:
                  _context.next = 20;
                  return safeJson(res);
                case 20:
                  jsonRes = _context.sent;
                  console.log(jsonRes);
                  if (!!jsonRes.SID) {
                    this.SID = jsonRes.SID;
                  }
                  this.PK = jsonRes.PK;
                  return _context.abrupt("return", jsonRes);
                case 27:
                  _context.prev = 27;
                  _context.t0 = _context["catch"](7);
                  lastErr = _context.t0;
                  if (!(attempt++ < retries)) {
                    _context.next = 35;
                    break;
                  }
                  _context.next = 33;
                  return sleep(delayMs);
                case 33:
                  _context.next = 36;
                  break;
                case 35:
                  throw lastErr;
                case 36:
                  _context.next = 6;
                  break;
                case 38:
                  throw lastErr;
                case 39:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[7, 27]]);
          }));
          function request(_x, _x2, _x3) {
            return _request.apply(this, arguments);
          }
          return request;
        }();
        _proto.get = function get(u) {
          return this.request('GET', u);
        };
        _proto.post = function post(cmd, b) {
          return this.request('POST', cmd, b);
        };
        return HttpGameClient;
      }());
      function safeJson(_x4) {
        return _safeJson.apply(this, arguments);
      }
      function _safeJson() {
        _safeJson = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(res) {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return res.json();
              case 3:
                return _context2.abrupt("return", _context2.sent);
              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", null);
              case 9:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[0, 6]]);
        }));
        return _safeJson.apply(this, arguments);
      }
      function sleep(ms) {
        return new Promise(function (r) {
          return setTimeout(r, ms);
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./BasePopup.ts', './ButtonController.ts', './Cards.ts', './GameScene.ts', './PopupManager.ts', './SplashComponent.ts', './TabBarController.ts', './BootManager.ts', './FBInstantManager.ts', './FBManager.mock.ts', './FBManager.ts', './ApiTypes.ts', './HttpClient.ts', './HttpGameClient.ts', './AuthGameService.ts', './AuthService.ts', './fbinstant.mock.ts', './fbinstant.ts', './EventBus.ts', './SessionStore.ts', './GameListData.ts', './UserData.ts', './user.user-store.ts', './user.user-types.ts', './UserData2.ts', './Gem.ts', './PlayButton.ts', './Profile.ts', './GemViewModel.ts', './ProfileViewModel.ts', './SettingPopup.ts', './Top.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PlayButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, director, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "9e13fLMz/VJH4IN1/rHjTae", "PlayButton", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PlayButton = exports('PlayButton', (_dec = ccclass('PlayButton'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PlayButton, _Component);
        function PlayButton() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = PlayButton.prototype;
        _proto.onClick = function onClick() {
          console.log("PlayButton onClick");
          director.loadScene("game");
        };
        return PlayButton;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopupManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BasePopup.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, input, Input, KeyCode, Component, instantiate, Layers, BasePopup;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      input = module.input;
      Input = module.Input;
      KeyCode = module.KeyCode;
      Component = module.Component;
      instantiate = module.instantiate;
      Layers = module.Layers;
    }, function (module) {
      BasePopup = module.BasePopup;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "f1c3cXMBQpPhIFdrbttYrDi", "PopupManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PopupManager = exports('PopupManager', (_dec = ccclass('PopupManager'), _dec2 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PopupManager, _Component);
        function PopupManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "layer", _descriptor, _assertThisInitialized(_this));
          // Canvas 하위: 모달 전용 레이어
          // @property(Prefab) overlayPrefab!: Prefab; // 반투명 딤(prefab)
          _this.stack = [];
          return _this;
        }
        PopupManager.I = function I() {
          return this._inst;
        };
        var _proto = PopupManager.prototype;
        // private overlay!: Node;
        _proto.onLoad = function onLoad() {
          PopupManager._inst = this;
          // this.initOverlay();
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        }

        // private initOverlay() {
        //   this.overlay = instantiate(this.overlayPrefab);
        //   this.overlay.layer = Layers.Enum.UI_2D;
        //   this.overlay.active = false;
        //   this.overlay.setSiblingIndex(9999);
        //   this.overlay.on(Node.EventType.TOUCH_END, () => this.dismissTop('close'), this);
        //   this.layer.addChild(this.overlay);
        // }
        ;

        _proto.open = /*#__PURE__*/
        function () {
          var _open = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(prefab, initData, options) {
            var _this2 = this;
            var node, popup;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  node = instantiate(prefab);
                  node.layer = Layers.Enum.UI_2D;
                  this.layer.addChild(node);
                  this.stack.push(node);

                  // 딤 표시 & 터치 차단
                  // this.overlay.active = true;
                  // this.overlay.setSiblingIndex(node.getSiblingIndex() - 1);
                  // this.overlay.getComponent(UITransform)!.priority = 10000;

                  // // 딤 클릭 닫기 옵션
                  // this.overlay.off(Node.EventType.TOUCH_END);
                  // this.overlay.on(Node.EventType.TOUCH_END, () => {
                  //   if (options?.closeOnDim) this.dismiss(node, 'close');
                  // });
                  popup = node.getComponent(BasePopup);
                  popup.onOpen == null || popup.onOpen(initData);
                  return _context.abrupt("return", new Promise(function (resolve) {
                    // 자식 컴포넌트에서 confirm/cancel 시 호출할 수 있는 핸들러 등록
                    node.__resolve = function (res) {
                      popup.playCloseAnim(function () {
                        popup.onClose == null || popup.onClose();
                        node.removeFromParent();
                        node.destroy();
                        _this2.stack.pop();
                        // if (this.stack.length === 0) this.overlay.active = false;
                        resolve(res);
                      });
                    };
                  }));
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function open(_x, _x2, _x3) {
            return _open.apply(this, arguments);
          }
          return open;
        }();
        _proto.dismiss = function dismiss(node, action, payload) {
          if (action === void 0) {
            action = 'close';
          }
          var resolver = node.__resolve;
          if (resolver) resolver({
            action: action,
            payload: payload
          });
        };
        _proto.dismissTop = function dismissTop(action) {
          if (action === void 0) {
            action = 'close';
          }
          var top = this.stack[this.stack.length - 1];
          if (top) this.dismiss(top, action);
        };
        _proto.onKeyDown = function onKeyDown(e) {
          if (e.keyCode === KeyCode.ESCAPE || e.keyCode === KeyCode.MOBILE_BACK) {
            this.dismissTop('close');
          }
        };
        return PopupManager;
      }(Component), _class3._inst = void 0, _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "layer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Profile.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ProfileViewModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, SpriteFrame, Component, ProfileViewModel;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      ProfileViewModel = module.ProfileViewModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "d8062ozAxFCJZQE3fxztLq6", "Profile", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Profile = exports('Profile', (_dec = ccclass('Profile'), _dec2 = property(Sprite), _dec3 = property([SpriteFrame]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Profile, _Component);
        function Profile() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "profileImageSprite", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pictureList", _descriptor2, _assertThisInitialized(_this));
          _this.viewModel = new ProfileViewModel();
          return _this;
        }
        var _proto = Profile.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.viewModel.updateProfile(function (index) {
            _this2.setProfileByIndex(index);
          });
        };
        _proto.setProfileByIndex = function setProfileByIndex(index) {
          var picture = this.pictureList[index - 1];
          if (picture) {
            this.profileImageSprite.spriteFrame = picture;
            return;
          }
        };
        return Profile;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "profileImageSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pictureList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ProfileViewModel.ts", ['cc', './UserData2.ts'], function (exports) {
  var cclegacy, userData;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      userData = module.userData;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e1cce4ZW8lBDbjZASkMzsjw", "ProfileViewModel", undefined);
      var ProfileViewModel = exports('ProfileViewModel', /*#__PURE__*/function () {
        function ProfileViewModel() {
          this.model = userData.profile;
        }
        var _proto = ProfileViewModel.prototype;
        _proto.updateProfile = function updateProfile(callback) {
          var profilePictureIndex = this.model.profileImageIndex;
          return callback(profilePictureIndex);
        };
        return ProfileViewModel;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SessionStore.ts", ['cc', './UserData2.ts', './EventBus.ts'], function (exports) {
  var cclegacy, sys, userData, EventBus, AppEvent;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      userData = module.userData;
    }, function (module) {
      EventBus = module.EventBus;
      AppEvent = module.AppEvent;
    }],
    execute: function () {
      cclegacy._RF.push({}, "45943FpTRlA55QhhJ9dIFUS", "SessionStore", undefined);
      var LS_KEY = 'app.session.v1';
      var _SessionStore = /*#__PURE__*/function () {
        function _SessionStore() {
          this.loginSession = null;
          this.restore();
        }
        var _proto = _SessionStore.prototype;
        _proto.restore = function restore() {
          var raw = sys.localStorage.getItem(LS_KEY);
          if (!raw) return;
          try {
            this.loginSession = JSON.parse(raw);
          } catch (_unused) {/* noop */}
        };
        _proto.getLoginSession = function getLoginSession() {
          return this.loginSession;
        };
        _proto.isLoggedIn = function isLoggedIn() {
          var _this$loginSession;
          return !!((_this$loginSession = this.loginSession) != null && _this$loginSession.SID);
        };
        _proto.setLoginSession = function setLoginSession(s) {
          this.loginSession = s;
          console.log("Set Login Session:", s);
          sys.localStorage.setItem("loginSession", JSON.stringify(s.SID));
          EventBus.emit(AppEvent.Logined);
        };
        _proto.setUserDataSession = function setUserDataSession(s) {
          sys.localStorage.setItem("UserDataSession", JSON.stringify(s));
          userData.profile.setData(s.pic, s.picture);
          userData.gem.setData(s.gem, s.tsGemNext);
          console.log("Set User Data Session:", s);
          EventBus.emit(AppEvent.UpdateUserData, s);
        };
        _proto.setGameListDataSession = function setGameListDataSession(s) {
          sys.localStorage.setItem("gameListDataSession", JSON.stringify(s.data.game));
          EventBus.emit(AppEvent.UpdateGameList);
        };
        _proto.setFeaturesUnlockListDataSession = function setFeaturesUnlockListDataSession(s) {
          sys.localStorage.setItem("featuresUnlockListDataSession", JSON.stringify(s.data.list));
          EventBus.emit(AppEvent.LoadedUnlockList);
        };
        _proto.setRewardBoxListDataSession = function setRewardBoxListDataSession(s) {
          sys.localStorage.setItem("rewardBoxListDataSession", JSON.stringify(s.data.config));
          EventBus.emit(AppEvent.LoadedRewardBoxList);
        };
        _proto.setPictureListDataSession = function setPictureListDataSession(s) {
          sys.localStorage.setItem("pictureListDataSession", JSON.stringify(s.data.config));
          EventBus.emit(AppEvent.LoadedPictureList);
        };
        return _SessionStore;
      }();
      var SessionStore = exports('SessionStore', new _SessionStore());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SettingPopup.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BasePopup.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, BasePopup;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BasePopup = module.BasePopup;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "576eaeaz/VEI7IQTerkc8Yk", "SettingPopup", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SettingsPopup = exports('SettingsPopup', (_dec = ccclass('SettingsPopup'), _dec(_class = /*#__PURE__*/function (_BasePopup) {
        _inheritsLoose(SettingsPopup, _BasePopup);
        function SettingsPopup() {
          return _BasePopup.apply(this, arguments) || this;
        }
        var _proto = SettingsPopup.prototype;
        // @property(Toggle) musicToggle!: Toggle;
        // @property(Toggle) sfxToggle!: Toggle;
        // @property(Slider) volumeSlider!: Slider;
        // @property(Label) volumeLabel!: Label;
        // private current: SettingsData = { musicOn: true, sfxOn: true, volume: 0.8 };
        _proto.onOpen = function onOpen(init) {
          _BasePopup.prototype.onOpen.call(this, init);
          // this.current = { ...this.current, ...init };
          this.syncView();
        };
        _proto.syncView = function syncView() {
          // this.musicToggle.isChecked = this.current.musicOn;
          // this.sfxToggle.isChecked = this.current.sfxOn;
          // this.volumeSlider.progress = this.current.volume;
          // this.volumeLabel.string = Math.round(this.current.volume * 100) + '%';
        }

        // public onClickCloseButton() { 

        // }

        // UI 이벤트에 연결
        // onChangeMusic() { this.current.musicOn = this.musicToggle.isChecked; }
        // onChangeSfx()   { this.current.sfxOn   = this.sfxToggle.isChecked; }
        // onChangeVolume() {
        //   this.current.volume = this.volumeSlider.progress;
        //   this.volumeLabel.string = Math.round(this.current.volume * 100) + '%';
        // }

        // onClickConfirm() {
        //   (this.node as any).__resolve?.({ action: 'confirm', payload: this.current });
        // }
        ;

        _proto.onClickCancel = function onClickCancel() {
          var _resolve, _ref;
          (_resolve = (_ref = this.node).__resolve) == null || _resolve.call(_ref, {
            action: 'cancel'
          });
        };
        return SettingsPopup;
      }(BasePopup)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SplashComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventBus.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, director, Component, EventBus, AppEvent;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      EventBus = module.EventBus;
      AppEvent = module.AppEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "c75c2n66K1J7boMmjb/N0mp", "SplashComponent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SplashComponent = exports('SplashComponent', (_dec = ccclass('SplashComponent'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SplashComponent, _Component);
        function SplashComponent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "splashNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressNode", _descriptor2, _assertThisInitialized(_this));
          // private DESIGN_W = 1920;
          // private DESIGN_H = 1080;
          _this.DESIGN_W = 720;
          _this.DESIGN_H = 1280;
          _this.MIN_SCALE = 0.5;
          _this.MAX_SCALE = 1.5;
          _this.loadingProgress = 0;
          _this.nextSceneName = 'lobby';
          return _this;
        }
        var _proto = SplashComponent.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          EventBus.on(AppEvent.Logined, function () {
            console.log("EventBus Logined received");
            _this2.nextScene(10);
          }, this);
          EventBus.on(AppEvent.UpdateUserData, function (userData) {
            console.log("EventBus UpdateUserData received");
            if (userData.lvl < 5) {
              _this2.nextSceneName = 'game';
            } else {
              _this2.nextSceneName = 'lobby';
            }
            _this2.nextScene(40);
          });
          EventBus.on(AppEvent.UpdateGameList, function () {
            console.log("EventBus UpdateGameList received");
            _this2.nextScene(10);
          });
          EventBus.on(AppEvent.LoadedUnlockList, function () {
            console.log("EventBus LoadedUnlockList received");
            _this2.nextScene(10);
          });
          EventBus.on(AppEvent.LoadedRewardBoxList, function () {
            console.log("EventBus LoadedRewardBoxList received");
            _this2.nextScene(10);
          });
          EventBus.on(AppEvent.LoadedPictureList, function () {
            console.log("EventBus LoadedPictureList received");
            _this2.nextScene(10);
          });
          this.splashNode.active = false;
          this.progressNode.active = false;
        };
        _proto.start = function start() {
          var _this3 = this;
          this.splashNode.active = true;
          setTimeout(function () {
            _this3.splashNode.active = false;
            _this3.progressNode.active = true;
            setTimeout(function () {
              console.log("2 + 3 seconds passed in progress screen");
              _this3.nextScene(10);
            }, 3000);
          }, 2000);
        };
        _proto.nextScene = function nextScene(addedProgress) {
          this.loadingProgress += addedProgress;
          console.log("Loading Progress: ", this.loadingProgress);
          if (this.loadingProgress >= 100) {
            director.loadScene(this.nextSceneName);
          }
        };
        return SplashComponent;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "splashNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "progressNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TabBarController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Button = module.Button;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "deaf7oGQTtF1oLXsmAwZrly", "TabBarController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TabBarController = exports('TabBarController', (_dec = ccclass('TabBarController'), _dec2 = property([Node]), _dec3 = property([Node]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TabBarController, _Component);
        function TabBarController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "tabButtons", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tabViews", _descriptor2, _assertThisInitialized(_this));
          _this.selectedIndex = -1;
          return _this;
        }
        var _proto = TabBarController.prototype;
        _proto.start = function start() {
          this.selectTab(2); // 기본 선택 탭 설정, 필요에 따라 변경 가능
        };

        _proto.selectTab = function selectTab(index) {
          if (this.selectedIndex === index) return;
          this.selectedIndex = index;
          this.tabButtons.forEach(function (node, i) {
            var isActive = i === index;
            var button = node.getComponent(Button);
            var on = node.getChildByName('On');
            var off = node.getChildByName('Off');
            if (button) {
              button.interactable = !isActive;
            }
            if (off) {
              off.active = !isActive;
            }
            if (on) {
              on.active = isActive;
            }
          });
          this.tabViews.forEach(function (node, i) {
            node.active = i === index;
          });
        }

        // 버튼에서 호출될 메서드
        ;

        _proto.onClickTab = function onClickTab(_, customEventData) {
          var index = parseInt(customEventData);
          this.selectTab(index);
        };
        return TabBarController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tabButtons", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tabViews", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Top.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "fc6900kMvJDUbG96NNjq1Er", "Top", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Top = exports('Top', (_dec = ccclass('Top'), _dec2 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Top, _Component);
        function Top() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "ButtonHome", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Top.prototype;
        _proto.onLoad = function onLoad() {
          this.ButtonHome.node.on('click', this.onClickHome, this);
        };
        _proto.onClickHome = function onClickHome() {
          console.log("Top onClickHome");
          director.loadScene("lobby");
        };
        return Top;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "ButtonHome", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/user.user-store.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _extends, _createClass, cclegacy, sys, EventTarget;
  return {
    setters: [function (module) {
      _extends = module.extends;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
      EventTarget = module.EventTarget;
    }],
    execute: function () {
      cclegacy._RF.push({}, "939dbqNtyBJaIlbs8kKS4pS", "user.user-store", undefined);
      var STORAGE_KEY = 'app:user:v1'; // 스키마 바뀌면 키 변경
      var SCHEMA_VERSION = 1;
      var UserStore = exports('UserStore', /*#__PURE__*/function () {
        function UserStore() {
          this._ev = new EventTarget();
          this._data = this.defaultData();
          // 에디터 핫리로드 안전장치: sys.isBrowser 체크 후 기존 저장값 로드
          this.load();
        }

        /** 기본값 */
        var _proto = UserStore.prototype;
        _proto.defaultData = function defaultData() {
          return {
            version: SCHEMA_VERSION,
            profile: null,
            settings: {
              language: 'ko',
              sfx: true,
              music: true,
              notifications: true
            },
            runtime: {
              level: 1,
              exp: 0,
              coins: 0
            }
          };
        }

        // ========= 조회 =========
        ;

        _proto.isLoggedIn = function isLoggedIn() {
          return !!this._data.profile;
        };
        _proto.hasRole = function hasRole(r) {
          var _this$_data$profile;
          return !!((_this$_data$profile = this._data.profile) != null && _this$_data$profile.roles.includes(r));
        }

        // ========= 구독 =========
        /** 변경 이벤트 구독 */;
        _proto.onChange = function onChange(cb, target) {
          this._ev.on('change', cb, target);
        };
        _proto.offChange = function offChange(cb, target) {
          this._ev.off('change', cb, target);
        };
        _proto.emit = function emit() {
          this._ev.emit('change', this._data);
        }

        // ========= 갱신(부분 업데이트) =========
        /** 서버 응답으로 전량/부분 병합 */;
        _proto.hydrate = function hydrate(partial) {
          this._data = this.merge(this._data, partial);
          this.save();
          this.emit();
        };
        _proto.updateProfile = function updateProfile(patch) {
          if (!this._data.profile) this._data.profile = {
            id: '',
            name: '',
            roles: []
          };
          this._data.profile = this.merge(this._data.profile, patch);
          this.save();
          this.emit();
        };
        _proto.updateSettings = function updateSettings(patch) {
          this._data.settings = this.merge(this._data.settings, patch);
          this.save();
          this.emit();
        };
        _proto.updateRuntime = function updateRuntime(patch) {
          this._data.runtime = this.merge(this._data.runtime, patch);
          this.emit(); // runtime은 잦으니 저장은 배치 저장도 가능
        }

        /** 예: 코인 증감 */;
        _proto.addCoins = function addCoins(delta) {
          this._data.runtime.coins = Math.max(0, this._data.runtime.coins + delta);
          this.emit();
        }

        // ========= 세션/로그인 컨트롤 =========
        /** 로그인 성공 시 서버 userData로 초기화 */;
        _proto.login = function login(serverUserData) {
          var base = this.defaultData();
          this._data = this.merge(base, serverUserData);
          this.save();
          this.emit();
        }

        /** 로그아웃: 민감 데이터 제거 */;
        _proto.logout = function logout() {
          var keepSettings = this._data.settings; // 환경설정은 보존 예시
          this._data = this.defaultData();
          this._data.settings = keepSettings;
          this.save();
          this.emit();
        }

        // ========= 영속화 =========
        ;

        _proto.save = function save() {
          try {
            if (sys.isBrowser) {
              sys.localStorage.setItem(STORAGE_KEY, JSON.stringify(this._data));
            }
          } catch (e) {
            console.warn('[UserStore] save failed', e);
          }
        };
        _proto.load = function load() {
          try {
            if (!sys.isBrowser) return;
            var raw = sys.localStorage.getItem(STORAGE_KEY);
            if (!raw) return;
            var parsed = JSON.parse(raw);
            // 마이그레이션 훅
            this._data = this.migrate(parsed);
          } catch (e) {
            console.warn('[UserStore] load failed', e);
          }
        }

        /** 스키마 버전 업 대비 마이그레이션 */;
        _proto.migrate = function migrate(oldData) {
          var d = oldData;
          if (!d || typeof d !== 'object') return this.defaultData();
          if (!('version' in d)) d.version = 0;
          // 예: v0 -> v1 마이그레이션
          if (d.version < 1) {
            var _d$settings$language, _d$settings;
            d.settings = {
              language: (_d$settings$language = (_d$settings = d.settings) == null ? void 0 : _d$settings.language) != null ? _d$settings$language : 'ko',
              sfx: true,
              music: true,
              notifications: true
            };
            d.version = 1;
          }
          return d;
        }

        // ========= 유틸 =========
        ;

        _proto.merge = function merge(base, patch) {
          if (!patch) return base;
          var out = Array.isArray(base) ? [].concat(base) : _extends({}, base);
          for (var k in patch) {
            var v = patch[k];
            if (v && typeof v === 'object' && !Array.isArray(v)) {
              var _k;
              out[k] = this.merge((_k = out[k]) != null ? _k : {}, v);
            } else {
              out[k] = v;
            }
          }
          return out;
        };
        _createClass(UserStore, [{
          key: "data",
          get: function get() {
            return this._data;
          }
        }, {
          key: "profile",
          get: function get() {
            return this._data.profile;
          }
        }, {
          key: "settings",
          get: function get() {
            return this._data.settings;
          }
        }, {
          key: "runtime",
          get: function get() {
            return this._data.runtime;
          }
        }], [{
          key: "I",
          get: function get() {
            if (!this._instance) this._instance = new UserStore();
            return this._instance;
          }
        }]);
        return UserStore;
      }()); // 싱글톤 인스턴스 export
      UserStore._instance = null;
      var userStore = exports('default', UserStore.I);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/user.user-types.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "76c7dkxgSNF3q1AtA6pX9hu", "user.user-types", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserData.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "50755BiRlhFcbqC9LAf+n85", "UserData", undefined);
      // import Observer from "../../util/Observer";
      var _default = exports('default', function _default() {});
      _default.UID = void 0;
      //: 3,
      _default.UName = void 0;
      //: "Jupiter",
      _default.BName = void 0;
      //: "",
      _default.pic = void 0;
      //: 2,
      _default.picture = void 0;
      //: "https://d2ae4jq7up4daa.cloudfront.net/blackjack/images/avatar/Avatar_2.png",
      _default.frame = void 0;
      //: 1,
      _default.GID = void 0;
      //: 0,
      _default.balance = void 0;
      //: 100000000,
      _default.lvl = void 0;
      //: 1,
      _default.exp = void 0;
      //: 0,
      _default.expNext = void 0;
      //: 25,
      _default.lvlBonus = void 0;
      //: 2,
      _default.TP = void 0;
      //: 0,
      _default.gem = void 0;
      //: 5,
      _default.thunder = void 0;
      //: 0,
      _default.tsGemNext = void 0;
      //: -1,
      _default.tsGemLimit = void 0;
      //: -1,
      _default.tsADFeed = void 0;
      //: -1,
      _default.tsADSpot = void 0;
      //: -1,
      _default.SERVER_TIMESTAMP = void 0;
      //: 1755651606
      _default.SID = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserData2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bc7e34tTmZHnLB0fz/b6Onq", "UserData", undefined);
      // export interface IUserData {
      //     level: { level: number; exp: number };
      //     profile: { profileImageIndex: number; profileImageUrl: string };
      //     gem: { count: number; timerSeconds: number };
      //     balance: { coin: number; cash: number };
      // }
      var BaseModel = /*#__PURE__*/function () {
        function BaseModel() {
          this.listeners = [];
        }
        var _proto = BaseModel.prototype;
        _proto.subscribe = function subscribe(listener) {
          this.listeners.push(listener);
        };
        _proto.notify = function notify() {
          this.listeners.forEach(function (fn) {
            return fn();
          });
        };
        return BaseModel;
      }();
      var LevelModel = exports('LevelModel', /*#__PURE__*/function (_BaseModel) {
        _inheritsLoose(LevelModel, _BaseModel);
        function LevelModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseModel.call.apply(_BaseModel, [this].concat(args)) || this;
          _this.level = 1;
          _this.exp = 0;
          _this.expNext = 100;
          return _this;
        }
        var _proto2 = LevelModel.prototype;
        _proto2.setLevel = function setLevel(level) {
          this.level = level;
          this.notify();
        };
        _proto2.setExp = function setExp(exp) {
          this.exp = exp;
          this.notify();
        };
        _proto2.setExpNext = function setExpNext(expNext) {
          this.expNext = expNext;
          this.notify();
        };
        return LevelModel;
      }(BaseModel));
      var ProfileModel = exports('ProfileModel', /*#__PURE__*/function (_BaseModel2) {
        _inheritsLoose(ProfileModel, _BaseModel2);
        function ProfileModel() {
          var _this2;
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          _this2 = _BaseModel2.call.apply(_BaseModel2, [this].concat(args)) || this;
          _this2.profileImageIndex = 0;
          _this2.profileImageUrl = "";
          return _this2;
        }
        var _proto3 = ProfileModel.prototype;
        _proto3.setData = function setData(index, url) {
          this.profileImageIndex = index;
          this.profileImageUrl = url;
          this.notify();
        }

        // public setProfileImageUrl(url: string) {
        //     this.profileImageUrl = url;
        //     this.notify();
        // }
        ;

        _proto3.setProfileImageIndex = function setProfileImageIndex(index) {
          this.profileImageIndex = index;
          this.notify();
        };
        _proto3.setProfileImageUrl = function setProfileImageUrl(url) {
          this.profileImageUrl = url;
          this.notify();
        };
        return ProfileModel;
      }(BaseModel));
      var GemModel = exports('GemModel', /*#__PURE__*/function (_BaseModel3) {
        _inheritsLoose(GemModel, _BaseModel3);
        function GemModel() {
          var _this3;
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          _this3 = _BaseModel3.call.apply(_BaseModel3, [this].concat(args)) || this;
          _this3.count = 0;
          _this3.tsGemNext = 0;
          return _this3;
        }
        var _proto4 = GemModel.prototype;
        _proto4.setData = function setData(count, tsGemNext) {
          this.count = count;
          this.tsGemNext = tsGemNext;
          this.notify();
        };
        _proto4.setCount = function setCount(count) {
          this.count = count;
          this.notify();
        };
        _proto4.setTsGemNext = function setTsGemNext(tsGemNext) {
          console.log("GemModel setTsGemNext", tsGemNext);
          this.tsGemNext = tsGemNext;
          this.notify();
        };
        return GemModel;
      }(BaseModel));
      var BalanceModel = exports('BalanceModel', /*#__PURE__*/function (_BaseModel4) {
        _inheritsLoose(BalanceModel, _BaseModel4);
        function BalanceModel() {
          var _this4;
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          _this4 = _BaseModel4.call.apply(_BaseModel4, [this].concat(args)) || this;
          _this4.balance = 0;
          return _this4;
        }
        var _proto5 = BalanceModel.prototype;
        _proto5.setBalance = function setBalance(balance) {
          this.balance = balance;
          this.notify();
        };
        return BalanceModel;
      }(BaseModel));
      var UserData = exports('UserData', function UserData() {
        this.level = new LevelModel();
        this.profile = new ProfileModel();
        this.gem = new GemModel();
        this.balance = new BalanceModel();
      });
      var userData = exports('userData', new UserData());
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2ZpbGU6L0Q6LzR0dW5lMy9ibGFja0phY2tBaS9hc3NldHMvc2NyaXB0cy9jb3JlL2FwaS9maWxlOi9EOi80dHVuZTMvYmxhY2tKYWNrQWkvYXNzZXRzL3NjcmlwdHMvY29yZS9hcGkvQXBpVHlwZXMudHMiLCIuLi9maWxlOi9EOi80dHVuZTMvYmxhY2tKYWNrQWkvYXNzZXRzL3NjcmlwdHMvY29yZS9hdXRoL2ZpbGU6L0Q6LzR0dW5lMy9ibGFja0phY2tBaS9hc3NldHMvc2NyaXB0cy9jb3JlL2F1dGgvQXV0aEdhbWVTZXJ2aWNlLnRzIiwiLi4vZmlsZTovRDovNHR1bmUzL2JsYWNrSmFja0FpL2Fzc2V0cy9zY3JpcHRzL2NvcmUvYXV0aC9maWxlOi9EOi80dHVuZTMvYmxhY2tKYWNrQWkvYXNzZXRzL3NjcmlwdHMvY29yZS9hdXRoL0F1dGhTZXJ2aWNlLnRzIiwiLi4vZmlsZTovRDovNHR1bmUzL2JsYWNrSmFja0FpL2Fzc2V0cy9zY3JpcHRzL2ZpbGU6L0Q6LzR0dW5lMy9ibGFja0phY2tBaS9hc3NldHMvc2NyaXB0cy9CYXNlUG9wdXAudHMiLCIuLi9maWxlOi9EOi80dHVuZTMvYmxhY2tKYWNrQWkvYXNzZXRzL3NjcmlwdHMvYm9vdC9maWxlOi9EOi80dHVuZTMvYmxhY2tKYWNrQWkvYXNzZXRzL3NjcmlwdHMvYm9vdC9Cb290TWFuYWdlci50cyIsIi4uL2ZpbGU6L0Q6LzR0dW5lMy9ibGFja0phY2tBaS9hc3NldHMvc2NyaXB0cy9maWxlOi9EOi80dHVuZTMvYmxhY2tKYWNrQWkvYXNzZXRzL3NjcmlwdHMvQnV0dG9uQ29udHJvbGxlci50cyIsIi4uL2ZpbGU6L0Q6LzR0dW5lMy9ibGFja0phY2tBaS9hc3NldHMvc2NyaXB0cy9maWxlOi9EOi80dHVuZTMvYmxhY2tKYWNrQWkvYXNzZXRzL3NjcmlwdHMvQ2FyZHMudHMiLCIuLi9maWxlOi9EOi80dHVuZTMvYmxhY2tKYWNrQWkvYXNzZXRzL3NjcmlwdHMvY29yZS9zdG9yZS9maWxlOi9EOi80dHVuZTMvYmxhY2tKYWNrQWkvYXNzZXRzL3NjcmlwdHMvY29yZS9zdG9yZS9FdmVudEJ1cy50cyIsIi4uL2ZpbGU6L0Q6LzR0dW5lMy9ibGFja0phY2tBaS9hc3NldHMvc2NyaXB0cy9jb3JlL2ZpbGU6L0Q6LzR0dW5lMy9ibGFja0phY2tBaS9hc3NldHMvc2NyaXB0cy9jb3JlL2ZiaW5zdGFudC5tb2NrLnRzIiwiLi4vZmlsZTovRDovNHR1bmUzL2JsYWNrSmFja0FpL2Fzc2V0cy9zY3JpcHRzL2NvcmUvZmlsZTovRDovNHR1bmUzL2JsYWNrSmFja0FpL2Fzc2V0cy9zY3JpcHRzL2NvcmUvZmJpbnN0YW50LnRzIiwiLi4vZmlsZTovRDovNHR1bmUzL2JsYWNrSmFja0FpL2Fzc2V0cy9zY3JpcHRzL2NvcmUvZmlsZTovRDovNHR1bmUzL2JsYWNrSmFja0FpL2Fzc2V0cy9zY3JpcHRzL2NvcmUvRkJJbnN0YW50TWFuYWdlci50cyIsIi4uL2ZpbGU6L0Q6LzR0dW5lMy9ibGFja0phY2tBaS9hc3NldHMvc2NyaXB0cy9jb3JlL2ZpbGU6L0Q6LzR0dW5lMy9ibGFja0phY2tBaS9hc3NldHMvc2NyaXB0cy9jb3JlL0ZCTWFuYWdlci5tb2NrLnRzIiwiLi4vZmlsZTovRDovNHR1bmUzL2JsYWNrSmFja0FpL2Fzc2V0cy9zY3JpcHRzL2NvcmUvZmlsZTovRDovNHR1bmUzL2JsYWNrSmFja0FpL2Fzc2V0cy9zY3JpcHRzL2NvcmUvRkJNYW5hZ2VyLnRzIiwiLi4vZmlsZTovRDovNHR1bmUzL2JsYWNrSmFja0FpL2Fzc2V0cy9zY3JpcHRzL2RhdGEvZmlsZTovRDovNHR1bmUzL2JsYWNrSmFja0FpL2Fzc2V0cy9zY3JpcHRzL2RhdGEvR2FtZUxpc3REYXRhLnRzIiwiLi4vZmlsZTovRDovNHR1bmUzL2JsYWNrSmFja0FpL2Fzc2V0cy9zY3JpcHRzL2ZpbGU6L0Q6LzR0dW5lMy9ibGFja0phY2tBaS9hc3NldHMvc2NyaXB0cy9HYW1lU2NlbmUudHMiLCIuLi9maWxlOi9EOi80dHVuZTMvYmxhY2tKYWNrQWkvYXNzZXRzL3NjcmlwdHMvcHJlZmFicy91aS9maWxlOi9EOi80dHVuZTMvYmxhY2tKYWNrQWkvYXNzZXRzL3NjcmlwdHMvcHJlZmFicy91aS9HZW0udHMiLCIuLi9maWxlOi9EOi80dHVuZTMvYmxhY2tKYWNrQWkvYXNzZXRzL3NjcmlwdHMvdmlld01vZGVsL2ZpbGU6L0Q6LzR0dW5lMy9ibGFja0phY2tBaS9hc3NldHMvc2NyaXB0cy92aWV3TW9kZWwvR2VtVmlld01vZGVsLnRzIiwiLi4vZmlsZTovRDovNHR1bmUzL2JsYWNrSmFja0FpL2Fzc2V0cy9zY3JpcHRzL2NvcmUvYXBpL2ZpbGU6L0Q6LzR0dW5lMy9ibGFja0phY2tBaS9hc3NldHMvc2NyaXB0cy9jb3JlL2FwaS9IdHRwQ2xpZW50LnRzIiwiLi4vZmlsZTovRDovNHR1bmUzL2JsYWNrSmFja0FpL2Fzc2V0cy9zY3JpcHRzL2NvcmUvYXBpL2ZpbGU6L0Q6LzR0dW5lMy9ibGFja0phY2tBaS9hc3NldHMvc2NyaXB0cy9jb3JlL2FwaS9IdHRwR2FtZUNsaWVudC50cyIsIi4uL2ZpbGU6L0Q6LzR0dW5lMy9ibGFja0phY2tBaS9hc3NldHMvc2NyaXB0cy9wcmVmYWJzL3VpL2ZpbGU6L0Q6LzR0dW5lMy9ibGFja0phY2tBaS9hc3NldHMvc2NyaXB0cy9wcmVmYWJzL3VpL1BsYXlCdXR0b24udHMiLCIuLi9maWxlOi9EOi80dHVuZTMvYmxhY2tKYWNrQWkvYXNzZXRzL3NjcmlwdHMvZmlsZTovRDovNHR1bmUzL2JsYWNrSmFja0FpL2Fzc2V0cy9zY3JpcHRzL1BvcHVwTWFuYWdlci50cyIsIi4uL2ZpbGU6L0Q6LzR0dW5lMy9ibGFja0phY2tBaS9hc3NldHMvc2NyaXB0cy9wcmVmYWJzL3VpL2ZpbGU6L0Q6LzR0dW5lMy9ibGFja0phY2tBaS9hc3NldHMvc2NyaXB0cy9wcmVmYWJzL3VpL1Byb2ZpbGUudHMiLCIuLi9maWxlOi9EOi80dHVuZTMvYmxhY2tKYWNrQWkvYXNzZXRzL3NjcmlwdHMvdmlld01vZGVsL2ZpbGU6L0Q6LzR0dW5lMy9ibGFja0phY2tBaS9hc3NldHMvc2NyaXB0cy92aWV3TW9kZWwvUHJvZmlsZVZpZXdNb2RlbC50cyIsIi4uL2ZpbGU6L0Q6LzR0dW5lMy9ibGFja0phY2tBaS9hc3NldHMvc2NyaXB0cy9jb3JlL3N0b3JlL2ZpbGU6L0Q6LzR0dW5lMy9ibGFja0phY2tBaS9hc3NldHMvc2NyaXB0cy9jb3JlL3N0b3JlL1Nlc3Npb25TdG9yZS50cyIsIi4uL2ZpbGU6L0Q6LzR0dW5lMy9ibGFja0phY2tBaS9hc3NldHMvc2NyaXB0cy92aWV3L2ZpbGU6L0Q6LzR0dW5lMy9ibGFja0phY2tBaS9hc3NldHMvc2NyaXB0cy92aWV3L1NldHRpbmdQb3B1cC50cyIsIi4uL2ZpbGU6L0Q6LzR0dW5lMy9ibGFja0phY2tBaS9hc3NldHMvc2NyaXB0cy9maWxlOi9EOi80dHVuZTMvYmxhY2tKYWNrQWkvYXNzZXRzL3NjcmlwdHMvU3BsYXNoQ29tcG9uZW50LnRzIiwiLi4vZmlsZTovRDovNHR1bmUzL2JsYWNrSmFja0FpL2Fzc2V0cy9zY3JpcHRzL2ZpbGU6L0Q6LzR0dW5lMy9ibGFja0phY2tBaS9hc3NldHMvc2NyaXB0cy9UYWJCYXJDb250cm9sbGVyLnRzIiwiLi4vZmlsZTovRDovNHR1bmUzL2JsYWNrSmFja0FpL2Fzc2V0cy9zY3JpcHRzL3ZpZXcvZmlsZTovRDovNHR1bmUzL2JsYWNrSmFja0FpL2Fzc2V0cy9zY3JpcHRzL3ZpZXcvVG9wLnRzIiwiLi4vZmlsZTovRDovNHR1bmUzL2JsYWNrSmFja0FpL2Fzc2V0cy9zY3JpcHRzL2RhdGEvZmlsZTovRDovNHR1bmUzL2JsYWNrSmFja0FpL2Fzc2V0cy9zY3JpcHRzL2RhdGEvdXNlci51c2VyLXN0b3JlLnRzIiwiLi4vZmlsZTovRDovNHR1bmUzL2JsYWNrSmFja0FpL2Fzc2V0cy9zY3JpcHRzL2RhdGEvZmlsZTovRDovNHR1bmUzL2JsYWNrSmFja0FpL2Fzc2V0cy9zY3JpcHRzL2RhdGEvVXNlckRhdGEudHMiLCIuLi9maWxlOi9EOi80dHVuZTMvYmxhY2tKYWNrQWkvYXNzZXRzL3NjcmlwdHMvbW9kZWwvZmlsZTovRDovNHR1bmUzL2JsYWNrSmFja0FpL2Fzc2V0cy9zY3JpcHRzL21vZGVsL1VzZXJEYXRhLnRzIl0sIm5hbWVzIjpbIl9SRiIsInBvcCIsIkF1dGhHYW1lU2VydmljZSIsImh0dHAiLCJTSUQiLCJQSyIsInQiLCJuIiwiX3Byb3RvIiwicHJvdG90eXBlIiwibG9naW4iLCJwVHlwZSIsInBDb2RlIiwiX3RoaXMiLCJQcm9taXNlIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJyZXNvdmxlIiwicmVzIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsInBvc3QiLCJzZW50IiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJhYnJ1cHQiLCJkYXRhIiwic3RvcCIsIm9uRGVhbCIsImJldCIsIl90aGlzMiIsIl9jYWxsZWUyIiwicmVzb2x2ZSIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInJlZnJlc2hHYW1lU3RhdGVzIiwiX3RoaXMzIiwiX2NhbGxlZTMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJnYW1lQWN0aW9uIiwiYWN0aW9uVHlwZSIsInNpZCIsInJlcSIsIl90aGlzNCIsIl9jYWxsZWU0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiYWN0IiwiQXV0aFNlcnZpY2UiLCJsb2dpbldpdGhGQiIsIl9uYXZpZ2F0b3IkbGFuZ3VhZ2UiLCJsb2NhbGUiLCJvc0NvZGUiLCJGQk1hbmFnZXIiLCJnZXRQbGF5ZXJUeXBlIiwiZ2V0UGxheWVySWRTYWZlIiwidG9TdHJpbmciLCJuYXZpZ2F0b3IiLCJsYW5ndWFnZSIsImdldFBsYXllck9zQ29kZSIsIkVycm9yIiwic3VjY2VzcyIsImVycm9yIiwiU2Vzc2lvblN0b3JlIiwic2V0TG9naW5TZXNzaW9uIiwic2V0VXNlckRhdGFTZXNzaW9uIiwibG9nb3V0IiwibG9hZEdhbWVMaXN0IiwiX1Nlc3Npb25TdG9yZSRnZXRMb2dpIiwiZ2V0TG9naW5TZXNzaW9uIiwic2V0R2FtZUxpc3REYXRhU2Vzc2lvbiIsIkdhbWVMaXN0RGF0YSIsInNldERhdGEiLCJsb2FkRmVhdHVyZXNVbmxvY2tMaXN0IiwiX1Nlc3Npb25TdG9yZSRnZXRMb2dpMiIsInNldEZlYXR1cmVzVW5sb2NrTGlzdERhdGFTZXNzaW9uIiwibG9hZFJld2FyZEJveExpc3QiLCJfU2Vzc2lvblN0b3JlJGdldExvZ2kzIiwic2V0UmV3YXJkQm94TGlzdERhdGFTZXNzaW9uIiwibG9hZFBpY3R1cmVMaXN0IiwiX3RoaXM1IiwiX2NhbGxlZTUiLCJfU2Vzc2lvblN0b3JlJGdldExvZ2k0IiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1Iiwic2V0UGljdHVyZUxpc3REYXRhU2Vzc2lvbiIsImNjY2xhc3MiLCJfZGVjb3JhdG9yIiwicHJvcGVydHkiLCJCYXNlUG9wdXAiLCJfZGVjIiwiX2RlYzIiLCJOb2RlIiwiX2NsYXNzIiwiX2NsYXNzMiIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHNMb29zZSIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY2FsbCIsImFwcGx5IiwiY29uY2F0IiwiX2luaXRpYWxpemVyRGVmaW5lUHJvcGVydHkiLCJfZGVzY3JpcHRvciIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJvbk9wZW4iLCJpbml0RGF0YSIsIm9uQ2xvc2UiLCJwbGF5T3BlbkFuaW0iLCJjb250ZW50IiwicGxheUNsb3NlQW5pbSIsImNiIiwiQ29tcG9uZW50IiwiX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvciIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsImluaXRpYWxpemVyIiwiQm9vdE1hbmFnZXIiLCJvbkxvYWQiLCJkaXJlY3RvciIsImFkZFBlcnNpc3RSb290Tm9kZSIsIm5vZGUiLCJzdGFydCIsIl9zdGFydCIsImF1dGgiLCJpc0xvZ2dlZEluIiwiSHR0cENsaWVudCIsImJhc2VVUkwiLCJhbGwiLCJCdXR0b25Db250cm9sbGVyIiwiQnV0dG9uIiwiX2RlYzMiLCJfZGVjNCIsIl9kZWM1IiwiX2RlYzYiLCJfZGVzY3JpcHRvcjIiLCJfZGVzY3JpcHRvcjMiLCJfZGVzY3JpcHRvcjQiLCJfZGVzY3JpcHRvcjUiLCJyZWZyZXNoQnV0dG9ucyIsImhpdEJ1dHRvbiIsImFjdGl2ZSIsInN0YW5kQnV0dG9uIiwiZG91YmxlRG93bkJ1dHRvbiIsInNwbGl0QnV0dG9uIiwic3VycmVuZGVyQnV0dG9uIiwiQ2FyZHMiLCJTcHJpdGVGcmFtZSIsIl9kZWM3IiwiUHJlZmFiIiwiX2RlYzgiLCJfZGVjOSIsIl9kZXNjcmlwdG9yNiIsIl9kZXNjcmlwdG9yNyIsIl9kZXNjcmlwdG9yOCIsImNsZWFyQ2FyZHMiLCJkZWFsZXJDYXJkcyIsInJlbW92ZUFsbENoaWxkcmVuIiwidXNlckNhcmRzIiwic2V0RGVhbGVyQ2FyZHMiLCJkZWNrcyIsImZvckVhY2giLCJkZWNrIiwiaW5kZXgiLCJwcmVmYWIiLCJpbnN0YW50aWF0ZSIsImNhcmRQcmVmYWIiLCJzZXRQYXJlbnQiLCJjYXJkU3ByaXRlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic2V0Q2FyZCIsIm91dCIsImdldFBvc2l0aW9uIiwieCIsInNldFBvc2l0aW9uIiwic2V0VXNlckNhcmRzIiwiY2FyZCIsInZhbHVlIiwic3ByaXRlRnJhbWUiLCJiYWNrQ2FyZCIsInR5cGUiLCJNYXRoIiwiZmxvb3IiLCJudW1iZXIiLCJjYXJkczAiLCJjYXJkczEiLCJjYXJkczIiLCJjYXJkczMiLCJBcHBFdmVudCIsIlRvcEV2ZW50IiwiX0V2ZW50QnVzIiwiX0V2ZW50VGFyZ2V0IiwiRXZlbnRUYXJnZXQiLCJFdmVudEJ1cyIsImluc3RhbGxJR01vY2siLCJnIiwiZ2xvYmFsVGhpcyIsIkZCSW5zdGFudCIsIm1vY2siLCJpbml0aWFsaXplQXN5bmMiLCJzdGFydEdhbWVBc3luYyIsInNldExvYWRpbmdQcm9ncmVzcyIsIl9wIiwiZ2V0UGxhdGZvcm0iLCJnZXRMb2NhbGUiLCJwbGF5ZXIiLCJnZXRJRCIsImdldFNpZ25lZFBsYXllckluZm9Bc3luYyIsIl9wYXlsb2FkIiwiZ2V0U2lnbmF0dXJlIiwicmVzb2x2ZUZCSSIsIl9yZWYiLCJfcmVmMiIsIl9nJEZCSW5zdGFudCIsIl9nJHRvcCIsIl9nJHBhcmVudCIsInRvcCIsInBhcmVudCIsIkZCSUciLCJfcmVmMyIsIl9yZWYzJF9faWciLCJfX2lnIiwicGhhc2UiLCJpbml0UCIsInN0YXJ0UCIsIlMiLCJpbml0T25jZSIsIl9pbml0T25jZSIsIklHIiwidGhlbiIsInN0YXJ0T25jZSIsIl9zdGFydE9uY2UiLCJhcGlPck51bGwiLCJfSUckcGxheWVyJGdldElEIiwiaWQiLCJlIiwid2FybiIsInB1c2giLCJ1bmRlZmluZWQiLCJfcmVmNCIsIl9nJEZCSW5zdGFudDIiLCJfZyR0b3AyIiwiX2ckcGFyZW50MiIsIl9JRyRnZXRQbGF0Zm9ybSIsIl9yZWY1IiwiX3JlZjYiLCJfZyRGQkluc3RhbnQzIiwiX2ckdG9wMyIsIl9nJHBhcmVudDMiLCJfSUckZ2V0UGxheWVyVHlwZSIsImdhbWUiLCJnYW1lRGF0YSIsIm9iaiIsImxpc3QiLCJnZXRHYW1lU2VydmVyVVJMIiwiZ1VSTCIsIkdhbWVTY2VuZSIsIkxhYmVsIiwiX2RlYzEwIiwidGltZW91dElkIiwiY3VycmVudEJldFZhbHVlIiwiYmV0QXJyYXkiLCJfZGVzY3JpcHRvcjkiLCJ1cmwiLCJIdHRwR2FtZUNsaWVudCIsIl9sb2dpbiIsImJhbGFuY2VMYWJsZSIsInN0cmluZyIsImJhbGFuY2UiLCJ0b0xvY2FsZVN0cmluZyIsImNoaXBDb250cm9sbGVyIiwidW5kb0J1dHRvbiIsImludGVyYWN0YWJsZSIsImRlYWxCdXR0b24iLCJidXR0b25Db250cm9sbGVyIiwic3ViQnV0dG9uQ29udHJvbGxlciIsIkdJRCIsInJlc2V0R2FtZVN0YXRlcyIsIm9uQ2xpY2tDaGlwIiwiZXZlbnRUb3VjaCIsImN1c3RvbUV2ZW50RGF0YSIsIk51bWJlciIsImN1cnJlbnRCZXRMYWJlbCIsIm9uQ2xpY2tSZXZlcnRDaGlwIiwiX3RoaXMkYmV0QXJyYXkkcG9wIiwib25DbGlja0RlYWxCdXR0b24iLCJfb25DbGlja0RlYWxCdXR0b24iLCJ1c2VyIiwic2V0IiwicG9zc2libGUiLCJzZXRDYXJkRGF0YSIsImdzIiwiY2hlY2tJbnN1cmFuY2UiLCJfcmVzZXRHYW1lU3RhdGVzIiwiZ2FtZUVuZCIsInVzZXJEZWNrIiwiZGVhbGVyRGVjayIsImRlYWxlciIsImNhcmRzIiwib25IaXQiLCJfb25IaXQiLCJvblN0YW5kIiwiX29uU3RhbmQiLCJzZXRUaW1lb3V0Iiwib25Eb3VibGVEb3duIiwiX29uRG91YmxlRG93biIsIl9jYWxsZWU2IiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2Iiwib25TcGxpdCIsIl9vblNwbGl0IiwiX2NhbGxlZTciLCJfY2FsbGVlNyQiLCJfY29udGV4dDciLCJvblN1cnJlbmRlciIsIl9vblN1cnJlbmRlciIsIl9jYWxsZWU4IiwiX2NhbGxlZTgkIiwiX2NvbnRleHQ4Iiwib25JbnN1cmFuY2UiLCJvbkV2ZW5Nb25leSIsIm9uQ2xpY2tZZXMiLCJfb25DbGlja1llcyIsIl9jYWxsZWU5IiwiX2NhbGxlZTkkIiwiX2NvbnRleHQ5Iiwib25DbGlja05vIiwiX29uQ2xpY2tObyIsIl9jYWxsZWUxMCIsIl9jYWxsZWUxMCQiLCJfY29udGV4dDEwIiwib25DbGlja1NldHRpbmdCdXR0b24iLCJfb25DbGlja1NldHRpbmdCdXR0b24iLCJfY2FsbGVlMTEiLCJfcmVzJHBheWxvYWQiLCJfY2FsbGVlMTEkIiwiX2NvbnRleHQxMSIsIlBvcHVwTWFuYWdlciIsIkkiLCJvcGVuIiwic2V0dGluZ3NQb3B1cCIsIm11c2ljT24iLCJzZnhPbiIsInZvbHVtZSIsImNsb3NlT25EaW0iLCJhY3Rpb24iLCJwYXlsb2FkIiwiR2VtIiwidmlld01vZGVsIiwiR2VtVmlld01vZGVsIiwiaW5pdExpc3RlbmVyIiwib25Db3VudENoYW5nZSIsImNvdW50Iiwic2V0Q291bnQiLCJvblRpbWVyVGljayIsIm1pbiIsInNlYyIsInNldFRpbWVyIiwiaW5pdGlhbGl6ZSIsImNvdW50TGFiZWwiLCJ0aW1lckxhYmVsIiwiZnVsbENvdW50TGFiZWwiLCJtb2RlbCIsInVzZXJEYXRhIiwiZ2VtIiwic3Vic2NyaWJlIiwidXBkYXRlTm90aWZ5IiwiY2FsbGJhY2tzIiwidGltZXIiLCJ0c0dlbU5leHQiLCJzZWNvbmRzIiwiY2xlYXJUaW1lb3V0Iiwic2V0VHNHZW1OZXh0Iiwib3B0cyIsInJlcXVlc3QiLCJfcmVxdWVzdCIsIm1ldGhvZCIsImNtZCIsImJvZHkiLCJfdGhpcyRvcHRzJGdldFRva2VuIiwiX3RoaXMkb3B0cyIsIl90aGlzJG9wdHMkcmV0cnkkcmV0ciIsIl90aGlzJG9wdHMkcmV0cnkiLCJfdGhpcyRvcHRzJHJldHJ5JGRlbGEiLCJfdGhpcyRvcHRzJHJldHJ5MiIsImhlYWRlcnMiLCJ0b2tlbiIsImF0dGVtcHQiLCJsYXN0RXJyIiwicmV0cmllcyIsImRlbGF5TXMiLCJqc29uUmVzIiwiZ2V0VG9rZW4iLCJyZXRyeSIsImZldGNoIiwib2siLCJzYWZlSnNvbiIsInN0YXR1cyIsInQwIiwic2xlZXAiLCJfeCIsIl94MiIsIl94MyIsIl94NCIsImdldCIsInUiLCJiIiwiX3g1IiwiX3NhZmVKc29uIiwianNvbiIsIm1zIiwiciIsIlBsYXlCdXR0b24iLCJvbkNsaWNrIiwibG9hZFNjZW5lIiwiX2NsYXNzMyIsInN0YWNrIiwiX2luc3QiLCJpbnB1dCIsIm9uIiwiSW5wdXQiLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsIm9uS2V5RG93biIsIl9vcGVuIiwib3B0aW9ucyIsInBvcHVwIiwibGF5ZXIiLCJMYXllcnMiLCJFbnVtIiwiVUlfMkQiLCJhZGRDaGlsZCIsIl9fcmVzb2x2ZSIsInJlbW92ZUZyb21QYXJlbnQiLCJkZXN0cm95IiwiZGlzbWlzcyIsInJlc29sdmVyIiwiZGlzbWlzc1RvcCIsImtleUNvZGUiLCJLZXlDb2RlIiwiRVNDQVBFIiwiTU9CSUxFX0JBQ0siLCJQcm9maWxlIiwiUHJvZmlsZVZpZXdNb2RlbCIsInVwZGF0ZVByb2ZpbGUiLCJzZXRQcm9maWxlQnlJbmRleCIsInBpY3R1cmUiLCJwaWN0dXJlTGlzdCIsInByb2ZpbGVJbWFnZVNwcml0ZSIsInByb2ZpbGUiLCJjYWxsYmFjayIsInByb2ZpbGVQaWN0dXJlSW5kZXgiLCJwcm9maWxlSW1hZ2VJbmRleCIsIkxTX0tFWSIsIl9TZXNzaW9uU3RvcmUiLCJsb2dpblNlc3Npb24iLCJyZXN0b3JlIiwicmF3Iiwic3lzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlIiwiX3VudXNlZCIsIl90aGlzJGxvZ2luU2Vzc2lvbiIsInMiLCJzZXRJdGVtIiwiZW1pdCIsIkxvZ2luZWQiLCJwaWMiLCJVcGRhdGVVc2VyRGF0YSIsIlVwZGF0ZUdhbWVMaXN0IiwiTG9hZGVkVW5sb2NrTGlzdCIsImNvbmZpZyIsIkxvYWRlZFJld2FyZEJveExpc3QiLCJMb2FkZWRQaWN0dXJlTGlzdCIsIlNldHRpbmdzUG9wdXAiLCJfQmFzZVBvcHVwIiwiaW5pdCIsInN5bmNWaWV3Iiwib25DbGlja0NhbmNlbCIsIl9yZXNvbHZlIiwiU3BsYXNoQ29tcG9uZW50IiwiREVTSUdOX1ciLCJERVNJR05fSCIsIk1JTl9TQ0FMRSIsIk1BWF9TQ0FMRSIsImxvYWRpbmdQcm9ncmVzcyIsIm5leHRTY2VuZU5hbWUiLCJuZXh0U2NlbmUiLCJsdmwiLCJzcGxhc2hOb2RlIiwicHJvZ3Jlc3NOb2RlIiwiYWRkZWRQcm9ncmVzcyIsIlRhYkJhckNvbnRyb2xsZXIiLCJzZWxlY3RlZEluZGV4Iiwic2VsZWN0VGFiIiwidGFiQnV0dG9ucyIsImkiLCJpc0FjdGl2ZSIsImJ1dHRvbiIsImdldENoaWxkQnlOYW1lIiwib2ZmIiwidGFiVmlld3MiLCJvbkNsaWNrVGFiIiwiXyIsInBhcnNlSW50IiwiVG9wIiwiQnV0dG9uSG9tZSIsIm9uQ2xpY2tIb21lIiwiU1RPUkFHRV9LRVkiLCJTQ0hFTUFfVkVSU0lPTiIsIlVzZXJTdG9yZSIsIl9ldiIsIl9kYXRhIiwiZGVmYXVsdERhdGEiLCJsb2FkIiwidmVyc2lvbiIsInNldHRpbmdzIiwic2Z4IiwibXVzaWMiLCJub3RpZmljYXRpb25zIiwicnVudGltZSIsImxldmVsIiwiZXhwIiwiY29pbnMiLCJoYXNSb2xlIiwiX3RoaXMkX2RhdGEkcHJvZmlsZSIsInJvbGVzIiwiaW5jbHVkZXMiLCJvbkNoYW5nZSIsInRhcmdldCIsIm9mZkNoYW5nZSIsImh5ZHJhdGUiLCJwYXJ0aWFsIiwibWVyZ2UiLCJzYXZlIiwicGF0Y2giLCJuYW1lIiwidXBkYXRlU2V0dGluZ3MiLCJ1cGRhdGVSdW50aW1lIiwiYWRkQ29pbnMiLCJkZWx0YSIsIm1heCIsInNlcnZlclVzZXJEYXRhIiwiYmFzZSIsImtlZXBTZXR0aW5ncyIsImlzQnJvd3NlciIsInBhcnNlZCIsIm1pZ3JhdGUiLCJvbGREYXRhIiwiZCIsIl9kJHNldHRpbmdzJGxhbmd1YWdlIiwiX2Qkc2V0dGluZ3MiLCJpc0FycmF5IiwiX2V4dGVuZHMiLCJrIiwidiIsIl9rIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiX2luc3RhbmNlIiwidXNlclN0b3JlIiwiX2RlZmF1bHQiLCJVSUQiLCJVTmFtZSIsIkJOYW1lIiwiZnJhbWUiLCJleHBOZXh0IiwibHZsQm9udXMiLCJUUCIsInRodW5kZXIiLCJ0c0dlbUxpbWl0IiwidHNBREZlZWQiLCJ0c0FEU3BvdCIsIlNFUlZFUl9USU1FU1RBTVAiLCJCYXNlTW9kZWwiLCJsaXN0ZW5lcnMiLCJsaXN0ZW5lciIsIm5vdGlmeSIsImZuIiwiTGV2ZWxNb2RlbCIsIl9CYXNlTW9kZWwiLCJfcHJvdG8yIiwic2V0TGV2ZWwiLCJzZXRFeHAiLCJzZXRFeHBOZXh0IiwiUHJvZmlsZU1vZGVsIiwiX0Jhc2VNb2RlbDIiLCJfbGVuMiIsIl9rZXkyIiwicHJvZmlsZUltYWdlVXJsIiwiX3Byb3RvMyIsInNldFByb2ZpbGVJbWFnZUluZGV4Iiwic2V0UHJvZmlsZUltYWdlVXJsIiwiR2VtTW9kZWwiLCJfQmFzZU1vZGVsMyIsIl9sZW4zIiwiX2tleTMiLCJfcHJvdG80IiwiQmFsYW5jZU1vZGVsIiwiX0Jhc2VNb2RlbDQiLCJfbGVuNCIsIl9rZXk0IiwiX3Byb3RvNSIsInNldEJhbGFuY2UiLCJVc2VyRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7TUFBQTs7Ozs7Ozs7TUFTQTtNQUNBO01BQ0E7TUFRQTtNQUNBO01BQ0E7TUFtQ0E7TUFDQTtNQUNBO01BMERBO01BQ0E7TUFDQTtNQUVBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFFQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUVBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUVBO01BQ0E7TUFDQTtNQUNBO01BRUE7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUVBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFFQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BRUE7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUVBO01BQ0E7TUFDQTtNQUNBO01BRUE7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUVBO01BRUE7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUVBO01BQ0E7TUFDQTtNQUVBO01BQ0E7TUFDQTtNQUNBO01BRUE7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFFQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUVBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUVBO01BQ0E7TUFDQTtNQUNBO01BRUE7TUFDQTtNQUNBO01BRUE7TUFDQTtNQUNBO01BRUE7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUVBO01BQ0E7TUFDQTtNQUVBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUVBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BRUE7TUFDQTtNQUNBO01BRUE7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUVBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BRUE7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LEVBQUU7U0FDaEI7UUFBQSxPQUFBcUIsWUFBQTtNQUFBLEVBTjZCeEIsU0FBUztVQVM5QjhCLFFBQVEsZ0NBQUFBO1FBQUEsS0FDVm5GLEtBQUssR0FBZSxJQUFJMEQsVUFBVSxFQUFFO1FBQUEsS0FDcENuSSxPQUFPLEdBQWlCLElBQUl5SSxZQUFZLEVBQUU7UUFBQSxLQUMxQzlOLEdBQUcsR0FBYSxJQUFJc08sUUFBUSxFQUFFO1FBQUEsS0FDOUJ0VSxPQUFPLEdBQWlCLElBQUkyVSxZQUFZLEVBQUU7TUFBQTtVQUd4QzVPLFFBQVEsdUJBQUcsSUFBSWtQLFFBQVE7Y0FBRyxDQUFBM21CLEdBQUEsQ0FBQUMsR0FBQSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBBcGlUeXBlcy50cyDigJQgU2FtcGxlIERUT3MgLyBDb250cmFjdHMgZm9yIENvY29zIENyZWF0b3IgMy44LnggKFR5cGVTY3JpcHQsIE1WVk0pXHJcbiAqXHJcbiAqIFB1cnBvc2VcclxuICogIC0gU2luZ2xlIHNvdXJjZSBvZiB0cnV0aCBmb3IgY2xpZW504oaUc2VydmVyIHJlcXVlc3QvcmVzcG9uc2Ugc2hhcGVzXHJcbiAqICAtIFN0cm9uZyB0eXBpbmcgZm9yIFJlcG9zaXRvcnkgJiBWaWV3TW9kZWwgbGF5ZXJzXHJcbiAqICAtIENsZWFyIGJvdW5kYXJpZXMgZm9yIGF1dGgvc2Vzc2lvbiwgdXNlciwgZ2FtZXBsYXkvZWNvbm9teSwgYW5kIGNvbW1vbiBlbnZlbG9wZXNcclxuICovXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFJFUVVFU1QgTG9naW4gXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGludGVyZmFjZSBMb2dpblJlcXVlc3REYXRhIHtcclxuICAgIHBUeXBlOiBOdW1iZXIsXHJcbiAgICBwQ29kZTogU3RyaW5nLFxyXG4gICAgbG9jYWxlOiBTdHJpbmcsXHJcbiAgICBvc0NvZGU6IFN0cmluZyxcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBSRVNQT05TRSAgXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmludGVyZmFjZSBCYXNlUmVzcG9uc2Uge1xyXG4gICAgY21kOiBzdHJpbmcsXHJcbiAgICBzdWNjZXNzOiBudW1iZXIsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9naW5SZXNwb25zZSBleHRlbmRzIEJhc2VSZXNwb25zZSB7XHJcbiAgICBTSUQ6IHN0cmluZyxcclxuICAgIGRhdGE6IFVzZXJEYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlckRhdGEge1xyXG4gICAgQk5hbWU6IHN0cmluZztcclxuICAgIEdJRDogbnVtYmVyO1xyXG4gICAgU0VSVkVSX1RJTUVTVEFNUDogbnVtYmVyO1xyXG4gICAgVFA6IG51bWJlcjtcclxuICAgIFVJRDogbnVtYmVyO1xyXG4gICAgVU5hbWU6IHN0cmluZztcclxuICAgIGJhbGFuY2U6IG51bWJlcjtcclxuICAgIGV4cDogbnVtYmVyO1xyXG4gICAgZXhwTmV4dDogbnVtYmVyO1xyXG4gICAgZnJhbWU6IG51bWJlcjtcclxuICAgIGdlbTogbnVtYmVyO1xyXG4gICAgbHZsOiBudW1iZXI7XHJcbiAgICBsdmxCb251czogbnVtYmVyO1xyXG4gICAgcGljOiBudW1iZXI7XHJcbiAgICBwaWN0dXJlOiBzdHJpbmc7XHJcbiAgICB0aHVuZGVyOiBudW1iZXI7XHJcbiAgICB0c0FERmVlZDogbnVtYmVyO1xyXG4gICAgdHNBRFNwb3Q6IG51bWJlcjtcclxuICAgIHRzR2VtTGltaXQ6IG51bWJlcjtcclxuICAgIHRzR2VtTmV4dDogbnVtYmVyO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEdhbWUgTGlzdFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdhbWVMaXN0UmVzcG9uc2UgZXh0ZW5kcyBCYXNlUmVzcG9uc2Uge1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGdhbWU6IEdhbWVMaXN0UmVzcG9uc2VEYXRhW11cclxuICAgIH1cclxufVxyXG5pbnRlcmZhY2UgR2FtZUxpc3RSZXNwb25zZURhdGEge1xyXG4gICAgR0lEOiBudW1iZXI7XHJcbiAgICBnTmFtZTogc3RyaW5nO1xyXG4gICAgZ1VSTDogc3RyaW5nO1xyXG4gICAgZ09yZGVyOiBudW1iZXI7XHJcbiAgICBkZWNrczogbnVtYmVyO1xyXG4gICAgbWluTHZsOiBudW1iZXI7XHJcbiAgICBtaW5CZXQ6IG51bWJlcjtcclxuICAgIG1heEJldDogbnVtYmVyO1xyXG4gICAgbWF4U3BsaXQ6IG51bWJlcjtcclxuICAgIHNvZnRTdGFuZDogbnVtYmVyO1xyXG4gICAgaG9sZUNhcmQ6IG51bWJlcjtcclxuICAgIG1TaHVmZmxlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVW5Mb2NrTGlzdFJlc3BvbnNlIGV4dGVuZHMgQmFzZVJlc3BvbnNlIHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBsaXN0OiBVbkxvY2tMaXN0UmVzcG9uc2VEYXRhW11cclxuICAgIH1cclxufVxyXG5pbnRlcmZhY2UgVW5Mb2NrTGlzdFJlc3BvbnNlRGF0YSB7XHJcbiAgICByZXFMdmw6IE51bWJlcjtcclxuICAgIGZDb2RlOiBzdHJpbmc7XHJcbiAgICBtc2c6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXdhcmRCb3hMaXN0UmVzcG9uc2UgZXh0ZW5kcyBCYXNlUmVzcG9uc2Uge1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGNvbmZpZzogUmV3YXJkQm94TGlzdFJlc3BvbnNlRGF0YVtdXHJcbiAgICB9XHJcbn1cclxuaW50ZXJmYWNlIFJld2FyZEJveExpc3RSZXNwb25zZURhdGEge1xyXG4gICAgclR5cGU6IE51bWJlcjtcclxuICAgIGNvaW46IE51bWJlcjtcclxuICAgIGdlbTogTnVtYmVyO1xyXG4gICAgdGh1bmRlcjogTnVtYmVyO1xyXG4gICAgYXBhY2s6IE51bWJlcjtcclxuICAgIHJUaXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBpY3R1cmVMaXN0UmVzcG9uc2UgZXh0ZW5kcyBCYXNlUmVzcG9uc2Uge1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGNvbmZpZzogUGljdHVyZUxpc3RSZXNwb25zZURhdGFbXVxyXG4gICAgfVxyXG59XHJcbmludGVyZmFjZSBQaWN0dXJlTGlzdFJlc3BvbnNlRGF0YSB7XHJcbiAgICBwaWM6IG51bWJlcjtcclxuICAgIHBOYW1lOiBzdHJpbmc7XHJcbiAgICBwVVJMOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ29tbW9uICYgVXRpbGl0aWVzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIGV4cG9ydCB0eXBlIElTT0RhdGVUaW1lID0gc3RyaW5nOyAvLyBlLmcuLCBcIjIwMjUtMDgtMjVUMDM6MDA6MDAuMDAwWlwiXHJcbi8vIGV4cG9ydCB0eXBlIFVuaXhNaWxsaXMgPSBudW1iZXI7ICAvLyBlLmcuLCBEYXRlLm5vdygpXHJcbi8vIGV4cG9ydCB0eXBlIFVzZXJJZCA9IHN0cmluZyAmIHsgcmVhZG9ubHkgX19icmFuZDogdW5pcXVlIHN5bWJvbCB9O1xyXG4vLyBleHBvcnQgdHlwZSBJdGVtSWQgPSBzdHJpbmcgJiB7IHJlYWRvbmx5IF9fYnJhbmQ6IHVuaXF1ZSBzeW1ib2wgfTtcclxuLy8gZXhwb3J0IHR5cGUgU2Vzc2lvblRva2VuID0gc3RyaW5nICYgeyByZWFkb25seSBfX2JyYW5kOiB1bmlxdWUgc3ltYm9sIH07XHJcblxyXG4vLyBleHBvcnQgZW51bSBQbGF0Zm9ybSB7XHJcbi8vICAgV2ViID0gXCJ3ZWJcIixcclxuLy8gICBXZWJWaWV3ID0gXCJ3ZWJ2aWV3XCIsXHJcbi8vICAgRkJJbnN0YW50ID0gXCJmYmluc3RhbnRcIixcclxuLy8gICBBbmRyb2lkTmF0aXZlID0gXCJhbmRyb2lkXCIsXHJcbi8vICAgSU9TTmF0aXZlID0gXCJpb3NcIixcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGVudW0gQ3VycmVuY3lDb2RlIHtcclxuLy8gICBDT0lOID0gXCJDT0lOXCIsXHJcbi8vICAgR0VNID0gXCJHRU1cIixcclxuLy8gICBLUlcgPSBcIktSV1wiLFxyXG4vLyAgIFVTRCA9IFwiVVNEXCIsXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBpbnRlcmZhY2UgUGFnaW5hdGlvbiB7XHJcbi8vICAgcGFnZTogbnVtYmVyOyAgICAgIC8vIDEtYmFzZWRcclxuLy8gICBwYWdlU2l6ZTogbnVtYmVyOyAgLy8gaXRlbXMgcGVyIHBhZ2VcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGludGVyZmFjZSBQYWdlTWV0YSB7XHJcbi8vICAgdG90YWw6IG51bWJlcjtcclxuLy8gICBwYWdlOiBudW1iZXI7XHJcbi8vICAgcGFnZVNpemU6IG51bWJlcjtcclxuLy8gfVxyXG5cclxuLy8gLy8gU3RhbmRhcmQgQVBJIGVudmVsb3BlIChlaXRoZXIgd3JhcCByZXNwb25zZXMgb3IgcmV0dXJuIG5ha2VkIHBheWxvYWRz4oCUY2hvb3NlIG9uZSBwb2xpY3kgYW5kIHN0aWNrIHRvIGl0KVxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIEFwaU1ldGEge1xyXG4vLyAgIHNlcnZlclRpbWU6IElTT0RhdGVUaW1lO1xyXG4vLyAgIHJlcXVlc3RJZDogc3RyaW5nOyAvLyB0cmFjZSBpZFxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIEFwaVN1Y2Nlc3M8VD4ge1xyXG4vLyAgIG9rOiB0cnVlO1xyXG4vLyAgIGRhdGE6IFQ7XHJcbi8vICAgbWV0YT86IEFwaU1ldGE7XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBlbnVtIEFwaUVycm9yQ29kZSB7XHJcbi8vICAgVU5LTk9XTiA9IFwiVU5LTk9XTlwiLFxyXG4vLyAgIFZBTElEQVRJT04gPSBcIlZBTElEQVRJT05cIixcclxuLy8gICBVTkFVVEhPUklaRUQgPSBcIlVOQVVUSE9SSVpFRFwiLFxyXG4vLyAgIEZPUkJJRERFTiA9IFwiRk9SQklEREVOXCIsXHJcbi8vICAgTk9UX0ZPVU5EID0gXCJOT1RfRk9VTkRcIixcclxuLy8gICBSQVRFX0xJTUlURUQgPSBcIlJBVEVfTElNSVRFRFwiLFxyXG4vLyAgIENPTkZMSUNUID0gXCJDT05GTElDVFwiLFxyXG4vLyAgIFNFUlZFUl9FUlJPUiA9IFwiU0VSVkVSX0VSUk9SXCIsXHJcbi8vICAgU0VTU0lPTl9FWFBJUkVEID0gXCJTRVNTSU9OX0VYUElSRURcIixcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGludGVyZmFjZSBBcGlFcnJvckRldGFpbEZpZWxkIHtcclxuLy8gICBmaWVsZDogc3RyaW5nO1xyXG4vLyAgIG1lc3NhZ2U6IHN0cmluZztcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGludGVyZmFjZSBBcGlGYWlsIHtcclxuLy8gICBvazogZmFsc2U7XHJcbi8vICAgY29kZTogQXBpRXJyb3JDb2RlO1xyXG4vLyAgIG1lc3NhZ2U6IHN0cmluZztcclxuLy8gICBzdGF0dXM/OiBudW1iZXI7IC8vIEhUVFAgc3RhdHVzXHJcbi8vICAgZGV0YWlscz86IEFwaUVycm9yRGV0YWlsRmllbGRbXSB8IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xyXG4vLyAgIG1ldGE/OiBBcGlNZXRhO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgdHlwZSBBcGlSZXNwb25zZTxUPiA9IEFwaVN1Y2Nlc3M8VD4gfCBBcGlGYWlsO1xyXG5cclxuLy8gLy8gSGVscGVyIHRvIGJ1aWxkIHBhZ2VkIHJlc3BvbnNlc1xyXG4vLyBleHBvcnQgaW50ZXJmYWNlIFBhZ2VkPFQ+IHtcclxuLy8gICBkYXRhOiBUW107XHJcbi8vICAgbWV0YTogUGFnZU1ldGE7XHJcbi8vIH1cclxuXHJcbi8vIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gLy8gQXV0aCAvIFNlc3Npb25cclxuLy8gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gZXhwb3J0IGludGVyZmFjZSBMb2dpblJlcXVlc3Qge1xyXG4vLyAgIC8vIEZCSW5zdGFudCBtaWdodCByZXR1cm4gZW1wdHkgZ2V0SUQgaW4gdjgrOyBzaWduZWRJbmZvIGlzIHJlY29tbWVuZGVkIGZvciBzZXJ2ZXItc2lkZSB2ZXJpZmljYXRpb25cclxuLy8gICBmYklkPzogc3RyaW5nOyAgICAgICAgICAgIC8vIG9wdGlvbmFsIGlmIHVzaW5nIHNpZ25lZEluZm8gb25seVxyXG4vLyAgIHNpZ25lZEluZm8/OiBzdHJpbmc7ICAgICAgLy8gZ2V0U2lnbmVkUGxheWVySW5mb0FzeW5jKC4uLikuZ2V0U2lnbmF0dXJlKClcclxuXHJcbi8vICAgLy8gRW52aXJvbm1lbnQgaGludHMgKG9wdGlvbmFsIGJ1dCB1c2VmdWwgZm9yIGFuYWx5dGljcyAmIHJpc2spXHJcbi8vICAgcGxhdGZvcm06IFBsYXRmb3JtO1xyXG4vLyAgIGFwcFZlcnNpb24/OiBzdHJpbmc7ICAgICAgLy8gY2xpZW50IGFwcCBidWlsZCB2ZXJzaW9uXHJcbi8vICAgZGV2aWNlSWQ/OiBzdHJpbmc7ICAgICAgICAvLyB2ZW5kb3IvZGV2aWNlIGZpbmdlcnByaW50IGlmIGF2YWlsYWJsZVxyXG4vLyAgIGxvY2FsZT86IHN0cmluZzsgICAgICAgICAgLy8gZS5nLiwgXCJrby1LUlwiXHJcbi8vICAgdHpPZmZzZXRNaW51dGVzPzogbnVtYmVyOyAvLyBjbGllbnQgdGltZXpvbmUgb2Zmc2V0XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBpbnRlcmZhY2UgTG9naW5Vc2VyIHtcclxuLy8gICB1c2VySWQ6IFVzZXJJZDtcclxuLy8gICBuaWNrbmFtZT86IHN0cmluZztcclxuLy8gICBjb3VudHJ5Pzogc3RyaW5nO1xyXG4vLyAgIGNyZWF0ZWRBdDogSVNPRGF0ZVRpbWU7XHJcbi8vICAgbGFzdExvZ2luQXQ6IElTT0RhdGVUaW1lO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIExvZ2luUmVzcG9uc2Uge1xyXG4vLyAgIGFjY2Vzc1Rva2VuOiBTZXNzaW9uVG9rZW47XHJcbi8vICAgLy8gSWYgeW91IHVzZSByZWZyZXNoIHRva2VucyB2aWEgSHR0cE9ubHkgY29va2llLCB5b3UgbWF5IG9taXQgaXQgaGVyZSBvbiB0aGUgY2xpZW50XHJcbi8vICAgZXhwaXJlc0luU2VjOiBudW1iZXI7ICAgLy8gbGlmZXRpbWUgb2YgYWNjZXNzIHRva2VuXHJcbi8vICAgdXNlcjogTG9naW5Vc2VyO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIFJlZnJlc2hSZXNwb25zZSB7XHJcbi8vICAgYWNjZXNzVG9rZW46IFNlc3Npb25Ub2tlbjtcclxuLy8gICBleHBpcmVzSW5TZWM6IG51bWJlcjtcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGludGVyZmFjZSBMb2dvdXRSZXNwb25zZSB7XHJcbi8vICAgc3VjY2VzczogdHJ1ZTtcclxuLy8gfVxyXG5cclxuLy8gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAvLyBVc2VyL1Byb2ZpbGVcclxuLy8gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gZXhwb3J0IGludGVyZmFjZSBVc2VyUHJvZmlsZSB7XHJcbi8vICAgdXNlcklkOiBVc2VySWQ7XHJcbi8vICAgbmlja25hbWU6IHN0cmluZztcclxuLy8gICBsZXZlbDogbnVtYmVyO1xyXG4vLyAgIGV4cDogbnVtYmVyO1xyXG4vLyAgIGF2YXRhclVybD86IHN0cmluZztcclxuLy8gICAvLyBhZGQgYW55IEZCSW5zdGFudC1saW5rZWQgZmxhZ3MgaWYgbmVlZGVkXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlTmlja25hbWVSZXF1ZXN0IHtcclxuLy8gICBuaWNrbmFtZTogc3RyaW5nO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIFVwZGF0ZVNldHRpbmdzUmVxdWVzdCB7XHJcbi8vICAgc2Z4T24/OiBib29sZWFuO1xyXG4vLyAgIGJnbU9uPzogYm9vbGVhbjtcclxuLy8gICBwdXNoQWxsb3dlZD86IGJvb2xlYW47XHJcbi8vICAgbGFuZ3VhZ2U/OiBzdHJpbmc7IC8vIGUuZy4sIFwia29cIiwgXCJlblwiXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBpbnRlcmZhY2UgVXNlclNldHRpbmdzUmVzcG9uc2Uge1xyXG4vLyAgIHVzZXJJZDogVXNlcklkO1xyXG4vLyAgIHNmeE9uOiBib29sZWFuO1xyXG4vLyAgIGJnbU9uOiBib29sZWFuO1xyXG4vLyAgIHB1c2hBbGxvd2VkOiBib29sZWFuO1xyXG4vLyAgIGxhbmd1YWdlOiBzdHJpbmc7XHJcbi8vIH1cclxuXHJcbi8vIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gLy8gRWNvbm9teSAvIFdhbGxldCAvIEludmVudG9yeVxyXG4vLyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIFdhbGxldCB7XHJcbi8vICAgdXNlcklkOiBVc2VySWQ7XHJcbi8vICAgYmFsYW5jZXM6IFJlY29yZDxDdXJyZW5jeUNvZGUsIG51bWJlcj47IC8vIGUuZy4sIHsgQ09JTjogMTAwMCwgR0VNOiA1MCB9XHJcbi8vICAgdXBkYXRlZEF0OiBJU09EYXRlVGltZTtcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGludGVyZmFjZSBJbnZlbnRvcnlJdGVtIHtcclxuLy8gICBpdGVtSWQ6IEl0ZW1JZDtcclxuLy8gICBza3U6IHN0cmluZzsgICAgICAgLy8gc2hvcCBza3VcclxuLy8gICBkaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4vLyAgIHF1YW50aXR5OiBudW1iZXI7XHJcbi8vICAgbWV0YT86IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIEludmVudG9yeVJlc3BvbnNlIHtcclxuLy8gICB1c2VySWQ6IFVzZXJJZDtcclxuLy8gICBpdGVtczogSW52ZW50b3J5SXRlbVtdO1xyXG4vLyAgIHVwZGF0ZWRBdDogSVNPRGF0ZVRpbWU7XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBpbnRlcmZhY2UgR3JhbnRDdXJyZW5jeVJlcXVlc3Qge1xyXG4vLyAgIGN1cnJlbmN5OiBDdXJyZW5jeUNvZGU7XHJcbi8vICAgYW1vdW50OiBudW1iZXI7IC8vIHBvc2l0aXZlIHRvIGdyYW50LCBuZWdhdGl2ZSB0byBkZWR1Y3QgKGlmIHNlcnZlciBhbGxvd3MpXHJcbi8vICAgcmVhc29uPzogc3RyaW5nO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIEdyYW50Q3VycmVuY3lSZXNwb25zZSB7XHJcbi8vICAgd2FsbGV0OiBXYWxsZXQ7XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBpbnRlcmZhY2UgQ29uc3VtZUl0ZW1SZXF1ZXN0IHtcclxuLy8gICBpdGVtSWQ6IEl0ZW1JZDtcclxuLy8gICBxdWFudGl0eTogbnVtYmVyO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIENvbnN1bWVJdGVtUmVzcG9uc2Uge1xyXG4vLyAgIGludmVudG9yeTogSW52ZW50b3J5UmVzcG9uc2U7XHJcbi8vICAgd2FsbGV0PzogV2FsbGV0OyAvLyBpZiBjb25zdW1wdGlvbiBhbHNvIGFmZmVjdHMgYmFsYW5jZXNcclxuLy8gfVxyXG5cclxuLy8gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAvLyBTaG9wIC8gUHVyY2hhc2UgKG9wdGlvbmFsKVxyXG4vLyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIFNob3BJdGVtIHtcclxuLy8gICBza3U6IHN0cmluZztcclxuLy8gICB0aXRsZTogc3RyaW5nO1xyXG4vLyAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4vLyAgIHByaWNlOiBudW1iZXI7IC8vIHJlYWwgbW9uZXkgb3Igc29mdCBjdXJyZW5jeSBkZXBlbmRpbmcgb24gcG9saWN5XHJcbi8vICAgY3VycmVuY3k6IEN1cnJlbmN5Q29kZTtcclxuLy8gICBpY29uVXJsPzogc3RyaW5nO1xyXG4vLyAgIHBheWxvYWQ/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IHR5cGUgU2hvcENhdGFsb2dSZXNwb25zZSA9IFBhZ2VkPFNob3BJdGVtPjtcclxuXHJcbi8vIGV4cG9ydCBpbnRlcmZhY2UgUHVyY2hhc2VSZXF1ZXN0IHtcclxuLy8gICBza3U6IHN0cmluZztcclxuLy8gICBwcm92aWRlcj86IFwiZmJcIiB8IFwiaWFwXCIgfCBcIndlYlwiOyAvLyBwYXltZW50IHByb3ZpZGVyIGhpbnRcclxuLy8gICBwYXlsb2FkPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj47ICAgLy8gcHJvdmlkZXItc3BlY2lmaWMgZGF0YVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIFB1cmNoYXNlUmVzdWx0IHtcclxuLy8gICBvcmRlcklkOiBzdHJpbmc7XHJcbi8vICAgc2t1OiBzdHJpbmc7XHJcbi8vICAgZ3JhbnRlZDoge1xyXG4vLyAgICAgY3VycmVuY2llcz86IHsgY29kZTogQ3VycmVuY3lDb2RlOyBhbW91bnQ6IG51bWJlciB9W107XHJcbi8vICAgICBpdGVtcz86IHsgaXRlbUlkOiBJdGVtSWQ7IHF1YW50aXR5OiBudW1iZXIgfVtdO1xyXG4vLyAgIH07XHJcbi8vICAgd2FsbGV0PzogV2FsbGV0O1xyXG4vLyAgIGludmVudG9yeT86IEludmVudG9yeVJlc3BvbnNlO1xyXG4vLyB9XHJcblxyXG4vLyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIC8vIExlYWRlcmJvYXJkIC8gU29jaWFsIChvcHRpb25hbClcclxuLy8gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gZXhwb3J0IGludGVyZmFjZSBMZWFkZXJib2FyZEVudHJ5IHtcclxuLy8gICB1c2VySWQ6IFVzZXJJZDtcclxuLy8gICBuaWNrbmFtZTogc3RyaW5nO1xyXG4vLyAgIHNjb3JlOiBudW1iZXI7XHJcbi8vICAgcmFuazogbnVtYmVyO1xyXG4vLyAgIHVwZGF0ZWRBdDogSVNPRGF0ZVRpbWU7XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCB0eXBlIExlYWRlcmJvYXJkUmVzcG9uc2UgPSBQYWdlZDxMZWFkZXJib2FyZEVudHJ5PjtcclxuXHJcbi8vIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gLy8gU2VydmVyIFV0aWxpdGllc1xyXG4vLyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIFNlcnZlclRpbWVSZXNwb25zZSB7XHJcbi8vICAgc2VydmVyVGltZTogSVNPRGF0ZVRpbWU7XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBpbnRlcmZhY2UgSGVhbHRoUmVzcG9uc2Uge1xyXG4vLyAgIHN0YXR1czogXCJva1wiIHwgXCJkZWdyYWRlZFwiIHwgXCJkb3duXCI7XHJcbi8vICAgdmVyc2lvbjogc3RyaW5nOyAgICAgICAvLyBhcGkvc2VydmljZSB2ZXJzaW9uXHJcbi8vICAgYnVpbGQ6IHN0cmluZzsgICAgICAgICAvLyBjb21taXQgb3IgYnVpbGQgaWRcclxuLy8gICB0aW1lOiBJU09EYXRlVGltZTtcclxuLy8gfVxyXG5cclxuLy8gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAvLyBXZWJTb2NrZXQgLyBQdXNoIChvcHRpb25hbCwgZXhhbXBsZSlcclxuLy8gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gZXhwb3J0IHR5cGUgUHVzaEV2ZW50VHlwZSA9XHJcbi8vICAgfCBcIndhbGxldC51cGRhdGVkXCJcclxuLy8gICB8IFwiaW52ZW50b3J5LnVwZGF0ZWRcIlxyXG4vLyAgIHwgXCJzeXN0ZW0uYW5ub3VuY2VtZW50XCI7XHJcblxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIFB1c2hFbnZlbG9wZTxUVHlwZSBleHRlbmRzIFB1c2hFdmVudFR5cGUsIFRQYXlsb2FkPiB7XHJcbi8vICAgdHlwZTogVFR5cGU7XHJcbi8vICAgdHM6IFVuaXhNaWxsaXM7XHJcbi8vICAgcGF5bG9hZDogVFBheWxvYWQ7XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCB0eXBlIFdhbGxldFVwZGF0ZWRQdXNoID0gUHVzaEVudmVsb3BlPFxyXG4vLyAgIFwid2FsbGV0LnVwZGF0ZWRcIixcclxuLy8gICB7IHdhbGxldDogV2FsbGV0IH1cclxuLy8gPjtcclxuXHJcbi8vIGV4cG9ydCB0eXBlIEludmVudG9yeVVwZGF0ZWRQdXNoID0gUHVzaEVudmVsb3BlPFxyXG4vLyAgIFwiaW52ZW50b3J5LnVwZGF0ZWRcIixcclxuLy8gICB7IGludmVudG9yeTogSW52ZW50b3J5UmVzcG9uc2UgfVxyXG4vLyA+O1xyXG5cclxuLy8gZXhwb3J0IHR5cGUgU3lzdGVtQW5ub3VuY2VtZW50UHVzaCA9IFB1c2hFbnZlbG9wZTxcclxuLy8gICBcInN5c3RlbS5hbm5vdW5jZW1lbnRcIixcclxuLy8gICB7IG1lc3NhZ2U6IHN0cmluZzsgbG9jYWxlPzogc3RyaW5nIH1cclxuLy8gPjtcclxuXHJcbi8vIGV4cG9ydCB0eXBlIEFueVB1c2ggPVxyXG4vLyAgIHwgV2FsbGV0VXBkYXRlZFB1c2hcclxuLy8gICB8IEludmVudG9yeVVwZGF0ZWRQdXNoXHJcbi8vICAgfCBTeXN0ZW1Bbm5vdW5jZW1lbnRQdXNoO1xyXG5cclxuLy8gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAvLyBFeGFtcGxlOiBOYXJyb3cgXCJuYWtlZFwiIGVuZHBvaW50cyB2cyBlbnZlbG9wZSBzdHlsZVxyXG4vLyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIC8vIENob29zZSBvbmUgc3R5bGUgYWNyb3NzIHlvdXIgQVBJIHN1cmZhY2UgdG8ga2VlcCBjb25zaXN0ZW5jeS5cclxuLy8gLy8gMSkgRW52ZWxvcGUgc3R5bGU6IEFwaVJlc3BvbnNlPExvZ2luUmVzcG9uc2U+XHJcbi8vIC8vIDIpIE5ha2VkIHN0eWxlOiBMb2dpblJlc3BvbnNlXHJcbi8vIC8vIFlvdXIgSHR0cENsaWVudC9SZXBvc2l0b3J5IGNhbiBhZGFwdCBlaXRoZXIgYnkgZGVjb2RpbmcgQXBpUmVzcG9uc2U8VD4gb3IgcGFzc2luZyBUIGRpcmVjdGx5LlxyXG4iLCIvLyBjb3JlL2F1dGgvQXV0aEdhbWVTZXJ2aWNlLnRzXHJcbi8vIOuhnOq3uOyduCwg7Yag7YGwL+yEuOyFmCDqtIDrpqxcclxuXHJcbmltcG9ydCB7IEdhbWVMaXN0RGF0YSB9IGZyb20gJy4uLy4uL2RhdGEvR2FtZUxpc3REYXRhJztcclxuaW1wb3J0IHsgR2FtZUxpc3RSZXNwb25zZSwgTG9naW5SZXF1ZXN0RGF0YSwgTG9naW5SZXNwb25zZSwgUmV3YXJkQm94TGlzdFJlc3BvbnNlLCBVbkxvY2tMaXN0UmVzcG9uc2UgfSBmcm9tICcuLi9hcGkvQXBpVHlwZXMnO1xyXG5pbXBvcnQgeyBIdHRwR2FtZUNsaWVudCB9IGZyb20gJy4uL2FwaS9IdHRwR2FtZUNsaWVudCc7XHJcbmltcG9ydCB7IEZCTWFuYWdlciB9IGZyb20gJy4uL0ZCTWFuYWdlcic7XHJcbmltcG9ydCB7IFNlc3Npb25TdG9yZSB9IGZyb20gJy4uL3N0b3JlL1Nlc3Npb25TdG9yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aEdhbWVTZXJ2aWNlIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBHYW1lQ2xpZW50KSB7IH1cclxuXHJcbiAgICBwcml2YXRlIFNJRDogc3RyaW5nID0gbnVsbDtcclxuICAgIHByaXZhdGUgUEsgPSB7XHJcbiAgICAgICAgdDogXCJcIixcclxuICAgICAgICBuOiBcIlwiXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbG9naW4ocFR5cGUsIHBDb2RlKTogUHJvbWlzZTx7XHJcbiAgICAgICAgR0lEOiBudW1iZXI7XHJcbiAgICAgICAgVUlEOiBudW1iZXI7XHJcbiAgICAgICAgYmFsYW5jZTogbnVtYmVyO1xyXG4gICAgICAgIGV4cDogbnVtYmVyO1xyXG4gICAgICAgIGV4cE5leHQ6IG51bWJlcjtcclxuICAgICAgICBsdmw6IG51bWJlcjtcclxuICAgICAgICBsdmxCb251czogbnVtYmVyO1xyXG4gICAgfT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvdmxlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5odHRwLnBvc3Q8XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBHSUQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVUlEOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2U6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cE5leHQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbHZsOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2bEJvbnVzOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+KCdsb2dpbicsIHsgcFR5cGUsIHBDb2RlIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiByZXMgOiBcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy5QSyA9IHJlcy5QSztcclxuICAgICAgICAgICAgLy8gdGhpcy5TSUQgPSByZXMuU0lEO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc292bGUocmVzLmRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRGVhbChiZXQ6IG51bWJlcik6IFByb21pc2U8XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYWxhbmNlOiBudW1iZXJcclxuICAgICAgICAgICAgZ2FtZToge31cclxuICAgICAgICB9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5odHRwLnBvc3Q8e1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2U6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lOiB7fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9PignZ2FtZV9zdGFydCcsIHsgYmV0IH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiByZXMgOiBcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXMuZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVmcmVzaEdhbWVTdGF0ZXMoKTogUHJvbWlzZTx7XHJcbiAgICAgICAgYmFsYW5jZTogbnVtYmVyXHJcbiAgICAgICAgZ2FtZToge31cclxuICAgIH0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0PHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZToge31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfT4oJ2dhbWVfc3RhdHVzJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIHJlcyA6IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzLmRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdhbWVBY3Rpb24oYWN0aW9uVHlwZTogbnVtYmVyID0gMSwgc2lkOiBudW1iZXIgPSAwLCByZXE6IG51bWJlciA9IDApOiBQcm9taXNlPHtcclxuICAgICAgICBiYWxhbmNlOiBudW1iZXI7XHJcbiAgICAgICAgZ2FtZToge31cclxuICAgIH0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0PHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZToge31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfT4oJ2dhbWVfYWN0aW9uJywge1xyXG4gICAgICAgICAgICAgICAgYWN0OiBhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgc2lkLFxyXG4gICAgICAgICAgICAgICAgcmVxXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXMuZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLy8gY29yZS9hdXRoL0F1dGhTZXJ2aWNlLnRzXHJcbi8vIEZCSW5zdGFudCDsi53rs4TsnpAg6riw67CYIOuhnOq3uOyduCwg7Yag7YGwL+yEuOyFmCDqtIDrpqxcclxuXHJcbmltcG9ydCB7IEdhbWVMaXN0RGF0YSB9IGZyb20gJy4uLy4uL2RhdGEvR2FtZUxpc3REYXRhJztcclxuaW1wb3J0IHsgR2FtZUxpc3RSZXNwb25zZSwgTG9naW5SZXF1ZXN0RGF0YSwgTG9naW5SZXNwb25zZSwgUmV3YXJkQm94TGlzdFJlc3BvbnNlLCBVbkxvY2tMaXN0UmVzcG9uc2UgfSBmcm9tICcuLi9hcGkvQXBpVHlwZXMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnLi4vYXBpL0h0dHBDbGllbnQnO1xyXG5pbXBvcnQgeyBGQk1hbmFnZXIgfSBmcm9tICcuLi9GQk1hbmFnZXInO1xyXG5pbXBvcnQgeyBTZXNzaW9uU3RvcmUgfSBmcm9tICcuLi9zdG9yZS9TZXNzaW9uU3RvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gICAgcHVibGljIGxvZ2luV2l0aEZCKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIC8vIEZCSW5zdGFudCBTREvsl5DshJwg6rCA7KC47JioIOyLneuzhOyekC/shJzrqoVcclxuICAgICAgICAvLyB2OCDtmZjqsr3sl5DshJwgZ2V0SUTqsIAgbnVsbOyduCDsvIDsnbTsiqTripQg67OE64+EIOyymOumrCjshJzrqoUg7KCV67O0IOyCrOyaqSDrk7EpIOKAlCDshJzrsoQg6rOE7JW97JeQIOunnuy2sCDsobDsoJVcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBUeXBlID0gRkJNYW5hZ2VyLmdldFBsYXllclR5cGUoKTtcclxuICAgICAgICAgICAgY29uc3QgcENvZGUgPSBGQk1hbmFnZXIuZ2V0UGxheWVySWRTYWZlKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY29uc3QgbG9jYWxlID0gbmF2aWdhdG9yLmxhbmd1YWdlID8/IFwiTk9ORVwiXHJcbiAgICAgICAgICAgIGNvbnN0IG9zQ29kZSA9IEZCTWFuYWdlci5nZXRQbGF5ZXJPc0NvZGUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcENvZGUpIHRocm93IG5ldyBFcnJvcihcIkZCSW5zdGFudCBwbGF5ZXIgSUQgaXMgbnVsbCwgY2Fubm90IGxvZ2luXCIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5odHRwLnBvc3Q8TG9naW5SZXNwb25zZT4oJ2xvZ2luJywgbnVsbCwgPExvZ2luUmVxdWVzdERhdGE+eyBwVHlwZSwgcENvZGUsIGxvY2FsZSwgb3NDb2RlIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzID09PSAtMikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkxvZ2luIEZhaWxlZDogd3JvbmcgcGFyYW1ldGVycyBlcnJvciBjb2RlIC0yXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBTZXNzaW9uU3RvcmUuc2V0TG9naW5TZXNzaW9uKHsgU0lEOiByZXMuU0lEIH0pO1xyXG4gICAgICAgICAgICBTZXNzaW9uU3RvcmUuc2V0VXNlckRhdGFTZXNzaW9uKHJlcy5kYXRhKVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9nb3V0KCkgeyBTZXNzaW9uU3RvcmUuc2V0TG9naW5TZXNzaW9uKG51bGwpOyB9XHJcblxyXG4gICAgcHVibGljIGxvYWRHYW1lTGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlczogR2FtZUxpc3RSZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0PEdhbWVMaXN0UmVzcG9uc2U+KCdnYW1lX2xpc3QnLCBTZXNzaW9uU3RvcmUuZ2V0TG9naW5TZXNzaW9uKCk/LlNJRCk7XHJcbiAgICAgICAgICAgIFNlc3Npb25TdG9yZS5zZXRHYW1lTGlzdERhdGFTZXNzaW9uKHJlcylcclxuXHJcbiAgICAgICAgICAgIEdhbWVMaXN0RGF0YS5zZXREYXRhKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZEZlYXR1cmVzVW5sb2NrTGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0PFVuTG9ja0xpc3RSZXNwb25zZT4oJ3VubG9ja19saXN0JywgU2Vzc2lvblN0b3JlLmdldExvZ2luU2Vzc2lvbigpPy5TSUQpO1xyXG4gICAgICAgICAgICBTZXNzaW9uU3RvcmUuc2V0RmVhdHVyZXNVbmxvY2tMaXN0RGF0YVNlc3Npb24ocmVzKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkUmV3YXJkQm94TGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0PFJld2FyZEJveExpc3RSZXNwb25zZT4oJ3Jld2FyZGJveF9saXN0JywgU2Vzc2lvblN0b3JlLmdldExvZ2luU2Vzc2lvbigpPy5TSUQpO1xyXG4gICAgICAgICAgICBTZXNzaW9uU3RvcmUuc2V0UmV3YXJkQm94TGlzdERhdGFTZXNzaW9uKHJlcylcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZFBpY3R1cmVMaXN0KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5odHRwLnBvc3Q8UmV3YXJkQm94TGlzdFJlc3BvbnNlPigncGljdHVyZV9saXN0JywgU2Vzc2lvblN0b3JlLmdldExvZ2luU2Vzc2lvbigpPy5TSUQpO1xyXG4gICAgICAgICAgICBTZXNzaW9uU3RvcmUuc2V0UGljdHVyZUxpc3REYXRhU2Vzc2lvbihyZXMpXHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCB0d2VlbiB9IGZyb20gJ2NjJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCB0eXBlIFBvcHVwUmVzdWx0ID0geyBhY3Rpb246ICdjb25maXJtJyB8ICdjYW5jZWwnIHwgJ2Nsb3NlJywgcGF5bG9hZD86IGFueSB9O1xyXG5cclxuQGNjY2xhc3MoJ0Jhc2VQb3B1cCcpXHJcbmV4cG9ydCBjbGFzcyBCYXNlUG9wdXAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShOb2RlKSBjb250ZW50ITogTm9kZTsgLy8g7Iqk7LyA7J28L+2OmOydtOuTnCDrjIDsg4FcclxuXHJcbiAgb25PcGVuKGluaXREYXRhPzogYW55KTogdm9pZCB7XHJcbiAgICAvLyDsnpDsi50g7YG0656Y7Iqk7JeQ7IScIOy0iOq4sOqwkiDrsJTsnbjrlKlcclxuICAgIC8vIHRoaXMucGxheU9wZW5BbmltKCk7XHJcbiAgfVxyXG5cclxuICBvbkNsb3NlKCk6IHZvaWQge1xyXG4gICAgLy8g7J6Q7IudIO2BtOuemOyKpOyXkOyEnCDsoJXrpqwg66Gc7KeBXHJcbiAgfVxyXG5cclxuICBwbGF5T3BlbkFuaW0oKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuY29udGVudCkgcmV0dXJuO1xyXG4gICAgLy8gdGhpcy5jb250ZW50LnNjYWxlID0gdGhpcy5jb250ZW50LnNjYWxlLnNldCgwLjksIDAuOSwgMSk7XHJcbiAgICAvLyB0aGlzLmNvbnRlbnQub3BhY2l0eSA9IDA7XHJcbiAgICAvLyB0d2Vlbih0aGlzLmNvbnRlbnQpXHJcbiAgICAvLyAgIC50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAvLyAgIC50bygwLjEyLCB7IHNjYWxlOiB0aGlzLmNvbnRlbnQuc2NhbGUuc2V0KDEuMCwgMS4wLCAxKSB9KVxyXG4gICAgLy8gICAuc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIHBsYXlDbG9zZUFuaW0oY2I6ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5jb250ZW50KSB7IGNiKCk7IHJldHVybjsgfVxyXG4gICAgcmV0dXJuIGNiKCk7XHJcbiAgLy8gICB0d2Vlbih0aGlzLmNvbnRlbnQpXHJcbiAgLy8gICAgIC50bygwLjEyLCB7IHNjYWxlOiB0aGlzLmNvbnRlbnQuc2NhbGUuc2V0KDAuOTIsIDAuOTIsIDEpIH0pXHJcbiAgLy8gICAgIC50bygwLjA4LCB7IG9wYWNpdHk6IDAgfSlcclxuICAvLyAgICAgLmNhbGwoY2IpXHJcbiAgLy8gICAgIC5zdGFydCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIGRpcmVjdG9yIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnLi4vY29yZS9hcGkvSHR0cENsaWVudCc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9hdXRoL0F1dGhTZXJ2aWNlJztcclxuaW1wb3J0IHsgU2Vzc2lvblN0b3JlIH0gZnJvbSAnLi4vY29yZS9zdG9yZS9TZXNzaW9uU3RvcmUnO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzIH0gPSBfZGVjb3JhdG9yO1xyXG5AY2NjbGFzcygnQm9vdE1hbmFnZXInKVxyXG5leHBvcnQgY2xhc3MgQm9vdE1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcbiAgICBkaXJlY3Rvci5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBhc3luYyBzdGFydCgpIHtcclxuICAgIC8vIOu2gO2KuCDsi5ztgIDsiqQg6rWs7ZiEXHJcbiAgICBjb25zb2xlLmxvZygnQm9vdE1hbmFnZXIgc3RhcnRlZCcpO1xyXG4gICAgLy8gMSkgRkJJbnN0YW50IOykgOu5hCDsmYTro4wg6rCA7KCVIChpbml0aWFsaXplQXN5bmMvc3RhcnRHYW1lQXN5bmPripQg67CW7JeQ7IScIOyZhOujjCDtmZXsnbgpXHJcbiAgICAvLyAyKSDshLjshZgg7JeG7Jy866m0IOuhnOq3uOyduCDsi5zrj4RcclxuXHJcbiAgICAvLyBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgLy8gY29uc3QgcGxheWVySWQgPSBwYXJhbXMuZ2V0KFwicGxheWVySWRcIik7ICAgICAvLyBcIjEyMzQ1XCJcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygncGxheWVySWQgOiAnICsgcGxheWVySWQpXHJcbiAgICAvLyBjb25zdCBpZCA9IHBhcmFtcy5nZXQoXCJpZFwiKTsgICAgIC8vIFwiMTIzNDVcIlxyXG4gICAgLy8gY29uc3QgY29kZSA9IHBhcmFtcy5nZXQoXCJjb2RlXCIpOyAvLyBcImFiY1wiXHJcbiAgICAvLyBjb25zdCB0eXBlID0gcGFyYW1zLmdldChcInR5cGVcIik7IC8vIFwicHJldmlld1wiXHJcblxyXG5cclxuICAgIGlmICghU2Vzc2lvblN0b3JlLmlzTG9nZ2VkSW4oKSkge1xyXG4gICAgICBjb25zdCBodHRwID0gbmV3IEh0dHBDbGllbnQoeyBiYXNlVVJMOiAnaHR0cHM6Ly9kZXYuNHR1bmUzLmNvbTo0MTYxOCcgfSk7XHJcbiAgICAgIGNvbnN0IGF1dGggPSBuZXcgQXV0aFNlcnZpY2UoaHR0cCk7XHJcbiAgICAgIGF3YWl0IGF1dGgubG9naW5XaXRoRkIoKTtcclxuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgIGF1dGgubG9hZEdhbWVMaXN0KCksXHJcbiAgICAgICAgYXV0aC5sb2FkRmVhdHVyZXNVbmxvY2tMaXN0KCksXHJcbiAgICAgICAgYXV0aC5sb2FkUmV3YXJkQm94TGlzdCgpLFxyXG4gICAgICAgIGF1dGgubG9hZFBpY3R1cmVMaXN0KClcclxuICAgICAgXSk7XHJcbiAgICB9XHJcbiAgICAvLyAzKSDsnbTtm4Qg7JSsIOyghO2ZmCBvciDstIjquLAg642w7J207YSwIO2UhOumrO2OmOy5mFxyXG4gIH1cclxufSIsImltcG9ydCB7IF9kZWNvcmF0b3IsIEJ1dHRvbiwgQ29tcG9uZW50LCBpbnN0YW50aWF0ZSwgTm9kZSwgUHJlZmFiLCBTcHJpdGUsIFNwcml0ZUZyYW1lIH0gZnJvbSAnY2MnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0J1dHRvbkNvbnRyb2xsZXInKVxyXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KEJ1dHRvbilcclxuICAgIHByaXZhdGUgc3VycmVuZGVyQnV0dG9uOiBCdXR0b25cclxuICAgIEBwcm9wZXJ0eShCdXR0b24pXHJcbiAgICBwcml2YXRlIHNwbGl0QnV0dG9uOiBCdXR0b25cclxuICAgIEBwcm9wZXJ0eShCdXR0b24pXHJcbiAgICBwcml2YXRlIGRvdWJsZURvd25CdXR0b246IEJ1dHRvblxyXG4gICAgQHByb3BlcnR5KEJ1dHRvbilcclxuICAgIHByaXZhdGUgc3RhbmRCdXR0b246IEJ1dHRvblxyXG4gICAgQHByb3BlcnR5KEJ1dHRvbilcclxuICAgIHByaXZhdGUgaGl0QnV0dG9uOiBCdXR0b25cclxuXHJcbiAgICAvLyBwdWJsaWMgaGlkZSgpIHtcclxuICAgIC8vICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBwdWJsaWMgc2hvdygpIHtcclxuICAgIC8vICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBwdWJsaWMgcmVmcmVzaEJ1dHRvbnMoZGF0YSkge1xyXG4gICAgICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAgICAgaWYgKChkYXRhICYgMSkgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5oaXRCdXR0b24ubm9kZS5hY3RpdmUgPSBmYWxzZTs7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oaXRCdXR0b24ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKChkYXRhICYgMikgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFuZEJ1dHRvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhbmRCdXR0b24ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKGRhdGEgJiA0KSA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmRvdWJsZURvd25CdXR0b24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRvdWJsZURvd25CdXR0b24ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKGRhdGEgJiA4KSA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwbGl0QnV0dG9uLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zcGxpdEJ1dHRvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoZGF0YSAmIDE2KSA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnN1cnJlbmRlckJ1dHRvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VycmVuZGVyQnV0dG9uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIGluc3RhbnRpYXRlLCBOb2RlLCBQcmVmYWIsIFNwcml0ZSwgU3ByaXRlRnJhbWUgfSBmcm9tICdjYyc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnQ2FyZHMnKVxyXG5leHBvcnQgY2xhc3MgQ2FyZHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KFNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSBiYWNrQ2FyZDogU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShTcHJpdGVGcmFtZSlcclxuICAgIHByaXZhdGUgY2FyZHMwOiBTcHJpdGVGcmFtZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIGNhcmRzMTogU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KFNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSBjYXJkczI6IFNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShTcHJpdGVGcmFtZSlcclxuICAgIHByaXZhdGUgY2FyZHMzOiBTcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KFByZWZhYilcclxuICAgIHByaXZhdGUgY2FyZFByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoTm9kZSlcclxuICAgIHByaXZhdGUgZGVhbGVyQ2FyZHM6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShOb2RlKVxyXG4gICAgcHJpdmF0ZSB1c2VyQ2FyZHM6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhckNhcmRzKCkgeyBcclxuICAgICAgICB0aGlzLmRlYWxlckNhcmRzLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy51c2VyQ2FyZHMucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0RGVhbGVyQ2FyZHMoZGVja3MpIHtcclxuXHJcbiAgICAgICAgdGhpcy5kZWFsZXJDYXJkcy5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIGRlY2tzLmZvckVhY2goKGRlY2ssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZWZhYiA9IGluc3RhbnRpYXRlKHRoaXMuY2FyZFByZWZhYik7XHJcbiAgICAgICAgICAgIHByZWZhYi5zZXRQYXJlbnQodGhpcy5kZWFsZXJDYXJkcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRTcHJpdGUgPSBwcmVmYWIuZ2V0Q29tcG9uZW50KFNwcml0ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q2FyZChjYXJkU3ByaXRlLCBkZWNrKTtcclxuICAgICAgICAgICAgY29uc3Qgb3V0ID0gcHJlZmFiLmdldFBvc2l0aW9uKClcclxuICAgICAgICAgICAgb3V0LnggPSBvdXQueCArICg1MCAqIGluZGV4KVxyXG4gICAgICAgICAgICBwcmVmYWIuc2V0UG9zaXRpb24ob3V0KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRVc2VyQ2FyZHMoZGVja3MpIHtcclxuICAgICAgICB0aGlzLnVzZXJDYXJkcy5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIGRlY2tzLmZvckVhY2goKGRlY2ssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZWZhYiA9IGluc3RhbnRpYXRlKHRoaXMuY2FyZFByZWZhYik7XHJcbiAgICAgICAgICAgIHByZWZhYi5zZXRQYXJlbnQodGhpcy51c2VyQ2FyZHMpO1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkU3ByaXRlID0gcHJlZmFiLmdldENvbXBvbmVudChTcHJpdGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldENhcmQoY2FyZFNwcml0ZSwgZGVjayk7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dCA9IHByZWZhYi5nZXRQb3NpdGlvbigpXHJcbiAgICAgICAgICAgIG91dC54ID0gb3V0LnggKyAoNTAgKiBpbmRleClcclxuICAgICAgICAgICAgcHJlZmFiLnNldFBvc2l0aW9uKG91dClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldENhcmQoY2FyZCwgdmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBjYXJkLnNwcml0ZUZyYW1lID0gdGhpcy5iYWNrQ2FyZDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdHlwZSA9IE1hdGguZmxvb3IodmFsdWUgLyAxMDApO1xyXG4gICAgICAgIGNvbnN0IG51bWJlciA9ICh2YWx1ZSAlIDEwMCkgLSAxXHJcbiAgICAgICAgaWYgKHR5cGUgPT09IDEpIHtcclxuICAgICAgICAgICAgY2FyZC5zcHJpdGVGcmFtZSA9IHRoaXMuY2FyZHMwW251bWJlcl1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IDIpIHtcclxuICAgICAgICAgICAgY2FyZC5zcHJpdGVGcmFtZSA9IHRoaXMuY2FyZHMxW251bWJlcl1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IDMpIHtcclxuICAgICAgICAgICAgY2FyZC5zcHJpdGVGcmFtZSA9IHRoaXMuY2FyZHMyW251bWJlcl1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IDQpIHtcclxuICAgICAgICAgICAgY2FyZC5zcHJpdGVGcmFtZSA9IHRoaXMuY2FyZHMzW251bWJlcl1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCIvLyBjb3JlL3N0b3JlL0V2ZW50QnVzLnRzXHJcbi8vIOyDge2DnCDrs4Dqsr0g67iM66Gc65Oc7LqQ7Iqk7Yq4IEV2ZW50VGFyZ2V0XHJcblxyXG5pbXBvcnQgeyBFdmVudFRhcmdldCB9IGZyb20gJ2NjJztcclxuXHJcbmV4cG9ydCBlbnVtIEFwcEV2ZW50IHtcclxuICAgIExvZ2luZWQgPSAnTG9naW5lZCcsXHJcbiAgICBVcGRhdGVHYW1lTGlzdCA9ICdVcGRhdGVHYW1lTGlzdCcsXHJcbiAgICBVcGRhdGVVc2VyRGF0YSA9ICdVcGRhdGVVc2VyRGF0YScsXHJcbiAgICBMb2FkZWRVbmxvY2tMaXN0ID0gJ0xvYWRlZFVubG9ja0xpc3QnLFxyXG4gICAgTG9hZGVkUmV3YXJkQm94TGlzdCA9ICdMb2FkZWRSZXdhcmRCb3hMaXN0JyxcclxuICAgIExvYWRlZFBpY3R1cmVMaXN0ID0gJ0xvYWRlZFBpY3R1cmVMaXN0JyxcclxuICAgIC8vIFNlc3Npb25DaGFuZ2VkID0gJ1Nlc3Npb25DaGFuZ2VkJyxcclxuICAgIC8vIFVzZXJVcGRhdGVkID0gJ1VzZXJVcGRhdGVkJyxcclxuICAgIC8vIFdhbGxldFVwZGF0ZWQgPSAnV2FsbGV0VXBkYXRlZCcsXHJcbn1cclxuZXhwb3J0IGVudW0gVG9wRXZlbnQgeyBcclxuICAgIFByb2ZpbGVVcGRhdGVkID0gJ1Byb2ZpbGVVcGRhdGVkJyxcclxufVxyXG5cclxuY2xhc3MgX0V2ZW50QnVzIGV4dGVuZHMgRXZlbnRUYXJnZXQgeyB9XHJcbmV4cG9ydCBjb25zdCBFdmVudEJ1cyA9IG5ldyBfRXZlbnRCdXMoKTtcclxuIiwiLy8gYXNzZXRzL3NjcmlwdHMvY29yZS9mYmluc3RhbnQubW9jay50c1xyXG4oZnVuY3Rpb24gaW5zdGFsbElHTW9jaygpe1xyXG4gIGNvbnN0IGc6IGFueSA9IGdsb2JhbFRoaXMgYXMgYW55O1xyXG4gIGlmIChnLkZCSW5zdGFudCkgcmV0dXJuOyAgICAgICAgIC8vIOy7qO2FjOydtOuEiOuptCDqt7jrjIDroZwg7IKs7JqpXHJcbiAgLy8g6rCc67CcL+uhnOy7rCDrr7jrpqzrs7TquLAg7JWI7KCEIOuqqVxyXG4gIGNvbnN0IG1vY2sgPSB7XHJcbiAgICBhc3luYyBpbml0aWFsaXplQXN5bmMoKXt9LFxyXG4gICAgYXN5bmMgc3RhcnRHYW1lQXN5bmMoKXt9LFxyXG4gICAgc2V0TG9hZGluZ1Byb2dyZXNzKF9wOm51bWJlcil7fSxcclxuICAgIGdldFBsYXRmb3JtKCl7IHJldHVybiAnVEVTVCc7IH0sXHJcbiAgICBnZXRMb2NhbGUoKXsgcmV0dXJuICdrb19LUic7IH0sXHJcbiAgICBwbGF5ZXI6IHtcclxuICAgICAgLy8gZ2V0SUQoKXsgcmV0dXJuICdQTEFZRVJfREVWXycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMWU2KTsgfSxcclxuICAgICAgZ2V0SUQoKXsgcmV0dXJuIDQxNjE4NDE2MTgxMDAwMjsgfSwgLy8g7YWM7Iqk7Yq47JqpIOqzoOyglSBJRFxyXG4gICAgICBhc3luYyBnZXRTaWduZWRQbGF5ZXJJbmZvQXN5bmMoX3BheWxvYWQ6c3RyaW5nKXtcclxuICAgICAgICAvLyDthYzsiqTtirjsmqkg642U66+4IOyEnOuqhSDqsJ3ssrRcclxuICAgICAgICByZXR1cm4geyBnZXRTaWduYXR1cmU6ICgpID0+ICdtb2NrLnNpZ25hdHVyZS5wYXlsb2FkJyB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBnLkZCSW5zdGFudCA9IG1vY2s7XHJcbn0pKCk7XHJcbiIsIi8vIGFzc2V0cy9zY3JpcHRzL2NvcmUvZmJpbnN0YW50LnRzXHJcbnR5cGUgUGhhc2UgPSAnaWRsZScgfCAnaW5pdGlhbGl6aW5nJyB8ICdpbml0aWFsaXplZCcgfCAnc3RhcnRpbmcnIHwgJ3N0YXJ0ZWQnO1xyXG5cclxuZGVjbGFyZSBnbG9iYWwgeyBpbnRlcmZhY2UgV2luZG93IHsgX19pZz86IGFueTsgRkJJbnN0YW50PzogYW55IH0gfVxyXG5cclxuZnVuY3Rpb24gcmVzb2x2ZUZCSSgpOiBhbnkgfCBudWxsIHtcclxuICAgIGNvbnN0IGc6IGFueSA9IGdsb2JhbFRoaXMgYXMgYW55O1xyXG4gICAgLy8g7Luo7YWM7J2064SIIOyDgeychCDsu6jthY3siqTtirjquYzsp4Ag7YOQ7IOJXHJcbiAgICByZXR1cm4gZy5GQkluc3RhbnQgPz8gZy50b3A/LkZCSW5zdGFudCA/PyBnLnBhcmVudD8uRkJJbnN0YW50ID8/IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBGQklHID0gKCgpID0+IHtcclxuICAgIChnbG9iYWxUaGlzIGFzIGFueSkuX19pZyA/Pz0geyBwaGFzZTogJ2lkbGUnIGFzIFBoYXNlLCBpbml0UDogbnVsbCBhcyBQcm9taXNlPHZvaWQ+IHwgbnVsbCwgc3RhcnRQOiBudWxsIGFzIFByb21pc2U8dm9pZD4gfCBudWxsIH07XHJcbiAgICBjb25zdCBTID0gKGdsb2JhbFRoaXMgYXMgYW55KS5fX2lnO1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXRPbmNlKCkge1xyXG4gICAgICAgIGlmIChTLnBoYXNlID09PSAnaW5pdGlhbGl6ZWQnIHx8IFMucGhhc2UgPT09ICdzdGFydGluZycgfHwgUy5waGFzZSA9PT0gJ3N0YXJ0ZWQnKSByZXR1cm47XHJcbiAgICAgICAgaWYgKFMuaW5pdFApIHJldHVybiBTLmluaXRQO1xyXG4gICAgICAgIGNvbnN0IElHID0gcmVzb2x2ZUZCSSgpO1xyXG4gICAgICAgIGlmICghSUcpIHRocm93IG5ldyBFcnJvcignRkJJbnN0YW50IG5vdCBhdmFpbGFibGUgKG5vdCBpbiBJRyBjb250YWluZXIgeWV0KScpO1xyXG4gICAgICAgIFMucGhhc2UgPSAnaW5pdGlhbGl6aW5nJztcclxuICAgICAgICBTLmluaXRQID0gSUcuaW5pdGlhbGl6ZUFzeW5jKCkudGhlbigoKSA9PiB7IFMucGhhc2UgPSAnaW5pdGlhbGl6ZWQnOyB9KTtcclxuICAgICAgICByZXR1cm4gUy5pbml0UDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBzdGFydE9uY2UoKSB7XHJcbiAgICAgICAgaWYgKFMucGhhc2UgPT09ICdzdGFydGVkJykgcmV0dXJuO1xyXG4gICAgICAgIGlmIChTLnN0YXJ0UCkgcmV0dXJuIFMuc3RhcnRQO1xyXG4gICAgICAgIGF3YWl0IGluaXRPbmNlKCk7XHJcbiAgICAgICAgY29uc3QgSUcgPSByZXNvbHZlRkJJKCk7IGlmICghSUcpIHRocm93IG5ldyBFcnJvcignRkJJbnN0YW50IGxvc3QgYWZ0ZXIgaW5pdCcpO1xyXG4gICAgICAgIFMucGhhc2UgPSAnc3RhcnRpbmcnO1xyXG4gICAgICAgIFMuc3RhcnRQID0gSUcuc3RhcnRHYW1lQXN5bmMoKS50aGVuKCgpID0+IHsgUy5waGFzZSA9ICdzdGFydGVkJzsgfSk7XHJcbiAgICAgICAgcmV0dXJuIFMuc3RhcnRQO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFwaU9yTnVsbCgpIHsgcmV0dXJuIHJlc29sdmVGQkkoKTsgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFBsYXllcklkU2FmZSgpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcclxuICAgICAgICBjb25zdCBJRyA9IHJlc29sdmVGQkkoKTsgaWYgKCFJRykgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgLy8gYXdhaXQgc3RhcnRPbmNlKCk7XHJcblxyXG4gICAgICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBJRy5wbGF5ZXIuZ2V0SUQ/LigpID8/IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBpZFxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ZCSW5zdGFudC5nZXRQbGF5ZXJJZFNhZmUgZmFpbGVkLCByZXR1cm5pbmcgbnVsbCAnICsgZSk7XHJcbiAgICAgICAgICAgIC8vIGdldElEKCkg7Iuk7YyoIOyLnCBudWxsIOuwmO2ZmFxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9IC8vIHY47JeQ7ISc64+EIOycoO2aqFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGluaXRPbmNlLCBzdGFydE9uY2UsIGFwaU9yTnVsbCwgZ2V0UGxheWVySWRTYWZlLCBnZXQgcGhhc2UoKTogUGhhc2UgeyByZXR1cm4gUy5waGFzZTsgfSB9O1xyXG59KSgpO1xyXG4iLCIvLyAvLyBhc3NldHMvc2NyaXB0cy9jb3JlL2ZiaW5zdGFudC50c1xyXG4vLyB0eXBlIFBoYXNlID0gJ2lkbGUnIHwgJ2luaXRpYWxpemluZycgfCAnaW5pdGlhbGl6ZWQnIHwgJ3N0YXJ0aW5nJyB8ICdzdGFydGVkJztcclxuXHJcbi8vIGRlY2xhcmUgZ2xvYmFsIHsgaW50ZXJmYWNlIFdpbmRvdyB7IF9faWc/OiBhbnk7IEZCSW5zdGFudD86IGFueSB9IH1cclxuXHJcbi8vIGZ1bmN0aW9uIHJlc29sdmVGQkkoKTogYW55IHwgbnVsbCB7XHJcbi8vICAgICBjb25zdCBnOiBhbnkgPSBnbG9iYWxUaGlzIGFzIGFueTtcclxuLy8gICAgIC8vIOy7qO2FjOydtOuEiCDsg4HsnIQg7Luo7YWN7Iqk7Yq46rmM7KeAIO2DkOyDiVxyXG4vLyAgICAgcmV0dXJuIGcuRkJJbnN0YW50ID8/IGcudG9wPy5GQkluc3RhbnQgPz8gZy5wYXJlbnQ/LkZCSW5zdGFudCA/PyBudWxsO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgY29uc3QgRkJJRyA9ICgoKSA9PiB7XHJcbi8vICAgICAoZ2xvYmFsVGhpcyBhcyBhbnkpLl9faWcgPz89IHsgcGhhc2U6ICdpZGxlJyBhcyBQaGFzZSwgaW5pdFA6IG51bGwgYXMgUHJvbWlzZTx2b2lkPiB8IG51bGwsIHN0YXJ0UDogbnVsbCBhcyBQcm9taXNlPHZvaWQ+IHwgbnVsbCB9O1xyXG4vLyAgICAgY29uc3QgUyA9IChnbG9iYWxUaGlzIGFzIGFueSkuX19pZztcclxuXHJcbi8vICAgICBhc3luYyBmdW5jdGlvbiBpbml0T25jZSgpIHtcclxuLy8gICAgICAgICBpZiAoUy5waGFzZSA9PT0gJ2luaXRpYWxpemVkJyB8fCBTLnBoYXNlID09PSAnc3RhcnRpbmcnIHx8IFMucGhhc2UgPT09ICdzdGFydGVkJykgcmV0dXJuO1xyXG4vLyAgICAgICAgIGlmIChTLmluaXRQKSByZXR1cm4gUy5pbml0UDtcclxuLy8gICAgICAgICBjb25zdCBJRyA9IHJlc29sdmVGQkkoKTtcclxuLy8gICAgICAgICBpZiAoIUlHKSB0aHJvdyBuZXcgRXJyb3IoJ0ZCSW5zdGFudCBub3QgYXZhaWxhYmxlIChub3QgaW4gSUcgY29udGFpbmVyIHlldCknKTtcclxuLy8gICAgICAgICBTLnBoYXNlID0gJ2luaXRpYWxpemluZyc7XHJcbi8vICAgICAgICAgUy5pbml0UCA9IElHLmluaXRpYWxpemVBc3luYygpLnRoZW4oKCkgPT4geyBTLnBoYXNlID0gJ2luaXRpYWxpemVkJzsgfSk7XHJcbi8vICAgICAgICAgcmV0dXJuIFMuaW5pdFA7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgYXN5bmMgZnVuY3Rpb24gc3RhcnRPbmNlKCkge1xyXG4vLyAgICAgICAgIGlmIChTLnBoYXNlID09PSAnc3RhcnRlZCcpIHJldHVybjtcclxuLy8gICAgICAgICBpZiAoUy5zdGFydFApIHJldHVybiBTLnN0YXJ0UDtcclxuLy8gICAgICAgICBhd2FpdCBpbml0T25jZSgpO1xyXG4vLyAgICAgICAgIGNvbnN0IElHID0gcmVzb2x2ZUZCSSgpOyBpZiAoIUlHKSB0aHJvdyBuZXcgRXJyb3IoJ0ZCSW5zdGFudCBsb3N0IGFmdGVyIGluaXQnKTtcclxuLy8gICAgICAgICBTLnBoYXNlID0gJ3N0YXJ0aW5nJztcclxuLy8gICAgICAgICBTLnN0YXJ0UCA9IElHLnN0YXJ0R2FtZUFzeW5jKCkudGhlbigoKSA9PiB7IFMucGhhc2UgPSAnc3RhcnRlZCc7IH0pO1xyXG4vLyAgICAgICAgIHJldHVybiBTLnN0YXJ0UDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBmdW5jdGlvbiBhcGlPck51bGwoKSB7IHJldHVybiByZXNvbHZlRkJJKCk7IH1cclxuXHJcbi8vICAgICBmdW5jdGlvbiBnZXRQbGF5ZXJJZFNhZmUoKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XHJcbi8vICAgICAgICAgY29uc3QgSUcgPSByZXNvbHZlRkJJKCk7IGlmICghSUcpIHJldHVybiBudWxsO1xyXG4vLyAgICAgICAgIC8vIGF3YWl0IHN0YXJ0T25jZSgpO1xyXG5cclxuLy8gICAgICAgICAvLyBkZWJ1Z2dlclxyXG4vLyAgICAgICAgIHRyeSB7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IGlkID0gSUcucGxheWVyLmdldElEPy4oKSA/PyBudWxsO1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gaWRcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgY2F0Y2ggKGUpIHtcclxuLy8gICAgICAgICAgICAgY29uc29sZS53YXJuKCdGQkluc3RhbnQuZ2V0UGxheWVySWRTYWZlIGZhaWxlZCwgcmV0dXJuaW5nIG51bGwgJyArIGUpO1xyXG4vLyAgICAgICAgICAgICAvLyBnZXRJRCgpIOyLpO2MqCDsi5wgbnVsbCDrsJjtmZhcclxuLy8gICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbi8vICAgICAgICAgfSAvLyB2OOyXkOyEnOuPhCDsnKDtmqhcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICByZXR1cm4geyBpbml0T25jZSwgc3RhcnRPbmNlLCBhcGlPck51bGwsIGdldFBsYXllcklkU2FmZSwgZ2V0IHBoYXNlKCk6IFBoYXNlIHsgcmV0dXJuIFMucGhhc2U7IH0gfTtcclxuLy8gfSkoKTtcclxuIiwiLy8gYXNzZXRzL3NjcmlwdHMvY29yZS9mYmluc3RhbnQubW9jay50c1xyXG4oZnVuY3Rpb24gaW5zdGFsbElHTW9jaygpe1xyXG4gIGNvbnN0IGc6IGFueSA9IGdsb2JhbFRoaXMgYXMgYW55O1xyXG4gIGlmIChnLkZCSW5zdGFudCkgcmV0dXJuOyAgICAgICAgIC8vIOy7qO2FjOydtOuEiOuptCDqt7jrjIDroZwg7IKs7JqpXHJcbiAgLy8g6rCc67CcL+uhnOy7rCDrr7jrpqzrs7TquLAg7JWI7KCEIOuqqVxyXG4gIGNvbnN0IG1vY2sgPSB7XHJcbiAgICAvLyBhc3luYyBpbml0aWFsaXplQXN5bmMoKXt9LFxyXG4gICAgLy8gYXN5bmMgc3RhcnRHYW1lQXN5bmMoKXt9LFxyXG4gICAgLy8gc2V0TG9hZGluZ1Byb2dyZXNzKF9wOm51bWJlcil7fSxcclxuICAgIGdldFBsYXRmb3JtKCl7IHJldHVybiAnVEVTVCc7IH0sXHJcbiAgICBnZXRMb2NhbGUoKXsgcmV0dXJuICdrb19LUic7IH0sXHJcbiAgICBwbGF5ZXI6IHtcclxuICAgICAgLy8gZ2V0SUQoKXsgcmV0dXJuICdQTEFZRVJfREVWXycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMWU2KTsgfSxcclxuICAgICAgZ2V0SUQoKXsgcmV0dXJuIDQxNjE4NDE2MTgxMDAwMjsgfSwgLy8g7YWM7Iqk7Yq47JqpIOqzoOyglSBJRFxyXG4gICAgICBhc3luYyBnZXRTaWduZWRQbGF5ZXJJbmZvQXN5bmMoX3BheWxvYWQ6c3RyaW5nKXtcclxuICAgICAgICAvLyDthYzsiqTtirjsmqkg642U66+4IOyEnOuqhSDqsJ3ssrRcclxuICAgICAgICByZXR1cm4geyBnZXRTaWduYXR1cmU6ICgpID0+ICdtb2NrLnNpZ25hdHVyZS5wYXlsb2FkJyB9O1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0UGxheWVyVHlwZSgpeyByZXR1cm4gMTAwOyB9XHJcbiAgfTtcclxuICBnLkZCSW5zdGFudCA9IG1vY2s7XHJcbn0pKCk7XHJcbiIsImV4cG9ydCBjbGFzcyBGQk1hbmFnZXIge1xyXG4gICAgLy8gcHVibGljIHN0YXRpYyBnZXRQbGF5ZXJJZFNhZmUoKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFBsYXllcklkU2FmZSgpOiBOdW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGc6IGFueSA9IGdsb2JhbFRoaXMgYXMgYW55O1xyXG4gICAgICAgIC8vIOy7qO2FjOydtOuEiCDsg4HsnIQg7Luo7YWN7Iqk7Yq46rmM7KeAIO2DkOyDiVxyXG4gICAgICAgIGNvbnN0IElHID0gZy5GQkluc3RhbnQgPz8gZy50b3A/LkZCSW5zdGFudCA/PyBnLnBhcmVudD8uRkJJbnN0YW50ID8/IG51bGw7XHJcbiAgICAgICAgaWYgKCFJRykgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gSUcucGxheWVyLmdldElEPy4oKSA/PyBudWxsO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlNpZ25lZFBsYXllckluZm9Bc3luYyA6IFwiLCBJRy5wbGF5ZXIuZ2V0U2lnbmVkUGxheWVySW5mb0FzeW5jKCkpXHJcbiAgICAgICAgICAgIHJldHVybiBpZFxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdGQkluc3RhbnQuZ2V0UGxheWVySWRTYWZlIGZhaWxlZCwgcmV0dXJuaW5nIG51bGwgJyArIGUpO1xyXG4gICAgICAgICAgICAvLyBnZXRJRCgpIOyLpO2MqCDsi5wgbnVsbCDrsJjtmZhcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSAvLyB2OOyXkOyEnOuPhCDsnKDtmqhcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFBsYXllck9zQ29kZSgpOiBTdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGc6IGFueSA9IGdsb2JhbFRoaXMgYXMgYW55O1xyXG4gICAgICAgIC8vIOy7qO2FjOydtOuEiCDsg4HsnIQg7Luo7YWN7Iqk7Yq46rmM7KeAIO2DkOyDiVxyXG4gICAgICAgIGNvbnN0IElHID0gZy5GQkluc3RhbnQgPz8gZy50b3A/LkZCSW5zdGFudCA/PyBnLnBhcmVudD8uRkJJbnN0YW50ID8/IG51bGw7XHJcbiAgICAgICAgaWYgKCFJRykgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gSUcuZ2V0UGxhdGZvcm0/LigpID8/IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBpZFxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdGQkluc3RhbnQuZ2V0UGxhdGZvcm0gZmFpbGVkLCByZXR1cm5pbmcgbnVsbCAnICsgZSk7XHJcbiAgICAgICAgICAgIC8vIGdldFBsYXRmb3JtKCkg7Iuk7YyoIOyLnCBudWxsIOuwmO2ZmFxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9IC8vIHY47JeQ7ISc64+EIOycoO2aqFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UGxheWVyVHlwZSgpOiBOdW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGc6IGFueSA9IGdsb2JhbFRoaXMgYXMgYW55O1xyXG4gICAgICAgIC8vIOy7qO2FjOydtOuEiCDsg4HsnIQg7Luo7YWN7Iqk7Yq46rmM7KeAIO2DkOyDiVxyXG4gICAgICAgIGNvbnN0IElHID0gZy5GQkluc3RhbnQgPz8gZy50b3A/LkZCSW5zdGFudCA/PyBnLnBhcmVudD8uRkJJbnN0YW50ID8/IG51bGw7XHJcbiAgICAgICAgaWYgKCFJRykgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBJRy5nZXRQbGF5ZXJUeXBlPy4oKSA/PyAxO1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRkJJbnN0YW50LmdldFBsYXllclR5cGUgZmFpbGVkLCByZXR1cm5pbmcgbnVsbCAnICsgZSk7XHJcbiAgICAgICAgICAgIC8vIGdldFBsYXRmb3JtKCkg7Iuk7YyoIOyLnCBudWxsIOuwmO2ZmFxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9IC8vIHY47JeQ7ISc64+EIOycoO2aqFxyXG4gICAgfVxyXG59IiwiXHJcbmludGVyZmFjZSBJR2FtZURhdGEge1xyXG4gICAgR0lEOiBudW1iZXJcclxuICAgIGRlY2tzOiBudW1iZXJcclxuICAgIGdOYW1lOiBzdHJpbmdcclxuICAgIGdPcmRlcjogbnVtYmVyXHJcbiAgICBnVVJMOiBzdHJpbmdcclxuICAgIGhvbGVDYXJkOiBudW1iZXJcclxuICAgIG1TaHVmZmxlOiBudW1iZXJcclxuICAgIG1heEJldDogbnVtYmVyXHJcbiAgICBtYXhTcGxpdDogbnVtYmVyXHJcbiAgICBtaW5CZXQ6IG51bWJlclxyXG4gICAgbWluTHZsOiBudW1iZXJcclxuICAgIHNvZnRTdGFuZDogbnVtYmVyXHJcbn1cclxuZXhwb3J0IGNsYXNzIEdhbWVMaXN0RGF0YSB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbGlzdDogSUdhbWVEYXRhW10gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldERhdGEoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGdhbWU6IFtdID0gZGF0YS5nYW1lO1xyXG4gICAgICAgIGdhbWUuZm9yRWFjaChnYW1lRGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9iajogSUdhbWVEYXRhID0gZ2FtZURhdGE7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKG9iailcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEdhbWVTZXJ2ZXJVUkwoaW5kZXg6IG51bWJlciA9IDApIHtcclxuICAgICAgICBjb25zdCBnYW1lRGF0YTogSUdhbWVEYXRhID0gdGhpcy5saXN0W2luZGV4XTtcclxuICAgICAgICByZXR1cm4gZ2FtZURhdGEuZ1VSTDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IF9kZWNvcmF0b3IsIEJ1dHRvbiwgQ29tcG9uZW50LCBMYWJlbCwgTm9kZSwgUHJlZmFiIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBCdXR0b25Db250cm9sbGVyIH0gZnJvbSAnLi9CdXR0b25Db250cm9sbGVyJztcclxuaW1wb3J0IHsgQ2FyZHMgfSBmcm9tICcuL0NhcmRzJztcclxuaW1wb3J0IHsgSHR0cEdhbWVDbGllbnQgfSBmcm9tICcuL2NvcmUvYXBpL0h0dHBHYW1lQ2xpZW50JztcclxuaW1wb3J0IHsgQXV0aEdhbWVTZXJ2aWNlIH0gZnJvbSAnLi9jb3JlL2F1dGgvQXV0aEdhbWVTZXJ2aWNlJztcclxuaW1wb3J0IHsgR2FtZUxpc3REYXRhIH0gZnJvbSAnLi9kYXRhL0dhbWVMaXN0RGF0YSc7XHJcbmltcG9ydCB7IFBvcHVwTWFuYWdlciB9IGZyb20gJy4vUG9wdXBNYW5hZ2VyJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdHYW1lU2NlbmUnKVxyXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoUHJlZmFiKSBcclxuICAgIHByaXZhdGUgc2V0dGluZ3NQb3B1cCE6IFByZWZhYjtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KE5vZGUpXHJcbiAgICBwcml2YXRlIGNoaXBDb250cm9sbGVyOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShCdXR0b25Db250cm9sbGVyKVxyXG4gICAgcHJpdmF0ZSBidXR0b25Db250cm9sbGVyOiBCdXR0b25Db250cm9sbGVyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShOb2RlKVxyXG4gICAgcHJpdmF0ZSBzdWJCdXR0b25Db250cm9sbGVyOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShOb2RlKVxyXG4gICAgcHJpdmF0ZSBkZWFsQnV0dG9uOiBOb2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShCdXR0b24pXHJcbiAgICBwcml2YXRlIHVuZG9CdXR0b246IEJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoTGFiZWwpXHJcbiAgICBwcml2YXRlIGN1cnJlbnRCZXRMYWJlbDogTGFiZWwgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoQ2FyZHMpXHJcbiAgICBwcml2YXRlIGNhcmRzOiBDYXJkcyA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSB0aW1lb3V0SWQ6IG51bWJlciA9IC0xO1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudEJldFZhbHVlID0gMDtcclxuICAgIHByaXZhdGUgYmV0QXJyYXk6IGFueVtdID0gW107XHJcbiAgICBwcml2YXRlIGF1dGg6IEF1dGhHYW1lU2VydmljZTtcclxuXHJcbiAgICBAcHJvcGVydHkoTGFiZWwpXHJcbiAgICBwcml2YXRlIGJhbGFuY2VMYWJsZTogTGFiZWwgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBHYW1lTGlzdERhdGEuZ2V0R2FtZVNlcnZlclVSTCgwKTtcclxuICAgICAgICBjb25zdCBodHRwID0gbmV3IEh0dHBHYW1lQ2xpZW50KHsgYmFzZVVSTDogdXJsIH0pO1xyXG4gICAgICAgIHRoaXMuYXV0aCA9IG5ldyBBdXRoR2FtZVNlcnZpY2UoaHR0cCk7XHJcbiAgICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgbG9naW4oKSB7XHJcbiAgICAgICAgY29uc3QgcFR5cGUgPSAxMDA7XHJcbiAgICAgICAgY29uc3QgcENvZGUgPSBcIjQxNjE4NDE2MTgxMDAwMlwiO1xyXG5cclxuICAgICAgICBjb25zdCByZXM6IHtcclxuICAgICAgICAgICAgR0lEOiBudW1iZXI7XHJcbiAgICAgICAgICAgIFVJRDogbnVtYmVyO1xyXG4gICAgICAgICAgICBiYWxhbmNlOiBudW1iZXI7XHJcbiAgICAgICAgICAgIGV4cDogbnVtYmVyO1xyXG4gICAgICAgICAgICBleHBOZXh0OiBudW1iZXI7XHJcbiAgICAgICAgICAgIGx2bDogbnVtYmVyO1xyXG4gICAgICAgICAgICBsdmxCb251czogbnVtYmVyO1xyXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLmF1dGgubG9naW4ocFR5cGUsIHBDb2RlKVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5iYWxhbmNlTGFibGUuc3RyaW5nID0gcmVzLmJhbGFuY2UudG9Mb2NhbGVTdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmNoaXBDb250cm9sbGVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudW5kb0J1dHRvbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRlYWxCdXR0b24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5idXR0b25Db250cm9sbGVyLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdWJCdXR0b25Db250cm9sbGVyLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAocmVzLkdJRCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldEdhbWVTdGF0ZXMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNoaXBDb250cm9sbGVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNsaWNrQ2hpcChldmVudFRvdWNoLCBjdXN0b21FdmVudERhdGEpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRCZXRWYWx1ZSArPSBOdW1iZXIoY3VzdG9tRXZlbnREYXRhKTtcclxuICAgICAgICB0aGlzLmJldEFycmF5LnB1c2goY3VzdG9tRXZlbnREYXRhKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50QmV0TGFiZWwuc3RyaW5nID0gdGhpcy5jdXJyZW50QmV0VmFsdWUudG9Mb2NhbGVTdHJpbmcoKTtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50QmV0VmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVhbEJ1dHRvbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVuZG9CdXR0b24uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ2xpY2tSZXZlcnRDaGlwKCkge1xyXG5cclxuICAgICAgICBjb25zdCBiZXQ6IG51bWJlciA9IHRoaXMuYmV0QXJyYXkucG9wKCkgPz8gMFxyXG4gICAgICAgIHRoaXMuY3VycmVudEJldFZhbHVlIC09IGJldDtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50QmV0VmFsdWUgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJldFZhbHVlID0gMDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRCZXRWYWx1ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlYWxCdXR0b24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudW5kb0J1dHRvbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QmV0TGFiZWwuc3RyaW5nID0gdGhpcy5jdXJyZW50QmV0VmFsdWUudG9Mb2NhbGVTdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgb25DbGlja0RlYWxCdXR0b24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEJldFZhbHVlID4gMCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGlwQ29udHJvbGxlci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy51bmRvQnV0dG9uLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmRlYWxCdXR0b24uYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXM6IHtcclxuICAgICAgICAgICAgICAgIGJhbGFuY2U6IG51bWJlclxyXG4gICAgICAgICAgICAgICAgZ2FtZToge31cclxuICAgICAgICAgICAgfSA9IGF3YWl0IHRoaXMuYXV0aC5vbkRlYWwodGhpcy5jdXJyZW50QmV0VmFsdWUpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkNvbnRyb2xsZXIucmVmcmVzaEJ1dHRvbnMocmVzLmdhbWUudXNlci5zZXRbMF0ucG9zc2libGUpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJhbGFuY2VMYWJsZS5zdHJpbmcgPSByZXMuYmFsYW5jZS50b0xvY2FsZVN0cmluZygpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRDYXJkRGF0YShyZXMuZ2FtZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzLmdhbWUuZ3MgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJbnN1cmFuY2UoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uQ29udHJvbGxlci5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHJlc2V0R2FtZVN0YXRlcygpIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbkNvbnRyb2xsZXIubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCByZXM6IHtcclxuICAgICAgICAgICAgYmFsYW5jZTogbnVtYmVyXHJcbiAgICAgICAgICAgIGdhbWU6IHt9XHJcbiAgICAgICAgfSA9IGF3YWl0IHRoaXMuYXV0aC5yZWZyZXNoR2FtZVN0YXRlcygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXNldEdhbWVTdGF0ZXMgOiAnLCBKU09OLnN0cmluZ2lmeShyZXMpKVxyXG4gICAgICAgIGNvbnN0IGJldCA9IHJlcy5nYW1lLnVzZXIuc2V0WzBdLmJldDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRCZXRMYWJlbC5zdHJpbmcgPSBiZXQ7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0Q2FyZERhdGEocmVzLmdhbWUpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHJlcy5nYW1lLmdzID09PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJbnN1cmFuY2UoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlcy5nYW1lLmdzID09PSAzMCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVFbmQocmVzLmJhbGFuY2UpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzLmdhbWUuZ3MgPT09IDEwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQ29udHJvbGxlci5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlwQ29udHJvbGxlci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldENhcmREYXRhKGdhbWUpIHtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXJEZWNrID0gZ2FtZS51c2VyLnNldFswXS5kZWNrO1xyXG4gICAgICAgIGNvbnN0IGRlYWxlckRlY2sgPSBnYW1lLmRlYWxlci5kZWNrO1xyXG5cclxuICAgICAgICB0aGlzLmNhcmRzLnNldFVzZXJDYXJkcyh1c2VyRGVjaylcclxuICAgICAgICB0aGlzLmNhcmRzLnNldERlYWxlckNhcmRzKGRlYWxlckRlY2spXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoZWNrSW5zdXJhbmNlKCkge1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQ29udHJvbGxlci5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3ViQnV0dG9uQ29udHJvbGxlci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBvbkhpdCgpIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbkNvbnRyb2xsZXIubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCByZXM6IHtcclxuICAgICAgICAgICAgYmFsYW5jZTogbnVtYmVyXHJcbiAgICAgICAgICAgIGdhbWU6IHt9XHJcbiAgICAgICAgfSA9IGF3YWl0IHRoaXMuYXV0aC5nYW1lQWN0aW9uKDEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvbkhpdCA6ICcsIEpTT04uc3RyaW5naWZ5KHJlcykpXHJcblxyXG4gICAgICAgIHRoaXMuc2V0Q2FyZERhdGEocmVzLmdhbWUpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQ29udHJvbGxlci5yZWZyZXNoQnV0dG9ucyhyZXMuZ2FtZS51c2VyLnNldFswXS5wb3NzaWJsZSlcclxuXHJcbiAgICAgICAgaWYgKHJlcy5nYW1lLmdzID09PSAxMCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkNvbnRyb2xsZXIubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzLmdhbWUuZ3MgPT09IDMwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUVuZChyZXMuYmFsYW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBvblN0YW5kKCkge1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQ29udHJvbGxlci5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHJlczoge1xyXG4gICAgICAgICAgICBiYWxhbmNlOiBudW1iZXJcclxuICAgICAgICAgICAgZ2FtZToge31cclxuICAgICAgICB9ID0gYXdhaXQgdGhpcy5hdXRoLmdhbWVBY3Rpb24oMik7XHJcbiAgICAgICAgdGhpcy5idXR0b25Db250cm9sbGVyLnJlZnJlc2hCdXR0b25zKHJlcy5nYW1lLnVzZXIuc2V0WzBdLnBvc3NpYmxlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvblN0YW5kIDogJywgSlNPTi5zdHJpbmdpZnkocmVzKSlcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDYXJkRGF0YShyZXMuZ2FtZSk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZUVuZChyZXMuYmFsYW5jZSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lRW5kKGJhbGFuY2UpIHtcclxuICAgICAgICB0aGlzLmJhbGFuY2VMYWJsZS5zdHJpbmcgPSBiYWxhbmNlLnRvTG9jYWxlU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5iZXRBcnJheSA9IFtdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEJldFZhbHVlID0gMFxyXG5cclxuICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRzLmNsZWFyQ2FyZHMoKTtcclxuICAgICAgICAgICAgdGhpcy5jaGlwQ29udHJvbGxlci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmRlYWxCdXR0b24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudW5kb0J1dHRvbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmV0TGFiZWwuc3RyaW5nID0gdGhpcy5jdXJyZW50QmV0VmFsdWUudG9Mb2NhbGVTdHJpbmcoKTtcclxuICAgICAgICB9LCAyMDAwKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBvbkRvdWJsZURvd24oKSB7XHJcbiAgICAgICAgY29uc3QgcmVzOiB7XHJcbiAgICAgICAgICAgIGJhbGFuY2U6IG51bWJlclxyXG4gICAgICAgICAgICBnYW1lOiB7fVxyXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLmF1dGguZ2FtZUFjdGlvbig0KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkNvbnRyb2xsZXIucmVmcmVzaEJ1dHRvbnMocmVzLmdhbWUudXNlci5zZXRbMF0ucG9zc2libGUpXHJcblxyXG4gICAgICAgIHRoaXMuc2V0Q2FyZERhdGEocmVzLmdhbWUpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ29uRG91YmxlRG93biA6ICcsIEpTT04uc3RyaW5naWZ5KHJlcykpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYXN5bmMgb25TcGxpdCgpIHtcclxuICAgICAgICBjb25zdCByZXM6IHtcclxuICAgICAgICAgICAgYmFsYW5jZTogbnVtYmVyXHJcbiAgICAgICAgICAgIGdhbWU6IHt9XHJcbiAgICAgICAgfSA9IGF3YWl0IHRoaXMuYXV0aC5nYW1lQWN0aW9uKDgpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQ29udHJvbGxlci5yZWZyZXNoQnV0dG9ucyhyZXMuZ2FtZS51c2VyLnNldFswXS5wb3NzaWJsZSlcclxuICAgICAgICB0aGlzLnNldENhcmREYXRhKHJlcy5nYW1lKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ29uU3BsaXQgOiAnLCBKU09OLnN0cmluZ2lmeShyZXMpKVxyXG4gICAgfVxyXG4gICAgcHVibGljIGFzeW5jIG9uU3VycmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQ29udHJvbGxlci5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHJlczoge1xyXG4gICAgICAgICAgICBiYWxhbmNlOiBudW1iZXJcclxuICAgICAgICAgICAgZ2FtZToge31cclxuICAgICAgICB9ID0gYXdhaXQgdGhpcy5hdXRoLmdhbWVBY3Rpb24oMTYpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQ29udHJvbGxlci5yZWZyZXNoQnV0dG9ucyhyZXMuZ2FtZS51c2VyLnNldFswXS5wb3NzaWJsZSlcclxuICAgICAgICBjb25zb2xlLmxvZygnb25TdXJyZW5kZXIgOiAnLCBKU09OLnN0cmluZ2lmeShyZXMpKVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zZXRDYXJkRGF0YShyZXMuZ2FtZSk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZUVuZChyZXMuYmFsYW5jZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBvbkluc3VyYW5jZSgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25FdmVuTW9uZXkoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBvbkNsaWNrWWVzKCkge1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQ29udHJvbGxlci5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3ViQnV0dG9uQ29udHJvbGxlci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCByZXM6IHtcclxuICAgICAgICAgICAgYmFsYW5jZTogbnVtYmVyXHJcbiAgICAgICAgICAgIGdhbWU6IHt9XHJcbiAgICAgICAgfSA9IGF3YWl0IHRoaXMuYXV0aC5nYW1lQWN0aW9uKDEwMDAsIDAsIDEpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQ29udHJvbGxlci5yZWZyZXNoQnV0dG9ucyhyZXMuZ2FtZS51c2VyLnNldFswXS5wb3NzaWJsZSlcclxuICAgICAgICBjb25zb2xlLmxvZygnb25DbGlja1llcyA6ICcsIEpTT04uc3RyaW5naWZ5KHJlcykpXHJcbiAgICAgICAgdGhpcy5idXR0b25Db250cm9sbGVyLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhc3luYyBvbkNsaWNrTm8oKSB7XHJcbiAgICAgICAgdGhpcy5idXR0b25Db250cm9sbGVyLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdWJCdXR0b25Db250cm9sbGVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHJlczoge1xyXG4gICAgICAgICAgICBiYWxhbmNlOiBudW1iZXJcclxuICAgICAgICAgICAgZ2FtZToge31cclxuICAgICAgICB9ID0gYXdhaXQgdGhpcy5hdXRoLmdhbWVBY3Rpb24oMTAwMCwgMCwgMCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ29uQ2xpY2tObyA6ICcsIEpTT04uc3RyaW5naWZ5KHJlcykpXHJcbiAgICAgICAgdGhpcy5idXR0b25Db250cm9sbGVyLnJlZnJlc2hCdXR0b25zKHJlcy5nYW1lLnVzZXIuc2V0WzBdLnBvc3NpYmxlKVxyXG4gICAgICAgIHRoaXMuYnV0dG9uQ29udHJvbGxlci5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKHJlcy5nYW1lLmdzID09PSAzMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldENhcmREYXRhKHJlcy5nYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lRW5kKHJlcy5iYWxhbmNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIG9uQ2xpY2tTZXR0aW5nQnV0dG9uKCkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnc2V0dGluZyBidXR0b24gY2xpY2tlZCcpXHJcblxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IFBvcHVwTWFuYWdlci5JKCkub3BlbihcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5nc1BvcHVwLFxyXG4gICAgICAgICAgICB7IG11c2ljT246IHRydWUsIHNmeE9uOiBmYWxzZSwgdm9sdW1lOiAwLjYgfSxcclxuICAgICAgICAgICAgeyBjbG9zZU9uRGltOiB0cnVlIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChyZXMuYWN0aW9uID09PSAnY29uZmlybScpIHtcclxuICAgICAgICAgICAgY29uc3QgeyBtdXNpY09uLCBzZnhPbiwgdm9sdW1lIH0gPSByZXMucGF5bG9hZDtcclxuICAgICAgICAgICAgLy8gVE9ETzogQXVkaW9NYW5hZ2VyIOyggeyaqSwg7KCA7J6lIOuTsVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTGFiZWwsIE5vZGUgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IEdlbVZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXdNb2RlbC9HZW1WaWV3TW9kZWwnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0dlbScpXHJcbmV4cG9ydCBjbGFzcyBHZW0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShMYWJlbClcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY291bnRMYWJlbCE6IExhYmVsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShMYWJlbClcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGltZXJMYWJlbCE6IExhYmVsXHJcblxyXG4gICAgQHByb3BlcnR5KE5vZGUpXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZ1bGxDb3VudExhYmVsITogTm9kZTtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZpZXdNb2RlbCA9IG5ldyBHZW1WaWV3TW9kZWwoKTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudmlld01vZGVsLmluaXRMaXN0ZW5lcih7XHJcbiAgICAgICAgICAgIG9uQ291bnRDaGFuZ2U6IChjb3VudDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldENvdW50KGNvdW50KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25UaW1lclRpY2s6IChtaW46IG51bWJlciwgc2VjOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChtaW4gPCAwKSBtaW4gPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlYyA8IDApIHNlYyA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRpbWVyKG1pbiwgc2VjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudmlld01vZGVsLmluaXRpYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q291bnQoY291bnQ6IG51bWJlciA9IDApIHtcclxuICAgICAgICB0aGlzLmNvdW50TGFiZWwuc3RyaW5nID0gY291bnQudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAoY291bnQgPT09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lckxhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZnVsbENvdW50TGFiZWwuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyTGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZ1bGxDb3VudExhYmVsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VGltZXIobWluOiBudW1iZXIgPSAwLCBzZWM6IG51bWJlciA9IDApIHtcclxuICAgICAgICB0aGlzLnRpbWVyTGFiZWwuc3RyaW5nID0gYCR7bWlufSA6ICR7c2VjfWA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyB1c2VyRGF0YSB9IGZyb20gXCIuLi9tb2RlbC9Vc2VyRGF0YVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdlbVZpZXdNb2RlbCB7XHJcbiAgICAvLyBWaWV3TW9kZWwgbG9naWMgaGVyZSBpZiBuZWVkZWRcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbW9kZWwgPSB1c2VyRGF0YS5nZW1cclxuICAgIHByaXZhdGUgdGltZW91dElkOiBudW1iZXIgPSAtMTtcclxuXHJcbiAgICBwcml2YXRlIG9uVGltZXJUaWNrPzogKG1pbjogbnVtYmVyLCBzZWM6IG51bWJlcikgPT4gdm9pZDtcclxuICAgIHByaXZhdGUgb25Db3VudENoYW5nZT86IChjb3VudDogbnVtYmVyKSA9PiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVOb3RpZnkoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVOb3RpZnkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdExpc3RlbmVyKGNhbGxiYWNrczoge1xyXG4gICAgICAgIG9uVGltZXJUaWNrPzogKG1pbjogbnVtYmVyLCBzZWM6IG51bWJlcikgPT4gdm9pZDtcclxuICAgICAgICBvbkNvdW50Q2hhbmdlPzogKGNvdW50OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgICB9KSB7XHJcbiAgICAgICAgdGhpcy5vblRpbWVyVGljayA9IGNhbGxiYWNrcy5vblRpbWVyVGljaztcclxuICAgICAgICB0aGlzLm9uQ291bnRDaGFuZ2UgPSBjYWxsYmFja3Mub25Db3VudENoYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZU5vdGlmeSgpIHtcclxuICAgICAgICBpZiAodGhpcy5vbkNvdW50Q2hhbmdlKSB0aGlzLm9uQ291bnRDaGFuZ2UodGhpcy5tb2RlbC5jb3VudCk7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIpIHRoaXMudGltZXIodGhpcy5tb2RlbC50c0dlbU5leHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdGltZXIoc2Vjb25kczogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZW91dElkID4gMCkgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkKTtcclxuXHJcbiAgICAgICAgaWYgKHNlY29uZHMgPCAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9uVGltZXJUaWNrKSB0aGlzLm9uVGltZXJUaWNrKDAsIDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1vZGVsLnNldFRzR2VtTmV4dChzZWNvbmRzKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xyXG4gICAgICAgIGNvbnN0IHNlYyA9IHNlY29uZHMgJSA2MDtcclxuICAgICAgICB0aGlzLm9uVGltZXJUaWNrKG1pbiwgc2VjKTtcclxuICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy50aW1lcihzZWNvbmRzIC0gMSksIDEwMDApO1xyXG4gICAgfVxyXG59IiwiLy8gY29yZS9hcGkvSHR0cENsaWVudC50c1xyXG4vLyDqs7XthrUgSFRUUCDtgbTrnbzsnbTslrjtirggKO2GoO2BsCDso7zsnoUsIOyerOyLnOuPhCwg7JeQ65+sIO2RnOykgO2ZlClcclxudHlwZSBIdHRwTWV0aG9kID0gJ0dFVCcgfCAnUE9TVCcgfCAnUFVUJyB8ICdERUxFVEUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIdHRwQ2xpZW50T3B0aW9ucyB7XHJcbiAgYmFzZVVSTDogc3RyaW5nO1xyXG4gIGdldFRva2VuPzogKCkgPT4gc3RyaW5nIHwgbnVsbDsgICAgICAgLy8gU2Vzc2lvblN0b3Jl7JeQ7IScIOyjvOyehVxyXG4gIHRpbWVvdXRNcz86IG51bWJlcjsgICAgICAgICAgICAgICAgICAgIC8vIO2VhOyalCDsi5wgQWJvcnRTaWduYWwg7KCB7JqpXHJcbiAgcmV0cnk/OiB7IHJldHJpZXM6IG51bWJlcjsgZGVsYXlNczogbnVtYmVyIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBIdHRwQ2xpZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9wdHM6IEh0dHBDbGllbnRPcHRpb25zKSB7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgcmVxdWVzdDxUPihtZXRob2Q6IEh0dHBNZXRob2QsIGNtZDogc3RyaW5nLCBTSUQ/OiBzdHJpbmcsIGJvZHk/OiBhbnkpOiBQcm9taXNlPFQ+IHtcclxuICAgIGNvbnN0IGhlYWRlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfTtcclxuICAgIGNvbnN0IHRva2VuID0gdGhpcy5vcHRzLmdldFRva2VuPy4oKTtcclxuICAgIGlmICh0b2tlbikgaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XHJcblxyXG4gICAgbGV0IGF0dGVtcHQgPSAwO1xyXG4gICAgbGV0IGxhc3RFcnI6IHVua25vd247XHJcbiAgICBjb25zdCByZXRyaWVzID0gdGhpcy5vcHRzLnJldHJ5Py5yZXRyaWVzID8/IDA7XHJcbiAgICBjb25zdCBkZWxheU1zID0gdGhpcy5vcHRzLnJldHJ5Py5kZWxheU1zID8/IDA7XHJcblxyXG4gICAgd2hpbGUgKGF0dGVtcHQgPD0gcmV0cmllcykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBjbWQ6IGNtZCxcclxuICAgICAgICAgIFNJRDogU0lELFxyXG4gICAgICAgICAgZGF0YTogYm9keSA/PyB7fVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godGhpcy5vcHRzLmJhc2VVUkwsIHtcclxuICAgICAgICAgIG1ldGhvZCxcclxuICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgICBib2R5OiBkYXRhXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgICAvLyDtkZzspIDtmZTrkJwg7JeQ65+sXHJcbiAgICAgICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgc2FmZUpzb24ocmVzKTtcclxuICAgICAgICAgIHRocm93IHsgc3RhdHVzOiByZXMuc3RhdHVzLCBwYXlsb2FkIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBqc29uUmVzID0gYXdhaXQgc2FmZUpzb24ocmVzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhqc29uUmVzKTtcclxuICAgICAgICByZXR1cm4ganNvblJlcyBhcyBUO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgbGFzdEVyciA9IGU7XHJcbiAgICAgICAgaWYgKGF0dGVtcHQrKyA8IHJldHJpZXMpIGF3YWl0IHNsZWVwKGRlbGF5TXMpO1xyXG4gICAgICAgIGVsc2UgdGhyb3cgbGFzdEVycjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gVW5yZWFjaGFibGVcclxuICAgIHRocm93IGxhc3RFcnI7XHJcbiAgfVxyXG5cclxuICBnZXQ8VD4odTogc3RyaW5nKSB7IHJldHVybiB0aGlzLnJlcXVlc3Q8VD4oJ0dFVCcsIHUpOyB9XHJcbiAgcHVibGljIHBvc3Q8VD4oY21kOiBzdHJpbmcsIFNJRD86IHN0cmluZywgYj86IGFueSkgeyByZXR1cm4gdGhpcy5yZXF1ZXN0PFQ+KCdQT1NUJywgY21kLCBTSUQsIGIpOyB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNhZmVKc29uKHJlczogUmVzcG9uc2UpIHsgdHJ5IHsgcmV0dXJuIGF3YWl0IHJlcy5qc29uKCk7IH0gY2F0Y2ggeyByZXR1cm4gbnVsbDsgfSB9XHJcbmZ1bmN0aW9uIHNsZWVwKG1zOiBudW1iZXIpIHsgcmV0dXJuIG5ldyBQcm9taXNlKHIgPT4gc2V0VGltZW91dChyLCBtcykpOyB9XHJcbiIsIi8vIGNvcmUvYXBpL0h0dHBDbGllbnQudHNcclxuLy8g6rO17Ya1IEhUVFAg7YG065287J207Ja47Yq4ICjthqDtgbAg7KO87J6FLCDsnqzsi5zrj4QsIOyXkOufrCDtkZzspIDtmZQpXHJcbnR5cGUgSHR0cE1ldGhvZCA9ICdHRVQnIHwgJ1BPU1QnIHwgJ1BVVCcgfCAnREVMRVRFJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSHR0cENsaWVudE9wdGlvbnMge1xyXG4gIGJhc2VVUkw6IHN0cmluZztcclxuICBnZXRUb2tlbj86ICgpID0+IHN0cmluZyB8IG51bGw7ICAgICAgIC8vIFNlc3Npb25TdG9yZeyXkOyEnCDso7zsnoVcclxuICB0aW1lb3V0TXM/OiBudW1iZXI7ICAgICAgICAgICAgICAgICAgICAvLyDtlYTsmpQg7IucIEFib3J0U2lnbmFsIOyggeyaqVxyXG4gIHJldHJ5PzogeyByZXRyaWVzOiBudW1iZXI7IGRlbGF5TXM6IG51bWJlciB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSHR0cEdhbWVDbGllbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3B0czogSHR0cENsaWVudE9wdGlvbnMpIHtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgU0lEOiBzdHJpbmcgPSBcIlwiO1xyXG4gIHByaXZhdGUgUEsgPSB7XHJcbiAgICB0OiBcIlwiLFxyXG4gICAgbjogXCJcIlxyXG4gIH1cclxuXHJcblxyXG4gIC8vIHB1YmxpYyBhc3luYyByZXF1ZXN0PFQ+KG1ldGhvZDogSHR0cE1ldGhvZCwgY21kOiBzdHJpbmcsIFNJRD86IHN0cmluZywgYm9keT86IGFueSk6IFByb21pc2U8VD4ge1xyXG4gIHB1YmxpYyBhc3luYyByZXF1ZXN0PFQ+KG1ldGhvZDogSHR0cE1ldGhvZCwgY21kOiBzdHJpbmcsIGJvZHk/OiBhbnkpOiBQcm9taXNlPFQ+IHtcclxuICAgIGNvbnN0IGhlYWRlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfTtcclxuICAgIGNvbnN0IHRva2VuID0gdGhpcy5vcHRzLmdldFRva2VuPy4oKTtcclxuICAgIGlmICh0b2tlbikgaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XHJcblxyXG4gICAgbGV0IGF0dGVtcHQgPSAwO1xyXG4gICAgbGV0IGxhc3RFcnI6IHVua25vd247XHJcbiAgICBjb25zdCByZXRyaWVzID0gdGhpcy5vcHRzLnJldHJ5Py5yZXRyaWVzID8/IDA7XHJcbiAgICBjb25zdCBkZWxheU1zID0gdGhpcy5vcHRzLnJldHJ5Py5kZWxheU1zID8/IDA7XHJcblxyXG4gICAgd2hpbGUgKGF0dGVtcHQgPD0gcmV0cmllcykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBjbWQ6IGNtZCxcclxuICAgICAgICAgIFNJRDogdGhpcy5TSUQsXHJcbiAgICAgICAgICBQSzogdGhpcy5QSy5uLFxyXG4gICAgICAgICAgZGF0YTogYm9keSA/PyB7fVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godGhpcy5vcHRzLmJhc2VVUkwsIHtcclxuICAgICAgICAgIG1ldGhvZCxcclxuICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgICBib2R5OiBkYXRhXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgICAvLyDtkZzspIDtmZTrkJwg7JeQ65+sXHJcbiAgICAgICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgc2FmZUpzb24ocmVzKTtcclxuICAgICAgICAgIHRocm93IHsgc3RhdHVzOiByZXMuc3RhdHVzLCBwYXlsb2FkIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBqc29uUmVzID0gYXdhaXQgc2FmZUpzb24ocmVzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhqc29uUmVzKTtcclxuXHJcbiAgICAgICAgaWYoISFqc29uUmVzLlNJRCkgeyBcclxuICAgICAgICAgIHRoaXMuU0lEID0ganNvblJlcy5TSUQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuUEsgPSBqc29uUmVzLlBLO1xyXG5cclxuICAgICAgICByZXR1cm4ganNvblJlcyBhcyBUO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgbGFzdEVyciA9IGU7XHJcbiAgICAgICAgaWYgKGF0dGVtcHQrKyA8IHJldHJpZXMpIGF3YWl0IHNsZWVwKGRlbGF5TXMpO1xyXG4gICAgICAgIGVsc2UgdGhyb3cgbGFzdEVycjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gVW5yZWFjaGFibGVcclxuICAgIHRocm93IGxhc3RFcnI7XHJcbiAgfVxyXG5cclxuICBnZXQ8VD4odTogc3RyaW5nKSB7IHJldHVybiB0aGlzLnJlcXVlc3Q8VD4oJ0dFVCcsIHUpOyB9XHJcbiAgcHVibGljIHBvc3Q8VD4oY21kOiBzdHJpbmcsIGI/OiBhbnkpIHsgcmV0dXJuIHRoaXMucmVxdWVzdDxUPignUE9TVCcsIGNtZCwgYik7IH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2FmZUpzb24ocmVzOiBSZXNwb25zZSkgeyB0cnkgeyByZXR1cm4gYXdhaXQgcmVzLmpzb24oKTsgfSBjYXRjaCB7IHJldHVybiBudWxsOyB9IH1cclxuZnVuY3Rpb24gc2xlZXAobXM6IG51bWJlcikgeyByZXR1cm4gbmV3IFByb21pc2UociA9PiBzZXRUaW1lb3V0KHIsIG1zKSk7IH1cclxuIiwiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBkaXJlY3RvciB9IGZyb20gJ2NjJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdQbGF5QnV0dG9uJylcclxuZXhwb3J0IGNsYXNzIFBsYXlCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQbGF5QnV0dG9uIG9uQ2xpY2tcIik7XHJcbiAgICAgICAgZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIGluc3RhbnRpYXRlLCBVSVRyYW5zZm9ybSwgTGF5ZXJzLCBpbnB1dCwgSW5wdXQsIEV2ZW50S2V5Ym9hcmQsIEtleUNvZGUgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IEJhc2VQb3B1cCwgUG9wdXBSZXN1bHQgfSBmcm9tICcuL0Jhc2VQb3B1cCc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnUG9wdXBNYW5hZ2VyJylcclxuZXhwb3J0IGNsYXNzIFBvcHVwTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3Q6IFBvcHVwTWFuYWdlcjtcclxuICBzdGF0aWMgSSgpIHsgcmV0dXJuIHRoaXMuX2luc3Q7IH1cclxuXHJcbiAgQHByb3BlcnR5KE5vZGUpIGxheWVyITogTm9kZTsgICAgICAgICAgLy8gQ2FudmFzIO2VmOychDog66qo64usIOyghOyaqSDroIjsnbTslrRcclxuICAvLyBAcHJvcGVydHkoUHJlZmFiKSBvdmVybGF5UHJlZmFiITogUHJlZmFiOyAvLyDrsJjtiKzrqoUg65SkKHByZWZhYilcclxuXHJcbiAgcHJpdmF0ZSBzdGFjazogTm9kZVtdID0gW107XHJcbiAgLy8gcHJpdmF0ZSBvdmVybGF5ITogTm9kZTtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgUG9wdXBNYW5hZ2VyLl9pbnN0ID0gdGhpcztcclxuICAgIC8vIHRoaXMuaW5pdE92ZXJsYXkoKTtcclxuICAgIGlucHV0Lm9uKElucHV0LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gcHJpdmF0ZSBpbml0T3ZlcmxheSgpIHtcclxuICAvLyAgIHRoaXMub3ZlcmxheSA9IGluc3RhbnRpYXRlKHRoaXMub3ZlcmxheVByZWZhYik7XHJcbiAgLy8gICB0aGlzLm92ZXJsYXkubGF5ZXIgPSBMYXllcnMuRW51bS5VSV8yRDtcclxuICAvLyAgIHRoaXMub3ZlcmxheS5hY3RpdmUgPSBmYWxzZTtcclxuICAvLyAgIHRoaXMub3ZlcmxheS5zZXRTaWJsaW5nSW5kZXgoOTk5OSk7XHJcbiAgLy8gICB0aGlzLm92ZXJsYXkub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB0aGlzLmRpc21pc3NUb3AoJ2Nsb3NlJyksIHRoaXMpO1xyXG4gIC8vICAgdGhpcy5sYXllci5hZGRDaGlsZCh0aGlzLm92ZXJsYXkpO1xyXG4gIC8vIH1cclxuXHJcbiAgYXN5bmMgb3BlbjxUIGV4dGVuZHMgQmFzZVBvcHVwPihwcmVmYWI6IFByZWZhYiwgaW5pdERhdGE/OiBhbnksIG9wdGlvbnM/OiB7IGNsb3NlT25EaW0/OiBib29sZWFuIH0pOiBQcm9taXNlPFBvcHVwUmVzdWx0PiB7XHJcbiAgICBjb25zdCBub2RlID0gaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgIG5vZGUubGF5ZXIgPSBMYXllcnMuRW51bS5VSV8yRDtcclxuICAgIHRoaXMubGF5ZXIuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICB0aGlzLnN0YWNrLnB1c2gobm9kZSk7XHJcblxyXG4gICAgLy8g65SkIO2RnOyLnCAmIO2EsOy5mCDssKjri6hcclxuICAgIC8vIHRoaXMub3ZlcmxheS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgLy8gdGhpcy5vdmVybGF5LnNldFNpYmxpbmdJbmRleChub2RlLmdldFNpYmxpbmdJbmRleCgpIC0gMSk7XHJcbiAgICAvLyB0aGlzLm92ZXJsYXkuZ2V0Q29tcG9uZW50KFVJVHJhbnNmb3JtKSEucHJpb3JpdHkgPSAxMDAwMDtcclxuXHJcbiAgICAvLyAvLyDrlKQg7YG066atIOuLq+q4sCDsmLXshZhcclxuICAgIC8vIHRoaXMub3ZlcmxheS5vZmYoTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKTtcclxuICAgIC8vIHRoaXMub3ZlcmxheS5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcclxuICAgIC8vICAgaWYgKG9wdGlvbnM/LmNsb3NlT25EaW0pIHRoaXMuZGlzbWlzcyhub2RlLCAnY2xvc2UnKTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIGNvbnN0IHBvcHVwID0gbm9kZS5nZXRDb21wb25lbnQoQmFzZVBvcHVwKSE7XHJcbiAgICBwb3B1cC5vbk9wZW4/Lihpbml0RGF0YSk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFBvcHVwUmVzdWx0PigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAvLyDsnpDsi50g7Lu07Y+s64SM7Yq47JeQ7IScIGNvbmZpcm0vY2FuY2VsIOyLnCDtmLjstpztlaAg7IiYIOyeiOuKlCDtlbjrk6Trn6wg65Ox66GdXHJcbiAgICAgIChub2RlIGFzIGFueSkuX19yZXNvbHZlID0gKHJlczogUG9wdXBSZXN1bHQpID0+IHtcclxuICAgICAgICBwb3B1cC5wbGF5Q2xvc2VBbmltKCgpID0+IHtcclxuICAgICAgICAgIHBvcHVwLm9uQ2xvc2U/LigpO1xyXG4gICAgICAgICAgbm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgIHRoaXMuc3RhY2sucG9wKCk7XHJcbiAgICAgICAgICAvLyBpZiAodGhpcy5zdGFjay5sZW5ndGggPT09IDApIHRoaXMub3ZlcmxheS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGlzbWlzcyhub2RlOiBOb2RlLCBhY3Rpb246IFBvcHVwUmVzdWx0WydhY3Rpb24nXSA9ICdjbG9zZScsIHBheWxvYWQ/OiBhbnkpIHtcclxuICAgIGNvbnN0IHJlc29sdmVyID0gKG5vZGUgYXMgYW55KS5fX3Jlc29sdmUgYXMgKHI6IFBvcHVwUmVzdWx0KSA9PiB2b2lkO1xyXG4gICAgaWYgKHJlc29sdmVyKSByZXNvbHZlcih7IGFjdGlvbiwgcGF5bG9hZCB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzbWlzc1RvcChhY3Rpb246IFBvcHVwUmVzdWx0WydhY3Rpb24nXSA9ICdjbG9zZScpIHtcclxuICAgIGNvbnN0IHRvcCA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXTtcclxuICAgIGlmICh0b3ApIHRoaXMuZGlzbWlzcyh0b3AsIGFjdGlvbik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uS2V5RG93bihlOiBFdmVudEtleWJvYXJkKSB7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2RlLkVTQ0FQRSB8fCBlLmtleUNvZGUgPT09IEtleUNvZGUuTU9CSUxFX0JBQ0spIHtcclxuICAgICAgdGhpcy5kaXNtaXNzVG9wKCdjbG9zZScpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIFNwcml0ZSwgU3ByaXRlRnJhbWUgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3TW9kZWwvUHJvZmlsZVZpZXdNb2RlbCc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnUHJvZmlsZScpXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShTcHJpdGUpXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByb2ZpbGVJbWFnZVNwcml0ZSE6IFNwcml0ZTtcclxuXHJcbiAgICBAcHJvcGVydHkoW1Nwcml0ZUZyYW1lXSlcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGljdHVyZUxpc3Q6IFNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZpZXdNb2RlbCA9IG5ldyBQcm9maWxlVmlld01vZGVsKCk7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnZpZXdNb2RlbC51cGRhdGVQcm9maWxlKChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZmlsZUJ5SW5kZXgoaW5kZXgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0UHJvZmlsZUJ5SW5kZXgoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHBpY3R1cmUgPSB0aGlzLnBpY3R1cmVMaXN0W2luZGV4IC0gMV07XHJcbiAgICAgICAgaWYgKHBpY3R1cmUpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9maWxlSW1hZ2VTcHJpdGUuc3ByaXRlRnJhbWUgPSBwaWN0dXJlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgdXNlckRhdGEgfSBmcm9tIFwiLi4vbW9kZWwvVXNlckRhdGFcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlVmlld01vZGVsIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbW9kZWwgPSB1c2VyRGF0YS5wcm9maWxlO1xyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVQcm9maWxlKGNhbGxiYWNrOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb2ZpbGVQaWN0dXJlSW5kZXggPSB0aGlzLm1vZGVsLnByb2ZpbGVJbWFnZUluZGV4O1xyXG4gICAgICAgIHJldHVybiBjYWxsYmFjayhwcm9maWxlUGljdHVyZUluZGV4KTtcclxuICAgIH1cclxufSIsIi8vIGNvcmUvc3RvcmUvU2Vzc2lvblN0b3JlLnRzXHJcbi8vIOyEuOyFmC/thqDtgbAv7Jyg7KCA6riw67O47KCV67O0KOyghOyXrSDri6jsnbwg7JuQ7LKcKVxyXG5cclxuaW1wb3J0IHsgc3lzIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyB1c2VyRGF0YSB9IGZyb20gJy4uLy4uL21vZGVsL1VzZXJEYXRhJztcclxuaW1wb3J0IHsgR2FtZUxpc3RSZXNwb25zZSwgUmV3YXJkQm94TGlzdFJlc3BvbnNlLCBVbkxvY2tMaXN0UmVzcG9uc2UgfSBmcm9tICcuLi9hcGkvQXBpVHlwZXMnO1xyXG5pbXBvcnQgeyBBcHBFdmVudCwgRXZlbnRCdXMgfSBmcm9tICcuL0V2ZW50QnVzJztcclxuXHJcbmludGVyZmFjZSBMb2dpblNlc3Npb24ge1xyXG4gIFNJRDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVXNlckRhdGFTZXNzaW9uIHtcclxuICBVSUQ6IG51bWJlcjtcclxuICBVTmFtZTogc3RyaW5nO1xyXG4gIEdJRDogbnVtYmVyO1xyXG4gIFRQOiBudW1iZXI7XHJcbiAgQk5hbWU6IHN0cmluZztcclxuICBwaWM6IG51bWJlcjtcclxuICBwaWN0dXJlOiBzdHJpbmc7XHJcbiAgbHZsOiBudW1iZXI7XHJcbiAgZXhwOiBudW1iZXI7XHJcbiAgZXhwTmV4dDogbnVtYmVyO1xyXG4gIGdlbTogbnVtYmVyO1xyXG4gIGZyYW1lOiBudW1iZXI7XHJcbiAgdGh1bmRlcjogbnVtYmVyO1xyXG4gIGJhbGFuY2U6IG51bWJlcjtcclxuICBsdmxCb251czogbnVtYmVyO1xyXG4gIHRzR2VtTGltaXQ6IG51bWJlcjtcclxuICB0c0dlbU5leHQ6IG51bWJlcjtcclxuICB0c0FEU3BvdDogbnVtYmVyO1xyXG4gIHRzQURGZWVkOiBudW1iZXI7XHJcbiAgU0VSVkVSX1RJTUVTVEFNUDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBMU19LRVkgPSAnYXBwLnNlc3Npb24udjEnO1xyXG5cclxuY2xhc3MgX1Nlc3Npb25TdG9yZSB7XHJcbiAgcHJpdmF0ZSBsb2dpblNlc3Npb246IExvZ2luU2Vzc2lvbiB8IG51bGwgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgdGhpcy5yZXN0b3JlKCk7IH1cclxuXHJcbiAgcHJpdmF0ZSByZXN0b3JlKCkge1xyXG4gICAgY29uc3QgcmF3ID0gc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKExTX0tFWSk7XHJcbiAgICBpZiAoIXJhdykgcmV0dXJuO1xyXG4gICAgdHJ5IHsgdGhpcy5sb2dpblNlc3Npb24gPSBKU09OLnBhcnNlKHJhdyk7IH1cclxuICAgIGNhdGNoIHsgLyogbm9vcCAqLyB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TG9naW5TZXNzaW9uKCk6IExvZ2luU2Vzc2lvbiB8IG51bGwgeyByZXR1cm4gdGhpcy5sb2dpblNlc3Npb247IH1cclxuICBwdWJsaWMgaXNMb2dnZWRJbigpIHsgcmV0dXJuICEhdGhpcy5sb2dpblNlc3Npb24/LlNJRDsgfVxyXG5cclxuICBwdWJsaWMgc2V0TG9naW5TZXNzaW9uKHM6IExvZ2luU2Vzc2lvbikge1xyXG4gICAgdGhpcy5sb2dpblNlc3Npb24gPSBzO1xyXG4gICAgY29uc29sZS5sb2coXCJTZXQgTG9naW4gU2Vzc2lvbjpcIiwgcyk7XHJcbiAgICBzeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2dpblNlc3Npb25cIiwgSlNPTi5zdHJpbmdpZnkocy5TSUQpKTtcclxuICAgIEV2ZW50QnVzLmVtaXQoQXBwRXZlbnQuTG9naW5lZCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0VXNlckRhdGFTZXNzaW9uKHM6IFVzZXJEYXRhU2Vzc2lvbikge1xyXG4gICAgc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVXNlckRhdGFTZXNzaW9uXCIsIEpTT04uc3RyaW5naWZ5KHMpKTtcclxuICAgIHVzZXJEYXRhLnByb2ZpbGUuc2V0RGF0YShzLnBpYywgcy5waWN0dXJlKVxyXG4gICAgdXNlckRhdGEuZ2VtLnNldERhdGEocy5nZW0sIHMudHNHZW1OZXh0KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiU2V0IFVzZXIgRGF0YSBTZXNzaW9uOlwiLCBzKTtcclxuICAgIEV2ZW50QnVzLmVtaXQoQXBwRXZlbnQuVXBkYXRlVXNlckRhdGEsIHMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEdhbWVMaXN0RGF0YVNlc3Npb24oczogR2FtZUxpc3RSZXNwb25zZSkge1xyXG4gICAgc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ2FtZUxpc3REYXRhU2Vzc2lvblwiLCBKU09OLnN0cmluZ2lmeShzLmRhdGEuZ2FtZSkpO1xyXG4gICAgRXZlbnRCdXMuZW1pdChBcHBFdmVudC5VcGRhdGVHYW1lTGlzdCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RmVhdHVyZXNVbmxvY2tMaXN0RGF0YVNlc3Npb24oczogVW5Mb2NrTGlzdFJlc3BvbnNlKSB7XHJcbiAgICBzeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmZWF0dXJlc1VubG9ja0xpc3REYXRhU2Vzc2lvblwiLCBKU09OLnN0cmluZ2lmeShzLmRhdGEubGlzdCkpO1xyXG4gICAgRXZlbnRCdXMuZW1pdChBcHBFdmVudC5Mb2FkZWRVbmxvY2tMaXN0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRSZXdhcmRCb3hMaXN0RGF0YVNlc3Npb24oczogUmV3YXJkQm94TGlzdFJlc3BvbnNlKSB7XHJcbiAgICBzeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyZXdhcmRCb3hMaXN0RGF0YVNlc3Npb25cIiwgSlNPTi5zdHJpbmdpZnkocy5kYXRhLmNvbmZpZykpO1xyXG4gICAgRXZlbnRCdXMuZW1pdChBcHBFdmVudC5Mb2FkZWRSZXdhcmRCb3hMaXN0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRQaWN0dXJlTGlzdERhdGFTZXNzaW9uKHM6IFJld2FyZEJveExpc3RSZXNwb25zZSkge1xyXG4gICAgc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGljdHVyZUxpc3REYXRhU2Vzc2lvblwiLCBKU09OLnN0cmluZ2lmeShzLmRhdGEuY29uZmlnKSk7XHJcbiAgICBFdmVudEJ1cy5lbWl0KEFwcEV2ZW50LkxvYWRlZFBpY3R1cmVMaXN0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTZXNzaW9uU3RvcmUgPSBuZXcgX1Nlc3Npb25TdG9yZSgpO1xyXG4iLCJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIFRvZ2dsZSwgU2xpZGVyLCBMYWJlbCB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgQmFzZVBvcHVwIH0gZnJvbSAnLi4vQmFzZVBvcHVwJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbnR5cGUgU2V0dGluZ3NEYXRhID0geyBtdXNpY09uOiBib29sZWFuOyBzZnhPbjogYm9vbGVhbjsgdm9sdW1lOiBudW1iZXIgfTtcclxuXHJcbkBjY2NsYXNzKCdTZXR0aW5nc1BvcHVwJylcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzUG9wdXAgZXh0ZW5kcyBCYXNlUG9wdXAge1xyXG4gIC8vIEBwcm9wZXJ0eShUb2dnbGUpIG11c2ljVG9nZ2xlITogVG9nZ2xlO1xyXG4gIC8vIEBwcm9wZXJ0eShUb2dnbGUpIHNmeFRvZ2dsZSE6IFRvZ2dsZTtcclxuICAvLyBAcHJvcGVydHkoU2xpZGVyKSB2b2x1bWVTbGlkZXIhOiBTbGlkZXI7XHJcbiAgLy8gQHByb3BlcnR5KExhYmVsKSB2b2x1bWVMYWJlbCE6IExhYmVsO1xyXG5cclxuICAvLyBwcml2YXRlIGN1cnJlbnQ6IFNldHRpbmdzRGF0YSA9IHsgbXVzaWNPbjogdHJ1ZSwgc2Z4T246IHRydWUsIHZvbHVtZTogMC44IH07XHJcblxyXG4gIG9uT3Blbihpbml0PzogUGFydGlhbDxTZXR0aW5nc0RhdGE+KSB7XHJcbiAgICBzdXBlci5vbk9wZW4oaW5pdCk7XHJcbiAgICAvLyB0aGlzLmN1cnJlbnQgPSB7IC4uLnRoaXMuY3VycmVudCwgLi4uaW5pdCB9O1xyXG4gICAgdGhpcy5zeW5jVmlldygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzeW5jVmlldygpIHtcclxuICAgIC8vIHRoaXMubXVzaWNUb2dnbGUuaXNDaGVja2VkID0gdGhpcy5jdXJyZW50Lm11c2ljT247XHJcbiAgICAvLyB0aGlzLnNmeFRvZ2dsZS5pc0NoZWNrZWQgPSB0aGlzLmN1cnJlbnQuc2Z4T247XHJcbiAgICAvLyB0aGlzLnZvbHVtZVNsaWRlci5wcm9ncmVzcyA9IHRoaXMuY3VycmVudC52b2x1bWU7XHJcbiAgICAvLyB0aGlzLnZvbHVtZUxhYmVsLnN0cmluZyA9IE1hdGgucm91bmQodGhpcy5jdXJyZW50LnZvbHVtZSAqIDEwMCkgKyAnJSc7XHJcbiAgfVxyXG5cclxuICAvLyBwdWJsaWMgb25DbGlja0Nsb3NlQnV0dG9uKCkgeyBcclxuXHJcbiAgLy8gfVxyXG5cclxuICAvLyBVSSDsnbTrsqTtirjsl5Ag7Jew6rKwXHJcbiAgLy8gb25DaGFuZ2VNdXNpYygpIHsgdGhpcy5jdXJyZW50Lm11c2ljT24gPSB0aGlzLm11c2ljVG9nZ2xlLmlzQ2hlY2tlZDsgfVxyXG4gIC8vIG9uQ2hhbmdlU2Z4KCkgICB7IHRoaXMuY3VycmVudC5zZnhPbiAgID0gdGhpcy5zZnhUb2dnbGUuaXNDaGVja2VkOyB9XHJcbiAgLy8gb25DaGFuZ2VWb2x1bWUoKSB7XHJcbiAgLy8gICB0aGlzLmN1cnJlbnQudm9sdW1lID0gdGhpcy52b2x1bWVTbGlkZXIucHJvZ3Jlc3M7XHJcbiAgLy8gICB0aGlzLnZvbHVtZUxhYmVsLnN0cmluZyA9IE1hdGgucm91bmQodGhpcy5jdXJyZW50LnZvbHVtZSAqIDEwMCkgKyAnJSc7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBvbkNsaWNrQ29uZmlybSgpIHtcclxuICAvLyAgICh0aGlzLm5vZGUgYXMgYW55KS5fX3Jlc29sdmU/Lih7IGFjdGlvbjogJ2NvbmZpcm0nLCBwYXlsb2FkOiB0aGlzLmN1cnJlbnQgfSk7XHJcbiAgLy8gfVxyXG4gIG9uQ2xpY2tDYW5jZWwoKSB7XHJcbiAgICAodGhpcy5ub2RlIGFzIGFueSkuX19yZXNvbHZlPy4oeyBhY3Rpb246ICdjYW5jZWwnIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIGRpcmVjdG9yLCBOb2RlLCBSZXNvbHV0aW9uUG9saWN5IH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBVc2VyRGF0YSB9IGZyb20gJy4vY29yZS9hcGkvQXBpVHlwZXMnO1xyXG5pbXBvcnQgeyBBcHBFdmVudCwgRXZlbnRCdXMgfSBmcm9tICcuL2NvcmUvc3RvcmUvRXZlbnRCdXMnO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdTcGxhc2hDb21wb25lbnQnKVxyXG5leHBvcnQgY2xhc3MgU3BsYXNoQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShOb2RlKVxyXG4gICAgcHJpdmF0ZSBzcGxhc2hOb2RlOiBOb2RlIHwgbnVsbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoTm9kZSlcclxuICAgIHByaXZhdGUgcHJvZ3Jlc3NOb2RlOiBOb2RlIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBERVNJR05fVyA9IDE5MjA7XHJcbiAgICAvLyBwcml2YXRlIERFU0lHTl9IID0gMTA4MDtcclxuICAgIHByaXZhdGUgREVTSUdOX1cgPSA3MjA7XHJcbiAgICBwcml2YXRlIERFU0lHTl9IID0gMTI4MDtcclxuICAgIHByaXZhdGUgTUlOX1NDQUxFID0gMC41O1xyXG4gICAgcHJpdmF0ZSBNQVhfU0NBTEUgPSAxLjU7XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkaW5nUHJvZ3Jlc3M6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIG5leHRTY2VuZU5hbWU6IHN0cmluZyA9ICdsb2JieSc7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgRXZlbnRCdXMub24oQXBwRXZlbnQuTG9naW5lZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkV2ZW50QnVzIExvZ2luZWQgcmVjZWl2ZWRcIik7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dFNjZW5lKDEwKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgRXZlbnRCdXMub24oQXBwRXZlbnQuVXBkYXRlVXNlckRhdGEsICh1c2VyRGF0YTogVXNlckRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFdmVudEJ1cyBVcGRhdGVVc2VyRGF0YSByZWNlaXZlZFwiKTtcclxuICAgICAgICAgICAgaWYgKHVzZXJEYXRhLmx2bCA8IDUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFNjZW5lTmFtZSA9ICdnYW1lJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFNjZW5lTmFtZSA9ICdsb2JieSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5uZXh0U2NlbmUoNDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBFdmVudEJ1cy5vbihBcHBFdmVudC5VcGRhdGVHYW1lTGlzdCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkV2ZW50QnVzIFVwZGF0ZUdhbWVMaXN0IHJlY2VpdmVkXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRTY2VuZSgxMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIEV2ZW50QnVzLm9uKEFwcEV2ZW50LkxvYWRlZFVubG9ja0xpc3QsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFdmVudEJ1cyBMb2FkZWRVbmxvY2tMaXN0IHJlY2VpdmVkXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRTY2VuZSgxMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIEV2ZW50QnVzLm9uKEFwcEV2ZW50LkxvYWRlZFJld2FyZEJveExpc3QsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFdmVudEJ1cyBMb2FkZWRSZXdhcmRCb3hMaXN0IHJlY2VpdmVkXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRTY2VuZSgxMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIEV2ZW50QnVzLm9uKEFwcEV2ZW50LkxvYWRlZFBpY3R1cmVMaXN0LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXZlbnRCdXMgTG9hZGVkUGljdHVyZUxpc3QgcmVjZWl2ZWRcIik7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dFNjZW5lKDEwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zcGxhc2hOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnNwbGFzaE5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BsYXNoTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc05vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIyICsgMyBzZWNvbmRzIHBhc3NlZCBpbiBwcm9ncmVzcyBzY3JlZW5cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRTY2VuZSgxMCk7XHJcbiAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgIH0sIDIwMDApXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBuZXh0U2NlbmUoYWRkZWRQcm9ncmVzczogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nUHJvZ3Jlc3MgKz0gYWRkZWRQcm9ncmVzcztcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWRpbmcgUHJvZ3Jlc3M6IFwiLCB0aGlzLmxvYWRpbmdQcm9ncmVzcyk7XHJcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZ1Byb2dyZXNzID49IDEwMCkge1xyXG4gICAgICAgICAgICBkaXJlY3Rvci5sb2FkU2NlbmUodGhpcy5uZXh0U2NlbmVOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBfZGVjb3JhdG9yLCBCdXR0b24sIENvbXBvbmVudCwgTm9kZSwgVUlUcmFuc2Zvcm0gfSBmcm9tICdjYyc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnVGFiQmFyQ29udHJvbGxlcicpXHJcbmV4cG9ydCBjbGFzcyBUYWJCYXJDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShbTm9kZV0pXHJcbiAgICBwdWJsaWMgdGFiQnV0dG9uczogTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KFtOb2RlXSlcclxuICAgIHB1YmxpYyB0YWJWaWV3czogTm9kZVtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZEluZGV4OiBudW1iZXIgPSAtMTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RUYWIoMik7IC8vIOq4sOuzuCDshKDtg50g7YOtIOyEpOyglSwg7ZWE7JqU7JeQIOuUsOudvCDrs4Dqsr0g6rCA64qlXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGVjdFRhYihpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gaW5kZXgpIHJldHVybjtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLnRhYkJ1dHRvbnMuZm9yRWFjaCgobm9kZTogTm9kZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IGkgPT09IGluZGV4O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gbm9kZS5nZXRDb21wb25lbnQoQnV0dG9uKTtcclxuICAgICAgICAgICAgY29uc3Qgb24gPSBub2RlLmdldENoaWxkQnlOYW1lKCdPbicpO1xyXG4gICAgICAgICAgICBjb25zdCBvZmYgPSBub2RlLmdldENoaWxkQnlOYW1lKCdPZmYnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChidXR0b24pIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5pbnRlcmFjdGFibGUgPSAhaXNBY3RpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG9mZikge1xyXG4gICAgICAgICAgICAgICAgb2ZmLmFjdGl2ZSA9ICFpc0FjdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob24pIHtcclxuICAgICAgICAgICAgICAgIG9uLmFjdGl2ZSA9IGlzQWN0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudGFiVmlld3MuZm9yRWFjaCgobm9kZTogTm9kZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGkgPT09IGluZGV4O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOuyhO2KvOyXkOyEnCDtmLjstpzrkKAg66mU7ISc65OcXHJcbiAgICBwdWJsaWMgb25DbGlja1RhYihfLCBjdXN0b21FdmVudERhdGE6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoY3VzdG9tRXZlbnREYXRhKTtcclxuICAgICAgICB0aGlzLnNlbGVjdFRhYihpbmRleCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX2RlY29yYXRvciwgQnV0dG9uLCBDb21wb25lbnQsIGRpcmVjdG9yIH0gZnJvbSAnY2MnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ1RvcCcpXHJcbmV4cG9ydCBjbGFzcyBUb3AgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShCdXR0b24pXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IEJ1dHRvbkhvbWUhOiBCdXR0b25cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuQnV0dG9uSG9tZS5ub2RlLm9uKCdjbGljaycsIHRoaXMub25DbGlja0hvbWUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja0hvbWUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUb3Agb25DbGlja0hvbWVcIik7XHJcbiAgICAgICAgZGlyZWN0b3IubG9hZFNjZW5lKFwibG9iYnlcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBfZGVjb3JhdG9yLCBFdmVudFRhcmdldCwgc3lzIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgdHlwZSB7IFVzZXJEYXRhLCBVc2VyUHJvZmlsZSwgVXNlclNldHRpbmdzLCBVc2VyUnVudGltZSB9IGZyb20gJy4vdXNlci51c2VyLXR5cGVzJztcclxuXHJcbmNvbnN0IFNUT1JBR0VfS0VZID0gJ2FwcDp1c2VyOnYxJzsgLy8g7Iqk7YKk66eIIOuwlOuAjOuptCDtgqQg67OA6rK9XHJcbmNvbnN0IFNDSEVNQV9WRVJTSU9OID0gMTtcclxuXHJcbnR5cGUgRGVlcFBhcnRpYWw8VD4gPSB7IFtLIGluIGtleW9mIFRdPzogVFtLXSBleHRlbmRzIG9iamVjdCA/IERlZXBQYXJ0aWFsPFRbS10+IDogVFtLXSB9O1xyXG5cclxuY2xhc3MgVXNlclN0b3JlIHtcclxuICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFVzZXJTdG9yZSB8IG51bGwgPSBudWxsO1xyXG4gIHN0YXRpYyBnZXQgSSgpIHtcclxuICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHRoaXMuX2luc3RhbmNlID0gbmV3IFVzZXJTdG9yZSgpO1xyXG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZXYgPSBuZXcgRXZlbnRUYXJnZXQoKTtcclxuICBwcml2YXRlIF9kYXRhOiBVc2VyRGF0YSA9IHRoaXMuZGVmYXVsdERhdGEoKTtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIOyXkOuUlO2EsCDtlavrpqzroZzrk5wg7JWI7KCE7J6l7LmYOiBzeXMuaXNCcm93c2VyIOyytO2BrCDtm4Qg6riw7KG0IOyggOyepeqwkiDroZzrk5xcclxuICAgIHRoaXMubG9hZCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIOq4sOuzuOqwkiAqL1xyXG4gIHByaXZhdGUgZGVmYXVsdERhdGEoKTogVXNlckRhdGEge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmVyc2lvbjogU0NIRU1BX1ZFUlNJT04sXHJcbiAgICAgIHByb2ZpbGU6IG51bGwsXHJcbiAgICAgIHNldHRpbmdzOiB7IGxhbmd1YWdlOiAna28nLCBzZng6IHRydWUsIG11c2ljOiB0cnVlLCBub3RpZmljYXRpb25zOiB0cnVlIH0sXHJcbiAgICAgIHJ1bnRpbWU6IHsgbGV2ZWw6IDEsIGV4cDogMCwgY29pbnM6IDAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLyA9PT09PT09PT0g7KGw7ZqMID09PT09PT09PVxyXG4gIGdldCBkYXRhKCk6IFJlYWRvbmx5PFVzZXJEYXRhPiB7IHJldHVybiB0aGlzLl9kYXRhOyB9XHJcbiAgZ2V0IHByb2ZpbGUoKTogUmVhZG9ubHk8VXNlclByb2ZpbGU+IHwgbnVsbCB7IHJldHVybiB0aGlzLl9kYXRhLnByb2ZpbGU7IH1cclxuICBnZXQgc2V0dGluZ3MoKTogUmVhZG9ubHk8VXNlclNldHRpbmdzPiB7IHJldHVybiB0aGlzLl9kYXRhLnNldHRpbmdzOyB9XHJcbiAgZ2V0IHJ1bnRpbWUoKTogUmVhZG9ubHk8VXNlclJ1bnRpbWU+IHsgcmV0dXJuIHRoaXMuX2RhdGEucnVudGltZTsgfVxyXG4gIGlzTG9nZ2VkSW4oKTogYm9vbGVhbiB7IHJldHVybiAhIXRoaXMuX2RhdGEucHJvZmlsZTsgfVxyXG4gIGhhc1JvbGUocjogc3RyaW5nKTogYm9vbGVhbiB7IHJldHVybiAhIXRoaXMuX2RhdGEucHJvZmlsZT8ucm9sZXMuaW5jbHVkZXMociBhcyBhbnkpOyB9XHJcblxyXG4gIC8vID09PT09PT09PSDqtazrj4UgPT09PT09PT09XHJcbiAgLyoqIOuzgOqyvSDsnbTrsqTtirgg6rWs64+FICovXHJcbiAgb25DaGFuZ2UoY2I6IChkYXRhOiBSZWFkb25seTxVc2VyRGF0YT4pID0+IHZvaWQsIHRhcmdldD86IGFueSkge1xyXG4gICAgdGhpcy5fZXYub24oJ2NoYW5nZScsIGNiLCB0YXJnZXQpO1xyXG4gIH1cclxuICBvZmZDaGFuZ2UoY2I6IChkYXRhOiBSZWFkb25seTxVc2VyRGF0YT4pID0+IHZvaWQsIHRhcmdldD86IGFueSkge1xyXG4gICAgdGhpcy5fZXYub2ZmKCdjaGFuZ2UnLCBjYiwgdGFyZ2V0KTtcclxuICB9XHJcbiAgcHJpdmF0ZSBlbWl0KCkge1xyXG4gICAgdGhpcy5fZXYuZW1pdCgnY2hhbmdlJywgdGhpcy5fZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvLyA9PT09PT09PT0g6rCx7IugKOu2gOu2hCDsl4XrjbDsnbTtirgpID09PT09PT09PVxyXG4gIC8qKiDshJzrsoQg7J2R64u17Jy866GcIOyghOufiS/rtoDrtoQg67OR7ZWpICovXHJcbiAgaHlkcmF0ZShwYXJ0aWFsOiBEZWVwUGFydGlhbDxVc2VyRGF0YT4pIHtcclxuICAgIHRoaXMuX2RhdGEgPSB0aGlzLm1lcmdlKHRoaXMuX2RhdGEsIHBhcnRpYWwpO1xyXG4gICAgdGhpcy5zYXZlKCk7XHJcbiAgICB0aGlzLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVByb2ZpbGUocGF0Y2g6IERlZXBQYXJ0aWFsPFVzZXJQcm9maWxlPikge1xyXG4gICAgaWYgKCF0aGlzLl9kYXRhLnByb2ZpbGUpIHRoaXMuX2RhdGEucHJvZmlsZSA9IHsgaWQ6ICcnLCBuYW1lOiAnJywgcm9sZXM6IFtdIH07XHJcbiAgICB0aGlzLl9kYXRhLnByb2ZpbGUgPSB0aGlzLm1lcmdlKHRoaXMuX2RhdGEucHJvZmlsZSwgcGF0Y2gpO1xyXG4gICAgdGhpcy5zYXZlKCk7IHRoaXMuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2V0dGluZ3MocGF0Y2g6IERlZXBQYXJ0aWFsPFVzZXJTZXR0aW5ncz4pIHtcclxuICAgIHRoaXMuX2RhdGEuc2V0dGluZ3MgPSB0aGlzLm1lcmdlKHRoaXMuX2RhdGEuc2V0dGluZ3MsIHBhdGNoKTtcclxuICAgIHRoaXMuc2F2ZSgpOyB0aGlzLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVJ1bnRpbWUocGF0Y2g6IERlZXBQYXJ0aWFsPFVzZXJSdW50aW1lPikge1xyXG4gICAgdGhpcy5fZGF0YS5ydW50aW1lID0gdGhpcy5tZXJnZSh0aGlzLl9kYXRhLnJ1bnRpbWUsIHBhdGNoKTtcclxuICAgIHRoaXMuZW1pdCgpOyAvLyBydW50aW1l7J2AIOyepuycvOuLiCDsoIDsnqXsnYAg67Cw7LmYIOyggOyepeuPhCDqsIDriqVcclxuICB9XHJcblxyXG4gIC8qKiDsmIg6IOy9lOyduCDspp3qsJAgKi9cclxuICBhZGRDb2lucyhkZWx0YTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9kYXRhLnJ1bnRpbWUuY29pbnMgPSBNYXRoLm1heCgwLCB0aGlzLl9kYXRhLnJ1bnRpbWUuY29pbnMgKyBkZWx0YSk7XHJcbiAgICB0aGlzLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIC8vID09PT09PT09PSDshLjshZgv66Gc6re47J24IOy7qO2KuOuhpCA9PT09PT09PT1cclxuICAvKiog66Gc6re47J24IOyEseqztSDsi5wg7ISc67KEIHVzZXJEYXRh66GcIOy0iOq4sO2ZlCAqL1xyXG4gIGxvZ2luKHNlcnZlclVzZXJEYXRhOiBVc2VyRGF0YSB8IERlZXBQYXJ0aWFsPFVzZXJEYXRhPikge1xyXG4gICAgY29uc3QgYmFzZSA9IHRoaXMuZGVmYXVsdERhdGEoKTtcclxuICAgIHRoaXMuX2RhdGEgPSB0aGlzLm1lcmdlKGJhc2UsIHNlcnZlclVzZXJEYXRhKTtcclxuICAgIHRoaXMuc2F2ZSgpOyB0aGlzLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIC8qKiDroZzqt7jslYTsm4M6IOuvvOqwkCDrjbDsnbTthLAg7KCc6rGwICovXHJcbiAgbG9nb3V0KCkge1xyXG4gICAgY29uc3Qga2VlcFNldHRpbmdzID0gdGhpcy5fZGF0YS5zZXR0aW5nczsgLy8g7ZmY6rK97ISk7KCV7J2AIOuztOyhtCDsmIjsi5xcclxuICAgIHRoaXMuX2RhdGEgPSB0aGlzLmRlZmF1bHREYXRhKCk7XHJcbiAgICB0aGlzLl9kYXRhLnNldHRpbmdzID0ga2VlcFNldHRpbmdzO1xyXG4gICAgdGhpcy5zYXZlKCk7IHRoaXMuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gPT09PT09PT09IOyYgeyGje2ZlCA9PT09PT09PT1cclxuICBzYXZlKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKHN5cy5pc0Jyb3dzZXIpIHtcclxuICAgICAgICBzeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KHRoaXMuX2RhdGEpKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkgeyBjb25zb2xlLndhcm4oJ1tVc2VyU3RvcmVdIHNhdmUgZmFpbGVkJywgZSk7IH1cclxuICB9XHJcblxyXG4gIGxvYWQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXN5cy5pc0Jyb3dzZXIpIHJldHVybjtcclxuICAgICAgY29uc3QgcmF3ID0gc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZKTtcclxuICAgICAgaWYgKCFyYXcpIHJldHVybjtcclxuICAgICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShyYXcpO1xyXG4gICAgICAvLyDrp4jsnbTqt7jroIjsnbTshZgg7ZuFXHJcbiAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLm1pZ3JhdGUocGFyc2VkKTtcclxuICAgIH0gY2F0Y2ggKGUpIHsgY29uc29sZS53YXJuKCdbVXNlclN0b3JlXSBsb2FkIGZhaWxlZCcsIGUpOyB9XHJcbiAgfVxyXG5cclxuICAvKiog7Iqk7YKk66eIIOuyhOyghCDsl4Ug64yA67mEIOuniOydtOq3uOugiOydtOyFmCAqL1xyXG4gIHByaXZhdGUgbWlncmF0ZShvbGREYXRhOiBhbnkpOiBVc2VyRGF0YSB7XHJcbiAgICBsZXQgZCA9IG9sZERhdGEgYXMgVXNlckRhdGE7XHJcbiAgICBpZiAoIWQgfHwgdHlwZW9mIGQgIT09ICdvYmplY3QnKSByZXR1cm4gdGhpcy5kZWZhdWx0RGF0YSgpO1xyXG4gICAgaWYgKCEoJ3ZlcnNpb24nIGluIGQpKSBkLnZlcnNpb24gPSAwIGFzIGFueTtcclxuICAgIC8vIOyYiDogdjAgLT4gdjEg66eI7J206re466CI7J207IWYXHJcbiAgICBpZiAoZC52ZXJzaW9uIDwgMSkge1xyXG4gICAgICBkLnNldHRpbmdzID0geyBsYW5ndWFnZTogZC5zZXR0aW5ncz8ubGFuZ3VhZ2UgPz8gJ2tvJywgc2Z4OiB0cnVlLCBtdXNpYzogdHJ1ZSwgbm90aWZpY2F0aW9uczogdHJ1ZSB9O1xyXG4gICAgICBkLnZlcnNpb24gPSAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGQ7XHJcbiAgfVxyXG5cclxuICAvLyA9PT09PT09PT0g7Jyg7Yu4ID09PT09PT09PVxyXG4gIHByaXZhdGUgbWVyZ2U8VD4oYmFzZTogVCwgcGF0Y2g/OiBEZWVwUGFydGlhbDxUPik6IFQge1xyXG4gICAgaWYgKCFwYXRjaCkgcmV0dXJuIGJhc2U7XHJcbiAgICBjb25zdCBvdXQ6IGFueSA9IEFycmF5LmlzQXJyYXkoYmFzZSkgPyBbLi4uKGJhc2UgYXMgYW55KV0gOiB7IC4uLmJhc2UgfTtcclxuICAgIGZvciAoY29uc3QgayBpbiBwYXRjaCkge1xyXG4gICAgICBjb25zdCB2OiBhbnkgPSAocGF0Y2ggYXMgYW55KVtrXTtcclxuICAgICAgaWYgKHYgJiYgdHlwZW9mIHYgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHYpKSB7XHJcbiAgICAgICAgKG91dCBhcyBhbnkpW2tdID0gdGhpcy5tZXJnZSgob3V0IGFzIGFueSlba10gPz8ge30sIHYpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIChvdXQgYXMgYW55KVtrXSA9IHY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvdXQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDsi7HquIDthqQg7J247Iqk7YS07IqkIGV4cG9ydFxyXG5jb25zdCB1c2VyU3RvcmUgPSBVc2VyU3RvcmUuSTtcclxuZXhwb3J0IGRlZmF1bHQgdXNlclN0b3JlO1xyXG4vLyDtlYTsmpQg7IucIO2BtOuemOyKpCDtg4DsnoXrj4QgZXhwb3J0XHJcbmV4cG9ydCB7IFVzZXJTdG9yZSB9O1xyXG4iLCIvLyBpbXBvcnQgT2JzZXJ2ZXIgZnJvbSBcIi4uLy4uL3V0aWwvT2JzZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFVJRDogbnVtYmVyOyAvLzogMyxcclxuICAgIHB1YmxpYyBzdGF0aWMgVU5hbWU6IHN0cmluZzsgLy86IFwiSnVwaXRlclwiLFxyXG4gICAgcHVibGljIHN0YXRpYyBCTmFtZTogc3RyaW5nOyAvLzogXCJcIixcclxuICAgIHB1YmxpYyBzdGF0aWMgcGljOiBudW1iZXI7IC8vOiAyLFxyXG4gICAgcHVibGljIHN0YXRpYyBwaWN0dXJlOiBzdHJpbmc7IC8vOiBcImh0dHBzOi8vZDJhZTRqcTd1cDRkYWEuY2xvdWRmcm9udC5uZXQvYmxhY2tqYWNrL2ltYWdlcy9hdmF0YXIvQXZhdGFyXzIucG5nXCIsXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyYW1lOiBudW1iZXI7IC8vOiAxLFxyXG4gICAgcHVibGljIHN0YXRpYyBHSUQ6IG51bWJlcjsgLy86IDAsXHJcbiAgICBwdWJsaWMgc3RhdGljIGJhbGFuY2U6IG51bWJlcjsgLy86IDEwMDAwMDAwMCxcclxuICAgIHB1YmxpYyBzdGF0aWMgbHZsOiBudW1iZXI7IC8vOiAxLFxyXG4gICAgcHVibGljIHN0YXRpYyBleHA6IG51bWJlcjsgLy86IDAsXHJcbiAgICBwdWJsaWMgc3RhdGljIGV4cE5leHQ6IG51bWJlcjsgLy86IDI1LFxyXG4gICAgcHVibGljIHN0YXRpYyBsdmxCb251czogbnVtYmVyOyAvLzogMixcclxuICAgIHB1YmxpYyBzdGF0aWMgVFA6IG51bWJlcjsgLy86IDAsXHJcbiAgICBwdWJsaWMgc3RhdGljIGdlbTogbnVtYmVyOyAvLzogNSxcclxuICAgIHB1YmxpYyBzdGF0aWMgdGh1bmRlcjogbnVtYmVyOyAvLzogMCxcclxuICAgIHB1YmxpYyBzdGF0aWMgdHNHZW1OZXh0OiBudW1iZXI7IC8vOiAtMSxcclxuICAgIHB1YmxpYyBzdGF0aWMgdHNHZW1MaW1pdDogbnVtYmVyOyAvLzogLTEsXHJcbiAgICBwdWJsaWMgc3RhdGljIHRzQURGZWVkOiBudW1iZXI7IC8vOiAtMSxcclxuICAgIHB1YmxpYyBzdGF0aWMgdHNBRFNwb3Q6IG51bWJlcjsgLy86IC0xLFxyXG4gICAgcHVibGljIHN0YXRpYyBTRVJWRVJfVElNRVNUQU1QOiBudW1iZXI7IC8vOiAxNzU1NjUxNjA2XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBTSUQ6IG51bWJlcjtcclxuXHJcbiAgICAvLyAgIHB1YmxpYyBzdGF0aWMgR0lEOiBudW1iZXI7XHJcbiAgICAvLyAgIHB1YmxpYyBzdGF0aWMgR1NJRDogbnVtYmVyO1xyXG4gICAgLy8gICBwdWJsaWMgc3RhdGljIFVJRDogbnVtYmVyO1xyXG4gICAgLy8gICBwdWJsaWMgc3RhdGljIGFsZXJ0OiBudW1iZXI7XHJcbiAgICAvLyAgIHB1YmxpYyBzdGF0aWMgX2JhbGFuY2U6IG51bWJlcjtcclxuICAgIC8vICAgcHVibGljIHN0YXRpYyBiYXNlUm9vbVR5cGU6IG51bWJlcjtcclxuICAgIC8vICAgcHVibGljIHN0YXRpYyBfY2xzOiBudW1iZXI7XHJcbiAgICAvLyAgIHB1YmxpYyBzdGF0aWMgY2xzRXhwOiBudW1iZXI7XHJcbiAgICAvLyAgIHB1YmxpYyBzdGF0aWMgX2V4cDogbnVtYmVyO1xyXG4gICAgLy8gICBwdWJsaWMgc3RhdGljIF9sZXZlbDogbnVtYmVyO1xyXG4gICAgLy8gICBwdWJsaWMgc3RhdGljIGxvc3M6IG51bWJlcjtcclxuICAgIC8vICAgcHVibGljIHN0YXRpYyBfbHZsQm9vc3Q6IG51bWJlcjtcclxuICAgIC8vICAgcHVibGljIHN0YXRpYyBsdmxCb29zdFJlbWFpbjogbnVtYmVyO1xyXG4gICAgLy8gICBwdWJsaWMgc3RhdGljIG5leHRCb251czogbnVtYmVyO1xyXG4gICAgLy8gICBwdWJsaWMgc3RhdGljIG5leHRDbHM6IG51bWJlcjtcclxuICAgIC8vICAgcHVibGljIHN0YXRpYyBuZXh0RXhwOiBudW1iZXI7XHJcbiAgICAvLyAgIHB1YmxpYyBzdGF0aWMgbmlja05hbWU6IHN0cmluZztcclxuICAgIC8vICAgcHVibGljIHN0YXRpYyBwaWNJRDogbnVtYmVyO1xyXG4gICAgLy8gICBwdWJsaWMgc3RhdGljIHBpY3R1cmU6IHN0cmluZztcclxuICAgIC8vICAgcHVibGljIHN0YXRpYyBwbGF0Zm9ybVR5cGU6IG51bWJlcjtcclxuICAgIC8vICAgcHVibGljIHN0YXRpYyByb29tSUQ6IG51bWJlcjtcclxuICAgIC8vICAgcHVibGljIHN0YXRpYyByb29tTGluZUJldDogbnVtYmVyO1xyXG4gICAgLy8gICBwdWJsaWMgc3RhdGljIHJvb21NYXhTcGluOiBudW1iZXI7XHJcbiAgICAvLyAgIHB1YmxpYyBzdGF0aWMgX3NlcmlhbFdpbnM6IG51bWJlcjtcclxuICAgIC8vICAgcHVibGljIHN0YXRpYyBzb3VuZDogbnVtYmVyO1xyXG4gICAgLy8gICBwdWJsaWMgc3RhdGljIHZpYnJhdGlvbjogbnVtYmVyO1xyXG4gICAgLy8gICBwdWJsaWMgc3RhdGljIHdpbnM6IG51bWJlcjtcclxuICAgIC8vICAgc3RhdGljIGdldCBiYWxhbmNlKCkge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLl9iYWxhbmNlO1xyXG4gICAgLy8gICB9XHJcblxyXG4gICAgLy8gICBzdGF0aWMgc2V0IGJhbGFuY2UodmFsdWU6IG51bWJlcikge1xyXG4gICAgLy8gICAgIHRoaXMuX2JhbGFuY2UgPSB2YWx1ZTtcclxuICAgIC8vICAgICBPYnNlcnZlci5ub3RpZnkoT2JzZXJ2ZXIuVVBEQVRFX0JBTEFOQ0UsIHZhbHVlKTtcclxuICAgIC8vICAgfVxyXG5cclxuICAgIC8vICAgc3RhdGljIGdldCBsdmxCb29zdCgpIHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5fbHZsQm9vc3Q7XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICAvLyAgIHN0YXRpYyBzZXQgbHZsQm9vc3QodmFsdWU6IG51bWJlcikge1xyXG4gICAgLy8gICAgIHRoaXMuX2x2bEJvb3N0ID0gdmFsdWU7XHJcbiAgICAvLyAgICAgT2JzZXJ2ZXIubm90aWZ5KE9ic2VydmVyLlVQREFURV9MVkxfQk9PU1QsIHZhbHVlKTtcclxuICAgIC8vICAgfVxyXG5cclxuICAgIC8vICAgc3RhdGljIGdldCBjbHMoKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuX2NscztcclxuICAgIC8vICAgfVxyXG5cclxuICAgIC8vICAgc3RhdGljIHNldCBjbHModmFsdWU6IG51bWJlcikge1xyXG4gICAgLy8gICAgIHRoaXMuX2NscyA9IHZhbHVlO1xyXG4gICAgLy8gICB9XHJcblxyXG4gICAgLy8gICBzdGF0aWMgZ2V0IGxldmVsKCkge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLl9sZXZlbDtcclxuICAgIC8vICAgfVxyXG5cclxuICAgIC8vICAgc3RhdGljIHNldCBsZXZlbCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgdGhpcy5fbGV2ZWwgPSB2YWx1ZTtcclxuICAgIC8vICAgICBPYnNlcnZlci5ub3RpZnkoT2JzZXJ2ZXIuVVBEQVRFX0xFVkVMLCB2YWx1ZSk7XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICAvLyAgIHN0YXRpYyBnZXQgZXhwKCkge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLl9leHA7XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICAvLyAgIHN0YXRpYyBzZXQgZXhwKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIC8vICAgICB0aGlzLl9leHAgPSB2YWx1ZTtcclxuICAgIC8vICAgICBPYnNlcnZlci5ub3RpZnkoT2JzZXJ2ZXIuVVBEQVRFX0VYUCwgdmFsdWUpO1xyXG4gICAgLy8gICB9XHJcblxyXG4gICAgLy8gICBzdGF0aWMgZ2V0IHNlcmlhbFdpbnMoKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuX3NlcmlhbFdpbnM7XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICAvLyAgIHN0YXRpYyBzZXQgc2VyaWFsV2lucyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgdGhpcy5fc2VyaWFsV2lucyA9IHZhbHVlO1xyXG4gICAgLy8gICAgIE9ic2VydmVyLm5vdGlmeShPYnNlcnZlci5VUERBVEVfV0lOX1NUUkVBSywgdmFsdWUpO1xyXG4gICAgLy8gICB9XHJcblxyXG4gICAgLy8gICBzdGF0aWMgc2V0RGF0YShkYXRhKSB7XHJcbiAgICAvLyAgICAgdGhpcy5HSUQgPSBkYXRhLkdJRDtcclxuICAgIC8vICAgICB0aGlzLkdTSUQgPSBkYXRhLkdTSUQ7XHJcbiAgICAvLyAgICAgdGhpcy5VSUQgPSBkYXRhLlVJRDtcclxuICAgIC8vICAgICB0aGlzLmFsZXJ0ID0gZGF0YS5hbGVydDtcclxuICAgIC8vICAgICB0aGlzLmJhbGFuY2UgPSBkYXRhLmJhbGFuY2U7XHJcbiAgICAvLyAgICAgdGhpcy5iYXNlUm9vbVR5cGUgPSBkYXRhLmJhc2VSb29tVHlwZTtcclxuICAgIC8vICAgICB0aGlzLmNscyA9IGRhdGEuY2xzO1xyXG4gICAgLy8gICAgIHRoaXMuY2xzRXhwID0gZGF0YS5jbHNFeHA7XHJcbiAgICAvLyAgICAgdGhpcy5leHAgPSBkYXRhLmV4cDtcclxuICAgIC8vICAgICB0aGlzLmxldmVsID0gZGF0YS5sZXZlbDtcclxuICAgIC8vICAgICB0aGlzLmxvc3MgPSBkYXRhLmxvc3M7XHJcbiAgICAvLyAgICAgdGhpcy5sdmxCb29zdFJlbWFpbiA9IGRhdGEubHZsQm9vc3RSZW1haW47XHJcbiAgICAvLyAgICAgdGhpcy5sdmxCb29zdCA9IGRhdGEubHZsQm9vc3Q7XHJcbiAgICAvLyAgICAgdGhpcy5uZXh0Qm9udXMgPSBkYXRhLm5leHRCb251cztcclxuICAgIC8vICAgICB0aGlzLm5leHRDbHMgPSBkYXRhLm5leHRDbHM7XHJcbiAgICAvLyAgICAgdGhpcy5uZXh0RXhwID0gZGF0YS5uZXh0RXhwO1xyXG4gICAgLy8gICAgIHRoaXMubmlja05hbWUgPSBkYXRhLm5pY2tOYW1lO1xyXG4gICAgLy8gICAgIHRoaXMucGljSUQgPSBkYXRhLnBpY0lEO1xyXG4gICAgLy8gICAgIHRoaXMucGljdHVyZSA9IGRhdGEucGljdHVyZTtcclxuICAgIC8vICAgICB0aGlzLnBsYXRmb3JtVHlwZSA9IGRhdGEucGxhdGZvcm1UeXBlO1xyXG4gICAgLy8gICAgIHRoaXMucm9vbUlEID0gZGF0YS5yb29tSUQ7XHJcbiAgICAvLyAgICAgdGhpcy5yb29tTGluZUJldCA9IGRhdGEucm9vbUxpbmVCZXQ7XHJcbiAgICAvLyAgICAgdGhpcy5yb29tTWF4U3BpbiA9IGRhdGEucm9vbU1heFNwaW47XHJcbiAgICAvLyAgICAgdGhpcy5zZXJpYWxXaW5zID0gZGF0YS5zZXJpYWxXaW5zO1xyXG4gICAgLy8gICAgIHRoaXMuc291bmQgPSBkYXRhLnNvdW5kO1xyXG4gICAgLy8gICAgIHRoaXMudmlicmF0aW9uID0gZGF0YS52aWJyYXRpb247XHJcbiAgICAvLyAgICAgdGhpcy53aW5zID0gZGF0YS53aW5zO1xyXG4gICAgLy8gICB9XHJcbn1cclxuIiwiLy8gZXhwb3J0IGludGVyZmFjZSBJVXNlckRhdGEge1xyXG4vLyAgICAgbGV2ZWw6IHsgbGV2ZWw6IG51bWJlcjsgZXhwOiBudW1iZXIgfTtcclxuLy8gICAgIHByb2ZpbGU6IHsgcHJvZmlsZUltYWdlSW5kZXg6IG51bWJlcjsgcHJvZmlsZUltYWdlVXJsOiBzdHJpbmcgfTtcclxuLy8gICAgIGdlbTogeyBjb3VudDogbnVtYmVyOyB0aW1lclNlY29uZHM6IG51bWJlciB9O1xyXG4vLyAgICAgYmFsYW5jZTogeyBjb2luOiBudW1iZXI7IGNhc2g6IG51bWJlciB9O1xyXG4vLyB9XHJcblxyXG5jbGFzcyBCYXNlTW9kZWwge1xyXG4gICAgcHJpdmF0ZSBsaXN0ZW5lcnM6IEFycmF5PCgpID0+IHZvaWQ+ID0gW107XHJcblxyXG4gICAgcHVibGljIHN1YnNjcmliZShsaXN0ZW5lcjogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG5vdGlmeSgpIHtcclxuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGZuID0+IGZuKCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGV2ZWxNb2RlbCBleHRlbmRzIEJhc2VNb2RlbCB7XHJcbiAgICBwdWJsaWMgbGV2ZWw6IG51bWJlciA9IDE7XHJcbiAgICBwdWJsaWMgZXhwOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGV4cE5leHQ6IG51bWJlciA9IDEwMDtcclxuXHJcbiAgICBwdWJsaWMgc2V0TGV2ZWwobGV2ZWw6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcclxuICAgICAgICB0aGlzLm5vdGlmeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRFeHAoZXhwOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmV4cCA9IGV4cDtcclxuICAgICAgICB0aGlzLm5vdGlmeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRFeHBOZXh0KGV4cE5leHQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZXhwTmV4dCA9IGV4cE5leHQ7XHJcbiAgICAgICAgdGhpcy5ub3RpZnkoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVNb2RlbCBleHRlbmRzIEJhc2VNb2RlbCB7XHJcbiAgICBwdWJsaWMgcHJvZmlsZUltYWdlSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgcHJvZmlsZUltYWdlVXJsOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIHB1YmxpYyBzZXREYXRhKGluZGV4OiBudW1iZXIsIHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5wcm9maWxlSW1hZ2VJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMucHJvZmlsZUltYWdlVXJsID0gdXJsO1xyXG4gICAgICAgIHRoaXMubm90aWZ5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHVibGljIHNldFByb2ZpbGVJbWFnZVVybCh1cmw6IHN0cmluZykge1xyXG4gICAgLy8gICAgIHRoaXMucHJvZmlsZUltYWdlVXJsID0gdXJsO1xyXG4gICAgLy8gICAgIHRoaXMubm90aWZ5KCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcHVibGljIHNldFByb2ZpbGVJbWFnZUluZGV4KGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnByb2ZpbGVJbWFnZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5ub3RpZnkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0UHJvZmlsZUltYWdlVXJsKHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5wcm9maWxlSW1hZ2VVcmwgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5ub3RpZnkoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdlbU1vZGVsIGV4dGVuZHMgQmFzZU1vZGVsIHtcclxuICAgIHB1YmxpYyBjb3VudDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB0c0dlbU5leHQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHVibGljIHNldERhdGEoY291bnQ6IG51bWJlciwgdHNHZW1OZXh0OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNvdW50ID0gY291bnQ7XHJcbiAgICAgICAgdGhpcy50c0dlbU5leHQgPSB0c0dlbU5leHQ7XHJcbiAgICAgICAgdGhpcy5ub3RpZnkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q291bnQoY291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSBjb3VudDtcclxuICAgICAgICB0aGlzLm5vdGlmeSgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldFRzR2VtTmV4dCh0c0dlbU5leHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2VtTW9kZWwgc2V0VHNHZW1OZXh0XCIsIHRzR2VtTmV4dCk7XHJcbiAgICAgICAgdGhpcy50c0dlbU5leHQgPSB0c0dlbU5leHQ7XHJcbiAgICAgICAgdGhpcy5ub3RpZnkoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJhbGFuY2VNb2RlbCBleHRlbmRzIEJhc2VNb2RlbCB7XHJcbiAgICBwdWJsaWMgYmFsYW5jZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgc2V0QmFsYW5jZShiYWxhbmNlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmJhbGFuY2UgPSBiYWxhbmNlO1xyXG4gICAgICAgIHRoaXMubm90aWZ5KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyRGF0YSB7XHJcbiAgICBwdWJsaWMgbGV2ZWw6IExldmVsTW9kZWwgPSBuZXcgTGV2ZWxNb2RlbCgpO1xyXG4gICAgcHVibGljIHByb2ZpbGU6IFByb2ZpbGVNb2RlbCA9IG5ldyBQcm9maWxlTW9kZWwoKTtcclxuICAgIHB1YmxpYyBnZW06IEdlbU1vZGVsID0gbmV3IEdlbU1vZGVsKCk7XHJcbiAgICBwdWJsaWMgYmFsYW5jZTogQmFsYW5jZU1vZGVsID0gbmV3IEJhbGFuY2VNb2RlbCgpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlckRhdGEgPSBuZXcgVXNlckRhdGEoKTsiXX0=