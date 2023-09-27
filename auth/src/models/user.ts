import mongoose from "mongoose";
import { Password } from "../utilis/password";

// this interface is for the user collection

interface UserAttrs {
  email: string;
  password: string;
}

// this interface is for user model. it describe the properties on a user model

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): any;
}

// this is a user docement interfaces.
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const hashed = await Password.toHarsh(this.get("password"));
    this.set("password", hashed);
  }
  next();
});

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export default User;
