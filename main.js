let coin = {
    state: 0,
    flip: function () {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        if (Math.random() * 100 < 50) {
            this.state = 1;
        } else {
            this.state = 0;
        }
        },
    toString: function () {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
           if (this.state === 1) {
               return "Heads"
           } else {
               return "Tails"
           }
    },
    toHTML: function () {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
       if (this.state === 1) {
           image.src = "https://i.ebayimg.com/images/g/xtcAAOSwLwBaZigS/s-l400.jpg"
       } else { image.src = "https://www.nicepng.com/png/detail/146-1464848_quarter-tail-png-tails-on-a-coin.png"} 
       return image 
    }
};

coin.flip()
document.body.append(coin.toString());
document.body.append(coin.toHTML()); 