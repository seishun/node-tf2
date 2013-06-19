module.exports = TeamFortress2;

function TeamFortress2(steamClient) {
  this._client = steamClient;
}

TeamFortress2.prototype.playTF2 = function() {
  this._client.gamesPlayed([440]);
};

TeamFortress2.prototype.craftItems = function(items, recipe) {
  var buffer = new Buffer(2 + 2 + 8 * items.length);
  buffer.writeInt16LE(recipe || -2, 0); // -2 is "Wildcard"
  buffer.writeInt16LE(items.length, 2);
  for (var i = 0; i < items.length; i++) {
    buffer.writeUInt64LE(items[i], 4 + i * 8);
  }
  this._client.toGC(440, 1002, buffer);
};

TeamFortress2.prototype.deleteItem = function(item) {
  var buffer = new Buffer(8);
  buffer.writeUInt64LE(item);
  this._client.toGC(440, 1004, buffer);
};
