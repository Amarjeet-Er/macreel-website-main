$(document).ready(function(){
    $('#contact-form').submit(function(e){
        e.preventDefault(); // Prevent form submission
        var formData = $(this).serialize(); // Serialize form data
        console.log(formData);
        $.ajax({
            type: 'POST',
            url: 'send_contact.php', // PHP script for sending email
            data: formData,
            success: function (response) {
                $('#contact-form')[0].reset(); // Reset the form
                $('#response').html(response); // Display response
                alert('Thank you for your enquiry! We will contact you soon.'); // Show alert last
            },
            error: function () {
                alert('There was an error processing your enquiry. Please try again.');
            }
        });
    });    
});