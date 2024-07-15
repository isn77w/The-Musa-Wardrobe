document.addEventListener('DOMContentLoaded', () => {
    const longSleeveTopsList = document.getElementById('long-sleeve-tops-list');
    const shortSleeveTopsList = document.getElementById('short-sleeve-tops-list');
    const bottomsList = document.getElementById('bottoms-list');
    const socksList = document.getElementById('socks-list');
    const shoesList = document.getElementById('shoes-list');
    const accessoriesList = document.getElementById('accessories-list');
    const longSleeveClothesImage = document.getElementById('long-sleeve-clothes');
    const shortSleeveClothesImage = document.getElementById('short-sleeve-clothes');
    const bottomsImage = document.getElementById('bottoms');
    const socksImage = document.getElementById('socks');
    const shoesImage = document.getElementById('shoes');
    const handsImage = document.getElementById('hands');
    const watchImage = document.getElementById('watch');

    const longSleeveTopsOptions = [
        'BLACK SHIRT.png', 'BLACK SHIRT TUCKED.png', 'NAVY SHIRT.png',
         'WHITE SHIRT.png'
    ];

    const shortSleeveTopsOptions = [
        'BLACK WAISTCOAT.png', 'HM GOLD SHIRT.png', 'HM WHITE AND RED TSHIRT.png',
        'MS AUTOGRAPH CYAN TSHIRT.png', 'NEXT WHITE STRIPED SHIRT.png','NEXT WHITE COTTON SHIRT.png'
    ];

    const bottomsOptions = [
        'BEIGE CHINOS.png', 'BLACK JEANS.png', 'HM BRONZE TROUSERS.png',
        'HM OFFWHITE TROUSERS.png', 'NEXT OFFWHITE SHORTS.png', 'WHITE CHINOS.png'
    ];

    const socksOptions = [
        'BLACK SOCKS.png', 'GREEN SOCKS.png'
    ];

    const shoesOptions = [
        'BLACK LOAFERS.png', 'NEXT BROWN LOAFERS.png', 'NEXT OFFWHITE SHOES.png'
    ];

    const accessoriesOptions = [
        'MAEN MANHATTAN 37 SALMON DIAL.png', 'MARLIN CHRONOGRAPH GREEN DIAL.png' // Add your accessory filenames here
    ];

    longSleeveTopsOptions.forEach(item => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = `assets/${item}`;
        li.appendChild(img);
        li.addEventListener('click', () => {
            longSleeveClothesImage.src = `assets/${item}`;
            shortSleeveClothesImage.src = ''; // Clear short sleeve clothes
        });
        longSleeveTopsList.appendChild(li);
    });

    shortSleeveTopsOptions.forEach(item => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = `assets/${item}`;
        li.appendChild(img);
        li.addEventListener('click', () => {
            shortSleeveClothesImage.src = `assets/${item}`;
            longSleeveClothesImage.src = ''; // Clear long sleeve clothes
        });
        shortSleeveTopsList.appendChild(li);
    });

    bottomsOptions.forEach(item => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = `assets/${item}`;
        li.appendChild(img);
        li.addEventListener('click', () => {
            bottomsImage.src = `assets/${item}`;
        });
        bottomsList.appendChild(li);
    });

    socksOptions.forEach(item => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = `assets/${item}`;
        li.appendChild(img);
        li.addEventListener('click', () => {
            socksImage.src = `assets/${item}`;
        });
        socksList.appendChild(li);
    });

    shoesOptions.forEach(item => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = `assets/${item}`;
        li.appendChild(img);
        li.addEventListener('click', () => {
            shoesImage.src = `assets/${item}`;
        });
        shoesList.appendChild(li);
    });

    accessoriesOptions.forEach(item => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = `assets/${item}`;
        li.appendChild(img);
        li.addEventListener('click', () => {
            watchImage.src = `assets/${item}`;
        });
        accessoriesList.appendChild(li);
    });
});
