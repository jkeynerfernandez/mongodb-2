
db.createCollection('usuarios');
db.usuarios.insertMany([{ //insertMany agrega varios objetos  en un solo bloque  a diferencia de inserOne
    nombre: 'Keyner',
    apellidos: 'Fernandez',
    correo: 'correoKeyner',
    ciudad: 'Medellin',
    pais:'Colombia',
    salario:3000,           //dolares
    edad:24,                //numeros
    altura:184,             //centimetros
    peso:168                //libras


},
{
    nombre: 'Juan',
    apellidos: 'Perez',
    correo: 'correoJuan',
    ciudad: 'Medellin',
    pais:'Colombia',
    genero: 'M',
    salario:3000,           //dolares
    edad:25,                //numeros
    altura:190,             //centimetros
    peso:170                //libras
},
{
    nombre: 'Monica',
    apellidos: 'Gallardo',
    correo: 'correoMonica',
    ciudad: 'Londres',
    pais:'inglaterra',
    genero: 'F',
    edad: 22,
    salario:1200,           //dolares
    edad:18,                //numeros
    altura:150,             //centimetros
    peso:100                //libras
},
{
    nombre: 'Pepe',
    apellidos: 'Giraldo',
    correo: 'correoPepe',
    ciudad: 'Parìs',
    pais:'Francia',
    genero: 'M',
    edad: 23,               //numeros
    salario:1000,           //dolares
    altura:184,             //centimetros
    peso:168                //libras
},
{
    nombre: 'Sara',
    apellidos: 'Hincapie',
    correo: 'correoSara',
    ciudad: 'madrid',
    pais:'españa',
    genero: 'F',
    edad: 24,               //numeros
    salario:1500,           //dolares
    altura:100,             //centimetros
    peso:60                //libras
},{
    nombre: 'Jose',
    apellidos: 'Rosario',
    correo: 'correoJose',
    ciudad: 'Londres',
    pais:'inglaterra',
    genero: 'M',
    edad: 25,               //numeros
    salario:1000,           //dolares
    altura:184,             //centimetros
    peso:168                //libras
},{
    nombre: 'Gabriel',
    apellidos: 'Fernandez',
    correo: 'correoGabiel',
    ciudad: 'Parìs',
    pais:'Francia',
    genero: 'F',
    edad: 24,               //numeros
    salario:1500,           //dolares
    altura:100,             //centimetros
    peso:60                //libras
},
{
    nombre: 'Milena',
    apellidos: 'Perez',
    correo: 'correoMilena',
    ciudad: 'ciudadMexico',
    pais:'Mexico',
    genero: 'F',
    edad: 48,               //numeros
    salario:5000,           //dolares
    altura:174,             //centimetros
    peso:120                //libras

},
{
    nombre: 'Alejandro',
    apellidos: 'Gallardo',
    correo: 'correoAlejandro',
    ciudad: 'Bello',
    pais:'Colombia',
    genero: 'M',
    edad: 22,               //numeros
    salario:1500,           //dolares
    altura:160,             //centimetros
    peso:160                //libras
},
{
    nombre: 'Ramiro',
    apellidos: 'Torres',
    correo: 'correoRamiro',
    ciudad: 'Londres',
    pais:'inglaterra',
    genero: 'M',
    edad: 16,               //numeros
    salario:1500,           //dolares
    altura:100,             //centimetros
    peso:148                //libras
},
{
    nombre: 'Jhoana',
    apellidos: 'Maya',
    correo: 'correoMaya',
    ciudad: 'Parìs',
    pais:'Francia',
    genero: 'F',
    edad: 17,               //numeros
    salario:5000,           //dolares
    altura:174,             //centimetros
    peso:120                //libras
},{
    nombre: 'Anderson',
    apellidos: 'Jose',
    correo: 'correoAnderson',
    ciudad: 'Nueva Dheli',
    pais:'India',
    genero: 'M',
    edad: 48,               //numeros
    altura:174,             //centimetros
    peso:120                //libras
}]


);

