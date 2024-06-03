import mongoose, { Schema, Model, Document } from 'mongoose'

export type TaskDocument = Document & {
  id: number
  name: string
}
export type TaskInput = {
  id: TaskDocument['id']
  name: TaskDocument['name']
}

export const taskSchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
    require: true,
  },
})

export const Task: Model<TaskDocument> = mongoose.model<TaskDocument>('Task', taskSchema)
