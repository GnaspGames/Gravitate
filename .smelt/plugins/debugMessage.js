// ------------------
// --     debugMessage     --
// ------------------
// Usage: !debugMessage <message>

module.exports = function(args, addCommand, addSetup)
{
	var message = args[0];
	addCommand("/execute @e[name=SYSTEM,tag=debugOn] ~ ~ ~ say " + message);
}