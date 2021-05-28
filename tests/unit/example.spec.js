import { shallowMount } from '@vue/test-utils'
import Rating from '@/components/Rating'

let wrapper = null;

beforeEach(()=>{
  wrapper = shallowMount(Rating, {
    propsData: {
      maxStarts : 5
    }
  });
})

afterEach(()=>{
  wrapper.destroy();
})

describe('Rating.vue', () => {
  it('check if 5 stars exists', () => {
    const stars   = wrapper.findAll(".star");
    expect(stars.length).toBe(5);
  })
})