/*
1.Incrementar el salario de todos los usuarios en un 10%.
2.Cambiar la ciudad de residencia de los usuarios que actualmente viven en "New York" a "Los Ángeles".
3.Agregar el correo electrónico "nuevo@riwi.com" al usuario con nombre "Juan" y apellido "Perez".
4.Actualizar la edad del usuario con correo electrónico "ejemplo@riwi.es" a 35 años.
5.Cambiar el país de residencia de los usuarios que son de "Mexico" a "Canada".
6.Aumentar la altura de todos los usuarios en 5 centímetros.
7.Cambiar el apellido del usuario con correo electrónico "otro@riwi.net" a "González".
8.Actualizar el peso del usuario con nombre "Maria" a 140 libras.
9.Incrementar el salario de todos los usuarios que son de "Estados Unidos" en un 15%.
10.Actualizar el correo electrónico del usuario con nombre "Pedro" a "nuevo_correo@riwi.co".
11.Cambiar la edad de todos los usuarios menores de 30 años a 30 años.
12.Incrementar el salario de los usuarios que tienen un salario inferior a 3000 dólares en un 20%.
13.Actualizar la ciudad de residencia de todos los usuarios que actualmente viven en "Bogotá" a "Medellín".
14.Cambiar el país de residencia de los usuarios con un salario superior a 5000 dólares a "Australia".
15.Reducir la edad de todos los usuarios que tienen más de 50 años en 5 años.
16.Actualizar el peso de los usuarios que pesan más de 200 libras a 180 libras.
17.Incrementar el salario de los usuarios que viven en "London" en un 25%.
18.Cambiar el apellido de los usuarios con un salario superior a 4000 dólares a "Smith".
19.Actualizar el correo electrónico de todos los usuarios cuyo nombre empiece por "A" a "nuevo@riwi.es".
20.Cambiar la ciudad de residencia de los usuarios con una altura inferior a 160 centímetros a "París".
*/


db.usuarios.find();//comprebo que sì existan los datos usuarios

//1.Incrementar el salario de todos los usuarios en un 10%.
db.usuarios.updateMany({salario:{$gt:0}},{$mul:{salario:1.1}}); //selecciono todos los salaros >0 

//2.Cambiar la ciudad de residencia de los usuarios que actualmente viven en "New York" a "Los ��ngeles".


//como no tengo usuarios en newyork, lo voy a crear:

db.usuarios.insertOne({
    nombre: "Juan",
    apellido: "Perez",
    correo:'correoJuanPerez',
    ciudad: "New York",
    pais: "Estados unidos ",
    genero: "M",
    edad: 35,
    salario: 3000,
    altura:'180',
    peso:'170'
    
});

db.usuarios.insertOne({
    nombre: "Juan",
    apellido: "Perez",
    correo:'correoJuanPerez',
    ciudad: "Los Ángeles",
    pais: "Estados unidos ",
    genero: "M",
    edad: 35,
    salario: 3000,
    altura:'180',
    peso:'170'
    
});
db.usuarios.find({ciudad:{$regex:/^Los/}});


db.usuarios.updateMany({ciudad:"New York"},{$set:{ciudad:"Los Ángeles"}});



//3.Agregar el correo electrónico "nuevo@riwi.com" al usuario con nombre "Juan" y apellido "Perez".

db.usuarios.updateOne(
    { $and: [{ nombre: "Juan" }, { apellido: "Perez" }] }, // Filtro para seleccionar el usuario con nombre "Juan" y apellido "Perez"
    { $set: { correo: 'nuevo@riwi.com' } } // Agrega el correo electrónico "nuevo@riwi.com"
);

//4.Actualizar la edad del usuario con correo electrónico "ejemplo@riwi.es" a 35 años.
db.usuarios.updateMany({correo:{$eq:"ejemplo@riwi.es"}},{$set:{edad:35}});

db.usuarios.insertOne({
    nombre: "Carlos",
    apellido: "Perea",
    correo:'ejemplo@riwi.es',
    ciudad: "Los Ángeles",
    pais: "Estados unidos ",
    genero: "M",
    edad: 99,
    salario: 3000,
    altura:'180',
    peso:'170'
    
});

db.usuarios.find({correo:{$eq:"ejemplo@riwi.es"}});//comprobar 


//5.Cambiar el país de residencia de los usuarios que son de "Mexico" a "Canada".
db.usuarios.find({pais:{$eq:"Canada"}});//comprobar si exiten 

db.usuarios.updateMany({pais:{$eq:"Mexico"}},{$set:{pais:"Canada"}});

//6.Aumentar la altura de todos los usuarios en 5 centímetros.

db.usuarios.updateMany({altura:{$gt:0}},{$inc:{altura:5}});


//7.Cambiar el apellido del usuario con correo electrónico "otro@riwi.net" a "González".

db.usuarios.insertOne({
    nombre: "Camilo",
    apellido: "Perea",
    correo:'otro@riwi.net',
    ciudad: "Los Ángeles",
    pais: "Estados unidos ",
    genero: "M",
    edad: 99,
    salario: 3000,
    altura:'180',
    peso:'170'
    
});

