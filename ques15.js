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


