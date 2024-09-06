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
                alert('Message Successfully Submmited'); // Show alert last
            },
            error: function () {
                alert('Message Not Submmited');
            }
        });
    });
});