db.usuarios.updateOne({correo:{$eq:"otro@riwi.net"}},{$set:{apellido:"Gonazàles"}});

//8.Actualizar el peso del usuario con nombre "Maria" a 140 libras.

db.usuarios.updateMany({nombre:{$eq:"Maria"}},{$set:{peso:140}});

// 9.Incrementar el salario de todos los usuarios que son de "Estados Unidos" en un 15%.
db.usuarios.insertOne({

    nombre: "Juan",
    apellido: "Perez",
    correo:'correoJuanPerez',
    ciudad: "New York",
    pais: "Estados Unidos",
    genero: "M",
    edad: 35, 
    salario: 3000,
    altura:'180',
    peso:'170'
});
db.usuarios.updateMany({pais:{$eq:"Estados Unidos"}},{$mul:{salario:1.15}});
db.usuarios.find({pais:{$eq:"Estados Unidos"}});


// 10.Actualizar el correo electrónico del usuario con nombre "Pedro" a "nuevo_correo@riwi.co".
db.usuarios.insertOne({

    nombre: "Pedro",
    apellido: "Castaño",
    correo:'correoJuanPerez',
    ciudad: "New York",
    pais: "Estados Unidos",
    genero: "M",
    edad: 35, 
    salario: 3000,
    altura:'180',
    peso:'170'
});
db.usuarios.updateOne({nombre:'Pedro'},{$set:{correo:"nuevo_correo@riwi.co"}});
db.usuarios.find({nombre:{$eq:'Pedro'}});
// 11.Cambiar la edad de todos los usuarios menores de 30 años a 30 años.

db.usuarios.updateMany({edad:{$lt:30}},{$set:{edad:30}});
db.usuarios.find({edad:{$lt:30}});
// 12.Incrementar el salario de los usuarios que tienen un salario inferior a 3000 dólares en un 20%.
db.usuarios.updateMany({salario:{$lt:3000}},{$mul:{salario:1.20}});


// 13.Actualizar la ciudad de residencia de todos los usuarios que actualmente viven en "Bogotá" a "Medellín".
db.usuarios.updateMany({ciudad:{$lt:"Bogotá"}},{$set:{ciudad:"Medellin"}});
// 14.Cambiar el país de residencia de los usuarios con un salario superior a 5000 dólares a "Australia".
db.usuarios.insertOne({

    nombre: "Pedro",
    apellido: "Castaño",
    correo:'correoJuanPerez',
    ciudad: "New York",
    pais: "Estados Unidos",
    genero: "M",
    edad: 35, 
    salario: 5000.1,
    altura:'180',
    peso:'170'
});
db.usuarios.updateMany({salario:{$gt:5000}},{$set:{pais:'Australia'}});
// 15.Reducir la edad de todos los usuarios que tienen más de 50 años en 5 años.

db.usuarios.updateMany({edad:{$gt:50}},{$inc:{edad:-5}});
db.usuarios.find({edad:{$gt:50}});

// 16.Actualizar el peso de los usuarios que pesan más de 200 libras a 180 libras.

db.usuarios.updateMany({peso:{$gt:200}},{$set:{peso:180}});

// 17.Incrementar el salario de los usuarios que viven en "London" en un 25%.

db.usuarios.updateMany({ciudad:{$eq:"London"}},{$mul:{salario:1.25}});
// 18.Cambiar el apellido de los usuarios con un salario superior a 4000 dólares a "Smith".

db.usuarios.updateMany({salario:{$gt:4000}},{$set:{apellido:"Smith"}});
// 19.Actualizar el correo electrónico de todos los usuarios cuyo nombre empiece por "A" a "nuevo@riwi.es".
db.usuarios.insertOne({

    nombre: "Alfredo",
    apellido: "Castaño",
    correo:'correoJuanPerez',
    ciudad: "New York",
    pais: "Estados Unidos",
    genero: "M",
    edad: 35, 
    salario: 5000.1,
    altura:'180',
    peso:'170'
});

db.usuarios.updateMany({nombre:{$regex:/^A/}},{$set:{correo:"nuevo@riwi.es"}});

// 20.Cambiar la ciudad de residencia de los usuarios con una altura inferior a 160 centímetros a "París".

db.usuarios.updateMany({altura:{$lt:160}},{$set:{ciudad:"París"}});





///////////////////////////////////////////////////////////////////////////////////
/////////////////////////Eliminar/////////////////////////////////////////////////

