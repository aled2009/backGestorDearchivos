import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id")
      table.string("firs_name")
      table.string("second_name")
      table.string("second_name")
      table.string("email").unique()
      table.string("phone").unique()
      table.string("type_blood")
      table.timestamp("created_at")
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}