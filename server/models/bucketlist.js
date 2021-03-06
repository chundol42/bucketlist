import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BucketList = new Schema({
  writer: { type: Schema.Types.ObjectId, ref: 'account' },
  title: { type: String, required: true },
  items : [{
    id: Number,
    name: String,
    done: Boolean
  }],
  dueDate: Date,
  openRange: String,
  created: { type: Date, default: Date.now },
  modified: Date,
  deprecated: Date
});

export default mongoose.model('bucketlist', BucketList);