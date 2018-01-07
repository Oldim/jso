$(function() {
    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            // Prevent spam click and default submit behaviour
            $("#btnSubmit").attr("disabled", true);
            event.preventDefault();
            
            // get values from FORM
            
            var Naam = $("input#Naam").val();
            var Telefoon = $("input#Telefoon").val();
            var email = $("input#email").val();
            var Opmerkingen = $("textarea#Opmerkingen").val();
            var Text =  "Naam: " + Naam +
                        "<br />Tel: " + Telefoon +
                        "<br />E-mail adres: " + "<a href='mailto:" + email + "'>" + email + "</a>" +
                        "<br />Bericht: " + Opmerkingen +
                        "<br />" +
                        "<br />" + "Om op deze e-mail te beantwoorden, dient u te klikken op het e-mailadres van de klant. Hierna start er automatisch een nieuw e-mailbericht.";
            console.log(Text);
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "http://form.telecweb.be/form-submit.php",
                type: "POST",
                data: {
                    // from: "support@telecweb.be",
                    from: email,
                    to: "dimitri@telecsolutions.com",
                    subject: "Website  - Bericht van " + Naam,
                    text: Text
                },
                cache: false,
                success: function() {
                    // Enable button & show success message
                    $("#btnSubmit").attr("disabled", false);
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Uw bericht werd verstuurd. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    // $('#contactForm').trigger("reset");
                    
                    //hide form
                    $('#contactForm').addClass("hidden");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

// When clicking on Full hide fail/success boxes
$('#name').focus(function() {
    $('#success').html('');
});
