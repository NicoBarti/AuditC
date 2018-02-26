class CreateAudits < ActiveRecord::Migration[5.1]
  def change
    create_table :audits do |t|
      t.numeric :p1
      t.numeric :p2
      t.numeric :p2
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
