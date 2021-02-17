const sentenceTag = document.querySelector(`input[type="text"]`);
const typesizeTag = document.querySelector(`input[name="typesize"]`);
const typesizeOutput = document.querySelector("span.typesize-output");

const lineheightTag = document.querySelector(`input[name="lineheight"]`);
const lineheightOutput = document.querySelector("span.lineheight-output");

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

// when i change my typesize slider, update the text next to it and
// change the outputTag's font size

typesizeTag.addEventListener("input", function () {
  outputTag.style.fontSize = this.value + "px";
  typesizeOutput.innerHTML = this.value + " pixels";
});

//  LEADING SLIDER

// when i change my typesize slider, update the text next to it and
// change the outputTag's font size

lineheightTag.addEventListener("input", function () {
  outputTag.style.lineHeight = this.value;
  lineheightOutput.innerHTML = this.value;
});
