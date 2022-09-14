import {
  GiPoloShirt,
  GiSkirt,
  GiTrousers,
  GiShorts,
  GiConverseShoe,
  GiRunningShoe,
  GiLeatherBoot,
  GiHighHeel,
  GiWatch,
  GiPearlNecklace,
  GiDelicatePerfume,
} from "react-icons/gi";
import { BsSmartwatch } from "react-icons/bs";

export const apiUtils = {
  categories: [
    {
      categoryId: "cat001",
      title: "clothes",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      background: "#f5f5f5",
      items: [
        {
          productId: 1,
          productName: "polo tees",
          productImage: <GiPoloShirt />,
          productPrice: 20,
        },
        {
          productId: 2,
          productName: "long skirt",
          productImage: <GiSkirt />,
          productPrice: 25,
        },
        {
          productId: 3,
          productName: "denim jeans",
          productImage: <GiTrousers />,
          productPrice: 30,
        },
        {
          productId: 4,
          productName: "khaki shorts",
          productImage: <GiShorts />,
          productPrice: 20,
        },
      ],
    },
    {
      categoryId: "cat002",
      title: "shoes",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      background: "#e7f9f4",
      items: [
        {
          productId: 5,
          productName: "mens converse",
          productImage: <GiConverseShoe />,
          productPrice: 220,
        },
        {
          productId: 6,
          productName: "running shoes",
          productImage: <GiRunningShoe />,
          productPrice: 125,
        },
        {
          productId: 7,
          productName: "leather boots",
          productImage: <GiLeatherBoot />,
          productPrice: 130,
        },
        {
          productId: 8,
          productName: "high heels",
          productImage: <GiHighHeel />,
          productPrice: 150,
        },
      ],
    },
    {
      categoryId: "cat003",
      title: "accessories",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      background: "#f8f1e4",
      items: [
        {
          productId: 9,
          productName: "timex watch",
          productImage: <GiWatch />,
          productPrice: 500,
        },
        {
          productId: 10,
          productName: "smart watch",
          productImage: <BsSmartwatch />,
          productPrice: 250,
        },
        {
          productId: 11,
          productName: "pearl necklace",
          productImage: <GiPearlNecklace />,
          productPrice: 1000,
        },
        {
          productId: 12,
          productName: "perfume",
          productImage: <GiDelicatePerfume />,
          productPrice: 350,
        },
      ],
    },
  ],
};
