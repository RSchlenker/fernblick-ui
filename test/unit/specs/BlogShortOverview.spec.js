import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import BlogShortOverview from '@/components/BlogShortOverview'

function shallowMountComponent () {
  return shallowMount(BlogShortOverview, {
    propsData: {
      shortInformation: {
        'rating': 1,
        'time-needed': 100,
      },
      showImages: true,
    },
    stubs: {
      RouterLink: RouterLinkStub,
      VueMaterialIcon:
        '<div class="material-icon"> </div>',
    },
  })
}

describe('BlogShortOverview.vue', () => {
  it('should only show items where data was provided', () => {
    const wrapper = shallowMountComponent()
    const ratingItem = wrapper.find('.rating')
    const timeNeededItem = wrapper.find('.time-needed')
    const timeRecommendedItem = wrapper.find('.time-recommended')
    const locationItem = wrapper.find('.location')

    expect(ratingItem.exists()).toBe(true)
    expect(timeNeededItem.exists()).toBe(true)
    expect(timeRecommendedItem.exists()).toBe(false)
    expect(locationItem.exists()).toBe(false)
  })

  it('should show a image button and emit event', () => {
    const wrapper = shallowMountComponent()
    const imageButton = wrapper.find('.short-info__images a')
    expect(imageButton.exists()).toBe(true)
    imageButton.trigger('click')
    expect(wrapper.emitted().openGallery).not.toBe(undefined)
  })
})
