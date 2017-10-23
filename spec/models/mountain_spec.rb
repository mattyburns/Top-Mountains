require 'rails_helper'

RSpec.describe Mountain, type: :model do
  it { should have_valid(:name).when('Steamboat', 'Sunday River')}
  it { should_not have_valid(:name).when('')}

  it { should have_valid(:address).when('123 High St')}
  it { should_not have_valid(:address).when('')}

  it { should have_valid(:city).when('Denver')}
  it { should_not have_valid(:city).when('')}

  it { should have_valid(:state).when('MA', 'CO')}
  it { should_not have_valid(:state).when('Colorado','')}

  it { should have_valid(:zip).when('12345')}
  it { should_not have_valid(:zip).when('123456','')}


end
