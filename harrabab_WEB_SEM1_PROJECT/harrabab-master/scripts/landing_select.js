jQuery(document).ready(function() {
    let coll = jQuery('.collapsible');
    let i;

    for (i = 0; i < coll.length; i++) {

        $(coll[i]).click(function() {

            let els = document.querySelectorAll('.content.accessedclass')
            //let els = jQuery('content.accessedclass');
            let els1 = document.querySelectorAll('.collapsible.active')
            //let els1 = jQuery('collapsible.active');




            for (let j = 0; j < els.length; j++) {
                els[j].classList.remove('accessedclass');
                els1[j].classList.remove('active');
                els[j].style.display = "none";
            }

            this.classList.toggle("active");
            let content = this.nextElementSibling;


            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.classList.add("accessedclass");
                content.style.display = "block";
            }
        });
    }
    jQuery("#disp_default").trigger("click");
    if ($('.container_counter').length) // use this if you are using id to check
    {
        if (!jQuery('html').hasClass('ie8')) {
            $('.counter').counterUp({
                delay: 10,
                time: 2000
            });
        };

        $('.counter').addClass('animated fadeInDownBig');
        $('h3').addClass('animated fadeIn');

    }

    //insurance select page 


    jQuery("#select_btn").click(function() {
        let status = true;
        let addressfiels = jQuery('#autocomplete').val();
        let postalcode = jQuery('#postal_code').val();
        let select_insu = jQuery('#insure_type').val();
        let regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

        if (addressfiels == '') {
            jQuery('#error_address').text("  Please enter address");
            $('#error_address').css("color", "red");
            status = false;
        } else {
            jQuery('#error_address').text("");
            $('#error_address').css("color", "white");
            status = true;
        }

        if (postalcode == '') {
            jQuery('#error_postal').text("  Please enter postal code");
            $('#error_postal').css("color", "red");
            status = false;
        } else if (!postalcode.match(regex)) {

            jQuery('#error_postal').text("  Please enter valid postal code");
            $('#error_postal').css("color", "red");
            status = false;

        } else {
            jQuery('#error_postal').text("");
            $('#error_postal').css("color", "white");
            status = true;
        }
        if (select_insu == '') {
            jQuery('#error_type').text("  Please enter insurance code");
            $('#error_type').css("color", "red");

            status = false;

        } else if (select_insu != '') {

            jQuery('#error_type').val("");
            $('#error_type').css("color", "white");
            status = true;

        }

        if (status == true) {
            window.location.href = "auto_insurance_form.html";
        } else {
            return false;
        }

    });
});