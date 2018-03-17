var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CardSchema = new Schema({
    title: String,
    subtitle: String,
    formattedText: String,
    image: {
        imageUrl: String
    },
    buttons: [
        {
            title: String,
            openUriAction: {
                uri: String
            }
        }
    ]
});

mongoose.model("Card", CardSchema);
