class AuditSerializer < ActiveModel::Serializer
  attributes :id, :p1, :p2, :p2
  has_one :user
end
