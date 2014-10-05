node-tf2
========

A sample node-steam plugin for Team Fortress 2.

# Usage

Initialize a `TeamFortress2` instance with a `SteamClient` instance.

```js
var Steam = require('steam');
var steamClient = new Steam.SteamClient();
var TeamFortress2 = require('tf2');
var tf2 = new TeamFortress2(steamClient);
```

All TeamFortress2 methods require the SteamClient instance to be logged on.

I'm probably not going to actively develop this, so feel free to fork and continue.

# Methods

## playTF2()

Reports to Steam that you're playing Team Fortress 2.

## craftItems(items, [recipe])

Attempts to craft `items`, which is an array of item IDs. Use a string if the ID wouldn't fit in a Number. `recipe` is defaults to "wildcard". You can get the recipe types using the `ERecipeType` property of the module. Example:

``` javascript
tf2.craftItems(refinedMetal.id, TeamFortress2.ERecipeType.SmeltRefined)
```

## deleteItem(item)

Attempts to delete `item`.
