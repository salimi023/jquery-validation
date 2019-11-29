$(document).ready(function() {

    $(".send").click(function(e) {
        e.preventDefault();
        var validStatus = [];

        $(".valid").each(function() {

            switch (true) {

                // Input 
                case $(this).is("input[type='text']"): // Text
                case $(this).is("input[type='date']"): // Date
                case $(this).is("input[type='datetime-local']"): // Date-Time Local
                case $(this).is("input[type='time']"): // Time
                case $(this).is("input[type='month']"): // Month
                case $(this).is("input[type='week']"): // Week
                case $(this).is("input[type='file']"): // File
                case $(this).is("input[type='number']"): // Number

                    var errorMsg = $(this).is("input[type='file']") ? "Please, select a file!" : "Please, provide an answer!";

                    if ($(this).val() === '') {
                        $(this).siblings("span.alert").text(errorMsg);
                        validStatus.push($(this).attr("id"));
                    } else {
                        $(this).siblings("span.alert").text("");
                        removeItem($(this).attr("id"), validStatus);
                    }
                    break;

                case $(this).is("input[type='email']"): // Input (e-mail)

                    if ($(this).val() !== '') {
                        $(this).siblings("span.alert").text("");
                        removeItem($(this).attr("id"), validStatus);
                        var rem = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        var checkEmail = rem.test($(this).val());

                        if (checkEmail == false) {
                            $(this).siblings("span.alert").text("Please, provide a valid e-mail address!");
                            validStatus.push($(this).attr("id"));
                        } else {
                            $(this).siblings("span.alert").text("");
                            removeItem($(this).attr("id"), validStatus);
                        }
                    } else {
                        $(this).siblings("span.alert").text("Please, provide a valid e-mail address!");
                        validStatus.push($(this).attr("id"));
                    }
                    break;

                case $(this).is("input[type='password']"): // Input (password)

                    if ($(this).val() === '') {
                        $(this).siblings("span.alert").text("Please, provide a password!");
                        validStatus.push($(this).attr("id"));
                    } else {

                        if ($(this).val().length >= 6) { // Minimal length of password: 6 characters 
                            var passwords = [];
                            $(this).siblings("span.alert").text("");
                            removeItem($(this).attr("id"), validStatus);

                            $("div.pass").each(function() { // Checking of passwords' identity
                                var pass = $(this).find("input[type='password']").val();
                                passwords.push(pass);
                            });

                            if (passwords[0] !== passwords[1]) {
                                $(this).siblings("span.pass-check").text("The two passwords are not identical!");
                                validStatus.push($(this).attr("id"));
                                passwords = [];
                                return;
                            } else {
                                $(this).siblings("span.pass-check").text("");
                                removeItem($(this).attr("id"), validStatus);
                            }
                        } else {
                            $(this).siblings("span.pass-check").text("");
                            $(this).siblings("span.alert").text("The minimal length of password is 6 characters!");
                            validStatus.push($(this).attr("id"));
                        }
                    }
                    break;

                case $(this).is("select"): // Input (select)

                    if (($(this).val() === '') || ($(this).children(':selected').attr("disabled"))) {
                        $(this).siblings("span.alert").text("Please, select and option!");
                        validStatus.push($(this).attr("id"));
                    } else {
                        $(this).siblings("span.alert").text("");
                        removeItem($(this).attr("id"), validStatus);
                    }
                    break;

                case $(this).is("textarea.ckeditor"): // CKEditor textarea

                    if (!CKEDITOR.instances['inputTextareaCKEditor'].getData().length) {
                        $(this).siblings("span.alert").text("Please, provide a text!");
                        validStatus.push($(this).attr("id"));
                    } else {
                        $(this).siblings("span.alert").text("");
                        removeItem($(this).attr("id"), validStatus);
                    }
                    break;

                case $(this).is("textarea"): // Textarea

                    if ($(this).val() === '') {
                        $(this).siblings("span.alert").text("Please, provide a text!");
                        validStatus.push($(this).attr("id"));
                    } else {
                        $(this).siblings("span.alert").text("");
                        removeItem($(this).attr("id"), validStatus);
                    }
                    break;

                    // Checkbox && Radio button
                case $(this).is("input[type='checkbox']"):
                case $(this).is("input[type='radio']"):

                    var itemName = $(this).attr("name");

                    if (!$("input[name='" + itemName + "']:checked").val()) {
                        $(this).siblings("span.alert").text("Please, select an option!");
                        validStatus.push($(this).attr("name"));
                    } else {
                        $(this).siblings("span.alert").text("");
                        removeItem($(this).attr("name"), validStatus);
                    }
                    break;

                default:
                    validStatus = [];
                    break;
            }
        });

        var checkValidStatus = Array.from(new Set(validStatus));
        checkValidStatus.length > 0 ? $("span#validationStatus").text("Error") : $("span#validationStatus").text("");

        function removeItem(id, array) {
            var index = array.indexOf(id);
            index > -1 ? array.splice(index, 1) : '';
            return array;
        }
    });
});