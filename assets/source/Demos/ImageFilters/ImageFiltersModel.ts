import { FilterToken, css_blur, css_brightness, css_contrast,  pct, px, Atom, atom } from "zaffre";
import { createGrayscaleFilter, createHueRotateFilter, createInvertFilter } from "zaffre";
import { createOpacityFilter, createSaturateFilter, createSepiaFilter, } from "zaffre";

export type FilterSpec = {
  title: string;
  value: Atom<number>;
  max: number,
  css: (val: number) => FilterToken;
}
export class ImageFiltersModel {
  imageFiles = atom<File[]>([], { action: () => this.imageFilesChanged() });
  imageSrc = atom("image.flowers");

  filters: FilterSpec[] = [
    { title: "Blur", value: atom(0), max: 4, css: (val) => css_blur(px(val)) },
    { title: "Brightness", value: atom(100), max: 100, css: (val) => css_brightness(pct(val)) },
    { title: "Contrast", value: atom(100), max: 100, css: (val) => css_contrast(pct(val)) },
    { title: "Invert", value: atom(0), max: 100, css: (val) => createInvertFilter(pct(val)) },
    { title: "Saturation", value: atom(100), max: 100, css: (val) => createSaturateFilter(pct(val)) },
    { title: "Grayscale", value: atom(0), max: 100, css: (val) => createGrayscaleFilter(pct(val)) },
    { title: "Hue-Rotate", value: atom(0), max: 180, css: (val) => createHueRotateFilter(val) },
    { title: "Opacity", value: atom(100), max: 100, css: (val) => createOpacityFilter(pct(val)) },
    { title: "Sepia", value: atom(0), max: 100, css: (val) => createSepiaFilter(pct(val)) },
  ];

  filter = atom(() => this.filters.map((spec) => spec.css(spec.value.get())));

  imageFilesChanged(): void {
    const files = this.imageFiles.get();
    this.imageSrc.set(files.length > 0 ? URL.createObjectURL(files[0]) : "");
  }
}