/*

1.Eliminar todos los usuarios que tienen un salario menor que 2000 dólares.
2.Eliminar usuarios que tienen una edad menor que 25 años.
3.Borrar todos los usuarios que viven en "París".
4.Eliminar usuarios que tienen un peso superior a 180 libras.
5.Eliminar usuarios que tienen una altura inferior a 160 centímetros.
6.Eliminar todos los usuarios que tienen el nombre "John" y el apellido "Doe".
7.Borrar usuarios que tienen una dirección de correo electrónico específica, por ejemplo, "borrar@riwi.com".
8.Eliminar usuarios que no tienen una dirección de correo electrónico registrada.
9.Eliminar usuarios que viven en "Tokyo".
10.Borrar todos los usuarios que son menores de 18 años.
11.Eliminar usuarios que tienen un salario igual a 0.
12.Borrar usuarios que viven en "New York" y tienen un salario superior a 5000 dólares.
13.Eliminar usuarios que tienen una dirección de correo electrónico que contiene la palabra "spam".
14.Borrar usuarios que viven en "Bello" y tienen más de 50 años.
15.Eliminar todos los usuarios que tienen el apellido "González".
16.Borrar usuarios que tienen una edad superior a 70 años.
17.Eliminar usuarios que tienen un país de residencia igual a "Canadá" y un salario inferior a 4000 dólares.
18.Borrar usuarios que tienen un salario entre 1000 y 2000 dólares.
19.Eliminar usuarios que tienen una edad igual a 30 años.
20.Borrar usuarios que tienen una altura superior a 190 centímetros.*/



//1.Eliminar todos los usuarios que tienen un salario menor que 2000 dólares.   
db.usuarios.deleteMany({salario:{$lt:2000}});

//2.Eliminar usuarios que tienen una edad menor que 25 años.
db.usuarios.deleteMany({edad:{$lt:25}});

//3.Borrar todos los usuarios que viven en "París".
db.usuarios.deleteMany({ciudad:{$eq:"Parìs"}});

//4.Eliminar usuarios que tienen un peso superior a 180 libras.
db.usuarios.find({peso:{$gt:180}});
db.usuarios.deleteMany({peso:{$gt:180}});

//5.Eliminar usuarios que tienen una altura inferior a 160 centímetros.
db.usuarios.deleteMany({altura:{$lt:160}});

//6.Eliminar todos los usuarios que tienen el nombre "John" y el apellido "Doe".

db.usuarios.insertMany([
    
{
    nombre: "John",
    apellido: "Doe",
    correo:'otro1@riwi.net',
    ciudad: "Los Ángeles",
    pais: "Estados unidos ",
    genero: "M",
    edad: 99,
    salario: 3000,
    altura:'180',
    peso:'170'
    
},
{
    nombre: "John",
    apellido: "Hernandez",
    correo:'otro2@riwi.net',
    ciudad: "Los Ángeles",
    pais: "Estados unidos ",
    genero: "M",
    edad: 99,
    salario: 3000,
    altura:'180',
    peso:'170'
    
},
{
    nombre: "Camilo",
    apellido: "Doe",
    correo:'otro3@riwi.net',
    ciudad: "Los Ángeles",
    pais: "Estados unidos ",
    genero: "M",
    edad: 99,
    salario: 3000,
    altura:'180',
    peso:'170'
    
}
 
    
]);

db.usuarios.deleteMany({$and:[{nombre:{$eq:"John"}},{apellido:{$eq:"Doe"}}]});

//7.Borrar usuarios que tienen una dirección de correo electrónico específica, por ejemplo, "borrar@riwi.com".
db.usuarios.deleteMany({correo:{$eq:"otro3@riwi.net"}})

//8.Eliminar usuarios que no tienen una dirección de correo electrónico registrada.
db.usuarios.insertOne(
    {
        nombre: "Johnatan",
        apellido: "Doe",
        ciudad: "Los Ángeles",
        pais: "Estados unidos ",
        genero: "M",
        edad: 99,
        salario: 3000,
        altura:'180',
        peso:'170'
    }
);

db.usuarios.deleteMany({correo:{$exists:false}});

//9.Eliminar usuarios que viven en "Tokyo".
db.usuarios.insertOne(
    {
        nombre: "Johnatan",
        apellido: "Doe",
        ciudad: "Tokyo",
        pais: "Japon",
        genero: "M",
        edad: 99,
        salario: 3000,
        altura:'180',
        peso:'170'
    }
);

db.usuarios.deleteMany({ciudad:{$eq:"Tokyo"}});

//10.Borrar todos los usuarios que son menores de 18 años.
db.usuarios.deleteMany({edad:{$lt:18}});

//11.Eliminar usuarios que tienen un salario igual a 0.

