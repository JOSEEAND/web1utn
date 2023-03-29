var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
    console.log("QUACK!!!");
    }
   };
var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
    console.log("Estoy encantado de conocerle.");
    }
   };
var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
    console.log("Hi there!");
    }
   };
   

//1.
const arregloPinguinos=[
    {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
    console.log("QUACK!!!");
    }
   },
   {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
    console.log("Estoy encantado de conocerle.");
    }
   },
   {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
    console.log("Hi there!");
    }
   }
];
   

//2.
for(let i=0; i<arregloPinguinos.length; i++){
    console.log(arregloPinguinos[i].name)
};


//3.
console.log(arregloPinguinos.length);


//4.
for(let i=0; i<arregloPinguinos.length; i++){
    arregloPinguinos[i].numberOfFeet=Math.floor(Math.random()*5)+1;
};
console.log(...arregloPinguinos);


//5.
for(let i=0; i<arregloPinguinos.length; i++){
    if(arregloPinguinos[i].canFly==true){
        console.log(`¡${arregloPinguinos[i].name} puede volar!`);
    }
};


//6.
const pinguinosPatudos=arregloPinguinos.filter(
    function(pinguino){
        return pinguino.numberOfFeet>2;
    }
);
console.log(...pinguinosPatudos);


//7.
arregloPinguinos.map((pinguino)=>{
    pinguino.favoriteFoods=[
        "bistec de res",
        "higado encebollado",
        "chuleta frita"
    ]
}
);


//8.
for(let i=0; i<arregloPinguinos.length; i++){
    console.log(arregloPinguinos[i].favoriteFoods[1])
};


//9.
for(let i=0; i<arregloPinguinos.length; i++){
    arregloPinguinos[i].favoriteFoods[2]="piña";
    console.log(arregloPinguinos[i].favoriteFoods[2])
};


//10.
for(let i=0; i<arregloPinguinos.length; i++){
    console.log(...arregloPinguinos[i].favoriteFoods)
};
  

//profe, cuando abro el archivo en el live server tengo que darle un reload
//a la página para que me salga todo bien, solo por si acaso