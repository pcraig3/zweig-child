## Changelog

### 1.8.2
* Update contact information in header
  * More readable on your phone screen when it's horizontal
  * Rewrite so that email address is visible in the text
  * Address some obscure vulnerability when using target="_blank"
* Apply hover CSS rules to focus states
  * Now when you tab over things, it should look the same as hovering with a mouse
* Change meta text for projects
  * Show excerpts instead of dates
  * Make meta text more visible on archive listings
  * Make meta text smaller on phone screens (because there's more of it now)

### 1.8.1
* Slightly bump up "back to top" button size

### 1.8.0
* New feature: marginally better markup
  * Remove all that `itemprop` stuff
  * Add `<main>` and some extra headers like Twenty Seventeen uses
  * Add `entry-title` and some extra classes like Twenty Seventeen uses
  * Update code to remove trailing spaces in classname strings
  * Choose between `<h1>`s and `<h2>`s depending on what is important on the page
  * Put a sneaky site-description heading on the homepage
  * Create another partial file that I think means I've basically outgrown Zweig
* Increase contrast when highlighting text
* Fancy underline links fade when you hover over them

### 1.7.1
* CSS formatting rules
  * IDE was complaining otherwise
* Stop using the `restructure` option in CSSO
  * Rearranging the rules was changing the precedence for some stuff

### 1.7.0
* New feature: using `gulp` instead of `grunt` -- users are gonna go nuts for this one
  * Benefits include:
    * gulp is cooler
    * gulp is newer
    * gulp syntax is easier
    * gulp is way faster (totally unexpected)
    * "gulp" has one less character (better for command line)
    * gulpfile.js < Gruntfile.js
    * minor improvement to CSS output
* Updated npm dependencies (it all still works)

### 1.6.0
* New feature: `<title>` isn't weird and broken
* Corresponding switch in SEO plugins behind the scenes

### 1.5.3
* really fix background colour for underline styles

### 1.5.2
* fix background colour for underline styles (ie, by removing it)

### 1.5.1
* Hide "search..." placeholder text in footer. (still a search bar though.)
* Update landscape mobile chardinjs styling.

### 1.5.0
* Changed nearly all front-ends to make the text bigger.
   * BIG TEXT IS THE FUTURE
* Logo is no longer an `<h1>`
  * (tons of other h1s floating aroung though)
* fixed spacing for nested lists (of which there are very few)
* fixed spacing for HTML tables (of which there are none)
* removed dotted bottom-border that `aricles` have

### 1.4.0
* New dependency: baller underlines yo
  * this is super cool, ps
* Changed `.whisper` text size to be normal

### 1.3.3
* Hide 'back' arrow for `#contact` overlay on small screens held horizontally
* Shift focus() onto `#contact` overlay and keep it there
  * Added a few more ways to close the overlay
  * [Mostly, just followed a lot of the stuff in this article](https://www.nczonline.net/blog/2013/02/12/making-an-accessible-dialog-box/)
* updated a few npm dependencies

### 1.3.2
* Reset focus after scrolling  to the top
* Make 'back-to-top' button the last thing on the page
* Add `break-word` for long post titles
* Add 'back' arrow for `#contact` overlay

### 1.3.1
* Added focus styles because this is the first step towards caring about this
* Updated some of the HTML to be more consistent between pages (specifically on the home page)
* Tiny CSS tweak fixed the alignment of navigation under projects/posts

### 1.3.0
* Removed the One Page Sections plugin, finally. [More here](https://github.com/pcraig3/zweig-child/commit/5da24f0a8e99ab111c741a31daa20579fa7a8bde)
  * While there were a bunch of changes to do in the WordPress backend, this app didn't get so many.
  * Main thing was creating a new template that works with the page whose slug is `home`.
* This means no more zipping down on the homepage.  'Projects' is a pageload away.

### 1.2.12
* Fix accidentally enormous CSS horizontal padding for bottom menu item links on zoomed-out screens (or large screens in general)
* Update some npm dev dependencies.  Whipped through afterwards and it seems like everything's fine.

### 1.2.11
* Swap in (sweet-scroll)[https://www.npmjs.com/package/sweet-scroll] instead of (page-scroll-to-id)[https://github.com/malihu/page-scroll-to-id].
    * Easing effects are more fun
* Add autoprefixer as a [postcss](https://github.com/nDmitry/grunt-postcss) task

### 1.2.10
* Include a modified version of the parent theme's `style.css` file
    * Save us from loading an extra file with custom fonts
* Dequeue parent theme's `normalize.css`
    * Inuit already comes with a normalize, so I never needed it

### 1.2.9
* Minify CSS.
* Remove a lot of unneeded JavaScript.
* Fix chardinjs overlay transition. (JQuery :/)
* `back_to_top` button disappears a lot quicker when clicked.
    * less janky animations on phones.

### 1.2.8
* Removed padding from nested lists.
* Add some list shuffling just for a larf.
* New screenshot.
* Newer screenshot.
* Update some npm stuff.
* Remove CV css files which really should have been gone long ago.
* REMOVE NEARLY ALL OF MY SHITTY CHARDIN-JS JAVASCRIPT OVERRIDES!!
    * <del>289</del> 23 lines of custom JS.
    * Most custom stuff can be solved with CSS rules.

### 1.2.7
* CSS tweak so that logo shows up on 404 page contact overlay.
* Remove some padding from nested lists.
* Added in some list-shuffling JavaScript as a dependency to eventually get rid of.
* Put 'next' links on top of 'previous' links
* Bower update vendors (basically did nothing).

### 1.2.6
* Even more layout changes.
    * Fixed 'go to site' buttons so they don't look horrible.
        * Because they looked horrible.
    * No-padding hack on images in projects.
    * Removed custom caption stuff because who cares(?)
    * Overrode some zwieg-theme defaults.

### 1.2.5
* More layout changes.
    * Removed square background on buttons.  Went even <em>minimaler</em>. 
        * Affects `.back-to-top` button and search magnifying glass.
    * Articles now touch walls of your mobile.  Claw back some space.
    * Header no longer takes up ~approximately~ 47% of available screen space on mobile.
        * Needed a bit of JS magic so that our overlay still worked. 
    * Lists on mobile are less indented.
* Also removed day from dates.
    * Changing the 'published' date to the era when each project was completed makes more sense.

### 1.2.4
* Layout changes.
    * Removed Aller font.  Added Verb.
    * Bumped default font size.  
    * Removed author-box
    * Added spacing to the post-nav thing.

### 1.2.3
* Revamped `.back-to-top` button.
    * Removed janky JS calculating fixed positions
    * Removed super-finicky `vh` CSS settings  
    * Using jQuery animations instead.
* Added links to header (oops.) 

### 1.2.2
* Always-at-the-top header removed
    * It wasn't working, though I didn't manage to isolate the header content.
    * New dependency: [chardin.js](https://github.com/heelhook/chardin.js) for a dead-easy full-screen overlay.
    * After that, it was only ~269 lines to make it do what I wanted. 
 
### 1.2.1
* Hacky CSS and JS to accommodate for the always-at-the-top header.

### 1.2.0
* Added Grunt: got it concatenating and uglifying my JavaScript.
* Layout updated for bigger screens.
* Media queries using SASS variables
* Link to CV changed.  (Not a good system.)

### 1.1.9
* Removed 'Pigiarniq fonts'
* Removed 'CV' template
* Updated screenshot
* Back_to_top button tweak

### 1.1.8
* Small update: Padding widths accomodate for mobile screens now.

### 1.1.7
* Captions styled and workng better on mobile
* Added (and then removed) excerpts.  Probably going to add them back.
* Added links to CV to header.

### 1.1.6
* Again with the vheight on the back_to_top button
* Synced HTML resume with PDF resume.  Grey background.
* fancy-pants front page lettering smaller a smidge.
* Conditionally hide contact area: reveal it with JS.
* Added the Zwieg CSS file to overwrite ONE RULE.
* Button class
* Added a caption_without_image shortcode.  Guess what it does.

### 1.1.5
* Added CV _temporarily_
* Removed /shame folder :)
* Adjusted CSS for landing page
* Scrolling offset works when logged in
* Added contact information it the header.

### 1.1.4
* Adjusted logic for front page sections: easier to skip sections
* Fixed problems with footer paddings
* Note: Small update -- reason is so that we can sync all sites with each other

### 1.1.3
* Swapped out all instances of Pigiarniq font face.
* Created CV page
* Adjusted styling in other minor ways.

### 1.1.2
* Swapped out scrollTo plugin for page-scroll-to-id
* Introduced and then solved scrolling problem on mobile search page
* Background colour header

### 1.1.1
* Search bar front page ugh.
* Archive pages mobile wasn't working; is now.
* Home page links now working properly
* Changed functions.php to not crash my server
* Added updated header file
* Note: next we replace the scrollTo plugin.

### 1.1.0
* Front page search bar tweak
* Search page responsive (phew)
* Note: Keeping the header where it is seems like a risky move at this point. Might have to change this down the road.

### 1.0.5

* Responsive posts/pages (singles)
* Got that hacky title thing working more or less
* Responsive archives
* Responsive front page
* Responsive 404
* JS updated: listens to resize for a couple things
* Search is gonna be a nightmare

### 1.0.4

* Search widget in footer works great.
* Menu widget in footer also works great. 
* Refactored CSS, but who cares.
* Squashed bug on search page (logo was unclickable)
* Front page text + search bar actually look pretty reasonable.

### 1.0.3

* New 404 page.  Whatup.
* Archive titles *much* better.  Not perfect, but who is?

### 1.0.2

* Experimental search bar is super cool
* Got the '::about' section header into the site header. A+
* Included /bower_components

### 1.0.1

* Added in what was needed for the Github Updater

### 1.0.0

* BETA release!  (Ahhhahahha!)
