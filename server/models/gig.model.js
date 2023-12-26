import mongoose from 'mongoose';
const { Schema } = mongoose;

const gigSchema = new Schema({
    userId:{
        type:String,
        required:true
    },desc:{
        type:String,
        required:true
    
    },price:{
        type:String,
        required:true
    },cat:{
        type:String,
        required:true
    },
    cover:{
        type:String,
        required:true
    },Images:{
        type:[String],
        required:true,
    },shortTitle:{
        type:[String],
        required:true,
    },shortDescription:{
        type:String,
        required:true,
    },deliveryTime:{
        type:String,
        required:true,
    },rivisionNumber:{
        type:Number,
        required
    },features:{
        type:String,
        required
    },totalStar:{
        type:Number,
        required,
    },starNumber:{
        type:Number,
        required,
    },sales:{
        type:Number,
        default:0
    }
    
  
},{
    timestamps:true
});

export default mongoose.model("Gig",gigSchema);