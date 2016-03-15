//var util = requires("util");

module.exports = function(args, addCommand, addSetup)
{
	var name = args[0];
	if(name)
	{
		addCommand("/testfor @e[type=ArmorStand,name=SYSTEM,tag=loop_" + name + "]");
	}
}