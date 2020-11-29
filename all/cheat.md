---
id: cheat
title: Might and Magic 6, 7, 8 & Merge Cheat Scripts
sidebar_label: Cheat
---

<p align="center">
English | <a href="#">本文的中文版</a>
</p>

These are some of the most useful cheat script snippets for Might and Magic 678 Merge.

Most of them also work in MM6, MM7 and MM8, provided that [GrayFace patch](https://grayface.github.io/mm/#GrayFace-MM6-Patch) AND [MMExtension](https://grayface.github.io/mm/ext/) have been installed (MMMerge already has them). (however, this article is primarily targeted at MMMerge, it requires some update such as including MM6/7/8's data tables to be fully adapted to MM6, 7 and 8)

(If you don't use the scripts below, you can use [Cheat Engine](https://www.cheatengine.org/downloads.php) file [`mm8.CT`](https://github.com/might-and-magic/mm678-i18n/blob/master/cheat/mm8.CT), or read the "[§ Other cheat tools and scripts](#other-cheat-tools-and-scripts)" section at the end of the article)

# Cheat script snippets

<p align="center">
AA | BB
</p>

## How to use

* <kbd>Ctrl</kbd> + <kbd>F1</kbd> to open the console.
* Then copy and paste the code in the console, make necessary changes if needed.
* Then <kbd>Ctrl</kbd> + <kbd>Enter</kbd> to execute your code.

For more detailed MMExtension code and usage, read [MMExtension's official reference manual](https://grayface.github.io/mm/ext/ref/).

### Index & ID

The terms "index" and "ID" are used in this article. "index" starts with 0, and is "0-based"; "ID" starts with 1, not 0, therefore is not "0-based" but "1-based".

Code like `Party[n-1]`, `Skills[n-1]` indicates the nth element in an array (collection of elements), where `n-1` is 0-based index of the element. E.g., the 1st skill, "Staff"'s index `n-1` is 0, therefore we use `Skills[0]` to represent Staff.

## Script snippets

### Players

(Players: team members controlled by you)

(The code snippets to select player(s) are not directly executable, you'll need to do something to the selected player(s), e.g. `Party[0].HP = 32`)

Select a player (with the 0-based [index](#index--id)), counting from left:

```lua
-- Select player 1:
Party[0]
-- Select player 2:
Party[1]
-- Select player n:
Party[n-1]
```

Select all players:

```lua
for _, player in Party do
	player
end
```

You can easily change a snippet for one player to the same one for the team by replacing the "for" loop code by `Party[0]`, `Party[1]`... (or vice versa).

### Skills

[All players](#players) get all skills learned at Grand Master level 15 (a skill is skipped if it is already learned at higher level):

```lua
for _, player in Party do
	for i, val in player.Skills do
		local skill, mastery = SplitSkill(val)
		player.Skills[i] = JoinSkill(math.max(skill, 15), math.max(mastery, const.GM))
	end
end
```

[Player 1](#players) gets Spear skill ([index](#index--id): 4, see table below) learned at Grand Master (can be `Novice`, `Expert`, `Master`, `GM`) level 15:

```lua
Party[0].Skills[4] = JoinSkill(15, const.GM)
```

<details><summary>Click here to show/hide the "Index - Skill" table</summary>
<table>
<tr>
<th>Index</th>
<th>Skill</th>
</tr>
<tr>
<td>0</td>
<td>Staff</td>
</tr>
<tr>
<td>1</td>
<td>Sword</td>
</tr>
<tr>
<td>2</td>
<td>Dagger</td>
</tr>
<tr>
<td>3</td>
<td>Axe</td>
</tr>
<tr>
<td>4</td>
<td>Spear</td>
</tr>
<tr>
<td>5</td>
<td>Bow</td>
</tr>
<tr>
<td>6</td>
<td>Mace</td>
</tr>
<tr>
<td>7</td>
<td>Blaster</td>
</tr>
<tr>
<td>8</td>
<td>Shield</td>
</tr>
<tr>
<td>9</td>
<td>Leather</td>
</tr>
<tr>
<td>10</td>
<td>Chain</td>
</tr>
<tr>
<td>11</td>
<td>Plate</td>
</tr>
<tr>
<td>12</td>
<td>Fire</td>
</tr>
<tr>
<td>13</td>
<td>Air</td>
</tr>
<tr>
<td>14</td>
<td>Water</td>
</tr>
<tr>
<td>15</td>
<td>Earth</td>
</tr>
<tr>
<td>16</td>
<td>Spirit</td>
</tr>
<tr>
<td>17</td>
<td>Mind</td>
</tr>
<tr>
<td>18</td>
<td>Body</td>
</tr>
<tr>
<td>19</td>
<td>Light</td>
</tr>
<tr>
<td>20</td>
<td>Dark</td>
</tr>
<tr>
<td>21</td>
<td>Dark Elf Ability</td>
</tr>
<tr>
<td>22</td>
<td>Vampire Ability</td>
</tr>
<tr>
<td>23</td>
<td>Dragon Ability</td>
</tr>
<tr>
<td>24</td>
<td>Identify Item</td>
</tr>
<tr>
<td>25</td>
<td>Merchant</td>
</tr>
<tr>
<td>26</td>
<td>Repair</td>
</tr>
<tr>
<td>27</td>
<td>Bodybuilding</td>
</tr>
<tr>
<td>28</td>
<td>Meditation</td>
</tr>
<tr>
<td>29</td>
<td>Perception</td>
</tr>
<tr>
<td>30</td>
<td>Regeneration</td>
</tr>
<tr>
<td>31</td>
<td>Disarm Traps</td>
</tr>
<tr>
<td>32</td>
<td>Dodging</td>
</tr>
<tr>
<td>33</td>
<td>Unarmed</td>
</tr>
<tr>
<td>34</td>
<td>Identify Monster</td>
</tr>
<tr>
<td>35</td>
<td>Armsmaster</td>
</tr>
<tr>
<td>36</td>
<td>Stealing</td>
</tr>
<tr>
<td>37</td>
<td>Alchemy</td>
</tr>
<tr>
<td>38</td>
<td>Learning</td>
</tr>
</table>
</details>

### Spells

[All players](#players) get all spells:

```lua
for _, player in Party do
	for i in player.Spells do
		player.Spells[i] = true
	end
end
```

[Player 1](#players) get Town Portal spell (0-based [index](#index--id): 30, see the "Spell" table below):

```lua
Party[0].Spells[30] = true
```

<details><summary>Click here to show/hide the "Spell" table</summary>
</details>

### Cast Spell

Cast a spell with the function `CastSpellDirect(SpellId, SkillLevel, Mastery, Caster, Target)` (only works in MMMerge).

Replace `SpellId`, `SkillLevel` and `Mastery` with the spell's ID (NOT the 0-based [index](#index--id), see the "Spell" table above), the spell's skill level (1-60) and mastery degree (1: Normal; 2: Expert; 3: Master; 4: Grand Master), respectively. Replace `Caster` and `Target` with the caster and target [player](#players)'s 0-based index if needed.

Cast Fly (ID: 21) at Master level 60:

```lua
CastSpellDirect(21, 60, 3)
```

Cast Town Portal (ID: 31) at Grand Master level 10:

```lua
CastSpellDirect(31, 10, 4)
```

Cast Heal (ID: 68) at Grand Master level 60, the caster is player 1, the target is player 3:

```lua
CastSpellDirect(68, 60, 4, 0, 2)
```

Cast Heal (ID: 68) at Grand Master level 60, the caster is the current player (default), the target is him/herself (default):

```lua
CastSpellDirect(68, 60, 4)
```

#### Cast Party Buff Spell

Party Buff Spells are those shown in the "Active Party Spells" card.

Cast Wizard Eye (Constant Name: "WizardEye"; see table below) that will last 10 days (see also [§ Time](#time)):

```lua
Party.SpellBuffs[const.PartyBuff.WizardEye].ExpireTime = Game.Time + 10 * const.Day
```

<details><summary>Click here to show/hide the "Party Buff Spell" table</summary>
</details>

#### Cast Player Buff Spell

Player Buff Spell are those shown in "Active Spell" when you right click on a player's portrait.

Cast Haste (Constant Name: "Haste"; see table below) that will last 10 days (see also [§ Time](#time)):

```lua
Party[0].SpellBuffs[const.PlayerBuff.Haste].ExpireTime = Game.Time + 10 * const.Day
```

<details><summary>Click here to show/hide the "Player Buff Spell" table</summary>
</details>

#### Lloyd's Beacon

Set the expiration time of the 3rd beacon of the player 1 to 100 days later (see also [§ Time](#time)):

```lua
Party[0].Beacons[2].ExpireTime = Game.Time + 100 * const.Day
```

Change the coordinates of the 3rd beacon of the player 1 (it's the same text representation of coordinates as in [§ Get Current Coordinates](#get-current-coordinates), except that you need to change `Name` to `Map`) (the code can't change the Beacon's picture; you may also want to set `ExpireTime` if you are adding a new Beacon, however, because the Beacon's picture is not set, the Beacon in the Beacon book is invisible but clickable):

```lua
for k, v in pairs({X = -9754, Y = -1992, Z = 640, Direction = 512, LookAngle = -28, Map = "oute3.odm"}) do
	Party[0].Beacons[2][k] = v
end
```

### Level

Level 150 for [all players](#players) (if his/her current level is lower):

```lua
for _, player in Party do
	player.LevelBase = math.max(player.LevelBase, 150)
end
```

### Class

Set [player 1](#players)'s class to Master Archer (Constant Name: "MasterArcher"; see table below):

```lua
Party[0].Class = const.Class.MasterArcher
```

<details><summary>Click here to show/hide the "Constant Name - Class" table</summary>
</details>

### HP & SP

Full HP (Hit Point) & SP (Spell Point) for [all players](#players):

```lua
for _, player in Party do
	player.HP = player:GetFullHP()
	player.SP = player:GetFullSP()
end
```

### Seven Statistics

Set all Seven Statistics to 500 for [all players](#players):

```lua
for _, player in Party do
	for s = 0, 6 do
		player.Stats[s].Base = 500
	end
end
```

Set Seven Statistics one by one to 500 for [player 1](#players):

```lua
Party[0].MightBase = 500
Party[0].IntellectBase = 500
Party[0].PersonalityBase = 500
Party[0].EnduranceBase = 500
Party[0].AccuracyBase = 500
Party[0].SpeedBase = 500
Party[0].LuckBase = 500
```

### Resistances

Set all Resistances to 100 for [all players](#players):

```lua
local tres = {0, 1, 2, 3, 6, 7, 8}
for _, player in Party do
	for _, res in pairs(tres) do
		player.Resistances[res].Base = 100
	end
end
```

Set Resistances one by one to 100 for [player 1](#players):

```lua
Party[0].FireResistanceBase = 100
Party[0].AirResistanceBase = 100
Party[0].WaterResistanceBase = 100
Party[0].EarthResistanceBase = 100
Party[0].MindResistanceBase = 100
Party[0].BodyResistanceBase = 100
```

### Age

Set [player 1](#players)'s age bonus (magical or special effect that makes your player older) to 0:

```lua
Party[0].AgeBonus = 0
```

### Experience

Set [player 1](#players)'s Experience to 999999:

```lua
Party[0].Experience = 999999
```

### Skill Points

Set [player 1](#players)'s Skill Points to 9999:

```lua
Party[0].SkillPoints = 9999
```

### Condition

Restore condition to "Good" for [all players](#players):

```lua
for _, player in Party do
	for i in player.Conditions do
		player.Conditions[i] = 0
	end
end
```

[Player 1](#players) gets Level-3 Disease (Constant Name: "Disease3"; see table below):

```lua
Party[0].Conditions[const.Condition.Disease3] = 1
```

<details><summary>Click here to show/hide the "Constant Name - Condition" table</summary>
</details>

### Player Name

Set [player 1](#players)'s name to "Tom":

```lua
Party[0].Name = "Tom"
```

<details><summary>Click here to show/hide the instruction for those who use the Chinese version and want to input Chinese</summary>
If you use the Chinese version and your desired input includes at least one Chinese character, full-width character or other special character, see the following example.

Set player 1 (note that it's not the 0-based [index](#index--id) here)'s name to "汤姆":

```lua
DBCS.setPlayerName(1, "汤姆")
```
</details>

### Player Face & Voice

Set [player 1](#players)'s face and voice to Zoltan's (original MM6's default Sorcerer player, [index](#index--id): 43, see table below; face index and voice index are the same):

```lua
Party[0].Face = 43
Party[0].Voice = 43
```

After a change of face, save and reload the game to have the new portrait image shown.

<details><summary>Click here to show/hide the "Index - Player Face" table</summary>
</details>

### Time

To change the current time, you can use `Game.Time = n` where n represents the time since 0:00 on 1 January 1172 (it is 1172 in MMMerge and MM8, 1168 in MM7, 1165 in MM6), its time unit is 1/256 in-game minute. See the following examples.

Set the current time to 8:00 on 1 January 1172 (8 hours after 0:00 on 1 January 1172) in MMMerge/MM8:

```lua
Game.Time = 8 * const.Hour
```

(the above code is equivalent to `Game.Time = 8 * 60 * 256` or `Game.Time = 122880`)

Set the current time to 18:43 on 18 April 1173 (1 year, 3 months, 17 days, 18 hours, 43 minutes after 0:00 on 1 January 1172) in MMMerge/MM8:

```lua
Game.Time = 1 * const.Year + 3 * const.Month + 17 * const.Day + 18 * const.Hour + 43 * const.Minute
```

(the above code is equivalent to `Game.Time = 1 * 123863040 + 3 * 10321920 + 17 * 368640 + 18 * 15360 + 43 * 256` or `Game.Time = 161383168`)

### Gold

Set Gold to 100000 and Gold in the bank to 50000:

```lua
Party.Gold = 100000
Party.BankGold = 50000
```

### Food

Set Food to 100:

```lua
Party.Food = 100
```

### Item

#### Get Item

Get item "Focal Ring" (ID: 146, see table below), hanging the item on your mouse pointer:

```lua
evt.GiveItem(1, 0, 146)
```

(In `evt.GiveItem()` function, the first two parameter values `1` and `0` reprensent "Strength" and "Type", usually you don't need to change them)

<details><summary>Click here to show/hide the "ID - Item" table</summary>
</details>

#### Item Standard Bonus

Add Standard Bonus "of Might" (ID: 1, see table below) with a Strength 15, to the item on your mouse pointer:

```lua
Mouse.Item.Bonus = 1
Mouse.Item.BonusStrength = 15
```

<details><summary>Click here to show/hide the "ID - Item Standard Bonus" table</summary>
</details>

#### Item Special Bonus

Add Special Bonus "of Infernos" (ID: 12, see table below), to the item on your mouse pointer:

```lua
Mouse.Item.Bonus2 = 12
```

<details><summary>Click here to show/hide the "ID - Item Special Bonus" table</summary>
</details>

#### Item Properties

Get item "Necrotic Wand of Incineration" (ID: 176, see Item table above) with "Charges" of 100, the item will be identified:

```lua
evt.GiveItem(1, 0, 176)
Mouse.Item.Charges = 100
Mouse.Item.Identified = true
```

Fix the broken item on your mouse pointer, remove its "Stolen" status, and harden it:

```lua
Mouse.Item.Broken = false
Mouse.Item.Stolen = false
Mouse.Item.Hardened = true
```

### Summon Monster

Summon monster / creator.

Summon Lizardman Peasant (ID: 1, see table below) who will not be hostile:

```lua
local mon = SummonMonster(1, Party.X, Party.Y, Party.Z)
mon.Hostile = false
```

Some monsters are always hostile, `mon.Hostile = false` does not work for them.

<details><summary>Click here to show/hide the "ID - Monster" table</summary>
</details>

### Kill All

Kill all monsters / creators in the current map:

```lua
for _, mon in Map.Monsters do
	mon.HP = 0
end
```

### Go To Map

Teleport to Ravenshore (file name: "out02.odm", see table below):

```lua
evt.MoveToMap{Name = "out02.odm"}
```

<details><summary>Click here to show/hide the "Map - File Name" table</summary>
</details>

#### Go To Coordinates

Teleport to New Sorpigal (file name: "oute3.odm") and stand in front of the Temple by using a set of coordinates that is already known:

```lua
evt.MoveToMap{X = -9754, Y = -1992, Z = 640, Direction = 512, LookAngle = -28, Name = "oute3.odm"}
```

#### Get Current Coordinates

Get the current coordinates (as well as looking direction and angle):

```lua
print("X = " .. Party.X .. ", Y = " .. Party.Y .. ", Z = " .. Party.Z ..
", Direction = " .. Party.Direction .. ", LookAngle = " .. Party.LookAngle ..
", Name = '" .. Map.Name .. "'")
```

It will generate a line of code, e.g. `X = -9754, Y = -1992, Z = 640, Direction = 512, LookAngle = -28, Name = "oute3.odm"`. You can save it somewhere and revisit this set of coordinates later by inserting the code into `evt.MoveToMap{  }` and executing it. You can also share it on the forums for bug reporting or other purposes.

### Reveal Entire Map

Reveal entire current outdoor map:

```lua
for _, a in Map.VisibleMap1 do
	for i in a do
		a[i] = true
	end
end
```

Reveal entire current indoor map:

```lua
for _, olItem in Map.Outlines.Items do
	olItem.Visible = true
end
```

### Open All Doors

Open all the doors and gates in the current map (use with caution):

```lua
for _, door in Map.Doors do
	door.State = 1
end
```

### Speak to NPC

Talk to Verdant (NPC ID: 803; see table below):

```lua
evt.SpeakNPC(803)
```

<details><summary>Click here to show/hide the "ID - NPC" table</summary>
</details>

### Enter House

Go into the Throne Room of the Castle Ironfist (House ID: 222; see table below).

```lua
evt.EnterHouse(222)
```

<details><summary>Click here to show/hide the "ID - House/2D Event" table</summary>

MMExtension sets 600 and 601 as magic numbers that will open the game winning / losing page. Therefore in MMMerge, you can't enter Crane Cottage (600) or Bith Estate (601) with `evt.EnterHouse()`
</details>

(Note that the Throne Room differs from the entrance "House" of the Castle Ironfist (House ID: 335). Every dungeon / indoor map also has its entrance "House". These "Houses" are also known as "2D Events" or "2D Locations")

Wilbur Humphrey (NPC ID: 789) and Nicolai Ironfist (NPC ID: 798) live in the Throne Room of the Castle Ironfist, you can talk only to one of them by using `evt.SpeakNPC(789)` / `evt.SpeakNPC(798)`.

If you know the ID of the NPC (in our case, Humphrey: 789), but can't find the ID of the NPC's House, you can use this code to go into the NPC's house (if (s)he has a house):

```lua
evt.EnterHouse(Game.NPCDataTxt[789].House)
```

### NPC Follower

NPC Followers cheat code here only works in MMMerge.

Add the NPC whose ID is 1185 as the 1st (not [0-based](#index--id)) NPC Follower (NPC ID from 1184 to 1224 are random MapNPCs, you should usually use the ID in this range and not mess up with other important NPC with a quest, if you really need to use other NPC, see ["ID - NPC" table above](#speak-to-npc)):

```lua
vars.NPCFollowers[1] = 1185
```

Change the 1st (not [0-based](#index--id)) NPC Follower's profession to "Gate Master" (ID: 41; see table below):

```lua
Game.NPC[vars.NPCFollowers[1]].Profession = 41
```

<details><summary>Click here to show/hide the "ID - NPC Profession" table</summary>
</details>

Change the 1st NPC Follower's picture to Melian (the Oracle of Enroth)'s portrait (ID: 34; see table below):

```lua
Game.NPC[vars.NPCFollowers[1]].Pic = 34
```

[Click here to go to the "ID - NPC Picture" table page](https://github.com/might-and-magic/mm678-cheat/tree/master/img/npc/README.md)

Change the 1st NPC Follower's name to "Tom":

```lua
Game.NPC[vars.NPCFollowers[1]].Name = "Tom"
```

<details><summary>Click here to show/hide the instruction for those who use the Chinese version and want to input Chinese</summary>
If you use the Chinese version and your desired input includes at least one Chinese character, then you need to use this to replace `"Tom"` for Simplified Chinese characters:

```lua
DBCS.encodeSpecial("汤姆", "gb2312")
```

or this for Traditional Chinese characters:

```lua
DBCS.encodeSpecial("湯姆", "big5")
```
</details>

### Infinite looting

When you click on a high-level monster (such as Dragon)'s dead body, you'll get some gold and very likely an item, sometimes the monster's body does not disappear and you can continue to click on it and get another bunch of gold and another item. By default, a high-level monster's body has a probability of 90% to disappear every time you click on it. Low-level monster's body always disappears. Below is the scripts to change the probability.

The following looting code is for MMMerge/MM8 only.

Change the probability (in percentage) of a dragon (or other high-level monster)'s body disappearing to 0 (it never disappears):

```lua
mem.IgnoreProtection(true)
mem.u1[0x4251F2] = 0
mem.IgnoreProtection(false)
```

Restore the probability (in percentage) of a dragon (or other high-level monster)'s body disappearing to 90:

```lua
mem.IgnoreProtection(true)
mem.u1[0x4251F2] = 90
mem.IgnoreProtection(false)
```

## Hotkey cheat

### Noclip Mode

* <kbd>Alt</kbd> + <kbd>F1</kbd>: noclip mode (you can go through walls in this mode; use <kbd>w</kbd><kbd>a</kbd><kbd>s</kbd><kbd>d</kbd> and the mouse to control the movement; press the hotkey again to end this mode; this is actually [MMEditor](https://grayface.github.io/mm/ext/)'s Map Editor mode)

# Other cheat tools and scripts

* [`cheat.lua`](https://github.com/might-and-magic/mm678-i18n/blob/master/cheat/cheat.lua): This file listed some of the most important cheat code
* [`mm8.CT`](https://github.com/might-and-magic/mm678-i18n/blob/master/cheat/mm8.CT): a cheat table file ([original post](https://fearlessrevolution.com/viewtopic.php?f=4&t=9058)) of [Cheat Engine](https://www.cheatengine.org/downloads.php), made by Jessen.
* [`cheat_test.lua`](https://github.com/might-and-magic/mm678-i18n/blob/master/cheat/cheat_test.lua): See the comments in [the script file](https://github.com/might-and-magic/mm678-i18n/tree/master/cheat/cheat_test.lua) for details, originally written by 1qwop0, modified by Tom CHEN. Usage: `CTRL+F1` to open the console, enter certain script lines, `CTRL+ENTER` to execute it.
* [`cheat_start_save`](https://github.com/might-and-magic/mm678-i18n/blob/master/cheat/cheat_start_save): cheated gamesave: high statistics at the beginning of game (in New Sorpigal), made by Tom CHEN. Usage: move `save000.dod` into `GAMEFOLDER/Saves`.
* [`cheat_additional_lua`](https://github.com/might-and-magic/mm678-i18n/blob/master/cheat/cheat_additional_lua): folder containing cheat scripts, all written by GrayFace (simple description can be found in the [original post](https://www.celestialheavens.com/forum/10/16657?start=2660#p376880)) except General/Summoner.lua by wuxiangjinxing. Usage: move them into `GAMEFOLDER/Scripts`. The scripts include:
  * [`Global/GodMode.lua`](https://github.com/might-and-magic/mm678-i18n/blob/master/cheat/cheat_additional_lua/Global/GodMode.lua): execute `god()` in console (CTRL+F1, type script, then CTRL+ENTER) to: get all spells; get all learned skills to Master 12; level 20 to all; clear conditions; full HP, SP
  * [`General/Summoner.lua`](https://github.com/might-and-magic/mm678-i18n/blob/master/cheat/cheat_additional_lua/General/Summoner.lua): Druid Summoning ALPHA script: Druid can summon creatures instead of normal spell if you hold CTRL key when casting an Earth spell. Same as [here](https://gitlab.com/cthscr/mmmerge/-/blob/master/Scripts/General/Summoner.lua)
  * [`General/Screenshot.lua`](https://github.com/might-and-magic/mm678-i18n/blob/master/cheat/cheat_additional_lua/General/Screenshot.lua): press PrintScreen key in the game to generate a BMP screenshot file in `Screenshots/`, 640x480 WITHOUT the 3D view
  * [`General/Additional UI.lua`](https://github.com/might-and-magic/mm678-i18n/blob/master/cheat/cheat_additional_lua/General/Additional%20UI.lua): some Additional UI
* [`Bolster - formulas.txt`](https://github.com/might-and-magic/mm678-i18n/blob/master/cheat/Bolster%20-%20formulas.txt): more reasonable Monster Bolster formula by Tom Chen & Fanasilver
* [MMMerge Snippets](https://gitlab.com/templayer/mmmerge/-/snippets): debug/cheat scripts by cthscr, Templayer, etc.
* [jeffszh/mm678alter](https://github.com/jeffszh/mm678alter): some game data alteration by jeffszh.
