Webcam.set({
    width:350,
    height:300,
    image_formate : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');
function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id ="captured_image" src="'+data_uri+'"/>';
    });
}
 
console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mvJVVGaYZ/model.json',modelLoded);
function modelLoded () {
    console.log("modelLoded");
}
function Speak () {
    var synth = window.speechSynthesis;
    Speak_data_1 = "The first Prediction is" + Prediction_1;
    Speak_data_2 = "The second Prediction is" + Prediction_2;
    var utterThis = new SpeechSynthesisUtterance(Speak_data_1+Speak_data_2);
    synth.speak(utterThis);
}
function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult (results) {
        console.log(results);
        document.getElementById("results_emotion_name").innerHTML = results[0].label;
        document.getElementById("results_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if (results[0].label == "happy")
            {
                document.getElementById("update_emoji").innerHTML = "&#128522;"
            }
        if (results[0].label == "sad")
            {
                document.getElementById("update_emoji").innerHTML = "&#128532;"
            }
        if (results[0].label == "angry")
            {
                document.getElementById("update_emoji").innerHTML = "&#128548;"
            }
}