// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let classifier;

// A variable to hold the image we want to classify
let img;

function preload() {
  classifier = ml5.imageClassifier('MobileNet');
  img = loadImage('https://source.unsplash.com//400x400');
}

function setup() {
  createCanvas(400, 400);
  classifier.classify(img, gotResult);
  image(img, 0, 0);
}

// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    // The results are in an array ordered by confidence.
    console.log(results);


 const label = document.createElement("div");
    label.classList.add("label");

    label.innerHTML = 'Label: ' + results[0].label;
    document.body.appendChild(label)



    const confidence = document.createElement("div");
    confidence.classList.add("confidence");

    confidence.innerHTML = 'Confidence: ' + floor(results[0].confidence * 100) + '%';
    document.body.appendChild(confidence)

  }
}