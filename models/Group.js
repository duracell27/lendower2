const { Schema, default: mongoose } = require("mongoose");

const GroupSchema = new Schema({
    name: {type: String, required: true},
    members: [{type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true}],
    image: {type: String}
},{timestamps: true})

export const Group = mongoose.models?.Group || mongoose.model('Group', GroupSchema)