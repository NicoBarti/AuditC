class CreateUsuarios < ActiveRecord::Migration[5.1]
  def change
    create_table :usuarios do |t|
      t.string :nombre, null: false
      t.timestamps
    end

    add_index :usuarios, :nombre, unique: true
  end
end
