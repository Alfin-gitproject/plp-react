import React from "react";

function Array() {

    const inventory = [
        { name: "apples", quantity: 2 },
        { name: "bananas", quantity: 3 },
        { name: "cherries", quantity: 5 },
        { name: "watermelon", quantity: 4 },
        { name: "guava", quantity: 6 },
        { name: "orange", quantity: 7 },
        { name: "tomato", quantity: 8 },
        { name: "mango", quantity: 9 },
    ];

    var result1 = inventory.find(item => {
        return item.quantity > 2;
    });
    var result2 = inventory.filter(item => {
        return item.quantity > 2;
    });
    var result3 = inventory.reduce((total, item) => {
        return total + item.quantity;
    }, 0);


    return (
        <div>
            {inventory.map((item) => (
                <div>{item.name}</div>
            ))}
        </div>
    );

}
export default Array;
