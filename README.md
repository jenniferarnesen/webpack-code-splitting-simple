A basic example of code splitting with webpack

You need webpack to use this repo:
```
npm install -g webpack
```

Then just run webpack, which will create three bundles:
# bundle.js
# 1.bundle.js
# 2.bundle.js

Open index.html in the browser, and try clicking the left or right button
with your devtools open to the network tab. Note that 1.bundle and 2.bundle
are only loaded after clicking on the respective button.