Signs = new Mongo.Collection('signs');

Meteor.methods({
    signInsert: function(sign) {
        var signId = Signs.insert(sign);
        return {
            _id: signId
        };
    }
});

