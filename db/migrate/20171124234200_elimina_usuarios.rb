class EliminaUsuarios < ActiveRecord::Migration[5.1]

    def up
      drop_table :usuarios
    end

    def down
      raise ActiveRecord::IrreversibleMigration
    end

end
