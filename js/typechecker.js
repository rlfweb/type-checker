const sentenceTag = document.querySelector(`input[type="text"]`);
const typesizeTag = document.querySelector(`input[name="typesize"]`);
const outputTag = document.querySelector("textarea.output");
const originalText = outputTag.value;

// when i type in my sentence tag, update the output tag accordingly
sentenceTag.addEventListener("keyup", function () {
  if (this.value) {
    outputTag.value = this.value;
    // if there is no value, put in the original text from index.html
  } else {
    outputTag.value = originalText;
  }
});

// can also be written
// sentenceTag.addEventListener("keyup", function () {
//   outputTag.innerHTML = sentenceTag.value;
// });

// when I type in my output tag, update the sentence tag accordingly

outputTag.addEventListener("keyup", function () {
  sentenceTag.value = this.value;
});

//  TYPESIZE SLIDER

// wwhen i change my typesiz slider, update the text next to it and
// change the outputTag's font size

typesizeTag.addEventListener("input", function () {
  outputTag.style.fontSize = this.value + "px";
});
