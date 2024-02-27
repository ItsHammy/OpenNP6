function changeImage(image) {
    var src = image.src;
    var extIndex = src.lastIndexOf(".");
    var filename = src.substring(0, extIndex);
    var extension = src.substring(extIndex);
    image.src = filename + "_i" + extension;

    setTimeout(function() {
        image.src = src; // Change back to the original source
    }, 50);
}
