import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  HomeIcon,
  UserCircleIcon,
  LockClosedIcon
} from "@heroicons/react/24/solid";
import AccountDetails from "./AccountDetails";
import ChangePassword from "./ChangePassword";
import Adresses from "./Adresses";
import { AddAdress } from "./AddAdress";
import useGetUserAdresses from "../../hook/Adress/useGetUserAdresses";
import useGetLoggedUserData from "../../hook/Auth/useGetLoggedUserData";

export default function TabsProfiles() {
  const [adresses] = useGetUserAdresses()
  const [user] = useGetLoggedUserData()
  
  return (
    <Tabs value="">
      <TabsHeader className="flex flex-col lg:flex-row justify-center w-full lg:max-w-150 gap-3 mx-auto">
            <Tab key="profile" value="profile">
                <div className="flex items-center gap-2">
                    {React.createElement(UserCircleIcon, { className: "w-5 h-5" })}
                        Account Details
                </div>
            </Tab>
            <Tab key="password" value="password">
                <div className="flex items-center gap-2">
                    {React.createElement(LockClosedIcon, { className: "w-5 h-5" })}
                        Change Password
                </div>
            </Tab>
            <Tab key="adresses" value="adresses">
                <div className="flex items-center gap-2">
                    {React.createElement(HomeIcon, { className: "w-5 h-5" })}
                        My adresses
                </div>
            </Tab>
      </TabsHeader>
      <TabsBody>

          <TabPanel key="profile" value="profile" className="p-2 mt-4">
            <AccountDetails user={user}/>
          </TabPanel>
          <TabPanel key="password" value="password" className="p-2 mt-4">
            <ChangePassword/>
          </TabPanel>
          <TabPanel key="adresses" value="adresses" className="p-2 mt-4">
            {
              adresses?.data?.length>0 ?(
                adresses?.data?.map((adress)=>{
                  return <Adresses adress={adress}/>
                })
              ):(<h2>There are no adresses</h2>)
            }
            <AddAdress/>
          </TabPanel>

      </TabsBody>
    </Tabs>
  );
}