

function start()
{
  navigator.mediaDevices.getUserMedia({ audio: true, video:false});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0s2bE7v_D/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
  classifier.classify(getResults);
}

var Syllable_a = 0;


function getResults(error,results) {
 if (error) {
   console.error(error);
} else {
    console.log(results);
    
    if (results[0].label == "Syllable a") {
      document.getElementById('result_image').src = 'A.png';
      document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
 //   document.getElementById("result_count").innerHTML = 'Detected Syllable a - '+Syllable_a+ ' Syllable a - '+Syllable_a;
    //  Syllable_a = Syllable_a+1;
    } 
    else{
      img.src = 'listen.gif';
    } }
}

function playvideo()
{
  window.location="video.html"
}




//next part



