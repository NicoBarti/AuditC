require 'rails_helper'

RSpec.describe Usuario, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  before do
    @usuario = FactoryGirl.create(:usuario)
  end

  describe 'nombre' do
    it 'should be present' do
      @usuario.nombre = nil
      expect(@usuario).not_to be_valid
    end

    context 'not unique' do
      it 'should not be valid' do
        other_usuario = @usuario.dup
        expect(other_usuario).not_to be_valid
      end
    end

  end

end
