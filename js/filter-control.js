// Toggle Category Filter hidden/in class - can't use toggleClass because the show/hide can be done from two locations //
$("#filter-toggle").click(function () {
    if ($("#filterCollapse").is(":visible")) {
        $("#filterCollapse").addClass("hidden");
        $("#filterCollapse").removeClass("in");
        $("#filter-toggle").addClass("collapsed");
        $("#filter-toggle").removeClass("shown");
    } else {
        $("#filterCollapse").addClass("in");
        $("#filterCollapse").removeClass("hidden");
        $("#filter-toggle").addClass("shown");
        $("#filter-toggle").removeClass("collapsed");
    }
});
// Toggle the show/hide icon and reset container toggle above
$(".filter-type2").click(function () {
    $("#filterCollapse").addClass("hidden");
    $("#filterCollapse").removeClass("in");
    $("#filter-toggle").addClass("collapsed");
    $("#filter-toggle").removeClass("shown");
});

// Update the By Category Button text and text color to match the text on filter button selected
$(".all-filter").click(function () {
    $("#filter-toggle strong").html($("#filter-toggle strong").html() == 'No Filter' ? 'No Filter' : 'No Filter');
    $("#filter-toggle").css('background', 'transparent').css('color', '#fff');
});
$(".widgets-filter").click(function () {
    $("#filter-toggle strong").html($("#filter-toggle strong").html() == 'Website Widgets' ? 'No Filter' : 'Website Widgets');
    $("#filter-toggle").css('background', '#6d42b4').css('color', '#fff');
});
$(".onsite-filter").click(function () {
    $("#filter-toggle strong").html($("#filter-toggle strong").html() == 'Onsite Services' ? 'No Filter' : 'Onsite Services');
    $("#filter-toggle").css('background', '#10aa64').css('color', '#fff');
});
$(".badges-filter").click(function () {
    $("#filter-toggle strong").html($("#filter-toggle strong").html() == 'Badges & Tickets' ? 'No Filter' : 'Badges & Tickets');
    $("#filter-toggle").css('background', '#1b79a7').css('color', '#fff');
});
$(".system-filter").click(function () {
    $("#filter-toggle strong").html($("#filter-toggle strong").html() == 'System Integrations' ? 'No Filter' : 'System Integrations');
    $("#filter-toggle").css('background', '#ec5a7c').css('color', '#fff');
});
$(".marketing-filter").click(function () {
    $("#filter-toggle strong").html($("#filter-toggle strong").html() == 'Marketing' ? 'No Filter' : 'Marketing');
    $("#filter-toggle").css('background', '#e15913').css('color', '#fff');
});
$(".reporting-filter").click(function () {
    $("#filter-toggle strong").html($("#filter-toggle strong").html() == 'Reporting' ? 'No Filter' : 'Reporting');
    $("#filter-toggle").css('background', '#b23636').css('color', '#fff');
});

// Add active class to selected filters
$('.filter-type1').click(function () {      //<----click the buttons
    $('.filter-type1').removeClass('active'); //<-----remove the class from the button
    $(this).addClass('active'); //<---add the class to currently clicked button

});
$('.filter-type2').click(function () {      //<----click the buttons
    $('.filter-type2').removeClass('active'); //<-----remove the class from the button
    $(this).addClass('active'); //<---add the class to currently clicked button

});

// Add same active class to Registration Filter when Registration is selected in Modal
$('.select-reg').click(function () {
    $('.filter-hou, .filter-all').removeClass('active');
    $('.filter-reg').addClass('active');
});
// Add same active class to Hotel/Housing Filter when Housing Management is selected in Modal
$('.select-hou').click(function () {
    $('.filter-reg, .filter-all').removeClass('active');
    $('.filter-hou').addClass('active');
});
// Add same active class to Show All Filter when Show it All is selected in Modal
$('.select-all').click(function () {
    $('.filter-hou, .filter-reg').removeClass('active');
    $('.filter-all').addClass('active');
});
