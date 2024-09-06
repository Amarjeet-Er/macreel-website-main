$(document).ready(function () {
    $('#enquiry-form').submit(function (e) {
        e.preventDefault(); // Prevent form submission
        var formData = $(this).serialize(); // Serialize form data
        console.log(formData);
        $.ajax({
            type: 'POST',
            url: 'send_enquiry.php', // PHP script for sending email
            data: formData,
            success: function (response) {
                $('#enquiry-form')[0].reset(); // Reset the form
                $('#response').html(response); // Display response
                $('#enquiryModal').modal('hide'); // Close the modal
                alert('Thank you for your enquiry! We will contact you soon.'); // Show alert last
            },
            error: function () {
                alert('There was an error processing your enquiry. Please try again.');
            }
        });
    });
});
