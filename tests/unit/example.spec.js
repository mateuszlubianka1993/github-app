import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header.vue", () => {
  it("renders props.titleMsg when passed", () => {
    const titleMsg = "new message";
    const wrapper = shallowMount(Header, {
      propsData: { titleMsg }
    });
    expect(wrapper.text()).toMatch(titleMsg);
  });

  it("renders props.subtitleMsg when passed", () => {
    const subtitleMsg = "new message2";
    const wrapper = shallowMount(Header, {
      propsData: { subtitleMsg }
    });
    expect(wrapper.text()).toMatch(subtitleMsg);
  });
});
