class Mountain < ApplicationRecord
  STATES = [
	        'Alabama',
	        'Alaska',
	        'Arizona',
          'Arkansas',
	        'California',
	        'Colorado',
	        'Connecticut',
	        'Delaware',
	        'Florida',
	        'Georgia',
	        'Hawaii',
	        'Idaho',
	        'Illinois',
	        'Indiana',
	        'Iowa',
	        'Kansas',
	        'Kentucky',
	        'Louisiana',
	        'Maine',
	        'Maryland',
	        'Massachusetts',
	        'Michigan',
	        'Minnesota',
	        'Mississippi',
	        'Missouri',
	        'Montana',
	        'Nebraska',
	        'Nevada',
	        'New Hampshire',
	        'New Jersey',
	        'New Mexico',
	        'New York',
	        'North Carolina',
	        'North Dakota',
	        'Ohio',
	        'Oklahoma',
	        'Oregon',
	        'Pennsylvania',
	        'Rhode Island',
	        'South Carolina',
	        'South Dakota',
	        'Tennessee',
	        'Texas',
	        'Utah',
	        'Vermont',
	        'Virginia',
	        'Washington',
	        'West Virginia',
	        'Wisconsin',
	        'Wyoming' ]

  belongs_to :creator,
    class_name: 'User',
    foreign_key: "creator_id"

  validates :name, presence: true, uniqueness: true
  validates :city, presence: true
  validates :address, presence: true
  validates :state, presence: true, inclusion: { in: STATES }
  validates :zip, presence: true, length: { is: 5}


end
