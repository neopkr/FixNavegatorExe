const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("../../config.json");
const itemsdb = require("../../items.json");
let prefix = config.prefix;

function sendmsg(msg) {
    client.on("message", (message) => {
        message.channel.send(msg)
    });
}

function logToChannel(content, send) {
    client.on('message', (message) => {
        if (message.content.startsWith(prefix + content)) {
            message.channel.send(send);
        }
    });
}

class Items {
    constructor(nombre, description, atk, price, effect) {
        this.nombre = nombre,
            this.description = description,
            this.atk = atk,
            this.price = price
        this.effect = effect
    }
}
class Player {
    constructor(name, hp, hpFull, sp, spFull, baseAtk, baseDef, level, exp, isAlive) {
        this.name = name,
            this.hp = hp,
            this.hpFull = hpFull,
            this.sp = sp,
            this.spFull = spFull,
            this.baseAtk = baseAtk,
            this.baseDef = baseDef,
            this.level = level,
            this.exp = exp,
            this.isAlive = isAlive
    }
}
class Enemy {
    constructor(name, hp, hpFull, sp, spFull, baseAtk, baseDef, level, expDrop, isAlive) {
        this.name = name,
            this.hp = hp,
            this.hpFull = hpFull,
            this.sp = sp,
            this.spFull = spFull,
            this.baseAtk = baseAtk,
            this.baseDef = baseDef,
            this.level = level,
            this.expDrop = expDrop,
            this.isAlive = isAlive
    }
}

// basic enemy
const enemy_goblin = new Enemy("Goblin", 20, 20, 0, 0, 1, 10, 1, 5, true);
// items
const sword = new Items("Sword", "A very basic sword", 15, 1000);
const potion = new Items(itemsdb.name, itemsdb.description, 0, itemsdb.price, itemsdb.effect);
console.log(enemy_goblin);
console.log(sword);

