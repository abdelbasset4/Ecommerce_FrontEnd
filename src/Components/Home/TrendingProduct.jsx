import CardItem from "../Utility/CardItem";

export default function TrendingProduct() {
    const data = [
        {
          label: "HTML",
          value: "html",
          desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people 
          who are like offended by it, it doesn't matter.`,
        },
        {
          label: "React",
          value: "react",
          desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
          label: "Vue",
          value: "vue",
          desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },
        {
          label: "Angular",
          value: "angular",
          desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
          label: "Svelte",
          value: "svelte",
          desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },
        {
          label: "Svelte",
          value: "svelte",
          desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },
        {
          label: "Svelte",
          value: "svelte",
          desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },
        {
          label: "Svelte",
          value: "svelte",
          desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },
      ];
  return (
    <div className="mt-16 px-4">
        <h2 className="mb-6 text-2xl font-extrabold text-gray-900">Trending Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-3">
            {
                data.map(({desc,value})=>(
                    
                        // eslint-disable-next-line react/jsx-key
                        <CardItem desc = {desc} value={value}/>

                ))
            }
        </div>
    </div>
  )
}
