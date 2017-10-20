import ErrorBox from '../src/ErrorBox'
import testHelper from './testHelper'


describe('ErrorBox', () => {
  let errors,
      wrapper;

  beforeEach(() => {
    wrapper = mount(<ErrorBox
      errors= {['error1', 'error2']}
                    />
    );
  });


  it('should render an h4 tag', () =>{
    expect(wrapper.find('h4')).toBePresent();
  });
});
