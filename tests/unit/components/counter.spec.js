import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter";

describe("Counter component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });

  test("h2 debe tener el valor por defecto 'Counter'", () => {
    expect(wrapper.find("h2").exists()).toBeTruthy();
    const h2Value = wrapper.find("h2");
    expect(h2Value.text()).toBe("Counter");
  });

  test("El valor por defecto de p debe de ser 100", () => {
    // Wrapper
    // ptags
    const ptag = wrapper.find('p[data-test-id="counter"]');

    expect(ptag.text()).toBe("100");
    // expect segundo p ===100
    // expect(ptags.length).toBeGreaterThan(0);
    // expect(ptags.values).
  });

  test("Debe incrementar y decrementar el valor", async () => {
    const [increaseBtn, decreaseBtn] = wrapper.findAll("button");

    await increaseBtn.trigger("click");
    await decreaseBtn.trigger("click");
    await decreaseBtn.trigger("click");

    let value = wrapper.find('p[data-test-id="counter"]').text();
    expect(value).toBe("99");
  });

  test("Debe de establecer el valor por defecto", () => {
    const start  = wrapper.props('start');
    const value  =  wrapper.find('p[data-test-id="counter"]').text()
    expect(value).toBe(start.toString())
  });

  test('Debe mostrar la prop title', () => {

    const title =  'Hola mundo'
    const wrapper =  shallowMount(Counter, {
      props:{
        title:'Hola mundo',
        start:'5'
      }
    });
    expect(wrapper.find('h2').text()).toBe(title)
  });
});