db.usuarios.insertMany(
    [{
        nombre: "Johnatan",
        apellido: "Doe",
        ciudad: "Bello",
        pais: "Japon",
        genero: "M",
        edad: 99,
        salario: 0,
        altura:'180',
        peso:'170'
    },
    {
        nombre: "Johnatan",
        apellido: "Doe",
        ciudad: "Bello",
        pais: "Japon",
        genero: "M",
        edad: 99,
        salario: 0.000001,
        altura:'180',
        peso:'170'
    }

]
);

db.usuarios.deleteMany({salario:{$eq:0}});

//12.Borrar usuarios que viven en "New York" y tienen un salario superior a 5000 dólares.

db.usuarios.insertOne(
    {
        nombre: "Johnatan",
        apellido: "Doe",
        ciudad: "New York",
        pais: "Japon",
        genero: "M",
        edad: 99,
        salario: 5000.0000000001,
        altura:'180',
        peso:'170'
    }
);
db.usuarios.deleteMany({$and:[{ciudad:{$eq:"New York"}},{salario:{$gt:5000}}]});

//13.Eliminar usuarios que tienen una dirección de correo electrónico que contiene la palabra "spam".
db.usuarios.insertMany(
    [{
        nombre: "Johnatan",
        apellido: "Doe",
        ciudad: "New York",
        pais: "Japon",
        genero: "M",
        correo:"correospam@correo.com",
        edad: 99,
        salario: 5000,
        altura:'180',
        peso:'170'

    },
    {
        nombre: "Johnatan",
        apellido: "Doe",
        ciudad: "New York",
        pais: "Japon",
        genero: "M",
        correo:"spam@correo.com",
        edad: 99,
        salario: 5000,
        altura:'180',
        peso:'170'

    }

]
);

db.usuarios.deleteMany({correo:{$regex:"spam"}});

//14.Borrar todos los usuarios que viven en Bello y tienen más de 50 años.

db.usuarios.insertOne(
    {
        nombre: "Johnatan",
        apellido: "Doe",
        ciudad: "Bello",
        pais: "Colombia",
        genero: "M",
        edad: 99,
        salario: 5000,
        altura:'180',
        peso:'170'
    }
);

db.usuarios.deleteMany({$and:[{ciudad:{$eq:"Bello"}},{edad:{$gt:50}}]});

//15.Eliminar todos los usuarios que tienen el apellido "González".

db.usuarios.insertOne(
    {
        nombre: "Johnatan",
        apellido: "González",
        ciudad: "Bello",
        pais: "Colombia",
        genero: "M",
        edad: 99,
        salario: 5000,
        altura:'180',
        peso:'170'
    }
);

db.usuarios.deleteMany({apellido:{$eq:"González"}});

//16.Borrar todos los usuarios que son mayores a 70 años.

db.usuario.deleteMany({edad:{$gt:70}});

//17.Eliminar usuarios que tienen un país de residencia igual a "Canadá" y un salario inferior a 4000 dólares.
db.usuario.deleteMany({$and:[{pais:{$eq:"Canada"}},{salario:{$lt:4000}}]});

//8.Borrar usuarios que tienen un salario entre 1000 y 2000 dólares.

db.usuario.deleteMany({$and:[{salario:{$gte:1000}},{salario:{$lte:2000}}]});
//19.Eliminar usuarios que tienen una edad igual a 30 años.

db.usuario.deleteMany({edad:{$eq:30}});
//20.Borrar usuarios que tienen una altura superior a 190 centímetros.*/

db.usuario.deleteMany({altura:{$gt:190}});


















db.users.find();
//select * from users

db.users.find({edad:20}); //select * from users where edad=20
db.users.find({edad: {$ne:20}});//select * from users where edad!=20
db.users.find({edad:{$gt:20}});//select * from users where edad>20
db.users.find({edad:{$lt:20}});//select * from users where edad<20
db.users.find({edad:{$gte:20}});//select * from users where edad>=20
db.users.find({edad:{$lte:20}});//select * from users where edad<=20
db.users.find({edad:{$in:[20,21,22]}});//select * from users where edad=20 or edad=21 or edad=22
db.users.find({edad:{$nin:[20,21,22]}});//select * from users where edad!=20 or edad!=21 or edad!=22

//parar traer usuarios que no tengan alguna clave  
db.users.find({edad:{$exists:false}});

//busque en el csambo nombres cuando  el campo inicie con 
db.users.find({nombre:{$regex:/^key/}});


//crear un intervalo de datos
db.users.find({
    $and:
    [
        {edad:{$gt:21}},//mayor
        {edad:{$lt:24}}//menor que
    ]
});