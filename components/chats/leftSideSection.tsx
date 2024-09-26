import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../ui/context-menu";
export default function LeftSideSection() {
  return (
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
            <div className="flex flex-row ml-2 items-center">
              <p className="select-none text-sm opacity-70">Direct Messages</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-28 opacity-70 mt-2"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
            {/* Conversations */}
            <div className="m-4 space-y-1">
              {/* User */}
              <div>
                <ContextMenu>
                  <ContextMenuTrigger>
                    <div
                      className="flex flex-row space-x-4 hover:bg-primary-foreground px-4 py-2 rounded-[0.75rem] data-[active=true]:bg-primary-foreground"
                      data-active="true"
                    >
                      <Avatar className="!w-9 !h-9 mt">
                        <AvatarImage
                          src="/img/AbuJamal-Avatar.jpg"
                          alt="@username"
                        />
                        <AvatarFallback className="bg-primary">
                          A
                        </AvatarFallback>
                      </Avatar>
                      <span className="mt-2 select-none text-sm">Username</span>
                    </div>
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <ContextMenuItem inset>Profile</ContextMenuItem>
                    <ContextMenuItem inset>Voice Call</ContextMenuItem>
                    <ContextMenuItem disabled>
                      <hr className="w-full h-[1.5px] bg-secondary-foreground opacity-15" />
                    </ContextMenuItem>
                    <ContextMenuItem inset>Remove Friend</ContextMenuItem>
                    <ContextMenuItem inset>Block</ContextMenuItem>
                    <ContextMenuItem disabled>
                      <hr className="w-full h-[1.5px] bg-secondary-foreground" />
                    </ContextMenuItem>
                    <ContextMenuItem inset>Copy ID</ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              </div>
              <div>
                <ContextMenu>
                  <ContextMenuTrigger>
                    <div
                      className="flex flex-row space-x-4 hover:bg-primary-foreground px-4 py-2 rounded-[0.75rem] data-[active=true]:bg-primary-foreground"
                      data-active="false"
                    >
                      <Avatar className="!w-9 !h-9 mt">
                        <AvatarImage
                          src="/img/AbuJamal-Avatar.jpg"
                          alt="@username"
                        />
                        <AvatarFallback className="bg-primary">
                          A
                        </AvatarFallback>
                      </Avatar>
                      <span className="mt-2 select-none text-sm">Username</span>
                    </div>
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <ContextMenuItem inset>Profile</ContextMenuItem>
                    <ContextMenuItem inset>Voice Call</ContextMenuItem>
                    <ContextMenuItem disabled>
                      <hr className="w-full h-[1.5px] bg-secondary-foreground opacity-15" />
                    </ContextMenuItem>
                    <ContextMenuItem inset>Remove Friend</ContextMenuItem>
                    <ContextMenuItem inset>Block</ContextMenuItem>
                    <ContextMenuItem disabled>
                      <hr className="w-full h-[1.5px] bg-secondary-foreground" />
                    </ContextMenuItem>
                    <ContextMenuItem inset>Copy ID</ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </aside>
  );
}
