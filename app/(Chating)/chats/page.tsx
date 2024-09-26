import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function ChatsHome() {
  return (
    <>
      <section>
        <aside>
          <div className="bg-secondary w-64 h-screen">
            <div className="flex justify-center">
              <Input
                className="w-[224px] h-8 mt-3"
                placeholder="Find or start a conversation "
              />
            </div>
            <hr className="w-full h-[1.5px] bg-secondary-foreground opacity-25 mt-2" />
            <div>
              <ScrollArea>
                <Tabs defaultValue="friends" className="mt-3">
                  <TabsList className="grid w-full grid-row-2 w-full">
                    <TabsTrigger value="friends">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>{" "}
                      <span className="ml-2">Friends</span>
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="friends"></TabsContent>
                </Tabs>
              </ScrollArea>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
