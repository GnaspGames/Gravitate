Gravitate Dev Notes
===================

Useful stuff for building.

Signs
-----

**Welcome sign:**

```
/give @p sign 1 0 {BlockEntityTag: {
Text1: "{\"text\":\"=========\",\"color\":\"gold\"}",
Text2: "{\"text\":\"WELCOME\",\"color\":\"green\",\"bold\":true}",
Text3: "{\"text\":\"=========\",\"color\":\"gold\"}"
}, display: {Name: "Welcome Sign"}}
```

**Game active:**

```
/give @p sign 1 0 {BlockEntityTag: {
Text1: "{\"text\":\"=========\",\"color\":\"gold\"}",
Text2: "{\"text\":\"GAME ACTIVE\",\"color\":\"red\",\"bold\":true}",
Text3: "{\"text\":\"=========\",\"color\":\"gold\"}"
}, display: {Name: "**Game Active Sign"}}
```

**Start sign:**

```
/give @p sign 1 0 {BlockEntityTag: {
Text1: "{\"text\":\"=========\",\"color\":\"gold\"}",
Text2: "{\"text\":\"START\",\"color\":\"green\",\"bold\":true,\"underlined\":true,\"clickEvent\":{\"action\":\"run_command\",\"value\":\"trigger trigger_start set 1\"}}",
Text3: "{\"text\":\"=========\",\"color\":\"gold\"}"
}, display: {Name: "Start Sign"}}
```

**Spectate sign:**

```
/give @p sign 1 0 {BlockEntityTag: {
Text1: "{\"text\":\"=========\",\"color\":\"gold\"}",
Text2: "{\"text\":\"SPECTATE\",\"color\":\"blue\",\"bold\":true,\"underlined\":true,\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/trigger trigger_spectate set 1\"}}",  
Text3: "{\"text\":\"=========\",\"color\":\"gold\"}"
}, display: {Name: "Spectate Sign"}}
```

**Lives signs:**

```
/give @p sign 1 0 {BlockEntityTag: {
Text1: "{\"text\":\"=========\",\"color\":\"gold\"}",
Text2: "{\"text\":\"LIVES: 10\",\"color\":\"blue\",\"bold\":true,\"underlined\":true,\"clickEvent\":{\"action\":\"run_command\",\"value\":\"trigger trigger_settings set 1\"}}",
Text3: "{\"text\":\"=========\",\"color\":\"gold\"}"
}, display:{Name:"Lives Sign"}}
```

```
/give @p sign 1 0 {BlockEntityTag: {
Text1: "{\"text\":\"=========\",\"color\":\"gold\"}",
Text2: "{\"text\":\"LIVES: 1\",\"color\":\"blue\",\"bold\":true,\"underlined\":true,\"clickEvent\":{\"action\":\"run_command\",\"value\":\"trigger trigger_settings set 2\"}}",
Text3: "{\"text\":\"=========\",\"color\":\"gold\"}"
}, display:{Name:"Lives Sign"}}
```

```
/give @p sign 1 0 {BlockEntityTag: {
Text1: "{\"text\":\"=========\",\"color\":\"gold\"}",
Text2: "{\"text\":\"LIVES: 3\",\"color\":\"blue\",\"bold\":true,\"underlined\":true,\"clickEvent\":{\"action\":\"run_command\",\"value\":\"trigger trigger_settings set 3\"}}",
Text3: "{\"text\":\"=========\",\"color\":\"gold\"}"
}, display:{Name:"Lives Sign"}}
```

```
/give @p sign 1 0 {BlockEntityTag: {
Text1: "{\"text\":\"=========\",\"color\":\"gold\"}",
Text2: "{\"text\":\"LIVES: 5\",\"color\":\"blue\",\"bold\":true,\"underlined\":true,\"clickEvent\":{\"action\":\"run_command\",\"value\":\"trigger trigger_settings set 4\"}}",
Text3: "{\"text\":\"=========\",\"color\":\"gold\"}"
}, display:{Name:"Lives Sign"}}
```


**Vent AECs**

/summon AreaEffectCloud ~ ~ ~ {Duration:2147483647,Tags:["largeVent"]}
/summon AreaEffectCloud ~ ~ ~ {Duration:2147483647,Tags:["smallVent"]}
/summon AreaEffectCloud ~ ~ ~ {Duration:2147483647,Tags:["miniVent"]}

/execute @e[name=shulkerPoint] ~ ~ ~ summon AreaEffectCloud ~ ~ ~ {Duration:2147483647,Tags:["shulkerPoint"]}

/kill @e[type=ArmorStand,name=shulkerPoint]


**Panorama**

Go to: /tp 55.5 40 -93.5  0 0
Set FOV to 82


**Ventfan Model ArmorStand**

Put in a cmd block at the 

Blue wool - large vent fan
/summon ArmorStand ~-0.5 ~-2.5 ~-0.5 {Tags:["ventFanModel"],Invisible:1b,Invulnerable:1b,PersistenceRequired:1b,NoGravity:1b,ArmorItems:[{},{},{},{id:"minecraft:wool",Count:1b,Damage:11}],HandItems:[{},{}],DisabledSlots:0}

Purple wool - medium vent fan
/summon ArmorStand ~-0.5 ~-3 ~-0.5 {Tags:["ventFanModel"],Invisible:1b,Invulnerable:1b,PersistenceRequired:1b,NoGravity:1b,ArmorItems:[{},{},{},{id:"minecraft:wool",Count:1b,Damage:10}],HandItems:[{},{}],DisabledSlots:0}

Cyan wool - small vent fan
/summon ArmorStand ~ ~-3 ~ {Tags:["ventFanModel"],Invisible:1b,Invulnerable:1b,PersistenceRequired:1b,NoGravity:1b,ArmorItems:[{},{},{},{id:"minecraft:wool",Count:1b,Damage:9}],HandItems:[{},{}],DisabledSlots:0}

