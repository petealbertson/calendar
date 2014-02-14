// Execute the following code when the page is loaded
$(function () {
  $.getJSON("json/data.json", function(data){
    console.log(data)

    // loop through every element
    $.each(data, function(i, theEvent){
    // pull out the values
      // console.log(theEvent);
      var title = theEvent['title']
      var description = theEvent['description']
      var event_time = theEvent['event_time']
      // console.log(title, description, event_time)
      // create a new event element
      var day = $('<div>');
      day.addClass('day');

      var date = $('<div>');
      date.addClass('date');
      day.append(date);

      var dayOfWeek = $('<div>');
      dayOfWeek.addClass('day_of_week');
      day.append(dayOfWeek);


      var newEvent = $('<div>');
      newEvent.addClass('event');
      day.append(newEvent);

      var titleEl = $('<div>')
      titleEl.addClass('event_title')
      titleEl.append('<a href="#">' + title + '</a>')
      newEvent.append(titleEl)

      var eventDetails = $('<div>');
      eventDetails.addClass('mobile');
      newEvent.append(eventDetails);

      var location = $('<div>');
      location.addClass('location');
      eventDetails.append(location);

      var eventDescription = $('<div>');
      eventDescription.addClass('event_description');
      eventDetails.append(eventDescription);

      var eventDate = new Date(theEvent.entry_date);

      var dateID = eventDate.getDate();
      date.append(dateID);
      // console.log(dateID)


      $('.week').append(day);
      // populate DOM with my new element

    });

    // map it to dates
    // populate the DOM with data


  });
});
