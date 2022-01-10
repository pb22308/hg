class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }
  getCount() {
    var gameCountRef = database.ref("playerCount");
    gameCountRef.on("value", function(data) {
      playerCount = data.val();
    });
  }
  //BP
  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

 }

