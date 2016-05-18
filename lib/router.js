Router.route('/signs/:_id/edit', {
   name: 'signEdit',
   data: function() { return Signs.findOne(this.params._id); }
 });

SignsManageController = RouteController.extend({
    template: 'signsList',
    signs: function() {
        return Signs.find({});
    },
});

SignsShowController = RouteController.extend({
    template: 'signsShow',
    signs: function() {
        return Signs.find({});
    },
});

Router.route('/', {
    name: 'home',
    controller: SignsShowController
});

Router.route('/manage', {
    name: 'manage',
    controller: SignsManageController
});