client.on('message', (message) => {
    if (message.content.startsWith(prefix + "start")) {
        if (message.channel.type === "dm") {
            message.channel.send("You can't play in DM's yet!");

        } else {
            const user = message.author.id;
            const username = message.author.username;
            const player = new Player(username, 100, 100, 120, 120, 10, 15, 1, 0, true);
            console.log(player);
            const s = message.channel;
            s.send("Bienvenido, para empezar te introduciremos en las batallas, te enfretaras contra un goblin!");
            // sys log battle
            s.send(`**${enemy_goblin.name}** Lv.**${enemy_goblin.level}** HP: **${enemy_goblin.hp}/${enemy_goblin.hpFull}** SP: **${enemy_goblin.sp}/${enemy_goblin.spFull}**`
                + `\nATK **${enemy_goblin.baseAtk}** DEF **${enemy_goblin.baseDef}**`);
            s.send("-------------------------------------------------------------------------------------");
            s.send(`**${player.name}** Lv.**${player.level}** HP: **${player.hp}/${player.hpFull}** SP: **${player.sp}/${player.spFull}**`
                + `\nATK **${player.baseAtk}** DEF **${player.baseDef}**`);
            s.send("```Qué quieres hacer?\n >.Attack```");
            let filter = m => m.author.id === message.author.id
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 30000,
                errors: ['time']
            })
                .then(message => {
                    message = message.first()
                    if (message.content.startsWith(prefix + "Attack")) {
                        let accuracy = Math.floor(Math.random() * 11); // probability of 10
                        let decrement = player.baseAtk - accuracy;
                        let downHeal = enemy_goblin.hp - decrement;
                        enemy_goblin.hp = downHeal;
                        console.log(`acc ${accuracy}, dec ${decrement}, downHeal ${downHeal}, enemy_goblin.hp ${enemy_goblin.hp}`);
                        s.send(`**${enemy_goblin.name}** Lv.**${enemy_goblin.level}** HP: **${enemy_goblin.hp}/${enemy_goblin.hpFull}** SP: **${enemy_goblin.sp}/${enemy_goblin.spFull}**`
                            + `\nATK **${enemy_goblin.baseAtk}** DEF **${enemy_goblin.baseDef}**`);
                        s.send("-------------------------------------------------------------------------------------");
                        s.send(`**${player.name}** Lv.**${player.level}** HP: **${player.hp}/${player.hpFull}** SP: **${player.sp}/${player.spFull}**`
                            + `\nATK **${player.baseAtk}** DEF **${player.baseDef}**`);
                        s.send(`** Log Battle: You hit ${decrement}! **`);
                        s.send("**---------------------------------------------------------------------------------**");
                        let enemacc = Math.floor(Math.random() * 2);
                        let endec = enemy_goblin.baseAtk - enemacc;
                        let enDown = player.hp - endec;
                        player.hp = enDown;
                        s.send(`**${enemy_goblin.name}** Lv.**${enemy_goblin.level}** HP: **${enemy_goblin.hp}/${enemy_goblin.hpFull}** SP: **${enemy_goblin.sp}/${enemy_goblin.spFull}**`
                            + `\nATK **${enemy_goblin.baseAtk}** DEF **${enemy_goblin.baseDef}**`);
                        s.send("-------------------------------------------------------------------------------------");
                        s.send(`**${player.name}** Lv.**${player.level}** HP: **${player.hp}/${player.hpFull}** SP: **${player.sp}/${player.spFull}**`
                            + `\nATK **${player.baseAtk}** DEF **${player.baseDef}**`);
                        s.send(`** Waiting: ${enemy_goblin.name}**`);
                        s.send(`${enemy_goblin.name} hit you: ${endec}`);
                        // new format
                        s.send("**---------------------------------------------------------------------------------**");
                        s.send("**---------------------------------------------------------------------------------**");
                        s.send(`**${enemy_goblin.name}** Lv.**${enemy_goblin.level}** HP: **${enemy_goblin.hp}/${enemy_goblin.hpFull}** SP: **${enemy_goblin.sp}/${enemy_goblin.spFull}**`
                            + `\nATK **${enemy_goblin.baseAtk}** DEF **${enemy_goblin.baseDef}**`);
                        s.send("-------------------------------------------------------------------------------------");
                        s.send(`**${player.name}** Lv.**${player.level}** HP: **${player.hp}/${player.hpFull}** SP: **${player.sp}/${player.spFull}**`
                            + `\nATK **${player.baseAtk}** DEF **${player.baseDef}**`);
                        s.send("```Qué quieres hacer?\n >.Attack```");
                        let filer = b => b.author.id === message.author.id
                        message.channel.awaitMessages(filer, {
                            max: 1,
                            time: 30000,
                            errors: ['time']
                        }).then(message => {
                            message = message.first()
                            if (message.content.startsWith(prefix + "Attack")) {
                                let accuracy2 = Math.floor(Math.random() * 11); // probability of 10
                                let decrement2 = player.baseAtk - accuracy2;
                                let downHeal2 = enemy_goblin.hp - decrement2;
                                enemy_goblin.hp = downHeal2;
                                console.log(`acc ${accuracy2}, dec ${decrement2}, downHeal ${downHeal2}, enemy_goblin.hp ${enemy_goblin.hp}`);
                                s.send(`**${enemy_goblin.name}** Lv.**${enemy_goblin.level}** HP: **${enemy_goblin.hp}/${enemy_goblin.hpFull}** SP: **${enemy_goblin.sp}/${enemy_goblin.spFull}**`
                                    + `\nATK **${enemy_goblin.baseAtk}** DEF **${enemy_goblin.baseDef}**`);
                                s.send("-------------------------------------------------------------------------------------");
                                s.send(`**${player.name}** Lv.**${player.level}** HP: **${player.hp}/${player.hpFull}** SP: **${player.sp}/${player.spFull}**`
                                    + `\nATK **${player.baseAtk}** DEF **${player.baseDef}**`);
                                s.send(`** Log Battle: You hit ${decrement2}! **`);
                                // check
                                if (enemy_goblin.hp === 0) {
                                    enemy_goblin = false;
                                }
                                let enemacc2 = Math.floor(Math.random() * 2);
                                let endec2 = enemy_goblin.baseAtk - enemacc2;
                                let enDown2 = player.hp - endec2;
                                player.hp = enDown2;
                                s.send(`**${enemy_goblin.name}** Lv.**${enemy_goblin.level}** HP: **${enemy_goblin.hp}/${enemy_goblin.hpFull}** SP: **${enemy_goblin.sp}/${enemy_goblin.spFull}**`
                                    + `\nATK **${enemy_goblin.baseAtk}** DEF **${enemy_goblin.baseDef}**`);
                                s.send("-------------------------------------------------------------------------------------");
                                s.send(`**${player.name}** Lv.**${player.level}** HP: **${player.hp}/${player.hpFull}** SP: **${player.sp}/${player.spFull}**`
                                    + `\nATK **${player.baseAtk}** DEF **${player.baseDef}**`);
                                s.send(`** Waiting: ${enemy_goblin.name}**`);
                                s.send(`${enemy_goblin.name} hit you: ${endec2}`);
                            }
                        }).catch(colesio => {
                            message.channel.send("Timeout!");
                        });
                    }
                }).catch(collected => {
                    message.channel.send("Timeout!");
                });
        }
        message.channel.send("test");
    }
});

client.login(config.token);