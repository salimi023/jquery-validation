# BASIC JQUERY VALIDATION OF HTML5 INPUT FIELDS AND CKEDITOR TEXTAREA

Basic jQuery script to validate most of the HTML5 input fields and CKEditor textarea.

## MINIMUM REQUIREMENTS

* jQuery library

## TYPES OF VALIDATED HTML5 INPUT FIELDS

* text,
* date,
* date-time local,
* time,
* month,
* week,
* file,
* number,
* e-mail (e-mail address validation),
* password (minimal length and confirmation),
* select,
* textarea,
* checkbox,
* radio button,
* CKEditor textarea.

## SYNTAX

The obligatory input field must have

* a class named "valid",
* a hidden ```<span>``` element (on the same DOM level), which has a class named "alert" for the display of the error message.

```
<input type="text" class="valid" name="anything" />
<span class="alert" style="display:none"></span>
```

For further syntax examples please refer to index.html.

The page of the form must also have a hidden ```<span>``` element, with the ID of "validationStatus". Before the submit code of the form is executed the content of this ```<span>``` element must be checked, because in case of validation error the script inserts the "Error" keyword as the content of the span.
If the ```<span>``` element is empty, the validation had not returned any validation errors and the submission of the form can be executed. For an example please refer to the index.html (at the bottom of the code).

PLEASE NOTE, THAT THE SCRIPT - WITH THE EXCEPTION OF THE E-MAIL TYPE - CHECKS ONLY WHETHER A FIELD IS FILLED IN OR NOT AND DOES NOT VALIDATE DATATYPES BEYOND THE DEFAULT CAPABILITIES OF THE HTML5 INPUT FIELDS.

## LICENSE

The script can be used according to the rules of MIT license.
