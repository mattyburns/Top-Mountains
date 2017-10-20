import FormItem from '../src/FormItem'
import testHelper from '../javascript/react/src/test/testHelper'


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
      handler = {handleCity}
                    />
    );
  });

  debugger

  it('should render an input tag', () =>{
    expect(wrapper.find('input').toBePresent();
  });

  // it ('should render an input field with the nameText label', () => {
  //   expect(wrapper.find(''))
  // })


})
