"use strict";
let services = {
    "haircut" : "100 грн",
    "shaving" : "5.0101 грн",
    "shampoo" : "5.01 грн",
    "ptnXyiloKill" : "99 грн",

    price: function() {
        let allPrice = 0;
        for (let i in services) {
            if (typeof services[i] === "string") {
                allPrice = allPrice + parseFloat(services[i]);
            }
                        
        }
        console.log("Загальна вартість послуг = " + Number(allPrice.toFixed(2)) + " грн");
        //console.log(typeof(Number(allPrice.toFixed(2))));
    },

    minPrice: function() {
        let min = 1000000000;
        for (let i in services) {
            if (typeof services[i] === "string") {
                let min2 = parseFloat(services[i]);

                if (min2 < min) {
                    min = min2;
                }
                    
            }
        }
       
        console.log("Мінімальна ціна: " + Number(min.toFixed(2)) + " грн");
        //console.log(typeof(Number(min.toFixed(2))));

    },

   

    maxPrice: function() {
        let max = 0;
        for (let i in this) {
            if (typeof this[i] === "string") {
                let max2 = parseFloat(this[i]);

                if (max2 > max) {
                    max = max2;
                }
            }
        }
        console.log("Максимальна ціна: " + Number(max.toFixed(2)) + " грн");
        //console.log(typeof(Number(max.toFixed(2))));
    }

};


services['Розбити скло'] = "200 грн";
services.test = "2.0202 грн";

services.price();
services.minPrice();
services.maxPrice();
