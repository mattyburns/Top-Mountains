import ReviewFormContainer from '../src/ReviewFormContainer'
import testHelper from './testHelper'

describe ('ReviewFormContainer', () =>{
  let wrapper;

  beforeEach(() => {
    spyOn(ReviewFormContainer.prototype, 'handleChange').and.callThrough();
    wrapper = mount(<ReviewFormContainer/>)
  });

  it('should have th specified initial state', () => {
    expect(wrapper.state()).toEqual({
      rating: '',
      skiingReview: '',
      foodReview: '',
      lodgingReview: '',
      errors: []
    })
  })

  it('should render 4 FormItem Components', () => {
    expect(wrapper.find('FormItem').length).toEqual(4);
  })
})
