import DropDown from '../src/DropDown'
import testHelper from './testHelper'


describe('DropDown', () => {
  let errors,
      wrapper;

  beforeEach(() => {
    wrapper = mount(<DropDown
      name="state"
      content="MA"
      nameText="State:"
                    />
    );
  });


  it('should render a label tag', () =>{
    expect(wrapper.find('label')).toBePresent();
  });
});
