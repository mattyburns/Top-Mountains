import MountainFormContainer from '../src/MountainFormContainer'
import testHelper from './testHelper'

describe ('MountainFormContainer', () =>{
  let wrapper;

  beforeEach(() => {
    spyOn(MountainFormContainer.prototype, 'handleChange').and.callThrough();
    wrapper = mount(<MountainFormContainer/>)
  });

  it('should have th specified initial state', () => {
    expect(wrapper.state()).toEqual({
      name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      imageUrl: '',
      errors: []})
  })

  it('should render 5 FormItem Components', () => {
    expect(wrapper.find('FormItem').length).toEqual(5);
  })

  it('should render a DropDown Component', () => {
    expect(wrapper.find('DropDown').length).toEqual(1);
  })

});
