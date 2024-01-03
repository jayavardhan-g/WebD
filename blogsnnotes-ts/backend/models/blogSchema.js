const mongoose= require("mongoose");
const {Schema}=mongoose;


const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  user:{
    type:String,
    required:true
  },
  tags: {
    type: [String],
  },

  content: {
    type: String,
  },
  public:{
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Blogs',blogSchema);