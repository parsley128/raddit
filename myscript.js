document.getElementById("post-one").innerHTML = new MyMoment(
  new Date()
).printDateTime();

// this is a function to modify the thumbs up

function likePost(targetTag) {
  var thumb = targetTag;
  if (thumb.classList.contains("thumbs-liked")) {
    thumb.classList.remove("thumbs-liked");
  } else {
    thumb.classList.add("thumbs-liked");
  }
}

function MyMoment(date) {
  this.day = date.getDate();
  this.month = date.getMonth() + 1;
  this.year = date.getYear() + 1900;

  this.hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  this.minute =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  this.AMorPM = date.getHours() > 12 ? " PM" : " AM";

  this.printDate = function () {
    return this.month + "/" + this.day + "/" + this.year;
  };

  this.printTime = function () {
    return this.hour + ":" + this.minute + this.AMorPM;
  };

  this.printDateTime = function () {
    return this.printDate() + " " + this.print24HourClock();
  };

  this.printQueensDate = function () {
    return this.day + "/" + this.month + "/" + this.year;
  };

  this.print24HourClock = function () {
    if (this.AMorPM === " PM") {
      this.hour = this.hour + 12;
    }
    return this.hour + ":" + this.minute;
  };

  this.printSelf = function () {
    console.log(this);
  };
}