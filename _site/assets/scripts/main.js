$(document).ready(function () {

  $('.scroll-to').on('click', function (e) {
    e.preventDefault();
    var id = $(e.currentTarget).attr('href')
    var target = $(id);
    $('html,body').animate({
      scrollTop: (target.offset().top)
    }, 1000);
  });

});

var Events = {
  init : function () {
    gapi.client.setApiKey('AIzaSyDufIu3Vp_NMj989bPzJNOMrIYV0pTnNiU');
    gapi.client.request({
      'path' : '/calendar/v3/calendars/coderit.public@gmail.com/events',
      'callback' : Events.displayEvents,
      'orderBy' : 'startTime',
      'params' : {
        'timeMin': (new Date()).toISOString(),
      },
      'singleEvents' : true
    });
  },
  showEventPage : function (id) {
    $('.event-page').hide();
    $('.event-page[data-event-page=' + id + ']').show();
  },
  changeEventPage : function (e) {
    var $target = $(e.target);
    Events.showEventPage($target.data('event-page-id'));
    $('.event-page-nav').removeClass('active');
    $target.addClass('active');
  },
  displayEvents : function (response) {
    if (response.error !== undefined) {
      $('#event-list-cta').html('<h4>There was an error getting our events.</h4>');
      return false;
    }

    if (response.items.length === 0) {
      $('#event-list-cta').html('<h4>There are no upcoming events.</h4>');
      return false;
    }

    // sort events by date
    var events = response.items.sort(function (a ,b) {
      if (a.start.dateTime !== undefined)
        a.start.date = a.start.dateTime;
      if (b.start.dateTime !== undefined)
        b.start.date = b.start.dateTime;
      return new Date(a.start.date) - new Date(b.start.date);
    });
    var count = 0;
    var numPages = 0;
    var html = '<ul id="event-list">';
    // print each event
    response.items.forEach(function(event) {
      if (count === 0) {
        numPages++;
        html += '<div class="event-page" data-event-page="'+ numPages +'">';
      }
      html += '<li class="event">';
      html += '<h4 class="event-title">' + event.summary + '</h4>';
      html += '<ul class="event-info">';
      date = moment(event.start.dateTime || event.start.date);
      html += '<li><i class="fa fa-calendar-o"></i>' + date.format('MMM D \'YY') + '</li>';
      // print out time if set
      html += (event.start.dateTime === undefined)?'':'<li><i class="fa fa-clock-o"></i>' + date.format('h:mm A') + '</li>';
      html += (event.location === undefined)?'':'<li><i class="fa fa-map-marker"></i>' + event.location + '</li>';
      html += '</ul>';
      html += '</li>';
      count++;
      if (count === 4) {
        html += '</div>';
        count = 0;
      }
    });
    html += '</ul>';

    if (numPages > 1) {
      for (var i = 1; i <= numPages; i++) {
        html += '<span data-event-page-id="'+ i +'" class="event-page-nav';
        html += (i === 1)?' active':'';
        html += '">&nbsp;</span>';
      }
    }
    $('#event-list-cta').html(html);
    Events.showEventPage(1);
    $('.event-page-nav').on('click', Events.changeEventPage);
    $('#event-list').css('minHeight', $('#event-list').height());
  }
}
