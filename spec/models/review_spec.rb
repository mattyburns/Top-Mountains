require 'rails_helper'

RSpec.describe Review, type: :model do
  it { should have_valid(:rating).when(5, 1)}
  it { should_not have_valid(:rating).when(6, 0, -1, '', 'FIVE')}

end
