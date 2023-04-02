$('#aboutData').on('click', function() {
    $('img').fadeTo("fast", "0.5");
    $(this).fadeTo("slow", "1");
    $("#details-why").load('start-data.html').hide().fadeIn("slow");
});