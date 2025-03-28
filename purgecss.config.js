module.exports = {
  content: ['./**/*.html'],  // all HTML files
  css: ['css/bootstrap.css', 'css/style.css', 'css/responsive.css'],  // CSS files to analyze
  output: 'css/purged/',  // output directory
  safelist: [
    /carousel/,  // preserve carousel-related classes
    /collapse/,  // preserve collapse-related classes
    /show/,     // preserve show class
    /active/,   // preserve active class
    /fade/,     // preserve fade class
    /slide/,    // preserve slide class
    /navbar/,   // preserve navbar classes
    /nav/,      // preserve nav classes
    /btn/,      // preserve button classes
    /form/,     // preserve form classes
    /input/,    // preserve input classes
    /container/, // preserve container classes
    /row/,      // preserve row classes
    /col/,      // preserve column classes
    /d-flex/,   // preserve flex utility classes
    /ml-auto/,  // preserve margin utility classes
    /px-0/,     // preserve padding utility classes
    /pr-0/,     // preserve padding utility classes
    /mr-0/,     // preserve margin utility classes
    /mb-3/,     // preserve margin utility classes
    /my-2/,     // preserve margin utility classes
    /my-sm-0/,  // preserve margin utility classes
    /sr-only/   // preserve screen reader classes
  ]
} 