import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "../../ui/avatar";
import Image from "next/image";
import { Button } from "../../ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../../ui/context-menu";
export default function PendingTab() {
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
                    <Link href="/chats/:userID">
                      <Button className="rounded-[100%] ml-[380px] w-[40px] h-[40px] !p-0">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </Button>
                    </Link>

                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        {" "}
                        <div className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-[100%] ml-2 w-[40px] h-[40px] !p-0">
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Profile</DropdownMenuItem>

                        <DropdownMenuItem>Start a voice call</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          Block
                        </DropdownMenuItem>
                        <DropdownMenuItem>Copy ID</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
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
                    <Link href="/chats/:userID">
                      <Button className="rounded-[100%] ml-[380px] w-[40px] h-[40px] !p-0">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </Button>
                    </Link>

                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        {" "}
                        <div className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-[100%] ml-2 w-[40px] h-[40px] !p-0">
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Profile</DropdownMenuItem>

                        <DropdownMenuItem>Start a voice call</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          Block
                        </DropdownMenuItem>
                        <DropdownMenuItem>Copy ID</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
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
    </>
  );
}
