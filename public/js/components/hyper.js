webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = exports.actions = {
  up: up,
  intro: intro,
  showMenu: showMenu
};

function up(state, actions) {
  return { count: state.count + 1 };
}

function showMenu() {}

function intro(state, actions) {
  console.log('Just ran my first action');
  return { count: state.count + 1 };
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _header = __webpack_require__(4);

var _header2 = _interopRequireDefault(_header);

var _topimg = __webpack_require__(7);

var _topimg2 = _interopRequireDefault(_topimg);

var _ourstory = __webpack_require__(5);

var _ourstory2 = _interopRequireDefault(_ourstory);

var _specialmenu = __webpack_require__(6);

var _specialmenu2 = _interopRequireDefault(_specialmenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_topimg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ourstory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_specialmenu2.default, { state: state, actions: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var globalState = exports.globalState = {
  count: 0
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "nav",
        { "class": "nav-item" },
        (0, _hyperapp.h)("a", { "class": "logo", href: "#" }),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Private Events"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Locations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#", "class": "reservations" },
          "Reservations ",
          (0, _hyperapp.h)("i", { "class": "fas fa-angle-right" })
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ourStory;

var _hyperapp = __webpack_require__(0);

function ourStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { "class": "ourStory" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "story-head" },
            "OUR STORY"
          ),
          (0, _hyperapp.h)(
            "h2",
            { "class": "storyTitle" },
            "Cooking Is The Art Of The Seasoning"
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "story" },
            "Each steak is seared to perfection, finished with a perfect amount of butter, freshly chopped parsley, pepper, garlic, garlic salt, garlic butter, onion powder, onion salt, pepper salt, chili powder, and 1/4 cup of our secret seasoning all served sizzling on a 500-degree plate."
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "quote" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "Justin Case"
            ),
            " ",
            (0, _hyperapp.h)(
              "span",
              { "class": "quote2" },
              "- Master Seasoner at Over-Seasoned"
            )
          ),
          (0, _hyperapp.h)(
            "a",
            { "class": "story-button", href: "#" },
            "Reservation"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)("img", { src: "http://www.justlookaround.nl/wordpress/wp-content/uploads/2016/06/Food-photography-Spareribs-Cookers-Just-Look-Around.jpg", "class": "story-img" })
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { "class": "specialMenu" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "special-top" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "special-head" },
            "SPECIAL MENU"
          ),
          (0, _hyperapp.h)(
            "h1",
            { "class": "special-title" },
            "Delicious Flavour Of Spice"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "card", style: "width:100%" },
            (0, _hyperapp.h)(
              "div",
              { "class": "top-card" },
              (0, _hyperapp.h)("img", { id: "card1" }),
              (0, _hyperapp.h)("div", { "class": "light-circle" }),
              (0, _hyperapp.h)(
                "div",
                { "class": "special-price" },
                "$32"
              )
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "container card-container" },
              (0, _hyperapp.h)(
                "p",
                { "class": "special-menu-title" },
                "Pressure Grilled NY Strip"
              ),
              (0, _hyperapp.h)(
                "p",
                { "class": "special-menu-description" },
                "A fresh, barely 9oz NY Strip, served with half an asparagus and 1/16 of a potato."
              )
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "card", style: "width:100%" },
            (0, _hyperapp.h)(
              "div",
              { "class": "top-card" },
              (0, _hyperapp.h)("img", { id: "card2" }),
              (0, _hyperapp.h)("div", { "class": "light-circle" }),
              (0, _hyperapp.h)(
                "div",
                { "class": "special-price" },
                "$52"
              )
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "container card-container" },
              (0, _hyperapp.h)(
                "p",
                { "class": "special-menu-title" },
                "Charbroiled T-Bone"
              ),
              (0, _hyperapp.h)(
                "p",
                { "class": "special-menu-description" },
                "An over-charred T-Bone with leaves from a nearby tree sprinkled on top."
              )
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "card", style: "width:100%" },
            (0, _hyperapp.h)(
              "div",
              { "class": "top-card" },
              (0, _hyperapp.h)("img", { id: "card3" }),
              (0, _hyperapp.h)("div", { "class": "light-circle" }),
              (0, _hyperapp.h)(
                "div",
                { "class": "special-price" },
                "$22"
              )
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "container card-container" },
              (0, _hyperapp.h)(
                "p",
                { "class": "special-menu-title" },
                "Charbroiled T-Bone"
              ),
              (0, _hyperapp.h)(
                "p",
                { "class": "special-menu-description" },
                "An over-charred T-Bone with leaves from a nearby tree sprinkled on top."
              )
            )
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { "class": "topImg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "welcome" },
        "Welcome to"
      ),
      (0, _hyperapp.h)(
        "h1",
        { "class": "title" },
        "Over-Seasoned"
      ),
      (0, _hyperapp.h)(
        "h2",
        { "class": "below" },
        "Steak House"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "contact-info" },
        (0, _hyperapp.h)(
          "p",
          { "class": "small-text" },
          "Call for seating"
        ),
        (0, _hyperapp.h)(
          "h4",
          { "class": "phone" },
          "(206)-643-0185"
        ),
        (0, _hyperapp.h)(
          "p",
          { "class": "hours" },
          (0, _hyperapp.h)(
            "strong",
            null,
            "Operating hours:"
          ),
          " 4pm-9pm, ",
          (0, _hyperapp.h)(
            "strong",
            null,
            "Weekends:"
          ),
          " 3pm - 10pm"
        )
      ),
      (0, _hyperapp.h)("div", { "class": "bowl" })
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _actions = __webpack_require__(1);

var _globalState = __webpack_require__(3);

var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: { globalState: _globalState.globalState },
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {
      actions.intro();
    }
  }
});

/***/ })
],[8]);