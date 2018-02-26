class AddColumntoAudit < ActiveRecord::Migration[5.1]
  def change
    change_table :audits do |t|
        t.numeric :p3
    end
  end
end
