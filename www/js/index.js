document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  // Camera Options
  var options = {
    quality: 80,
    destinationType: Camera.DestinationType.FILE_URI,
  };

  // Photo button click event handler
  $("#takePhoto").on("click", () => {
    navigator.camera.getPicture(onSuccess, onFail, options);
  });

  // On successful image
  function onSuccess(imageData) {
    resolveLocalFileSystemURL(imageData, function (fileEntry) {
        var imgURL = fileEntry.toURL()
        var img = new Image();
        img.src = imgURL;
        $("#imageContainer").append(img);
    }, onFail);
  }

  // On failure to take image
  function onFail(message) {
    console.log("ERROR", message);
    alert("Error: Image not taken")
  }
}
