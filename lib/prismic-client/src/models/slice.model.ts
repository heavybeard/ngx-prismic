/**
 * Represents a slice which you can define in the "Slice Zone"
 * on your custom types.
 * 
 * This interface takes three generic parameters which make it
 * possible to use your own content model.
 * 
 * @param SliceType Type - this slice's name
 * @param Repeatable Items - an interface representing an item in the "Repeatable Zone"
 * @param NonRepeatable Primary - an interface representing your "Non-repeatable Zone"
 * 
 * @example
  ```ts
  export interface Meal {
      name: string;
      price: number;
  }

  export interface MenuSection {
      name: string;
      description: string;
  }

  export type MenuSlice = Slice<'menu_section', Meal, MenuSection>;

  const slice: MenuSlice = {
    slice_type: 'menu_section',
    slice_label: 'some label ...',
    items: [
      {
        name: 'Pizza Funghi',
        price: 7.5
      },
      {
        name: 'Pizza Tonno',
        price: 8
      }
    ],
    primary: {
      name: 'Pizza',
      description: 'Delicious home-made pizza.'
    }
  };
  ```
 */
export interface Slice<
    SliceType extends string,
    Repeatable extends object,
    NonRepeatable extends object
  > {
    slice_type: SliceType;
    slice_label: any;
    items: Repeatable[];
    primary: NonRepeatable;
}
