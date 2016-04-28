import { Template } from 'meteor/templating';

import './main.html';

Streamy.on('coords', function (d) {
	Session.set('x', d.x);
	Session.set('y', d.y)
})

Session.setDefault('x', 0);
Session.setDefault('y', 0);

Template.hello.helpers({
  xCoord() {
	return Session.get('x');
  },
  yCoord() {
    return Session.get('y'); 
  },
});

