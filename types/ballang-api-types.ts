export type Brand = {
  id:string;
  name:string;
  wikipedia_url: string;
  description: string;
  image: Image;
}

export type Brands = Brand[];

export type Image = {
  breeds?: Brands[];
  id: string;
  url: string;
  width: number;
  height: number;
}

export type BrandType = {
  id: number;
  nameKr: string;
  nameEn: string;
  };

export type ProductType = {
  id: number;
  name: string;
  imgSrc: string;
  onlineStock: number;
  price: number;
  originalPrice: number;
  deliveryType: string;
  brandId: number;
  brand: BrandType;
  };
  export type Products = ProductType[];

  