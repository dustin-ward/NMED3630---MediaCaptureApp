document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  var options = {
    quality: 80,
    destinationType: Camera.DestinationType.FILE_URI,
  };

  $("#takePhoto").on("click", () => {
    navigator.camera.getPicture(onSuccess, onFail, options);
  });

  function onSuccess(imageData) {
    resolveLocalFileSystemURL(imageData, function (fileEntry) {
        var imgURL = fileEntry.toURL()
        var img = new Image();
        img.src = imgURL;
        $("#imageContainer").append(img);
    }, onFail);
  }
  function onFail(message) {
    console.log("ERROR", message);
  }
}
