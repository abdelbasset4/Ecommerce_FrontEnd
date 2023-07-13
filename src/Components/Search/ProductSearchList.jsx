import ProductSearchCard from "./ProductSearchCard";


const data = [
    {
      label: "All Collections",
      value: "All Collections",
      desc: `It really matters and then like it really doesn't matter.`,
    },
    {
      label: "Men's Collection",
      value: "Men's Collection",
      desc: `Because it's about motivating the doers.`,
    },
    {
      label: "Women's Collection",
      value: "Women's Collection",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing.`,
    },
    {
      label: "Kid's Collection",
      value: "Kid's Collection",
      desc: `Because it's about motivating the doers. `,
    },
    {
      label: "All Collections",
      value: "All Collections",
      desc: `It really matters and then like it really doesn't matter.`,
    },
    {
      label: "Men's Collection",
      value: "Men's Collection",
      desc: `Because it's about motivating the doers.`,
    },
    {
      label: "Women's Collection",
      value: "Women's Collection",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing.`,
    },
    {
      label: "Kid's Collection",
      value: "Kid's Collection",
      desc: `Because it's about motivating the doers. `,
    },

  ];
export default function ProductSearchList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
    {data.map(({ value }) => (
        // eslint-disable-next-line react/jsx-key
        <ProductSearchCard value={value}/>
    ))}
    </div>
  )
}
