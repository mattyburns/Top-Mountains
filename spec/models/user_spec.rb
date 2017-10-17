require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_valid(:username).when("username1")}
  it { should_not have_valid(:username).when("", "12345", "textlongerthantwentycharacters")}

  it { should have_valid(:email).when("johnsmith@gmail.com")}
  it { should_not have_valid(:email).when("", "johnsmith.com")}
end
