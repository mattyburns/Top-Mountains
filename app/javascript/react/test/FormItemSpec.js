import FormItem from '../src/FormItem'
import testHelper from './testHelper'


describe('FormItem', () => {
  let name,
      content,
      nameText,
      handler,
      wrapper;

  beforeEach(() => {
    wrapper = mount(<FormItem
      name= "city"
      content ="Boston"
      nameText = "City:"
      handler = {handler}
                    />
    );
  });

  debugger

  it('should render an input tag', () =>{
    expect(wrapper.find('input')).toBePresent();
  });

  // it ('should render an input field with the nameText label', () => {
  //   expect(wrapper.find(''))
  // })


})
