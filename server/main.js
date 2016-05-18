import '../lib/collections/signs.js'

Meteor.startup(() => {
    /*
	var tracker = Npm.require('eye-tribe');
	var interval = 250;
    var gazing = true;
    var notGazingFor = 0;

	tracker.createConnection();
	Meteor.setInterval(() => {
	    coords = tracker.getCoordinates();
        if (coords == [0,0]) {
            notGazingFor++;
        } else if (!gazing) {
            gazing = true;
            notGazingFor = 0;
            Streamy.broadcast('gazing', true);
        }
        if (notGazingFor > 12) {
            gazing = false;
            Streamy.broadcast('gazing', false);
        }
	}, interval);
    */
});
