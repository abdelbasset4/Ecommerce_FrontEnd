import CardItem from "../Utility/CardItem";
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
 
export default function Example() {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "All Collections",
      value: "All Collections",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Men's Collection",
      value: "Men's Collection",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Women's Collection",
      value: "Women's Collection",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Kid's Collection",
      value: "Kid's Collection",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },

  ];

  return (
    <div  className="mt-16 px-4">
        <h2 className="mb-6 text-2xl font-extrabold text-gray-900">New Arrivals</h2>
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b-4 border-blue-gray-50 bg-transparent w-[70%] "
        indicatorProps={{
          className: "bg-transparent border-b-4 border-gray-900 shadow-none rounded-none p-5",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() =>{ setActiveTab(value);}}
            className={activeTab === value ? "text-gray-900 font-bold text-xl " : "font-semibold text-xl" }
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            
            <CardItem desc = {desc} value={value}/>
            <CardItem desc = {desc}/>
            <CardItem desc = {desc}/>
            <CardItem desc = {desc}/>

          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
    </div>
    
  );
}