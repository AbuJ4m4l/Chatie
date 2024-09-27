import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../../ui/button";
import BlockedTab from "./BlockedTab";
import PendingTab from "./PendingTab";
import AllTab from "./AllTab";
import OnlineTab from "./OnlineTab";
export default function FriendsList() {
  return (
    <section className="min-w-full">
      <div className="py-2  bg-secondary min-h-full min-w-full flex flex-row">
        <hr className="w-full fixed h-[2px] mt-11 bg-secondary-foreground opacity-25" />
        <Tabs defaultValue="online">
          <TabsList className="grid w-[500px] grid-cols-5 px-4">
            <TabsTrigger value="online">Online</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="blocked">Blocked</TabsTrigger>
            <TabsTrigger
              value="add-friend"
              className="bg-primary ml-3 text-primary-foreground data-[state=active]:bg-transparent data-[state=active]:text-primary !px-12"
            >
              Add Friend
            </TabsTrigger>
          </TabsList>

          <TabsContent value="online">
            <OnlineTab />
          </TabsContent>
          <TabsContent value="all">
            <AllTab />
          </TabsContent>
          <TabsContent value="pending">
            <PendingTab />
          </TabsContent>
          <TabsContent value="blocked">
            <BlockedTab />
          </TabsContent>
          <TabsContent value="add-friend">
            <div>
              <div>
                <h2 className="select-none mt-12 ml-8 font-bold">Add Friend</h2>
                <p className="select-none text-[13px] opacity-70 font-light ml-8 mt-2">
                  You can add friends by there Chatie usernames
                </p>
              </div>
              <div className="flex justify-center items-center space-x-2 mt-8">
                <Input
                  type="text"
                  placeholder="Username"
                  className="w-[300px]"
                />
                <Button type="submit">Add Friend</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
