class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :sexo, :edad
  has_one :user
end
