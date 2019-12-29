import useGallery from "./";
import medias from "./mock";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useGallery", () => {
  let gallery: any;

  beforeEach(() => {
    renderHook(() => {
      gallery = useGallery(medias);
    });
  });

  test("No active picture is displayed initially", () => {
    expect(gallery.active).toBe(null);
  });

  test("A picture can be open", () => {
    const mediaToOpen = medias[0];

    act(() => gallery.open(mediaToOpen));
    expect(gallery.active).toBe(mediaToOpen);
  });

  test("A picture can be closed", () => {
    const mediaToOpen = medias[medias.length - 1];

    act(() => gallery.open(mediaToOpen));
    expect(gallery.active).toBe(mediaToOpen);

    act(() => gallery.close());
    expect(gallery.active).toBe(null);
  });

  test("Back button is disable when I open the first picture", () => {
    const mediaToOpen = medias[0];

    act(() => {
      gallery.open(mediaToOpen);
    });

    expect(gallery.showPreviousDisabled).toBe(true);
  });

  test("Next button is disable when I open the last picture", () => {
    const mediaToOpen = medias[medias.length - 1];

    act(() => {
      gallery.open(mediaToOpen);
    });

    expect(gallery.showNextDisabled).toBe(true);
  });
});
