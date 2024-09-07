import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare email: string

  @column()
  declare firs_name: string

  @column()
  declare second_name: string


  @column()
  declare phone: string

  @column()
  declare type_blood: string



  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
}