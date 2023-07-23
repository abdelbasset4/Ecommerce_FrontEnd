import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {

  UserCircleIcon,
  LockClosedIcon
} from "@heroicons/react/24/solid";
import AccountDetails from "./AccountDetails";
import ChangePassword from "./ChangePassword";

export default function TabsProfiles() {

  return (
    <Tabs value="">
      <TabsHeader className="flex justify-center max-w-94 gap-3 mx-auto">
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
      </TabsHeader>
      <TabsBody>

          <TabPanel key="profile" value="profile">
            <AccountDetails/>
          </TabPanel>
          <TabPanel key="password" value="password">
            <ChangePassword/>
          </TabPanel>

      </TabsBody>
    </Tabs>
  );
}