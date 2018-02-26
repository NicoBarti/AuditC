class ChangeAuditToNumbers < ActiveRecord::Migration[5.1]
  def change
    change_column :audits, :p1, :integer
    change_column :audits, :p2, :integer
    change_column :audits, :p3, :integer

  end
end
