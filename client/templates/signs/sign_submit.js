Template.signSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var sign = {
      text: $(e.target).find('[name=text]').val(),
      start: $(e.target).find('[name=start]').val(),
      end: $(e.target).find('[name=end]').val(),
      img: $(e.target).find('[name=img]').val()
    };

    Meteor.call('signInsert', sign, function(error, result) {
      // display the error to the user and abort
      if (error)
        return throwError(error.reason);
    });
  }
});
