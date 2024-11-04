export const displayTrucks = (trucks) => {
    const gallery = document.getElementById('truckGallery');
    gallery.innerHTML = ''; // remove previous results
    trucks.forEach(truck => {
        const truckDiv = document.createElement('div');
        truckDiv.className = 'truck';
        truckDiv.innerHTML = `<img src="${truck}" alt="Tow Truck" style="width:100%;">`;
        gallery.appendChild(truckDiv);
    });
};