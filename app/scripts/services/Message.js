(function() {
    function Message($firebaseArray) {
      var Message = {};

        var ref = firebase.database().ref().child("Messages");
        var messages = $firebaseArray(ref);

        return {
            getByRoomId: function(roomId) {
              console.log(roomId)
                return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
            }
        };
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
