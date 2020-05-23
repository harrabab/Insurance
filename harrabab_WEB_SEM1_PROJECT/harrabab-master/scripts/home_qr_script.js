// For the blink of dollar bag
let imgId = 'fire';
let imgOnTime = 250;
let imgOffTime = 750;
window.onload = function() {
    // check for existence of objects we will use
    if (document.getElementById) {
        let ele = document.getElementById(imgId);
        if (ele && ele.style) {
            setTimeout('blinkImg()', imgOffTime);
        }
    }
}

function blinkImg() {
    let v, t, ele = document.getElementById(imgId);
    if (ele.style.visibility == 'visible') {
        // hide it, then wait for imgOffTime
        v = 'hidden';
        t = imgOffTime;
    } else {
        // show it, then wait for imgOnTime
        v = 'visible';
        t = imgOnTime;
    }
    ele.style.visibility = v;
    setTimeout('blinkImg()', t);
}

//To show and hide the Bundling link
$("#flip").click(function() {
    $("#panel").slideToggle();
});

function zoomin() {
    let myImg = document.getElementById("sky");
    let currWidth = myImg.clientWidth;
    if (currWidth == 500) {
        alert("Maximum zoom-in level reached.");
    } else {
        myImg.style.width = (currWidth + 50) + "px";
    }
}
$(document).ready(function() {
    $("button").click(function() {
        $("div").animate({ left: '250px' });
    });
});

// For validation of fields
$(document).ready(function() {

    $('#btn-submit').click(function() {

        $(".error_Msg").hide();
        let hasError = false;
        let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        let emailblockReg =
            /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)([\w-]+\.)+[\w-]{2,4})?$/;

        let emailaddressVal = $("#email").val();
        if (emailaddressVal == '') {
            $("#email").after('<span class="error_Msg">Please enter your email address.</span>');
            hasError = true;
        } else if (!emailReg.test(emailaddressVal)) {
            $("#email").after('<span class="error_Msg">Enter a valid email address.</span>');
            hasError = true;
        } else if (emailblockReg.test(emailaddressVal)) {
            $("#email").after('<span class="error_Msg">No mails other than yahoo, gmail or hotmail emails are allowed.</span>');
            hasError = true
        }
        let hasError1 = false;
        let data = $("#phonenumber").val();
        let regexPattern = new RegExp(/^[0-9-+]+$/);
        if (!regexPattern.test(data)) {

            $("#phonenumber").after('<span class="error_Msg">Enter a valid phone number.</span>'); // hides error msg if validation is true
            hasError = true;
        }
        if (hasError == true) { return false; }
        if (hasError1 == true) { return false; }
    });
});

function popup() {
    let hasError = false;
    let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    let emailblockReg =
        /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)([\w-]+\.)+[\w-]{2,4})?$/;
    let data = $("#phonenumber").val();
    let regexPattern = new RegExp(/^[0-9-+]+$/);
    let emailaddressVal = $("#email").val();
    let card_type = "";
    if ($("input[type='radio'].radioBtnClass").is(':checked')) {
        card_type = $("input[type='radio'].radioBtnClass:checked").val();
        alert(card_type);
    }
    if (emailaddressVal != "" && emailReg.test(emailaddressVal) && !(emailblockReg.test(emailaddressVal)) && regexPattern.test(data) && card_type != "") {
        alert("Sandeep inside");
        $(".submitButton").on("click", function() {
            $(".popup-overlay, .popup-content").addClass("active");
        });
        $(".closeButton, .popup-overlay").on("click", function() {
            $(".popup-overlay, .popup-content").removeClass("active");
        });
    }
}
//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
document.body.style.cursor = "pointer";