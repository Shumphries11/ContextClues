var friendsArr = ['Pearl', 'Tiffany', 'James', 'Camilla', 'Dakota'];

var placesArr = ['Wal-Mart', 'Bowling Ally', 'ColdStone', 'Papa Johns', 'Freezer', 'Storage Room', 'Gas Station', 'Library', 'Post Office'];

var weaponsArr = ['fork', 'pencil', 'bottle', 'pen', 'book', 'TV', 'paper towel', 'phone', 'rubber band', 't-shirt', 'shoe', 'candy bar', 'spoon', 'blender', 'chair', 'keys', 'broom', 'pot', 'balloon']


var count = 0;

for (var i = 0; i < 100; i++) {
    var h3 = document.createElement('h3');
    count++
    h3.textContent = "Accusation " + count;
    document.body.appendChild(h3);


    function msg() {
        return function () {
            var friend = friendsArr[i % friendsArr.length];
            // console.log(friend);

            var place = placesArr[i % placesArr.length];
            // console.log(place);

            var weapon = weaponsArr[i % weaponsArr.length];
            // console.log(weapon);

            h3.addEventListener('click', function () {
                alert(this.textContent + ': I accuse ' + friend + ', with the ' + weapon + ' in the ' + place + '.');
            })
        }
    }
    msg()();

}

