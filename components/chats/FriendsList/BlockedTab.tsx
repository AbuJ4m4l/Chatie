import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "../../ui/avatar";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "../../ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../../ui/context-menu";
export default function BlockedTab() {
  return (
    <>
      <ScrollArea className="h-screen">
        <div className="flex justify-center">
          <Input
            type="search"
            placeholder="Search..."
            className="mt-10 w-[400px]"
          />
        </div>
        <div className="flex flex-col ml-10">
          {/* User */}
          <div className="w-[500px]">
            <ContextMenu>
              <ContextMenuTrigger>
                <hr className="w-[650px] h-[2px] mt-4 absolute ml-1 bg-secondary-foreground opacity-25 mx-24" />
                <div className="flex flex-row items-center mt-8 ml-2 w-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/img/AbuJamal-avatar.jpg" alt="avatar" />

                    <AvatarFallback>
                      <Image
                        src="/img/AbuJamal-Avatar.jpg"
                        width={40}
                        height={40}
                        alt="@username"
                      />
                    </AvatarFallback>
                  </Avatar>

                  <p className="text-secondary-foreground text-sm ml-4">
                    Username
                  </p>
                  <div className="flex absolute">
                    <Button className="hover:text-red-600 rounded-[100%] ml-[425px] w-[40px] h-[40px] !p-0">
                      {" "}
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
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="8.5" cy="7" r="4"></circle>
                        <line x1="23" y1="11" x2="17" y2="11"></line>
                      </svg>
                    </Button>
                  </div>
                </div>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem inset>Profile</ContextMenuItem>
                <ContextMenuItem inset>Message</ContextMenuItem>
                <ContextMenuItem disabled>
                  <hr className="w-full h-[1.5px] bg-secondary-foreground opacity-15" />
                </ContextMenuItem>
                <ContextMenuItem inset>Add Friend</ContextMenuItem>
                <ContextMenuItem inset>Unblock</ContextMenuItem>
                <ContextMenuItem disabled>
                  <hr className="w-full h-[1.5px] bg-secondary-foreground" />
                </ContextMenuItem>
                <ContextMenuItem inset>Copy ID</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>{" "}
          <div className="w-[500px]">
            <ContextMenu>
              <ContextMenuTrigger>
                <hr className="w-[650px] h-[2px] mt-4 absolute ml-1 bg-secondary-foreground opacity-25 mx-24" />
                <div className="flex flex-row items-center mt-8 ml-2 w-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/img/AbuJamal-avatar.jpg" alt="avatar" />

                    <AvatarFallback>
                      <Image
                        src="/img/AbuJamal-Avatar.jpg"
                        width={40}
                        height={40}
                        alt="@username"
                      />
                    </AvatarFallback>
                  </Avatar>

                  <p className="text-secondary-foreground text-sm ml-4">
                    Username
                  </p>
                  <div className="flex absolute">
                    <Button className="hover:text-red-600 rounded-[100%] ml-[425px] w-[40px] h-[40px] !p-0">
                      {" "}
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
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="8.5" cy="7" r="4"></circle>
                        <line x1="23" y1="11" x2="17" y2="11"></line>
                      </svg>
                    </Button>
                  </div>
                </div>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem inset>Profile</ContextMenuItem>
                <ContextMenuItem inset>Message</ContextMenuItem>
                <ContextMenuItem disabled>
                  <hr className="w-full h-[1.5px] bg-secondary-foreground opacity-15" />
                </ContextMenuItem>
                <ContextMenuItem inset>Add Friend</ContextMenuItem>
                <ContextMenuItem inset>Unblock</ContextMenuItem>
                <ContextMenuItem disabled>
                  <hr className="w-full h-[1.5px] bg-secondary-foreground" />
                </ContextMenuItem>
                <ContextMenuItem inset>Copy ID</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        </div>
      </ScrollArea>
    </>
  );
}
