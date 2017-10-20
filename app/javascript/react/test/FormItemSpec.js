import FormItem from '../src/FormItem'
import testHelper from './testHelper'


describe('FormItem', () => {
  let name,
      content,
      nameText,
      handler,
      onChange,
      wrapper;

  beforeEach(() => {
    onChange = jasmine.createSpy('onChange spy');
    wrapper = mount(<FormItem
      name= "city"
      content ="Boston"
      nameText = "City:"
      handler = {onChange}
                    />
    );
  });


  it('should render an input tag', () =>{
    expect(wrapper.find('input')).toBePresent();
  });

  // it ('should inovke the onChange function when changed', () => {
  //   wrapper.simulate('change',wrapper.find('input'));
  //   expect(onChange).toHaveBeenCalled();
  // })


})
