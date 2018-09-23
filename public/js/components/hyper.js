webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _modal = __webpack_require__(11);

var _modal2 = _interopRequireDefault(_modal);

var _header = __webpack_require__(10);

var _header2 = _interopRequireDefault(_header);

var _topimg = __webpack_require__(17);

var _topimg2 = _interopRequireDefault(_topimg);

var _ourstory = __webpack_require__(12);

var _ourstory2 = _interopRequireDefault(_ourstory);

var _specialmenu = __webpack_require__(16);

var _specialmenu2 = _interopRequireDefault(_specialmenu);

var _quote = __webpack_require__(14);

var _quote2 = _interopRequireDefault(_quote);

var _reviews = __webpack_require__(15);

var _reviews2 = _interopRequireDefault(_reviews);

var _promotions = __webpack_require__(13);

var _promotions2 = _interopRequireDefault(_promotions);

var _contact = __webpack_require__(9);

var _contact2 = _interopRequireDefault(_contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_modal2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_topimg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ourstory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_specialmenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_quote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_reviews2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_promotions2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_contact2.default, { state: state, actions: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var globalState = exports.globalState = {
  count: 0
};

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Contact;

var _hyperapp = __webpack_require__(0);

function Contact(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { "class": "contact" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "contact-head" },
        "CONTACT US"
      ),
      (0, _hyperapp.h)(
        "h1",
        { "class": "contact-head" },
        "COME ENJOY OUR MEAT!"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "contact-box" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6 address" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "contact-location" },
            "Point Pleasant, West Virginia"
          ),
          (0, _hyperapp.h)(
            "h5",
            { "class": "contact-address" },
            "400 Main St, Point Pleasant, WV 25550"
          ),
          (0, _hyperapp.h)(
            "h5",
            { "class": "contact-street" },
            "400 Main St, Point Pleasant, WV 25550"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6 call" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "contact-call" },
            "(206)-643-0185"
          ),
          (0, _hyperapp.h)(
            "h5",
            { "class": "contact-hours-title" },
            "Weekday Hours:"
          ),
          (0, _hyperapp.h)(
            "h5",
            { "class": "contact-street" },
            "from 4pm-9pm"
          ),
          (0, _hyperapp.h)(
            "h5",
            { "class": "contact-hours-title" },
            "Weekend Hours:"
          ),
          (0, _hyperapp.h)(
            "h5",
            { "class": "contact-street" },
            "from 3pm-10pm"
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

var _fontawesome = __webpack_require__(8);

var _fontawesome2 = _interopRequireDefault(_fontawesome);

var _fontawesomeFreeRegular = __webpack_require__(6);

var _fontawesomeFreeRegular2 = _interopRequireDefault(_fontawesomeFreeRegular);

var _fontawesomeFreeSolid = __webpack_require__(7);

var _fontawesomeFreeSolid2 = _interopRequireDefault(_fontawesomeFreeSolid);

var _fontawesomeFreeBrands = __webpack_require__(5);

var _fontawesomeFreeBrands2 = _interopRequireDefault(_fontawesomeFreeBrands);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_fontawesome2.default.library.add(_fontawesomeFreeRegular2.default);
_fontawesome2.default.library.add(_fontawesomeFreeSolid2.default);
_fontawesome2.default.library.add(_fontawesomeFreeBrands2.default);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'header',
    null,
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'nav',
        { 'class': 'nav' },
        (0, _hyperapp.h)('div', { 'class': 'logo', id: 'test' }),
        (0, _hyperapp.h)(
          'a',
          { href: '#', 'class': 'nav-item nav-box' },
          'Menu'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#', 'class': 'nav-item nav-box' },
          'Our Story'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#', 'class': 'nav-item nav-box' },
          'Private Events'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#', 'class': 'nav-item nav-box' },
          'Locations'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#', 'class': 'nav-item nav-box reservations' },
          'Reservations ',
          (0, _hyperapp.h)('i', { 'class': 'fas fa-angle-right' })
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;

var _hyperapp = __webpack_require__(0);

function Modal(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "modal", "class": "hidden" },
    (0, _hyperapp.h)("div", { "class": "modal-overlay" }),
    (0, _hyperapp.h)(
      "div",
      { "class": "container modal-container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "modal-body" },
        (0, _hyperapp.h)("div", { "class": "modal-img" }),
        (0, _hyperapp.h)(
          "h1",
          { "class": "modal-title" },
          "Receive 25% off!"
        ),
        (0, _hyperapp.h)(
          "h5",
          { "class": "modal-description" },
          "Receive free coupons for our delicious resturaunt daily, when you surrender your email address below!"
        ),
        (0, _hyperapp.h)(
          "form",
          { id: "email-form" },
          (0, _hyperapp.h)("h5", { "class": "email-validation" }),
          (0, _hyperapp.h)("input", { type: "text", "class": "address-input", id: "email", action: "mailto:", placeholder: "Email Address" }),
          (0, _hyperapp.h)(
            "input",
            { type: "submit", id: "modal-submit" },
            "Submit"
          )
        ),
        (0, _hyperapp.h)(
          "a",
          { id: "close-modal" },
          (0, _hyperapp.h)("i", { "class": "fas fa-times" })
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 12 */
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
            { "class": "story-quote" },
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Promotions;

var _hyperapp = __webpack_require__(0);

function Promotions(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { "class": "promotions" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container promotion-container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "promotions-head" },
        "JOIN US"
      ),
      (0, _hyperapp.h)(
        "h1",
        { "class": "promotions-title" },
        "NEWS & PROMOTIONS"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "container grid-container" },
        (0, _hyperapp.h)("div", { id: "grid-item1" }),
        (0, _hyperapp.h)(
          "div",
          { id: "grid-item2" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "grid-item-title" },
            "Learn how to chop a steak!"
          ),
          (0, _hyperapp.h)(
            "h5",
            { "class": "grid-item-seperator" },
            "-------"
          ),
          (0, _hyperapp.h)(
            "h5",
            { "class": "grid-item-desc" },
            "Camp Crystal Lake, Cunningham, New Jersey"
          ),
          (0, _hyperapp.h)(
            "h5",
            { "class": "grid-item-desc" },
            "10:00AM - 11:30PM"
          ),
          (0, _hyperapp.h)(
            "h5",
            { "class": "grid-item-desc" },
            "Friday, June 13, 1979"
          )
        ),
        (0, _hyperapp.h)("div", { id: "grid-item3" }),
        (0, _hyperapp.h)(
          "div",
          { id: "grid-item4" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "grid-item-title" },
            "Over searing is a myth!"
          ),
          (0, _hyperapp.h)(
            "h5",
            { "class": "grid-item-seperator" },
            "-------"
          ),
          (0, _hyperapp.h)(
            "h5",
            { "class": "grid-item-desc" },
            "1428 Elm Street, Springwood, Ohio"
          ),
          (0, _hyperapp.h)(
            "h5",
            { "class": "grid-item-desc" },
            "10:00PM - 7:00AM"
          ),
          (0, _hyperapp.h)(
            "h5",
            { "class": "grid-item-desc" },
            "Friday, November 9, 1984"
          )
        ),
        (0, _hyperapp.h)("div", { id: "grid-item5" }),
        (0, _hyperapp.h)(
          "div",
          { id: "grid-item6" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "grid-item-title" },
            "Steak carving classes!"
          ),
          (0, _hyperapp.h)(
            "h5",
            { "class": "grid-item-seperator" },
            "-------"
          ),
          (0, _hyperapp.h)(
            "h5",
            { "class": "grid-item-desc" },
            "24 N 6th ave, Haddonfield, Illinois"
          ),
          (0, _hyperapp.h)(
            "h5",
            { "class": "grid-item-desc" },
            "8:00PM - 5:30AM"
          ),
          (0, _hyperapp.h)(
            "h5",
            { "class": "grid-item-desc" },
            "Tuesday, October 31, 1978"
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Quote;

var _hyperapp = __webpack_require__(0);

function Quote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { "class": "quote-body" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)("q", { lang: "en" }),
      (0, _hyperapp.h)(
        "h1",
        { "class": "quote" },
        "I Love Cooking A Big Steak,",
        (0, _hyperapp.h)("br", null),
        "For Myself and For My Cat."
      ),
      (0, _hyperapp.h)(
        "h5",
        { "class": "quote-author" },
        "- Tommy Tammisimo -"
      ),
      (0, _hyperapp.h)(
        "h5",
        { "class": "quote-name" },
        "The lonely head chef ",
        (0, _hyperapp.h)(
          "span",
          { "class": "quote2" },
          "- Over-Seasoned Steakhouse"
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { "class": "review" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)("div", { "class": "col-md-6 chef" }),
      (0, _hyperapp.h)(
        "div",
        { "class": "col-md-6 review-body" },
        (0, _hyperapp.h)(
          "h5",
          { "class": "review-head" },
          "REVIEW"
        ),
        (0, _hyperapp.h)(
          "h1",
          { "class": "review-title" },
          "What Nobody Say's About Us"
        ),
        (0, _hyperapp.h)(
          "h5",
          { "class": "review-quote" },
          "\u201CWay too many spices, I threw up!\u201D"
        ),
        (0, _hyperapp.h)(
          "p",
          { "class": "review-quote-body" },
          "There was so much damn pepper on my steak that it was actually spicy! My fiance and I didn't finish our meals and the amount of \"side\" you get with your meal is laughable... We were still hungry after, so we went to McDonalds. Terrible honeymoon dinner."
        ),
        (0, _hyperapp.h)(
          "h5",
          { "class": "reviewer" },
          "Jack Torrance - ",
          (0, _hyperapp.h)(
            "span",
            { "class": "quote2" },
            "Overlook Hotel employee"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "arrows" },
          (0, _hyperapp.h)("i", { "class": "fas fa-arrow-left" }),
          (0, _hyperapp.h)("i", { "class": "fas fa-arrow-right" })
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 16 */
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
                "Grilled NY Strip"
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
                "An over-charred T-Bone with dry leaves from a nearby tree sprinkled on top."
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
                "$72"
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
                "A delicious 16oz Ribeye, dowsed in seasonsings, you will need water."
              )
            )
          )
        )
      ),
      (0, _hyperapp.h)(
        "a",
        { "class": "view-menu", href: "#" },
        "VIEW FULL MENU"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 17 */
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
    (0, _hyperapp.h)("div", { "class": "img-cover" }),
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "intro" },
        (0, _hyperapp.h)(
          "h5",
          { "class": "welcome" },
          "WELCOME TO"
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
        )
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _actions = __webpack_require__(2);

var _globalState = __webpack_require__(4);

var _App = __webpack_require__(3);

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

//NAV COLLAPSE//
function navToggle() {
  var navs = document.querySelectorAll('.nav-item');

  navs.forEach(nav.classList.toggle('nav-collapsed'));
}

document.querySelector('.logo').addEventListener('click', navToggle);

alert('hello');

/***/ })
],[18]);