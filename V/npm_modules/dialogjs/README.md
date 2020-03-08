DialogJS
====

<img src="https://raw.githubusercontent.com/ariadng/dialogjs/master/readme_files/alert.png" width="400">

Javascript dialog alternative using promise.


## Installation


Using NPM:
```
npm install dialogjs --save
```

Then, add `dialog.min.css` and `dialog.min.js` from `dist` directory to your project html file.

```html
<link rel="stylesheet" type="text/css" href="npm_modules/dialogjs/dist/dialog.min.css">
<script type="text/javascript" src="npm_modules/dialogjs/dist/dialog.min.js"></script>
```


## Usage

After required files are inserted, you can access `Dialog` object from your script.


### Alert

Display alert dialog box, can be used for displaying important information that requires user's attention.

<img src="https://raw.githubusercontent.com/ariadng/dialogjs/master/readme_files/alert.png" width="400">

```js
Dialog.alert('Title','Message you want to show.')
.then(function(){
    console.log("You clicked OK");
},function(){
    console.log("You didn't click OK");
});
```

### Confirm

Display confirmation dialog box with Yes or No options.

<img src="https://raw.githubusercontent.com/ariadng/dialogjs/master/readme_files/confirm.png" width="400">

```js
Dialog.confirm('Question','Am I good enough?')
.then(function(){
    console.log("You answered Yes");
},function(){
    console.log("You answered No");
});
```


### Prompt

Display prompt dialog box with an input. Input types can be defined via option `type`. Currently, possible values for input types are: `text` *(default)* and `password`.

#### Default Text Input

<img src="https://raw.githubusercontent.com/ariadng/dialogjs/master/readme_files/prompt-text.png" width="400">


```js
Dialog.prompt('Dialog Title','Message to be displayed')
.then(function(value){
    // user clicked OK button, access user input via 'value' variable.
    console.log('Your input is: ' + value);
},function(){
    // user clicked Cancel button or closed the dialog.
    console.log("You clicked Cancel");
});
```


#### Password Input

<img src="https://raw.githubusercontent.com/ariadng/dialogjs/master/readme_files/prompt-password.png" width="400">


```js
Dialog.prompt('Dialog Title','Message to be displayed', { type: 'password' })
.then(function(value){
    // user clicked OK button, access user input via 'value' variable.
    console.log('Your input is: ' + value);
},function(){
    // user clicked Cancel button or closed the dialog.
    console.log("You clicked Cancel");
});
```


## License & Attributions

This project is published under [MIT](http://choosealicense.com/licenses/mit/) license.
This project was originally forked from [coderaiser/smalltalk](https://github.com/coderaiser/smalltalk). Thanks to [coderaiser](https://github.com/coderaiser) for the great work of Smalltalk.