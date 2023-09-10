import Indesicion from "@/components/Indesicion";
import { shallowMount } from "@vue/test-utils";

describe("Indesicion component", () => {
  let wrapper;
  let clgSpy;

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          answer: "yes",
          forced: false,
          image:
            "https://yesno.wtf/assets/yes/1-af11222d8d4af90bdab8fc447c8cfebf.gif",
        }),
    })
  );

  beforeAll(() => {
    wrapper = shallowMount(Indesicion);
    clgSpy = jest.spyOn(console, "log");
    jest.clearAllMocks();
  });

  test("mathc con el snapshot de indesicion", () => {
    let snap = wrapper.html();
    expect(snap).toMatchSnapshot();
  });

  test("Escribir en el input no debe disparar nada console.log()", async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");

    const input = wrapper.find("input");
    await input.setValue("Hola Mundo");
    expect(clgSpy).toHaveBeenCalledTimes(1);
    expect(getAnswerSpy).not.toHaveBeenCalled();
  });
  test("Al escribir el signo de interrogacion debe dispara el getAnswer", async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");

    const input = wrapper.find("input");
    await input.setValue("Hola Mundo?");

    // expect(clgSpy).toHaveBeenCalledTimes(1);
    expect(getAnswerSpy).toHaveBeenCalled();
  });

  test("Prueba de getAnswer", async() => {
    await  wrapper.vm.getAnswer()
    const img = wrapper.find('img')
    expect(img.exists()).toBeTruthy()
    expect(wrapper.vm.image).toBe('https://yesno.wtf/assets/yes/1-af11222d8d4af90bdab8fc447c8cfebf.gif')
    expect(wrapper.vm.answer).toBe('Si')
    
  });
  test("Prueba de getAnswer - Fallo en el API", async() => {
    fetch.mockImplementationOnce(()=> Promise.recjec('Api is down'))
    await  wrapper.vm.getAnswer()
    const img = wrapper.find('img')
    expect(img.exists()).toBeFalsy()
    expect(wrapper.vm.answer).toBe('No se pudo cargar del API')

  });
});
