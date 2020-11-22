const photoArea = $("#photo-area");

    // Array of src's and alt's of photos
var photoArray = [
        {
            src: "assets/images/isabella.jpg",
            alt: "Picture of Isabella"
        },
        {
            src: "assets/images/pan.jpg",
            alt: "Homemade sourdough bread"
        },
        {
            src: "assets/images/goldenGate.jpg",
            alt: "The Golden Gate Bridge"
        },
        {
            src: "assets/images/bridalVeil.jpg",
            alt: " Bridal Veil Falls in Yosemite National Park"
        },
        {
            src: "assets/images/tunnelView.jpg",
            alt: "Tunnel View in Yosemite National Park"
        },
        {
            src: "assets/images/delicateArch.jpg",
            alt: "Delicate Arch in Arches National Park"
        }
    ];

    // For loop to append photos on portfolio.html
    for (var i = 0; i < photoArray.length; i++) {
        photoArea.append(
        `<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <img class="img-thumbnail" src=${photoArray[i].src} alt="${photoArray[i].alt}">
      </div>` 
    )};