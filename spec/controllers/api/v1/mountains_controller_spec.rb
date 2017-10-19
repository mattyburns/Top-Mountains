require "rails_helper"

describe "POST#create" do
  it "creates a new mountain" do
    post_json = {  }.to_json

    expect{ post(:create, post_json)}.to change{ Mountain.count }.by 1
  end
end
