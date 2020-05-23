jQuery(document).ready(function() {
    jQuery(".autosec").click(function() {
        let i, tabcontent, tablinks;
        tabcontent = jQuery(".tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            $(tabcontent[i]).css("display", "none")

        }
        tablinks = jQuery(".tablink");

        for (i = 0; i < tablinks.length; i++) {
            $(tablinks[i]).css("background-color", "");
        }
        $('#auto').css("display", "block");
        $(this).css("background-color", "#AED7D5");
    });

    jQuery(".homesec").click(function() {
        let i, tabcontent, tablinks;
        tabcontent = jQuery(".tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            $(tabcontent[i]).css("display", "none")

        }
        tablinks = jQuery(".tablink");

        for (i = 0; i < tablinks.length; i++) {
            $(tablinks[i]).css("background-color", "");
        }
        $('#home').css("display", "block");
        $(this).css("background-color", "#def2f1");
    });
    jQuery(".homesec").trigger("click");


    // Get the modal
    let modal = jQuery("#myModal");

    // Get the button that opens the modal
    let btn = jQuery("#myBtn");

    // Get the <span> element that closes the modal
    let span = jQuery(".close");

    // When the user clicks the button, open the modal 
    btn.click(function() {
        $(modal).css("display", "block");
    });


    // When the user clicks on <span> (x), close the modal
    span.click(function() {
        $(modal).css("display", "none");
    });


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            $(modal).css("display", "none");

        }
    }

    //form validation


    jQuery("#submit_btn").click(function() {
        let status = true;
        let first_name = jQuery('#first_name').val();
        let last_name = jQuery('#last_name').val();
        let user_email = jQuery('#user_email').val();
        let user_phn = jQuery('#user_phn').val();
        let commenr_box = jQuery('#commenr_box').val();

        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let regex_phone = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/
        if (first_name == '') {
            $('#first_name').css("border", "red solid 1px");
            status = false;
        } else if (first_name != '') {
            $('#first_name').css("border", "black solid 1px");

        }
        if (last_name == '') {
            $('#last_name').css("border", "red solid 1px");
            status = false;
        } else if (last_name != '') {
            $('#last_name').css("border", "black solid 1px");

        }
        if (user_email == '') {
            $('#user_email').css("border", "red solid 1px");
            status = false;
        } else if (!user_email.match(regex)) {
            $('#user_email').css("border", "red solid 1px");
            jQuery('#claim_email_error').text("  Please enter valid email");
            $('#claim_email_error').css("color", "red");
            status = false;

        } else if (user_email != '') {
            $('#user_email').css("border", "black solid 1px");
            jQuery('#claim_email_error').text("");
            status = false;

        }
        if (user_phn == '') {
            $('#user_phn').css("border", "red solid 1px");

            status = false;
        } else if (!user_phn.match(regex_phone)) {
            $('#user_phn').css("border", "red solid 1px");
            jQuery('#claim_phone_error').text("  Please enter valid phone.eg. xxx-xxx-xxxx");
            $('#claim_phone_error').css("color", "red");
            status = false;

        } else if (user_phn != '') {
            $('#user_phn').css("border", "black solid 1px");
            jQuery('#claim_phone_error').text("");
            status = false;

        }
        if (commenr_box == "") {

            $('#commenr_box').css("border", "red solid 1px");
            status = false;

        } else if (commenr_box != "") {
            $('#commenr_box').css("border", "black solid 1px");
        }

    });


});