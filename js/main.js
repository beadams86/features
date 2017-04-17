var app = angular.module('sortApp', ['ui.bootstrap', 'ngAnimate', 'ngSanitize']);
app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, feature) {
    $scope.feature = feature;

    //No CLUE WHAT TO DO HERE!?
    $scope.showNext = function (feature, index) {
        $modalInstance.close("next");
    };

    $scope.showPrev = function (feature, index) {
        $modalInstance.close("prev");
    }

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    }
});

angular.module('sortApp').controller('mainController', function ($scope, $modal, $log) {

    $scope.sortType = 'category'; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order

    // create the list of features 
    // ### List below in index.html by:
    // Category (Registration, Housing, or Combined)
    // Type (ID #1 - Website Widgets, ID #2 - Onsite Services, ID #3 - Badges & Tickets, ID #4 - System Integrations, ID #5 - Marketing)
    // 

    $scope.allfeatures = [
        //############### REGISTRATION Features ###############

        //Website Widgets - Registration
      { index: 1, ID: 1, image: 'img/upload-tools.png', name: 'Upload Tools', type: 'Website Widgets', category: 'Registration Management', description: 'Attendees can upload credentials, student verification letters, professional licenses and other documentation required to validate their registration status.' },
      { index: 2, ID: 1, image: 'img/translation.png', name: 'Website Translation', type: 'Website Widgets', category: 'Registration Management', description: 'Microsoft Translator is used to translate your registration and housing websites with the click of one button.' },
      { index: 3, ID: 1, image: 'img/fundraising.png', name: 'Fundraising Motivator', type: 'Website Widgets', category: 'Registration Management', description: 'Encourage your attendees to help you reach fundraising goals with visually appealing dynamically populated graphics.' },
      { index: 4, ID: 1, image: 'img/groupdiscount.png', name: 'Group Discounting', type: 'Website Widgets', category: 'Registration Management', description: '<p>Our group discounting functionality allows you to offer both fixed and variable discounts to groups.</p><p>Variable discounting applies when the number of attendees being registered dynamically changes the price per registrant.</p><p>Fixed price discounting can be initiated by the use of promotional/discount codes.</p><p>Ask us how we can help manage your group discounting program.</p>' },
      { index: 5, ID: 1, image: 'img/pushmarketing.png', name: 'Relational Up-selling and Push Marketing', type: 'Website Widgets', category: 'Registration Management', description: 'Suggest purchases to your attendees based on their demographics, member type, prior purchases or other unique identifiers by using our Relational Up-selling & Push Marketing features.' },
      { index: 6, ID: 1, image: 'img/automatedvisa.png', name: 'Automated Visa Letter Production and Distribution', type: 'Website Widgets', category: 'Registration Management', description: 'Our automated Visa letter production component captures required attendee data, validates the registrants payment status, and creates customized invitation letters needed for the Visa application process. ' },
      { index: 7, ID: 1, image: 'img/acquisitionwidget.png', name: 'Attendee Acquisition Widget', type: 'Website Widgets', category: 'Registration Management', description: '<p>An attendee acquisition tool that makes it easy for your exhibitors to participate in audience promotion efforts!</p><p>Provide your exhibitors with interactive widgets, available in various sizes, to post on their corporate websites. Performance metrics provided before, during and after the event give you the opportunity to measure the effectiveness of the program. Metrics include click-thru rates, conversion rates, and page views for each widget deployed. </p><p>Incentive programs that reward exhibitors for using the promotional tool can be implemented to increase adoption rates. </p><p>Dashboards that give you real time insight on program activity generated from widgets deployed can be displayed on exhibitor facing websites to challenge and motivate others to participate. </p>' },
      { index: 8, ID: 1, image: 'img/validation.png', name: 'Press Registration, Validation and Approval Websites', type: 'Website Widgets', category: 'Registration Management', description: '<p>SPARGO press registration websites are equipped to receive and store uploaded media credentials necessary for review and validation by client staff.</p><p>SPARGO press registration websites are equipped to receive and store uploaded media credentials necessary for review and validation by client staff.</p>' },
      { index: 9, ID: 1, image: 'img/SuggestedBooths.png', name: 'Buyer Assist', type: 'Website Widgets', category: 'Registration Management', description: '<p>Provide attendees with a list of suggested booth visits that is compiled based on demographic data, membership status, registrant type, or other unique identifiers.</p><p>  Exhibitors offering products and/or services that match the attendees buyer profile are identified and compiled into a list of suggested booth visits for the attendee.</p><br><p>Suggested booth visits can be displayed on screen at the end of the registration process, in pop-up windows during the online registration session, or delivered via email prior to the event.</p><br><p>In addition, the suggested booth visit data can be shared with mobile app providers for display within the app when event apps require user identification and authentication.</p>' },

    //Onsite Services - Registration
      { index: 10, ID: 2, image: 'img/internetstations.png', name: 'Internet Stations & Cybercafes', type: 'Onsite Services', category: 'Registration Management', description: '<p>Sponsored or association branded internet/cybercafes installed in kiosk mode can control access to the internet, meeting offerings, and limit utilization times.</p><p>Landing pages are fully customizable to support association branding or provide sponsor recognition. Printing capabilities can also be provided.</p><p>Stations can be integrated with the registration system for user validation purposes or operate independently Stations may also serve as collection portals for CME/CE credits, production of certificate of attendance, and as remote registration stations </p>' },
      { index: 11, ID: 2, image: 'img/mobilevalidation.png', name: 'Mobile Validation and Check-in Pass', type: 'Onsite Services', category: 'Registration Management', description: 'The Mobile Validation Pass allows your attendee to use their mobile device to check in and pick up their badge and meeting materials onsite.' },
      { index: 12, ID: 2, image: 'img/sessiontracking.png', name: 'Session Access Authorization & Tracking App', type: 'Onsite Services', category: 'Registration Management', description: "The Go'N App connects to the registration database in real time to authenticate attendee purchases, facilitate new ticket sales, and verifies attendance." },
      { index: 13, ID: 2, image: 'img/satellitereg.png', name: 'Satellite Registration Stations', type: 'Onsite Services', category: 'Registration Management', description: '<p>iPad equipped kiosks and wireless bluetooth printers make the installation of remote registration stations easy.</p><p>Satellite registration areas can be installed at headquarter hotels, airports, and secondary locations in the primary meeting facility.</p>' },
      { index: 14, ID: 2, image: 'img/sessionmonitors.png', name: 'Session Availability Monitors', type: 'Onsite Services', category: 'Registration Management', description: '<p>Deploy our session availability monitors throughout your meeting location to deliver a real time visualization of session availability.</p><p>Monitors can also be used to display meeting news and important messages.</p>' },

    //Badges & Tickets - Registration
      { index: 15, ID: 3, image: 'img/photocapture.png', name: 'Photo Capture & Photo ID Badge Production', type: 'Badges & Tickets', category: 'Registration Management', description: 'Allow your attendees to add a photo to their name badge or build a secure database of photos for your meeting with our photo capturing and storage technology.' },
      { index: 16, ID: 3, image: 'img/badgepreview.png', name: 'Badge Preview Email', type: 'Badges & Tickets', category: 'Registration Management', description: '<p>Badge preview emails allows your attendees to review and edit their conference badge before they come onsite, cutting down on badge changes at the meeting.</p><p>This feature can also be used to market special events and other association offerings, and to communicate program changes and meeting updates. Make this part of your "Know before you Go" communications.</p>' },
      { index: 17, ID: 3, image: 'img/selfbadging.png', name: 'Self Badging', type: 'Badges & Tickets', category: 'Registration Management', description: '<p>Self Badging allows you to email your attendees their badges eliminating badge stock expenses as well as packaging and postage expenses.</p><p>The attendee will print out their own badge on their own home or office computer and redeem badge holders onsite.</p>' },
      { index: 18, ID: 3, image: 'img/badgeoptions.png', name: 'Badging and Ticketing Options', type: 'Badges & Tickets', category: 'Registration Management', description: '<p>Badges are available in multiple sizes and may include barcodes and/or RFID tags.</p><p>Ask your account manager for solutions fit your budget.</p>' },
      { index: 19, ID: 3, image: 'img/flagrecord.png', name: 'Ribbon Distribution Management', type: 'Badges & Tickets', category: 'Registration Management', description: '<p>Ribbon distribution is managed by the use of flags that appear in the registrant record.</p><p>Our developers capture and translate client provided data to ensure the registrant record initiates the production of ribbon codes that appear on the attendee credential/badge.</p><p>Ribbon distribution can be accomplished at onsite manned or unmanned check-in stations. Ribbons can also be mailed in advance to further improve the attendee experience.</p><p>Discuss the best solution for your meeting with your account manager.</p>' },

    //System Integrations - Registration
      { index: 20, ID: 4, image: 'img/AMSIntegration.png', name: 'AMS Integrations', type: 'System Integrations', category: 'Registration Management', description: '<p>Standard and custom integrations support the bi-diretional sharing of registrant data, single sign on protocols and membership validation. </p><p>Client side record codes can be easily translated resulting in seamless customized online registration and housing sessions.</p><h4>Personify, iMIS, Avectra, Aptify, A2Z</h4><p>Our API is also consumed by all major exposition management platforms and mobile apps</p>' },

     //Reporting - Registration
      { index: 21, ID: 6, image: 'img/ExhLeadManagement.png', name: 'Exhibitor Lead Management Services', type: 'Reporting', category: 'Registration Management', description: '<p>Lead generation analytics give you the data you need to substantiate the value of exhibiting at your event and prove exhibitor ROI.</p> <p><a href="http://spargoinc.com/images/leads/sample-heatmap-report.pdf" class="btn-link" target="_blank">View sample lead generation report</a></p><br><p>Encourage post show follow-up by offering reverse lead generation services that remind attendees who the visited and prompt post show dialog.</p><br><p>Design a better show floor using data. Our heat maps show you were the action is. Evaluate show floor traffic patterns, make adjustments, add show floor features, and more.</p><br><p>Identify your shows peak hours for lead generation and work to deliver a consistent flow of attendees in the hall.</p>' },

    // ############### HOUSING FEATURES ###############

    // System Integrations - Housing
      { index: 22, ID: 4, image: 'img/hotelfinder.png', name: 'Hotel Selection', type: 'System Integrations', category: 'Housing Management', description: '<p>Standard and custom integrations support the bi-diretional sharing of registrant data, single sign on protocols and membership validation. </p><p>Client side record codes can be easily translated resulting in seamless customized online registration and housing sessions.</p><h4>Personify, iMIS, Avectra, Aptify, A2Z</h4><p>Our API is also consumed by all major exposition management platforms and mobile apps</p>' },
      { index: 23, ID: 4, image: 'img/downloadcalendar.png', name: 'Calendar Downloads', type: 'System Integrations', category: 'Housing Management', description: '<p>Download your reservation to your Microsoft Outlook calendar.</p>' },
      { index: 24, ID: 4, image: 'img/sophisticatedsubblocks.png', name: 'Sophisticated Sub-Block Management', type: 'System Integrations', category: 'Housing Management', description: '<p>Room creation and management tools for groups and exhibitors provide maximum flexibility and control over complicated sub-blocks.</p><p>Exhibitors and groups access live inventory of available rooms and create and manage room reservations online 24/7. </p>' },

    // Onsite Services - Housing 
    { index: 25, ID: 2, image: 'img/onsitehousingdesk.png', name: 'Onsite Housing Services', type: 'Onsite Services', category: 'Housing Management', description: '<p>Our housing professionals provide excellent customer service as well as hotel oversight. </p><p>We stay in constant contact with hotels and provide rapid hands-on solutions to any housing situations that may arise.</p>' },
    { index: 26, ID: 2, image: 'img/exhibitorhousingdraw.png', name: 'Exhibitor Housing Draw', type: 'Onsite Services', category: 'Housing Management', description: "<p>Immediately exhibitors will have access to secure their room block onsite for next year's meeting.</p><br><p> After reserving their booth at SPARGO's exhibitor and housing sales office, knowledgeable housing professionals will be available to provide detailed information on available hotels. </p><br><p>Detailed hotel maps and rates for the following year will be available.</p>" },
    { index: 27, ID: 2, image: 'img/vipwhiteglove.png', name: 'VIP White Glove Treatment', type: 'Onsite Services', category: 'Housing Management', description: "<p>SPARGO provides our VIPs with exceptional service to ensure their accommodation arrangements are flawless.</p><p>VIP websites feature specific logic for special room types and billing. Rest easy knowing our housing staff carefully monitors all aspects of the VIP experience and provides that all important personal touch. </p>" },

    // Marketing - Housing 
    { index: 28, ID: 5, image: 'img/targetedemail.png', name: 'Targeted Email Marketing Campaigns', type: 'Marketing', category: 'Housing Management', description: '<p>Targeted margeting email campaigns increase room block utilization using incentives to draw attendees into the block as well as increase bookings and showcase special features and rates available at select hotels.</p>' },
    { index: 29, ID: 5, image: 'img/housinggraphic.png', name: 'Housing Graphic on Registration & Exhibitor Sites', type: 'Marketing', category: 'Housing Management', description: "<p>Encourage attendees to move directly from registration to housing with eye catching graphics and a single click.</p><p>Offer special incentives and highlight room block advantages with clickable graphics on your exhibitor website.</p>" },
    { index: 30, ID: 5, image: 'img/packages.png', name: 'Packages & Incentives', type: 'Marketing', category: 'Housing Management', description: "<p>Provide gift cards for free nights at host hotels as part of the registration package.</p>" },

    // ############### COMBINED FEATURES ###############
    // System Integrations - Combined
       { index: 31, ID: 4, image: 'img/MobileAppIntegration.png', name: 'Mobile App Integration', type: 'System Integrations', category: 'Combined', description: '<p>Integrating registration data with your event mobile app enables networking functionality, registrant search features, and the ability for your attendees to purchase additional tickets and make changes to their registration remotely via the app.</p><p>Custom and "off the shelve" integration technology is available for your event.</p><p>Talk with your account manager to determine what functionality will improve your attendee experience.</p>' },

    // Website Widgets - Combined
      { index: 32, ID: 1, image: 'img/analytics.png', name: 'Google Analytics', type: 'Website Widgets', category: 'Combined', description: "<p><strong>Know your audience</strong></p> <p>Google Analytics helps you analyze visitor traffic and paint a complete picture of your audience and their needs, wherever they are along the path to purchase. Giving you an edge on what your visitors need and want.</p> <p><strong>Trace the customer path</strong></p><p>Knowing where a customer is on your site, and how they got there is a critical part of finding out who they are. Tools like Traffic Sources and Visitor Flow help you track the routes people take to reach you, as well as the devices they use to get there. Armed with this valuable information an ideal user experience can be created for them.</P> <p><strong>Analyze important trends</strong></p> Utilize a tool like In-Page Analytics which lets you make a visual assessment of how visitors interact with your pages. Learn what they're looking for and what they like, then tailor all of your marketing activities for maximum impact." },
      { index: 33, ID: 1, image: 'img/responsive.png', name: 'Mobile Responsive Design', type: 'Website Widgets', category: 'Combined', description: 'Our mobile responsive design makes it possible for your attendees to easily register and book hotels on any mobile device.' },
      { index: 34, ID: 1, image: 'img/sponsorship.png', name: 'Sponsorship Opportunities', type: 'Website Widgets', category: 'Combined', description: 'Add high impact advertisements to the end of the registration process, all attendee email confirmations and badge preview emails to give your sponsors measureable ROI. <ul><li>Clickable Banner Ads</li><li>Guaranteed Impressions</li><li>Measureable click-throughs</li><li>Applicable to Onscreen Summary Pages and Emailed Confirmations</li></ul>' },
      { index: 35, ID: 1, image: 'img/socialmediaintegration.png', name: 'Social Media Integration', type: 'Website Widgets', category: 'Combined', description: '<p>Let your attendees do the talking. Use our integrated social media tools to encourage attendees to share their thoughts with colleagues.</p><p>Translate the social media traffic your event generates into increased attendance today. Contact your account manager to get started.</p>' },

    // Onsite Services - Combined
      { index: 36, ID: 2, image: 'img/RFID.png', name: 'RFID Products', type: 'Onsite Services', category: 'Combined', description: 'Ask us about our RFID solutions. State of the art technology, affordable gateways, embedded RFID tags that do not require tag/badge association, affordable tags, comprehensive reporting, and the onsite support you need to ensure success.' },

      // Reporting - Combined
      { index: 37, ID: 6, image: 'img/HeatMapping.png', name: 'Website Heat Mapping', type: 'Reporting', category: 'Combined', description: "Website Heatmapping is a powerful tool for learning what draws visitors' attention and what they perceive as clickable on a website. It offers the kind of contextual information you can’t get from any other analytics tools. The data is presented in the form of interactive heatmaps, which enable advanced quantitative analysis. " },
    ];

    $scope.indexNum = 'index';


    $scope.filterReg = function (val) {

        return (val.category != 'Housing Management');
    };
    $scope.filterHou = function (val) {

        return (val.category != 'Registration Management');
    };


    $scope.open = function (_feature, index) {

        var modalInstance = $modal.open({
            controller: "ModalInstanceCtrl",
            templateUrl: 'myModalContent.html',
            keyboard: true,
            resolve: {
                feature: function () {
                    return _feature;
                }
            }

        });
        modalInstance.result.then(function (result) {
            console.log("you clicked: " + result);
            if (result == "next") {
                if (index + 1 < $scope.allfeatures.length) {
                    $scope.open($scope.allfeatures[index + 1], index + 1);
                }
            }
            else {
                if (index - 1 >= 0) {
                    $scope.open($scope.allfeatures[index - 1], index - 1);
                }
            }
        });
    };

});

// ### Begin jQuery ###

// Launch Modal at beginning to narrow down customer show type 
$('document').ready(function () {
    $("#showTypeModal").modal("show");
});

// Add active class to pick-one class on select show type modal
$('.pick-one').click(function () {      //<----click the buttons
    $('.pick-one').removeClass('active'); //<-----remove the class from the button
    $(this).addClass('active'); //<---add the class to currently clicked button

});



// Fix Filter Bar to top of screen on scroll by adding class fixed, make the transition smooth with an empty "phantom div"
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#content-anchor').offset().top;
    if (window_top > div_top) {

        $('#sticky').addClass('fixed');

        // Get the height of #sticky
        // outerHeight() gets height including padding and borders
        var phantomHeight = $('#sticky').outerHeight();

        // Set the height of $sticky-phantom
        $('#sticky-phantom').height(phantomHeight).show();

    } else {
        $('#sticky').removeClass('fixed');
        $('#sticky-phantom').hide();
    }
}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});


