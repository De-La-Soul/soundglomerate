// goals:
// 2. Search Bar
// - view --
// -- 3 input forms
// -- search button
// -- queried location ($scope.location)
// - controller --
// -- $scope elements for each input 
// ---- $scope.location
// ---- $scope.startDate
// ---- $scope.endDate
// ---- $scope.clickFxn (calls the service Fxn)
// - services --
// ---- HTTP GET
// ------- eventbrite API info (send)
// ------- On success, store and parse data 
// (function(){
'use strict'
angular.module('soundGlomerate.results', ['soundGlomerate.resultsFactory'])

.controller('ResultsController', ['$scope', 'Results', function ($scope, Results) { // Possibly don't need t
  // $scope.master = {}; // Will store the data from the returned search and will post to the page

  // Dummy Data ////////////////////////////////////
  // $scope.dataAPI = {
  //   thing1: {
  //     name:{
  //       test: ''
  //     }

  //   },

  //   thing2: {

  //   } 
  // console.log(Results);

  $scope.apiData = Results.resultsData;

    
  }]);
// })()
        // {
        //     "name": {
        //         "text": "Bissap Baobab Oakland presents: RHYTMS OF SOLIDARITY", 
        //         "html": "Bissap Baobab Oakland presents: RHYTMS OF SOLIDARITY"
        //     }, 
        //     "description": {
        //         "text": "- - DJ Baagi and DJ Bisou - -  An Eclectic mix of folk & electronic beats from black and brown communities around the world. Celebrating some immigrant Love... \nNO COVER + all ages welcome\u00a0 ", 
        //         "html": "<P><SPAN STYLE=\"color: #141823; font-family: helvetica, arial, sans-serif; font-size: 14px; line-height: 18.7600002288818px;\">- - DJ Baagi and DJ Bisou - -<\/SPAN><BR STYLE=\"color: #141823; font-family: helvetica, arial, sans-serif; font-size: 14px; line-height: 18.7600002288818px;\"><BR STYLE=\"color: #141823; font-family: helvetica, arial, sans-serif; font-size: 14px; line-height: 18.7600002288818px;\"><SPAN STYLE=\"color: #141823; font-family: helvetica, arial, sans-serif; font-size: 14px; line-height: 18.7600002288818px;\">An Eclectic mix of folk &amp; electronic beats from black and brown communities around the world. Celebrating some immigrant Love...<\/SPAN><\/P>\r\n<P><SPAN STYLE=\"color: #141823; font-family: helvetica, arial, sans-serif; font-size: 14px; line-height: 18.7600002288818px;\">NO COVER + all ages welcome\u00a0<\/SPAN><\/P>"
        //     }, 
        //     "id": "18172733134", 
        //     "url": "http://www.eventbrite.com/e/bissap-baobab-oakland-presents-rhytms-of-solidarity-tickets-18172733134?aff=ebapi", 
        //     "start": {
        //         "timezone": "America/Los_Angeles", 
        //         "local": "2015-09-04T17:30:00", 
        //         "utc": "2015-09-05T00:30:00Z"
        //     }, 
        //     "end": {
        //         "timezone": "America/Los_Angeles", 
        //         "local": "2015-09-04T19:30:00", 
        //         "utc": "2015-09-05T02:30:00Z"
        //     }, 
        //     "created": "2015-08-14T23:53:51Z", 
        //     "changed": "2015-08-18T22:38:58Z", 
        //     "capacity": 80, 
        //     "status": "live", 
        //     "currency": "USD", 
        //     "shareable": true, 
        //     "online_event": false, 
        //     "tx_time_limit": 480, 
        //     "logo_id": "14866030", 
        //     "organizer_id": "1634522120", 
        //     "venue_id": "11200115", 
        //     "category_id": "103", 
        //     "subcategory_id": "3005", 
        //     "format_id": "11", 
        //     "resource_uri": "https://www.eventbriteapi.com/v3/events/18172733134/", 
        //     "series_id": "18172732131", 
        //     "logo": {
        //         "id": "14866030", 
        //         "url": "https://img.evbuc.com/https%3A%2F%2Fimg.evbuc.com%2Fhttp%253A%252F%252Fcdn.evbuc.com%252Fimages%252F14866030%252F23018892160%252F1%252Foriginal.jpg%3Frect%3D220%252C0%252C630%252C315%26s%3D70c4c91585f25683736bfda1b9ce0050?h=200&w=450&s=0a95ea183f0c301c37be89a145f8859b", 
        //         "aspect_ratio": "2", 
        //         "edge_color": "#846c49", 
        //         "edge_color_set": true
        //     }
        // },
        // {
        //     "name": {
        //         "text": "Bissap Baobab Oakland presents: Baobab International Thursdays", 
        //         "html": "Bissap Baobab Oakland presents: Baobab International Thursdays"
        //     }, 
        //     "description": {
        //         "text": "We are excited to present *Baobab International*\u00a0 an All-Star roster of the Bay Area's best international DJs spinning a mix of: African, Latin, Reggae, Bhangra, Brasilian & more global rhythms! 21+ // No Cover // one drink minimum per person  OPENING on AUGUST 6th @10pm\u00a0 with DJ Miles Green & DJ Santero www.djmilesgreen.com www.soundcloud.com/djmilesgreen www.soundcloud.com/santeromusic www.mixcrate.com/Santero  FOLLOWING DATES: Aug 13 Bocar & Elembe Aug 20 Xris & Marco Aug 27 DJ Leydis & Mr.Lucky Sep 3 DJ Stepwise & El Kool Kyle Sep 10 Miles Green & Kobie Sep 17 Bocar & Elembe Sep 24 Xris & Marco Oct 1 Stepwise & Santero Oct 8 DJ Leydis & El Kool Kyle Oct 15 RasCue & Marcella ", 
        //         "html": "<P><SPAN STYLE=\"color: #141823; font-family: helvetica, arial, sans-serif; font-size: 14px; line-height: 18.7600002288818px;\">We are excited to present *Baobab International*\u00a0<\/SPAN><BR STYLE=\"color: #141823; font-family: helvetica, arial, sans-serif; font-size: 14px; line-height: 18.7600002288818px;\"><SPAN STYLE=\"color: #141823; font-family: helvetica, arial, sans-serif; font-size: 14px; line-height: 18.7600002288818px;\">an All-Star roster of the Bay Area's best international DJs spinning a mix of: African, Latin, Reggae, Bhangra, Brasilian &amp; more global rhythms!<\/SPAN><BR STYLE=\"color: #141823; font-family: helvetica, arial, sans-serif; font-size: 14px; line-height: 18.7600002288818px;\"><SPAN STYLE=\"color: #141823; font-family: helvetica, arial, sans-serif; font-size: 14px; line-height: 18.7600002288818px;\">21+ // No Cover // one drink minimum per person<\/SPAN><BR STYLE=\"color: #141823; font-family: helvetica, arial, sans-serif; font-size: 14px; line-height: 18.7600002288818px;\"><BR STYLE=\"color: #141823; font-family: helvetica, arial, sans-serif; font-size: 14px; line-height: 18.7600002288818px;\"><SPAN STYLE=\"color: #141823; font-family: helvetica, arial, sans-serif; font-size: 14px; line-height: 18.7600002288818px;\">OPENING on AUGUST 6th @10pm\u00a0<\/SPAN><BR STYLE=\"color: #141823; font-family: helvetica, arial, sans-serif; font-size: 14px; line-height: 18.7600002288818px;\"><SPAN STYLE=\"color: #141823; font-family: helvetica, arial, sans-serif; font-size: 14px; line-height: 18.7600002288818px;\">with DJ Miles Green &amp; DJ Santero<\/SPAN><BR STYLE=\"color: #141823; font-family: helvetica, arial, sans-serif; font-size: 14px; line-height: 18.7600002288818px;\"><A STYLE=\"color: #3b5998; cursor: pointer; text-decoration: none; font-family: helvetica, arial, sans-serif; font-size: 14px; line-height: 18.7600002288818px;\" HREF=\"http://www.djmilesgreen.com/\" TARGET=\"_blank\" REL=\"nofollow nofollow nofollow\">www.djmilesgreen.com<\/A><BR STYLE=\"color: #141823; font-family: helvetica, arial, sans-serif; font-size: 14px; line-height: 18.7600002288818px;\"><A STYLE=\"color: #3b5998; cursor: pointer; text-decoration: none; font-family: helvetica, arial, sans-serif; font-size: 14px; line-height: 18.7600002288818px;\" HREF=\"http://www.soundcloud.com/djmilesgreen\" TARGET=\"_blank\" REL=\"nofollow nofollow nofollow\">www.soundcloud.com/djmilesgreen<\/A><BR STYLE=\"color: #141823; font-family: helvetica, arial, sans-serif; font-size: 14px; line-height: 18.7600002288818px;\"><A STYLE=\"color: #3b5998; cursor: pointer; text-decoration: none; font-family: helvetica, arial, sans-serif; font-size: 14px; line-height: 18.7600002288818px;\" HREF=\"http://www.soundcloud.com/santeromusic\" TARGET=\"_blank\" REL=\"nofollow nofollow nofollow\">www.soundcloud.com/santeromusic<\/A><BR STYLE=\"color: #141823; font-family: helvetica, arial, sans-serif; font-size: 14px; line-height: 18.7600002288818px;\"><A STYLE=\"color: #3b5998; cursor: pointer; text-decoration: none; font-family: helvetica, arial, sans-serif; font-size: 14px; line-height: 18.7600002288818px;\" HREF=\"http://www.mixcrate.com/Santero\" TARGET=\"_blank\" REL=\"nofollow nofollow nofollow\">www.mixcrate.com/Santero<\/A><BR STYLE=\"color: #141823; font-family: helvetica, arial, sans-serif; font-size: 14px; line-height: 18.7600002288818px;\"><BR STYLE=\"color: #141823; font-family: helvetica, arial, sans-serif; font-size: 14px; line-height: 18.7600002288818px;\"><SPAN STYLE=\"color: #141823; font-family: helvetica, arial, sans-serif; font-size: 14px; line-height: 18.7600002288818px;\">FOLLOWING DATES:<\/SPAN><SPAN STYLE=\"display: inline; color: #141823; font-family: helvetica, arial, sans-serif; font-size: 14px; line-height: 18.7600002288818px;\"><BR>Aug 13 Bocar &amp; Elembe<BR>Aug 20 Xris &amp; Marco<BR>Aug 27 DJ Leydis &amp; Mr.Lucky<BR>Sep 3 DJ Stepwise &amp; El Kool Kyle<BR>Sep 10 Miles Green &amp; Kobie<BR>Sep 17 Bocar &amp; Elembe<BR>Sep 24 Xris &amp; Marco<BR>Oct 1 Stepwise &amp; Santero<BR>Oct 8 DJ Leydis &amp; El Kool Kyle<BR>Oct 15 RasCue &amp; Marcella<\/SPAN><\/P>"
        //     }, 
        //     "id": "18172375063", 
        //     "url": "http://www.eventbrite.com/e/bissap-baobab-oakland-presents-baobab-international-thursdays-tickets-18172375063?aff=ebapi", 
        //     "start": {
        //         "timezone": "America/Los_Angeles", 
        //         "local": "2015-09-10T22:00:00", 
        //         "utc": "2015-09-11T05:00:00Z"
        //     }, 
        //     "end": {
        //         "timezone": "America/Los_Angeles", 
        //         "local": "2015-09-11T01:30:00", 
        //         "utc": "2015-09-11T08:30:00Z"
        //     }, 
        //     "created": "2015-08-14T23:04:30Z", 
        //     "changed": "2015-08-21T11:31:08Z", 
        //     "capacity": 80, 
        //     "status": "live", 
        //     "currency": "USD", 
        //     "shareable": true, 
        //     "online_event": false, 
        //     "tx_time_limit": 480, 
        //     "logo_id": "14865554", 
        //     "organizer_id": "1634522120", 
        //     "venue_id": "11200115", 
        //     "category_id": "103", 
        //     "subcategory_id": "3005", 
        //     "format_id": "11", 
        //     "resource_uri": "https://www.eventbriteapi.com/v3/events/18172375063/", 
        //     "series_id": "18172371051", 
        //     "logo": {
        //         "id": "14865554", 
        //         "url": "https://img.evbuc.com/https%3A%2F%2Fimg.evbuc.com%2Fhttp%253A%252F%252Fcdn.evbuc.com%252Fimages%252F14865554%252F23018892160%252F1%252Foriginal.jpg%3Frect%3D0%252C17%252C1200%252C600%26s%3D2efda69396db47f88db5fd569df7aae7?h=200&w=450&s=514c5eec69c4c1288ccb819b30cdb40c", 
        //         "aspect_ratio": "2", 
        //         "edge_color": "#6ec1e7", 
        //         "edge_color_set": true
        //     }
        // }
