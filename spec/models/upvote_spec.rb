require 'rails_helper'

RSpec.describe Upvote, type: :model do
  it { should have_valid(:vote).when(-1, 1, 0)}
  it { should_not have_valid(:vote).when( 2,'f')}

end
