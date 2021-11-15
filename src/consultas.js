/*Unos compañeros de trabajo y yo queremos buscar un juego en el que podamos participar todos,
somos unas 12 personas y buscamos un juego de acción en primera persona*/
db.juegos.find( {$and: [{ njugadores: { $gte: 12}}, {genero: {$in: ["FPS","Primera Persona","Acción"]}}]},{_id: 0, titulo: 1, njugadores: 1, genero: 1})

/*Quiero regalarle a mi primo que tiene 14 años un juego, pero no puedo gastarme mas de 40 euros
y su ordenador, que tiene un Intel Core i3 y una grafica GTX 450, debe ser capaz de procesarlo*/
db.juegos.find(
    {$and: [
        {pegi: {$lt: 14}},
        {precio: {$lte: 40}},
        {$or: [
            {"especificaciones.procesador": {$regex: /^i3/}},
            {"especificaciones.procesador": {$regex: /^i2/}},
            {"especificaciones.grafica": {$regex: /^GTX 450/}},
            {"especificaciones.grafica": {$regex: /^GTX 400/}}]}]},
        {_id: 0, titulo: 1, precio: 1, especificaciones: 1}
)

/*Un amigo me ha recomendado un juego, no recuerdo el nombre pero si me acuerdo que se puede jugar con mando,
que es un juego de acción y que ha sido desarrollado por DICE*/
db.juegos.find({$and: [{jugabilidad_mando: true},{genero: "Acción"},{desarrolladora: "DICE"}]},{_id: 0, titulo: 1, jugabilidad_mando: 1, desarrolladora: 1, genero: 1})

/*Quiero encontrar todos los juegos en esta base de datos en los que ha participado una desarrolladora llamada
Electronic Arts o Elektronik Arts pero no recuerdo cual de las dos era*/
db.juegos.find({desarrolladora: {$regex: /Ele.troni. Arts/}},{titulo: 1, desarrolladora: 1})

/*Unos amigos han tenido una pequeña discusion porque dicen que todos los juegos de la base de datos que salieron
despues de 2015 son de accion, mientras que otros amigos lo niegan, quiero descubrir quien tiene razón*/
db.juegos.find({$and: [{fechasalida: {$gte: new Date("2015-01-01")}}, {genero: {$ne: "Acción"}}]},{titulo: 1, fechasalida: 1, genero: 1})

/*Un amigo se compro hace poco Los Sims 4 con algunos de sus dlc, se que no pudo comprarse un dlc que costaba menos de 30 euros,
quiero saber cuantos dlc hay por ese precio*/
db.juegos.find({$and: [{titulo: "Los Sims 4"}, {"dlc.preciodlc": {$lt: 30}}]},{_id: 0, titulo: 1, dlc: {$slice:-2}})

/*Deseaba buscar todos los juegos 3D con dlc*/
db.juegos.find({$nor:[{genero: "2D"}, {tienedlc: false}]}, {_id: 0, titulo: 1})

//  Expresa los juegos en los que el precio base supera a los dlc
db.juegos.find( {$and: [{tienedlc: true},{ $expr: { $gte: [ "$precio" , "$$ROOT.preciodlc" ] } } ] }, {_id:0,titulo:1,precio:1,dlc:1})

//  En el caso de que mi base de datos no tuviese el booleano tienedlc, se puede usar el siguiente comando
//  para ver todos los elementos que tienen el campo dlc
db.juegos.find({dlc:{$exists: true}}, {titulo:1,dlc:1})

//  Expresa los distintos precios que toman los juegos en la base de datos
db.juegos.aggregate([{$group: {_id :"$precio"}}])

// Expresa todos los elementos en los que el valor precio dividido entre 4 da 0 de resto
db.juegos.find( { precio: { $mod: [ 4, 0 ] } }, {titulo:1,precio:1})