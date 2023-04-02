// Event Listener that Loads the Greeting onto the Window
$(window).on('load', function() {

  /* This program checks the real time of day and displays a greeting based on what time it is */

  // Object
  let timeGreeting = {
    date: new Date(),
    hour: 0,
    timedText: "",

    // Method
    getTime: function() {
      this.hour = this.date.getHours();
    },

    displayMessage: function() {
      if (this.hour < 12) {
        this.timedText = "Good morning!";
      } else if (this.hour < 18) {
        this.timedText = "Good afternoon!";
      } else {
        this.timedText = "Good evening!";
      }
      
      let greeting = $('#greeting');
      greeting.html('<span>' + this.timedText + '</span>');
    }
  };

  timeGreeting.getTime();
  timeGreeting.displayMessage();
});
