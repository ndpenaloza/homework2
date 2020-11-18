//$(document).ready(function){
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
            src: "assets/images/riverOtter.jpg",
            alt: "River Otter in the San Diego Zoo"
        },
        {
            src: "assets/images/bridalVeil.jpg",
            alt: " Bridal Veil Falls in Yosemite National Park"
        },
        {
            src: "assets/images/yosemiteFalls.jpg",
            alt: "Yosemite Falls in Yosemite National Park"
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
        `<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <img class="img-responsive img-thumbnail" src=${photoArray[i].src} alt=${photoArray[i].alt}}>
      </div>` 
    )};
//}
