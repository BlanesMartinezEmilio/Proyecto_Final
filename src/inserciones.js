/*
El precio esta expresado en euros, las unidades en ram y en almacenamiento son GB
*/

db.juegos.drop()
db.juegos.insertMany([
    {
        _id: 1,
        titulo: "Destiny 2",
        precio: 60,
        desarrolladora:["Bungie", "Activision"],
        pegi: 16,
        jugabilidad_mando: true,
        fechasalida:new Date("2017-09-06"),
        genero: ["FPS", "MMORPG", "3D", "Acción", "Looter Shooter"],
        njugadores: [1,2,3,4,5,6,7,8,9,10,11,12],
        especificaciones:[
            {
                minimas: true,
                procesador: "Intel Core i3",
                grafica: "GTX 660",
                memoria:{
                    ram: 6,
                    almacenamiento: 105}},
            {
                minimas: false,
                procesador: "Intel Core i5",
                grafica: "GTX 970",
                memoria:{
                    ram: 8,
                    almacenamiento: 105}}
        ],
        tienedlc: true,
        dlc:[
            {nombre: "Los Renegados",
            preciodlc: 25},
            {nombre: "Bastión de sombras",
            preciodlc: 25},
            {nombre: "Más alla de la luz",
            preciodlc: 40},
            {nombre: "La Reina bruja",
            preciodlc: 40}
        ],
    },
    { _id: 19, titulo: "Detroit: Become Human", precio: 40, desarrolladora:["Quantic Dream"], pegi: 18, jugabilidad_mando: true, fechasalida:new Date("2018-04-24"), genero:["3D", "Tercera Persona", "Múltiples finales", "Ciencia Ficción"], njugadores:[1], especificaciones:[{minimas: true, procesador: "Intel Core i5", grafica: "GTX 780", memoria:{ram: 8, almacenamiento: 55}},{minimas: false, procesador: "Intel Core i5", grafica: "GTX 1060", memoria:{ram: 12, almacenamiento: 55}}], tienedlc: false},
    { _id: 2, titulo: "Beyond: Two Souls", precio: 20, desarrolladora:["Quantic Dream"], pegi: 16, jugabilidad_mando: true, fechasalida:new Date("2013-10-08"), genero:["3D", "Tercera Persona", "Narración", "Cinemático"], njugadores:[1], especificaciones:[{minimas: true, procesador: "Intel Core i5", grafica: "GTX 660", memoria:{ram: 4, almacenamiento: 49}},{minimas: false, procesador: "Intel Core i5", grafica: "GTX 970", memoria:{ram: 8, almacenamiento: 49}}], tienedlc: false},
    { _id: 8, titulo: "Halo: The Master Chief Collection", precio: 40, desarrolladora:["Bungie"], pegi: 16, jugabilidad_mando: true, fechasalida:new Date("2019-12-03"), genero:["3D", "FPS", "Acción", "Ciencia Ficción"], njugadores:[1,2,3,4,5,6,7,8,9,10,11,12], especificaciones:[{minimas: true, procesador: "Intel Core i3", grafica: "GTX 450", memoria:{ram: 6, almacenamiento: 43}},{minimas: false, procesador:"Intel Core i3", grafica: "GTX 450", memoria:{ram: 6, almacenamiento: 43}}], tienedlc: false},
    { _id: 16, titulo: "Battlefield 2042", precio: 60, desarrolladora:["DICE", "Electronic Arts"], pegi: 16, jugabilidad_mando: true, fechasalida:new Date("2021-11-12"), genero:["3D", "FPS", "Acción", "ARPG"], njugadores:[1,2,3,4], especificaciones:[{minimas: true, procesador: "Intel Core i5", grafica: "GTX 1050", memoria:{ram: 8, almacenamiento: 100}},{minimas: false, procesador: "Intel Core i7", grafica: "GTX 3060", memoria:{ram: 16, almacenamiento: 100}}], tienedlc: false},
    { _id: 4, titulo: "Titanfall 2", precio: 30, desarrolladora:["Respawn", "Electronic Arts"], pegi: 16, jugabilidad_mando: true, fechasalida:new Date("2016-10-28"), genero:["3D", "FPS", "Acción", "Parkour"], njugadores:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], especificaciones:[{minimas: true, procesador: "Intel Core i3", grafica: "GTX 660", memoria:{ram: 8, almacenamiento: 45}},{minimas: false, procesador: "Intel Core i5", grafica: "GTX 1060", memoria:{ram: 16, almacenamiento: 45}}], tienedlc: false},
    { _id: 11, titulo: "Apex Legends", precio: 0, desarrolladora:["Respawn", "Electronic Arts"], pegi: 16, jugabilidad_mando: true, fechasalida:new Date("2019-02-04"), genero:["3D", "FPS", "Acción", "Battle Royale", "Supervivencia"], njugadores:[1,2,3], especificaciones:[{minimas: true, procesador: "Intel Core i3", grafica: "GTX 640", memoria:{ram: 6, almacenamiento: 56}},{minimas: false, procesador: "Intel Core i5", grafica: "GTX 970", memoria:{ram: 8 , almacenamiento: 56}}], tienedlc: false},
    { _id: 7, titulo: "Marvel's Guardians of the Galaxy", precio: 60, desarrolladora:["Square Enix"], pegi: 16, jugabilidad_mando: true, fechasalida:new Date("2021-10-26"), genero:["3D", "Third-Person Shooter", "Acción", "RPG"], njugadores:[1], especificaciones:[{minimas: true, procesador: "Intel Core i5", grafica: "GTX 1060", memoria:{ram: 8, almacenamiento: 80}},{minimas: false, procesador: "Intel Core i7", grafica: "GTX 1660", memoria:{ram: 16, almacenamiento: 80}}], tienedlc: false},
    { _id: 20, titulo: "Rise of the Tomb Raider", precio: 30, desarrolladora:["Crystal Dynamics", "Square Enix"], pegi: 18, jugabilidad_mando: true, fechasalida:new Date("2016-02-09"), genero:["3D", "Tercera Persona", "Acción", "RPG"], njugadores:[1], especificaciones:[{minimas: true, procesador: "Intel Core i3", grafica: "GTX 650", memoria:{ram: 6, almacenamiento: 25}},{minimas: false, procesador: "Intel Core i7", grafica: "GTX 980", memoria:{ram: 8, almacenamiento: 25}}], tienedlc: false},
    { _id: 15, titulo: "Assassin's Creed Odyssey", precio: 60, desarrolladora:["Ubisoft"], pegi: 18, jugabilidad_mando: false, fechasalida:new Date("2018-10-05"), genero:["3D", "Acción", "Tercera Persona", "RPG"], njugadores:[1], especificaciones:[{minimas: true, procesador: "Intel Core i5", grafica: "GTX 660", memoria:{ram:8, almacenamiento:50}},{minimas: false, procesador: "Intel Core i7", grafica: "GTX 970", memoria:{ram: 8, almacenamiento: 50}}], tienedlc: true, dlc:[{nombre: "Legacy of the First Blade", preciodlc: 25},{nombre: "The Fate of Atlantis", preciodlc: 25}]},
    { _id: 5, titulo: "The Elder Scrolls IV: Oblivion", precio: 20, desarrolladora:["Bethesda"], pegi: 16, jugabilidad_mando: true, fechasalida:new Date("2007-09-11"), genero:["3D", "Sandbox", "RPG", "Primera Persona", "Acción"], njugadores:[1], especificaciones:[{minimas: true, procesador: "Intel Core i2", grafica: "GTX 400", memoria:{ram: 0.5, almacenamiento: 4.6}},{minimas: false, procesador: "Intel Core i2", grafica: "GTX 400", memoria:{ram: 0.5, almacenamiento: 4.6}}], tienedlc: true, dlc:[{nombre: "Shivering Isles", preciodlc: 5}, {nombre: "Knights of the Nine", preciodlc: 5}]},
    { _id: 14, titulo: "The Witcher 3: Wild Hunt", precio: 30, desarrolladora:["CD PROJEKT RED"], pegi: 18, jugabilidad_mando: true, fechasalida:new Date("2015-05-18"), genero:["3D", "RPG", "Tercera Persona", "Sandbox", "Acción"], njugadores:[1], especificaciones:[{minimas: true, procesador: "Intel Core i5", grafica: "GTX 660", memoria:{ram: 6, almacenamiento: 35}},{minimas: false, procesador: "Intel Core i7", grafica: "GTX 770", memoria:{ram: 8, almacenamiento: 35}}], tienedlc: true, dlc:[{nombre: "Hearts of Stone", preciodlc: 10}]},
    { _id: 17, titulo: "Los Sims 4", precio: 40, desarrolladora:["Maxis", "Electronic Arts"], pegi: 12, jugabilidad_mando: false, fechasalida:new Date("2014-09-02"), genero:["3D", "Casual", "Tercera Persona", "Simulador", "Sandbox"], njugadores:[1], especificaciones:[{minimas: true, procesador: "Intel Core i2", grafica: "GTX 400", memoria:{ram: 4, almacenamiento: 17}},{minimas: false, procesador: "Intel Core i5", grafica: "GTX 650", memoria:{ram: 8, almacenamiento: 18}}], tienedlc: true, dlc:[{nombre: "¡A trabajar!", preciodlc: 40},{nombre: "City Living", preciodlc: 40},{nombre: "Vampires", preciodlc: 20},{nombre: "Realm of Magic", preciodlc: 20}]},
    { _id: 6, titulo: "Minecraft", precio: 20, desarrolladora:["Mojang"], pegi: 7, jugabilidad_mando: true, fechasalida:new Date("2011-11-18"), genero:["3D", "Sandbox", "Casual", "Supervivencia"], njugadores:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], especificaciones:[{minimas: true, procesador: "Intel Core i3", grafica: "GTX 400", memoria:{ram: 4, almacenamiento: 1}},{minimas: false, procesador: "Intel Core i5", grafica: "GT 700", memoria:{ram: 8, almacenamiento: 4}}], tienedlc: false},
    { _id: 10, titulo: "Dark Souls II", precio: 30, desarrolladora:["FromSoftware, Inc", "BANDAI NAMCO"], pegi: 16, jugabilidad_mando: true, fechasalida:new Date("2014-03-11"), genero:["ARPG","Acción","Tercera Persona", "3D", "Souls"], njugadores:[1], especificaciones:[{minimas: true, procesador:"Intel Core i2", grafica:"GTX 400", memoria:{ram: 2, almacenamiento: 12}},{minimas: false, procesador:"Intel Core i3", grafica: "GTX 750", memoria:{ram: 4, almacenamiento: 15}}], tienedlc: true, dlc:[{nombre:"Crown of the Sunken King", preciodlc: 10},{nombre:"Crown of the Old Iron King", preciodlc: 10},{nombre:"Crown of the Ivory King", preciodlc: 10}]},
    { _id: 18, titulo: "Hollow Knight", precio: 20, desarrolladora:["Team Cherry"], pegi: 7, jugabilidad_mando: true, fechasalida:new Date("2017-02-24"), genero:["2D", "Tercera Persona", "Souls", "Indie", "Acción"], njugadores:[1], especificaciones:[{minimas: true, procesador: "Intel Core i2", grafica: "GTX 400", memoria:{ram: 4, almacenamiento: 9}},{minimas: false, procesador: "Intel Core i5", grafica: "GTX 560", memoria:{ram: 8, almacenamiento: 9}}], tienedlc: false},
    { _id: 9, titulo: "Stardew Valley", precio: 10, desarrolladora:["ConcernedApe"], pegi: 12, jugabilidad_mando: true, fechasalida:new Date("2016-02-26"), genero:["Indie", "Tercera Persona", "Sandbox", "2D", "Casual"], njugadores:[1,2,3,4], especificaciones:[{minimas: true, procesador: "Intel Core i2", grafica: "GTX 400", memoria:{ram: 2, almacenamiento: 0.5}},{minimas: false, procesador: "Intel Core i2", grafica: "GTX 400", memoria:{ram: 2, almacenamiento: 0.5}}], tienedlc: false},
    { _id: 12, titulo: "Fortnite", precio: 0, desarrolladora:["Epic Games"], pegi: 12, jugabilidad_mando: true, fechasalida:new Date("2017-06-25"), genero:["Third-Person Shooter", "Supervivencia", "Battle Royale", "3D", "Acción"], njugadores:[1,2,3,4], especificaciones:[{minimas: true, procesador: "Intel Core i3", grafica: "GTX 400", memoria:{ram: 4, almacenamiento:30}},{minimas: false, procesador: "Intel Core i5", grafica: "GTX 960", memoria:{ram: 8, almacenamiento:30}}], tienedlc: false},
    { _id: 3, titulo: "StarCraft II", precio: 0, desarrolladora:["Blizzard"], pegi: 16, jugabilidad_mando: false, fechasalida:new Date("2010-07-27"), genero:["RTS", "3D", "Tercera Persona", "MOBA", "Gestión"], njugadores:[1,2,3,4,5,6,7,8], especificaciones:[{minimas: true, procesador: "Intel Core i2", grafica: "GTX 400", memoria:{ram: 1, almacenamiento: 12}},{minimas: false, procesador: "Intel Core i3", grafica: "GTX 400", memoria:{ram: 2, almacenamiento: 12}}], tienedlc: false,},
    { _id: 13, titulo: "League of Legends", precio: 0, desarrolladora:["Riot Games", "Tencent"], pegi: 12, jugabilidad_mando: false, fechasalida:new Date("2009-10-27"), genero:["Acción", "3D", "MOBA", "Tercera Persona", "Estrategia"], njugadores:[1,2,3,4,5,6,7,8,9,10], especificaciones:[{minimas: true, procesador: "Intel Core i2", grafica: "GTX 400", memoria:{ram: 1, almacenamiento: 8}},{minimas: false, procesador: "Intel Core i3", grafica: "GTX 400", memoria:{ram: 2, almacenamiento: 12}}], tienedlc: false}
])
