let sentenceBuilder = {
    subject: "I",
    verb: "am",
    object: "coding",

    buildSentence: function() {
        return this.subject && this.verb && this.object
            ? this.subject + " " + this.verb + " " + this.object
            : "Incomplete sentence";
    },

    updateProperty: function(property, value) {
        return this.hasOwnProperty(property)
            ? (this[property] = value)
            : "Invalid property";
    }
};
// eg
console.log(sentenceBuilder.buildSentence()); // Output: "I am coding"

sentenceBuilder.updateProperty("verb", "am learning");
console.log(sentenceBuilder.buildSentence()); // Output: "I am learning coding"

sentenceBuilder.updateProperty("subject", "The cat");
console.log(sentenceBuilder.buildSentence()); // Output: "The cat is learning coding"

console.log(sentenceBuilder.updateProperty("mood", "happy")); // Output: "Invalid property"


