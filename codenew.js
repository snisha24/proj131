function start()
{
  navigator.mediaDevices.getUserMedia({ audio: true, video:false});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/c8hOtZEWK/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}



function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    
    img = document.getElementById('result_image');

    if (results[0].label == "Barking") {
      img.src = 'A.png';
   
    } 
     else{
      img.src = 'listen.gif';
    }
  }
}
function playvideo()
{
  window.location="video.html"
}