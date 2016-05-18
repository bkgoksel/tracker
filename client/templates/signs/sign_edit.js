Template.signEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentSignId = this._id;

    var signProperties = {
      text: $(e.target).find('[name=text]').val(),
      start: $(e.target).find('[name=start]').val(),
      end: $(e.target).find('[name=end]').val(),
      img: $(e.target).find('[name=img]').val()
    }

    Signs.update(currentSignId, {$set: signProperties}, function(error) {
      if (error) {
        // display the error to the user
        throwError(error.reason);
      } else {
        Router.go('manage');
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this sign?")) {
      var currentSignId = this._id;
      Signs.remove(currentSignId);
      Router.go('manage');
    }
  }
});
